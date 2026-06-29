#!/usr/bin/env python3
"""
AI Market Intelligence Sync
=============================
毎日実行されるスクリプト。以下を行います：
1. Jina AI Reader で主要AIツールの公式サイトをスクレイピング
2. Perplexity API または Jina Search で「新着・トレンドAIツール」をグローバル検索
3. Gemini (Vertex AI) で各ツールを分析・ランキング付け
4. src/data/ai_market_intelligence.json を更新
5. 新しい挑戦者ツールを検出した場合、extra_articles.json にアラート記事を追加

必要な環境変数（post_one_article.py と同じGCP設定を流用）:
  GCP_PROJECT        : GCPプロジェクトID（既存のSecretを使用）
  GCP_LOCATION       : Vertex AIリージョン（デフォルト: us-central1）
  PERPLEXITY_API_KEY : Perplexity Sonar API キー（任意、未設定時はJina Searchを使用）
  JINA_API_KEY       : Jina AI API キー（任意、未設定時は匿名使用）
"""

import json
import os
import sys
import time
import urllib.request
import urllib.error
import urllib.parse
from datetime import datetime, timezone, timedelta
from pathlib import Path

from google import genai
from google.genai import types
from image_utils import pick_image

# ── 定数 ─────────────────────────────────────────────────────────────────
REPO_ROOT = Path(__file__).parent.parent
DATA_DIR = REPO_ROOT / "src" / "data"
MARKET_JSON = DATA_DIR / "ai_market_intelligence.json"
ARTICLES_JSON = DATA_DIR / "extra_articles.json"

JST = timezone(timedelta(hours=9))
GCP_PROJECT = os.environ.get("GCP_PROJECT", "")
GCP_LOCATION = os.environ.get("GCP_LOCATION", "us-central1")
MODEL_NAME = "gemini-2.5-pro"

# 追跡する既知のAIツール
KNOWN_TOOLS = [
    {"name": "Claude Code", "url": "https://claude.ai/code", "segment": "development"},
    {"name": "Replit Agent", "url": "https://replit.com/ai", "segment": "development"},
    {"name": "Lovable", "url": "https://lovable.dev", "segment": "development"},
    {"name": "Manus", "url": "https://manus.im", "segment": "productivity"},
    {"name": "Midjourney", "url": "https://www.midjourney.com", "segment": "creative"},
    {"name": "Sora", "url": "https://openai.com/sora", "segment": "creative"},
]

# 新着ツール発見用の検索クエリ
DISCOVERY_QUERIES = [
    "new AI tools release April 2026",
    "trending AI agents 2026",
    "best AI coding assistants 2026",
]


# ── HTTP ヘルパー ──────────────────────────────────────────────────────────
def http_get(url: str, headers: dict | None = None, timeout: int = 30) -> str:
    req = urllib.request.Request(url, headers=headers or {})
    with urllib.request.urlopen(req, timeout=timeout) as resp:
        return resp.read().decode("utf-8", errors="replace")


def http_post_json(url: str, payload: dict, headers: dict | None = None, timeout: int = 60) -> dict:
    data = json.dumps(payload).encode("utf-8")
    req = urllib.request.Request(url, data=data, headers={
        "Content-Type": "application/json",
        **(headers or {}),
    })
    with urllib.request.urlopen(req, timeout=timeout) as resp:
        return json.loads(resp.read().decode("utf-8"))


# ── Jina AI Reader ──────────────────────────────────────────────────────────
def jina_read(url: str, jina_api_key: str | None = None) -> str:
    reader_url = f"https://r.jina.ai/{url}"
    headers = {"Accept": "text/plain"}
    if jina_api_key:
        headers["Authorization"] = f"Bearer {jina_api_key}"
    try:
        print(f"  [Jina] Reading: {url[:60]}...")
        content = http_get(reader_url, headers=headers, timeout=30)
        return content[:8000]
    except Exception as e:
        print(f"  [Jina] Error reading {url}: {e}")
        return ""


def jina_search(query: str, jina_api_key: str | None = None) -> str:
    search_url = f"https://s.jina.ai/{urllib.parse.quote(query)}"
    headers = {"Accept": "application/json"}
    if jina_api_key:
        headers["Authorization"] = f"Bearer {jina_api_key}"
    try:
        print(f"  [Jina Search] Query: {query[:60]}...")
        content = http_get(search_url, headers=headers, timeout=30)
        return content[:6000]
    except Exception as e:
        print(f"  [Jina Search] Error: {e}")
        return ""


# ── Perplexity Sonar API ──────────────────────────────────────────────────────
def perplexity_search(query: str, api_key: str) -> str:
    try:
        print(f"  [Perplexity] Query: {query[:60]}...")
        result = http_post_json(
            "https://api.perplexity.ai/chat/completions",
            payload={
                "model": "sonar",
                "messages": [
                    {"role": "system", "content": "You are a research assistant providing factual, up-to-date information about AI tools."},
                    {"role": "user", "content": query},
                ],
                "max_tokens": 1000,
                "search_recency_filter": "day",
            },
            headers={"Authorization": f"Bearer {api_key}"},
        )
        return result["choices"][0]["message"]["content"]
    except Exception as e:
        print(f"  [Perplexity] Error: {e}")
        return ""


# ── Gemini (Vertex AI) ────────────────────────────────────────────────────────
def gemini_analyze(prompt: str, gemini_client: genai.Client, json_mode: bool = False) -> str:
    """Gemini で分析を実行（post_one_article.py と同じパターン）"""
    try:
        config_kwargs: dict = {"temperature": 0.3, "max_output_tokens": 4096}
        if json_mode:
            config_kwargs["response_mime_type"] = "application/json"
        response = gemini_client.models.generate_content(
            model=MODEL_NAME,
            contents=prompt,
            config=types.GenerateContentConfig(**config_kwargs),
        )
        return response.text or ""
    except Exception as e:
        print(f"  [Gemini] Error: {e}")
        return ""


def extract_json(raw: str) -> dict:
    """マークダウンブロックを除去してJSONをパース"""
    # ```json...``` ブロックを除去
    cleaned = raw.strip()
    if cleaned.startswith("```"):
        cleaned = cleaned.split("```", 2)[-1] if cleaned.count("```") >= 2 else cleaned
        if cleaned.startswith("json"):
            cleaned = cleaned[4:]
        end = cleaned.rfind("```")
        if end >= 0:
            cleaned = cleaned[:end]
        cleaned = cleaned.strip()
    try:
        return json.loads(cleaned)
    except json.JSONDecodeError:
        start = cleaned.find("{")
        end = cleaned.rfind("}") + 1
        if start >= 0 and end > start:
            return json.loads(cleaned[start:end])
    return {}


# ── スクレイピング ──────────────────────────────────────────────────────────
def scrape_tool_pages(jina_api_key: str | None) -> dict[str, str]:
    print("\n[1] 既知ツールのスクレイピング...")
    results = {}
    for tool in KNOWN_TOOLS:
        content = jina_read(tool["url"], jina_api_key)
        results[tool["name"]] = content
        time.sleep(1)
    return results


def search_new_tools(perplexity_key: str | None, jina_api_key: str | None) -> list[str]:
    print("\n[2] 新着ツールの発見...")
    search_results = []
    for query in DISCOVERY_QUERIES:
        if perplexity_key:
            result = perplexity_search(query, perplexity_key)
        else:
            result = jina_search(query, jina_api_key)
        if result:
            search_results.append(result)
        time.sleep(2)
    return search_results


# ── Gemini 分析 ───────────────────────────────────────────────────────────
def analyze_market(
    tool_contents: dict[str, str],
    search_results: list[str],
    current_data: dict,
    gemini_client: genai.Client,
) -> dict:
    print("\n[3] Gemini による市場分析...")

    tool_context = "\n\n".join(
        f"=== {name} ===\n{content[:2000]}"
        for name, content in tool_contents.items()
        if content
    )
    search_context = "\n\n---\n\n".join(search_results[:3]) if search_results else "（検索結果なし）"

    current_tool_names = []
    for seg in current_data.get("segments", []):
        for tool in seg.get("tools", []):
            current_tool_names.append(tool["name"])

    prompt = f"""あなたはAIツール市場のエキスパートアナリストです。
以下の最新情報を分析し、指定されたJSON形式でレポートを生成してください。
【重要】純粋なJSONのみ出力。```json などのマークダウンは絶対禁止。コメント禁止。

## 公式サイトから取得した最新情報:
{tool_context}

## Web検索から取得した新着情報:
{search_context}

## 現在データベースに登録されているツール:
{', '.join(current_tool_names)}

## 出力要件:
以下のJSON構造で回答してください。必ずJSONのみを出力し、マークダウンのコードブロックは使用しないこと。

{{
  "segments": [
    {{
      "id": "development",
      "label": "開発",
      "icon": "code",
      "winner": {{"name": "ツール名", "tagline": "今月の最強選択"}},
      "reason": "100字以内の判定理由（日本語）",
      "tools": [
        {{
          "id": "tool-id",
          "name": "ツール名",
          "price": "価格情報",
          "newFeature": "最新アップデート（30字以内）",
          "rating": 5,
          "badge": "AI's Choice または null",
          "summary": "50字以内の説明（日本語）"
        }}
      ]
    }},
    {{
      "id": "productivity",
      "label": "事務効率化",
      "icon": "briefcase",
      "winner": {{"name": "ツール名", "tagline": "今月の最強選択"}},
      "reason": "100字以内の判定理由（日本語）",
      "tools": []
    }},
    {{
      "id": "creative",
      "label": "クリエイティブ",
      "icon": "palette",
      "winner": {{"name": "ツール名", "tagline": "今月の最強選択"}},
      "reason": "100字以内の判定理由（日本語）",
      "tools": []
    }}
  ],
  "newToolsToday": [
    {{
      "name": "ツール名",
      "summary": "60字以内の説明（日本語）",
      "category": "development|productivity|creative",
      "price": "価格",
      "discoveredAt": "ISO 8601日時",
      "isChallenging": true,
      "challengingTool": "競合する既存ツール名 または null"
    }}
  ],
  "alerts": [
    {{
      "alertType": "challenger",
      "newTool": "挑戦者ツール名",
      "existingTool": "既存ツール名",
      "message": "下克上の兆し：[新ツール名]が[既存ツール名]を超える可能性（60字以内）"
    }}
  ],
  "aiJudgment": "今月の市場総評（80字以内、日本語）"
}}

注意:
- newToolsToday は本当に新しく発見したツールのみ（既知のツールは除外）
- 新ツールが見つからない場合は newToolsToday を空配列 [] にする
- alerts は isChallenging=true のツールがある場合のみ記載
- rating は 1〜5 の整数
- 各セグメントのトップツールに badge: "AI's Choice" を設定
"""

    raw = gemini_analyze(prompt, gemini_client, json_mode=True)

    try:
        result = extract_json(raw)
        if result:
            return result
    except json.JSONDecodeError as e:
        print(f"  [Gemini] JSON parse error: {e}")
        print(f"  Raw response: {raw[:500]}")
    return {}


# ── アラート記事の生成 ────────────────────────────────────────────────────
def generate_alert_article(alert: dict, gemini_client: genai.Client) -> dict | None:
    print(f"\n[4] アラート記事を生成: {alert['newTool']} vs {alert['existingTool']}")

    prompt = f"""AIツール市場の最新動向について、以下の情報を元に日本語で記事を作成してください。

テーマ: 「{alert['newTool']}が{alert['existingTool']}を超える可能性」

以下のJSONフォーマットで出力してください（マークダウンブロックなし）:
{{
  "title": "記事タイトル（40字以内）",
  "summary": "記事の要約（100字以内）",
  "body": "記事本文（600〜800字）\\n\\n段落を改行2つで区切る",
  "tags": ["タグ1", "タグ2", "タグ3"],
  "source": "AI News Japan 自律分析"
}}
"""

    raw = gemini_analyze(prompt, gemini_client, json_mode=True)
    try:
        article_data = extract_json(raw)
        if article_data:
            now_jst = datetime.now(JST)
            return {
                "id": f"alert-{int(now_jst.timestamp())}",
                "title": article_data.get("title", ""),
                "summary": article_data.get("summary", ""),
                "body": article_data.get("body", ""),
                "source": article_data.get("source", "AI News Japan 自律分析"),
                "sourceUrl": "https://ai-news-site-wheat.vercel.app",
                "tags": article_data.get("tags", ["AI", "ツール比較"]),
                "publishedAt": now_jst.strftime("%Y-%m-%d"),
                "imageUrl": pick_image(
                    f"alert-{int(now_jst.timestamp())}",
                    article_data.get("tags", ["AI", "ツール比較"])
                ),
            }
    except Exception as e:
        print(f"  [Article Gen] Error: {e}")
    return None


# ── メイン処理 ────────────────────────────────────────────────────────────
def main():
    print("=" * 60)
    print("AI Market Intelligence Sync (Gemini / Vertex AI)")
    print(f"実行時刻: {datetime.now(JST).strftime('%Y/%m/%d %H:%M JST')}")
    print("=" * 60)

    # GCPプロジェクト確認
    if not GCP_PROJECT:
        print("ERROR: GCP_PROJECT が設定されていません")
        sys.exit(1)

    perplexity_key = os.environ.get("PERPLEXITY_API_KEY")
    jina_key = os.environ.get("JINA_API_KEY")

    # Gemini クライアント初期化（post_one_article.py と同じ）
    gemini_client = genai.Client(
        vertexai=True,
        project=GCP_PROJECT,
        location=GCP_LOCATION,
    )
    print(f"✅ Gemini クライアント初期化完了 (project={GCP_PROJECT})")

    # 現在のデータを読み込む
    current_data = {}
    if MARKET_JSON.exists():
        with open(MARKET_JSON, "r", encoding="utf-8") as f:
            current_data = json.load(f)

    # 1. ツールページをスクレイピング
    tool_contents = scrape_tool_pages(jina_key)

    # 2. 新着ツールを検索
    search_results = search_new_tools(perplexity_key, jina_key)

    # 3. Gemini で市場分析
    analysis = analyze_market(tool_contents, search_results, current_data, gemini_client)

    if not analysis:
        print("⚠️ Gemini の分析に失敗しました。既存データを保持して正常終了します。")
        sys.exit(0)

    # 4. 出力 JSON を構築
    now_jst = datetime.now(JST)
    output = {
        "updatedAt": now_jst.isoformat(),
        "aiJudgment": analysis.get("aiJudgment", "AIによる最新市場分析"),
        "segments": analysis.get("segments", current_data.get("segments", [])),
        "newToolsToday": analysis.get("newToolsToday", []),
        "alerts": analysis.get("alerts", []),
    }

    DATA_DIR.mkdir(parents=True, exist_ok=True)
    with open(MARKET_JSON, "w", encoding="utf-8") as f:
        json.dump(output, f, ensure_ascii=False, indent=2)
    print(f"\n✅ {MARKET_JSON} を更新しました")

    # 5. 下克上アラートがある場合は記事を生成
    alerts = output.get("alerts", [])
    if alerts and ARTICLES_JSON.exists():
        print(f"\n⚡ {len(alerts)} 件の下克上アラートを検出。記事を生成します...")
        with open(ARTICLES_JSON, "r", encoding="utf-8") as f:
            articles = json.load(f)

        new_articles_added = 0
        for alert in alerts[:2]:
            article = generate_alert_article(alert, gemini_client)
            if article:
                today = now_jst.strftime("%Y-%m-%d")
                already_exists = any(
                    a.get("publishedAt") == today and alert["newTool"] in a.get("title", "")
                    for a in articles
                )
                if not already_exists:
                    articles.append(article)
                    new_articles_added += 1
                    print(f"  ✅ 記事追加: {article['title']}")
            time.sleep(2)

        if new_articles_added > 0:
            with open(ARTICLES_JSON, "w", encoding="utf-8") as f:
                json.dump(articles, f, ensure_ascii=False, indent=2)
            print(f"✅ {new_articles_added} 件の記事を追加しました")

    print("\n✅ 完了!")
    print(f"  更新時刻: {now_jst.strftime('%Y/%m/%d %H:%M JST')}")
    print(f"  新着ツール: {len(output.get('newToolsToday', []))} 件")
    print(f"  アラート: {len(output.get('alerts', []))} 件")


if __name__ == "__main__":
    main()

#!/usr/bin/env python3
"""
英語のままになっている記事を日本語に翻訳して上書きするスクリプト。
"""
import json
import re
import time
import sys
from pathlib import Path

# Windows cp932対策
sys.stdout.reconfigure(encoding='utf-8', errors='replace')
sys.stderr.reconfigure(encoding='utf-8', errors='replace')

from google import genai
from google.genai import types

BASE_DIR = Path(__file__).parent.parent
EXTRA_ARTICLES_PATH = BASE_DIR / "src" / "data" / "extra_articles.json"

GCP_PROJECT  = "spreadsheet-bot-489912"
GCP_LOCATION = "us-central1"
MODEL_NAME   = "gemini-2.5-pro"

def is_japanese(text: str) -> bool:
    return bool(re.search(r'[\u3040-\u9fff]', text))

def translate_article(client, article: dict) -> dict:
    title   = article.get("title", "")
    summary = article.get("summary", "")
    body    = article.get("body", "")

    prompt = f"""以下の英語記事を自然な日本語に翻訳してください。
テック系メディアの編集長として、読者が「今すぐ試したい」と思うエネルギッシュな文体で翻訳してください。

【絶対ルール】
- 出力はすべて日本語のみ。英語を一切混入させないこと。
- 本文は900〜1000文字を目安にすること。
- 必ずJSON形式のみで返すこと（コードブロック不要）。

【入力】
タイトル: {title}
要約: {summary}
本文: {body}

【出力形式】
{{"title": "日本語タイトル", "summary": "日本語要約（2〜3文）", "body": "日本語本文"}}"""

    response = client.models.generate_content(
        model=MODEL_NAME,
        contents=prompt,
        config=types.GenerateContentConfig(
            max_output_tokens=16384,
            temperature=0.7,
        ),
    )

    text = response.text.strip()
    # コードブロック除去
    text = re.sub(r"^```(?:json)?\s*", "", text)
    text = re.sub(r"\s*```$", "", text)

    result = json.loads(text)
    article["title"]   = result["title"]
    article["summary"] = result["summary"]
    article["body"]    = result["body"]
    return article

def main():
    client = genai.Client(vertexai=True, project=GCP_PROJECT, location=GCP_LOCATION)

    articles = json.loads(EXTRA_ARTICLES_PATH.read_text(encoding="utf-8"))

    english_articles = [(i, a) for i, a in enumerate(articles) if not is_japanese(a.get("title", ""))]
    total = len(english_articles)
    print(f"翻訳対象: {total}件", flush=True)

    for done, (i, article) in enumerate(english_articles, 1):
        title = article.get("title", "")[:50]
        print(f"[{done}/{total}] {title}...", flush=True)
        try:
            articles[i] = translate_article(client, article)
            # 10件ごとに保存
            if done % 10 == 0:
                EXTRA_ARTICLES_PATH.write_text(
                    json.dumps(articles, ensure_ascii=False, indent=2),
                    encoding="utf-8"
                )
                print(f"  → {done}件保存完了", flush=True)
            time.sleep(2)  # レート制限対策
        except Exception as e:
            print(f"  ERROR: {e}", flush=True)
            time.sleep(5)
            continue

    # 最終保存
    EXTRA_ARTICLES_PATH.write_text(
        json.dumps(articles, ensure_ascii=False, indent=2),
        encoding="utf-8"
    )
    print(f"\n完了！{total}件を翻訳しました。", flush=True)

if __name__ == "__main__":
    main()

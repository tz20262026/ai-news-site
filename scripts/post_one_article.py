#!/usr/bin/env python3
"""
scripts/post_one_article.py
未掲載のAIツール1件を900〜1000字の日本語記事に生成し、
src/data/extra_articles.json に追加する。
（デプロイはGitHub pushでVercelが自動実行）

使い方:
  python scripts/post_one_article.py
"""

import json
import logging
import os
import sys
import time
from datetime import datetime
from pathlib import Path

from google import genai
from google.genai import types

# ---------------------------------------------------------------------------
# パス設定（ai-news-siteルートからの相対パス）
# ---------------------------------------------------------------------------
BASE_DIR            = Path(__file__).parent.parent
EXTRA_ARTICLES_PATH = BASE_DIR / "src" / "data" / "extra_articles.json"
DATA_DIR            = Path(__file__).parent / "data"
RAW_TOOLS_PATH      = DATA_DIR / "raw_tools.json"
POSTED_LOG          = DATA_DIR / "vercel_posted_ids.log"

GCP_PROJECT  = os.environ.get("GCP_PROJECT", "")
GCP_LOCATION = os.environ.get("GCP_LOCATION", "us-central1")
MODEL_NAME   = "gemini-2.5-pro"

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
    datefmt="%Y-%m-%d %H:%M:%S",
)
logger = logging.getLogger(__name__)

SYSTEM_INSTRUCTION = (
    "あなたはテック系人気メディアの編集長です。"
    "読者が「今すぐ試したい」と思うエネルギッシュな文章を書いてください。"
)

ARTICLE_PROMPT = """\
以下の海外AIツールについて、日本語のブログ記事を書いてください。

## ツール情報
- ツール名: {name}
- URL: {url}
- 英語概要: {description}
- カテゴリ: {tags}

## 条件
- 文字数は必ず900〜1000文字（スペース・記号を含む）
- 見出しや箇条書きは使わず、流れるような文章で書く
- 冒頭でツールの魅力を強く打ち出す
- 具体的な活用シーンを日本人読者向けに書く
- 最後に読者の行動を促す一文で締める
- 余計な前置き・後書き不要、本文のみ出力
"""

SOURCE_NAMES = {
    "producthunt":       "Product Hunt",
    "theresanaiforthat": "There's An AI For That",
    "techcrunch_ai":     "TechCrunch",
    "venturebeat_ai":    "VentureBeat",
    "theverge_ai":       "The Verge",
    "wired_ai":          "Wired",
    "openai":            "OpenAI Blog",
    "huggingface":       "Hugging Face",
    "deepmind":          "DeepMind",
    "meta_ai":           "Meta AI",
}

def source_name(s: str) -> str:
    return SOURCE_NAMES.get(s.lower(), s.replace("_", " ").title())

def load_posted() -> set:
    if not POSTED_LOG.exists():
        return set()
    return {l.strip() for l in POSTED_LOG.read_text(encoding="utf-8").splitlines() if l.strip()}

def append_posted(tool_id: str) -> None:
    with open(POSTED_LOG, "a", encoding="utf-8") as f:
        f.write(tool_id + "\n")

def main() -> int:
    if not GCP_PROJECT:
        logger.error("GCP_PROJECT が未設定です。")
        return 1

    if not RAW_TOOLS_PATH.exists():
        logger.error(f"データファイルが見つかりません: {RAW_TOOLS_PATH}")
        return 1

    tools  = json.loads(RAW_TOOLS_PATH.read_text(encoding="utf-8"))
    posted = load_posted()
    pending = [t for t in tools if t.get("id") not in posted and t.get("name")]

    if not pending:
        logger.info("未掲載のツールがありません。")
        return 0

    tool = pending[0]
    logger.info(f"対象: {tool['name']}")

    # 記事生成
    client = genai.Client(vertexai=True, project=GCP_PROJECT, location=GCP_LOCATION)
    prompt = ARTICLE_PROMPT.format(
        name=tool.get("name", ""),
        url=tool.get("url", ""),
        description=tool.get("description", "（概要なし）"),
        tags=", ".join(tool.get("tags", [])) or "AI",
    )
    response = client.models.generate_content(
        model=MODEL_NAME,
        contents=prompt,
        config=types.GenerateContentConfig(
            system_instruction=SYSTEM_INSTRUCTION,
            temperature=0.8,
            max_output_tokens=2048,
        ),
    )
    body = response.text.strip()
    logger.info(f"生成文字数: {len(body)}字")

    # extra_articles.json 更新
    existing = json.loads(EXTRA_ARTICLES_PATH.read_text(encoding="utf-8")) if EXTRA_ARTICLES_PATH.exists() else []

    article_id   = f"v_{tool.get('id', '')[:12]}_{int(time.time())}"
    published_at = (tool.get("published_at") or "")[:10] or datetime.now().strftime("%Y-%m-%d")
    tags         = tool.get("tags") or ["AI"]

    new_article = {
        "id":          article_id,
        "title":       tool["name"],
        "summary":     body[:150] + "…" if len(body) > 150 else body,
        "body":        body,
        "source":      source_name(tool.get("source", "")),
        "sourceUrl":   tool.get("url", ""),
        "tags":        tags[:5],
        "publishedAt": published_at,
    }

    updated = [new_article] + existing
    EXTRA_ARTICLES_PATH.write_text(json.dumps(updated, ensure_ascii=False, indent=2), encoding="utf-8")
    logger.info(f"extra_articles.json 更新: 合計{len(updated)}件")

    append_posted(tool.get("id", ""))
    logger.info(f"完了: {tool['name']}")
    return 0

if __name__ == "__main__":
    sys.exit(main())

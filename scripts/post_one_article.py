#!/usr/bin/env python3
"""
scripts/post_one_article.py
未掲載のAIツール1件を900〜1000字の日本語記事に生成し、
Imagen 3 で画像を生成して GCS にアップロードし、
src/data/extra_articles.json に追加する。
（デプロイはGitHub pushでVercelが自動実行）
"""

import json
import logging
import os
import re
import sys
import time
from datetime import datetime
from pathlib import Path

from google import genai
from google.genai import types
from image_utils import pick_image

# ---------------------------------------------------------------------------
# パス設定
# ---------------------------------------------------------------------------
BASE_DIR            = Path(__file__).parent.parent
EXTRA_ARTICLES_PATH = BASE_DIR / "src" / "data" / "extra_articles.json"
DATA_DIR            = Path(__file__).parent / "data"
RAW_TOOLS_PATH      = DATA_DIR / "raw_tools.json"
POSTED_LOG          = DATA_DIR / "vercel_posted_ids.log"

GCP_PROJECT    = os.environ.get("GCP_PROJECT", "")
GCP_LOCATION   = os.environ.get("GCP_LOCATION", "us-central1")
MODEL_NAME     = "gemini-2.5-pro"
IMAGE_MODEL    = "imagen-3.0-generate-001"
GCS_BUCKET     = f"{GCP_PROJECT}-news-images" if GCP_PROJECT else ""

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
    datefmt="%Y-%m-%d %H:%M:%S",
)
logger = logging.getLogger(__name__)

SYSTEM_INSTRUCTION = (
    "あなたはテック系人気メディアの編集長です。"
    "読者が「今すぐ試したい」と思うエネルギッシュな文章を書いてください。"
    "\n\n"
    "【絶対ルール】\n"
    "1. ソースが英語であっても、出力はすべて自然な日本語のみで行うこと。英語を一切混入させないこと。\n"
    "2. 記事本文の合計文字数は900〜1000文字を厳守すること。\n"
    "3. 箇条書きを一切使わず、読み物として深掘りした「解説文」形式で書くこと。\n"
    "4. 画像プロンプトは毎回、記事の具体的な文脈に基づいた新しい内容にすること。"
    "「AI」「ロボット」などの汎用イメージは避け、記事の内容を反映した具体的なシーン（例：カフェで作業する人、スマホを操作する手元、特定の業種の風景など）を英語で記述すること。"
    "必ず「Photorealistic, Cinematic lighting, High resolution」を含めること。"
)

ARTICLE_PROMPT = """\
以下の海外AIツールについて、指定のフォーマットで出力してください。

## ツール情報
- ツール名: {name}
- URL: {url}
- 英語概要: {description}
- カテゴリ: {tags}

## 出力フォーマット（この順番で、ラベルをそのまま使って出力すること）

[キャッチコピー]
日本人読者が「気になる！」と思う魅力的な一文タイトル。

[本文]
以下の構成で合計900〜1000文字の解説文を書くこと。箇条書き・見出し不可。流れるような文章で。
・導入（約150字）：このツールが解決する課題や背景を引き込む書き出しで。
・機能詳細（約400字）：主要機能・特徴・他ツールとの差別化を深掘り解説。
・活用シーン（約200字）：どんな職種・業種・シーンで役立つか具体的に。
・料金・開始方法（約150字）：無料プランの有無、料金体系、登録手順を簡潔に。
・まとめ（約100字）：魅力を一言で締め、読者の行動を促す一文で終わる。

[画像プロンプト]
記事の内容・活用シーン・ターゲットユーザーを具体的に反映した英語の画像生成プロンプト。
「AI」「ロボット」は避け、記事文脈に合った具体的なシーンを描写すること。
必ず「Photorealistic, Cinematic lighting, High resolution」を含めること。

---
出力はすべて日本語のみ（画像プロンプトの英語部分を除く）。余計な前置き不要。
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

def generate_and_upload_image(client: genai.Client, image_prompt: str, article_id: str) -> str:
    """Imagen 3 で画像生成 → GCS にアップロード → 公開URLを返す。失敗時は空文字。"""
    if not image_prompt or not GCS_BUCKET:
        return ""

    # 画像生成
    try:
        img_response = client.models.generate_images(
            model=IMAGE_MODEL,
            prompt=image_prompt,
            config=types.GenerateImagesConfig(
                number_of_images=1,
                aspect_ratio="16:9",
            ),
        )
        image_bytes = img_response.generated_images[0].image.image_bytes
        logger.info("画像生成: 成功")
    except Exception as e:
        logger.warning(f"画像生成スキップ: {e}")
        return ""

    # GCS にアップロード
    try:
        from google.cloud import storage
        gcs = storage.Client(project=GCP_PROJECT)

        bucket = gcs.bucket(GCS_BUCKET)
        if not bucket.exists():
            bucket = gcs.create_bucket(GCS_BUCKET, location="US")
            logger.info(f"GCSバケット作成: {GCS_BUCKET}")

        blob = bucket.blob(f"{article_id}.jpg")
        blob.upload_from_string(image_bytes, content_type="image/jpeg")
        blob.make_public()
        url = blob.public_url
        logger.info(f"画像URL: {url}")
        return url
    except Exception as e:
        logger.warning(f"画像アップロードスキップ: {e}")
        return ""

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

    client = genai.Client(vertexai=True, project=GCP_PROJECT, location=GCP_LOCATION)

    # 記事テキスト生成
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
            max_output_tokens=16384,
        ),
    )
    raw_text = response.text.strip()
    logger.info(f"生成文字数: {len(raw_text)}字")

    # セクション抽出
    def extract_section(label: str, text: str) -> str:
        m = re.search(rf"\[{label}\]\s*\n(.*?)(?=\n\[|\Z)", text, re.DOTALL)
        return m.group(1).strip() if m else ""

    catchcopy    = extract_section("キャッチコピー", raw_text)
    body         = extract_section("本文", raw_text)
    image_prompt = extract_section("画像プロンプト", raw_text)

    if not body:
        body = raw_text

    title   = catchcopy if catchcopy else tool["name"]
    summary = catchcopy[:150] + "…" if len(catchcopy) > 150 else catchcopy
    if not summary:
        summary = body[:150] + "…" if len(body) > 150 else body

    logger.info(f"キャッチコピー: {catchcopy[:40]}…" if catchcopy else "キャッチコピー: (なし)")
    logger.info(f"本文文字数: {len(body)}字")

    # 記事ID確定
    article_id   = f"v_{tool.get('id', '')[:12]}_{int(time.time())}"
    published_at = datetime.now().strftime("%Y-%m-%d")
    tags         = tool.get("tags") or ["AI"]

    # 画像生成（失敗時はUnsplashフォールバック）
    image_url = generate_and_upload_image(client, image_prompt, article_id)
    if not image_url:
        image_url = pick_image(article_id, tags)

    # extra_articles.json 更新
    existing = json.loads(EXTRA_ARTICLES_PATH.read_text(encoding="utf-8")) if EXTRA_ARTICLES_PATH.exists() else []

    new_article = {
        "id":          article_id,
        "title":       title,
        "summary":     summary,
        "body":        body,
        "source":      source_name(tool.get("source", "")),
        "sourceUrl":   tool.get("url", ""),
        "tags":        tags[:5],
        "publishedAt": published_at,
        "imagePrompt": image_prompt,
        "imageUrl":    image_url,
    }

    updated = [new_article] + existing
    EXTRA_ARTICLES_PATH.write_text(json.dumps(updated, ensure_ascii=False, indent=2), encoding="utf-8")
    logger.info(f"extra_articles.json 更新: 合計{len(updated)}件")

    append_posted(tool.get("id", ""))
    logger.info(f"完了: {tool['name']}")
    return 0

if __name__ == "__main__":
    sys.exit(main())

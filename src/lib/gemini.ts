/**
 * Gemini 要約エンジン
 * Google AI Studio の APIキー（GEMINI_API_KEY）で動作します。
 * Vertex AI を使う場合は GOOGLE_CLOUD_PROJECT を設定してください。
 */

import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = process.env.GEMINI_API_KEY;

function getClient() {
  if (!API_KEY) throw new Error("GEMINI_API_KEY が設定されていません");
  return new GoogleGenerativeAI(API_KEY);
}

export type SummarizeResult = {
  title: string;     // キャッチーな日本語タイトル
  summary: string;   // リード文（2〜3文）
  body: string;      // 詳細本文（Markdown）
  tags: string;      // カンマ区切りタグ（最大5個）
};

/**
 * 英語ニュース記事を日本語に要約・変換する
 * @param rawText 元の英語記事テキスト（URL or 本文）
 * @param sourceName 情報元メディア名
 */
export async function summarizeArticle(
  rawText: string,
  sourceName: string = "Unknown"
): Promise<SummarizeResult> {
  const genAI = getClient();
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = `あなたはAI・テクノロジー専門の日本語メディア「AI News Japan」の編集者です。
以下の英語記事を日本語に変換し、JSON形式で出力してください。

【bodyの構成ルール（必ず守る）】
- 600〜900文字程度で、2〜3個の見出しセクションに分ける
- 各見出しは「**見出しテキスト（10〜20文字）**」という形で、前後を空行(\\n\\n)で区切った独立した1行にする（見出し行に見出し以外の文章を含めない）
- 見出しの直後に、その見出しに対応する本文段落を続ける（段落内では**太字**でポイント強調・箇条書きも活用可）
- 見出し例：「**何が発表されたか**」「**なぜ重要なのか**」「**今後の展望**」など記事内容に応じて具体的に

【出力形式（必ずこのJSONのみ出力）】
{
  "title": "キャッチーで検索されやすい日本語タイトル（40文字以内）",
  "summary": "3行以内のリード文。読者が続きを読みたくなるように書く",
  "body": "本文（上記の構成ルールに従ったMarkdown）",
  "tags": "関連タグ5つをカンマ区切りで（例: OpenAI,LLM,生産性,画像生成,Google）"
}

【元記事（情報元: ${sourceName}）】
${rawText.slice(0, 4000)}

JSON のみを出力してください。コードブロックや説明文は不要です。`;

  const result = await model.generateContent(prompt);
  const text = result.response.text().trim();

  // コードブロックを除去してパース
  const json = text.replace(/^```json?\s*/i, "").replace(/\s*```$/, "");
  return JSON.parse(json) as SummarizeResult;
}

/**
 * URLから記事を取得して要約する
 * @param url 英語記事のURL
 * @param sourceName 情報元メディア名
 */
export async function summarizeFromUrl(
  url: string,
  sourceName: string
): Promise<SummarizeResult & { source_url: string; source_name: string }> {
  // URLをテキストとして渡す（Gemini がURLの内容を参照）
  const genAI = getClient();
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = `あなたはAI・テクノロジー専門の日本語メディア「AI News Japan」の編集者です。
以下のURLの記事を要約し、JSON形式で出力してください。

URL: ${url}
情報元: ${sourceName}

【bodyの構成ルール（必ず守る）】
- 600〜900文字程度で、2〜3個の見出しセクションに分ける
- 各見出しは「**見出しテキスト（10〜20文字）**」という形で、前後を空行(\\n\\n)で区切った独立した1行にする（見出し行に見出し以外の文章を含めない）
- 見出しの直後に、その見出しに対応する本文段落を続ける（段落内では**太字**でポイント強調・箇条書きも活用可）
- 見出し例：「**何が発表されたか**」「**なぜ重要なのか**」「**今後の展望**」など記事内容に応じて具体的に

【出力形式（必ずこのJSONのみ出力）】
{
  "title": "キャッチーで検索されやすい日本語タイトル（40文字以内）",
  "summary": "3行以内のリード文。読者が続きを読みたくなるように書く",
  "body": "本文（上記の構成ルールに従ったMarkdown）",
  "tags": "関連タグ5つをカンマ区切りで（例: OpenAI,LLM,生産性,画像生成,Google）"
}

JSON のみを出力してください。`;

  const result = await model.generateContent(prompt);
  const text = result.response.text().trim();
  const json = text.replace(/^```json?\s*/i, "").replace(/\s*```$/, "");
  const parsed = JSON.parse(json) as SummarizeResult;

  return { ...parsed, source_url: url, source_name: sourceName };
}

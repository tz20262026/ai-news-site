import type { Metadata } from "next";
import Link from "next/link";
import AiToolDiagnosisClient from "./AiToolDiagnosisClient";

export const metadata: Metadata = {
  title: "AIツール診断【7つの質問であなたに最適なAIがわかる】",
  description:
    "7つの質問に答えるだけで、ChatGPT・Claude・Gemini・Perplexity・GitHub Copilotの中からあなたの使い方に最適なAIツールを無料診断。所要時間は約1分、登録不要ですぐに結果がわかります。",
  keywords: [
    "AIツール診断",
    "ChatGPT Claude Gemini どっち",
    "AIツール 選び方",
    "AIツール おすすめ 診断",
    "Perplexity Copilot 比較",
    "自分に合うAI",
  ],
  alternates: {
    canonical: "https://ai-news-site-wheat.vercel.app/ai-tool-diagnosis",
  },
  openGraph: {
    title: "AIツール診断【7つの質問であなたに最適なAIがわかる】",
    description:
      "ChatGPT・Claude・Gemini・Perplexity・GitHub Copilotの中から、あなたの使い方に最適なAIツールを無料診断。約1分・登録不要。",
    type: "website",
    locale: "ja_JP",
    url: "https://ai-news-site-wheat.vercel.app/ai-tool-diagnosis",
    images: [
      {
        url: "https://ai-news-site-wheat.vercel.app/opengraph-image",
        width: 1200,
        height: 630,
        alt: "AIツール診断",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AIツール診断【7つの質問であなたに最適なAIがわかる】",
    description:
      "ChatGPT・Claude・Gemini・Perplexity・GitHub Copilotの中から最適なAIツールを無料診断。約1分・登録不要。",
    images: ["https://ai-news-site-wheat.vercel.app/opengraph-image"],
  },
};

const FAQS: { question: string; answer: string }[] = [
  {
    question: "AIツール診断はどうやって最適なツールを判定していますか？",
    answer:
      "用途（プログラミング・文章作成・リサーチ・画像生成・日常会話・ビジネス資料作成）、利用頻度、料金への考え方、日本語重視度、長文処理の必要性、Google Workspaceの利用有無、コーディング支援の必要性という7つの観点から回答内容をスコアリングし、ChatGPT・Claude・Gemini・Perplexity・GitHub Copilotの中から最もスコアの高いツールを提示しています。",
  },
  {
    question: "診断結果は1つのツールしか使ってはいけないということですか？",
    answer:
      "いいえ、そういう意味ではありません。実際にAI活用の上級者は「リサーチはPerplexity → 文章作成はClaude → コーディングはGitHub Copilot」のように複数ツールを使い分けています。診断結果はあくまで最初の1本を選ぶ目安としてご活用ください。",
  },
  {
    question: "診断で個人情報の入力は必要ですか？",
    answer:
      "不要です。質問に答えるだけで、メールアドレスなどの登録なしにその場で結果が表示されます。所要時間は約1分です。",
  },
  {
    question: "診断結果と実際の比較表、どちらを見ればいいですか？",
    answer:
      "手軽に1つの答えが欲しい方は本診断、料金・日本語対応・ファイル処理・コンテキスト長などを自分の目で見比べたい方は、詳細な比較データをまとめた「主要AIツール徹底比較」ページをあわせてご覧ください。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const webAppJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "AIツール診断",
  url: "https://ai-news-site-wheat.vercel.app/ai-tool-diagnosis",
  applicationCategory: "UtilityApplication",
  operatingSystem: "Web",
  description:
    "7つの質問に答えるだけで、ChatGPT・Claude・Gemini・Perplexity・GitHub Copilotの中からあなたの使い方に最適なAIツールを無料診断するツール。",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "JPY",
  },
  isPartOf: {
    "@id": "https://ai-news-site-wheat.vercel.app/#website",
  },
};

const RELATED_TOOL_GUIDES: { href: string; label: string; emoji: string }[] = [
  { href: "/chatgpt-guide", label: "ChatGPT完全ガイド", emoji: "🤖" },
  { href: "/claude-guide", label: "Claude完全ガイド", emoji: "🧠" },
  { href: "/gemini-guide", label: "Gemini完全ガイド", emoji: "✨" },
  { href: "/perplexity-guide", label: "Perplexityガイド", emoji: "🔍" },
  { href: "/copilot-guide", label: "GitHub Copilotガイド", emoji: "🐙" },
  { href: "/ai-tools-comparison", label: "5大AIツール徹底比較", emoji: "⚖️" },
];

export default function AiToolDiagnosisPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppJsonLd) }}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-0">
        {/* パンくず的ナビ */}
        <div className="flex items-center gap-3 mb-5 flex-wrap">
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
          >
            ← 記事一覧に戻る
          </Link>
          <span className="text-gray-300 dark:text-gray-300">|</span>
          <Link
            href="/tools"
            className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
          >
            AIツール比較一覧
          </Link>
        </div>

        {/* ページヘッダー */}
        <div className="mb-8 text-center">
          <span className="inline-block text-xs font-bold bg-blue-600 text-white px-3 py-1 rounded-full mb-3">
            無料診断ツール
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white mb-3 leading-tight">
            AIツール診断
          </h1>
          <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 max-w-lg mx-auto leading-relaxed">
            ChatGPT・Claude・Gemini・Perplexity・GitHub Copilot——結局どれを使えばいいのか迷っていませんか？
            7つの質問に答えるだけで、あなたの使い方に最適な1本をAIが診断します。
          </p>
        </div>

        {/* 診断本体（クライアントコンポーネント） */}
        <AiToolDiagnosisClient />

        {/* 各AIツールのガイド一覧（クロール・回遊導線） */}
        <div className="mt-12 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-6">
          <h2 className="text-base font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-1.5">
            <span>📖</span> 主要AIツールの完全ガイド一覧
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {RELATED_TOOL_GUIDES.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 hover:border-blue-300 dark:hover:border-blue-700 hover:bg-blue-50/50 dark:hover:bg-blue-950/20 transition-all group"
              >
                <span className="text-base shrink-0">{guide.emoji}</span>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {guide.label}
                </span>
                <span className="ml-auto text-xs text-gray-500 dark:text-gray-300 group-hover:text-blue-500 transition-colors">→</span>
              </Link>
            ))}
          </div>
        </div>

        {/* FAQ セクション */}
        <div className="mt-10">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-1.5">
            <span>❓</span> よくある質問
          </h2>
          <div className="flex flex-col gap-3">
            {FAQS.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-4 open:pb-4"
              >
                <summary className="cursor-pointer text-sm font-bold text-gray-900 dark:text-white list-none flex items-center justify-between gap-2">
                  {faq.question}
                  <span className="text-gray-400 group-open:rotate-45 transition-transform shrink-0">＋</span>
                </summary>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mt-3">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>

        {/* フッターリンク */}
        <div className="mt-10 mb-4 text-center">
          <Link
            href="/tools"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-6 py-2.5 rounded-full transition-colors"
          >
            AIツール比較一覧を見る
          </Link>
        </div>
      </div>
    </>
  );
}

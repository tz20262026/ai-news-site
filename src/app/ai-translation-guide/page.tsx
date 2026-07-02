import type { Metadata } from "next";
import AffiliateSectionAiNews from "@/components/AffiliateSectionAiNews";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI翻訳ツール比較2026年版【DeepL・ChatGPT・Google翻訳・精度・無料・使い方完全ガイド】",
  description:
    "AI翻訳ツール2026年完全比較ガイド。DeepL・ChatGPT・Google翻訳・DeepL Pro・精度比較・無料制限・ビジネス用途・使い方を詳しく解説します。",
  alternates: {
    canonical: "https://ai-news-site-wheat.vercel.app/ai-translation-guide",
  },
  openGraph: {
    title: "AI翻訳ツール比較2026年版【DeepL・ChatGPT・Google翻訳比較】",
    description: "DeepL・ChatGPT・Google翻訳の精度・無料制限・ビジネス用途を完全比較。",
    type: "article",
    locale: "ja_JP",
    url: "https://ai-news-site-wheat.vercel.app/ai-translation-guide",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI翻訳ツール比較2026年版",
    description: "DeepL・ChatGPT・Google翻訳・精度・無料制限を完全比較。",
  },
};

interface TranslationTool {
  name: string;
  icon: string;
  strength: string;
  freePlan: string;
  paidPlan: string;
  bestFor: string;
  accuracy: "最高" | "高い" | "標準";
  tags: string[];
}

interface FaqItem {
  q: string;
  a: string;
}

const TRANSLATION_TOOLS: TranslationTool[] = [
  {
    name: "DeepL",
    icon: "🔵",
    strength: "自然な翻訳・文脈理解",
    freePlan: "月500,000文字・3ファイル",
    paidPlan: "DeepL Pro $8.74/月〜",
    bestFor: "ビジネス文書・メール・論文翻訳",
    accuracy: "最高",
    tags: ["自然な日本語", "ビジネス向き", "ファイル翻訳"],
  },
  {
    name: "ChatGPT（GPT-4o）",
    icon: "🤖",
    strength: "文脈・ニュアンス・専門知識",
    freePlan: "GPT-4o mini無料（制限あり）",
    paidPlan: "ChatGPT Plus $20/月",
    bestFor: "専門分野・技術文書・創作翻訳",
    accuracy: "最高",
    tags: ["専門翻訳", "ニュアンス対応", "多言語対応"],
  },
  {
    name: "Google翻訳",
    icon: "🌐",
    strength: "対応言語数・即座の翻訳",
    freePlan: "完全無料（ウェブ版）",
    paidPlan: "Cloud Translation API従量課金",
    bestFor: "日常会話・旅行・多言語確認",
    accuracy: "標準",
    tags:["133言語対応", "完全無料", "音声翻訳"],
  },
  {
    name: "みらい翻訳",
    icon: "🇯🇵",
    strength: "日本語品質・ビジネス向け",
    freePlan: "要会員登録・制限あり",
    paidPlan: "ビジネスプラン要問い合わせ",
    bestFor: "日本企業・日英翻訳・公式文書",
    accuracy: "高い",
    tags: ["日本語特化", "ビジネス品質", "セキュリティ"],
  },
  {
    name: "Microsoft翻訳（Bing）",
    icon: "🪟",
    strength: "Office統合・Azure連携",
    freePlan: "無料（ウェブ版）",
    paidPlan: "Azure Translator API従量課金",
    bestFor: "Office文書・Teams・Bing検索",
    accuracy: "高い",
    tags: ["Office連携", "Teams統合", "API対応"],
  },
];

const FAQS: FaqItem[] = [
  {
    q: "DeepLとGoogle翻訳はどっちが精度が高いですか？",
    a: "日本語への翻訳精度はDeepLの方が全般的に高いとされています。DeepLは文脈・ニュアンスを理解した自然な翻訳が得意で、特にビジネス文書・論文・メールなどフォーマルな文章で高精度を発揮します。Google翻訳は133言語に対応しており、日常会話・旅行・多言語確認など手軽な用途に向いています。専門的な翻訳はDeepL、素早い確認・多言語用途はGoogle翻訳と使い分けるのが賢明です。",
  },
  {
    q: "AI翻訳とChatGPTによる翻訳の違いは何ですか？",
    a: "AI翻訳（DeepL・Google翻訳など）は翻訳に特化して最適化されたモデルです。一方ChatGPTは汎用LLMであり、翻訳のほか「この文章を丁寧なビジネス表現で訳して」「技術的な文脈を理解して訳して」などの指示が使えます。専門性・ニュアンスを重視する翻訳ではChatGPT（GPT-4o）が優れており、速さ・コストを重視するならDeepL・Google翻訳が適しています。",
  },
  {
    q: "DeepLの無料版と有料版（Pro）の違いを教えてください。",
    a: "DeepL無料版の制限：①月500,000文字まで②ファイル翻訳月3件まで③翻訳データがDeepLの品質改善に使われる可能性あり。DeepL Pro（有料版）のメリット：①翻訳文字数無制限②翻訳データは機密保護（法人向け）③ファイル翻訳件数無制限④カスタム用語集機能⑤API利用可能。ビジネス利用・機密文書翻訳・大量翻訳が必要な場合はPro版がおすすめです。",
  },
  {
    q: "翻訳ツールをビジネスで使う際の注意点はありますか？",
    a: "ビジネスでAI翻訳を使う際の注意点は①機密情報の取り扱い：無料版は翻訳内容がサーバーに送信される。機密文書はDeepL Pro・みらい翻訳など機密保護対応のものを使う②固有名詞・専門用語：AI翻訳は固有名詞や業界特有の用語を誤訳することがある。重要文書は必ず人間が確認する③文化的ニュアンス：日本語の敬語・丁寧語はAI翻訳でも完全ではない場合がある④法的文書：契約書・法律文書は必ず専門家の確認を取る。",
  },
  {
    q: "無料で使えるAI翻訳ツールのおすすめはどれですか？",
    a: "無料で使えるAI翻訳ツールのおすすめは①Google翻訳：完全無料・133言語対応・音声翻訳・カメラ翻訳機能あり。日常使いに最適。②DeepL無料版：月500,000文字まで無料。精度はGoogle翻訳より高く、ビジネス文書の下訳に最適。③ChatGPT（GPT-4o mini）：無料で使え、指示を加えた高精度翻訳が可能。④Microsoft翻訳：ウェブ版無料、Office利用者に便利。日常・学習・旅行用途ならGoogle翻訳、品質重視ならDeepL無料版がおすすめです。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const accuracyColor: Record<string, string> = {
  最高: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
  高い: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  標準: "bg-gray-500/20 text-gray-300 border-gray-500/30",
};

export default function AiTranslationGuidePage() {
  return (
    <main className="bg-gray-950 min-h-screen text-gray-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="max-w-3xl mx-auto px-4 py-12">

        {/* ヒーロー */}
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold bg-blue-500/20 text-blue-400 border border-blue-500/30 rounded-full px-4 py-1 mb-4">
            🌐 2026年最新版
          </span>
          <h1 className="text-3xl sm:text-4xl font-black mb-4 leading-tight">
            AI翻訳ツール<br />
            <span className="text-blue-400">完全比較ガイド2026年版</span>
            <br />
            <span className="text-xl text-gray-300 font-bold">【DeepL・ChatGPT・Google翻訳・精度・無料・使い方】</span>
          </h1>
          <p className="text-gray-400 text-sm leading-relaxed">
            DeepL・ChatGPT・Google翻訳・みらい翻訳・Microsoft翻訳の<br />
            精度・無料制限・ビジネス適性を2026年版で完全比較します。
          </p>
        </div>

        {/* ツール比較 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-6 border-l-4 border-blue-500 pl-3">
            🌐 AI翻訳ツール5選【精度・無料制限・用途比較】
          </h2>
          <div className="space-y-4">
            {TRANSLATION_TOOLS.map((tool, i) => (
              <div key={i} className="bg-gray-900 border border-gray-700 rounded-xl p-5">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="text-xl">{tool.icon}</span>
                  <h3 className="text-white font-black text-sm">{tool.name}</h3>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full border ${accuracyColor[tool.accuracy]}`}>
                    精度：{tool.accuracy}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {tool.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-blue-900/20 text-blue-300 border border-blue-700/30 px-2 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs mb-2">
                  <div className="bg-gray-800 rounded px-2.5 py-1.5">
                    <span className="text-gray-400">💪 強み：</span>
                    <span className="text-gray-200">{tool.strength}</span>
                  </div>
                  <div className="bg-green-900/10 border border-green-700/20 rounded px-2.5 py-1.5">
                    <span className="text-green-400 font-bold">無料：</span>
                    <span className="text-gray-300">{tool.freePlan}</span>
                  </div>
                  <div className="bg-blue-900/10 border border-blue-700/20 rounded px-2.5 py-1.5">
                    <span className="text-blue-400 font-bold">有料：</span>
                    <span className="text-gray-300">{tool.paidPlan}</span>
                  </div>
                  <div className="bg-purple-900/10 border border-purple-700/20 rounded px-2.5 py-1.5">
                    <span className="text-purple-400 font-bold">🎯 最適：</span>
                    <span className="text-gray-300">{tool.bestFor}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mb-12 bg-gradient-to-r from-blue-900/20 to-cyan-900/20 border border-blue-500/30 rounded-2xl p-6 text-center">
          <h2 className="text-xl font-bold text-white mb-2">
            🤖 ChatGPTの使い方・活用法を深く知りたい方へ
          </h2>
          <p className="text-gray-300 text-sm mb-4">
            AI翻訳の枠を超えてChatGPTのプロンプト活用法を学ぶことで<br />
            翻訳の精度と効率が大幅に上がります。
          </p>
          <Link
            href="/chatgpt-prompt-guide"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm"
          >
            ChatGPTプロンプトガイドを見る →
          </Link>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-5 border-l-4 border-blue-500 pl-3">
            よくある質問（FAQ）
          </h2>
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <div key={i} className="bg-gray-900 border border-gray-700 rounded-xl p-4">
                <p className="text-white font-bold text-sm mb-2">Q. {faq.q}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <AffiliateSectionAiNews />
      </div>
    </main>
  );
}

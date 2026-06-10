import type { Metadata } from "next";
import AffiliateSectionAiNews from "@/components/AffiliateSectionAiNews";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI検索エンジン比較2026年版【Perplexity・ChatGPT Search・Google AI・Grok】完全ガイド",
  description:
    "AI検索エンジン2026年完全比較ガイド。Perplexity AI・ChatGPT Search・Google AI Overview・Bing Copilot・Grokの精度・無料制限・違い・使い方を詳しく解説します。",
  openGraph: {
    title: "AI検索エンジン比較2026年版【Perplexity・ChatGPT Search・Google AI比較】",
    description: "Perplexity・ChatGPT Search・Google AI・Grokの精度・無料制限・違いを完全比較。",
    type: "article",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI検索エンジン比較2026年版",
    description: "Perplexity・ChatGPT Search・Google AI・Grokを完全比較。",
  },
};

interface SearchTool {
  name: string;
  icon: string;
  strength: string;
  freePlan: string;
  paidPlan: string;
  bestFor: string;
  source: "リアルタイム" | "学習データ+検索" | "学習データ";
  tags: string[];
}

interface FaqItem {
  q: string;
  a: string;
}

const SEARCH_TOOLS: SearchTool[] = [
  {
    name: "Perplexity AI",
    icon: "🔍",
    strength: "出典付き・精度・使いやすさ",
    freePlan: "無料（検索回数制限あり）",
    paidPlan: "Pro $20/月（無制限・GPT-4o使用可）",
    bestFor: "情報収集・調査・出典確認・最新情報の検索",
    source: "リアルタイム",
    tags: ["出典明記", "日本語対応", "最新情報"],
  },
  {
    name: "ChatGPT Search（GPT-4o）",
    icon: "🤖",
    strength: "会話×検索の統合・深い分析",
    freePlan: "無料版で検索機能あり（制限あり）",
    paidPlan: "ChatGPT Plus $20/月",
    bestFor: "調査＋分析・複雑な質問・文章生成を伴う検索",
    source: "リアルタイム",
    tags: ["会話型検索", "深い分析", "文章生成連携"],
  },
  {
    name: "Google AI Overview（SGE）",
    icon: "🌐",
    strength: "既存Googleの信頼性×AI回答",
    freePlan: "完全無料",
    paidPlan: "Google One AI Premium $19.99/月",
    bestFor: "日常の検索・ローカル情報・ショッピング・地図",
    source: "リアルタイム",
    tags: ["完全無料", "Google連携", "日本語最適化"],
  },
  {
    name: "Grok（xAI）",
    icon: "⚡",
    strength: "X（Twitter）リアルタイム情報・毒舌AI",
    freePlan: "無料版あり（制限あり）",
    paidPlan: "X Premium+ 月額1,650円〜",
    bestFor: "SNSトレンド・最新ニュース・気軽な情報検索",
    source: "リアルタイム",
    tags: ["Xリアルタイム", "トレンド検索", "ユーモア対応"],
  },
  {
    name: "Bing Copilot（Microsoft）",
    icon: "🪟",
    strength: "Bing検索×GPT-4統合・Office連携",
    freePlan: "無料（毎日使用可）",
    paidPlan: "Microsoft 365 Copilot $30/月",
    bestFor: "Web検索・画像生成（DALL-E）・Office文書",
    source: "リアルタイム",
    tags: ["無料GPT-4", "画像生成連携", "Office統合"],
  },
];

const FAQS: FaqItem[] = [
  {
    q: "PerplexityとChatGPTの違いは何ですか？",
    a: "PerplexityとChatGPTの主な違い：【Perplexity AI】リアルタイムWebを常時検索し、回答に出典（参考URLリスト）が付く。「今日のニュース」「最新の株価」など最新情報の取得が強み。回答は短めで検索特化。【ChatGPT（GPT-4o with Search）】会話の流れを維持しながら検索できる。長文・文章生成・コード・複雑な分析が得意。検索だけでなく「調べてまとめてメールを書いて」などタスクの流れで使える。情報収集ならPerplexity、総合的なタスクならChatGPTが向いています。",
  },
  {
    q: "AI検索エンジンはGoogle検索に取って代わりますか？",
    a: "短期的にはGoogleに取って代わることはないと考えられますが、検索体験は大きく変わっています。AI検索（Perplexity・Google AI Overview等）が既に「まず答えを提示してから出典を示す」形式に変化しています。特にシンプルな質問・情報収集用途ではAI検索が優位になっています。一方、ショッピング・地図・ローカル検索・画像検索などはGoogleが依然として強く、完全な移行ではなく「使い分け」が標準になるとみられます。",
  },
  {
    q: "Perplexity AIの無料版と有料版（Pro）の違いは何ですか？",
    a: "Perplexity AI無料版の制限：①検索回数に1日の上限あり②使用できるAIモデルが基本モデルのみ③ファイルアップロード・高度な分析機能なし。Perplexity Pro（$20/月）のメリット：①検索無制限②GPT-4o・Claude・Sonar Pro等の高性能モデルが使用可能③ファイルアップロード・PDFの解析④画像生成機能⑤APIアクセス。リサーチ・仕事用途や深い情報収集が必要な方にはProが大幅に便利になります。",
  },
  {
    q: "AI検索で正確な情報を得るためのコツはありますか？",
    a: "AI検索で正確な情報を得るコツ：①具体的・明確な質問をする（「AI検索の比較」より「Perplexity AIとChatGPT Searchの精度と料金の違いを教えて」の方が良い）②出典を必ず確認する（Perplexityは出典が表示される・ChatGPT Searchも出典付きで回答できる）③最新情報が必要な場合はリアルタイム検索機能を使う（Perplexity・ChatGPT Search・Google AI Overview）④複数のAIで同じ質問をして回答を比較する⑤医療・法律・財務などの専門情報は必ず専門家に確認する。",
  },
  {
    q: "日本語に強いAI検索エンジンはどれですか？",
    a: "日本語対応が強いAI検索エンジン：①Google AI Overview：日本語での検索に最も最適化されており、日本語ウェブページの情報精度が高い。②Perplexity AI：日本語での質問に対応し、日本語出典のページも参照する。③Bing Copilot：日本語対応が良好でMicrosoftが日本向けの最適化を継続している。④ChatGPT Search：日本語の自然な文章での質問に強く、日本語での長文回答生成が得意。Grokは英語圏のリアルタイム情報が強く、日本語コンテンツは他ツールより少ない傾向があります。",
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

const sourceColor: Record<string, string> = {
  リアルタイム: "bg-green-500/20 text-green-300 border-green-500/30",
  "学習データ+検索": "bg-blue-500/20 text-blue-300 border-blue-500/30",
  学習データ: "bg-gray-500/20 text-gray-300 border-gray-500/30",
};

export default function AiSearchGuidePage() {
  return (
    <main className="bg-gray-950 min-h-screen text-gray-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="max-w-3xl mx-auto px-4 py-12">

        {/* ヒーロー */}
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 rounded-full px-4 py-1 mb-4">
            🔍 2026年最新版
          </span>
          <h1 className="text-3xl sm:text-4xl font-black mb-4 leading-tight">
            AI検索エンジン<br />
            <span className="text-cyan-400">完全比較ガイド2026年版</span>
            <br />
            <span className="text-xl text-gray-300 font-bold">【Perplexity・ChatGPT Search・Google AI・Grok比較】</span>
          </h1>
          <p className="text-gray-400 text-sm leading-relaxed">
            Perplexity AI・ChatGPT Search・Google AI Overview・Grok・Bing Copilotの<br />
            精度・無料制限・使い分けを2026年版で完全比較します。
          </p>
        </div>

        {/* ツール比較 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-6 border-l-4 border-cyan-500 pl-3">
            🔍 AI検索エンジン5選【精度・無料制限・用途比較】
          </h2>
          <div className="space-y-4">
            {SEARCH_TOOLS.map((tool, i) => (
              <div key={i} className="bg-gray-900 border border-gray-700 rounded-xl p-5">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="text-xl">{tool.icon}</span>
                  <h3 className="text-white font-black text-sm">{tool.name}</h3>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full border ${sourceColor[tool.source]}`}>
                    {tool.source}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {tool.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-cyan-900/20 text-cyan-300 border border-cyan-700/30 px-2 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
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
        <section className="mb-12 bg-gradient-to-r from-cyan-900/20 to-teal-900/20 border border-cyan-500/30 rounded-2xl p-6 text-center">
          <h2 className="text-xl font-bold text-white mb-2">
            🔍 Perplexity AIの使い方を詳しく学ぶ
          </h2>
          <p className="text-gray-300 text-sm mb-4">
            AI検索の中で最も使いやすいPerplexity AIの<br />
            使い方・活用法を詳しく解説したガイドをご覧ください。
          </p>
          <Link
            href="/perplexity-guide"
            className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm"
          >
            Perplexityガイドを見る →
          </Link>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-5 border-l-4 border-cyan-500 pl-3">
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

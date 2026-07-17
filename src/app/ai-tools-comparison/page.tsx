import type { Metadata } from "next";
import AffiliateSectionAiNews from "@/components/AffiliateSectionAiNews";

export const metadata: Metadata = {
  title:
    "主要AIツール徹底比較2026年版【ChatGPT vs Claude vs Gemini vs Grok vs Perplexity】",
  description:
    "ChatGPT・Claude・Gemini・Grok・Perplexityを料金・得意分野・日本語対応・ファイル処理・コンテキスト長で徹底比較。2026年最新アップデート情報と用途別おすすめも解説。",
  keywords: [
    "AIツール 比較",
    "ChatGPT Claude Gemini 比較",
    "ChatGPT vs Claude",
    "Gemini vs ChatGPT",
    "Grok 比較",
    "Perplexity 比較",
    "AIチャット 比較 2026",
    "生成AI おすすめ",
    "AIツール 料金比較",
    "最強AI 比較",
  ],
  alternates: {
    canonical: "https://ai-news-site-wheat.vercel.app/ai-tools-comparison",
  },
  openGraph: {
    title:
      "主要AIツール徹底比較2026年版【ChatGPT vs Claude vs Gemini vs Grok vs Perplexity】",
    description:
      "ChatGPT・Claude・Gemini・Grok・Perplexityを料金・得意分野・日本語対応・ファイル処理・コンテキスト長で徹底比較。",
    type: "article",
    locale: "ja_JP",
    url: "https://ai-news-site-wheat.vercel.app/ai-tools-comparison",
  },
  twitter: {
    card: "summary_large_image",
    title: "主要AIツール徹底比較2026年版",
    description:
      "ChatGPT・Claude・Gemini・Grok・Perplexityを料金・得意分野・日本語・ファイル処理・コンテキスト長で徹底比較。",
  },
};

/* ────────────────────────────────────────────
   データ定義
──────────────────────────────────────────── */

interface AITool {
  id: string;
  name: string;
  maker: string;
  color: string;
  borderColor: string;
  freePlan: string;
  paidPlan: string;
  specialty: string;
  japanese: "◎ 優秀" | "○ 良好" | "△ 普通";
  fileUpload: "◎ 可（複数形式）" | "○ 可（一部制限）" | "△ 制限あり" | "× 不可";
  maxContext: string;
  bestFor: string[];
  latestUpdate: string;
}

interface UseCaseRec {
  usecase: string;
  icon: string;
  first: string;
  second: string;
  reason: string;
}

interface FAQ {
  question: string;
  answer: string;
}

const AI_TOOLS: AITool[] = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    maker: "OpenAI",
    color: "text-emerald-400",
    borderColor: "border-emerald-500/40",
    freePlan: "無料あり（GPT-4o mini）",
    paidPlan: "Plus $20/月",
    specialty: "汎用・プログラミング・画像生成",
    japanese: "◎ 優秀",
    fileUpload: "◎ 可（複数形式）",
    maxContext: "128,000トークン",
    bestFor: ["プログラミング", "画像生成", "GPTs活用", "文章作成"],
    latestUpdate: "2026年：GPT-4o with scheduled tasks・メモリ機能強化",
  },
  {
    id: "claude",
    name: "Claude",
    maker: "Anthropic",
    color: "text-orange-400",
    borderColor: "border-orange-500/40",
    freePlan: "無料あり（Claude 3.5 Haiku）",
    paidPlan: "Pro $20/月",
    specialty: "長文処理・文章品質・安全性",
    japanese: "◎ 優秀",
    fileUpload: "◎ 可（複数形式）",
    maxContext: "200,000トークン",
    bestFor: ["長文読解・要約", "論文・レポート", "倫理的配慮が必要な用途", "コーディング"],
    latestUpdate: "2026年：Claude 3.7 Sonnet・プロジェクト機能・拡張思考（Extended Thinking）",
  },
  {
    id: "gemini",
    name: "Gemini",
    maker: "Google",
    color: "text-blue-400",
    borderColor: "border-blue-500/40",
    freePlan: "無料あり（Gemini 1.5 Flash）",
    paidPlan: "Advanced $19.99/月（Google One）",
    specialty: "検索連携・Google Workspace統合",
    japanese: "◎ 優秀",
    fileUpload: "○ 可（一部制限）",
    maxContext: "1,000,000トークン",
    bestFor: ["Google Docs/Sheets連携", "リアルタイム情報検索", "動画・画像理解", "多言語翻訳"],
    latestUpdate: "2026年：Gemini 2.5 Pro・Deep Research・Project Astra統合",
  },
  {
    id: "grok",
    name: "Grok",
    maker: "xAI（Elon Musk）",
    color: "text-purple-400",
    borderColor: "border-purple-500/40",
    freePlan: "無料あり（X Premium不要）",
    paidPlan: "SuperGrok $30/月",
    specialty: "X（Twitter）リアルタイム情報・理工系",
    japanese: "○ 良好",
    fileUpload: "○ 可（一部制限）",
    maxContext: "131,072トークン",
    bestFor: ["X上の最新情報収集", "数学・科学的推論", "コーディング（Grok-3）", "ユーモラスな会話"],
    latestUpdate: "2026年：Grok-3・Think機能・Aurora画像生成統合",
  },
  {
    id: "perplexity",
    name: "Perplexity",
    maker: "Perplexity AI",
    color: "text-cyan-400",
    borderColor: "border-cyan-500/40",
    freePlan: "無料あり（制限あり）",
    paidPlan: "Pro $20/月",
    specialty: "リアルタイム検索・引用付き回答",
    japanese: "○ 良好",
    fileUpload: "△ 制限あり",
    maxContext: "可変（検索依存）",
    bestFor: ["最新情報調査", "引用元確認", "学術・研究", "ニュース分析"],
    latestUpdate: "2026年：Deep Research強化・Spaces機能・音声検索対応",
  },
];

const USE_CASE_RECS: UseCaseRec[] = [
  {
    usecase: "文章作成・ライティング",
    icon: "✍️",
    first: "Claude",
    second: "ChatGPT",
    reason: "Claudeは文章品質・一貫性・トーン調整が最高水準。長文でも品質が落ちにくい。",
  },
  {
    usecase: "プログラミング・コーディング",
    icon: "💻",
    first: "ChatGPT",
    second: "Claude",
    reason: "ChatGPTはGPTs・コードインタープリターとの組み合わせが強力。ClaudeもArtifacts機能で健闘。",
  },
  {
    usecase: "最新情報・ニュース調査",
    icon: "🔍",
    first: "Perplexity",
    second: "Gemini",
    reason: "Perplexityは引用付きでリアルタイム検索が最強。GeminiはGoogle検索との連携が◎。",
  },
  {
    usecase: "画像・動画理解",
    icon: "🖼️",
    first: "Gemini",
    second: "ChatGPT",
    reason: "GeminiはYouTube動画URLを直接入力して内容を分析できる。ChatGPTはPDF+画像解析が強い。",
  },
  {
    usecase: "長文ドキュメント処理",
    icon: "📄",
    first: "Claude",
    second: "Gemini",
    reason: "Claude 3.7は200kトークン（約50万字）が無料圏で使いやすい。Geminiは最大1Mトークン対応。",
  },
  {
    usecase: "数学・論理的推論",
    icon: "🧮",
    first: "Grok",
    second: "ChatGPT",
    reason: "Grok-3のThinkモードは数学・物理の推論で最高精度を発揮。ChatGPT o3も強力。",
  },
];

const FAQS: FAQ[] = [
  {
    question: "2026年現在、最強のAIツールはどれですか？",
    answer:
      "「最強」は用途次第です。文章品質ならClaude 3.7 Sonnet、最新情報収集ならPerplexity、Google Workspaceとの連携ならGemini 2.5、プログラミングや画像生成ならChatGPT（GPT-4o）、X上のリアルタイム情報ならGrokが優れています。複数のツールを使い分けるのが2026年のベストプラクティスです。",
  },
  {
    question: "無料で使えるAIツールはどれですか？",
    answer:
      "ChatGPT・Claude・Gemini・Grok・Perplexityの5ツールは全て無料プランを提供しています。ただし無料プランは利用回数・モデル性能・ファイル処理などに制限があります。Geminiは無料でも高性能なGemini 1.5 Proが使える場合があり、コスパが高いです。",
  },
  {
    question: "ChatGPTとClaudeはどちらが日本語が得意ですか？",
    answer:
      "2026年時点では両者ともに高い日本語対応力を持っています。ChatGPT（GPT-4o）は自然な口語・敬語・専門用語に対応し、Claudeは文章の流れや一貫性で優れた品質を発揮します。ビジネス文書や長文ライティングにはClaudeが好評です。日常会話やSNS投稿ならChatGPTで十分です。",
  },
  {
    question: "GeminiはChatGPTに比べて何が優れていますか？",
    answer:
      "Geminiの最大の強みはGoogleサービスとの連携です。Gmail・Google Docs・Sheets・DriveをAIが直接操作できるため、Googleを日常的に使うビジネスパーソンには特に便利です。また最大100万トークンのコンテキストウィンドウにより、書籍1冊分の文書を丸ごと分析できます。YouTube動画のURLを入力して内容を要約・分析できる機能もChatGPTにはない特長です。",
  },
  {
    question: "複数のAIツールを使い分けるメリットはありますか？",
    answer:
      "はい、大きなメリットがあります。無料プランは各ツール一定の上限があるため、複数ツールを使い回すことでコストゼロでフルに活用できます。また用途別に最適なツールを使うことで出力品質も向上します。実際にAI活用の上級者は「調査はPerplexity → 文章作成はClaude → 画像生成はChatGPT」のように使い分けています。",
  },
];

/* ────────────────────────────────────────────
   JSON-LD 生成
──────────────────────────────────────────── */

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

/* ────────────────────────────────────────────
   ページコンポーネント
──────────────────────────────────────────── */

export default function AIToolsComparisonPage() {
  return (
    <>
      {/* FAQ JSON-LD 構造化データ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main className="min-h-screen bg-gray-950 text-gray-200">
        {/* ── ヒーローセクション ── */}
        <section className="bg-gradient-to-b from-slate-900 to-gray-950 py-14 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-xs font-bold text-blue-400 uppercase tracking-widest bg-blue-400/10 px-4 py-1.5 rounded-full mb-4">
              2026年版 最新比較
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight mb-4">
              主要AIツール徹底比較2026年版
              <br />
              <span className="text-blue-400">
                【ChatGPT vs Claude vs Gemini vs Grok vs Perplexity】
              </span>
            </h1>
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              5大AIツールを料金・得意分野・日本語対応・ファイル処理・最大コンテキスト長で徹底比較。用途別おすすめと2026年最新アップデート情報も掲載。
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                { href: "#comparison", label: "比較表" },
                { href: "#usecase", label: "用途別おすすめ" },
                { href: "#updates", label: "最新情報" },
                { href: "#faq", label: "よくある質問" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-xs font-bold px-4 py-2 rounded-full bg-slate-800 text-blue-300 border border-slate-700 hover:bg-slate-700 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── 比較表 ── */}
        <section id="comparison" className="py-14 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
                5大AIツール 徹底比較表
              </h2>
              <p className="text-gray-300 text-sm">
                2026年6月時点の最新情報をもとに作成
              </p>
            </div>

            {/* スクロール対応テーブル */}
            <div className="overflow-x-auto rounded-2xl border border-slate-800">
              <table className="w-full min-w-[700px] text-sm">
                <thead>
                  <tr className="bg-slate-900 border-b border-slate-800">
                    <th className="text-left px-4 py-3 text-gray-300 font-bold w-28">項目</th>
                    {AI_TOOLS.map((tool) => (
                      <th key={tool.id} className="px-4 py-3 text-center">
                        <div className={`font-black text-base ${tool.color}`}>{tool.name}</div>
                        <div className="text-gray-300 text-xs font-normal">{tool.maker}</div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-800 bg-slate-950">
                    <td className="px-4 py-3 text-gray-300 font-bold text-xs">無料プラン</td>
                    {AI_TOOLS.map((tool) => (
                      <td key={tool.id} className="px-4 py-3 text-center text-gray-300 text-xs">{tool.freePlan}</td>
                    ))}
                  </tr>
                  <tr className="border-b border-slate-800 bg-slate-900">
                    <td className="px-4 py-3 text-gray-300 font-bold text-xs">有料プラン</td>
                    {AI_TOOLS.map((tool) => (
                      <td key={tool.id} className="px-4 py-3 text-center text-gray-300 text-xs">{tool.paidPlan}</td>
                    ))}
                  </tr>
                  <tr className="border-b border-slate-800 bg-slate-950">
                    <td className="px-4 py-3 text-gray-300 font-bold text-xs">得意分野</td>
                    {AI_TOOLS.map((tool) => (
                      <td key={tool.id} className="px-4 py-3 text-center text-gray-300 text-xs">{tool.specialty}</td>
                    ))}
                  </tr>
                  <tr className="border-b border-slate-800 bg-slate-900">
                    <td className="px-4 py-3 text-gray-300 font-bold text-xs">日本語対応</td>
                    {AI_TOOLS.map((tool) => (
                      <td key={tool.id} className={`px-4 py-3 text-center text-xs font-bold ${tool.japanese === "◎ 優秀" ? "text-emerald-400" : tool.japanese === "○ 良好" ? "text-cyan-400" : "text-gray-300"}`}>{tool.japanese}</td>
                    ))}
                  </tr>
                  <tr className="border-b border-slate-800 bg-slate-950">
                    <td className="px-4 py-3 text-gray-300 font-bold text-xs">ファイル処理</td>
                    {AI_TOOLS.map((tool) => (
                      <td key={tool.id} className={`px-4 py-3 text-center text-xs font-bold ${tool.fileUpload.startsWith("◎") ? "text-emerald-400" : tool.fileUpload.startsWith("○") ? "text-cyan-400" : tool.fileUpload.startsWith("△") ? "text-amber-400" : "text-red-400"}`}>{tool.fileUpload}</td>
                    ))}
                  </tr>
                  <tr className="bg-slate-900">
                    <td className="px-4 py-3 text-gray-300 font-bold text-xs">最大コンテキスト</td>
                    {AI_TOOLS.map((tool) => (
                      <td key={tool.id} className="px-4 py-3 text-center text-gray-300 text-xs">{tool.maxContext}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>

            {/* 各ツール詳細カード */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {AI_TOOLS.map((tool) => (
                <div
                  key={tool.id}
                  className={`rounded-2xl border ${tool.borderColor} bg-slate-900 p-5 flex flex-col gap-3`}
                >
                  <div>
                    <h3 className={`font-black text-lg ${tool.color}`}>{tool.name}</h3>
                    <p className="text-gray-300 text-xs">{tool.maker}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-300 font-bold mb-1.5">こんな用途に最適</p>
                    <div className="flex flex-wrap gap-1.5">
                      {tool.bestFor.map((b) => (
                        <span key={b} className="text-xs px-2.5 py-1 rounded-full bg-slate-800 text-gray-300 border border-slate-700">
                          {b}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 用途別おすすめ ── */}
        <section id="usecase" className="py-14 px-4 bg-slate-950">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
                用途別おすすめAIツール
              </h2>
              <p className="text-gray-300 text-sm">
                何をやりたいか？で最適ツールを選ぶ
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {USE_CASE_RECS.map((rec) => (
                <div
                  key={rec.usecase}
                  className="rounded-2xl border border-slate-800 bg-slate-900 p-5 flex flex-col gap-3"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{rec.icon}</span>
                    <h3 className="font-black text-white text-sm">{rec.usecase}</h3>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-1 rounded-xl bg-blue-500/10 border border-blue-500/30 px-3 py-2.5">
                      <p className="text-xs text-blue-400 font-bold mb-0.5">1位</p>
                      <p className="text-white font-black text-sm">{rec.first}</p>
                    </div>
                    <div className="flex-1 rounded-xl bg-slate-800 border border-slate-700 px-3 py-2.5">
                      <p className="text-xs text-gray-300 font-bold mb-0.5">2位</p>
                      <p className="text-gray-300 font-bold text-sm">{rec.second}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-xs leading-relaxed">{rec.reason}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 最新アップデート ── */}
        <section id="updates" className="py-14 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
                2026年 最新アップデート情報
              </h2>
              <p className="text-gray-300 text-sm">
                各ツールの最新アップデートをまとめました
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {AI_TOOLS.map((tool) => (
                <div
                  key={tool.id}
                  className="rounded-2xl border border-slate-800 bg-slate-900 p-5 flex items-start gap-4"
                >
                  <span className={`font-black text-base flex-shrink-0 w-28 ${tool.color}`}>
                    {tool.name}
                  </span>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {tool.latestUpdate}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section id="faq" className="py-14 px-4 bg-slate-950">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
                よくある質問（FAQ）
              </h2>
              <p className="text-gray-300 text-sm">
                AIツール比較でよく出る疑問を解決
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {FAQS.map((faq, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-800 bg-slate-900 p-5 sm:p-6"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-black text-xs border border-blue-500/30 mt-0.5">
                      Q
                    </span>
                    <h3 className="font-black text-white text-sm sm:text-base leading-snug">
                      {faq.question}
                    </h3>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-black text-xs border border-emerald-500/30 mt-0.5">
                      A
                    </span>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── アフィリエイトセクション ── */}
        <AffiliateSectionAiNews />
      </main>
    </>
  );
}

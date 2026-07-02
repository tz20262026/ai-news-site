import type { Metadata } from "next";
import AffiliateSectionAiNews from "@/components/AffiliateSectionAiNews";

export const metadata: Metadata = {
  title: "Gemini（ジェミニ）完全ガイド2026年版【使い方・ChatGPT・Claudeとの比較・無料機能】",
  description:
    "Google Gemini（ジェミニ）の使い方を2026年版で完全解説。Gemini 1.5/2.0の機能・ChatGPT・Claudeとの違い・無料プランでできること・Google Workspaceとの連携を徹底ガイド。",
  alternates: {
    canonical: "https://ai-news-site-wheat.vercel.app/gemini-guide",
  },
  openGraph: {
    title: "Gemini完全ガイド2026年版【使い方・ChatGPTとの比較】",
    description: "Google Geminiの使い方・機能・ChatGPT/Claudeとの比較を2026年版で徹底解説。",
    type: "article",
    locale: "ja_JP",
    url: "https://ai-news-site-wheat.vercel.app/gemini-guide",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gemini完全ガイド2026年版",
    description: "Google Geminiの使い方・ChatGPTとの違いを完全解説。",
  },
};

interface Feature {
  title: string;
  icon: string;
  description: string;
  tip: string;
}

interface CompareItem {
  aspect: string;
  gemini: string;
  chatgpt: string;
  claude: string;
  winner: "gemini" | "chatgpt" | "claude" | "tie";
}

interface FaqItem {
  q: string;
  a: string;
}

const FEATURES: Feature[] = [
  {
    title: "Google検索との連携",
    icon: "🔍",
    description: "Geminiは常にGoogle検索と連携しており、最新の情報にアクセスできる。知識カットオフの問題がなく、リアルタイム情報を回答に含められる。",
    tip: "「最新の〇〇について教えて」という質問がChatGPTより得意。ニュース・株価・天気など最新情報を含む回答が可能。",
  },
  {
    title: "Google Workspaceとの統合",
    icon: "📊",
    description: "Gmail・Googleドキュメント・スプレッドシート・スライドと直接連携。メールの要約・ドキュメント作成・データ分析をGoogleのツール上で実行。",
    tip: "Gmailで「このメールスレッドを要約して」・Googleドキュメントで「この文章を改善して」と直接指示できる。",
  },
  {
    title: "マルチモーダル能力",
    icon: "🖼️",
    description: "テキスト・画像・音声・動画を理解できるマルチモーダルAI。Gemini 1.5 Proは1時間の動画を分析できる。",
    tip: "「この画像に写っているものを説明して」「この動画のハイライトを抜き出して」など多様なメディアを処理できる。",
  },
  {
    title: "コンテキストウィンドウの大きさ",
    icon: "📚",
    description: "Gemini 1.5 Proは最大100万トークン（Gemini 1.5 Ultra は200万トークン）という業界最大のコンテキストウィンドウを持つ。",
    tip: "長い書類・コードベース・動画全体を一度に処理できる。長期的なプロジェクトや大規模なデータ分析に特に有効。",
  },
  {
    title: "Googleフォトとの連携",
    icon: "📷",
    description: "Googleフォトに保存した写真をGeminiに見せて質問できる。旅行の写真から場所を特定したり、料理の写真からレシピを推測したりが可能。",
    tip: "「この料理のレシピを教えて」「この景色はどこ？」「私のペットの品種を教えて」など日常的な質問に活用。",
  },
];

const COMPARISONS: CompareItem[] = [
  {
    aspect: "最新情報へのアクセス",
    gemini: "Googleリアルタイム検索で常に最新",
    chatgpt: "ウェブ検索対応（Plus以上）",
    claude: "Claude.ai Proでウェブ検索対応",
    winner: "gemini",
  },
  {
    aspect: "Google製品との連携",
    gemini: "Gmail・ドライブ・スライド等と深く統合",
    chatgpt: "連携なし（プラグインは廃止）",
    claude: "連携なし",
    winner: "gemini",
  },
  {
    aspect: "コンテキストウィンドウ",
    gemini: "最大200万トークン（Ultra）",
    chatgpt: "最大128,000トークン（GPT-4o）",
    claude: "最大200,000トークン",
    winner: "gemini",
  },
  {
    aspect: "日本語の自然さ",
    gemini: "自然だが時々不自然な表現",
    chatgpt: "非常に自然な日本語",
    claude: "非常に自然・文脈理解が深い",
    winner: "claude",
  },
  {
    aspect: "コーディング能力",
    gemini: "良好。Google Colab連携が強み",
    chatgpt: "非常に優秀",
    claude: "複雑なコードに強い",
    winner: "tie",
  },
  {
    aspect: "画像生成",
    gemini: "Imagen 3で高品質生成",
    chatgpt: "DALL-E 3で高品質生成",
    claude: "非対応（分析のみ）",
    winner: "tie",
  },
  {
    aspect: "無料プランの充実度",
    gemini: "Gemini 1.5 Flashが無料で高機能",
    chatgpt: "GPT-4oが無料（制限あり）",
    claude: "Claude 3.5 Haikuが無料（制限あり）",
    winner: "gemini",
  },
];

const FAQS: FaqItem[] = [
  {
    q: "GeminiはChatGPTより優れていますか？",
    a: "一概には言えません。Geminiが優れている点は①最新情報へのリアルタイムアクセス②Google製品との深い統合③超大規模なコンテキストウィンドウです。ChatGPTが優れている点は①日本語の自然さ②プラグインエコシステム③画像生成（DALL-E 3）です。用途に応じて使い分けるのが最善です。",
  },
  {
    q: "Geminiは無料で使えますか？",
    a: "はい、Gemini.google.comで無料で使えます。無料版でもGemini 1.5 Flash（高性能モデル）が利用可能です。さらに高性能な Gemini Advanced（Gemini 1.5 Pro）は月2,900円のGoogle One AIプレミアムプランへの加入が必要です。",
  },
  {
    q: "GeminiとGoogle Bardは同じですか？",
    a: "はい、Google Bardは2024年2月にGeminiにリブランドされました。現在はGoogle Geminiという名称で提供されています。また、モデルもGemini 1.0→1.5→2.0とアップデートされており、以前のBardとは別物と考えて良いほど性能が向上しています。",
  },
  {
    q: "Geminiはスマートフォンで使えますか？",
    a: "はい、Androidでは標準Googleアシスタントの代わりにGeminiを使えます（設定で変更可能）。iOSでもGeminiアプリをApp Storeからダウンロードして使えます。AndroidのNexus/Pixelシリーズでは特に深く統合されています。",
  },
  {
    q: "Geminiは日本語に対応していますか？",
    a: "はい、日本語に完全対応しています。Gemini.google.comを日本語で使えます。ただしGemini AdvancedのGoogle Workspace連携（Gmail・ドキュメント等のアシスト機能）は一部機能が英語圏向けに先行提供されており、日本語対応が遅れている機能もあります。",
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

const winnerStyle: Record<CompareItem["winner"], string> = {
  "gemini": "text-blue-300 font-bold",
  "chatgpt": "text-green-300 font-bold",
  "claude": "text-orange-300 font-bold",
  "tie": "text-gray-400",
};

export default function GeminiGuidePage() {
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
            🔷 2026年最新版
          </span>
          <h1 className="text-3xl sm:text-4xl font-black mb-4 leading-tight">
            Gemini（ジェミニ）<br />
            <span className="text-blue-400">完全ガイド2026年版</span>
            <br />
            <span className="text-xl text-gray-300 font-bold">【使い方・ChatGPT・Claudeとの比較】</span>
          </h1>
          <p className="text-gray-400 text-sm leading-relaxed">
            Google が開発する AI「Gemini（ジェミニ）」の使い方・特徴・<br />
            ChatGPT/Claudeとの違いを2026年版で完全解説します。
          </p>
        </div>

        {/* 主要機能 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-6 border-l-4 border-blue-500 pl-3">
            🚀 Gemini の主要機能・強み
          </h2>
          <div className="space-y-4">
            {FEATURES.map((f, i) => (
              <div key={i} className="bg-gray-900 border border-gray-700 rounded-xl p-5">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{f.icon}</span>
                  <h3 className="text-white font-black text-base">{f.title}</h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-2">{f.description}</p>
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg px-3 py-2">
                  <span className="text-blue-400 text-xs font-bold">💡 活用例: </span>
                  <span className="text-gray-300 text-xs">{f.tip}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3AI比較表 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-6 border-l-4 border-blue-500 pl-3">
            ⚡ Gemini vs ChatGPT vs Claude 比較表
          </h2>
          <div className="bg-gray-900 border border-gray-700 rounded-xl overflow-hidden">
            <div className="grid grid-cols-4 bg-gray-800 text-xs font-bold p-3 gap-1">
              <div className="text-gray-300">比較項目</div>
              <div className="text-blue-400">🔷 Gemini</div>
              <div className="text-green-400">💬 ChatGPT</div>
              <div className="text-orange-400">🤖 Claude</div>
            </div>
            {COMPARISONS.map((c, i) => (
              <div key={i} className={`grid grid-cols-4 p-3 text-xs border-t border-gray-700/50 gap-1 ${i % 2 === 0 ? "bg-gray-900" : "bg-gray-800/30"}`}>
                <div className="text-gray-400 font-bold">{c.aspect}</div>
                <div className={c.winner === "gemini" ? "text-blue-300 font-bold" : "text-gray-400"}>
                  {c.winner === "gemini" && <span className="text-blue-400">✓ </span>}
                  {c.gemini}
                </div>
                <div className={c.winner === "chatgpt" ? "text-green-300 font-bold" : "text-gray-400"}>
                  {c.winner === "chatgpt" && <span className="text-green-400">✓ </span>}
                  {c.chatgpt}
                </div>
                <div className={c.winner === "claude" ? "text-orange-300 font-bold" : "text-gray-400"}>
                  {c.winner === "claude" && <span className="text-orange-400">✓ </span>}
                  {c.claude}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mb-12 bg-gradient-to-r from-blue-900/20 to-cyan-900/20 border border-blue-500/30 rounded-2xl p-6 text-center">
          <h2 className="text-xl font-bold text-white mb-2">
            📚 ChatGPTとClaudeも使いこなそう
          </h2>
          <p className="text-gray-300 text-sm mb-4">
            Gemini・ChatGPT・Claude の3つを使い分けることで<br />
            AI活用の生産性が最大化されます。
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="/chatgpt-guide" className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold px-5 py-2.5 rounded-xl transition-colors text-sm">
              ChatGPTガイドを読む →
            </a>
            <a href="/claude-guide" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold px-5 py-2.5 rounded-xl transition-colors text-sm">
              Claudeガイドを読む →
            </a>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-6 border-l-4 border-blue-500 pl-3">
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

        {/* アフィリエイト */}
        <AffiliateSectionAiNews />
      </div>
    </main>
  );
}

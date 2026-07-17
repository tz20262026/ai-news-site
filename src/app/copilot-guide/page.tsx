import type { Metadata } from "next";
import AffiliateSectionAiNews from "@/components/AffiliateSectionAiNews";

export const metadata: Metadata = {
  title: "Microsoft Copilot（コパイロット）完全ガイド2026年版【使い方・無料機能・ChatGPTとの違い】",
  description:
    "Microsoft Copilotの使い方を2026年版で完全解説。無料プランで使える機能・Windows/Edge/Microsoft 365との連携・ChatGPTとの違いをわかりやすく解説します。",
  alternates: {
    canonical: "https://ai-news-site-wheat.vercel.app/copilot-guide",
  },
  openGraph: {
    title: "Microsoft Copilot完全ガイド2026年版【使い方・無料・ChatGPTとの違い】",
    description: "Copilotの使い方・無料機能・Windows/Edge連携・ChatGPTとの違いを解説。",
    type: "article",
    locale: "ja_JP",
    url: "https://ai-news-site-wheat.vercel.app/copilot-guide",
  },
  twitter: {
    card: "summary_large_image",
    title: "Microsoft Copilot完全ガイド2026年版",
    description: "Copilotの使い方・無料機能・Windows統合を解説。",
  },
};

interface Feature {
  title: string;
  icon: string;
  desc: string;
  platform: string;
}

interface CompareRow {
  item: string;
  copilot: string;
  chatgpt: string;
  claude: string;
}

interface FaqItem {
  q: string;
  a: string;
}

const FEATURES: Feature[] = [
  {
    title: "Windows 11完全統合",
    icon: "🪟",
    desc: "Win+Cキーで瞬時に起動。デスクトップ右側に常駐し、PC操作のアシストからファイル検索まで対応。Windowsユーザーなら追加インストール不要。",
    platform: "Windows 11",
  },
  {
    title: "Microsoft Edgeサイドバー",
    icon: "🌐",
    desc: "Edgeブラウザのサイドバーに常駐。閲覧中のWebページを要約・比較・翻訳できる。PDFの要約にも対応。",
    platform: "Microsoft Edge",
  },
  {
    title: "Microsoft 365 Copilot",
    icon: "📊",
    desc: "Word・Excel・PowerPoint・OutlookにCopilotが搭載。文書作成・データ分析・プレゼン生成・メール返信を自動化。（Microsoft 365 Business以上で利用可）",
    platform: "Microsoft 365",
  },
  {
    title: "画像生成（DALL-E 3搭載）",
    icon: "🎨",
    desc: "「Designer」機能でDALL-E 3による画像生成が無料で使える。ChatGPT Plusと同等の画像生成を無料プランで利用できる点が大きな強み。",
    platform: "copilot.microsoft.com",
  },
  {
    title: "Bing検索との連携",
    icon: "🔍",
    desc: "最新情報をリアルタイムでWeb検索して回答。ChatGPTの無料版が知識カットオフあるのに対し、Copilotは無料版でも最新情報にアクセス可能。",
    platform: "全プラットフォーム",
  },
];

const COMPARISONS: CompareRow[] = [
  { item: "無料プランの有無", copilot: "✅ 無料あり", chatgpt: "✅ 無料あり", claude: "✅ 無料あり" },
  { item: "最新情報検索", copilot: "✅ 無料で対応", chatgpt: "⚠️ 有料版のみ", claude: "✅ 対応（claude.ai）" },
  { item: "画像生成（無料）", copilot: "✅ DALL-E 3無料", chatgpt: "❌ 有料版のみ", claude: "❌ 非対応" },
  { item: "Windows統合", copilot: "✅ Win+Cで起動", chatgpt: "❌ なし", claude: "❌ なし" },
  { item: "長文処理", copilot: "⚠️ 中程度", chatgpt: "✅ 高（128k）", claude: "✅ 最高（200k）" },
  { item: "コーディング支援", copilot: "✅ GitHub Copilot統合", chatgpt: "✅ 高品質", claude: "✅ 高品質" },
  { item: "Microsoft 365連携", copilot: "✅ 完全統合", chatgpt: "⚠️ 一部連携", claude: "❌ なし" },
  { item: "日本語精度", copilot: "✅ 良好", chatgpt: "✅ 最高水準", claude: "✅ 良好" },
];

const FAQS: FaqItem[] = [
  {
    q: "Microsoft Copilotは無料で使えますか？",
    a: "はい。copilot.microsoft.com またはWindows 11のCopilotボタンから無料で利用できます。無料版でもGPT-4ベースの回答・最新Web検索・DALL-E 3画像生成が使えます。より高度な機能（GPT-4 Turboの優先利用・Copilotページ作成等）はCopilot Pro（月額3,200円）が必要です。",
  },
  {
    q: "CopilotとChatGPTの違いは何ですか？",
    a: "主な違いは①Copilotは無料版でもWeb検索・最新情報に対応（ChatGPTは有料版のみ）②Copilotは無料で画像生成（DALL-E 3）が使える③CopilotはWindows・Microsoft 365と深く統合④ChatGPTはサードパーティプラグイン・GPTsのカスタマイズ性が高い、という点です。Microsoft製品をよく使う方はCopilotが便利です。",
  },
  {
    q: "Microsoft 365 CopilotとCopilot（無料版）の違いは何ですか？",
    a: "Microsoft 365 Copilotは有料のMicrosoft 365プラン（Business Standard以上）に追加できる企業向け機能で、Word・Excel・PowerPoint・OutlookなどのOfficeアプリに直接AIが組み込まれます。一方、無料版のCopilot（copilot.microsoft.com）はブラウザベースのチャットAIです。個人利用なら無料版で十分なケースが多いです。",
  },
  {
    q: "CopilotはスマホやiPhoneでも使えますか？",
    a: "はい。iOS・Androidともに公式のMicrosoft Copilotアプリ（無料）が提供されています。アプリをインストールすればスマホからも同様の機能が使えます。また、MicrosoftEdgeのモバイル版からもサイドバーのCopilotにアクセスできます。",
  },
  {
    q: "GitHub Copilotとは違うものですか？",
    a: "別製品です。GitHub Copilot（月額10ドル〜）はプログラミング専用のAIコーディングアシスタントで、VS CodeなどのIDEに統合してコード補完・生成を行います。Microsoft Copilot（無料〜）は汎用チャットAIです。両方ともMicrosoftグループの製品ですが、用途が異なります。開発者はGitHub Copilotの方がコーディング支援に特化しています。",
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

export default function CopilotGuidePage() {
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
            🪟 2026年最新版
          </span>
          <h1 className="text-3xl sm:text-4xl font-black mb-4 leading-tight">
            Microsoft Copilot<br />
            <span className="text-blue-400">完全ガイド2026年版</span>
            <br />
            <span className="text-xl text-gray-300 font-bold">【使い方・無料機能・ChatGPTとの違い】</span>
          </h1>
          <p className="text-gray-300 text-sm leading-relaxed">
            WindowsやEdgeに統合されたMicrosoft Copilotの<br />
            使い方・無料機能・ChatGPTとの違いを2026年版で解説。
          </p>
        </div>

        {/* 機能紹介 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-6 border-l-4 border-blue-500 pl-3">
            🪟 Copilotの主要機能5選
          </h2>
          <div className="space-y-4">
            {FEATURES.map((f, i) => (
              <div key={i} className="bg-gray-900 border border-gray-700 rounded-xl p-4">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="text-2xl">{f.icon}</span>
                  <h3 className="text-white font-black text-sm">{f.title}</h3>
                  <span className="text-xs bg-blue-500/20 text-blue-300 border border-blue-500/30 px-2 py-0.5 rounded-full">{f.platform}</span>
                </div>
                <p className="text-gray-300 text-xs leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 比較表 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-5 border-l-4 border-blue-500 pl-3">
            ⚖️ Copilot vs ChatGPT vs Claude 比較表
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-700">
            <table className="w-full text-xs">
              <thead>
                <tr className="bg-gray-800">
                  <th className="text-left p-3 text-gray-300 font-bold min-w-[120px]">比較項目</th>
                  <th className="text-center p-3 text-blue-400 font-bold">Copilot</th>
                  <th className="text-center p-3 text-green-400 font-bold">ChatGPT</th>
                  <th className="text-center p-3 text-orange-400 font-bold">Claude</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISONS.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-gray-900" : "bg-gray-900/50"}>
                    <td className="p-3 text-gray-300 font-semibold">{row.item}</td>
                    <td className="p-3 text-center text-gray-300">{row.copilot}</td>
                    <td className="p-3 text-center text-gray-300">{row.chatgpt}</td>
                    <td className="p-3 text-center text-gray-300">{row.claude}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-12 bg-gradient-to-r from-blue-900/20 to-gray-900/20 border border-blue-500/30 rounded-2xl p-6 text-center">
          <h2 className="text-xl font-bold text-white mb-2">
            🤖 他のAIツールも比較してみよう
          </h2>
          <p className="text-gray-300 text-sm mb-4">
            ChatGPT・Claude・Geminiとの詳細な比較は<br />
            各ガイドページで解説しています。
          </p>
          <a
            href="/chatgpt-guide"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm"
          >
            ChatGPT使い方ガイドを見る →
          </a>
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
                <p className="text-gray-300 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <AffiliateSectionAiNews />
      </div>
    </main>
  );
}

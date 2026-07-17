import type { Metadata } from "next";
import AffiliateSectionAiNews from "@/components/AffiliateSectionAiNews";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AIプレゼン・資料作成ツール完全ガイド2026年版【Gamma・Beautiful.ai・Canva AI・PowerPoint Copilot比較】",
  description:
    "AIプレゼン資料作成ツール2026年版完全ガイド。Gamma・Beautiful.ai・Canva AI・PowerPoint Copilotの特徴・無料枠・使い方を初心者向けに徹底比較解説します。",
  alternates: {
    canonical: "https://ai-news-site-wheat.vercel.app/ai-presentation-guide",
  },
  openGraph: {
    title: "AIプレゼン資料作成ツール完全ガイド2026年版【Gamma・Beautiful.ai比較】",
    description: "Gamma・Beautiful.ai・Canva AIなど最新AIプレゼン作成ツールを比較解説。",
    type: "article",
    locale: "ja_JP",
    url: "https://ai-news-site-wheat.vercel.app/ai-presentation-guide",
  },
  twitter: {
    card: "summary_large_image",
    title: "AIプレゼン資料作成ツール完全ガイド2026年版",
    description: "Gamma・Beautiful.ai・Canva AI・PowerPoint Copilotを比較。",
  },
};

interface PresentationTool {
  name: string;
  icon: string;
  freePlan: string;
  japaneseSupport: "◎" | "○" | "△";
  best: string;
  useCase: string;
}

interface FaqItem {
  q: string;
  a: string;
}

const PRESENTATION_TOOLS: PresentationTool[] = [
  {
    name: "Gamma（ガンマ）",
    icon: "⚡",
    freePlan: "月400クレジット（約4〜8デッキ）",
    japaneseSupport: "◎",
    best: "テキストを入力するだけで美しいスライドデッキを自動生成。日本語対応◎で起動時間ゼロ。ウェブベースで共有も簡単。スタートアップ・サービス紹介に最適。",
    useCase: "スタートアップ・サービス紹介・LP代替・資料共有",
  },
  {
    name: "Beautiful.ai",
    icon: "🎨",
    freePlan: "無料（ウォーターマーク付き）",
    japaneseSupport: "○",
    best: "スライドをデザインするとAIが自動でレイアウト・配置を最適化。テンプレートが100種類以上。企業プレゼン・投資家向けピッチデックに定評あり。",
    useCase: "企業プレゼン・ピッチデック・ビジネス資料",
  },
  {
    name: "Canva AI（マジックプレゼンテーション）",
    icon: "🖼️",
    freePlan: "完全無料（一部AI機能は有料）",
    japaneseSupport: "◎",
    best: "5,000種類以上のテンプレートとAI生成機能を組み合わせてプレゼン作成。日本語対応◎。チームでの共同編集・ブランドキット管理も得意。既にCanvaを使っている方に最適。",
    useCase: "SNS・マーケティング・学校・チーム共同作業",
  },
  {
    name: "PowerPoint Copilot",
    icon: "💼",
    freePlan: "Microsoft 365に含まれる（月1,320円〜）",
    japaneseSupport: "◎",
    best: "日本語での指示でPowerPointスライドを自動生成・修正・デザイン提案。既存PowerPointファイルとの互換性が完璧。企業・学校・官公庁での利用に最適。",
    useCase: "企業内プレゼン・学校・互換性重視の環境",
  },
  {
    name: "Tome（トーム）",
    icon: "📖",
    freePlan: "無料（月5作品まで）",
    japaneseSupport: "△",
    best: "ストーリーテリング型の独特なスライドフォーマット。ChatGPTとの連携でコンテンツ自動生成。VC向けピッチ・製品紹介に革新的なデザイン。",
    useCase: "スタートアップ・VC向けピッチ・製品デモ",
  },
];

const FAQS: FaqItem[] = [
  {
    q: "AIプレゼン作成ツールで最もおすすめはどれですか？",
    a: "目的別おすすめ：①日本語で素早くプレゼンを作りたい→Gamma（日本語◎・高速・無料版あり）②既にCanvaを使っている→Canva AIマジックプレゼンテーション（最も操作が直感的）③企業内でPowerPoint形式が必要→PowerPoint Copilot（互換性完璧）④投資家向けピッチ・美しいデザイン→Beautiful.ai。初心者にはGammaかCanva AIから始めることをおすすめします。",
  },
  {
    q: "Gamma（ガンマ）の使い方を教えてください。",
    a: "Gammaの基本的な使い方：①gamma.app にアクセスしGoogleアカウントでサインアップ②「New AI」ボタンをクリック③プレゼンのテーマ・目的を日本語で入力（例：「副業の始め方 ビジネス向けプレゼン 10スライド」）④AIが自動でスライド構成・デザインを生成（30秒〜1分）⑤各スライドのテキスト・画像を編集⑥共有リンクを生成またはPDF/PPTXで書き出し。コツは「スライド枚数・ターゲット・トーン」を指示文に含めると精度が上がります。",
  },
  {
    q: "AIで作ったプレゼンをそのまま仕事で使っても問題ありませんか？",
    a: "AIで作ったプレゼンをそのまま使うことは可能ですが、いくつか注意点があります：①内容の事実確認が必要（AIは誤情報・古い情報を含む場合がある）②自社・業界固有の情報は手動で追加③デザインのブランドカラーへの調整④機密情報をAIサービスに入力しない（社内情報の取り扱い）。特に数字・統計・固有名詞は必ず一次情報で確認することをおすすめします。",
  },
  {
    q: "PowerPoint Copilotは何ができますか？具体的な活用方法を教えてください。",
    a: "PowerPoint Copilotでできること：①テーマ入力→スライドセット自動生成（「売上報告 Q3」→10枚のスライド自動作成）②既存スライドの要約・改善提案③箇条書きテキスト→美しいスライドへの変換④スライドにあったデザイン・アニメーション提案⑤会議のTranscriptからプレゼン自動生成。Microsoft 365 Business Standardプラン（月1,320円〜）から利用可能。企業で広く使われている環境なら最もROIが高いツールです。",
  },
  {
    q: "AIプレゼンツールの著作権・商用利用はどうなっていますか？",
    a: "AIプレゼンツールの著作権・商用利用：①Gamma：Proプランでは商用利用OK・無料版はウォーターマーク付き②Beautiful.ai：有料プランで商用利用可③Canva AI：Canva Proプランで商用利用可・素材によってライセンス確認必要④PowerPoint Copilot：Microsoft 365の利用規約内で商用利用可。基本的に有料プランにアップグレードすれば商用利用できるものがほとんどです。使用する画像・イラスト素材のライセンスは別途確認が必要です。",
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

const japaneseColors: Record<PresentationTool["japaneseSupport"], string> = {
  "◎": "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
  "○": "bg-blue-500/20 text-blue-300 border-blue-500/30",
  "△": "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
};

export default function AiPresentationGuidePage() {
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
            📊 2026年最新版
          </span>
          <h1 className="text-3xl sm:text-4xl font-black mb-4 leading-tight">
            AIプレゼン資料作成ツール<br />
            <span className="text-blue-400">完全ガイド2026年版</span>
            <br />
            <span className="text-xl text-gray-300 font-bold">【Gamma・Beautiful.ai・Canva AI・Copilot比較】</span>
          </h1>
          <p className="text-gray-300 text-sm leading-relaxed">
            最新AIプレゼン作成ツールの特徴・無料枠・日本語対応・<br />
            用途を初心者向けに2026年版で完全比較します。
          </p>
        </div>

        {/* ツール比較 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-6 border-l-4 border-blue-500 pl-3">
            📊 AIプレゼン作成ツール5選 比較
          </h2>
          <div className="space-y-4">
            {PRESENTATION_TOOLS.map((tool, i) => (
              <div key={i} className="bg-gray-900 border border-gray-700 rounded-xl p-5">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="text-2xl">{tool.icon}</span>
                  <h3 className="text-white font-black text-sm">{tool.name}</h3>
                  <span className={`text-xs border px-2 py-0.5 rounded-full ${japaneseColors[tool.japaneseSupport]}`}>日本語対応{tool.japaneseSupport}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3 text-xs">
                  <div className="bg-gray-800 rounded px-2.5 py-1.5">
                    <span className="text-gray-300">🆓 無料プラン：</span>
                    <span className="text-gray-200">{tool.freePlan}</span>
                  </div>
                  <div className="bg-gray-800 rounded px-2.5 py-1.5">
                    <span className="text-gray-300">🎯 用途：</span>
                    <span className="text-gray-200">{tool.useCase}</span>
                  </div>
                </div>
                <p className="text-gray-300 text-xs leading-relaxed">{tool.best}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mb-12 bg-gradient-to-r from-blue-900/20 to-indigo-900/20 border border-blue-500/30 rounded-2xl p-6 text-center">
          <h2 className="text-xl font-bold text-white mb-2">
            🤖 AIライティングツールも合わせて使おう
          </h2>
          <p className="text-gray-300 text-sm mb-4">
            AIプレゼンとAIライティングを組み合わせれば<br />
            資料作成の全工程をAIで完結できます。
          </p>
          <Link
            href="/ai-writing-guide"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm"
          >
            AI文章生成ガイドを見る →
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

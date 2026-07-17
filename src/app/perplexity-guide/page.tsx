import type { Metadata } from "next";
import AffiliateSectionAiNews from "@/components/AffiliateSectionAiNews";

export const metadata: Metadata = {
  title: "Perplexity AI（パープレキシティ）完全ガイド2026年版【使い方・無料機能・ChatGPTとの違い】",
  description:
    "Perplexity AIの使い方を2026年版で完全解説。無料で使えるAI検索エンジンの機能・ChatGPT・Claudeとの違い・有料プランの価値をわかりやすく解説します。",
  alternates: {
    canonical: "https://ai-news-site-wheat.vercel.app/perplexity-guide",
  },
  openGraph: {
    title: "Perplexity AI完全ガイド2026年版【使い方・無料・ChatGPTとの違い】",
    description: "Perplexity AIの使い方・無料機能・ChatGPTとの違いを解説。",
    type: "article",
    locale: "ja_JP",
    url: "https://ai-news-site-wheat.vercel.app/perplexity-guide",
  },
  twitter: {
    card: "summary_large_image",
    title: "Perplexity AI完全ガイド2026年版",
    description: "Perplexity AIの使い方・AI検索エンジンとしての活用法を解説。",
  },
};

interface Feature {
  title: string;
  icon: string;
  desc: string;
  plan: "無料" | "無料/有料" | "有料";
}

interface CompareRow {
  item: string;
  perplexity: string;
  chatgpt: string;
  google: string;
}

interface UseCase {
  title: string;
  icon: string;
  example: string;
  tip: string;
}

interface FaqItem {
  q: string;
  a: string;
}

const FEATURES: Feature[] = [
  {
    title: "リアルタイムWeb検索＋AI回答",
    icon: "🔍",
    desc: "質問に対してWebを自動検索し、複数のソースを引用しながら回答する。引用元URLが明示されるため信頼性を確認できる。最新情報を含む回答が無料で使える。",
    plan: "無料",
  },
  {
    title: "ソースの引用・出典表示",
    icon: "📚",
    desc: "回答の各文章に番号付きの出典リンクが表示される。どの情報がどのサイトから取得されたかが一目でわかり、ファクトチェックが簡単。",
    plan: "無料",
  },
  {
    title: "Follow-up（追加質問）機能",
    icon: "💬",
    desc: "回答に関連した追加質問が自動サジェストされる。会話の流れを保ちながら深掘りができる。ChatGPTのチャット形式に近い体験。",
    plan: "無料",
  },
  {
    title: "Pro Search（高度な検索）",
    icon: "⚡",
    desc: "より詳細な検索クエリを複数発行し、深い調査を行う機能。複雑な質問や最新の研究・ニュース調査に威力を発揮。",
    plan: "無料/有料",
  },
  {
    title: "ファイル・画像アップロード",
    icon: "📎",
    desc: "PDFや画像をアップロードして内容について質問できる。論文・契約書・レポートの要約に便利。",
    plan: "有料",
  },
];

const COMPARE_ROWS: CompareRow[] = [
  { item: "リアルタイム検索", perplexity: "✅ 常時対応", chatgpt: "⚠️ 有料版のみ", google: "✅ 対応" },
  { item: "出典・引用表示", perplexity: "✅ 詳細表示", chatgpt: "⚠️ 一部表示", google: "✅ リンク表示" },
  { item: "AI要約・回答生成", perplexity: "✅ 高品質", chatgpt: "✅ 最高水準", google: "⚠️ AI Overview" },
  { item: "無料プランの使い勝手", perplexity: "✅ 非常に良い", chatgpt: "⚠️ 制限あり", google: "✅ 無料" },
  { item: "ファイルアップロード", perplexity: "⚠️ 有料版", chatgpt: "⚠️ 有料版", google: "❌ 非対応" },
  { item: "コーディング支援", perplexity: "⚠️ 基本的", chatgpt: "✅ 高品質", google: "⚠️ 基本的" },
  { item: "日本語精度", perplexity: "✅ 良好", chatgpt: "✅ 最高水準", google: "✅ 最高水準" },
];

const USE_CASES: UseCase[] = [
  {
    title: "最新情報の調査・リサーチ",
    icon: "📰",
    example: "「2026年最新のAI規制動向は？」「今週のIT業界ニュースをまとめて」",
    tip: "出典URLが表示されるため、ニュース記事の一次情報確認が容易。",
  },
  {
    title: "学術・専門知識の理解",
    icon: "🎓",
    example: "「機械学習の転移学習とはどういう技術ですか？」「最新の気候変動研究の結論は？」",
    tip: "複数の学術論文・専門サイトから統合した回答が得られる。",
  },
  {
    title: "競合・市場調査",
    icon: "📊",
    example: "「日本のクラウドファンディング市場の現状と主要プレイヤーは？」",
    tip: "ビジネス調査に最適。レポート作成の下調べに活用できる。",
  },
  {
    title: "製品・サービスの比較",
    icon: "⚖️",
    example: "「iPhone 17とGalaxy S26を徹底比較して」「Notionと概念が似たツールを5つ教えて」",
    tip: "複数の製品レビューや比較記事を統合してくれるため、調査時間を大幅短縮。",
  },
];

const FAQS: FaqItem[] = [
  {
    q: "Perplexity AIは日本語で使えますか？",
    a: "はい、日本語で質問・回答が可能です。ただし検索ソースは英語情報が多い分野では英語中心の引用になることがあります。「日本語のサイトを中心に検索して」と指示を追加するとより日本語ソースを優先してくれます。",
  },
  {
    q: "Perplexity AIは無料で使えますか？",
    a: "はい、基本機能は無料で使えます。無料版でもリアルタイムWeb検索・出典引用・Follow-up質問・Pro Search（1日5回程度）が使えます。有料版（Perplexity Pro：月額20ドル）ではPro Search回数無制限・GPT-4oやClaude使用・ファイルアップロードなどの機能が使えます。",
  },
  {
    q: "Perplexity AIとGoogle検索の違いは何ですか？",
    a: "Google検索は「関連するWebページの一覧」を返すのに対し、Perplexity AIは「複数のWebページを統合した回答文」を生成します。Perplexityは調査・質問回答に特化しており、Google検索は「どのサイトに情報があるか」を探すのに最適です。両方を使い分けることで情報収集効率が上がります。",
  },
  {
    q: "Perplexityの回答は正確ですか？誤情報はありますか？",
    a: "出典URLが表示されるため他のAIより信頼性確認が容易ですが、完全に正確ではありません。特に「数値・統計・最新の日付情報」は元ソースを確認することをおすすめします。また検索エンジンが拾うサイトの品質によって回答の精度も変わります。重要な情報は必ず一次ソースで確認しましょう。",
  },
  {
    q: "Perplexity AIのスマホアプリはありますか？",
    a: "はい。iOS・Android両方に公式アプリ（無料）があります。スマホアプリでは音声入力にも対応しており、「Siriのように話しかける」使い方もできます。また「Perplexity for iOS」のWidget機能でホーム画面からすぐに検索できます。",
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

const planStyle: Record<Feature["plan"], string> = {
  "無料": "bg-green-500/20 text-green-300 border-green-500/30",
  "無料/有料": "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
  "有料": "bg-purple-500/20 text-purple-300 border-purple-500/30",
};

export default function PerplexityGuidePage() {
  return (
    <main className="bg-gray-950 min-h-screen text-gray-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="max-w-3xl mx-auto px-4 py-12">

        {/* ヒーロー */}
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold bg-teal-500/20 text-teal-400 border border-teal-500/30 rounded-full px-4 py-1 mb-4">
            🔍 2026年最新版
          </span>
          <h1 className="text-3xl sm:text-4xl font-black mb-4 leading-tight">
            Perplexity AI<br />
            <span className="text-teal-400">完全ガイド2026年版</span>
            <br />
            <span className="text-xl text-gray-300 font-bold">【使い方・無料機能・ChatGPTとの違い】</span>
          </h1>
          <p className="text-gray-300 text-sm leading-relaxed">
            AIが出典付きで答えるAI検索エンジン「Perplexity AI」の<br />
            使い方・無料機能・ChatGPTとの違いを2026年版で解説。
          </p>
        </div>

        {/* 機能一覧 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-6 border-l-4 border-teal-500 pl-3">
            🔍 Perplexity AIの主要機能5選
          </h2>
          <div className="space-y-4">
            {FEATURES.map((f, i) => (
              <div key={i} className="bg-gray-900 border border-gray-700 rounded-xl p-4">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="text-2xl">{f.icon}</span>
                  <h3 className="text-white font-black text-sm">{f.title}</h3>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full border ${planStyle[f.plan]}`}>{f.plan}</span>
                </div>
                <p className="text-gray-300 text-xs leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 活用ケース */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-5 border-l-4 border-teal-500 pl-3">
            💡 Perplexity AIの活用例4選
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {USE_CASES.map((u, i) => (
              <div key={i} className="bg-gray-900 border border-gray-700 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">{u.icon}</span>
                  <h3 className="text-white font-bold text-sm">{u.title}</h3>
                </div>
                <p className="text-xs text-teal-400 bg-teal-500/10 rounded p-2 mb-2 leading-relaxed">例: {u.example}</p>
                <p className="text-gray-300 text-xs leading-relaxed">{u.tip}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 比較表 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-5 border-l-4 border-teal-500 pl-3">
            ⚖️ Perplexity vs ChatGPT vs Google 比較表
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-700">
            <table className="w-full text-xs">
              <thead>
                <tr className="bg-gray-800">
                  <th className="text-left p-3 text-gray-300 font-bold">比較項目</th>
                  <th className="text-center p-3 text-teal-400 font-bold">Perplexity</th>
                  <th className="text-center p-3 text-green-400 font-bold">ChatGPT</th>
                  <th className="text-center p-3 text-blue-400 font-bold">Google</th>
                </tr>
              </thead>
              <tbody>
                {COMPARE_ROWS.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-gray-900" : "bg-gray-900/50"}>
                    <td className="p-3 text-gray-300 font-semibold">{row.item}</td>
                    <td className="p-3 text-center text-gray-300">{row.perplexity}</td>
                    <td className="p-3 text-center text-gray-300">{row.chatgpt}</td>
                    <td className="p-3 text-center text-gray-300">{row.google}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-12 bg-gradient-to-r from-teal-900/20 to-gray-900/20 border border-teal-500/30 rounded-2xl p-6 text-center">
          <h2 className="text-xl font-bold text-white mb-2">
            🤖 他のAIツールも比較しよう
          </h2>
          <p className="text-gray-300 text-sm mb-4">
            ChatGPT・Claude・Gemini・Copilotの詳細な<br />
            使い方ガイドも合わせてご覧ください。
          </p>
          <a
            href="/ai-tools-guide"
            className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm"
          >
            無料AIツール一覧を見る →
          </a>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-5 border-l-4 border-teal-500 pl-3">
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

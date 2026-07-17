import type { Metadata } from "next";
import AffiliateSectionAiNews from "@/components/AffiliateSectionAiNews";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Google NotebookLM 使い方完全ガイド2026年版【無料・日本語対応・PDF要約・勉強・仕事活用】",
  description:
    "Google NotebookLMの使い方を2026年版で完全解説。無料でPDF・論文・記事を要約・質問応答・音声ポッドキャスト生成ができるAIノートの活用方法を詳しく解説します。",
  alternates: {
    canonical: "https://ai-news-site-wheat.vercel.app/notebooklm-guide",
  },
  openGraph: {
    title: "Google NotebookLM 使い方完全ガイド2026年版",
    description: "NotebookLMでPDF要約・勉強・仕事を効率化する方法を解説。",
    type: "article",
    locale: "ja_JP",
    url: "https://ai-news-site-wheat.vercel.app/notebooklm-guide",
  },
  twitter: {
    card: "summary_large_image",
    title: "Google NotebookLM 使い方完全ガイド2026年版",
    description: "NotebookLMの使い方・PDF要約・音声ポッドキャスト生成を解説。",
  },
};

interface Feature {
  name: string;
  icon: string;
  free: boolean;
  desc: string;
  usecase: string;
}

interface FaqItem {
  q: string;
  a: string;
}

const FEATURES: Feature[] = [
  {
    name: "PDF・ドキュメント読み込み",
    icon: "📄",
    free: true,
    desc: "PDF・Google Docs・Google Slides・テキストファイル・YouTube動画・ウェブページを最大50個インポートして、まとめて分析・質問ができる。",
    usecase: "論文・法律文書・契約書・取扱説明書・参考書の内容をAIに質問",
  },
  {
    name: "AI質問応答（グラウンディング）",
    icon: "🤖",
    free: true,
    desc: "インポートしたドキュメントの内容だけをソースとして回答するため、ハルシネーション（嘘の情報）が少ない。回答に引用元も表示される。",
    usecase: "「この契約書のリスクは？」「この論文の主張は？」などドキュメント特化の質問",
  },
  {
    name: "音声ポッドキャスト生成（Audio Overview）",
    icon: "🎙",
    free: true,
    desc: "複数のドキュメントを2人のAIホストが対話形式で解説するポッドキャストを自動生成。移動中に耳で学習できる革命的な機能。",
    usecase: "難しい技術記事や論文を通勤・移動中に「聴いて」理解する",
  },
  {
    name: "ノートの自動生成",
    icon: "📝",
    free: true,
    desc: "ドキュメントの要約・重要ポイント・タイムライン・ブリーフィングドキュメントをワンクリックで自動生成。",
    usecase: "長い報告書・議事録・記事の要点を短時間で把握する",
  },
  {
    name: "ファクトチェック・引用表示",
    icon: "✅",
    free: true,
    desc: "回答の根拠となる箇所を元のドキュメントで強調表示。AIの回答が本当に元の資料に基づいているか確認できる。",
    usecase: "仕事の調査・レポート作成で情報の信頼性を担保する",
  },
];

const FAQS: FaqItem[] = [
  {
    q: "Google NotebookLMは無料で使えますか？",
    a: "はい、基本機能は無料で使えます。Googleアカウントがあれば今すぐ利用開始できます。2026年現在、有料版「NotebookLM Plus」（月額20ドル・Google One AIプレミアムに含まれる）では5倍の利用量・より高品質なレスポンスなどが利用できます。ただし無料版でも通常のユースケースには十分な機能があります。",
  },
  {
    q: "NotebookLMでどんなファイルが読み込めますか？",
    a: "2026年現在、読み込めるソースは①PDF②Google Docs③Google Slides④テキストファイル（.txt）⑤YouTubeのURL（字幕がある動画）⑥ウェブページのURL⑦音声・動画ファイルです。1つのノートブックに最大50個のソースを追加でき、各ソースは最大50万トークン（約40万文字）まで対応しています。",
  },
  {
    q: "NotebookLMをどんな用途で使うと最も効果的ですか？",
    a: "特に効果的な用途は①論文・学術文献の要約・質問（研究・学術調査）②法律・契約文書の要点把握（ビジネス活用）③参考書・教科書での学習（受験・資格勉強）④YouTube動画の内容整理（学習・情報収集）⑤社内文書・マニュアルへの質問（業務効率化）⑥音声ポッドキャストで通勤中に学習（移動時間活用）です。",
  },
  {
    q: "NotebookLMとChatGPTの違いは何ですか？",
    a: "最大の違いは「情報の根拠の透明性」です。ChatGPTは学習データ全体から回答を生成するため、誤情報（ハルシネーション）のリスクがあります。NotebookLMは自分がアップロードしたドキュメントのみをソースとして回答し、引用箇所を明示するため情報の信頼性が高いです。一方ChatGPTは汎用的な質問・文章生成に向いています。目的に応じて使い分けることをおすすめします。",
  },
  {
    q: "NotebookLMの音声ポッドキャスト（Audio Overview）はどんな言語に対応していますか？",
    a: "2026年現在、日本語を含む多くの言語に対応しています。日本語のドキュメントを読み込むと日本語のポッドキャストが生成されます。英語のドキュメントを読み込んで「日本語で要約して」と指示すれば日本語での解説ポッドキャストも生成できます。ただしAIホストの音声の自然さは英語が最も高く、日本語は今後さらなる改善が見込まれます。",
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

export default function NotebooklmGuidePage() {
  return (
    <main className="bg-gray-950 min-h-screen text-gray-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="max-w-3xl mx-auto px-4 py-12">

        {/* ヒーロー */}
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 rounded-full px-4 py-1 mb-4">
            📓 2026年最新版
          </span>
          <h1 className="text-3xl sm:text-4xl font-black mb-4 leading-tight">
            Google NotebookLM<br />
            <span className="text-yellow-400">使い方完全ガイド2026年版</span>
            <br />
            <span className="text-xl text-gray-300 font-bold">【無料・PDF要約・音声ポッドキャスト生成】</span>
          </h1>
          <p className="text-gray-300 text-sm leading-relaxed">
            PDF・論文・動画を読み込んで質問・要約・音声で学べる<br />
            Google NotebookLMの使い方を2026年版で完全解説。
          </p>
        </div>

        {/* 機能一覧 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-6 border-l-4 border-yellow-500 pl-3">
            📓 主要機能5選の解説
          </h2>
          <div className="space-y-4">
            {FEATURES.map((f, i) => (
              <div key={i} className="bg-gray-900 border border-gray-700 rounded-xl p-5">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="text-2xl">{f.icon}</span>
                  <h3 className="text-white font-black text-sm">{f.name}</h3>
                  {f.free && (
                    <span className="text-xs font-bold bg-green-500/20 text-green-300 border border-green-500/30 px-2 py-0.5 rounded-full">
                      無料
                    </span>
                  )}
                </div>
                <p className="text-gray-300 text-xs leading-relaxed mb-3">{f.desc}</p>
                <div className="bg-yellow-900/20 border border-yellow-700/30 rounded px-2.5 py-2">
                  <span className="text-yellow-400 text-xs font-bold block mb-0.5">💡 活用例</span>
                  <span className="text-gray-300 text-xs">{f.usecase}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mb-12 bg-gradient-to-r from-yellow-900/20 to-orange-900/20 border border-yellow-500/30 rounded-2xl p-6 text-center">
          <h2 className="text-xl font-bold text-white mb-2">
            🤖 他のAIツールも活用しよう
          </h2>
          <p className="text-gray-300 text-sm mb-4">
            NotebookLMはドキュメント特化型。汎用AIのChatGPTや<br />
            検索特化のPerplexityと組み合わせると最強です。
          </p>
          <Link
            href="/chatgpt-guide"
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-6 py-3 rounded-xl transition-colors text-sm"
          >
            ChatGPT使い方ガイドを見る →
          </Link>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-5 border-l-4 border-yellow-500 pl-3">
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

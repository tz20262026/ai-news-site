import type { Metadata } from "next";
import AffiliateSectionAiNews from "@/components/AffiliateSectionAiNews";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AIコーディングツール完全ガイド2026年版【GitHub Copilot・Cursor・Claude Code比較・使い方】",
  description:
    "AIコーディングツール2026年版完全ガイド。GitHub Copilot・Cursor・Claude Code・Codeium・WindsurfのAIコード補完・自動生成・リファクタリング機能を比較解説します。",
  openGraph: {
    title: "AIコーディングツール完全ガイド2026年版【GitHub Copilot・Cursor・Claude Code比較】",
    description: "GitHub Copilot・Cursor・Claude Codeなど最新AIコーディングツールを比較解説。",
    type: "article",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "AIコーディングツール完全ガイド2026年版",
    description: "GitHub Copilot・Cursor・Claude Codeを比較。2026年最新情報。",
  },
};

interface CodingTool {
  name: string;
  icon: string;
  freePlan: string;
  model: string;
  best: string;
  features: string[];
}

interface FaqItem {
  q: string;
  a: string;
}

const CODING_TOOLS: CodingTool[] = [
  {
    name: "GitHub Copilot",
    icon: "🐙",
    freePlan: "月2,000回まで無料（個人）",
    model: "GPT-4o / Claude Sonnet",
    best: "VS Code・JetBrainsとの統合が最高峰。コード補完精度が高く、既存プロジェクトへの組み込みが簡単。",
    features: ["コード補完（インライン）", "チャット機能（コード説明・修正）", "テスト自動生成", "プルリクエストの要約"],
  },
  {
    name: "Cursor",
    icon: "🖱️",
    freePlan: "月500回まで無料（Pro機能制限）",
    model: "Claude Sonnet / GPT-4o / Gemini",
    best: "コードベース全体を理解したAI編集が強力。VS Codeベースで移行が簡単。複数ファイルをまたぐリファクタリングが得意。",
    features: ["コードベース全体の理解（@codebase）", "複数ファイル同時編集（Composer）", "バグ自動修正", "AIとの自然言語での会話"],
  },
  {
    name: "Claude Code",
    icon: "🤖",
    freePlan: "Anthropic APIのトークン消費（有料）",
    model: "Claude Opus / Sonnet",
    best: "CLIベースで完全自律型のコーディングエージェント。複雑なタスクを自律的にこなし、コード理解・修正・テスト・コミットまで一気に実行可能。",
    features: ["自律型コーディングエージェント", "ターミナルからの操作", "ファイル操作・git操作の自動化", "複雑なリファクタリングの自律実行"],
  },
  {
    name: "Windsurf（旧Codeium）",
    icon: "🏄",
    freePlan: "完全無料（Codeiumの無料版）",
    model: "Claude Sonnet / GPT-4o",
    best: "無料で使えるAIコーディングエディタ。Cursor的な「Cascade（カスケード）」機能でマルチファイル編集が可能。コスト重視の方におすすめ。",
    features: ["Cascade：マルチファイル編集", "Flows：自律的なコーディングフロー", "コード補完（高精度）", "50種類以上のIDEをサポート"],
  },
  {
    name: "Amazon Q Developer",
    icon: "☁️",
    freePlan: "AWS無料枠で月5,000回まで",
    model: "Amazon独自モデル",
    best: "AWSサービスとの連携が最強。Lambda・EC2・CDKのコード生成・デバッグに特化。AWSを使う開発者には必須ツール。",
    features: ["AWSリソースのコード生成", "セキュリティ脆弱性スキャン", "コードレビュー自動化", "CLIコマンドの自動補完"],
  },
];

const FAQS: FaqItem[] = [
  {
    q: "AIコーディングツールはどれから始めればいいですか？",
    a: "初心者には①GitHub Copilot（VS Code利用者・最も普及しており情報が豊富）またはWindsurf（無料で始めたい方）がおすすめです。既にコーディング経験がある方は②Cursor（複数ファイルをまたぐ大きなプロジェクト向け）が特に評価が高いです。まずは無料版から試して自分の開発スタイルに合うものを選びましょう。",
  },
  {
    q: "GitHub CopilotとCursorはどちらが優れていますか？",
    a: "用途によって選び方が変わります。個々のコード補完・小規模な修正→GitHub Copilot（VS Codeとの統合が強い）。複数ファイルをまたぐリファクタリング・プロジェクト全体の理解→Cursor（Composerとコードベース全体の理解が強み）。CursorはVS Codeベースなので移行コストが低く、現在最も急成長しているAIコーディングツールです。",
  },
  {
    q: "AIコーディングツールを使ってもエラーが多いですが、どうすれば改善できますか？",
    a: "AIコーディングツールのエラーを減らすポイントは①プロンプト（指示）を具体的に書く（「Reactで〇〇をするコンポーネントを書いて」など）②既存のコードをコンテキストとして渡す（@ファイル名で参照）③一度に大きな変更をさせず小さなステップに分ける④生成されたコードを必ずレビューして理解してから使う⑤エラーメッセージをそのままAIに貼り付けて修正を依頼する、の5つが効果的です。",
  },
  {
    q: "AIコーディングツールのセキュリティ上の注意点はありますか？",
    a: "AIコーディングツールのセキュリティ上の注意点は①APIキー・パスワード・秘密情報を含むコードをAIに送らない②生成されたコードに脆弱性（SQLインジェクション・XSSなど）が含まれていないかレビューする③企業の機密コードをパブリックなAIサービスに送ることの可否を確認する④GitHubのコパイロットは設定でコードスニペットの送信を無効化できる。特にチーム開発・業務利用では社内セキュリティポリシーの確認が必要です。",
  },
  {
    q: "プログラミング未経験でもAIコーディングツールで開発できますか？",
    a: "AIコーディングツールはプログラミングの敷居を大きく下げましたが、完全な未経験者がいきなり本番品質のアプリを開発するのは難しいのが現実です。理由は①生成されたコードの品質を判断するにも基礎知識が必要②エラーが出た時に対処するには理解が必要③セキュリティ・パフォーマンスの問題に気づけない。まずHTMLとCSSの基礎→JavaScriptの基礎を学んでからAIツールを活用すると、学習速度と成果物の品質が格段に上がります。",
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

export default function AiCodingGuidePage() {
  return (
    <main className="bg-gray-950 min-h-screen text-gray-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="max-w-3xl mx-auto px-4 py-12">

        {/* ヒーロー */}
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full px-4 py-1 mb-4">
            💻 2026年最新版
          </span>
          <h1 className="text-3xl sm:text-4xl font-black mb-4 leading-tight">
            AIコーディングツール<br />
            <span className="text-emerald-400">完全ガイド2026年版</span>
            <br />
            <span className="text-xl text-gray-300 font-bold">【Copilot・Cursor・Claude Code徹底比較】</span>
          </h1>
          <p className="text-gray-400 text-sm leading-relaxed">
            最新AIコーディングツールの特徴・無料枠・使い方を<br />
            初心者から上級者向けに完全比較解説します。
          </p>
        </div>

        {/* ツール比較 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-6 border-l-4 border-emerald-500 pl-3">
            💻 AIコーディングツール5選 比較
          </h2>
          <div className="space-y-4">
            {CODING_TOOLS.map((tool, i) => (
              <div key={i} className="bg-gray-900 border border-gray-700 rounded-xl p-5">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="text-2xl">{tool.icon}</span>
                  <h3 className="text-white font-black text-sm">{tool.name}</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3 text-xs">
                  <div className="bg-gray-800 rounded px-2.5 py-1.5">
                    <span className="text-gray-400">🆓 無料プラン：</span>
                    <span className="text-gray-200">{tool.freePlan}</span>
                  </div>
                  <div className="bg-gray-800 rounded px-2.5 py-1.5">
                    <span className="text-gray-400">🧠 AI：</span>
                    <span className="text-gray-200">{tool.model}</span>
                  </div>
                </div>
                <p className="text-gray-400 text-xs leading-relaxed mb-3">{tool.best}</p>
                <div className="flex flex-wrap gap-1.5">
                  {tool.features.map((f, fi) => (
                    <span key={fi} className="text-xs bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 px-2 py-0.5 rounded-full">{f}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mb-12 bg-gradient-to-r from-emerald-900/20 to-blue-900/20 border border-emerald-500/30 rounded-2xl p-6 text-center">
          <h2 className="text-xl font-bold text-white mb-2">
            🤖 ChatGPTのコーディング活用も確認しよう
          </h2>
          <p className="text-gray-300 text-sm mb-4">
            AIコーディングツールと合わせてChatGPTのプロンプト活用で<br />
            開発効率をさらに上げられます。
          </p>
          <Link
            href="/chatgpt-prompt-guide"
            className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm"
          >
            ChatGPTプロンプト集を見る →
          </Link>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-5 border-l-4 border-emerald-500 pl-3">
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

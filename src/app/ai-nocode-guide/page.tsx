import type { Metadata } from "next";
import AffiliateSectionAiNews from "@/components/AffiliateSectionAiNews";

export const metadata: Metadata = {
  title:
    "AIノーコードツール完全ガイド2026年版【Make・Zapier・Dify・Bolt.new比較】",
  description:
    "ノーコード×AIでアプリ開発・自動化・チャットボット作成ができるツールを徹底解説。Make、Zapier、Dify、Voiceflow、Bolt.new、Cursorの特徴・料金・使いやすさを比較。初心者向けガイド付き。",
  keywords: [
    "AIノーコード",
    "ノーコード AI 2026",
    "Make AI",
    "Zapier AI",
    "Dify 使い方",
    "Bolt.new",
    "Voiceflow",
    "Cursor AI",
    "ノーコード アプリ開発",
    "AI 自動化 ノーコード",
    "チャットボット ノーコード",
  ],
  alternates: {
    canonical: "https://ai-news-site-wheat.vercel.app/ai-nocode-guide",
  },
  openGraph: {
    title:
      "AIノーコードツール完全ガイド2026年版【Make・Zapier・Dify・Bolt.new比較】",
    description:
      "ノーコード×AIでアプリ開発・自動化・チャットボット作成ができるツールを徹底解説。Make、Zapier、Dify、Voiceflow、Bolt.new、Cursorの特徴・料金・使いやすさを比較。",
    type: "article",
    locale: "ja_JP",
    url: "https://ai-news-site-wheat.vercel.app/ai-nocode-guide",
  },
  twitter: {
    card: "summary_large_image",
    title: "AIノーコードツール完全ガイド2026年版",
    description:
      "Make・Zapier・Dify・Voiceflow・Bolt.new・Cursorを比較。初心者が最初に試すべきツールも解説。",
  },
};

/* ────────────────────────────────────────────
   データ定義
──────────────────────────────────────────── */

type Difficulty = "初心者向け" | "中級者向け" | "上級者向け";

interface NocodeToolItem {
  id: string;
  name: string;
  category: string;
  icon: string;
  color: string;
  difficulty: Difficulty;
  freePlan: string;
  paidPlan: string;
  bestFor: string;
  features: string[];
  cons: string;
  japaneseSupport: boolean;
}

interface StarterPath {
  step: number;
  tool: string;
  task: string;
  time: string;
  description: string;
}

interface FAQ {
  question: string;
  answer: string;
}

const NOCODE_TOOLS: NocodeToolItem[] = [
  {
    id: "make",
    name: "Make（旧Integromat）",
    category: "業務自動化",
    icon: "⚙️",
    color: "text-violet-400",
    difficulty: "中級者向け",
    freePlan: "無料あり（1,000オペレーション/月）",
    paidPlan: "Core $9/月〜",
    bestFor: "複雑なワークフロー自動化",
    features: [
      "1,000以上のアプリ連携",
      "視覚的なフロー設計（ドラッグ&ドロップ）",
      "条件分岐・ループ処理に対応",
      "OpenAI / Claude API連携",
      "スケジュール実行・Webhook対応",
    ],
    cons: "初期設定に少し時間がかかる",
    japaneseSupport: false,
  },
  {
    id: "zapier",
    name: "Zapier",
    category: "業務自動化",
    icon: "⚡",
    color: "text-orange-400",
    difficulty: "初心者向け",
    freePlan: "無料あり（100タスク/月）",
    paidPlan: "Starter $19.99/月〜",
    bestFor: "手軽なアプリ連携・自動化",
    features: [
      "7,000以上のアプリ連携（業界最多）",
      "設定が最も簡単・初心者向け",
      "ChatGPT/AI Actionsとの連携",
      "トリガー→アクション型の直感操作",
      "日本語UIあり",
    ],
    cons: "複雑な条件分岐は上位プランが必要",
    japaneseSupport: true,
  },
  {
    id: "dify",
    name: "Dify",
    category: "AIアプリ開発",
    icon: "🤖",
    color: "text-blue-400",
    difficulty: "中級者向け",
    freePlan: "無料あり（200メッセージ/日）",
    paidPlan: "Professional $59/月〜",
    bestFor: "カスタムAIチャットボット・RAG構築",
    features: [
      "ノーコードでAIチャットボット作成",
      "RAG（自分のデータを学習させる）対応",
      "複数LLM切り替え（ChatGPT・Claude・Gemini）",
      "エージェント・ワークフロー機能",
      "オープンソース・自己ホスト可能",
    ],
    cons: "UI日本語対応が部分的",
    japaneseSupport: false,
  },
  {
    id: "voiceflow",
    name: "Voiceflow",
    category: "チャットボット",
    icon: "💬",
    color: "text-cyan-400",
    difficulty: "初心者向け",
    freePlan: "無料あり（エージェント2個まで）",
    paidPlan: "Basic $40/月〜",
    bestFor: "カスタマーサポートAI・音声アシスタント",
    features: [
      "視覚的なチャットフロー設計",
      "GPT-4o・Claude連携",
      "Webサイト・Slack・Notion埋め込み",
      "音声ボット対応（Alexa・Google Assistant）",
      "分析ダッシュボード付き",
    ],
    cons: "月額コストが高め",
    japaneseSupport: false,
  },
  {
    id: "bolt",
    name: "Bolt.new",
    category: "AIアプリ開発",
    icon: "⚡",
    color: "text-yellow-400",
    difficulty: "初心者向け",
    freePlan: "無料あり（制限あり）",
    paidPlan: "Pro $20/月〜",
    bestFor: "自然言語でWebアプリを即作成",
    features: [
      "日本語でアプリ要件を入力→即生成",
      "React・Next.js・Vue対応",
      "リアルタイムプレビュー",
      "GitHub・Vercelへ即デプロイ",
      "コードの表示・直接編集も可能",
    ],
    cons: "大規模アプリには不向き",
    japaneseSupport: true,
  },
  {
    id: "cursor",
    name: "Cursor",
    category: "AIコーディング",
    icon: "🖊️",
    color: "text-emerald-400",
    difficulty: "中級者向け",
    freePlan: "無料あり（2週間Pro試用）",
    paidPlan: "Pro $20/月",
    bestFor: "AI支援によるコード作成・修正",
    features: [
      "VS Code互換のAIエディタ",
      "自然言語でコード生成・修正",
      "コードベース全体をAIが理解",
      "Claude 3.7 / GPT-4o 利用可",
      "エラー自動修正（Composer機能）",
    ],
    cons: "基本的なコード知識が少し必要",
    japaneseSupport: true,
  },
];

const STARTER_PATHS: StarterPath[] = [
  {
    step: 1,
    tool: "Zapier",
    task: "最初の自動化を体験する",
    time: "30分",
    description:
      "GmailにメールがきたらSlackに通知する、といった簡単な自動化を作る。設定が最も簡単でAIの恩恵をすぐ体験できる。",
  },
  {
    step: 2,
    tool: "Bolt.new",
    task: "簡単なWebアプリを作る",
    time: "1時間",
    description:
      "「タスク管理アプリを作って」と日本語で入力するだけでReactアプリが生成される。コードゼロでアプリ制作を体験できる。",
  },
  {
    step: 3,
    tool: "Dify",
    task: "自分専用AIチャットボットを作る",
    time: "2〜3時間",
    description:
      "PDFや自分のドキュメントを読み込ませた専用AIを作成。RAG構築の基礎を学べ、ビジネス活用への応用力が上がる。",
  },
  {
    step: 4,
    tool: "Make",
    task: "複雑なワークフローを組む",
    time: "1日",
    description:
      "複数のアプリをつなぎ、条件分岐・ループを含む高度な自動化を構築。ここまでできれば業務自動化の専門家レベル。",
  },
];

const FAQS: FAQ[] = [
  {
    question: "プログラミング未経験でもノーコードAIツールは使えますか？",
    answer:
      "はい、使えます。ZapierとBolt.newは特に初心者向けに設計されており、日本語での操作・プロンプト入力だけでアプリ・自動化を作れます。Bolt.newは「ログインできるTodoアプリを作って」と日本語で入力するだけでReactアプリが完成します。まずはZapierかBolt.newから始めることをおすすめします。",
  },
  {
    question: "MakeとZapierはどちらを選ぶべきですか？",
    answer:
      "初心者・シンプルな連携ならZapier、複雑なフロー・コスパ重視ならMakeです。Zapierは設定が直感的で7,000以上のアプリに対応する一方、無料枠は月100タスクと少なめです。Makeは月1,000オペレーション無料と枠が広く、視覚的なフローエディタで複雑な条件分岐も組めます。コスト重視ならMake、手軽さ重視ならZapierです。",
  },
  {
    question: "Difyで自社データを学習させたAIを作れますか？",
    answer:
      "はい、DifyのRAG（Retrieval-Augmented Generation）機能を使えば、PDFや社内文書・Webサイトのデータをアップロードして「自社専用AI」を作れます。たとえば「社内規程マニュアルに答えるAIアシスタント」「商品カタログから回答するチャットボット」を数時間で構築できます。オープンソースのため自社サーバーで運用することも可能です。",
  },
  {
    question: "Bolt.newで作ったアプリは本番環境で使えますか？",
    answer:
      "はい、GitHub連携からVercelやNetlifyへ一クリックでデプロイできます。Bolt.newで生成されたコードはReact/Next.jsなどの標準的なフレームワークで書かれているため、生成後にCursorなどで修正・拡張することも可能です。ただし大規模・高トラフィックなシステムには向いておらず、そのような場合はエンジニアによる開発が推奨されます。",
  },
  {
    question: "AIノーコードツールを副業・収益化に活用できますか？",
    answer:
      "十分に活用できます。代表的な方法は①Zapier/Makeで業務自動化の受託（月3〜10万円/案件）②Difyで企業向けAIチャットボット構築（初期費用10〜50万円）③Bolt.newで簡単なWebアプリを作りSubscription販売④ノーコードAI構築のコンサル・教材販売です。プログラミング不要で高単価の案件を取りやすくなっており、2026年に最も成長している副業領域の一つです。",
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

const DIFFICULTY_COLORS: Record<Difficulty, string> = {
  初心者向け: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  中級者向け: "bg-amber-500/15 text-amber-400 border-amber-500/30",
  上級者向け: "bg-red-500/15 text-red-400 border-red-500/30",
};

export default function AINocodeGuidePage() {
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
            <span className="inline-block text-xs font-bold text-violet-400 uppercase tracking-widest bg-violet-400/10 px-4 py-1.5 rounded-full mb-4">
              2026年版 最新情報
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight mb-4">
              AIノーコードツール完全ガイド2026年版
              <br />
              <span className="text-violet-400">
                【Make・Zapier・Dify・Bolt.new比較】
              </span>
            </h1>
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              コードなしでAIアプリ・業務自動化・チャットボットを作れる最新ノーコードツールを徹底解説。初心者が最初に試すべきツールと学習ロードマップも紹介。
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                { href: "#tools", label: "ツール紹介" },
                { href: "#starter", label: "初心者ガイド" },
                { href: "#faq", label: "よくある質問" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-xs font-bold px-4 py-2 rounded-full bg-slate-800 text-violet-300 border border-slate-700 hover:bg-slate-700 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── ツール紹介 ── */}
        <section id="tools" className="py-14 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
                AIノーコードツール6選
              </h2>
              <p className="text-gray-300 text-sm">
                カテゴリ別・難易度別に厳選。各ツールの特徴と料金を比較
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {NOCODE_TOOLS.map((tool) => (
                <div
                  key={tool.id}
                  className="rounded-2xl border border-slate-800 bg-slate-900 p-5 flex flex-col gap-4"
                >
                  {/* ヘッダー */}
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{tool.icon}</span>
                      <div>
                        <h3 className={`font-black text-base ${tool.color}`}>
                          {tool.name}
                        </h3>
                        <span className="text-xs text-gray-400">{tool.category}</span>
                      </div>
                    </div>
                    <span
                      className={`text-xs font-bold px-3 py-1 rounded-full border flex-shrink-0 ${DIFFICULTY_COLORS[tool.difficulty]}`}
                    >
                      {tool.difficulty}
                    </span>
                  </div>

                  {/* 料金 */}
                  <div className="rounded-xl bg-slate-800 border border-slate-700 px-3 py-2.5 grid grid-cols-2 gap-2">
                    <div>
                      <p className="text-xs text-gray-400 mb-0.5">無料プラン</p>
                      <p className="text-xs text-emerald-400 font-bold">{tool.freePlan}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 mb-0.5">有料プラン</p>
                      <p className="text-xs text-amber-400 font-bold">{tool.paidPlan}</p>
                    </div>
                  </div>

                  {/* こんな人に最適 */}
                  <div>
                    <p className="text-xs text-gray-400 font-bold mb-1.5">こんな用途に最適</p>
                    <p className="text-gray-300 text-sm font-bold">{tool.bestFor}</p>
                  </div>

                  {/* 機能リスト */}
                  <ul className="flex flex-col gap-1.5">
                    {tool.features.map((f) => (
                      <li key={f} className="flex items-start gap-1.5 text-xs text-gray-300">
                        <span className="text-violet-400 flex-shrink-0 mt-0.5">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* デメリット */}
                  <div className="flex items-start gap-1.5 mt-auto">
                    <span className="text-amber-400 text-xs font-bold flex-shrink-0">注意点：</span>
                    <p className="text-gray-300 text-xs">{tool.cons}</p>
                  </div>

                  {/* 日本語サポート */}
                  <div className="flex items-center gap-1.5">
                    <span className={`text-xs font-bold ${tool.japaneseSupport ? "text-emerald-400" : "text-gray-500"}`}>
                      {tool.japaneseSupport ? "✓ 日本語UI対応" : "△ 日本語UI一部のみ"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 初心者ロードマップ ── */}
        <section id="starter" className="py-14 px-4 bg-slate-950">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
                初心者が最初に試すべきロードマップ
              </h2>
              <p className="text-gray-300 text-sm">
                このステップ順に進めると最もスムーズに習得できます
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {STARTER_PATHS.map((path) => (
                <div
                  key={path.step}
                  className="rounded-2xl border border-slate-800 bg-slate-900 p-5 flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-violet-500/20 border border-violet-500/30 flex items-center justify-center">
                    <span className="font-black text-violet-400 text-base">
                      {path.step}
                    </span>
                  </div>
                  <div className="flex-1 flex flex-col gap-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-black text-white text-base">
                        {path.task}
                      </h3>
                      <span className="text-xs font-bold text-violet-400 bg-violet-500/10 border border-violet-500/30 px-2.5 py-1 rounded-full">
                        {path.tool}
                      </span>
                      <span className="text-xs text-gray-400">
                        目安：{path.time}
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {path.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl bg-violet-500/5 border border-violet-500/30 p-5">
              <p className="text-sm text-gray-300 leading-relaxed">
                <span className="font-bold text-white">💡 まとめ：</span>
                　まずは
                <span className="text-violet-400 font-bold"> Zapier（自動化体験）</span>
                か
                <span className="text-violet-400 font-bold"> Bolt.new（アプリ作成体験）</span>
                から始めましょう。どちらも無料で30分以内に最初の成果物が完成します。「AIでアプリを作った」という体験が次のステップへのモチベーションになります。
              </p>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section id="faq" className="py-14 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
                よくある質問（FAQ）
              </h2>
              <p className="text-gray-300 text-sm">
                AIノーコードに関する疑問をまとめて解決
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {FAQS.map((faq, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-800 bg-slate-900 p-5 sm:p-6"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-violet-500/20 text-violet-400 flex items-center justify-center font-black text-xs border border-violet-500/30 mt-0.5">
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

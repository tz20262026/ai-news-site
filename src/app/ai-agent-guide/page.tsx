import type { Metadata } from "next";
import Link from "next/link";
import AffiliateSectionAiNews from "@/components/AffiliateSectionAiNews";

export const metadata: Metadata = {
  title:
    "AIエージェント入門ガイド2026年版【Claude Code・Devin・AutoGPT・Manus比較】",
  description:
    "AIエージェントの基本概念から主要ツール5選の比較・活用事例まで2026年版で完全解説。Claude Code・Devin・AutoGPT・Manus・ChatGPT Operatorを徹底比較。",
  keywords: [
    "AIエージェント",
    "Claude Code",
    "Devin AI",
    "AutoGPT",
    "Manus AI",
    "ChatGPT Operator",
    "AI自動化",
    "AIエージェント 使い方",
    "自律型AI",
  ],
  alternates: {
    canonical: "https://ai-news-site-wheat.vercel.app/ai-agent-guide",
  },
  openGraph: {
    title: "AIエージェント入門ガイド2026年版【Claude Code・Devin・AutoGPT・Manus比較】",
    description:
      "AIエージェントの基本概念から主要ツール5選の比較・活用事例まで2026年版で完全解説。Claude Code・Devin・AutoGPT・Manus・ChatGPT Operatorを徹底比較。",
    type: "article",
    locale: "ja_JP",
    url: "https://ai-news-site-wheat.vercel.app/ai-agent-guide",
  },
  twitter: {
    card: "summary_large_image",
    title: "AIエージェント入門ガイド2026年版",
    description:
      "Claude Code・Devin・AutoGPT・Manus・ChatGPT Operatorを徹底比較。AIエージェントの基本概念から活用事例まで網羅。",
  },
};

/* ────────────────────────────────────────────
   データ定義
──────────────────────────────────────────── */

interface AgentTool {
  id: string;
  name: string;
  icon: string;
  tagline: string;
  description: string;
  strengths: string[];
  weaknesses: string[];
  price: string;
  bestFor: string;
}

interface AgentConcept {
  id: string;
  term: string;
  description: string;
}

interface UseCase {
  id: string;
  title: string;
  description: string;
  exampleAgent: string;
}

interface FAQ {
  question: string;
  answer: string;
}

const AGENT_TOOLS: AgentTool[] = [
  {
    id: "claude-code",
    name: "Claude Code",
    icon: "🤖",
    tagline: "エンジニアの最強相棒AI",
    description:
      "AnthropicのAIアシスタント「Claude」をCLI（コマンドライン）から操作できる開発者向けエージェント。コードの読み書き・バグ修正・ファイル操作・Git管理・デプロイまで自律的に実行。長大なコードベースを丸ごと理解した上で複数ファイルにまたがる複雑な変更を一括で行える。",
    strengths: ["コードベース全体の理解力", "複数ファイル一括編集", "Git・Vercel等との連携", "自律的なエラー修正"],
    weaknesses: ["CLI操作が必要（GUI非対応）", "非エンジニアには学習コスト", "API利用料が発生"],
    price: "無料CLI + Claude API利用料（従量）",
    bestFor: "エンジニア・プログラマー・個人開発者",
  },
  {
    id: "devin",
    name: "Devin",
    icon: "👨‍💻",
    tagline: "世界初の自律型AIソフトウェアエンジニア",
    description:
      "Cognition AIが開発した世界初の完全自律型AIエンジニア。要件定義から設計・実装・テスト・デプロイまでソフトウェア開発の全工程を自律的に実行できる。ブラウザ・ターミナル・エディタをAI自身が操作する。SWE-benchで初めて13%以上のスコアを達成し話題になった。",
    strengths: ["ゼロからのアプリ開発", "複雑なバグ修正", "ドキュメント自動生成", "チームプランで複数タスク並列"],
    weaknesses: ["月額$500と非常に高価", "タスク完了に時間がかかる", "複雑な要件では人間のレビューが必須"],
    price: "Starter $20/月〜 / Teams $500/月",
    bestFor: "企業・スタートアップ・テックリード",
  },
  {
    id: "autogpt",
    name: "AutoGPT",
    icon: "⚙️",
    tagline: "オープンソース自律AIエージェント",
    description:
      "GPT-4をベースにした最初期のオープンソースAIエージェント。ゴール（目標）を与えると自律的にサブタスクを生成・実行し、インターネット検索・ファイル操作・コード実行・APIコールなどを組み合わせて目標達成を目指す。GitHubで15万スター超の人気プロジェクト。",
    strengths: ["完全無料（OpenAI API別途）", "カスタマイズ自由", "コミュニティ活発", "プラグイン拡張可能"],
    weaknesses: ["安定性が低く暴走しやすい", "API費用が高額になることも", "技術知識が必要"],
    price: "無料（OpenAI API利用料別途）",
    bestFor: "開発者・AI研究者・DIY志向",
  },
  {
    id: "manus",
    name: "Manus",
    icon: "🌟",
    tagline: "汎用AIエージェントの新星",
    description:
      "中国のMonica AI Teamが開発した汎用AIエージェント。ブラウジング・コード実行・ファイル操作・データ分析など多岐にわたるタスクを自律実行できる。2025年初頭に招待制で公開され話題を集めた。複数のAIモデルを使い分けるマルチモデルアーキテクチャが特徴。",
    strengths: ["汎用タスク処理力が高い", "マルチモデル設計", "Webブラウジング対応", "リサーチ・分析が得意"],
    weaknesses: ["招待制で利用制限あり", "日本語サポートが限定的", "プライバシーへの懸念"],
    price: "招待制ベータ（正式料金未定）",
    bestFor: "リサーチャー・マーケター・ビジネスアナリスト",
  },
  {
    id: "chatgpt-operator",
    name: "ChatGPT Operator",
    icon: "🖥️",
    tagline: "ブラウザ操作を自動化するAI",
    description:
      "OpenAIが提供するコンピューター操作エージェント。ウェブブラウザを実際に操作してフォーム入力・商品注文・予約・情報収集などの実世界タスクを自律実行できる。ChatGPT Plusプランで利用可能で、GUIベースで非エンジニアでも使いやすい。",
    strengths: ["GUIベースで直感的", "実際のブラウザ操作", "フォーム入力・予約自動化", "OpenAIとのシームレスな統合"],
    weaknesses: ["ChatGPT Plus必須（月$20）", "複雑な操作の精度はまだ発展途上", "対応サービスに制限あり"],
    price: "ChatGPT Plus（月$20）に含む",
    bestFor: "ビジネスユーザー・非エンジニア・日常業務自動化",
  },
];

const AGENT_CONCEPTS: AgentConcept[] = [
  {
    id: "what-is-agent",
    term: "AIエージェントとは？",
    description:
      "従来のAI（質問に答えるだけ）と異なり、自律的に目標を設定・分解し、ツールを使いながら複数ステップを踏んでタスクを完結させるAIシステム。「考える→行動する→結果を確認する→次の行動を決める」というループを繰り返す。",
  },
  {
    id: "agentic-loop",
    term: "エージェントループ（ReAct）",
    description:
      "Reasoning（推論）とActing（行動）を交互に繰り返すAIの動作パターン。現状を分析→次の行動を推論→ツールを実行→結果を確認→再推論…を目標達成まで繰り返す。この仕組みがAIエージェントの中核。",
  },
  {
    id: "tools",
    term: "ツール（Tool Use）",
    description:
      "AIが自律的に呼び出せる機能のこと。Web検索・コード実行・ファイル操作・API呼び出し・メール送信などがある。ツールが多いほどAIエージェントの能力が広がる。",
  },
  {
    id: "multi-agent",
    term: "マルチエージェント",
    description:
      "複数のAIエージェントが連携して1つの大きなタスクを分担・並列処理する仕組み。オーケストレーター（指揮者AI）が複数のサブエージェントに指示を出し、結果をまとめる。Claude Codeも内部でマルチエージェントを活用。",
  },
];

const USE_CASES: UseCase[] = [
  {
    id: "web-dev",
    title: "Webアプリ・サイトの自動開発",
    description:
      "要件を伝えるだけでコードを書き、バグを修正し、デプロイまで自律実行。エンジニア不要でプロダクトが作れる時代が到来している。",
    exampleAgent: "Claude Code / Devin",
  },
  {
    id: "research",
    title: "リサーチ・情報収集の自動化",
    description:
      "競合調査・市場分析・文献収集など、従来は数時間かかっていたリサーチを数分でレポート化。複数サイトを横断して情報を整理する。",
    exampleAgent: "Manus / ChatGPT Operator",
  },
  {
    id: "data-analysis",
    title: "データ分析・レポート作成",
    description:
      "CSVやExcelを読み込み、グラフ生成・統計処理・洞察抽出までを自律的に実行してレポートを自動生成。ビジネスインテリジェンスの民主化が進んでいる。",
    exampleAgent: "Claude Code / AutoGPT",
  },
  {
    id: "automation",
    title: "業務フローの自動化",
    description:
      "フォーム入力・メール返信・スケジュール管理・SNS投稿など繰り返し業務をAIエージェントに委託。ヒトはクリエイティブな業務に集中できる。",
    exampleAgent: "ChatGPT Operator / Manus",
  },
  {
    id: "content",
    title: "コンテンツ制作パイプライン",
    description:
      "キーワードリサーチ→記事構成→執筆→SEO最適化→画像生成→投稿まで、コンテンツ制作の全フローをAIエージェントが自律実行する。",
    exampleAgent: "AutoGPT / Claude Code",
  },
];

const FAQS: FAQ[] = [
  {
    question: "AIエージェントと普通のChatGPTは何が違うの？",
    answer:
      "普通のChatGPTは「質問→回答」の1往復で完結します。AIエージェントは「目標」を与えると自律的にサブタスクを生成し、ツール（検索・コード実行・ファイル操作等）を使いながら複数ステップを踏んで目標を達成します。人間の関与なしに長時間作業を継続できる点が最大の違いです。",
  },
  {
    question: "プログラミング知識がない人でもAIエージェントを使えますか？",
    answer:
      "ツールによります。ChatGPT OperatorやManusはGUI（画面操作）ベースで非エンジニアでも比較的使いやすいです。Claude CodeやAutoGPTはCLI操作が必要でエンジニア向けです。Devinは専門家向けサービスです。まずはChatGPT Operatorから始めるのがおすすめです。",
  },
  {
    question: "AIエージェントは仕事を奪いますか？",
    answer:
      "繰り返し業務・データ処理・コーディングなどのタスクは自動化が進んでいます。一方、創造性・対人関係・高度な判断が必要な仕事はむしろAIエージェントと協業することで価値が高まります。「AIに使われる側」でなく「AIを使う側」のスキルを身につけることが重要です。",
  },
  {
    question: "AIエージェントの最新トレンドは何ですか？",
    answer:
      "2026年現在、注目トレンドは①マルチエージェント（複数AIが連携）②コンピューター操作エージェント（マウス・キーボードを実際に操作）③長期記憶・コンテキスト管理④ローカル実行型エージェント（クラウド不要）です。特にAnthropicとOpenAIがコンピューター操作エージェントの競争を激化させています。",
  },
  {
    question: "AIエージェントを安全に使うには？",
    answer:
      "①重要データへのアクセス権限を最小限にする②取り消せない操作（削除・送信・決済等）の前に人間の確認ステップを設ける③エージェントの行動ログを記録・監査する④テスト環境で試してから本番投入する、の4点が基本です。現状はまだ100%信頼できるわけではないので、人間のオーバーサイトが不可欠です。",
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

export default function AiAgentGuidePage() {
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
            <span className="inline-block text-xs font-bold text-emerald-400 uppercase tracking-widest bg-emerald-400/10 px-4 py-1.5 rounded-full mb-4">
              2026年版 最新情報
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight mb-4">
              AIエージェント入門ガイド2026年版
              <br />
              <span className="text-emerald-400">
                【Claude Code・Devin・AutoGPT・Manus徹底比較】
              </span>
            </h1>
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              AIエージェントの基本概念から主要ツール5選の詳細比較、実際の活用事例まで2026年版で完全解説。
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                { href: "#concepts", label: "基本概念" },
                { href: "#tools", label: "ツール比較" },
                { href: "#use-cases", label: "活用シーン" },
                { href: "#faq", label: "よくある質問" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-xs font-bold px-4 py-2 rounded-full bg-slate-800 text-emerald-300 border border-slate-700 hover:bg-slate-700 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── 基本概念 ── */}
        <section id="concepts" className="py-14 px-4 bg-slate-950">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
                AIエージェントの基本概念
              </h2>
              <p className="text-gray-400 text-sm">
                まず知っておくべき4つのキーワード
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {AGENT_CONCEPTS.map((concept) => (
                <div
                  key={concept.id}
                  className="rounded-2xl border border-slate-800 bg-slate-900 p-5"
                >
                  <h3 className="font-black text-emerald-400 text-base mb-2">
                    {concept.term}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {concept.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ツール比較 ── */}
        <section id="tools" className="py-14 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
                主要AIエージェントツール5選
              </h2>
              <p className="text-gray-400 text-sm">
                2026年現在注目の5ツールを特徴・価格・おすすめユーザーで比較
              </p>
            </div>

            <div className="flex flex-col gap-5">
              {AGENT_TOOLS.map((tool) => (
                <div
                  key={tool.id}
                  className="rounded-2xl border border-slate-800 bg-slate-900 p-5 sm:p-6"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                    {/* ヘッダー */}
                    <div className="flex items-center gap-3 sm:w-48 flex-shrink-0">
                      <span className="text-3xl">{tool.icon}</span>
                      <div>
                        <h3 className="font-black text-white text-lg leading-tight">{tool.name}</h3>
                        <p className="text-xs text-emerald-400 font-semibold">{tool.tagline}</p>
                      </div>
                    </div>

                    {/* 詳細 */}
                    <div className="flex-1 flex flex-col gap-3">
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {tool.description}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {/* 強み */}
                        <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-3">
                          <p className="text-xs font-bold text-emerald-400 mb-2">強み</p>
                          <ul className="flex flex-col gap-1">
                            {tool.strengths.map((s, i) => (
                              <li key={i} className="flex items-start gap-1.5">
                                <span className="text-emerald-400 text-xs flex-shrink-0 mt-0.5">✓</span>
                                <span className="text-gray-300 text-xs">{s}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        {/* 弱み */}
                        <div className="rounded-xl bg-red-500/5 border border-red-500/20 p-3">
                          <p className="text-xs font-bold text-red-400 mb-2">弱み</p>
                          <ul className="flex flex-col gap-1">
                            {tool.weaknesses.map((w, i) => (
                              <li key={i} className="flex items-start gap-1.5">
                                <span className="text-red-400 text-xs flex-shrink-0 mt-0.5">✗</span>
                                <span className="text-gray-300 text-xs">{w}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-3 mt-1">
                        <div className="rounded-xl bg-slate-800 border border-slate-700 px-3 py-2">
                          <span className="text-xs text-gray-400 font-bold">料金：</span>
                          <span className="text-xs text-amber-300">{tool.price}</span>
                        </div>
                        <div className="rounded-xl bg-slate-800 border border-slate-700 px-3 py-2">
                          <span className="text-xs text-gray-400 font-bold">おすすめ：</span>
                          <span className="text-xs text-cyan-300">{tool.bestFor}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 活用シーン ── */}
        <section id="use-cases" className="py-14 px-4 bg-slate-950">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
                AIエージェント活用シーン5選
              </h2>
              <p className="text-gray-400 text-sm">
                ビジネス・個人・開発現場での実践的な活用事例
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {USE_CASES.map((uc, index) => (
                <div
                  key={uc.id}
                  className="rounded-2xl border border-slate-800 bg-slate-900 p-5 flex flex-col gap-3"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-slate-800 text-emerald-400 flex items-center justify-center font-black text-xs border border-slate-700 flex-shrink-0">
                      {index + 1}
                    </span>
                    <h3 className="font-black text-white text-sm leading-tight">
                      {uc.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 text-xs leading-relaxed">
                    {uc.description}
                  </p>
                  <div className="rounded-xl bg-slate-800 border border-slate-700 px-3 py-2 mt-auto">
                    <span className="text-xs text-emerald-400 font-bold">おすすめツール：</span>
                    <span className="text-xs text-gray-300 ml-1">{uc.exampleAgent}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 関連ガイドCTA ── */}
        <section className="py-10 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="rounded-2xl bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/30 p-6 sm:p-8 text-center">
              <p className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3">
                関連ガイド
              </p>
              <h2 className="text-xl sm:text-2xl font-black text-white mb-3">
                AIコーディングツールをさらに深掘りしたい方へ
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Claude Code・GitHub Copilot・Cursor・Windsurfなど最新AIコーディングツールを徹底比較。
                <br />
                初心者でも使いやすいツールを目的別に解説しています。
              </p>
              <Link
                href="/ai-coding-guide"
                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-black text-sm px-6 py-3 rounded-xl transition-colors"
              >
                AIコーディングガイドを読む →
              </Link>
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
              <p className="text-gray-400 text-sm">
                AIエージェントに関する疑問をまとめて解決
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {FAQS.map((faq, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-800 bg-slate-900 p-5 sm:p-6"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-black text-xs border border-emerald-500/30 mt-0.5">
                      Q
                    </span>
                    <h3 className="font-black text-white text-sm sm:text-base leading-snug">
                      {faq.question}
                    </h3>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-black text-xs border border-cyan-500/30 mt-0.5">
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

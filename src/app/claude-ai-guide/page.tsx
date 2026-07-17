import type { Metadata } from "next";
import Link from "next/link";
import AffiliateSectionAiNews from "@/components/AffiliateSectionAiNews";

export const metadata: Metadata = {
  title:
    "Claude AI完全ガイド2026年【Anthropic製AI・ChatGPTとの違い・使い方・料金】",
  description:
    "AnthropicのAI「Claude」を完全解説。Claude 3.5・Claude 4シリーズの特徴、ChatGPTとの違い・比較、無料版と有料版の料金・機能差、ビジネス活用法を2026年版で網羅。",
  keywords: [
    "Claude AI 使い方",
    "Claude Anthropic",
    "Claude ChatGPT 違い",
    "Claude 無料",
    "Claude 料金",
    "Claude 3.5 Sonnet",
    "Claude 4",
    "AI ツール 比較",
    "生成AI Anthropic",
  ],
  alternates: {
    canonical: "https://ai-news-site-wheat.vercel.app/claude-ai-guide",
  },
  openGraph: {
    title: "Claude AI完全ガイド2026年【Anthropic製AI・ChatGPTとの違い・使い方・料金】",
    description:
      "AnthropicのAI「Claude」を完全解説。Claude 3.5・Claude 4の特徴・ChatGPTとの違い・料金・ビジネス活用法を2026年版で網羅。",
    type: "article",
    locale: "ja_JP",
    url: "https://ai-news-site-wheat.vercel.app/claude-ai-guide",
  },
  twitter: {
    card: "summary_large_image",
    title: "Claude AI完全ガイド2026年【Anthropic製・ChatGPTとの違い・料金】",
    description:
      "Claude 3.5・Claude 4の特徴とChatGPTとの違い・料金・活用法を完全解説。",
  },
};

/* ────────────────────────────────────────────
   データ定義
──────────────────────────────────────────── */

interface ClaudeModel {
  name: string;
  tier: string;
  contextWindow: string;
  strengths: string[];
  bestFor: string;
  badge: string;
}

interface Comparison {
  aspect: string;
  claude: string;
  chatgpt: string;
  winner: "claude" | "chatgpt" | "tie";
}

interface UseCase {
  id: string;
  icon: string;
  title: string;
  description: string;
  example: string;
}

interface PlanRow {
  feature: string;
  free: string;
  pro: string;
}

interface FAQ {
  question: string;
  answer: string;
}

const CLAUDE_MODELS: ClaudeModel[] = [
  {
    name: "Claude 4 Opus",
    tier: "最上位",
    contextWindow: "200,000トークン",
    strengths: ["最高水準の推論能力", "複雑な分析・戦略立案", "長文ドキュメント処理"],
    bestFor: "高難度タスク・リサーチ・コンサルティング業務",
    badge: "最高性能",
  },
  {
    name: "Claude 4 Sonnet",
    tier: "バランス型",
    contextWindow: "200,000トークン",
    strengths: ["高性能かつ高速", "コーディング・分析・文章生成", "コストパフォーマンスが高い"],
    bestFor: "日常業務・開発支援・コンテンツ制作",
    badge: "おすすめ",
  },
  {
    name: "Claude 3.5 Haiku",
    tier: "軽量型",
    contextWindow: "200,000トークン",
    strengths: ["応答速度が最速", "シンプルなタスク処理", "API利用コストが低い"],
    bestFor: "大量処理・チャットボット・分類タスク",
    badge: "高速・低コスト",
  },
];

const PLAN_ROWS: PlanRow[] = [
  { feature: "利用料金", free: "無料", pro: "月額$20（約3,000円）" },
  { feature: "使用モデル", free: "Claude 3.5 Haiku（制限あり）", pro: "Claude 4 Sonnet + Opus" },
  { feature: "1日のメッセージ数", free: "制限あり（上限で停止）", pro: "大幅に緩和" },
  { feature: "ファイルアップロード", free: "可（制限あり）", pro: "PDF・Wordなど自由に" },
  { feature: "Projects機能", free: "不可", pro: "長期プロジェクト管理可" },
  { feature: "Webブラウジング", free: "不可", pro: "リアルタイム検索可" },
  { feature: "優先アクセス", free: "なし", pro: "混雑時も優先接続" },
];

const COMPARISONS: Comparison[] = [
  {
    aspect: "コンテキストウィンドウ",
    claude: "最大200,000トークン（約15万文字）",
    chatgpt: "最大128,000トークン（GPT-4o）",
    winner: "claude",
  },
  {
    aspect: "日本語の自然さ",
    claude: "非常に自然。長文でも文脈を維持",
    chatgpt: "自然だが長文では時々不自然な表現",
    winner: "tie",
  },
  {
    aspect: "コーディング能力",
    claude: "複雑なコード・大規模リファクタリングに強い",
    chatgpt: "幅広い言語対応・GPTsプラグイン活用可",
    winner: "tie",
  },
  {
    aspect: "画像生成",
    claude: "非対応（画像の分析・理解は可能）",
    chatgpt: "DALL-E 3で高品質な画像生成が可能",
    winner: "chatgpt",
  },
  {
    aspect: "安全性・倫理設計",
    claude: "Constitutional AIで安全性重視の設計",
    chatgpt: "RLHF・安全フィルターを実装",
    winner: "claude",
  },
  {
    aspect: "長文ドキュメント処理",
    claude: "100ページのPDFも一括処理可能",
    chatgpt: "ファイル分析可だがコンテキスト上限あり",
    winner: "claude",
  },
  {
    aspect: "エコシステム・連携",
    claude: "Anthropic API・Slack・Zapier等",
    chatgpt: "OpenAI API・プラグイン・GPTs等が豊富",
    winner: "chatgpt",
  },
  {
    aspect: "APIコスト",
    claude: "Sonnet・Haikuは比較的安価",
    chatgpt: "GPT-4o miniが安価・GPT-4oは高め",
    winner: "tie",
  },
];

const USE_CASES: UseCase[] = [
  {
    id: "document",
    icon: "📄",
    title: "長文ドキュメント分析",
    description:
      "契約書・論文・決算書・マニュアルなど100ページを超えるドキュメントを一括でアップロードして要約・比較・質問回答ができる。Claudeの200,000トークンというコンテキストウィンドウが最大の強み。",
    example: "「この50ページの契約書を読んで、リスクのある条項を全て列挙してください」",
  },
  {
    id: "coding",
    icon: "💻",
    title: "高度なコーディング支援",
    description:
      "大規模なコードベースの分析・リファクタリング・バグ修正が得意。「Claude Code」というコーディング専用CLIツールも存在し、ターミナルから直接AIに相談しながら開発できる。",
    example: "「このReactプロジェクト全体を見て、パフォーマンスボトルネックと改善案を教えてください」",
  },
  {
    id: "writing",
    icon: "✍️",
    title: "高品質なビジネス文書作成",
    description:
      "事業計画書・提案書・報告書・メールなど、AIらしくない自然な日本語文書を生成。長文になっても文体・論点の一貫性を保てる点がChatGPTとの差別化ポイント。",
    example: "「新規事業の投資家向けピッチデッキの内容を、以下の要点をもとに作成してください」",
  },
  {
    id: "research",
    icon: "🔍",
    title: "調査・リサーチ・分析",
    description:
      "複数の資料を同時に読み込んで比較分析・矛盾点の検出・結論の導出が可能。コンサルタント・研究者・アナリストなどの知的作業に向いている。",
    example: "「以下の3つの市場調査レポートを比較して、共通する結論と相反する点を整理してください」",
  },
];

const FAQS: FAQ[] = [
  {
    question: "Claude AIとは何ですか？ChatGPTとの最大の違いは？",
    answer:
      "ClaudeはAIの安全性研究企業Anthropicが開発した生成AIです。ChatGPTとの最大の違いは3点あります。①コンテキストウィンドウ（一度に読める文章量）が最大200,000トークン（約15万文字）とChatGPTの約1.5倍 ②安全性を重視した「Constitutional AI」という独自の設計思想 ③長文でも文脈・文体の一貫性を維持する能力が高い点です。画像生成はできませんが、長文処理・コーディング・文書作成では多くの場面でChatGPTと同等以上の性能を発揮します。",
  },
  {
    question: "ClaudeはChatGPTと比べてどちらが優れていますか？",
    answer:
      "用途によります。Claudeが優れている場面：長文ドキュメントの処理・大規模コードのリファクタリング・自然な長文作成・倫理的な判断が必要なタスク。ChatGPTが優れている場面：画像生成（DALL-E 3）・GPTsによる拡張機能・豊富なサードパーティ連携・ウェブブラウジング（Plus）。どちらが「優れているか」ではなく「何に使うか」で選ぶのが正解です。多くのプロユーザーは両方を使い分けています。",
  },
  {
    question: "Claudeの無料版でできることは何ですか？",
    answer:
      "Claude.aiの無料版では、1日あたりのメッセージ数に制限がありますが、テキスト生成・コーディング支援・文章校正・翻訳・要約・画像分析・PDF分析などの基本機能を利用できます。モデルはClaude 3.5 Haikuが中心です。上限に達すると当日は使えなくなります。毎日多く使う場合はPro（月$20）への移行が必要です。",
  },
  {
    question: "Claude 3.5とClaude 4の違いは何ですか？",
    answer:
      "Claude 4シリーズはClaude 3.5の後継で、推論能力・コーディング精度・長文理解がさらに向上しています。Claude 4 Opusは最高性能の推論モデル、Claude 4 Sonnetは速度と性能のバランスが最適なモデルです。Claude 3.5 Haikuは軽量・高速でAPI経由での大量処理に向いています。2026年現在、日常利用にはClaude 4 Sonnetが最もコストパフォーマンスが高いです。",
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

const badgeColors: Record<string, string> = {
  最高性能: "bg-purple-500/20 text-purple-300 border border-purple-500/30",
  おすすめ: "bg-orange-500/20 text-orange-300 border border-orange-500/30",
  "高速・低コスト": "bg-blue-500/20 text-blue-300 border border-blue-500/30",
};

/* ────────────────────────────────────────────
   ページコンポーネント
──────────────────────────────────────────── */

export default function ClaudeAiGuidePage() {
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
            <span className="inline-block text-xs font-bold text-orange-400 uppercase tracking-widest bg-orange-400/10 px-4 py-1.5 rounded-full mb-4">
              2026年版 最新情報
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight mb-4">
              Claude AI完全ガイド2026年
              <br />
              <span className="text-orange-400">
                【Anthropic製AI・ChatGPTとの違い・使い方・料金】
              </span>
            </h1>
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              AnthropicのAI「Claude」とは何か・Claude 3.5とClaude 4の特徴・ChatGPTとの違い・無料版と有料版の料金差・ビジネス活用法を2026年版で完全解説。
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                { href: "#what-is", label: "Claudeとは" },
                { href: "#models", label: "モデル比較" },
                { href: "#plan", label: "無料 vs 有料" },
                { href: "#vs-chatgpt", label: "ChatGPTとの違い" },
                { href: "#use-cases", label: "活用シーン" },
                { href: "#faq", label: "FAQ" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-xs font-bold px-4 py-2 rounded-full bg-slate-800 text-orange-300 border border-slate-700 hover:bg-slate-700 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── Claudeとは ── */}
        <section id="what-is" className="py-14 px-4 bg-slate-950">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
                Claude（クロード）とは何か
              </h2>
              <p className="text-gray-300 text-sm">
                Anthropicが開発した安全性重視の生成AI
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                {
                  label: "開発元",
                  value: "Anthropic（アンソロピック）",
                  detail: "Google・Amazonが出資する米国のAI安全性研究企業。OpenAI出身者が設立。",
                },
                {
                  label: "設計思想",
                  value: "Constitutional AI（憲法的AI）",
                  detail: "AIに「倫理的な行動規範」を組み込み、安全で役立つ回答を生成する独自アプローチ。",
                },
                {
                  label: "コンテキスト",
                  value: "最大200,000トークン",
                  detail: "約15万文字（A4約400枚分）を一度に読み込める。長文処理ではChatGPTを上回る。",
                },
                {
                  label: "料金体系",
                  value: "無料版 + Pro（月$20）",
                  detail: "無料版でも基本機能は使える。API利用は従量課金（トークン単位）。",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-slate-800 bg-slate-900 p-5"
                >
                  <p className="text-xs text-orange-400 font-bold mb-1">{item.label}</p>
                  <p className="text-white font-black text-base mb-2">{item.value}</p>
                  <p className="text-gray-300 text-xs leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>

            <div className="rounded-2xl bg-orange-500/10 border border-orange-500/30 p-5">
              <p className="text-sm text-gray-300 leading-relaxed">
                <span className="font-black text-orange-400">Claude の使い方：</span>
                　claude.ai にアクセスしてGoogleアカウントまたはメールで無料登録するだけで今すぐ使えます。スマートフォン向けアプリ（iOS・Android）もあり、どこでもアクセス可能です。
              </p>
            </div>
          </div>
        </section>

        {/* ── モデル比較 ── */}
        <section id="models" className="py-14 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
                Claude モデルシリーズ比較
              </h2>
              <p className="text-gray-300 text-sm">
                Claude 4・Claude 3.5 それぞれの特徴と使い分け
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {CLAUDE_MODELS.map((model) => (
                <div
                  key={model.name}
                  className="rounded-2xl border border-slate-800 bg-slate-900 p-5 flex flex-col gap-3"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-black text-white text-sm">{model.name}</h3>
                      <p className="text-gray-300 text-xs">{model.tier}</p>
                    </div>
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full flex-shrink-0 ${badgeColors[model.badge]}`}>
                      {model.badge}
                    </span>
                  </div>

                  <div className="rounded-xl bg-slate-800 border border-slate-700 px-3 py-2">
                    <p className="text-xs text-gray-300 mb-0.5">コンテキストウィンドウ</p>
                    <p className="text-orange-300 text-xs font-bold">{model.contextWindow}</p>
                  </div>

                  <div className="flex flex-col gap-1">
                    <p className="text-xs text-gray-300 font-bold">得意なこと</p>
                    {model.strengths.map((s) => (
                      <p key={s} className="text-gray-300 text-xs flex gap-1.5">
                        <span className="text-orange-400 flex-shrink-0">+</span>
                        {s}
                      </p>
                    ))}
                  </div>

                  <div className="rounded-xl bg-slate-800 border border-slate-700 px-3 py-2 mt-auto">
                    <p className="text-xs text-amber-400 font-bold mb-0.5">最適な用途</p>
                    <p className="text-gray-300 text-xs">{model.bestFor}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 無料 vs Pro ── */}
        <section id="plan" className="py-14 px-4 bg-slate-950">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
                無料版 vs Pro（月$20）徹底比較
              </h2>
              <p className="text-gray-300 text-sm">
                有料プランへのアップグレードが必要か判断する
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 overflow-hidden">
              <div className="grid grid-cols-3 bg-slate-800 px-4 py-3">
                <div className="text-gray-300 text-xs font-bold">機能</div>
                <div className="text-center text-emerald-400 text-xs font-bold">無料版</div>
                <div className="text-center text-orange-400 text-xs font-bold">Pro（月$20）</div>
              </div>
              {PLAN_ROWS.map((row, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-3 px-4 py-3 border-t border-slate-800 text-xs ${
                    i % 2 === 0 ? "bg-slate-900" : "bg-slate-800/30"
                  }`}
                >
                  <div className="text-gray-300 font-bold pr-2">{row.feature}</div>
                  <div className="text-center text-gray-300 px-1">{row.free}</div>
                  <div className="text-center text-orange-300 px-1 font-medium">{row.pro}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl bg-slate-900 border border-slate-800 p-5">
              <p className="text-sm text-gray-300 leading-relaxed">
                <span className="font-black text-white">Pro移行のおすすめタイミング：</span>
                　毎日の利用上限に達することが増えてきた・長文PDFを大量に分析したい・Claude 4 Sonnetをフルに活用したい、という場合は Pro（月$20）への移行を検討してください。
              </p>
            </div>
          </div>
        </section>

        {/* ── ChatGPTとの比較 ── */}
        <section id="vs-chatgpt" className="py-14 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
                Claude vs ChatGPT 徹底比較
              </h2>
              <p className="text-gray-300 text-sm">
                8項目で比較。どちらを選ぶべきかを判断する
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 overflow-hidden">
              <div className="grid grid-cols-3 bg-slate-800 px-4 py-3">
                <div className="text-gray-300 text-xs font-bold">比較項目</div>
                <div className="text-center text-orange-400 text-xs font-bold">Claude</div>
                <div className="text-center text-cyan-400 text-xs font-bold">ChatGPT</div>
              </div>
              {COMPARISONS.map((c, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-3 px-4 py-3 border-t border-slate-800 text-xs ${
                    i % 2 === 0 ? "bg-slate-900" : "bg-slate-800/30"
                  }`}
                >
                  <div className="text-gray-300 font-bold pr-2">{c.aspect}</div>
                  <div className={`pr-2 ${c.winner === "claude" ? "text-orange-300 font-bold" : "text-gray-300"}`}>
                    {c.winner === "claude" && <span className="text-orange-400">✓ </span>}
                    {c.claude}
                  </div>
                  <div className={`${c.winner === "chatgpt" ? "text-cyan-300 font-bold" : "text-gray-300"}`}>
                    {c.winner === "chatgpt" && <span className="text-cyan-400">✓ </span>}
                    {c.chatgpt}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl bg-slate-900 border border-slate-800 p-5">
              <p className="text-sm text-gray-300 leading-relaxed">
                <span className="font-black text-white">結論：</span>
                　長文処理・安全性・コーディングならClaude。画像生成・GPTs・サードパーティ連携ならChatGPT。両方の無料版を試して使い分けるのがプロの選択です。
              </p>
            </div>
          </div>
        </section>

        {/* ── 活用シーン ── */}
        <section id="use-cases" className="py-14 px-4 bg-slate-950">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
                Claude活用シーン4選
              </h2>
              <p className="text-gray-300 text-sm">
                Claudeが特に力を発揮する実践的な使い方
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {USE_CASES.map((uc) => (
                <div
                  key={uc.id}
                  className="rounded-2xl border border-slate-800 bg-slate-900 p-5 flex flex-col gap-3"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl flex-shrink-0">{uc.icon}</span>
                    <h3 className="font-black text-white text-base leading-tight">{uc.title}</h3>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">{uc.description}</p>
                  <div className="rounded-xl bg-slate-800 border border-slate-700 px-4 py-3 mt-auto">
                    <p className="text-xs text-orange-400 font-bold mb-1">プロンプト例</p>
                    <p className="text-gray-300 text-xs leading-relaxed">{uc.example}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 関連ガイドCTA ── */}
        <section className="py-10 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="rounded-2xl bg-gradient-to-r from-orange-500/10 to-cyan-500/10 border border-orange-500/30 p-6 sm:p-8 text-center">
              <p className="text-xs font-bold text-orange-400 uppercase tracking-widest mb-3">
                関連ガイド
              </p>
              <h2 className="text-xl sm:text-2xl font-black text-white mb-3">
                ChatGPTの使い方も合わせて学ぼう
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                ClaudeとChatGPTを使い分けることで生産性が大幅に向上します。
                <br />
                ChatGPTの全機能・プロンプト術・GPTsの使い方はこちら。
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/chatgpt-guide"
                  className="inline-flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black text-sm px-6 py-3 rounded-xl transition-colors"
                >
                  ChatGPT完全ガイドを読む →
                </Link>
                <Link
                  href="/ai-image-generation-guide"
                  className="inline-flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-black text-sm px-6 py-3 rounded-xl transition-colors"
                >
                  AI画像生成ガイドを読む →
                </Link>
              </div>
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
                Claude AIに関する疑問をまとめて解決
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {FAQS.map((faq, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-800 bg-slate-900 p-5 sm:p-6"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center font-black text-xs border border-orange-500/30 mt-0.5">
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

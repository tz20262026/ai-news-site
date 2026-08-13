"use client";

import { useState } from "react";
import Link from "next/link";
import AffiliateSectionAiNews from "@/components/AffiliateSectionAiNews";
import NewsletterSignup from "@/components/NewsletterSignup";

// ── 型定義 ────────────────────────────────────────────────
type ToolId = "chatgpt" | "claude" | "gemini" | "perplexity" | "copilot";

type ScoreMap = Partial<Record<ToolId, number>>;

interface QuestionOption {
  label: string;
  scores: ScoreMap;
}

interface Question {
  id: string;
  question: string;
  sub?: string;
  options: QuestionOption[];
}

interface RelatedGuide {
  href: string;
  label: string;
  emoji: string;
}

interface ToolProfile {
  id: ToolId;
  name: string;
  emoji: string;
  maker: string;
  accent: string;
  badgeBg: string;
  cardBorder: string;
  tagline: string;
  description: string;
  strengths: string[];
  freePlan: string;
  officialHref: string;
  officialLabel: string;
  relatedGuides: RelatedGuide[];
}

// ── 診断結果順の優先度（同点の場合の並び）─────────────────
const TIE_BREAK_ORDER: ToolId[] = ["chatgpt", "claude", "gemini", "perplexity", "copilot"];

// ── 質問データ（7問）─────────────────────────────────────
const QUESTIONS: Question[] = [
  {
    id: "usecase",
    question: "AIを使う一番の目的は？",
    sub: "最も当てはまるものを選んでください",
    options: [
      { label: "💻 プログラミング・コーディング", scores: { copilot: 3, chatgpt: 2, claude: 1 } },
      { label: "✍️ 文章作成・ブログ・コピーライティング", scores: { claude: 3, chatgpt: 2 } },
      { label: "🔍 リサーチ・情報収集・最新ニュース", scores: { perplexity: 3, gemini: 2 } },
      { label: "🎨 画像生成・デザイン・クリエイティブ", scores: { chatgpt: 2, gemini: 2 } },
      { label: "💬 日常会話・雑談・相談相手", scores: { chatgpt: 3, gemini: 1 } },
      { label: "📊 ビジネス資料・メール・プレゼン作成", scores: { gemini: 2, chatgpt: 2, claude: 1 } },
    ],
  },
  {
    id: "frequency",
    question: "AIをどのくらいの頻度で使いたいですか？",
    options: [
      { label: "毎日何度もヘビーに使いたい", scores: { claude: 1, chatgpt: 1 } },
      { label: "週に数回、必要な時に使う", scores: {} },
      { label: "たまに試す程度でOK", scores: { gemini: 1, chatgpt: 1 } },
    ],
  },
  {
    id: "budget",
    question: "料金への考え方は？",
    options: [
      { label: "完全無料で使い続けたい", scores: { gemini: 2, chatgpt: 1 } },
      { label: "月20〜30ドル程度なら払ってもいい", scores: { claude: 1, copilot: 1 } },
      { label: "特にこだわらない", scores: {} },
    ],
  },
  {
    id: "japanese",
    question: "日本語での使いやすさは重視しますか？",
    options: [
      { label: "はい、自然な日本語でのやり取りを重視する", scores: { chatgpt: 1, claude: 1 } },
      { label: "いいえ、英語での情報収集がメインでも構わない", scores: { perplexity: 1, copilot: 1 } },
    ],
  },
  {
    id: "longtext",
    question: "長い文書や資料をまとめて読み込ませたいですか？",
    sub: "契約書・論文・議事録など",
    options: [
      { label: "はい、長文・大量データを扱いたい", scores: { claude: 3, gemini: 2 } },
      { label: "いいえ、短いやり取りが中心", scores: {} },
    ],
  },
  {
    id: "workspace",
    question: "Gmail・Googleドキュメント・スプレッドシートをよく使いますか？",
    options: [
      { label: "はい、Googleサービスが生活の中心", scores: { gemini: 3 } },
      { label: "いいえ、あまり使わない", scores: {} },
    ],
  },
  {
    id: "coding",
    question: "エディタ上でコード補完・自動生成をしてほしいですか？",
    sub: "エンジニア・プログラミング学習中の方向け",
    options: [
      { label: "はい、コードを書く作業を効率化したい", scores: { copilot: 3, chatgpt: 1 } },
      { label: "いいえ、コードはほとんど書かない", scores: {} },
    ],
  },
];

// ── ツールプロフィール ───────────────────────────────────
const TOOL_PROFILES: Record<ToolId, ToolProfile> = {
  chatgpt: {
    id: "chatgpt",
    name: "ChatGPT",
    emoji: "🤖",
    maker: "OpenAI",
    accent: "text-emerald-600 dark:text-emerald-400",
    badgeBg: "bg-emerald-600",
    cardBorder: "border-emerald-200 dark:border-emerald-800",
    tagline: "何でも相談できる、汎用性No.1のオールラウンダー",
    description:
      "ChatGPTは日常会話からビジネス文書、プログラミング、画像生成まで幅広くこなせる万能タイプ。情報量・対応範囲の広さは業界随一で、初めてAIツールを使う人にも最もおすすめしやすい選択肢です。",
    strengths: [
      "自然な日本語での会話・文章作成が得意",
      "GPTs（カスタムAI）や画像生成まで1つのアプリで完結",
      "プログラミング支援の情報・実績が最も豊富",
    ],
    freePlan: "無料あり（GPT-4o mini）",
    officialHref: "/chatgpt-guide",
    officialLabel: "ChatGPT完全ガイドを見る",
    relatedGuides: [
      { href: "/chatgpt-guide", label: "ChatGPT完全ガイド2026", emoji: "🤖" },
      { href: "/chatgpt-prompt-guide", label: "ChatGPTプロンプトガイド", emoji: "💡" },
      { href: "/ai-tools-comparison", label: "5大AIツール徹底比較", emoji: "⚖️" },
    ],
  },
  claude: {
    id: "claude",
    name: "Claude",
    emoji: "🧠",
    maker: "Anthropic",
    accent: "text-orange-600 dark:text-orange-400",
    badgeBg: "bg-orange-600",
    cardBorder: "border-orange-200 dark:border-orange-800",
    tagline: "文章品質・長文処理で頭ひとつ抜ける、丁寧な相棒",
    description:
      "Claudeは長文の一貫性・文章の自然さで高く評価されているAI。200,000トークンという大きなコンテキストウィンドウを活かして、契約書・論文・レポートなど長い資料を丸ごと読み込ませる用途に強みがあります。",
    strengths: [
      "長文でも品質が落ちにくい、自然な文章生成",
      "最大200,000トークンの長文読解・要約",
      "Claude Codeなどコーディング支援も高評価",
    ],
    freePlan: "無料あり（Claude 3.5 Haiku）",
    officialHref: "/claude-guide",
    officialLabel: "Claude完全ガイドを見る",
    relatedGuides: [
      { href: "/claude-guide", label: "Claude完全ガイド2026", emoji: "🧠" },
      { href: "/ai-writing-guide", label: "AI文章作成ガイド", emoji: "✍️" },
      { href: "/ai-tools-comparison", label: "5大AIツール徹底比較", emoji: "⚖️" },
    ],
  },
  gemini: {
    id: "gemini",
    name: "Gemini",
    emoji: "✨",
    maker: "Google",
    accent: "text-blue-600 dark:text-blue-400",
    badgeBg: "bg-blue-600",
    cardBorder: "border-blue-200 dark:border-blue-800",
    tagline: "Google連携×最大100万トークンの大容量が武器",
    description:
      "GeminiはGmail・Googleドキュメント・スプレッドシートなどGoogleサービスとの統合が最大の強み。最大100万トークンの巨大なコンテキストウィンドウにより、書籍1冊分の資料も丸ごと分析できます。",
    strengths: [
      "Gmail・Docs・Sheetsと直接連携できる",
      "最大1,000,000トークンの圧倒的な処理量",
      "YouTube動画のURLを直接分析できる",
    ],
    freePlan: "無料あり（Gemini 1.5 Flash）",
    officialHref: "/gemini-guide",
    officialLabel: "Gemini完全ガイドを見る",
    relatedGuides: [
      { href: "/gemini-guide", label: "Gemini完全ガイド2026", emoji: "✨" },
      { href: "/ai-search-guide", label: "AI検索ガイド", emoji: "🔎" },
      { href: "/ai-tools-comparison", label: "5大AIツール徹底比較", emoji: "⚖️" },
    ],
  },
  perplexity: {
    id: "perplexity",
    name: "Perplexity",
    emoji: "🔍",
    maker: "Perplexity AI",
    accent: "text-cyan-600 dark:text-cyan-400",
    badgeBg: "bg-cyan-600",
    cardBorder: "border-cyan-200 dark:border-cyan-800",
    tagline: "引用付きリアルタイム検索の決定版",
    description:
      "Perplexityは質問に対してWebをリアルタイム検索し、出典（引用元）を明示して回答するのが最大の特徴。情報の裏取りがしやすく、最新ニュースや学術的な調査、正確性が求められるリサーチに向いています。",
    strengths: [
      "回答の根拠となる出典URLを常に表示",
      "最新ニュース・トレンドの調査に強い",
      "学術論文・データの検索精度が高い",
    ],
    freePlan: "無料あり（利用回数に制限あり）",
    officialHref: "/perplexity-guide",
    officialLabel: "Perplexityガイドを見る",
    relatedGuides: [
      { href: "/perplexity-guide", label: "Perplexity完全ガイド", emoji: "🔍" },
      { href: "/ai-search-guide", label: "AI検索ガイド", emoji: "🔎" },
      { href: "/ai-tools-comparison", label: "5大AIツール徹底比較", emoji: "⚖️" },
    ],
  },
  copilot: {
    id: "copilot",
    name: "GitHub Copilot",
    emoji: "🐙",
    maker: "GitHub / Microsoft",
    accent: "text-indigo-600 dark:text-indigo-400",
    badgeBg: "bg-indigo-600",
    cardBorder: "border-indigo-200 dark:border-indigo-800",
    tagline: "エディタに常駐する、コーディング専属パートナー",
    description:
      "GitHub CopilotはVS Code・JetBrainsなどのエディタに直接組み込まれ、コードを書きながらリアルタイムで補完・提案を受けられるAIです。既存プロジェクトへの導入のしやすさ・実績の多さで開発者から高い支持を得ています。",
    strengths: [
      "エディタ内でのインラインコード補完が最速",
      "チャット機能でコードの説明・修正も可能",
      "テスト自動生成・プルリクエスト要約にも対応",
    ],
    freePlan: "月2,000回まで無料（個人プラン）",
    officialHref: "/copilot-guide",
    officialLabel: "Copilotガイドを見る",
    relatedGuides: [
      { href: "/copilot-guide", label: "GitHub Copilotガイド", emoji: "🐙" },
      { href: "/ai-coding-guide", label: "AIコーディングツール完全ガイド", emoji: "💻" },
      { href: "/ai-tools-comparison", label: "5大AIツール徹底比較", emoji: "⚖️" },
    ],
  },
};

function computeResult(answers: ScoreMap[]): ToolId {
  const totals: Record<ToolId, number> = {
    chatgpt: 0,
    claude: 0,
    gemini: 0,
    perplexity: 0,
    copilot: 0,
  };

  for (const scoreMap of answers) {
    for (const [key, value] of Object.entries(scoreMap)) {
      const toolId = key as ToolId;
      totals[toolId] += value ?? 0;
    }
  }

  let best: ToolId = TIE_BREAK_ORDER[0];
  let bestScore = -Infinity;
  for (const toolId of TIE_BREAK_ORDER) {
    if (totals[toolId] > bestScore) {
      bestScore = totals[toolId];
      best = toolId;
    }
  }
  return best;
}

// ── 結果画面 ─────────────────────────────────────────────
function ResultView({ toolId, onRestart }: { toolId: ToolId; onRestart: () => void }) {
  const profile = TOOL_PROFILES[toolId];

  return (
    <div className="flex flex-col gap-6">
      {/* 結果ヘッダー */}
      <div className={`rounded-2xl border-2 ${profile.cardBorder} bg-white dark:bg-gray-900 p-6 sm:p-8 text-center shadow-sm`}>
        <p className="text-xs font-bold text-gray-500 dark:text-gray-300 uppercase tracking-widest mb-3">
          診断結果
        </p>
        <div className="text-5xl mb-3">{profile.emoji}</div>
        <p className={`text-xs font-bold text-white ${profile.badgeBg} inline-block px-3 py-1 rounded-full mb-3`}>
          {profile.maker}
        </p>
        <h2 className={`text-2xl sm:text-3xl font-black mb-2 ${profile.accent}`}>
          あなたに最適なのは「{profile.name}」
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">{profile.tagline}</p>
      </div>

      {/* 解説 */}
      <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-6">
        <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-1.5">
          <span>💡</span> なぜ{profile.name}が合うのか
        </h3>
        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          {profile.description}
        </p>
        <ul className="flex flex-col gap-2 mb-4">
          {profile.strengths.map((s) => (
            <li key={s} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
              <span className="text-emerald-500 dark:text-emerald-400 mt-0.5 shrink-0">✓</span>
              {s}
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-300 border-t border-gray-100 dark:border-gray-700 pt-3">
          <span className="font-semibold">料金:</span>
          <span>{profile.freePlan}</span>
        </div>
      </div>

      {/* 公式ガイドCTA */}
      <Link
        href={profile.officialHref}
        className={`block text-center text-white font-bold text-sm px-6 py-3.5 rounded-xl transition-colors ${profile.badgeBg} hover:opacity-90`}
      >
        {profile.officialLabel} →
      </Link>

      {/* 関連記事（内部リンク） */}
      <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-5">
        <p className="text-xs font-bold text-gray-500 dark:text-gray-300 mb-3 flex items-center gap-1.5">
          <span>📚</span> あわせて読みたい関連ガイド
        </p>
        <div className="flex flex-col gap-2">
          {profile.relatedGuides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 hover:border-blue-300 dark:hover:border-blue-700 hover:bg-blue-50/50 dark:hover:bg-blue-950/20 transition-all group"
            >
              <span className="text-base shrink-0">{guide.emoji}</span>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {guide.label}
              </span>
              <span className="ml-auto text-xs text-gray-500 dark:text-gray-300 group-hover:text-blue-500 transition-colors">→</span>
            </Link>
          ))}
        </div>
      </div>

      {/* メルマガCTA */}
      <NewsletterSignup />

      {/* リトライ */}
      <button
        onClick={onRestart}
        className="text-center text-sm font-medium text-gray-500 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2"
      >
        ↺ もう一度診断する
      </button>

      {/* アフィリエイトセクション（自然な文脈で設置） */}
      <div className="-mx-4 sm:mx-0 mt-4">
        <AffiliateSectionAiNews />
      </div>
    </div>
  );
}

// ── 質問画面 ─────────────────────────────────────────────
function QuestionView({
  step,
  onAnswer,
  onBack,
}: {
  step: number;
  onAnswer: (scores: ScoreMap) => void;
  onBack: () => void;
}) {
  const question = QUESTIONS[step];
  const progress = Math.round(((step + 1) / QUESTIONS.length) * 100);

  return (
    <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-6 sm:p-8 shadow-sm">
      {/* プログレスバー */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold text-blue-600 dark:text-blue-400">
            Q{step + 1} / {QUESTIONS.length}
          </span>
          <span className="text-xs text-gray-500 dark:text-gray-300">{progress}%</span>
        </div>
        <div className="w-full h-1.5 rounded-full bg-gray-100 dark:bg-gray-800 overflow-hidden">
          <div
            className="h-full bg-blue-600 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* 質問文 */}
      <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1.5 leading-snug">
        {question.question}
      </h2>
      {question.sub && (
        <p className="text-xs text-gray-500 dark:text-gray-300 mb-5">{question.sub}</p>
      )}
      {!question.sub && <div className="mb-5" />}

      {/* 選択肢 */}
      <div className="flex flex-col gap-2.5">
        {question.options.map((option) => (
          <button
            key={option.label}
            onClick={() => onAnswer(option.scores)}
            className="text-left px-4 py-3.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/60 hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/30 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-300 transition-all"
          >
            {option.label}
          </button>
        ))}
      </div>

      {step > 0 && (
        <button
          onClick={onBack}
          className="mt-5 text-xs font-medium text-gray-500 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          ← 前の質問に戻る
        </button>
      )}
    </div>
  );
}

// ── スタート画面 ─────────────────────────────────────────
function StartView({ onStart }: { onStart: () => void }) {
  return (
    <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-6 sm:p-10 text-center shadow-sm">
      <div className="text-5xl mb-4">🧭</div>
      <h2 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white mb-3">
        7つの質問に答えるだけ
      </h2>
      <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-6 max-w-md mx-auto">
        ChatGPT・Claude・Gemini・Perplexity・GitHub Copilotの中から、あなたの使い方に一番合うAIツールをその場で診断します。所要時間は約1分です。
      </p>
      <button
        onClick={onStart}
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-8 py-3.5 rounded-full transition-colors"
      >
        診断をはじめる →
      </button>
      <p className="text-xs text-gray-500 dark:text-gray-300 mt-4">無料・登録不要・約1分で完了</p>
    </div>
  );
}

// ── メインコンポーネント ─────────────────────────────────
export default function AiToolDiagnosisClient() {
  const [phase, setPhase] = useState<"start" | "quiz" | "result">("start");
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<ScoreMap[]>([]);
  const [result, setResult] = useState<ToolId | null>(null);

  function handleStart() {
    setPhase("quiz");
    setStep(0);
    setAnswers([]);
  }

  function handleAnswer(scores: ScoreMap) {
    const nextAnswers = [...answers.slice(0, step), scores];
    setAnswers(nextAnswers);

    if (step + 1 < QUESTIONS.length) {
      setStep(step + 1);
    } else {
      setResult(computeResult(nextAnswers));
      setPhase("result");
    }
  }

  function handleBack() {
    if (step > 0) {
      setStep(step - 1);
    }
  }

  function handleRestart() {
    setPhase("start");
    setStep(0);
    setAnswers([]);
    setResult(null);
  }

  return (
    <div className="max-w-xl mx-auto">
      {phase === "start" && <StartView onStart={handleStart} />}
      {phase === "quiz" && (
        <QuestionView step={step} onAnswer={handleAnswer} onBack={handleBack} />
      )}
      {phase === "result" && result && (
        <ResultView toolId={result} onRestart={handleRestart} />
      )}
    </div>
  );
}

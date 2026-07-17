import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "パートナーサイト",
  description: "AI News Japan のパートナーサイト一覧。映画・農業・AI教育・美容テックなど多彩なメディアと連携しています。",
  openGraph: {
    title: "パートナーサイト | AI News Japan",
    description: "AI News Japan のパートナーサイト一覧。",
    type: "website",
    url: "https://ai-news-site-wheat.vercel.app/partners",
  },
};

const PARTNERS = [
  {
    name: "Movie★Star",
    tagline: "映画データベース",
    url: "https://movie2026.vercel.app/",
    description:
      "映画好きによる激選206本の映画データベース。ハリウッド189本・アジア映画17本を収録。予告編・評価・レビューが無料で見られる。平均評価 ★7.7。",
    genre: "🎬 映画",
    stats: [
      { label: "収録作品", value: "206本" },
      { label: "平均評価", value: "★7.7" },
      { label: "無料公開", value: "予告編付き" },
    ],
    gradient: "from-rose-500 to-pink-600",
    softBg: "from-rose-50 to-pink-50/60 dark:from-rose-950/25 dark:to-pink-950/15",
    border: "border-rose-200 dark:border-rose-800/50",
    badge: "bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300",
    btnGradient: "from-rose-500 to-pink-600",
  },
  {
    name: "LUDOPICO",
    tagline: "沖縄育ち、黄金のマイクロトマト",
    url: "https://ludopico.vercel.app/",
    description:
      "沖縄の土で10年、味にこだわり続けた高糖度ミニトマト。2013年から自家採取で選抜された固定種を無農薬・無化学肥料で栽培。一粒に10年の歴史を持つ限定品。",
    genre: "🍅 農業・食品",
    stats: [
      { label: "栽培歴", value: "10年以上" },
      { label: "栽培方法", value: "無農薬" },
      { label: "産地", value: "沖縄県産" },
    ],
    gradient: "from-orange-500 to-amber-500",
    softBg: "from-orange-50 to-amber-50/60 dark:from-orange-950/25 dark:to-amber-950/15",
    border: "border-orange-200 dark:border-orange-800/50",
    badge: "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300",
    btnGradient: "from-orange-500 to-amber-500",
  },
  {
    name: "Claude Code Dojo",
    tagline: "ターミナルを制する者が、開発を制する",
    url: "https://claude-code-course-psi.vercel.app/",
    description:
      "Claude Code CLIスキルを体系的に学べる日本語プラットフォーム。初級〜上級まで4段階のレベル設計。無料コースから始めて、AIエージェントを自在に操る開発者へ。",
    genre: "🤖 AI教育",
    stats: [
      { label: "レベル数", value: "4段階" },
      { label: "無料コース", value: "初級・基礎" },
      { label: "上級コース", value: "¥12,800/月" },
    ],
    gradient: "from-blue-500 to-indigo-600",
    softBg: "from-blue-50 to-indigo-50/60 dark:from-blue-950/25 dark:to-indigo-950/15",
    border: "border-blue-200 dark:border-blue-800/50",
    badge: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
    btnGradient: "from-blue-500 to-indigo-600",
  },
  {
    name: "Beauty Tech Japan",
    tagline: "海外美容・コスメ最新情報を日本語で",
    url: "https://beauty-tech-japan.vercel.app/",
    description:
      "Allure・Vogue Beauty・Byrdieなど世界の美容メディアから最新トレンドをAIが厳選・日本語化。スキンケア・コスメ・美容テックの最前線を毎日お届け。",
    genre: "💄 美容テック",
    stats: [
      { label: "収録記事", value: "191件" },
      { label: "カテゴリ", value: "9種類" },
      { label: "更新頻度", value: "3日ごと" },
    ],
    gradient: "from-purple-500 to-fuchsia-500",
    softBg: "from-purple-50 to-fuchsia-50/60 dark:from-purple-950/25 dark:to-fuchsia-950/15",
    border: "border-purple-200 dark:border-purple-800/50",
    badge: "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",
    btnGradient: "from-purple-500 to-fuchsia-500",
  },
  {
    name: "暴露仙人",
    tagline: "AIが本性を毒舌で暴露する占いサイト",
    url: "https://fortune-site-neon.vercel.app/",
    description:
      "名前・生年月日・悩みを入力するとAIが毒舌で本性を暴露。電話占いサービスの徹底比較・ランキングも掲載する100ページ超の総合占いメディア。",
    genre: "🔮 占い・エンタメ",
    stats: [
      { label: "収録ページ", value: "103ページ" },
      { label: "診断項目", value: "5つの質問" },
      { label: "料金", value: "完全無料" },
    ],
    gradient: "from-violet-500 to-purple-700",
    softBg: "from-violet-50 to-purple-50/60 dark:from-violet-950/25 dark:to-purple-950/15",
    border: "border-violet-200 dark:border-violet-800/50",
    badge: "bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300",
    btnGradient: "from-violet-500 to-purple-700",
  },
  {
    name: "副業タイプ診断AI",
    tagline: "AIがあなたに合う副業を3分で診断",
    url: "https://fukugyou-shindan-eosin.vercel.app/",
    description:
      "6問のステップ式診断にGemini AIが回答し、あなたに合う副業TOP3・月収シミュレーター・30日ロードマップを提示。30本以上の副業別ガイドも収録。",
    genre: "💼 副業診断",
    stats: [
      { label: "診断時間", value: "3分" },
      { label: "副業ガイド", value: "30本以上" },
      { label: "料金", value: "完全無料" },
    ],
    gradient: "from-emerald-500 to-teal-600",
    softBg: "from-emerald-50 to-teal-50/60 dark:from-emerald-950/25 dark:to-teal-950/15",
    border: "border-emerald-200 dark:border-emerald-800/50",
    badge: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
    btnGradient: "from-emerald-500 to-teal-600",
  },
  {
    name: "YouTubeコンサルティング情報サイト",
    tagline: "AIキーワード分析でチャンネルを伸ばす",
    url: "https://youtubecons.vercel.app/",
    description:
      "YouTube成長戦略ガイドとAIキーワード分析ツールを無料提供。登録者を伸ばしたいクリエイター向けの実践的なノウハウを発信。",
    genre: "📹 YouTube戦略",
    stats: [
      { label: "分析ツール", value: "無料" },
      { label: "対象", value: "クリエイター" },
      { label: "更新", value: "随時" },
    ],
    gradient: "from-red-500 to-rose-600",
    softBg: "from-red-50 to-rose-50/60 dark:from-red-950/25 dark:to-rose-950/15",
    border: "border-red-200 dark:border-red-800/50",
    badge: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300",
    btnGradient: "from-red-500 to-rose-600",
  },
];

export default function PartnersPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-0">
      {/* 戻るリンク */}
      <Link
        href="/"
        className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors mb-6"
      >
        ← 記事一覧に戻る
      </Link>

      {/* ページヘッダー */}
      <div className="mb-10 text-center sm:text-left">
        <span className="inline-block text-xs font-bold bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-3 py-1 rounded-full mb-3">
          Partnership
        </span>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mb-3">
          パートナーサイト
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-300 leading-relaxed max-w-xl">
          AI News Japan と連携するパートナーサイトをご紹介します。
          映画・農業・AI教育・美容テックなど、多彩な分野のメディアと協力しています。
        </p>
      </div>

      {/* パートナーカードグリッド */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
        {PARTNERS.map((p) => (
          <a
            key={p.name}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group block rounded-2xl border ${p.border} bg-gradient-to-br ${p.softBg} overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
          >
            {/* グラデーションバー */}
            <div className={`h-1 bg-gradient-to-r ${p.gradient}`} />

            <div className="p-6">
              {/* ジャンルバッジ */}
              <span className={`inline-block text-[11px] font-bold px-2.5 py-0.5 rounded-full mb-3 ${p.badge}`}>
                {p.genre}
              </span>

              {/* サイト名 + タグライン */}
              <h2 className="text-xl font-extrabold text-gray-900 dark:text-white mb-0.5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {p.name}
              </h2>
              <p className="text-xs font-medium text-gray-500 dark:text-gray-300 mb-3">
                {p.tagline}
              </p>

              {/* 説明文 */}
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-5">
                {p.description}
              </p>

              {/* スタッツ */}
              <div className="flex gap-3 mb-5 flex-wrap">
                {p.stats.map((s) => (
                  <div key={s.label} className="flex flex-col">
                    <span className="text-[10px] text-gray-500 dark:text-gray-300">{s.label}</span>
                    <span className="text-xs font-bold text-gray-700 dark:text-gray-300">{s.value}</span>
                  </div>
                ))}
              </div>

              {/* URLとボタン */}
              <div className="flex items-center justify-between gap-3">
                <span className="text-[11px] text-gray-500 dark:text-gray-300 font-mono truncate">
                  {p.url.replace("https://", "").replace(/\/$/, "")}
                </span>
                <span className={`shrink-0 text-xs font-bold px-4 py-1.5 rounded-lg bg-gradient-to-r ${p.btnGradient} text-white shadow-sm group-hover:shadow-md transition-shadow`}>
                  サイトを見る →
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* パートナー募集 */}
      <div className="rounded-2xl border border-dashed border-gray-300 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-900/30 p-7 text-center">
        <div className="text-2xl mb-2">🤝</div>
        <p className="text-sm font-bold text-gray-800 dark:text-gray-200 mb-1">
          パートナーシップのご相談
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-300 leading-relaxed mb-3">
          AI・テクノロジー関連サイトを運営されている方、お気軽にご連絡ください。
        </p>
        <a
          href="mailto:tz77772014@gmail.com"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline"
        >
          tz77772014@gmail.com
        </a>
      </div>
    </div>
  );
}

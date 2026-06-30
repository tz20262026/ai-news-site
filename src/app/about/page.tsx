import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — 運営情報・編集方針",
  description:
    "AI News Japan の運営者情報・編集方針・AIによる情報精査プロセスをご紹介します。Kコンサルタント運営・毎日自動更新のAIニュースメディア。",
  openGraph: {
    title: "About | AI News Japan",
    description: "運営者情報・編集方針・AIによる情報精査プロセス",
    type: "website",
    url: "https://ai-news-site-wheat.vercel.app/about",
    images: [
      {
        url: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&q=80&fit=crop",
        width: 1200,
        height: 630,
        alt: "AI News Japan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About | AI News Japan",
    description: "運営者情報・編集方針・AIによる情報精査プロセス",
    images: ["https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&q=80&fit=crop"],
  },
};

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-6">
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
        >
          ← 記事一覧に戻る
        </Link>
      </div>

      {/* ヘッダー */}
      <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-7 text-white mb-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse inline-block" />
          <span className="text-xs font-bold text-green-300">毎日自動更新</span>
        </div>
        <h1 className="text-2xl font-extrabold mb-2">AI News Japan とは</h1>
        <p className="text-blue-200 text-sm leading-relaxed">
          海外100媒体以上から最新AIニュースをAIが自律的に収集・精査し、<br />
          日本語でわかりやすくお届けするニュースメディアです。
        </p>
      </div>

      <div className="space-y-4">

        {/* サービス概要 */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
          <h2 className="text-base font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
            <span className="text-lg">🤖</span> サービス概要
          </h2>
          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
            AI News Japan は、OpenAI・Google・Anthropicなどの最新AI動向を
            <strong className="text-gray-900 dark:text-white">毎日自動収集・日本語翻訳</strong>
            してお届けするメディアです。英語の一次情報にアクセスできない方でも、
            世界最速レベルでAI最前線の情報を得られます。
          </p>
          <div className="grid grid-cols-3 gap-3 mt-4">
            {[
              { num: "100+", label: "情報源媒体数" },
              { num: "339+", label: "掲載記事数" },
              { num: "毎日", label: "自動更新" },
            ].map((stat) => (
              <div key={stat.label} className="text-center bg-blue-50 dark:bg-blue-950/30 rounded-xl py-3">
                <p className="text-xl font-black text-blue-600 dark:text-blue-400">{stat.num}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 情報精査プロセス */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
          <h2 className="text-base font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <span className="text-lg">⚙️</span> AIによる情報精査プロセス
          </h2>
          <ol className="space-y-3">
            {[
              { step: "01", title: "自動収集", desc: "TechCrunch・VentureBeat・The Verge・MIT Technology Reviewなど100媒体以上からAI関連記事を毎日スクレイピング" },
              { step: "02", title: "重要度判定", desc: "AIが記事の新規性・影響度・読者へのメリットを自律的に評価し、掲載基準を満たした記事のみを選別" },
              { step: "03", title: "翻訳・要約", desc: "原文の意図を損なわない形で日本語に翻訳。専門用語には適切な解説を付加" },
              { step: "04", title: "タグ付け・公開", desc: "カテゴリ分類・タグ付けを自動実行し、読者が探しやすい形で公開" },
            ].map((item) => (
              <li key={item.step} className="flex items-start gap-3">
                <span className="text-xs font-black text-white bg-blue-600 px-2 py-1 rounded-lg shrink-0 mt-0.5">{item.step}</span>
                <div>
                  <p className="text-sm font-bold text-gray-900 dark:text-white">{item.title}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 leading-relaxed">{item.desc}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="text-xs text-gray-400 dark:text-gray-500 mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
            ※ 掲載内容はAIによる自動翻訳・要約です。詳細は各記事の「原文を読む」リンクでご確認ください。
          </p>
        </div>

        {/* カバーメディア */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
          <h2 className="text-base font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
            <span className="text-lg">📰</span> 主な情報源
          </h2>
          <div className="flex flex-wrap gap-2">
            {[
              "TechCrunch", "VentureBeat", "The Verge", "Wired", "Ars Technica",
              "MIT Technology Review", "Product Hunt", "Hacker News",
              "AI News", "Bloomberg Tech", "Reuters Tech", "その他90媒体以上",
            ].map((media) => (
              <span
                key={media}
                className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-3 py-1 rounded-full"
              >
                {media}
              </span>
            ))}
          </div>
        </div>

        {/* 編集方針 */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
          <h2 className="text-base font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
            <span className="text-lg">📋</span> 編集方針
          </h2>
          <ul className="space-y-2">
            {[
              "一次情報（原文記事）へのリンクを必ず掲載し、情報源の透明性を担保します",
              "AIによる翻訳・要約であることを明示し、読者が誤解しないよう配慮します",
              "広告・PR記事は「PR / 広告」と明記し、編集記事と明確に区別します",
              "事実と異なる情報を発見した場合は速やかに修正・削除します",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                <span className="text-emerald-500 shrink-0 mt-0.5">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* 運営者情報 */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
          <h2 className="text-base font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <span className="text-lg">🏢</span> 運営者情報
          </h2>
          <dl className="space-y-3 text-sm">
            {[
              { label: "運営会社", value: "Kコンサルタント" },
              { label: "代表者", value: "瑞慶覧 達成（ズケラン タツナリ）" },
              { label: "所在地", value: "〒903-0815 沖縄県那覇市首里当蔵町1丁目15番地" },
              { label: "お問い合わせ", value: "tz77772014@gmail.com" },
              { label: "対応時間", value: "平日 10:00〜18:00（土日祝除く）" },
            ].map(({ label, value }) => (
              <div key={label} className="flex flex-col sm:flex-row sm:gap-4">
                <dt className="text-gray-500 dark:text-gray-400 sm:w-28 shrink-0 font-medium">{label}</dt>
                <dd className="text-gray-800 dark:text-gray-200">
                  {label === "お問い合わせ" ? (
                    <a href={`mailto:${value}`} className="text-blue-600 dark:text-blue-400 hover:underline">{value}</a>
                  ) : value}
                </dd>
              </div>
            ))}
          </dl>
          <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
            <Link
              href="/tokushoho"
              className="text-xs text-blue-600 dark:text-blue-400 hover:underline"
            >
              特定商取引法に基づく表記 →
            </Link>
          </div>
        </div>

      </div>

      {/* JSON-LD Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "AI News Japan",
            url: "https://ai-news-site-wheat.vercel.app",
            description: "海外100媒体以上から最新AIニュースをAIが自律的に収集・精査し、日本語でお届けするメディア",
            foundingDate: "2026",
            contactPoint: {
              "@type": "ContactPoint",
              email: "tz77772014@gmail.com",
              contactType: "customer support",
              availableLanguage: "Japanese",
            },
            address: {
              "@type": "PostalAddress",
              addressLocality: "那覇市",
              addressRegion: "沖縄県",
              addressCountry: "JP",
            },
          }),
        }}
      />

      <div className="mt-8 text-center">
        <Link
          href="/"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold px-8 py-3 rounded-full transition-colors shadow-sm"
        >
          記事一覧を見る →
        </Link>
      </div>
    </div>
  );
}

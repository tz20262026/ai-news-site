import Link from "next/link";

// 人気・おすすめページへの内部リンク（離脱防止・回遊率向上のため）
// sitemap.ts で priority が高い実在ルートから選定
const POPULAR_LINKS = [
  { href: "/ai-tools-guide", label: "無料AIツール15選", emoji: "🔧" },
  { href: "/chatgpt-guide", label: "ChatGPT使い方ガイド", emoji: "🤖" },
  { href: "/ai-beginner-guide", label: "AI初心者完全ガイド", emoji: "🚀" },
  { href: "/articles", label: "全記事一覧", emoji: "📰" },
  { href: "/tags", label: "タグから探す", emoji: "🏷️" },
];

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center text-center px-4 py-16 sm:py-24">
      <div className="w-full max-w-lg rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-sm p-6 sm:p-10">
        <p className="text-5xl sm:text-6xl mb-4" aria-hidden="true">
          🤖
        </p>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mb-3">
          404 — ページが見つかりません
        </h1>
        <p className="text-sm sm:text-base text-gray-700 dark:text-gray-200 leading-relaxed mb-8">
          お探しのページは移動または削除された可能性があります。
          <br />
          URLをご確認のうえ、下記のリンクからお目当ての情報をお探しください。
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 px-5 py-2.5 rounded-xl transition-colors shadow-sm"
        >
          🏠 ホームに戻る
        </Link>

        <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-700/60">
          <p className="text-xs font-bold text-gray-500 dark:text-gray-300 mb-3 flex items-center justify-center gap-1.5">
            <span>📚</span> こちらの人気ページもおすすめです
          </p>
          <div className="flex flex-col gap-2">
            {POPULAR_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 hover:border-blue-300 dark:hover:border-blue-700 hover:bg-blue-50/50 dark:hover:bg-blue-950/20 transition-all group"
              >
                <span className="text-base shrink-0">{link.emoji}</span>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {link.label}
                </span>
                <span className="ml-auto text-xs text-gray-500 dark:text-gray-300 group-hover:text-blue-500 transition-colors">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

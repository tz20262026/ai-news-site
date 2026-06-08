import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { allArticles, getArticleImageUrl, getRelativeTime } from "@/lib/articles";

export const metadata: Metadata = {
  title: "RSS購読 | AI News Japan",
  description: "AI News Japan のRSSフィードを購読して、最新AIニュースを自動受信しましょう。",
};

const FEED_URL = "https://ai-news-site-wheat.vercel.app/feed.xml";

const READERS = [
  { name: "Feedly", url: `https://feedly.com/i/subscription/feed/${encodeURIComponent(FEED_URL)}`, color: "bg-green-500" },
  { name: "Inoreader", url: `https://www.inoreader.com/?add_feed=${encodeURIComponent(FEED_URL)}`, color: "bg-blue-500" },
  { name: "The Old Reader", url: `https://theoldreader.com/feeds/subscribe?url=${encodeURIComponent(FEED_URL)}`, color: "bg-orange-500" },
];

export default function RSSPage() {
  const articles = allArticles.slice(0, 10);

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-0">
      <div className="mb-6">
        <Link href="/" className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
          ← 記事一覧に戻る
        </Link>
      </div>

      {/* ヘッダー */}
      <div className="bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl p-6 text-white mb-6">
        <div className="flex items-center gap-3 mb-3">
          <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current shrink-0">
            <path d="M6.18 15.64a2.18 2.18 0 0 1 2.18 2.18C8.36 19.01 7.38 20 6.18 20C4.98 20 4 19.01 4 17.82a2.18 2.18 0 0 1 2.18-2.18M4 4.44A15.56 15.56 0 0 1 19.56 20h-2.83A12.73 12.73 0 0 0 4 7.27V4.44m0 5.66a9.9 9.9 0 0 1 9.9 9.9h-2.83A7.07 7.07 0 0 0 4 12.93V10.1z" />
          </svg>
          <div>
            <h1 className="text-xl font-bold">RSS購読</h1>
            <p className="text-sm text-orange-100">新着記事を自動受信できます</p>
          </div>
        </div>

        {/* フィードURL */}
        <div className="bg-white/15 rounded-xl px-4 py-3 mt-4">
          <p className="text-xs text-orange-100 mb-1">フィードURL</p>
          <p className="text-sm font-mono break-all text-white">{FEED_URL}</p>
        </div>
      </div>

      {/* RSSリーダーで購読 */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 p-5 mb-6">
        <h2 className="text-sm font-bold text-gray-900 dark:text-white mb-3">📱 RSSリーダーで購読する</h2>
        <div className="flex flex-col gap-2">
          {READERS.map((r) => (
            <a
              key={r.name}
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-3 ${r.color} text-white rounded-xl px-4 py-3 text-sm font-bold hover:opacity-90 transition-opacity`}
            >
              <span className="flex-1">{r.name} で購読する</span>
              <span>→</span>
            </a>
          ))}
        </div>
        <p className="text-xs text-gray-400 dark:text-gray-500 mt-3 leading-relaxed">
          上のボタンをタップするとRSSリーダーに自動登録されます。<br />
          別のアプリをお使いの場合はフィードURLをコピーして登録してください。
        </p>
      </div>

      {/* 最新記事プレビュー */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 p-5">
        <h2 className="text-sm font-bold text-gray-900 dark:text-white mb-4">📰 配信中の最新記事（直近10件）</h2>
        <div className="flex flex-col divide-y divide-gray-100 dark:divide-gray-800">
          {articles.map((a) => (
            <Link
              key={a.id}
              href={`/articles/${a.id}`}
              className="flex items-center gap-3 py-3 group"
            >
              <div className="relative w-12 h-12 rounded-lg overflow-hidden shrink-0">
                <Image
                  src={getArticleImageUrl(a)}
                  alt={a.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="48px"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-800 dark:text-gray-200 line-clamp-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {a.title}
                </p>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">
                  {getRelativeTime(a.publishedAt)} · {a.source}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

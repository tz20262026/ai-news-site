import Link from "next/link";
import type { Metadata } from "next";
import { allArticles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "タグ一覧 | AI News Japan",
  description: "AI News Japan のすべての記事タグを一覧表示しています。気になるテーマのタグをクリックして関連記事を探してみましょう。",
  openGraph: {
    title: "タグ一覧 | AI News Japan",
    description: "AI News Japan のすべての記事タグを一覧表示",
    type: "website",
    url: "https://ai-news-site-wheat.vercel.app/tags",
    images: [
      {
        url: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&q=80&fit=crop",
        width: 1200,
        height: 630,
        alt: "タグ一覧 | AI News Japan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "タグ一覧 | AI News Japan",
    description: "AI News Japan のすべての記事タグを一覧表示",
    images: ["https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&q=80&fit=crop"],
  },
};

/** タグ別の記事数を集計して降順に返す */
function collectTagCounts(): { tag: string; count: number }[] {
  const counts = new Map<string, number>();
  allArticles.forEach((a) => {
    a.tags.forEach((t) => {
      counts.set(t, (counts.get(t) ?? 0) + 1);
    });
  });
  return Array.from(counts.entries())
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count);
}

/** 記事数に応じてフォントサイズクラスを返す */
function getFontSizeClass(count: number, max: number): string {
  const ratio = count / max;
  if (ratio >= 0.7) return "text-xl font-bold";
  if (ratio >= 0.5) return "text-lg font-semibold";
  if (ratio >= 0.3) return "text-base font-medium";
  return "text-sm font-normal";
}

/** 記事数に応じてバッジカラークラスを返す */
function getBadgeClass(count: number, max: number): string {
  const ratio = count / max;
  if (ratio >= 0.7) return "bg-blue-600 text-white";
  if (ratio >= 0.5) return "bg-blue-500/90 text-white";
  if (ratio >= 0.3) return "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400";
  return "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400";
}

export default function TagsPage() {
  const tagCounts = collectTagCounts();
  const totalTags = tagCounts.length;
  const totalArticles = allArticles.length;
  const maxCount = tagCounts[0]?.count ?? 1;

  // 上位タグ（記事数5件以上）と通常タグに分割
  const popularTags = tagCounts.filter((t) => t.count >= 5);
  const regularTags = tagCounts.filter((t) => t.count < 5);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-0">
      {/* 戻るリンク */}
      <Link
        href="/"
        className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-blue-600 transition-colors mb-6"
      >
        ← 記事一覧に戻る
      </Link>

      {/* ページヘッダー */}
      <div className="mb-8">
        <h1 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-2">
          タグ一覧
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {totalTags}個のタグ ·{" "}
          <span className="font-semibold text-gray-700 dark:text-gray-300">{totalArticles}件</span>
          の記事を掲載中
        </p>
      </div>

      {/* 人気タグ（記事数が多いタグ） */}
      {popularTags.length > 0 && (
        <section className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
              人気タグ
            </h2>
            <span className="text-xs text-gray-400">（5件以上）</span>
          </div>
          <div className="p-5 bg-gradient-to-br from-blue-50/70 to-indigo-50/40 dark:from-blue-950/30 dark:to-indigo-950/20 rounded-2xl border border-blue-100/80 dark:border-blue-900/60">
            <div className="flex flex-wrap gap-3">
              {popularTags.map(({ tag, count }) => (
                <Link
                  key={tag}
                  href={`/tags/${encodeURIComponent(tag)}`}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 ${getBadgeClass(count, maxCount)} border-transparent hover:border-blue-300 dark:hover:border-blue-700`}
                >
                  <span className={getFontSizeClass(count, maxCount)}>
                    #{tag}
                  </span>
                  <span className="text-xs opacity-75 tabular-nums">
                    {count}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 全タグ一覧 */}
      <section>
        <div className="flex items-center gap-2 mb-4">
          <h2 className="text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
            すべてのタグ
          </h2>
          <span className="text-xs text-gray-400">（{totalTags}件）</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {tagCounts.map(({ tag, count }) => (
            <Link
              key={tag}
              href={`/tags/${encodeURIComponent(tag)}`}
              className="inline-flex items-center gap-1 text-xs bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400 px-2 py-0.5 rounded-full hover:bg-blue-200 dark:hover:bg-blue-800/60 hover:-translate-y-0.5 transition-all duration-200"
            >
              #{tag}
              <span className="opacity-60 tabular-nums">{count}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* 記事数が少ないタグの補足 */}
      {regularTags.length > 0 && (
        <p className="mt-6 text-xs text-gray-400 dark:text-gray-600 text-center">
          記事数の少ないタグも含むすべての{totalTags}タグを表示しています
        </p>
      )}

      {/* JSON-LD 構造化データ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "タグ一覧",
            description: `AI News Japan のすべての記事タグを一覧表示（${totalTags}タグ）`,
            url: "https://ai-news-site-wheat.vercel.app/tags",
            publisher: {
              "@type": "Organization",
              name: "AI News Japan",
              url: "https://ai-news-site-wheat.vercel.app",
            },
          }),
        }}
      />
    </div>
  );
}

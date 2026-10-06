import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getArticleImageUrl,
  getReadTime,
  getRelativeTime,
  isNew,
  filterDisplayTags,
  allArticles as localArticles,
  type Article,
} from "@/lib/articles";
import { getAllArticles, adaptMicroCMSArticle } from "@/lib/microcms";
import NewsletterSignup from "@/components/NewsletterSignup";

const BASE_URL = "https://ai-news-site-wheat.vercel.app";
// 1ページあたりの表示件数。全記事（500件超）を一度に出すとHTMLが肥大化するため分割する。
const PAGE_SIZE = 30;

type Props = { searchParams: Promise<{ page?: string }> };

/** microCMS優先・取得失敗時はローカルデータにフォールバック（page.tsx / articles/[id]/page.tsx と同じパターン） */
async function fetchArticles(): Promise<Article[]> {
  try {
    const remote = await getAllArticles();
    if (remote.length > 0) return remote.map(adaptMicroCMSArticle);
  } catch (e) {
    console.warn("[articles] microCMS 取得失敗、ローカルデータを使用:", e);
  }
  return localArticles;
}

/** 新しい順にソートした全記事を返す */
async function fetchSortedArticles(): Promise<Article[]> {
  const articles = await fetchArticles();
  return articles.slice().sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

/** searchParams の page 値を 1 以上の整数に正規化する（不正値は1扱い） */
function parsePage(raw: string | undefined): number {
  const n = Number(raw);
  if (!Number.isFinite(n) || !Number.isInteger(n) || n < 1) return 1;
  return n;
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const { page: rawPage } = await searchParams;
  const page = parsePage(rawPage);
  const articles = await fetchSortedArticles();
  const totalPages = Math.max(1, Math.ceil(articles.length / PAGE_SIZE));
  const canonicalUrl = page <= 1 ? `${BASE_URL}/articles` : `${BASE_URL}/articles?page=${page}`;
  const title = page <= 1 ? "記事一覧" : `記事一覧 - ${page}ページ目`;
  const description =
    page <= 1
      ? `AI News Japan が海外AIメディアから収集した最新ニュース全${articles.length}件を新しい順に一覧表示しています。`
      : `AI News Japan の記事一覧 ${page}ページ目（全${totalPages}ページ・全${articles.length}件）。`;

  return {
    title,
    description,
    alternates: { canonical: canonicalUrl },
    // 2ページ目以降は内容が重複気味のページネーションのため、検索結果にはインデックスしつつ
    // 正規URLは1ページ目に寄せず自己参照させる（他のタグ一覧ページと同じ方針）
    openGraph: {
      title: `${title} | AI News Japan`,
      description,
      type: "website",
      url: canonicalUrl,
      images: [
        {
          url: `${BASE_URL}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: "AI News Japan",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | AI News Japan`,
      description,
      images: [`${BASE_URL}/opengraph-image`],
    },
  };
}

/** ページ番号リンクを生成する（現在ページ周辺±2 ＋ 先頭・末尾、間は省略記号） */
function buildPageNumbers(current: number, total: number): (number | "ellipsis")[] {
  const pages = new Set<number>([1, total, current, current - 1, current + 1, current - 2, current + 2]);
  const sorted = Array.from(pages)
    .filter((p) => p >= 1 && p <= total)
    .sort((a, b) => a - b);

  const result: (number | "ellipsis")[] = [];
  let prev = 0;
  for (const p of sorted) {
    if (prev !== 0 && p - prev > 1) result.push("ellipsis");
    result.push(p);
    prev = p;
  }
  return result;
}

export default async function ArticlesIndexPage({ searchParams }: Props) {
  const { page: rawPage } = await searchParams;
  const page = parsePage(rawPage);
  const articles = await fetchSortedArticles();
  const totalArticles = articles.length;
  const totalPages = Math.max(1, Math.ceil(totalArticles / PAGE_SIZE));

  if (page > totalPages) notFound();

  const start = (page - 1) * PAGE_SIZE;
  const pageArticles = articles.slice(start, start + PAGE_SIZE);
  const canonicalUrl = page <= 1 ? `${BASE_URL}/articles` : `${BASE_URL}/articles?page=${page}`;
  const pageNumbers = buildPageNumbers(page, totalPages);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-0">
      {/* パンくずリスト（SEO・回遊性向上） */}
      <nav aria-label="パンくずリスト" className="mb-6 flex flex-wrap items-center gap-x-1.5 gap-y-1 text-xs text-gray-500 dark:text-gray-300">
        <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          ホーム
        </Link>
        <span className="text-gray-300 dark:text-gray-600">/</span>
        <span className="text-gray-500 dark:text-gray-300">記事一覧</span>
      </nav>

      {/* ページヘッダー */}
      <div className="mb-7">
        <h1 className="text-2xl font-extrabold text-gray-900 dark:text-white">
          記事一覧
        </h1>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
          全{totalArticles}件 ・ {page} / {totalPages}ページ
        </p>
      </div>

      {/* 記事グリッド */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
        {pageArticles.map((article) => (
          <Link
            key={article.id}
            href={`/articles/${article.id}`}
            className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg dark:hover:shadow-gray-900/50 hover:-translate-y-0.5 transition-all duration-300 group block"
          >
            {/* サムネイル画像。Vercel画像最適化の無料枠上限のため next/image ではなく素の img を使用（402回避） */}
            <div className="relative w-full h-40 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={getArticleImageUrl(article)}
                alt={article.title}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500"
              />
              {isNew(article.publishedAt) && (
                <span className="absolute top-2 right-2 text-xs font-bold bg-red-500 text-white px-2 py-0.5 rounded animate-pulse z-10">
                  NEW
                </span>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-3 left-4 right-4">
                <div className="flex flex-wrap gap-1">
                  {filterDisplayTags(article.tags).slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-white/20 backdrop-blur-sm text-white px-2 py-0.5 rounded-full font-medium border border-white/30"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* カード本文 */}
            <div className="p-4">
              <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-300 mb-1.5 gap-2">
                <span className="min-w-0 truncate">{getRelativeTime(article.publishedAt)} ・ {article.source}</span>
                <span className="shrink-0">{article.readTime ?? getReadTime(article.body)}分</span>
              </div>
              <h2 className="text-sm font-semibold text-gray-900 dark:text-gray-100 leading-snug mb-1.5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                {article.title}
              </h2>
              <p className="text-xs text-gray-500 dark:text-gray-300 leading-relaxed line-clamp-2">
                {article.summary}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* ページネーション */}
      {totalPages > 1 && (
        <nav aria-label="ページネーション" className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {page > 1 && (
            <Link
              href={page - 1 <= 1 ? "/articles" : `/articles?page=${page - 1}`}
              className="px-3 py-2 rounded-lg text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              ← 前へ
            </Link>
          )}

          {pageNumbers.map((p, i) =>
            p === "ellipsis" ? (
              <span key={`ellipsis-${i}`} className="px-2 text-sm text-gray-400 dark:text-gray-500">
                …
              </span>
            ) : (
              <Link
                key={p}
                href={p <= 1 ? "/articles" : `/articles?page=${p}`}
                aria-current={p === page ? "page" : undefined}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  p === page
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {p}
              </Link>
            )
          )}

          {page < totalPages && (
            <Link
              href={`/articles?page=${page + 1}`}
              className="px-3 py-2 rounded-lg text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              次へ →
            </Link>
          )}
        </nav>
      )}

      {/* メール登録導線 */}
      <div className="mt-10 max-w-md mx-auto">
        <NewsletterSignup compact />
      </div>

      {/* JSON-LD 構造化データ（パンくずリスト） */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "ホーム", item: BASE_URL },
              { "@type": "ListItem", position: 2, name: "記事一覧", item: `${BASE_URL}/articles` },
            ],
          }),
        }}
      />

      {/* JSON-LD 構造化データ（記事一覧ページ） */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "記事一覧",
            description: `AI News Japan の全${totalArticles}件の記事一覧（${page} / ${totalPages}ページ）`,
            url: canonicalUrl,
            publisher: {
              "@type": "Organization",
              name: "AI News Japan",
              url: BASE_URL,
            },
          }),
        }}
      />
    </div>
  );
}

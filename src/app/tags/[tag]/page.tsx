import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  allArticles,
  getArticleImageUrl,
  getRelativeTime,
  type Article,
} from "@/lib/articles";
import NewsletterSignup from "@/components/NewsletterSignup";

type Props = { params: Promise<{ tag: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { tag } = await params;
  const decoded = decodeURIComponent(tag);
  const articles = allArticles.filter((a) =>
    a.tags.some((t) => t.toLowerCase() === decoded.toLowerCase())
  );
  const canonicalUrl = `https://ai-news-site-wheat.vercel.app/tags/${tag}`;
  return {
    title: `#${decoded} の記事一覧`,
    description: `「${decoded}」に関するAIニュース記事を${articles.length}件掲載しています。TechCrunch・VentureBeatなど海外メディアから厳選した最新情報をお届け。`,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: `#${decoded} の記事一覧 | AI News Japan`,
      description: `「${decoded}」に関するAIニュースを${articles.length}件掲載`,
      type: "website",
      url: canonicalUrl,
    },
    twitter: {
      card: "summary_large_image",
      title: `#${decoded} の記事一覧 | AI News Japan`,
      description: `「${decoded}」に関するAIニュースを${articles.length}件掲載`,
    },
  };
}

/** Windowsファイルシステムで使用できない文字を含むタグかどうか判定する */
function isUnsafeForStaticPath(tag: string): boolean {
  // * ? < > | : \ などのWindows予約文字をチェック
  return /[*?<>|:\\]/.test(tag);
}

export async function generateStaticParams() {
  const tags = new Set<string>();
  allArticles.forEach((a) =>
    a.tags.forEach((t) => {
      // ファイルシステム非対応の文字を含むタグは静的生成をスキップ（動的にフォールバック）
      if (!isUnsafeForStaticPath(t)) {
        tags.add(encodeURIComponent(t));
      }
    })
  );
  return Array.from(tags).map((tag) => ({ tag }));
}

export default async function TagPage({ params }: Props) {
  const { tag } = await params;
  const decoded = decodeURIComponent(tag);
  const articles: Article[] = allArticles.filter((a) =>
    a.tags.some((t) => t.toLowerCase() === decoded.toLowerCase())
  );

  if (articles.length === 0) notFound();

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
      <div className="mb-7">
        <div className="flex items-center gap-3 flex-wrap">
          <h1 className="text-2xl font-extrabold text-gray-900 dark:text-white">
            <span className="text-blue-600 dark:text-blue-400">#</span>
            {decoded}
          </h1>
          <span className="text-sm font-semibold bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400 px-3 py-1 rounded-full">
            {articles.length}件
          </span>
        </div>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          「{decoded}」に関する最新AIニュース
        </p>
      </div>

      {/* タグ一覧へのリンク */}
      <div className="mb-6">
        <Link
          href="/tags"
          className="text-xs text-blue-600 dark:text-blue-400 hover:underline"
        >
          すべてのタグを見る →
        </Link>
      </div>

      {/* 記事グリッド */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {articles.map((article) => (
          <Link
            key={article.id}
            href={`/articles/${article.id}`}
            className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group block"
          >
            {/* サムネイル画像 */}
            <div className="relative w-full h-40 overflow-hidden">
              <Image
                src={getArticleImageUrl(article)}
                alt={article.title}
                fill
                className="object-cover group-hover:scale-[1.04] transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 320px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>

            {/* カード本文 */}
            <div className="p-4">
              {/* タグバッジ */}
              <div className="flex flex-wrap gap-1.5 mb-2">
                {article.tags.slice(0, 3).map((t) => (
                  <span
                    key={t}
                    className={`text-xs px-2 py-0.5 rounded-full ${
                      t.toLowerCase() === decoded.toLowerCase()
                        ? "bg-blue-600 text-white"
                        : "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400"
                    }`}
                  >
                    #{t}
                  </span>
                ))}
              </div>

              {/* タイトル */}
              <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2 mb-2">
                {article.title}
              </p>

              {/* メタ情報 */}
              <div className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500">
                <span>{getRelativeTime(article.publishedAt)}</span>
                <span>·</span>
                <span>{article.source}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* メール登録導線 */}
      <div className="mt-8 max-w-md mx-auto">
        <NewsletterSignup compact />
      </div>

      {/* JSON-LD 構造化データ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: `#${decoded} の記事一覧`,
            description: `「${decoded}」に関するAIニュース記事 ${articles.length}件`,
            url: `https://ai-news-site-wheat.vercel.app/tags/${tag}`,
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

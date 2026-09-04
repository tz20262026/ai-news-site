import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getArticleImageUrl,
  getReadTime,
  getRelativeTime,
  getRelatedArticles,
  getPrimaryDisplayTag,
  parseArticleBody,
  splitBoldSegments,
  allArticles as localArticles,
  type Article,
  type BodyBlock,
} from "@/lib/articles";
import {
  getAllArticles,
  getArticleById as getMicroCMSArticleById,
  adaptMicroCMSArticle,
} from "@/lib/microcms";
import ShareButtons from "@/components/ShareButtons";
import ReadingProgress from "@/components/ReadingProgress";
import NewsletterSignup from "@/components/NewsletterSignup";
import ArticleAffiliateBanner from "@/components/ArticleAffiliateBanner";
import ArticleGuideLinks from "@/components/ArticleGuideLinks";

export const revalidate = 3600;

type Props = { params: Promise<{ id: string }> };

async function fetchAllArticles(): Promise<Article[]> {
  try {
    const remote = await getAllArticles();
    if (remote.length > 0) return remote.map(adaptMicroCMSArticle);
  } catch {
    /* フォールバック */
  }
  return localArticles;
}

async function fetchArticleById(id: string): Promise<Article | undefined> {
  try {
    const remote = await getMicroCMSArticleById(id);
    return adaptMicroCMSArticle(remote);
  } catch {
    /* フォールバック to local */
  }
  return localArticles.find((a) => a.id === id);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const article = await fetchArticleById(id);
  if (!article) return {};
  const imageUrl = getArticleImageUrl(article);
  const canonicalUrl = `https://ai-news-site-wheat.vercel.app/articles/${id}`;
  return {
    title: article.title,
    description: article.summary,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: article.title,
      description: article.summary,
      type: "article",
      url: canonicalUrl,
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt ?? article.publishedAt,
      tags: article.tags,
      images: [{ url: imageUrl, width: 800, height: 420, alt: article.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.summary,
      images: [imageUrl],
    },
  };
}

export async function generateStaticParams() {
  const articles = await fetchAllArticles();
  return articles.map((a) => ({ id: a.id }));
}

export default async function ArticlePage({ params }: Props) {
  const { id } = await params;
  const article = await fetchArticleById(id);
  if (!article) notFound();

  const allArticles = await fetchAllArticles();
  const related = getRelatedArticles(article, allArticles);
  const primaryTag = getPrimaryDisplayTag(article.tags);
  const bodyBlocks = parseArticleBody(article.body);
  const headings = bodyBlocks.filter(
    (b): b is Extract<BodyBlock, { type: "heading" }> => b.type === "heading"
  );
  const canonicalUrl = `https://ai-news-site-wheat.vercel.app/articles/${article.id}`;

  // 見出し＋直後の段落からFAQPage用のQ&Aを自動生成する（生成AIに引用されやすいFAQ構造をニュース記事にも付与）
  const faqItems = bodyBlocks
    .map((block, i) => {
      if (block.type !== "heading") return null;
      const next = bodyBlocks[i + 1];
      if (!next || next.type !== "paragraph") return null;
      const answer = next.lines.join("").slice(0, 200);
      if (!answer) return null;
      return { question: block.text, answer };
    })
    .filter((x): x is { question: string; answer: string } => x !== null);

  return (
    <div className="max-w-2xl mx-auto">
      <ReadingProgress />

      {/* パンくずリスト（SEO・回遊性向上） */}
      <nav aria-label="パンくずリスト" className="mb-6 flex flex-wrap items-center gap-x-1.5 gap-y-1 text-xs text-gray-500 dark:text-gray-300">
        <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors shrink-0">
          ホーム
        </Link>
        {primaryTag && (
          <>
            <span className="text-gray-300 dark:text-gray-300 shrink-0">/</span>
            <Link
              href={`/tags/${encodeURIComponent(primaryTag)}`}
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors shrink-0"
            >
              {primaryTag}
            </Link>
          </>
        )}
        <span className="text-gray-300 dark:text-gray-300 shrink-0">/</span>
        <span className="text-gray-500 dark:text-gray-300 truncate max-w-[60vw] sm:max-w-xs" title={article.title}>
          {article.title}
        </span>
      </nav>

      <article className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm">
        {/* アイキャッチ画像 */}
        <div className="relative w-full h-52 sm:h-72 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={getArticleImageUrl(article)}
            alt={article.title}
            loading="eager"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />
          <div className="absolute bottom-5 left-6 right-6">
            <div className="flex flex-wrap gap-2 mb-2">
              {article.tags.slice(0, 5).map((tag) => (
                <Link
                  key={tag}
                  href={`/tags/${encodeURIComponent(tag)}`}
                  className="text-xs bg-white/20 backdrop-blur-sm text-white px-2.5 py-0.5 rounded-full border border-white/30 hover:bg-white/35 transition-colors"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="p-6 sm:p-8">
          {/* メタ情報 */}
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-gray-500 dark:text-gray-300 mb-3">
            <span className="shrink-0">{getRelativeTime(article.publishedAt)}（{article.publishedAt}）</span>
            {article.updatedAt && article.updatedAt !== article.publishedAt && (
              <>
                <span className="shrink-0">·</span>
                <span className="shrink-0">更新 {article.updatedAt}</span>
              </>
            )}
            <span className="shrink-0">·</span>
            <a
              href={article.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors shrink-0"
            >
              {article.source} ↗
            </a>
            <span className="shrink-0">·</span>
            <span className="shrink-0">約{getReadTime(article.body)}分で読める</span>
          </div>

          {/* タイトル */}
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white leading-tight mb-5">
            {article.title}
          </h1>

          {/* リード文 */}
          <div className="bg-blue-50 dark:bg-blue-950/40 border-l-4 border-blue-400 dark:border-blue-500 rounded-r-xl px-5 py-4 mb-7 text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
            {article.summary}
          </div>

          {/* 目次（見出しが2つ以上ある長文記事のみ表示） */}
          {headings.length >= 2 && (
            <nav aria-label="目次" className="mb-7 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40 px-5 py-4">
              <p className="text-xs font-bold text-gray-500 dark:text-gray-300 mb-2.5 flex items-center gap-1.5">
                <span>📑</span> 目次
              </p>
              <ol className="space-y-1.5">
                {headings.map((h, i) => (
                  <li key={h.id} className="text-sm">
                    <a
                      href={`#${h.id}`}
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      {i + 1}. {h.text}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          )}

          {/* 本文 */}
          <div className="article-body text-gray-800 dark:text-gray-200 text-sm sm:text-base leading-[1.9] space-y-5">
            {bodyBlocks.map((block, i) =>
              block.type === "heading" ? (
                <h2
                  key={i}
                  id={block.id}
                  className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white pt-2 scroll-mt-24"
                >
                  {block.text}
                </h2>
              ) : (
                <p key={i}>
                  {block.lines.map((line, j, arr) => (
                    <span key={j}>
                      {splitBoldSegments(line).map((seg, k) =>
                        seg.bold ? (
                          <strong key={k} className="font-bold text-gray-900 dark:text-white">
                            {seg.text}
                          </strong>
                        ) : (
                          <span key={k}>{seg.text}</span>
                        )
                      )}
                      {j < arr.length - 1 && <br />}
                    </span>
                  ))}
                </p>
              )
            )}
          </div>

          {/* 関連ガイドページへの内部リンク */}
          <ArticleGuideLinks tags={article.tags} />

          {/* 記事内アフィリエイトバナー */}
          <ArticleAffiliateBanner tags={article.tags} />

          {/* シェアボタン */}
          <ShareButtons
            title={article.title}
            url={canonicalUrl}
          />

          {/* フッター */}
          <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700/60 flex items-center justify-between">
            <span className="text-xs text-gray-500 dark:text-gray-300">情報元: {article.source}</span>
            <a
              href={article.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-blue-600 dark:text-blue-400 hover:underline"
            >
              原文を読む ↗
            </a>
          </div>
        </div>
      </article>

      {/* 関連記事（こちらもおすすめ・回遊率アップ用） */}
      {related.length > 0 && (
        <div className="mt-10">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-1.5">
            <span>🔥</span> こちらもおすすめ
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            {related.map((r) => {
              const relTag = getPrimaryDisplayTag(r.tags);
              return (
                <Link
                  key={r.id}
                  href={`/articles/${r.id}`}
                  className="block bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg dark:hover:shadow-gray-900/50 hover:-translate-y-0.5 transition-all duration-300 group"
                >
                  <div className="relative w-full h-24 sm:h-32 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={getArticleImageUrl(r)}
                      alt={`${r.title}のサムネイル画像`}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
                    {relTag && (
                      <span className="absolute top-1.5 left-1.5 text-[10px] bg-white/90 dark:bg-gray-900/90 text-blue-600 dark:text-blue-400 px-1.5 py-0.5 rounded-full font-medium">
                        #{relTag}
                      </span>
                    )}
                  </div>
                  <div className="p-2.5 sm:p-3">
                    <div className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-300 mb-1">
                      {getRelativeTime(r.publishedAt)} · {getReadTime(r.body)}分
                    </div>
                    <p className="text-xs font-semibold text-gray-900 dark:text-gray-100 leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                      {r.title}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}

      {/* ニュースレター登録（関連記事の後） */}
      <div className="mt-10">
        <NewsletterSignup />
      </div>

      {/* JSON-LD 構造化データ（パンくずリスト・SEO） */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "ホーム",
                item: "https://ai-news-site-wheat.vercel.app",
              },
              ...(primaryTag
                ? [
                    {
                      "@type": "ListItem",
                      position: 2,
                      name: primaryTag,
                      item: `https://ai-news-site-wheat.vercel.app/tags/${encodeURIComponent(primaryTag)}`,
                    },
                  ]
                : []),
              {
                "@type": "ListItem",
                position: primaryTag ? 3 : 2,
                name: article.title,
                item: canonicalUrl,
              },
            ],
          }),
        }}
      />

      {/* JSON-LD 構造化データ（SEO） */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            headline: article.title,
            description: article.summary,
            datePublished: article.publishedAt,
            dateModified: article.updatedAt ?? article.publishedAt,
            inLanguage: "ja",
            isAccessibleForFree: true,
            url: canonicalUrl,
            image: {
              "@type": "ImageObject",
              url: getArticleImageUrl(article),
              width: 800,
              height: 420,
            },
            author: {
              "@type": "Organization",
              name: "AI News Japan",
              url: "https://ai-news-site-wheat.vercel.app",
            },
            publisher: {
              "@type": "Organization",
              name: "AI News Japan",
              url: "https://ai-news-site-wheat.vercel.app",
              logo: {
                "@type": "ImageObject",
                url: "https://ai-news-site-wheat.vercel.app/opengraph-image",
                width: 1200,
                height: 630,
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": canonicalUrl,
            },
            isPartOf: { "@id": "https://ai-news-site-wheat.vercel.app/#website" },
            ...(primaryTag ? { articleSection: primaryTag } : {}),
            wordCount: article.body.replace(/\s/g, "").length,
            keywords: article.tags.join(", "),
          }),
        }}
      />

      {/* JSON-LD 構造化データ（FAQPage・生成AIの引用対策） */}
      {faqItems.length >= 2 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqItems.map((f) => ({
                "@type": "Question",
                name: f.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: f.answer,
                },
              })),
            }),
          }}
        />
      )}

      <div className="mt-6 text-center">
        <Link
          href="/"
          className="inline-block text-sm text-gray-500 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          ← 記事一覧に戻る
        </Link>
      </div>
    </div>
  );
}

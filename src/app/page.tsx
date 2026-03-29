import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ArticleList from "@/components/ArticleList";
import { getArticleImageUrl } from "@/lib/articles";

// microCMS からデータを取得する（ない場合はローカルデータにフォールバック）
import { getAllArticles, adaptMicroCMSArticle } from "@/lib/microcms";
import { allArticles as localArticles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "AI News Japan — 海外AIツール・最新ニュースを日本語で",
  description:
    "TechCrunch・VentureBeat・Product Huntなど海外100メディアから最新のAIツール・ニュースを毎日日本語でお届けします。",
  openGraph: {
    title: "AI News Japan",
    description: "海外AIツール・最新ニュースを日本語で毎日お届け",
    type: "website",
  },
};

// 毎時キャッシュを再生成（ISR）
export const revalidate = 3600;

async function fetchArticles() {
  try {
    const remote = await getAllArticles();
    if (remote.length > 0) return remote.map(adaptMicroCMSArticle);
  } catch (e) {
    console.warn("[page] microCMS 取得失敗、ローカルデータを使用:", e);
  }
  return localArticles;
}

export default async function Home() {
  const articles = await fetchArticles();
  const latestDate = articles.map((a) => a.publishedAt).sort().at(-1) ?? "";
  const todayArticles = articles.filter((a) => a.publishedAt === latestDate).slice(0, 3);

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">最新のAIニュース</h1>
        <div className="flex items-center gap-3 mt-1">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            海外から厳選した {articles.length} 件の記事
            {latestDate && (
              <span className="ml-2 text-gray-400 dark:text-gray-500">
                更新：{latestDate.replace(/-/g, "/").replace(/\/0(\d)/g, "/$1")}
              </span>
            )}
          </p>
        </div>
      </div>

      {/* 今日の注目セクション */}
      {todayArticles.length > 0 && (
        <div className="mb-8 p-4 bg-gradient-to-br from-blue-50 to-indigo-50/60 dark:from-blue-950/30 dark:to-indigo-950/20 rounded-2xl border border-blue-100/80 dark:border-blue-900/60">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-base">🔥</span>
            <h2 className="text-sm font-bold text-blue-700 dark:text-blue-400">今日の注目記事</h2>
            <span className="ml-auto text-xs text-blue-500/70 dark:text-blue-600 font-medium">{latestDate}</span>
          </div>
          <div className="flex flex-col gap-2">
            {todayArticles.map((a) => (
              <Link
                key={a.id}
                href={`/articles/${a.id}`}
                className="flex items-center gap-3 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl p-3 hover:shadow-md dark:hover:shadow-gray-900/40 hover:bg-white dark:hover:bg-gray-900 transition-all group"
              >
                <div className="relative w-14 h-14 rounded-lg overflow-hidden shrink-0 shadow-sm">
                  <Image
                    src={getArticleImageUrl(a)}
                    alt={a.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="56px"
                  />
                </div>
                <p className="text-xs font-semibold text-gray-800 dark:text-gray-200 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {a.title}
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}

      <ArticleList articles={articles} />
    </div>
  );
}

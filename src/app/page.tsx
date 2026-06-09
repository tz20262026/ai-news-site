import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ArticleList from "@/components/ArticleList";
import AIIntelligenceUnit from "@/components/AIIntelligenceUnit";
import SidebarRanking from "@/components/SidebarRanking";
import NewsletterSignup from "@/components/NewsletterSignup";
import AdUnit from "@/components/AdUnit";
import { getArticleImageUrl } from "@/lib/articles";

import { getAllArticles, adaptMicroCMSArticle } from "@/lib/microcms";
import { allArticles as localArticles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "AI News Japan — AIが自律的に精査した最新AIニュース",
  description:
    "AIが自律的に情報を精査し、最新の最適解を提示する次世代メディア。TechCrunch・VentureBeat・Product Huntなど海外100メディアから最新のAIツール・ニュースを毎日日本語でお届けします。",
  openGraph: {
    title: "AI News Japan",
    description: "AIが自律的に精査した最新AIニュースを日本語で毎日お届け",
    type: "website",
    url: "https://ai-news-site-wheat.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI News Japan",
    description: "AIが自律的に精査した最新AIニュースを日本語で毎日お届け",
  },
};

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
      {/* ヒーローバナー */}
      <div className="mb-7 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 via-blue-950 to-indigo-950 border border-blue-900/40 shadow-lg relative">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.06)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="relative px-5 py-6 sm:px-8 sm:py-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="flex items-center gap-1.5 text-xs font-bold text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse inline-block" />
              毎日自動更新
            </span>
            {latestDate && (
              <span className="text-xs text-blue-300/60">
                最終更新：{latestDate.replace(/-/g, "/").replace(/\/0(\d)/g, "/$1")}
              </span>
            )}
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug mb-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300">AI</span>
            {" "}の最前線を、日本語で。
          </h1>
          <p className="text-sm text-blue-200/70 leading-relaxed max-w-lg">
            TechCrunch・VentureBeat など海外100媒体から毎日自動収集。
            AIが自律的に精査した{" "}
            <strong className="text-white font-semibold">{articles.length}件</strong>
            {" "}の記事をお届け。
          </p>
        </div>
      </div>

      {/* 今日の注目セクション */}
      {todayArticles.length > 0 && (
        <div className="mb-7 p-4 bg-gradient-to-br from-blue-50 to-indigo-50/60 dark:from-blue-950/30 dark:to-indigo-950/20 rounded-2xl border border-blue-100/80 dark:border-blue-900/60">
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

      {/* スマホ: AI判定ユニット */}
      <div className="lg:hidden mb-6">
        <AIIntelligenceUnit />
      </div>

      {/* 2カラムグリッド（PC: 記事＋サイドバー） */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8 items-start">
        {/* メイン: 記事一覧 */}
        <div>
          <ArticleList articles={articles} />
        </div>

        {/* サイドバー（PCのみ sticky） */}
        <aside className="hidden lg:flex flex-col gap-4 sticky top-[4.5rem] self-start">
          <AIIntelligenceUnit />
          <SidebarRanking articles={articles} />
          <NewsletterSignup compact />
          <AdUnit slot="2345678901" />
        </aside>
      </div>
    </div>
  );
}

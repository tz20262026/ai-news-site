import AffiliateSectionAiNews from "@/components/AffiliateSectionAiNews";
import MoshimoSectionAiNews from "@/components/MoshimoSectionAiNews";
import VcSectionAiNews from "@/components/VcSectionAiNews";
import AtSectionAiNews from "@/components/AtSectionAiNews";
import RakutenAiNewsPicks from "@/components/RakutenAiNewsPicks";
import SidebarAffiliate from "@/components/SidebarAffiliate";
import type { Metadata } from "next";
import Link from "next/link";
import ArticleList from "@/components/ArticleList";
import AIIntelligenceUnit from "@/components/AIIntelligenceUnit";
import SidebarRanking from "@/components/SidebarRanking";
import NewsletterSignup from "@/components/NewsletterSignup";
import AdUnit from "@/components/AdUnit";
import { getArticleImageUrl, getReadTime } from "@/lib/articles";

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
    images: [
      {
        url: "https://ai-news-site-wheat.vercel.app/opengraph-image",
        width: 1200,
        height: 630,
        alt: "AI News Japan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI News Japan",
    description: "AIが自律的に精査した最新AIニュースを日本語で毎日お届け",
    images: ["https://ai-news-site-wheat.vercel.app/opengraph-image"],
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
  const rawArticles = await fetchArticles();
  // 2026-08-18 SEO監査で発見：一覧表示には不要な body（記事本文全文）を
  // 451記事分そのままクライアントに渡していたため、ホームページのHTMLが
  // 約2.2MBまで肥大化していた（Core Web Vitals・クロール負荷に悪影響）。
  // 読了時間だけ事前計算し、body は空にしてから渡すことでペイロードを大幅削減する。
  const articles = rawArticles.map((a) => ({ ...a, body: "", readTime: getReadTime(a.body) }));
  const latestDate = articles.map((a) => a.publishedAt).sort().at(-1) ?? "";
  const todayArticles = articles.filter((a) => a.publishedAt === latestDate).slice(0, 3);

  return (
    <div>
      {/* ヒーローバナー */}
      <div className="mb-7 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 via-blue-950 to-indigo-950 border border-blue-900/40 shadow-lg relative">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.06)_1px,transparent_1px)] bg-[size:40px_40px]" />
        {/* 動画（スマホ）：文字と重ならないよう、見出しの上に独立したブロックとして置く。
            PCでは下の右カラムに表示するため、ここでは非表示にする。 */}
        <div className="sm:hidden relative">
          <video
            className="hero-video block w-full h-auto"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/hero-poster.jpg"
            aria-hidden="true"
          >
            <source src="/hero.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="relative px-5 py-6 sm:px-8 sm:py-8 sm:flex sm:items-center sm:gap-8">
          {/* 左：テキスト */}
          <div className="sm:flex-1 sm:min-w-0">
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
          <p className="text-sm text-blue-100/90 leading-relaxed max-w-lg drop-shadow">
            TechCrunch・VentureBeat など海外100媒体から毎日自動収集。
            AIが自律的に精査した{" "}
            <strong className="text-white font-semibold">{articles.length}件</strong>
            {" "}の記事をお届け。
          </p>
          <div className="flex flex-wrap gap-3 mt-4">
            <Link
              href="/ai-tools-guide"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-xl transition-colors shadow-sm"
            >
              🔧 無料AIツール15選
            </Link>
            <Link
              href="/ai-fukugyou"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-300 hover:text-white border border-blue-600/60 hover:border-blue-400 px-4 py-2 rounded-xl transition-colors"
            >
              💼 AI副業ガイド
            </Link>
          </div>
          </div>

          {/* 右：動画（PCのみ）。文字と重ならないよう独立したカラムに置く */}
          <div className="hidden sm:block sm:w-64 md:w-80 lg:w-96 sm:flex-shrink-0">
            <div className="relative rounded-xl overflow-hidden border border-blue-800/40 shadow-lg">
              <video
                className="hero-video block w-full h-auto"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster="/hero-poster.jpg"
                aria-hidden="true"
              >
                <source src="/hero.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>

      {/* ガイドセクション */}
      <div className="mb-7 grid grid-cols-2 sm:grid-cols-4 gap-3">
        <Link
          href="/ai-tool-diagnosis"
          className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-br from-rose-950/60 to-rose-900/30 border border-rose-800/60 hover:border-rose-500 transition-all group"
        >
          <span className="text-2xl flex-shrink-0">🎯</span>
          <div>
            <p className="text-sm font-bold text-white group-hover:text-rose-300 transition-colors">AIツール診断</p>
            <p className="text-xs text-rose-300/70 mt-0.5">7つの質問で最適な1本がわかる</p>
          </div>
        </Link>
        <Link
          href="/ai-beginner-guide"
          className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-br from-blue-950/60 to-blue-900/30 border border-blue-800/60 hover:border-blue-500 transition-all group"
        >
          <span className="text-2xl flex-shrink-0">🚀</span>
          <div>
            <p className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors">AI初心者完全ガイド</p>
            <p className="text-xs text-blue-300/70 mt-0.5">ChatGPT・Gemini・Claude入門</p>
          </div>
        </Link>
        <Link
          href="/chatgpt-guide"
          className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-br from-emerald-950/60 to-emerald-900/30 border border-emerald-800/60 hover:border-emerald-500 transition-all group"
        >
          <span className="text-2xl flex-shrink-0">🤖</span>
          <div>
            <p className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">ChatGPT使い方ガイド</p>
            <p className="text-xs text-emerald-300/70 mt-0.5">プロンプト・業務活用・無料vs有料</p>
          </div>
        </Link>
        <Link
          href="/ai-business-guide"
          className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-br from-violet-950/60 to-violet-900/30 border border-violet-800/60 hover:border-violet-500 transition-all group"
        >
          <span className="text-2xl flex-shrink-0">💼</span>
          <div>
            <p className="text-sm font-bold text-white group-hover:text-violet-300 transition-colors">AI業務活用ガイド</p>
            <p className="text-xs text-violet-300/70 mt-0.5">部署別事例・導入ステップ・ROI</p>
          </div>
        </Link>
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
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={getArticleImageUrl(a)}
                    alt={a.title}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
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

      {/* 2カラムグリッド（PC: 記事＋サイドバー） */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8 items-start">
        {/* メイン: 記事一覧 */}
        <div>
          <ArticleList articles={articles} />
          {/* スマホ用ニュースレター（PC非表示） */}
          <div className="mt-8 lg:hidden">
            <NewsletterSignup />
          </div>
        </div>

        {/* サイドバー（PCのみ sticky） */}
        <aside className="hidden lg:flex flex-col gap-4 sticky top-[4.5rem] self-start">
          <AIIntelligenceUnit />
          <SidebarRanking articles={articles} />
          <SidebarAffiliate />
          <NewsletterSignup compact />
          <AdUnit slot="2345678901" />
        </aside>
      </div>
      <AffiliateSectionAiNews />
      {/* もしもアフィリエイト枠（2026-07-13追加） */}
      {/* トップは注目案件＋上位6件に絞る。全13件はガイドページ側で表示 */}
      <MoshimoSectionAiNews limit={6} />
      {/* バリューコマース枠（2026-07-14追加）。もしも／A8とは独立した別セクション */}
      <VcSectionAiNews limit={6} />
      {/* アクセストレード枠（2026-07-14追加）。他ASPとは独立した別セクション */}
      <AtSectionAiNews />
      {/* 楽天アフィリエイト枠（2026-08-19追加）。A8/もしも/VC/ATとは独立した5つ目の収益源 */}
      <RakutenAiNewsPicks />
    </div>
  );
}

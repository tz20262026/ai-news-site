"use client";

import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import type { Article } from "@/lib/articles";
import { getArticleImageUrl, getReadTime, getRelativeTime, isNew } from "@/lib/articles";
import {
  Zap, Palette, Brain, TrendingUp, Cpu, Scale, Code2, Lightbulb, LayoutGrid,
} from "lucide-react";
// ── カテゴリー定義 ──────────────────────────────────────────
const CATEGORIES = [
  {
    id: "latest",
    label: "最新ニュース",
    icon: Zap,
    keywords: [],
  },
  {
    id: "generative",
    label: "画像・動画生成",
    icon: Palette,
    keywords: ["画像生成", "動画生成", "Midjourney", "Stable Diffusion", "DALL-E", "Imagen", "Sora", "image", "video generation", "generative"],
  },
  {
    id: "llm",
    label: "言語モデル/LLM",
    icon: Brain,
    keywords: ["LLM", "OpenAI", "Anthropic", "Google", "Meta", "Microsoft", "Claude", "GPT", "Gemini", "言語モデル", "ChatGPT", "Mistral", "llm", "model"],
  },
  {
    id: "business",
    label: "ビジネス・Startup",
    icon: TrendingUp,
    keywords: ["Startups", "Business", "startup", "funding", "raises", "ビジネス", "企業", "投資", "スタートアップ"],
  },
  {
    id: "devices",
    label: "デバイス・ロボ",
    icon: Cpu,
    keywords: ["Robot", "Device", "Hardware", "IoT", "ロボット", "デバイス", "ハードウェア", "chip", "Nvidia", "NVIDIA"],
  },
  {
    id: "ethics",
    label: "エシックス・規制",
    icon: Scale,
    keywords: ["Ethics", "Regulation", "Policy", "規制", "倫理", "法律", "安全", "safety", "governance", "法"],
  },
  {
    id: "dev",
    label: "開発者/プログラミング",
    icon: Code2,
    keywords: ["Developer", "Programming", "Code", "API", "開発", "プログラミング", "オープンソース", "GitHub", "SDK", "framework"],
  },
  {
    id: "usecase",
    label: "実践・活用事例",
    icon: Lightbulb,
    keywords: ["生産性", "活用", "Use Case", "productivity", "Applications", "ツール", "tool", "workflow", "automation"],
  },
];

// ── タグ表示フィルター（技術的タグを除去）──────────────────
const SKIP_TAG_PATTERN = /^(site|region|provider_name|category|type)\|/i;

function cleanTags(tags: string[]): string[] {
  return tags.filter((t) => !SKIP_TAG_PATTERN.test(t));
}

// ── タグカラー ──────────────────────────────────────────────
const TAG_COLORS: Record<string, string> = {
  OpenAI:         "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400",
  Anthropic:      "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-400",
  Google:         "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400",
  Meta:           "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-400",
  Microsoft:      "bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-400",
  画像生成:       "bg-pink-100 text-pink-700 dark:bg-pink-900/40 dark:text-pink-400",
  動画生成:       "bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-400",
  音声AI:         "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-400",
  LLM:            "bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-400",
  生産性:         "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400",
  オープンソース: "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-400",
};

function tagColor(tag: string) {
  return TAG_COLORS[tag] ?? "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300";
}

// ── カテゴリーマッチ ────────────────────────────────────────
function matchesCategory(article: Article, categoryId: string): boolean {
  const cat = CATEGORIES.find((c) => c.id === categoryId);
  if (!cat || cat.keywords.length === 0) return true; // "latest" = 全件
  const allText = [article.title, article.summary, ...article.tags].join(" ").toLowerCase();
  return cat.keywords.some((kw) => allText.includes(kw.toLowerCase()));
}

// ── インフィード比較ミニカード ──────────────────────────────────────
const INITIAL_COUNT = 20;

export default function ArticleList({ articles }: { articles: Article[] }) {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("latest");
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  // フィルター変更時に件数リセット
  useEffect(() => {
    setVisibleCount(INITIAL_COUNT);
  }, [search, selectedCategory]);

  const filtered = useMemo(() => {
    const normalize = (str: string) =>
      str.toLowerCase().replace(/[\u3041-\u3096]/g, (ch) =>
        String.fromCharCode(ch.charCodeAt(0) + 0x60)
      );
    const q = normalize(search);

    return articles.filter((a) => {
      const matchSearch =
        !search ||
        normalize(a.title).includes(q) ||
        normalize(a.summary).includes(q) ||
        a.tags.some((t) => normalize(t).includes(q));
      const matchCat = matchesCategory(a, selectedCategory);
      return matchSearch && matchCat;
    });
  }, [articles, search, selectedCategory]);

  const visible = filtered.slice(0, visibleCount);
  const [featured, ...rest] = visible;

  return (
    <div>
      {/* 検索ボックス */}
      <div className="mb-4">
        <div className="relative">
          <svg
            className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 dark:text-gray-300 pointer-events-none"
            fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
          </svg>
          <input
            type="text"
            placeholder="キーワードで検索..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500 bg-white dark:bg-gray-800/80 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 transition-colors"
          />
        </div>
      </div>

      {/* カテゴリータブ（2段グリッド） */}
      <div className="mb-6">
        {/* すべて（全幅） */}
        <button
          onClick={() => setSelectedCategory("latest")}
          className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-medium text-sm mb-2 transition-colors ${
            selectedCategory === "latest"
              ? "bg-blue-600 text-white shadow-sm"
              : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
          }`}
        >
          <LayoutGrid className="w-4 h-4" />
          すべて
          <span className={`text-xs px-1.5 py-0.5 rounded-full font-bold ${selectedCategory === "latest" ? "bg-white/20 text-white" : "bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400"}`}>
            {articles.length}
          </span>
        </button>

        {/* 8カテゴリー（スマホ2列・PC4列） */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {CATEGORIES.filter((c) => c.id !== "latest").map(({ id, label, icon: Icon }) => {
            const catCount = articles.filter((a) => matchesCategory(a, id)).length;
            return (
              <button
                key={id}
                onClick={() => setSelectedCategory(id === selectedCategory ? "latest" : id)}
                className={`flex items-center justify-center gap-2 py-3 px-2 rounded-xl font-medium transition-colors ${
                  selectedCategory === id
                    ? "bg-blue-600 text-white shadow-sm"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                <Icon className="w-4 h-4 shrink-0" />
                <span className="text-xs leading-tight text-center">{label}</span>
                <span className={`text-[10px] font-bold px-1.5 rounded-full shrink-0 ${selectedCategory === id ? "bg-white/20 text-white" : "bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-300"}`}>
                  {catCount}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 検索結果なし */}
      {filtered.length === 0 && (
        <div className="text-center py-16 text-gray-500 dark:text-gray-300">
          <p className="text-4xl mb-3">🔍</p>
          <p>{search ? `「${search}」に一致する記事が見つかりませんでした` : "このカテゴリーの記事はまだありません"}</p>
        </div>
      )}

      {/* 注目記事（一番上の大きいカード） */}
      {featured && (
        <Link
          href={`/articles/${featured.id}`}
          className="article-card block bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden mb-6 hover:shadow-xl dark:hover:shadow-gray-900/50 transition-all duration-300 group"
        >
          <div className="relative w-full h-56 sm:h-72 overflow-hidden">
            {/* Vercel画像最適化の無料枠上限のため next/image ではなく素の img を使用（402回避） */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={getArticleImageUrl(featured)}
              alt={featured.title}
              loading="eager"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover article-image group-hover:scale-[1.03] transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-5 right-5">
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <span className="text-xs font-bold bg-blue-500 text-white px-2 py-0.5 rounded shrink-0">注目</span>
                {isNew(featured.publishedAt) && (
                  <span className="text-xs font-bold bg-red-500 text-white px-2 py-0.5 rounded animate-pulse shrink-0">NEW</span>
                )}
                <span className="text-xs text-white/80 min-w-0 truncate">
                  {getRelativeTime(featured.publishedAt)} · {featured.source}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white leading-snug group-hover:text-blue-200 transition-colors line-clamp-2">
                {featured.title}
              </h2>
            </div>
          </div>
          <div className="p-5">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm line-clamp-2">
              {featured.summary}
            </p>
            <div className="mt-3 flex flex-wrap gap-2 items-center justify-between">
              <div className="flex flex-wrap gap-1.5">
                {cleanTags(featured.tags).slice(0, 4).map((tag) => (
                  <Link
                    key={tag}
                    href={`/tags/${encodeURIComponent(tag)}`}
                    onClick={(e) => e.stopPropagation()}
                    className={`text-xs px-2 py-0.5 rounded-full font-medium cursor-pointer hover:opacity-80 transition-opacity ${tagColor(tag)}`}
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
              <span className="text-xs text-gray-500 dark:text-gray-300">{getReadTime(featured.body)}分で読める</span>
            </div>
          </div>
        </Link>
      )}

      {/* 記事グリッド */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5" id="article-grid">
        {rest.map((article, i) => (
          <React.Fragment key={article.id}>
            <Link
              href={`/articles/${article.id}`}
              className="article-card block bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg dark:hover:shadow-gray-900/50 hover:-translate-y-0.5 transition-all duration-300 group"
              style={{ animationDelay: `${i * 40}ms` }}
            >
              <div className="relative w-full h-40 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={getArticleImageUrl(article)}
                  alt={article.title}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover article-image group-hover:scale-[1.04] transition-transform duration-500"
                />
                {isNew(article.publishedAt) && (
                  <span className="absolute top-2 right-2 text-xs font-bold bg-red-500 text-white px-2 py-0.5 rounded animate-pulse z-10">
                    NEW
                  </span>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4">
                  <div className="flex flex-wrap gap-1">
                    {cleanTags(article.tags).slice(0, 2).map((tag) => (
                      <Link
                        key={tag}
                        href={`/tags/${encodeURIComponent(tag)}`}
                        onClick={(e) => e.stopPropagation()}
                        className="text-xs bg-white/20 backdrop-blur-sm text-white px-2 py-0.5 rounded-full font-medium border border-white/30 hover:bg-white/30 transition-colors cursor-pointer"
                      >
                        #{tag}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-300 mb-1.5 gap-2">
                  <span className="min-w-0 truncate">{getRelativeTime(article.publishedAt)} · {article.source}</span>
                  <span className="shrink-0">{getReadTime(article.body)}分</span>
                </div>
                <h2 className="text-sm font-semibold text-gray-900 dark:text-gray-100 leading-snug mb-1.5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                  {article.title}
                </h2>
                <p className="text-xs text-gray-500 dark:text-gray-300 leading-relaxed line-clamp-2">
                  {article.summary}
                </p>
              </div>
            </Link>
          </React.Fragment>
        ))}
      </div>

      {/* もっと読むボタン */}
      {filtered.length > visibleCount && (
        <button
          onClick={() => setVisibleCount((v) => v + 20)}
          className="w-full mt-6 py-3.5 rounded-2xl border-2 border-blue-200 dark:border-blue-800 text-sm font-bold text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/40 transition-colors"
        >
          さらに20件読む
          <span className="ml-2 text-xs font-normal text-gray-500 dark:text-gray-300">
            （残り {filtered.length - visibleCount} 件）
          </span>
        </button>
      )}
    </div>
  );
}

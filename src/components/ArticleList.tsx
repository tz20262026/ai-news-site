"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Article } from "@/lib/articles";
import { getArticleImageUrl, getReadTime, getRelativeTime, isNew } from "@/lib/articles";
import {
  Zap, Palette, Brain, TrendingUp, Cpu, Scale, Code2, Lightbulb, LayoutGrid,
} from "lucide-react";
import marketData from "@/data/ai_market_intelligence.json";

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
  return TAG_COLORS[tag] ?? "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400";
}

// ── カテゴリーマッチ ────────────────────────────────────────
function matchesCategory(article: Article, categoryId: string): boolean {
  const cat = CATEGORIES.find((c) => c.id === categoryId);
  if (!cat || cat.keywords.length === 0) return true; // "latest" = 全件
  const allText = [article.title, article.summary, ...article.tags].join(" ").toLowerCase();
  return cat.keywords.some((kw) => allText.includes(kw.toLowerCase()));
}

// ── インフィード比較ミニカード ──────────────────────────────────────
function AIComparisonMiniCard() {
  const winners = marketData.segments.map((s) => ({
    label: s.label,
    name: s.winner.name,
    badge: s.tools.find((t) => t.badge === "AI's Choice"),
  }));
  const updatedAt = marketData.updatedAt;
  const date = new Date(updatedAt);
  const dateLabel = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;

  return (
    <div className="sm:col-span-2 rounded-xl border border-blue-200/60 dark:border-blue-800/40 overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 p-px">
      <div className="rounded-xl bg-white/95 dark:bg-gray-900/95 p-4">
        <div className="flex items-center gap-2 mb-3">
          <span className="flex items-center gap-1 text-xs font-bold text-blue-600 dark:text-blue-400">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse inline-block" />
            AIによる最新ツール判定
          </span>
          <span className="text-xs text-gray-400 dark:text-gray-500">{dateLabel}</span>
          <span className="ml-auto text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 px-2 py-0.5 rounded-full">
            今月の正解セット
          </span>
        </div>
        <div className="flex gap-2 flex-wrap">
          {winners.map((w) => (
            <div
              key={w.label}
              className="flex-1 min-w-[140px] bg-blue-50/80 dark:bg-blue-950/30 rounded-lg p-2.5 border border-blue-100 dark:border-blue-900/50"
            >
              <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 block mb-0.5">
                {w.label}
              </span>
              <span className="text-sm font-semibold text-gray-900 dark:text-white block">
                {w.name}
              </span>
              {w.badge && (
                <span className="text-[10px] text-gray-500 dark:text-gray-400 mt-0.5 block line-clamp-1">
                  {w.badge.newFeature}
                </span>
              )}
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-400 dark:text-gray-500 mt-3">
          人間が選んだ古い情報ではなく、AIが自律的に精査した最新の最適解
        </p>
      </div>
    </div>
  );
}

export default function ArticleList({ articles }: { articles: Article[] }) {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("latest");

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

  const [featured, ...rest] = filtered;

  return (
    <div>
      {/* 検索ボックス */}
      <div className="mb-4">
        <div className="relative">
          <svg
            className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-500 pointer-events-none"
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
              : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
          }`}
        >
          <LayoutGrid className="w-4 h-4" />
          すべて ({articles.length})
        </button>

        {/* 8カテゴリー（4列×2段） */}
        <div className="grid grid-cols-4 gap-2">
          {CATEGORIES.filter((c) => c.id !== "latest").map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setSelectedCategory(id === selectedCategory ? "latest" : id)}
              className={`flex flex-col items-center justify-center gap-1 py-2.5 px-1 rounded-xl font-medium transition-colors ${
                selectedCategory === id
                  ? "bg-blue-600 text-white shadow-sm"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              <Icon className="w-4 h-4 shrink-0" />
              <span className="text-[10px] leading-tight text-center">{label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* 検索結果なし */}
      {filtered.length === 0 && (
        <div className="text-center py-16 text-gray-400 dark:text-gray-500">
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
            <Image
              src={getArticleImageUrl(featured)}
              alt={featured.title}
              fill
              className="object-cover article-image group-hover:scale-[1.03] transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-5 right-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold bg-blue-500 text-white px-2 py-0.5 rounded">注目</span>
                {isNew(featured.publishedAt) && (
                  <span className="text-xs font-bold bg-red-500 text-white px-2 py-0.5 rounded animate-pulse">NEW</span>
                )}
                <span className="text-xs text-white/80">
                  {getRelativeTime(featured.publishedAt)} · {featured.source}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white leading-snug group-hover:text-blue-200 transition-colors line-clamp-2">
                {featured.title}
              </h2>
            </div>
          </div>
          <div className="p-5">
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm line-clamp-2">
              {featured.summary}
            </p>
            <div className="mt-3 flex flex-wrap gap-2 items-center justify-between">
              <div className="flex flex-wrap gap-1.5">
                {cleanTags(featured.tags).slice(0, 4).map((tag) => (
                  <span key={tag} className={`text-xs px-2 py-0.5 rounded-full font-medium ${tagColor(tag)}`}>
                    {tag}
                  </span>
                ))}
              </div>
              <span className="text-xs text-gray-400 dark:text-gray-500">{getReadTime(featured.body)}分で読める</span>
            </div>
          </div>
        </Link>
      )}

      {/* 記事グリッド */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {rest.map((article, i) => (
          <React.Fragment key={article.id}>
            <Link
              href={`/articles/${article.id}`}
              className="article-card block bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg dark:hover:shadow-gray-900/50 hover:-translate-y-0.5 transition-all duration-300 group"
              style={{ animationDelay: `${i * 40}ms` }}
            >
              <div className="relative w-full h-40 overflow-hidden">
                <Image
                  src={getArticleImageUrl(article)}
                  alt={article.title}
                  fill
                  className="object-cover article-image group-hover:scale-[1.04] transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
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
                      <span
                        key={tag}
                        className="text-xs bg-white/20 backdrop-blur-sm text-white px-2 py-0.5 rounded-full font-medium border border-white/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between text-xs text-gray-400 dark:text-gray-500 mb-1.5">
                  <span>{getRelativeTime(article.publishedAt)} · {article.source}</span>
                  <span>{getReadTime(article.body)}分</span>
                </div>
                <h2 className="text-sm font-semibold text-gray-900 dark:text-gray-100 leading-snug mb-1.5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                  {article.title}
                </h2>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-2">
                  {article.summary}
                </p>
              </div>
            </Link>
            {/* 6件ごとにインフィード比較カードを挿入 */}
            {(i + 1) % 6 === 0 && <AIComparisonMiniCard />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

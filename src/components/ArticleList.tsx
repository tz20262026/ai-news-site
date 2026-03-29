"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
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
    keywords: [], // 全記事対象（最新順）
  },
  {
    id: "generative",
    label: "画像・動画生成AI",
    icon: Palette,
    keywords: ["画像生成", "動画生成", "Midjourney", "Stable Diffusion", "DALL-E", "Imagen", "Sora", "image", "video generation", "generative"],
  },
  {
    id: "llm",
    label: "LLM・言語モデル",
    icon: Brain,
    keywords: ["LLM", "OpenAI", "Anthropic", "Google", "Meta", "Microsoft", "Claude", "GPT", "Gemini", "言語モデル", "ChatGPT", "Mistral", "llm", "model"],
  },
  {
    id: "business",
    label: "スタートアップ・ビジネス",
    icon: TrendingUp,
    keywords: ["Startups", "Business", "startup", "funding", "raises", "ビジネス", "企業", "投資", "スタートアップ"],
  },
  {
    id: "devices",
    label: "デバイス・ロボット",
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
    label: "開発者・プログラミング",
    icon: Code2,
    keywords: ["Developer", "Programming", "Code", "API", "開発", "プログラミング", "オープンソース", "GitHub", "SDK", "framework"],
  },
  {
    id: "usecase",
    label: "活用事例",
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

      {/* カテゴリータブ（横スクロール） */}
      <div className="overflow-x-auto pb-2 mb-6 -mx-1 px-1">
        <div className="flex gap-2 w-max">
          {/* すべて */}
          <button
            onClick={() => setSelectedCategory("latest")}
            className={`flex items-center gap-1.5 text-xs px-3 py-2 rounded-full font-medium whitespace-nowrap transition-colors ${
              selectedCategory === "latest"
                ? "bg-blue-600 text-white shadow-sm"
                : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            すべて ({articles.length})
          </button>

          {/* 8カテゴリー */}
          {CATEGORIES.filter((c) => c.id !== "latest").map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setSelectedCategory(id === selectedCategory ? "latest" : id)}
              className={`flex items-center gap-1.5 text-xs px-3 py-2 rounded-full font-medium whitespace-nowrap transition-colors ${
                selectedCategory === id
                  ? "bg-blue-600 text-white shadow-sm"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* 検索結果なし */}
      {filtered.length === 0 && (
        <div className="text-center py-16 text-gray-400 dark:text-gray-500">
          <p className="text-4xl mb-3">🔍</p>
          <p>{search ? `「${search}」に一致する記事が見つかりませんでした` : "この カテゴリーの記事はまだありません"}</p>
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
          <Link
            key={article.id}
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
        ))}
      </div>
    </div>
  );
}

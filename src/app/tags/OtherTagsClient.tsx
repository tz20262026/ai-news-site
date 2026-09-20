"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type TagCount = { tag: string; count: number };

const INITIAL_COUNT = 60;
const STEP = 60;

/** ひらがな→カタカナ正規化を含む簡易検索用の正規化関数（ArticleList.tsx と同じ方式） */
function normalize(str: string): string {
  return str.toLowerCase().replace(/[ぁ-ゖ]/g, (ch) =>
    String.fromCharCode(ch.charCodeAt(0) + 0x60)
  );
}

export default function OtherTagsClient({ tagCounts }: { tagCounts: TagCount[] }) {
  const [query, setQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const filtered = useMemo(() => {
    if (!query) return tagCounts;
    const q = normalize(query);
    return tagCounts.filter(({ tag }) => normalize(tag).includes(q));
  }, [tagCounts, query]);

  // 検索中は絞り込み結果を全件表示、未検索時のみ段階的に表示件数を制限
  const displayed = query ? filtered : filtered.slice(0, visibleCount);
  const hasMore = !query && visibleCount < filtered.length;

  return (
    <div>
      {/* 検索ボックス */}
      <div className="relative mb-4 max-w-sm">
        <svg
          className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 dark:text-gray-300 pointer-events-none"
          fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
        </svg>
        <input
          type="text"
          placeholder="タグ名で検索..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500 bg-white dark:bg-gray-800/80 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 transition-colors"
        />
      </div>

      {/* タグ一覧 */}
      {displayed.length > 0 ? (
        <div className="flex flex-wrap gap-2">
          {displayed.map(({ tag, count }) => (
            <Link key={tag} href={`/tags/${encodeURIComponent(tag)}`} className="tag-chip">
              #{tag}
              <span className="tag-chip__count">{count}</span>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-sm text-gray-500 dark:text-gray-300 py-4">
          「{query}」に一致するタグが見つかりませんでした
        </p>
      )}

      {/* もっと見る（検索していない時のみ） */}
      {hasMore && (
        <div className="mt-4 text-center">
          <button
            onClick={() => setVisibleCount((c) => c + STEP)}
            className="px-5 py-2 rounded-full text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            もっと見る（残り{filtered.length - visibleCount}件）
          </button>
        </div>
      )}
    </div>
  );
}

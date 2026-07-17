"use client";

import { useState } from "react";
import Link from "next/link";
import AffiliateSectionAiNews from "@/components/AffiliateSectionAiNews";

// ── 型定義 ────────────────────────────────────────────────
// ページ側（page.tsx）でも正規化処理に使うため export する
export interface Tool {
  id: string;
  name: string;
  price: string;
  newFeature: string;
  rating: number;
  badge: string | null;
  summary: string;
}

export interface Winner {
  name: string;
  tagline: string;
}

export interface Segment {
  id: string;
  label: string;
  icon: string;
  winner: Winner;
  reason: string;
  tools: Tool[];
}

interface Props {
  segments: Segment[];
  updatedAt: string;
}

// ── 星評価コンポーネント ──────────────────────────────────
function StarRating({ rating, max = 5 }: { rating: number; max?: number }) {
  return (
    <span className="flex items-center gap-0.5" aria-label={`${rating}/${max}点`}>
      {Array.from({ length: max }).map((_, i) => (
        <span
          key={i}
          className={
            i < rating
              ? "text-yellow-400 text-sm"
              : "text-gray-300 dark:text-gray-300 text-sm"
          }
        >
          ★
        </span>
      ))}
    </span>
  );
}

// ── バッジコンポーネント ──────────────────────────────────
function Badge({ text }: { text: string }) {
  const isAiChoice = text === "AI's Choice";
  return (
    <span
      className={
        isAiChoice
          ? "text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-600 text-white"
          : "text-[10px] font-bold px-2 py-0.5 rounded-full bg-orange-500 text-white"
      }
    >
      {text}
    </span>
  );
}

// ── ツールカードコンポーネント ────────────────────────────
function ToolCard({ tool, isWinner }: { tool: Tool; isWinner: boolean }) {
  const isAiChoice = tool.badge === "AI's Choice";

  if (isAiChoice) {
    // 青い強調カード（AI's Choice）
    return (
      <div className="rounded-2xl border-2 border-blue-500 bg-gradient-to-br from-blue-50 to-indigo-50/60 dark:from-blue-950/40 dark:to-indigo-950/30 dark:border-blue-600 p-4 shadow-sm">
        <div className="flex items-start justify-between gap-2 mb-2">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="text-sm font-bold text-blue-900 dark:text-blue-100">
              {tool.name}
            </h3>
            {tool.badge && <Badge text={tool.badge} />}
            {isWinner && (
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-yellow-400 text-yellow-900">
                👑 今月の最強
              </span>
            )}
          </div>
          <StarRating rating={tool.rating} />
        </div>

        <p className="text-xs text-blue-700 dark:text-blue-300 mb-2 leading-relaxed">
          {tool.summary}
        </p>

        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] font-semibold text-blue-500 dark:text-blue-400 uppercase tracking-wide w-14 shrink-0">
              価格
            </span>
            <span className="text-xs text-blue-800 dark:text-blue-200">
              {tool.price}
            </span>
          </div>
          <div className="flex items-start gap-1.5">
            <span className="text-[10px] font-semibold text-blue-500 dark:text-blue-400 uppercase tracking-wide w-14 shrink-0 pt-0.5">
              新機能
            </span>
            <span className="text-xs text-blue-800 dark:text-blue-200 leading-relaxed">
              {tool.newFeature}
            </span>
          </div>
        </div>
      </div>
    );
  }

  // 通常カード
  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 p-4 shadow-sm">
      <div className="flex items-start justify-between gap-2 mb-2">
        <div className="flex items-center gap-2 flex-wrap">
          <h3 className="text-sm font-bold text-gray-900 dark:text-white">
            {tool.name}
          </h3>
          {tool.badge && <Badge text={tool.badge} />}
        </div>
        <StarRating rating={tool.rating} />
      </div>

      <p className="text-xs text-gray-600 dark:text-gray-300 mb-2 leading-relaxed">
        {tool.summary}
      </p>

      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1.5">
          <span className="text-[10px] font-semibold text-gray-500 dark:text-gray-300 uppercase tracking-wide w-14 shrink-0">
            価格
          </span>
          <span className="text-xs text-gray-700 dark:text-gray-300">
            {tool.price}
          </span>
        </div>
        <div className="flex items-start gap-1.5">
          <span className="text-[10px] font-semibold text-gray-500 dark:text-gray-300 uppercase tracking-wide w-14 shrink-0 pt-0.5">
            新機能
          </span>
          <span className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
            {tool.newFeature}
          </span>
        </div>
      </div>
    </div>
  );
}

// ── メインクライアントコンポーネント ──────────────────────
export default function ToolsClient({ segments, updatedAt }: Props) {
  const [activeTab, setActiveTab] = useState<string>(segments[0]?.id ?? "");

  // 更新日時をフォーマット（例: 2026/6/8）
  const formattedDate = new Date(updatedAt).toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });

  const activeSegment = segments.find((s) => s.id === activeTab) ?? segments[0];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-0">
      {/* ── ナビゲーション ── */}
      <div className="flex items-center gap-3 mb-5 flex-wrap">
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
        >
          ← 記事一覧に戻る
        </Link>
        <span className="text-gray-300 dark:text-gray-300">|</span>
        <Link
          href="/tags"
          className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
        >
          タグ一覧
        </Link>
      </div>

      {/* ── ページヘッダー ── */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs font-bold bg-blue-600 text-white px-2 py-0.5 rounded">
            AI精査
          </span>
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">
            AIツール比較・おすすめ一覧
          </h1>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          AIが自律的に精査したカテゴリー別ベストツール。最終更新: {formattedDate}
        </p>
      </div>

      {/* ── タブ ── */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-1 -mx-1 px-1">
        {segments.map((seg) => (
          <button
            key={seg.id}
            onClick={() => setActiveTab(seg.id)}
            className={
              activeTab === seg.id
                ? "shrink-0 text-xs font-bold px-4 py-2 rounded-full transition-colors bg-blue-600 text-white"
                : "shrink-0 text-xs font-bold px-4 py-2 rounded-full transition-colors bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            }
          >
            {seg.label}
          </button>
        ))}
      </div>

      {/* ── アクティブセグメントコンテンツ ── */}
      {activeSegment && (
        <div>
          {/* 今月の最強選択バナー */}
          <div className="mb-5 rounded-2xl bg-gradient-to-br from-gray-900 via-blue-950 to-indigo-950 border border-blue-900/40 shadow-lg p-5">
            <p className="text-[10px] font-bold text-yellow-400 uppercase tracking-widest mb-1">
              👑 {activeSegment.winner.tagline}
            </p>
            <p className="text-lg font-extrabold text-white mb-2">
              {activeSegment.winner.name}
            </p>
            <p className="text-xs text-blue-200/80 leading-relaxed">
              {activeSegment.reason}
            </p>
          </div>

          {/* ツールカード一覧 */}
          <div className="flex flex-col gap-3">
            {activeSegment.tools.map((tool) => (
              <ToolCard
                key={tool.id}
                tool={tool}
                isWinner={tool.name === activeSegment.winner.name}
              />
            ))}
          </div>
        </div>
      )}

      {/* ── アフィリエイトセクション ── */}
      <div className="mt-10 -mx-4 sm:mx-0">
        <AffiliateSectionAiNews />
      </div>

      {/* ── フッターリンク ── */}
      <div className="mt-10 text-center">
        <Link
          href="/"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-6 py-2.5 rounded-full transition-colors"
        >
          記事一覧を見る
        </Link>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import marketData from "@/data/ai_market_intelligence.json";

// ── 型定義 ────────────────────────────────────────────────────────────
type Tool = {
  id: string;
  name: string;
  price: string;
  newFeature: string;
  rating: number;
  badge: string | null;
  summary: string;
};

type Segment = {
  id: string;
  label: string;
  icon: string;
  winner: { name: string; tagline: string };
  reason: string;
  tools: Tool[];
};

type NewTool = {
  name: string;
  summary: string;
  category: string;
  price: string;
  discoveredAt: string;
  isChallenging: boolean;
  challengingTool: string | null;
};

type Alert = {
  alertType: string;
  newTool: string;
  existingTool: string;
  message: string;
};

// ── ユーティリティ ────────────────────────────────────────────────────
function getTimeAgo(iso: string): string {
  const diff = Date.now() - new Date(iso).getTime();
  const hours = Math.floor(diff / 3_600_000);
  if (hours < 1) return "1時間以内";
  if (hours < 24) return `${hours}時間前`;
  return `${Math.floor(hours / 24)}日前`;
}

function formatDate(iso: string): string {
  const d = new Date(iso);
  return `${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()} ${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")} JST`;
}

// ── 星評価 ───────────────────────────────────────────────────────────
function StarRating({ rating }: { rating: number }) {
  return (
    <span className="text-xs tracking-tight" aria-label={`${rating}点/5点`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} className={i <= rating ? "text-yellow-400" : "text-gray-300 dark:text-gray-600"}>
          ★
        </span>
      ))}
    </span>
  );
}

// ── メインコンポーネント ───────────────────────────────────────────────
export default function AIIntelligenceUnit() {
  const [activeTab, setActiveTab] = useState(0);

  const data = marketData as {
    updatedAt: string;
    aiJudgment: string;
    segments: Segment[];
    newToolsToday: NewTool[];
    alerts: Alert[];
  };

  const segments = data.segments;
  const newTools = data.newToolsToday ?? [];
  const alerts = data.alerts ?? [];
  const seg = segments[activeTab];

  return (
    <div className="mb-8 rounded-2xl border border-blue-200/60 dark:border-blue-800/50 overflow-hidden shadow-sm">
      {/* ヘッダー */}
      <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="flex items-center gap-1.5 text-sm font-bold">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse inline-block" />
            AIによる自律判定
          </span>
          <span className="text-xs text-blue-200/80">
            {getTimeAgo(data.updatedAt)}更新
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-blue-200/70 hidden sm:inline">
            参照サイト {segments.reduce((n, s) => n + s.tools.length, 0)}件
          </span>
          <span className="text-xs font-bold bg-white/20 backdrop-blur-sm px-2.5 py-1 rounded-full">
            AI&apos;s Choice
          </span>
        </div>
      </div>

      <div className="bg-gradient-to-br from-slate-50 to-blue-50/40 dark:from-gray-900 dark:to-blue-950/20">
        {/* タブ */}
        <div className="flex overflow-x-auto scrollbar-none border-b border-blue-100 dark:border-blue-900/50">
          {segments.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setActiveTab(i)}
              className={`flex-1 min-w-[4.5rem] py-2.5 px-1 text-xs font-bold whitespace-nowrap transition-colors ${
                activeTab === i
                  ? "bg-white dark:bg-gray-900 text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400"
                  : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        <div className="p-4">
          {/* 下克上アラート */}
          {alerts.length > 0 && (
            <div className="mb-3 flex flex-col gap-2">
              {alerts.map((alert, i) => (
                <div key={i} className="flex items-start gap-2 p-3 rounded-xl bg-orange-50 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-800/50">
                  <span className="text-base shrink-0">⚡</span>
                  <span className="text-xs text-orange-700 dark:text-orange-300">
                    <span className="font-bold">下克上の兆し：</span>{alert.message}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* 今月の正解ラベル */}
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-bold text-white bg-blue-600 px-2 py-0.5 rounded">
              今月の正解
            </span>
            <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
              {seg.winner.name}
            </span>
          </div>

          {/* 判定理由 */}
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-4 leading-relaxed border-l-2 border-blue-400 pl-3">
            {seg.reason}
          </p>

          {/* ツール一覧 */}
          <div className="flex flex-col gap-2">
            {seg.tools.map((tool) => (
              <div
                key={tool.id}
                className={`rounded-lg p-3 ${
                  tool.badge === "AI's Choice"
                    ? "bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/60"
                    : "bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/50"
                }`}
              >
                <div className="flex items-start justify-between gap-2 flex-wrap">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">{tool.name}</span>
                    {tool.badge && (
                      <span className="text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/50 px-1.5 py-0.5 rounded">
                        {tool.badge}
                      </span>
                    )}
                  </div>
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-400 shrink-0">{tool.price}</span>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{tool.summary}</p>
                <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                  <StarRating rating={tool.rating} />
                  <span className="text-xs text-emerald-600 dark:text-emerald-400">
                    ↑ {tool.newFeature}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* 今日発見した新着ツール */}
          {newTools.length > 0 && (
            <div className="mt-4">
              <p className="text-xs font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1 mb-2">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse inline-block" />
                AIが今日見つけた注目の新着ツール
              </p>
              <div className="flex flex-col gap-2">
                {newTools.map((tool, i) => (
                  <div key={i} className="rounded-xl p-3 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/50">
                    <div className="flex items-start gap-2">
                      <span className="text-xs font-bold text-white bg-emerald-600 px-1.5 py-0.5 rounded shrink-0">NEW</span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-sm font-bold text-gray-900 dark:text-white">{tool.name}</span>
                          <span className="text-xs text-gray-500 dark:text-gray-400 shrink-0">{tool.price}</span>
                        </div>
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5 leading-relaxed">{tool.summary}</p>
                        {tool.isChallenging && tool.challengingTool && (
                          <p className="text-xs font-semibold text-orange-600 dark:text-orange-400 mt-1">
                            ⚡ {tool.challengingTool}を超える可能性あり
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* フッター */}
          <p className="text-[10px] text-gray-400 dark:text-gray-600 mt-4 text-right">
            最終分析: {formatDate(data.updatedAt)} · 人間が選んだ古い情報ではなく、AIが自律的に精査した最適解
          </p>
        </div>
      </div>
    </div>
  );
}

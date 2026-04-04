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

// ── 日時フォーマット ────────────────────────────────────────────────────
function formatDate(iso: string): string {
  const d = new Date(iso);
  const y = d.getFullYear();
  const mo = d.getMonth() + 1;
  const day = d.getDate();
  const h = String(d.getHours()).padStart(2, "0");
  const mi = String(d.getMinutes()).padStart(2, "0");
  return `${y}/${mo}/${day} ${h}:${mi} JST`;
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

  return (
    <div className="mb-8 rounded-2xl border border-blue-200/60 dark:border-blue-800/50 overflow-hidden shadow-sm">
      {/* ヘッダー */}
      <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1.5 text-sm font-bold">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse inline-block" />
            AIによる自律判定
          </span>
          <span className="text-xs text-blue-200/80">{formatDate(data.updatedAt)}</span>
        </div>
        <span className="text-xs font-bold bg-white/20 backdrop-blur-sm px-2.5 py-1 rounded-full">
          AI&apos;s Choice 2026.04
        </span>
      </div>

      <div className="bg-gradient-to-br from-slate-50 to-blue-50/40 dark:from-gray-900 dark:to-blue-950/20 p-4">
        {/* サブタイトル */}
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-4 leading-relaxed border-l-2 border-blue-400 pl-3">
          人間が選んだ古い情報ではない — AIが最新情報を自律的に精査し、今月の最適解を判定しました。
        </p>

        {/* 下克上アラート */}
        {alerts.length > 0 && (
          <div className="mb-4 flex flex-col gap-2">
            {alerts.map((alert, i) => (
              <div
                key={i}
                className="flex items-start gap-2 p-3 rounded-xl bg-orange-50 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-800/50"
              >
                <span className="text-base shrink-0">⚡</span>
                <div>
                  <span className="text-xs font-bold text-orange-700 dark:text-orange-400">
                    下克上の兆し：
                  </span>
                  <span className="text-xs text-orange-700 dark:text-orange-300 ml-1">
                    {alert.message}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 3セグメント */}
        <div className="flex flex-col gap-3">
          {segments.map((segment) => (
            <div
              key={segment.id}
              className="bg-white/90 dark:bg-gray-900/70 rounded-xl border border-gray-100 dark:border-gray-800 overflow-hidden"
            >
              {/* セグメントヘッダー */}
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-gray-100 dark:border-gray-800 bg-gray-50/80 dark:bg-gray-800/50">
                <span className="text-xs font-bold text-white bg-blue-600 px-2 py-0.5 rounded">
                  {segment.label}
                </span>
                <span className="text-xs text-gray-700 dark:text-gray-300">
                  今月の正解：
                  <span className="font-bold text-blue-600 dark:text-blue-400 ml-1">
                    {segment.winner.name}
                  </span>
                </span>
              </div>

              <div className="p-3">
                {/* 判定理由 */}
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-3 leading-relaxed">
                  {segment.reason}
                </p>

                {/* ツール一覧 */}
                <div className="flex flex-col gap-2">
                  {segment.tools.map((tool) => (
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
                          <span className="text-sm font-semibold text-gray-900 dark:text-white">
                            {tool.name}
                          </span>
                          {tool.badge && (
                            <span className="text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/50 px-1.5 py-0.5 rounded">
                              {tool.badge}
                            </span>
                          )}
                        </div>
                        <span className="text-xs font-medium text-gray-500 dark:text-gray-400 shrink-0">
                          {tool.price}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{tool.summary}</p>
                      <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                        <StarRating rating={tool.rating} />
                        <span className="text-xs text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                          <span className="text-emerald-500">↑</span>
                          {tool.newFeature}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 今日発見した新着ツール */}
        {newTools.length > 0 && (
          <div className="mt-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse inline-block" />
                AIが今日見つけた注目の新着ツール
              </span>
            </div>
            <div className="flex flex-col gap-2">
              {newTools.map((tool, i) => (
                <div
                  key={i}
                  className="rounded-xl p-3 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/50"
                >
                  <div className="flex items-start gap-2">
                    <span className="text-xs font-bold text-white bg-emerald-600 px-1.5 py-0.5 rounded shrink-0">
                      NEW
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-sm font-bold text-gray-900 dark:text-white">
                          {tool.name}
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-400 shrink-0">
                          {tool.price}
                        </span>
                      </div>
                      <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5 leading-relaxed">
                        {tool.summary}
                      </p>
                      {tool.isChallenging && tool.challengingTool && (
                        <p className="text-xs font-semibold text-orange-600 dark:text-orange-400 mt-1">
                          ⚡ {tool.challengingTool}を超える可能性あり
                        </p>
                      )}
                      <span className="text-xs text-emerald-600 dark:text-emerald-500 mt-0.5 block">
                        カテゴリー: {tool.category}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* フッター */}
        <p className="text-xs text-gray-400 dark:text-gray-600 mt-4 text-right">
          AIが自律的に情報を精査し、最新の最適解を提示する次世代メディア
        </p>
      </div>
    </div>
  );
}

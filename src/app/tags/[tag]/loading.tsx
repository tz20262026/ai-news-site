/** /tags/[tag] 遷移中に表示するスケルトンUI。実レイアウト（2列カードグリッド）に近い形で
 * レイアウトシフトを防ぎつつ、白画面による体感速度の悪化を避ける。 */
export default function TagLoading() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-0 animate-pulse">
      {/* パンくずリスト分のスケルトン */}
      <div className="mb-6 h-4 w-56 rounded bg-gray-200 dark:bg-gray-800" />

      {/* ページヘッダー分のスケルトン */}
      <div className="mb-7">
        <div className="flex items-center gap-3">
          <div className="h-7 w-28 rounded bg-gray-200 dark:bg-gray-800" />
          <div className="h-6 w-14 rounded-full bg-gray-200 dark:bg-gray-800" />
        </div>
        <div className="mt-2 h-4 w-56 rounded bg-gray-200 dark:bg-gray-800" />
      </div>

      {/* 「すべてのタグを見る」リンク分のスケルトン */}
      <div className="mb-6 h-3 w-28 rounded bg-gray-200 dark:bg-gray-800" />

      {/* 記事グリッドのスケルトン */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden"
          >
            <div className="w-full h-40 bg-gray-200 dark:bg-gray-800" />
            <div className="p-4 space-y-2">
              <div className="flex gap-1.5">
                <div className="h-5 w-14 rounded-full bg-gray-200 dark:bg-gray-800" />
                <div className="h-5 w-14 rounded-full bg-gray-200 dark:bg-gray-800" />
              </div>
              <div className="h-4 w-full rounded bg-gray-200 dark:bg-gray-800" />
              <div className="h-4 w-2/3 rounded bg-gray-200 dark:bg-gray-800" />
              <div className="h-3 w-32 rounded bg-gray-200 dark:bg-gray-800" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

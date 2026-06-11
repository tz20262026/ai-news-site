// サイドバー用コンパクトアフィリエイト（3件・縦リスト）

const items = [
  {
    href: "https://px.a8.net/svt/ejp?a8mat=4B5RS7+1L5MUQ+40GA+61C2P",
    emoji: "🌍",
    title: "スパルタ英会話",
    tagline: "英語でAI情報を直読み",
    cta: "無料体験レッスン →",
    color: "#2563eb",
  },
  {
    href: "https://px.a8.net/svt/ejp?a8mat=4B5RS6+G7GTMA+3YFI+674EQ",
    emoji: "🛡️",
    title: "NordVPN",
    tagline: "海外AIツールを安全に利用",
    cta: "63%オフで試す →",
    color: "#4f46e5",
  },
  {
    href: "https://px.a8.net/svt/ejp?a8mat=4B3G6D+E0VLRM+CO4+61C2Q",
    emoji: "🏆",
    title: "エックスサーバー",
    tagline: "AIブログ開設に国内No.1",
    cta: "10日間無料 →",
    color: "#f97316",
  },
];

export default function SidebarAffiliate() {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 p-4">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-sm font-bold text-gray-900 dark:text-white">💡 おすすめサービス</span>
        <span className="ml-auto text-[10px] font-semibold text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded-full">PR</span>
      </div>
      <div className="flex flex-col gap-2">
        {items.map((item) => (
          <a
            key={item.title}
            href={item.href}
            rel="nofollow sponsored noopener"
            target="_blank"
            className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 dark:border-gray-700/60 bg-gray-50 dark:bg-gray-800/50 hover:border-blue-200 dark:hover:border-blue-700/60 hover:bg-blue-50/50 dark:hover:bg-blue-950/20 transition-all group"
          >
            <span className="text-xl shrink-0">{item.emoji}</span>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-bold text-gray-900 dark:text-white leading-tight truncate">{item.title}</p>
              <p className="text-[10px] text-gray-500 dark:text-gray-400 truncate">{item.tagline}</p>
            </div>
            <span
              className="text-[10px] font-bold shrink-0 whitespace-nowrap"
              style={{ color: item.color }}
            >
              {item.cta}
            </span>
          </a>
        ))}
      </div>
      <p className="text-[9px] text-gray-400 dark:text-gray-600 mt-2 text-right">※ PR・広告を含みます</p>
    </div>
  );
}

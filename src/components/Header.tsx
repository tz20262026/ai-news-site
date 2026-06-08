import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";
import { allArticles } from "@/lib/articles";

export default function Header() {
  const count = allArticles.length;

  return (
    <header className="bg-gray-950/95 backdrop-blur-md text-white sticky top-0 z-10 border-b border-gray-800/80 shadow-sm">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-xs font-bold bg-gradient-to-br from-blue-400 to-blue-600 text-white px-2 py-0.5 rounded shadow-sm">AI</span>
          <span className="text-lg font-bold tracking-tight group-hover:text-blue-400 transition-colors">
            News Japan
          </span>
          <span className="hidden sm:inline text-[10px] font-medium text-gray-500 bg-gray-800 px-1.5 py-0.5 rounded-full ml-1">
            {count}件
          </span>
        </Link>
        <nav className="flex items-center gap-1 text-sm text-gray-400">
          <Link href="/tools" className="hover:text-white transition-colors px-3 py-2 hidden sm:block">ツール一覧</Link>
          <Link href="/about" className="hover:text-white transition-colors px-3 py-2 hidden sm:block">About</Link>
          <Link
            href="/rss"
            className="hidden sm:flex items-center gap-1.5 text-xs text-orange-400 hover:text-orange-300 transition-colors px-2 py-2"
            title="RSSフィードを購読"
          >
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current shrink-0">
              <path d="M6.18 15.64a2.18 2.18 0 0 1 2.18 2.18C8.36 19.01 7.38 20 6.18 20C4.98 20 4 19.01 4 17.82a2.18 2.18 0 0 1 2.18-2.18M4 4.44A15.56 15.56 0 0 1 19.56 20h-2.83A12.73 12.73 0 0 0 4 7.27V4.44m0 5.66a9.9 9.9 0 0 1 9.9 9.9h-2.83A7.07 7.07 0 0 0 4 12.93V10.1z" />
            </svg>
            RSS
          </Link>
          <DarkModeToggle />
        </nav>
      </div>
    </header>
  );
}

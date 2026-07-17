"use client";

import Link from "next/link";
import { useState } from "react";
import DarkModeToggle from "./DarkModeToggle";

const NAV_LINKS = [
  { href: "/tags", label: "タグ" },
  { href: "/tools", label: "ツール一覧" },
  { href: "/ai-tools-guide", label: "無料AIツール" },
  { href: "/ai-beginner-guide", label: "初心者ガイド" },
  { href: "/ai-business-guide", label: "ビジネス活用" },
  { href: "/ai-fukugyou", label: "AI副業" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gray-950/95 backdrop-blur-md text-white sticky top-0 z-20 border-b border-gray-800/80 shadow-sm">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 h-14 flex items-center justify-between">
        {/* ロゴ */}
        <Link href="/" className="flex items-center gap-2 group" onClick={() => setMenuOpen(false)}>
          <span className="text-xs font-bold bg-gradient-to-br from-blue-400 to-blue-600 text-white px-2 py-0.5 rounded shadow-sm">AI</span>
          <span className="text-lg font-bold tracking-tight group-hover:text-blue-400 transition-colors">
            News Japan
          </span>
        </Link>

        {/* PC ナビ */}
        <nav className="hidden sm:flex items-center gap-1 text-sm text-gray-300">
          {NAV_LINKS.map(({ href, label }) => (
            <Link key={href} href={href} className="hover:text-white transition-colors px-3 py-2">
              {label}
            </Link>
          ))}
          <Link
            href="/rss"
            className="flex items-center gap-1.5 text-xs text-orange-400 hover:text-orange-300 transition-colors px-2 py-2"
            title="RSSフィードを購読"
          >
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current shrink-0">
              <path d="M6.18 15.64a2.18 2.18 0 0 1 2.18 2.18C8.36 19.01 7.38 20 6.18 20C4.98 20 4 19.01 4 17.82a2.18 2.18 0 0 1 2.18-2.18M4 4.44A15.56 15.56 0 0 1 19.56 20h-2.83A12.73 12.73 0 0 0 4 7.27V4.44m0 5.66a9.9 9.9 0 0 1 9.9 9.9h-2.83A7.07 7.07 0 0 0 4 12.93V10.1z" />
            </svg>
            RSS
          </Link>
          <DarkModeToggle />
        </nav>

        {/* スマホ: ダークモード + ハンバーガー */}
        <div className="flex sm:hidden items-center gap-2">
          <DarkModeToggle />
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
            aria-label="メニューを開く"
          >
            {menuOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* スマホ ドロワーメニュー */}
      {menuOpen && (
        <div className="sm:hidden bg-gray-900 border-t border-gray-800 px-4 py-3">
          <nav className="flex flex-col">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="py-3 text-sm text-gray-300 hover:text-white border-b border-gray-800 last:border-0 transition-colors"
              >
                {label}
              </Link>
            ))}
            <Link
              href="/rss"
              onClick={() => setMenuOpen(false)}
              className="py-3 text-sm text-orange-400 hover:text-orange-300 flex items-center gap-2 transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current shrink-0">
                <path d="M6.18 15.64a2.18 2.18 0 0 1 2.18 2.18C8.36 19.01 7.38 20 6.18 20C4.98 20 4 19.01 4 17.82a2.18 2.18 0 0 1 2.18-2.18M4 4.44A15.56 15.56 0 0 1 19.56 20h-2.83A12.73 12.73 0 0 0 4 7.27V4.44m0 5.66a9.9 9.9 0 0 1 9.9 9.9h-2.83A7.07 7.07 0 0 0 4 12.93V10.1z" />
              </svg>
              RSS購読
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

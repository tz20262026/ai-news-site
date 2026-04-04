import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";

export default function Header() {
  return (
    <header className="bg-gray-950/95 backdrop-blur-md text-white sticky top-0 z-10 border-b border-gray-800/80 shadow-sm">
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-xs font-bold bg-gradient-to-br from-blue-400 to-blue-600 text-white px-2 py-0.5 rounded shadow-sm">AI</span>
          <span className="text-lg font-bold tracking-tight group-hover:text-blue-400 transition-colors">
            News Japan
          </span>
        </Link>
        <nav className="flex items-center gap-1 text-sm text-gray-400">
          <Link href="/about" className="hover:text-white transition-colors px-3 py-2">About</Link>
          <DarkModeToggle />
        </nav>
      </div>
    </header>
  );
}

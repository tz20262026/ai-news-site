import Link from "next/link";
import SisterSites from "./SisterSites";

const GUIDE_LINKS = [
  { href: "/chatgpt-guide", label: "ChatGPT使い方" },
  { href: "/claude-guide", label: "Claude" },
  { href: "/gemini-guide", label: "Gemini" },
  { href: "/grok-guide", label: "Grok" },
  { href: "/perplexity-guide", label: "Perplexity" },
  { href: "/copilot-guide", label: "Copilot" },
  { href: "/midjourney-guide", label: "Midjourney" },
  { href: "/stable-diffusion-guide", label: "Stable Diffusion" },
  { href: "/ai-video-guide", label: "動画生成AI" },
  { href: "/ai-music-guide", label: "AI音楽生成" },
  { href: "/ai-coding-guide", label: "AIコーディング" },
  { href: "/ai-writing-guide", label: "AI文章作成" },
];

const TOOL_LINKS = [
  { href: "/ai-tools-guide", label: "無料AIツール15選" },
  { href: "/ai-tools-comparison", label: "AIツール比較" },
  { href: "/ai-image-comparison", label: "AI画像生成比較" },
  { href: "/tools", label: "ツール一覧" },
  { href: "/ai-fukugyou", label: "AI副業ガイド" },
  { href: "/ai-blog-automation", label: "AIブログ自動化ツール" },
  { href: "/chatgpt-prompt-guide", label: "プロンプト集" },
  { href: "/ai-agent-guide", label: "AIエージェント" },
  { href: "/notebooklm-guide", label: "NotebookLM" },
];

const SITE_LINKS = [
  { href: "/about", label: "About" },
  { href: "/tags", label: "タグ一覧" },
  { href: "/partners", label: "パートナー" },
  { href: "/rss", label: "RSS購読" },
  { href: "/privacy", label: "プライバシーポリシー" },
  { href: "/tokushoho", label: "特定商取引法" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 border-t border-gray-800 mt-16">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 py-10">
        {/* ロゴ */}
        <div className="flex items-center gap-2 mb-8">
          <span className="text-xs font-bold bg-blue-500 text-white px-2 py-0.5 rounded">AI</span>
          <span className="text-white font-bold text-lg">News Japan</span>
        </div>

        {/* 3カラムリンク */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
          {/* ガイド */}
          <div>
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">AIガイド</p>
            <ul className="space-y-2.5">
              {GUIDE_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-gray-300 hover:text-white transition-colors block py-0.5"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ツール・サービス */}
          <div>
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">ツール・サービス</p>
            <ul className="space-y-2.5">
              {TOOL_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-gray-300 hover:text-white transition-colors block py-0.5"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* サイト情報 */}
          <div>
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">サイト情報</p>
            <ul className="space-y-2.5">
              {SITE_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-gray-300 hover:text-white transition-colors block py-0.5"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 姉妹サイト（相互リンク） */}
        <SisterSites />

        {/* コピーライト */}
        <div className="pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-600">
          <p>© {new Date().getFullYear()} AI News Japan. All rights reserved.</p>
          <p>海外100媒体から毎日自動収集・日本語でお届け</p>
        </div>
      </div>
    </footer>
  );
}

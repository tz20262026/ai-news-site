import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-500 border-t border-gray-800 mt-16">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 py-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold bg-blue-500 text-white px-2 py-0.5 rounded">AI</span>
          <span className="text-white font-semibold">News Japan</span>
        </div>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 justify-center sm:justify-end">
          <Link
            href="/rss"
            className="flex items-center gap-1.5 text-xs text-orange-400 hover:text-orange-300 transition-colors"
          >
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current">
              <path d="M6.18 15.64a2.18 2.18 0 0 1 2.18 2.18C8.36 19.01 7.38 20 6.18 20C4.98 20 4 19.01 4 17.82a2.18 2.18 0 0 1 2.18-2.18M4 4.44A15.56 15.56 0 0 1 19.56 20h-2.83A12.73 12.73 0 0 0 4 7.27V4.44m0 5.66a9.9 9.9 0 0 1 9.9 9.9h-2.83A7.07 7.07 0 0 0 4 12.93V10.1z" />
            </svg>
            RSS購読
          </Link>
          <Link
            href="/partners"
            className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
          >
            パートナー
          </Link>
          <Link
            href="/tools"
            className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
          >
            AIツール一覧
          </Link>
          <Link
            href="/ai-tools-guide"
            className="text-xs text-cyan-400 hover:text-cyan-300 transition-colors font-semibold"
          >
            無料AIツール15選
          </Link>
          <Link
            href="/ai-fukugyou"
            className="text-xs text-green-400 hover:text-green-300 transition-colors font-semibold"
          >
            AI副業ガイド
          </Link>
          <Link
            href="/chatgpt-guide"
            className="text-xs text-yellow-400 hover:text-yellow-300 transition-colors font-semibold"
          >
            ChatGPT使い方ガイド
          </Link>
          <Link
            href="/gazou-ai-guide"
            className="text-xs text-purple-400 hover:text-purple-300 transition-colors font-semibold"
          >
            画像生成AIガイド
          </Link>
          <Link
            href="/claude-guide"
            className="text-xs text-orange-400 hover:text-orange-300 transition-colors font-semibold"
          >
            Claudeガイド
          </Link>
          <Link
            href="/ai-writing-guide"
            className="text-xs text-blue-400 hover:text-blue-300 transition-colors font-semibold"
          >
            AI文章生成ガイド
          </Link>
          <Link
            href="/gemini-guide"
            className="text-xs text-cyan-400 hover:text-cyan-300 transition-colors font-semibold"
          >
            Geminiガイド
          </Link>
          <Link
            href="/copilot-guide"
            className="text-xs text-blue-400 hover:text-blue-300 transition-colors font-semibold"
          >
            Copilotガイド
          </Link>
          <Link
            href="/perplexity-guide"
            className="text-xs text-teal-400 hover:text-teal-300 transition-colors font-semibold"
          >
            Perplexityガイド
          </Link>
          <Link
            href="/chatgpt-prompt-guide"
            className="text-xs text-green-400 hover:text-green-300 transition-colors font-semibold"
          >
            ChatGPTプロンプト集
          </Link>
          <Link
            href="/ai-video-guide"
            className="text-xs text-red-400 hover:text-red-300 transition-colors font-semibold"
          >
            動画生成AIガイド
          </Link>
          <Link
            href="/notebooklm-guide"
            className="text-xs text-yellow-400 hover:text-yellow-300 transition-colors font-semibold"
          >
            NotebookLMガイド
          </Link>
          <Link
            href="/grok-guide"
            className="text-xs text-gray-300 hover:text-gray-200 transition-colors font-semibold"
          >
            Grokガイド
          </Link>
          <Link
            href="/tags"
            className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
          >
            タグ一覧
          </Link>
          <Link
            href="/privacy"
            className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
          >
            プライバシーポリシー
          </Link>
          <Link
            href="/tokushoho"
            className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
          >
            特定商取引法に基づく表記
          </Link>
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} AI News Japan
          </p>
        </div>
      </div>
    </footer>
  );
}

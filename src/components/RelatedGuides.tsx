// 独立したガイドページ（ai-tools-guide 等のダークテーマ固定ページ）用の内部リンクセクション。
// これらのページは他ページへの内部リンクが無く孤立しがちなため、主要ガイドへの導線を機械的に付与する。
import Link from "next/link";

type Guide = { href: string; label: string; emoji: string };

const ALL_GUIDES: Guide[] = [
  { href: "/ai-beginner-guide", label: "AI初心者完全ガイド", emoji: "🚀" },
  { href: "/chatgpt-guide", label: "ChatGPT完全ガイド", emoji: "🤖" },
  { href: "/claude-guide", label: "Claude完全ガイド", emoji: "🧠" },
  { href: "/claude-ai-guide", label: "Claude AI完全ガイド", emoji: "🔮" },
  { href: "/gemini-guide", label: "Gemini完全ガイド", emoji: "✨" },
  { href: "/grok-guide", label: "Grok完全ガイド", emoji: "⚡" },
  { href: "/perplexity-guide", label: "Perplexity AI完全ガイド", emoji: "🔎" },
  { href: "/copilot-guide", label: "Microsoft Copilotガイド", emoji: "🪁" },
  { href: "/notion-ai-guide", label: "Notion AI活用ガイド", emoji: "🗒️" },
  { href: "/notebooklm-guide", label: "NotebookLM使い方ガイド", emoji: "📓" },
  { href: "/canva-ai-guide", label: "Canva AI活用ガイド", emoji: "🎨" },
  { href: "/chatgpt-atlas-guide", label: "ChatGPT Atlas使い方ガイド", emoji: "🧭" },
  { href: "/chatgpt-prompt-guide", label: "ChatGPTプロンプト集50選", emoji: "📝" },
  { href: "/chatgpt-business-guide", label: "ChatGPTビジネス活用ガイド", emoji: "📈" },
  { href: "/ai-business-guide", label: "AI業務活用ガイド", emoji: "💼" },
  { href: "/ai-tools-guide", label: "無料AIツール15選", emoji: "🔧" },
  { href: "/ai-tools-comparison", label: "主要AIツール徹底比較", emoji: "⚖️" },
  { href: "/ai-nocode-guide", label: "AIノーコードツールガイド", emoji: "🧱" },
  { href: "/ai-side-job", label: "AIを使った副業5選", emoji: "💰" },
  { href: "/ai-fukugyou", label: "AI副業完全ガイド", emoji: "💵" },
  { href: "/ai-job-loss-guide", label: "AIと仕事の未来ガイド", emoji: "🧭" },
  { href: "/ai-shikaku-guide", label: "生成AI資格・検定ガイド", emoji: "📜" },
  { href: "/ai-coding-guide", label: "AIコーディングガイド", emoji: "💻" },
  { href: "/ai-image-generation-guide", label: "AI画像生成ガイド", emoji: "🖼️" },
  { href: "/ai-image-guide", label: "AI画像生成完全ガイド", emoji: "🎨" },
  { href: "/ai-image-comparison", label: "AI画像生成ツール徹底比較", emoji: "🔬" },
  { href: "/gazou-ai-guide", label: "画像生成AIおすすめ7選", emoji: "🖌️" },
  { href: "/midjourney-guide", label: "Midjourney使い方ガイド", emoji: "🎭" },
  { href: "/stable-diffusion-guide", label: "Stable Diffusion完全ガイド", emoji: "🧪" },
  { href: "/nano-banana-guide", label: "Nano Banana Pro使い方ガイド", emoji: "🍌" },
  { href: "/ai-video-guide", label: "AI動画生成ガイド", emoji: "🎬" },
  { href: "/sora-guide", label: "Sora 2使い方ガイド", emoji: "🎥" },
  { href: "/ai-music-guide", label: "AI音楽生成ガイド", emoji: "🎵" },
  { href: "/ai-writing-guide", label: "AI文章作成ガイド", emoji: "✍️" },
  { href: "/ai-presentation-guide", label: "AIプレゼン資料作成ガイド", emoji: "📽️" },
  { href: "/ai-translation-guide", label: "AI翻訳ツール比較", emoji: "🌐" },
  { href: "/ai-transcription-guide", label: "AI文字起こしツール比較", emoji: "🎙️" },
  { href: "/ai-english-guide", label: "AI英会話アプリ比較", emoji: "🗣️" },
  { href: "/ai-excel-guide", label: "Excel×AI活用ガイド", emoji: "📊" },
  { href: "/ai-search-guide", label: "AI検索エンジン比較", emoji: "🔍" },
  { href: "/ai-agent-guide", label: "AIエージェント入門ガイド", emoji: "🧩" },
  { href: "/ai-blog-automation", label: "AIブログ自動生成ツール比較", emoji: "📰" },
  { href: "/ai-tool-diagnosis", label: "AIツール診断", emoji: "🎯" },
  { href: "/ai-work-safety-guide", label: "仕事でAIを使う注意点", emoji: "⚠️" },
  { href: "/nordvpn-guide", label: "NordVPN完全ガイド", emoji: "🛡️" },
  { href: "/nordvpn-wifi-anzen", label: "公共Wi-Fi安全ガイド(NordVPN)", emoji: "📡" },
  { href: "/suikavpn-guide", label: "スイカVPN活用ガイド", emoji: "🍉" },
  { href: "/expressvpn-travel-guide", label: "海外で日本の動画を見る方法", emoji: "📺" },
  { href: "/saily-esim-guide", label: "Saily eSIM活用ガイド", emoji: "📶" },
  { href: "/saily-esim-ai-tabi", label: "Saily eSIM活用(AI旅行)", emoji: "✈️" },
  { href: "/xserver-wordpress-guide", label: "XServer for WordPressガイド", emoji: "🖥️" },
];

function pickRelated(currentHref: string, count = 4): Guide[] {
  const pool = ALL_GUIDES.filter((g) => g.href !== currentHref);
  let hash = 0;
  for (let i = 0; i < currentHref.length; i++) hash = (hash * 31 + currentHref.charCodeAt(i)) >>> 0;
  const start = hash % pool.length;
  const rotated = [...pool.slice(start), ...pool.slice(0, start)];
  return rotated.slice(0, count);
}

export default function RelatedGuides({ currentHref }: { currentHref: string }) {
  const guides = pickRelated(currentHref);

  return (
    <section className="bg-slate-900 border border-slate-700 rounded-2xl p-6">
      <p className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-3">関連ガイド</p>
      <h2 className="font-black text-white text-lg mb-4">あわせて読みたいAI活用ガイド</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {guides.map((g) => (
          <Link
            key={g.href}
            href={g.href}
            className="flex items-center gap-2.5 px-4 py-3 rounded-xl border border-slate-700 bg-slate-800/60 hover:border-blue-500 hover:bg-slate-800 transition-all group"
          >
            <span className="text-lg shrink-0">{g.emoji}</span>
            <span className="text-sm font-medium text-slate-200 group-hover:text-blue-400 transition-colors">
              {g.label}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

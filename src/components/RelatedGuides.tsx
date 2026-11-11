// 独立したガイドページ（ai-tools-guide 等のダークテーマ固定ページ）用の内部リンクセクション。
// これらのページは他ページへの内部リンクが無く孤立しがちなため、主要ガイドへの導線を機械的に付与する。
import Link from "next/link";

type Guide = { href: string; label: string; emoji: string };

const ALL_GUIDES: Guide[] = [
  { href: "/ai-beginner-guide", label: "AI初心者完全ガイド", emoji: "🚀" },
  { href: "/chatgpt-guide", label: "ChatGPT完全ガイド", emoji: "🤖" },
  { href: "/claude-guide", label: "Claude完全ガイド", emoji: "🧠" },
  { href: "/gemini-guide", label: "Gemini完全ガイド", emoji: "✨" },
  { href: "/ai-business-guide", label: "AI業務活用ガイド", emoji: "💼" },
  { href: "/ai-tools-guide", label: "無料AIツール15選", emoji: "🔧" },
  { href: "/ai-side-job", label: "AIを使った副業5選", emoji: "💰" },
  { href: "/ai-coding-guide", label: "AIコーディングガイド", emoji: "💻" },
  { href: "/ai-image-generation-guide", label: "AI画像生成ガイド", emoji: "🖼️" },
  { href: "/ai-video-guide", label: "AI動画生成ガイド", emoji: "🎬" },
  { href: "/ai-writing-guide", label: "AI文章作成ガイド", emoji: "✍️" },
  { href: "/ai-tool-diagnosis", label: "AIツール診断", emoji: "🎯" },
  { href: "/ai-work-safety-guide", label: "仕事でAIを使う注意点", emoji: "⚠️" },
  { href: "/nordvpn-guide", label: "NordVPN完全ガイド", emoji: "🛡️" },
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

// 記事タグに連動した内部リンク（関連ガイドページ）

type Guide = { href: string; label: string; emoji: string };

const TAG_GUIDES: { keywords: string[]; guide: Guide }[] = [
  { keywords: ["chatgpt", "gpt", "openai", "gpt-4", "o3", "o1"], guide: { href: "/chatgpt-guide", label: "ChatGPT完全ガイド", emoji: "🤖" } },
  { keywords: ["claude", "anthropic"], guide: { href: "/claude-guide", label: "Claude完全ガイド", emoji: "🧠" } },
  { keywords: ["gemini", "google ai", "bard"], guide: { href: "/gemini-guide", label: "Gemini完全ガイド", emoji: "✨" } },
  { keywords: ["midjourney", "画像生成", "image generation", "dalle", "flux"], guide: { href: "/midjourney-guide", label: "Midjourney完全ガイド", emoji: "🎨" } },
  { keywords: ["stable diffusion", "stablediffusion"], guide: { href: "/stable-diffusion-guide", label: "Stable Diffusionガイド", emoji: "🖼️" } },
  { keywords: ["動画生成", "video generation", "sora", "runway", "kling"], guide: { href: "/ai-video-guide", label: "AI動画生成ガイド", emoji: "🎬" } },
  { keywords: ["perplexity"], guide: { href: "/perplexity-guide", label: "Perplexityガイド", emoji: "🔍" } },
  { keywords: ["grok", "xai"], guide: { href: "/grok-guide", label: "Grokガイド", emoji: "⚡" } },
  { keywords: ["copilot", "microsoft", "bing ai"], guide: { href: "/copilot-guide", label: "Copilotガイド", emoji: "💼" } },
  { keywords: ["notebooklm", "notebook lm"], guide: { href: "/notebooklm-guide", label: "NotebookLMガイド", emoji: "📓" } },
  { keywords: ["コーディング", "coding", "cursor", "github copilot", "devin", "プログラミング"], guide: { href: "/ai-coding-guide", label: "AIコーディングガイド", emoji: "💻" } },
  { keywords: ["翻訳", "translation", "deepl"], guide: { href: "/ai-translation-guide", label: "AI翻訳ガイド", emoji: "🌍" } },
  { keywords: ["音楽", "music", "suno", "udio"], guide: { href: "/ai-music-guide", label: "AI音楽生成ガイド", emoji: "🎵" } },
  { keywords: ["プレゼン", "presentation", "slides"], guide: { href: "/ai-presentation-guide", label: "AIプレゼンガイド", emoji: "📊" } },
  { keywords: ["文章", "ライティング", "writing", "コピー"], guide: { href: "/ai-writing-guide", label: "AI文章作成ガイド", emoji: "✍️" } },
  { keywords: ["検索", "search", "ai search"], guide: { href: "/ai-search-guide", label: "AI検索ガイド", emoji: "🔎" } },
  { keywords: ["ノーコード", "no-code", "nocode"], guide: { href: "/ai-nocode-guide", label: "AIノーコードガイド", emoji: "🛠️" } },
  { keywords: ["notion"], guide: { href: "/notion-ai-guide", label: "Notion AIガイド", emoji: "📝" } },
  { keywords: ["canva"], guide: { href: "/canva-ai-guide", label: "Canva AIガイド", emoji: "🎨" } },
  { keywords: ["ビジネス", "business", "業務効率", "自動化"], guide: { href: "/chatgpt-business-guide", label: "ChatGPTビジネス活用", emoji: "📈" } },
  { keywords: ["プロンプト", "prompt", "プロンプトエンジニアリング"], guide: { href: "/chatgpt-prompt-guide", label: "プロンプトガイド", emoji: "💡" } },
  { keywords: ["エージェント", "agent", "自律", "autonomous"], guide: { href: "/ai-agent-guide", label: "AIエージェントガイド", emoji: "🤖" } },
  { keywords: ["画像", "image", "ai画像"], guide: { href: "/ai-image-generation-guide", label: "AI画像生成ガイド", emoji: "🖼️" } },
];

function pickGuides(tags: string[]): Guide[] {
  const lowerTags = tags.map((t) => t.toLowerCase());
  const seen = new Set<string>();
  const result: Guide[] = [];

  for (const { keywords, guide } of TAG_GUIDES) {
    if (seen.has(guide.href)) continue;
    const match = keywords.some((kw) =>
      lowerTags.some((tag) => tag.includes(kw) || kw.includes(tag))
    );
    if (match) {
      seen.add(guide.href);
      result.push(guide);
      if (result.length >= 3) break;
    }
  }

  return result;
}

type Props = { tags: string[] };

export default function ArticleGuideLinks({ tags }: Props) {
  const guides = pickGuides(tags);
  if (guides.length === 0) return null;

  return (
    <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700/60">
      <p className="text-xs font-bold text-gray-500 dark:text-gray-400 mb-3 flex items-center gap-1.5">
        <span>📚</span> この記事に関連するガイド
      </p>
      <div className="flex flex-col gap-2">
        {guides.map((guide) => (
          <a
            key={guide.href}
            href={guide.href}
            className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 hover:border-blue-300 dark:hover:border-blue-700 hover:bg-blue-50/50 dark:hover:bg-blue-950/20 transition-all group"
          >
            <span className="text-base shrink-0">{guide.emoji}</span>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {guide.label}
            </span>
            <span className="ml-auto text-xs text-gray-400 dark:text-gray-500 group-hover:text-blue-500 transition-colors">→</span>
          </a>
        ))}
      </div>
    </div>
  );
}

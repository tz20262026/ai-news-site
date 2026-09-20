// 記事タグに連動した内部リンク（関連ガイドページ）

type Guide = { href: string; label: string; emoji: string };

const TAG_GUIDES: { keywords: string[]; guide: Guide }[] = [
  { keywords: ["chatgpt", "gpt", "openai", "gpt-4", "o3", "o1"], guide: { href: "/chatgpt-guide", label: "ChatGPT完全ガイド", emoji: "🤖" } },
  { keywords: ["atlas", "chatgpt atlas", "aiブラウザ", "ai内蔵ブラウザ", "browser agent"], guide: { href: "/chatgpt-atlas-guide", label: "ChatGPT Atlas使い方ガイド", emoji: "🌐" } },
  { keywords: ["claude", "anthropic"], guide: { href: "/claude-guide", label: "Claude完全ガイド", emoji: "🧠" } },
  { keywords: ["claude 料金", "claude 有料", "claude chatgpt 違い", "claude 4", "claude 3.5"], guide: { href: "/claude-ai-guide", label: "Claude AI完全ガイド(料金・ChatGPT比較)", emoji: "📘" } },
  { keywords: ["gemini", "google ai", "bard"], guide: { href: "/gemini-guide", label: "Gemini完全ガイド", emoji: "✨" } },
  { keywords: ["midjourney", "画像生成", "image generation", "dalle", "flux"], guide: { href: "/midjourney-guide", label: "Midjourney完全ガイド", emoji: "🎨" } },
  { keywords: ["nano banana", "ナノバナナ", "gemini 3 pro image"], guide: { href: "/nano-banana-guide", label: "Nano Banana Pro使い方ガイド", emoji: "🍌" } },
  { keywords: ["stable diffusion", "stablediffusion"], guide: { href: "/stable-diffusion-guide", label: "Stable Diffusionガイド", emoji: "🖼️" } },
  { keywords: ["動画生成", "video generation", "sora", "runway", "kling"], guide: { href: "/ai-video-guide", label: "AI動画生成ガイド", emoji: "🎬" } },
  { keywords: ["sora 2", "sora2", "sora プロンプト", "sora 商用利用", "text-to-video"], guide: { href: "/sora-guide", label: "Sora 2 使い方完全ガイド", emoji: "🎥" } },
  { keywords: ["perplexity"], guide: { href: "/perplexity-guide", label: "Perplexityガイド", emoji: "🔍" } },
  { keywords: ["vpn", "expressvpn"], guide: { href: "/expressvpn-guide", label: "ExpressVPN完全ガイド", emoji: "⚡" } },
  { keywords: ["vpn", "nordvpn", "セキュリティ"], guide: { href: "/nordvpn-guide", label: "NordVPN完全ガイド", emoji: "🛡️" } },
  { keywords: ["vpn", "スイカ", "suikavpn"], guide: { href: "/suikavpn-guide", label: "スイカVPN完全ガイド", emoji: "🍉" } },
  { keywords: ["wi-fi", "wifi", "公衆無線lan", "フリーwi-fi"], guide: { href: "/nordvpn-wifi-anzen", label: "公共Wi-FiでAIツールを安全に使うガイド", emoji: "📡" } },
  { keywords: ["esim", "sim", "海外sim", "海外旅行", "海外出張"], guide: { href: "/saily-esim-guide", label: "Saily eSIM完全ガイド", emoji: "📶" } },
  { keywords: ["旅行", "travel", "出張", "ワーケーション", "海外"], guide: { href: "/saily-esim-ai-tabi", label: "AI旅行×Saily eSIM活用ガイド", emoji: "✈️" } },
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
  { keywords: ["画像生成ai おすすめ", "画像生成ai 無料", "画像生成ai ランキング", "画像生成 日本語対応"], guide: { href: "/gazou-ai-guide", label: "画像生成AI おすすめ7選", emoji: "📷" } },
  { keywords: ["adobe firefly", "画像生成 商用利用", "ai画像 プロンプト コツ", "dall-e 3"], guide: { href: "/ai-image-guide", label: "AI画像生成完全ガイド", emoji: "🖌️" } },
  { keywords: ["英語", "英会話", "english", "speak", "elsa", "duolingo"], guide: { href: "/ai-english-guide", label: "AI英会話アプリ比較ガイド", emoji: "🗣️" } },
  { keywords: ["excel", "エクセル", "スプレッドシート", "spreadsheet"], guide: { href: "/ai-excel-guide", label: "Excel×AI活用ガイド", emoji: "📊" } },
  { keywords: ["wordpress", "ワードプレス", "ブログ", "blog", "レンタルサーバー", "サーバー", "アフィリエイト", "メディア運営"], guide: { href: "/xserver-wordpress-guide", label: "XServer for WordPress 完全ガイド", emoji: "🧱" } },
  { keywords: ["ai資格", "生成aiパスポート", "g検定", "e資格", "ai検定", "ai-900", "資格 勉強"], guide: { href: "/ai-shikaku-guide", label: "生成AI資格・検定 比較ガイド", emoji: "🎓" } },
  { keywords: ["ai 副業", "副業 稼ぐ", "在宅 副業", "side job", "ai 副業 始め方"], guide: { href: "/ai-side-job", label: "AIを使った副業5選", emoji: "💰" } },
  { keywords: ["仕事 奪われる", "ai失業", "リストラ", "job loss", "unemployment", "ai キャリア"], guide: { href: "/ai-job-loss-guide", label: "AIに仕事を奪われる不安への対策ガイド", emoji: "🧭" } },
];

const DIAGNOSIS_GUIDE: Guide = { href: "/ai-tool-diagnosis", label: "AIツール診断（7つの質問で最適な1本がわかる）", emoji: "🎯" };

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
  const matched = pickGuides(tags);
  const guides = matched.some((g) => g.href === DIAGNOSIS_GUIDE.href)
    ? matched
    : [...matched, DIAGNOSIS_GUIDE];

  return (
    <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700/60">
      <p className="text-xs font-bold text-gray-500 dark:text-gray-300 mb-3 flex items-center gap-1.5">
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
            <span className="ml-auto text-xs text-gray-500 dark:text-gray-300 group-hover:text-blue-500 transition-colors">→</span>
          </a>
        ))}
      </div>
    </div>
  );
}

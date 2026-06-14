import type { Metadata } from "next";
import Link from "next/link";
import AffiliateSectionAiNews from "@/components/AffiliateSectionAiNews";

export const metadata: Metadata = {
  title: "AI画像生成完全ガイド2026【Midjourney・DALL-E・Stable Diffusion比較】",
  description:
    "AI画像生成ツールの選び方・使い方を2026年版で徹底解説。Midjourney・DALL-E 3・Adobe Firefly・Stable Diffusionを比較し、プロンプトのコツ・活用事例・FAQをまとめました。",
  keywords: [
    "AI 画像生成",
    "画像生成AI 比較",
    "Midjourney",
    "DALL-E 3",
    "Stable Diffusion",
    "Adobe Firefly",
    "AI 画像 プロンプト",
    "画像生成AI 使い方",
    "AI 画像生成 無料",
    "AI 画像 商用利用",
  ],
  alternates: {
    canonical: "https://ai-news-site-wheat.vercel.app/ai-image-guide",
  },
  openGraph: {
    title: "AI画像生成完全ガイド2026【Midjourney・DALL-E・Stable Diffusion比較】",
    description:
      "Midjourney・DALL-E 3・Adobe Firefly・Stable Diffusionを徹底比較。プロンプトのコツ・活用事例まで2026年版で解説。",
    type: "article",
    locale: "ja_JP",
    url: "https://ai-news-site-wheat.vercel.app/ai-image-guide",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI画像生成完全ガイド2026【ツール比較・プロンプト術】",
    description: "Midjourney・DALL-E 3・Stable Diffusionを徹底比較。初心者から上級者まで対応。",
  },
};

/* ────────────────────────────────────────────
   データ定義
──────────────────────────────────────────── */

interface ImageTool {
  name: string;
  maker: string;
  icon: string;
  free: boolean;
  price: string;
  quality: "★★★★★" | "★★★★☆" | "★★★☆☆";
  japaneseOk: boolean;
  commercial: "可" | "条件付き";
  desc: string;
  beginnerFriendly: boolean;
}

interface PromptTip {
  category: string;
  icon: string;
  examples: string[];
}

interface UseCase {
  title: string;
  icon: string;
  desc: string;
  tool: string;
}

interface FaqItem {
  q: string;
  a: string;
}

const TOOLS: ImageTool[] = [
  {
    name: "Midjourney",
    maker: "Midjourney Inc.",
    icon: "🎨",
    free: false,
    price: "月額$10〜（Basic）",
    quality: "★★★★★",
    japaneseOk: true,
    commercial: "可",
    desc: "圧倒的な芸術性で世界トップシェア。アート・イラスト・写真風など多様なスタイルに対応。商業利用可（有料プラン）。",
    beginnerFriendly: false,
  },
  {
    name: "DALL-E 3（ChatGPT）",
    maker: "OpenAI",
    icon: "🤖",
    free: false,
    price: "ChatGPT Plus月額$20に含む",
    quality: "★★★★☆",
    japaneseOk: true,
    commercial: "可",
    desc: "日本語プロンプトへの対応が最も優秀。ChatGPTと会話しながら画像を作れるため初心者に最適。テキスト入り画像も得意。",
    beginnerFriendly: true,
  },
  {
    name: "Adobe Firefly",
    maker: "Adobe",
    icon: "🔥",
    free: true,
    price: "月25クレジット無料",
    quality: "★★★★☆",
    japaneseOk: true,
    commercial: "可",
    desc: "著作権に配慮した学習データのみ使用のため商用利用に最も安全。Photoshop・Illustratorとの統合が強力でデザイナーに最適。",
    beginnerFriendly: true,
  },
  {
    name: "Stable Diffusion",
    maker: "Stability AI（OSS）",
    icon: "⚙️",
    free: true,
    price: "ローカル環境なら完全無料",
    quality: "★★★★☆",
    japaneseOk: true,
    commercial: "条件付き",
    desc: "オープンソースでPC上に無制限インストール可能。カスタムモデルで独自スタイルを追求できるが、GPU搭載PCが必要。",
    beginnerFriendly: false,
  },
];

const PROMPT_TIPS: PromptTip[] = [
  {
    category: "主題（Subject）",
    icon: "📌",
    examples: [
      "a young woman in futuristic armor（鎧を着た若い女性）",
      "a cozy Japanese ramen shop at night（夜の居酒屋）",
      "abstract waves of light and color（光と色の抽象的な波）",
    ],
  },
  {
    category: "スタイル（Style）",
    icon: "🖌️",
    examples: [
      "digital art style / oil painting / watercolor",
      "photorealistic / cinematic / anime illustration",
      "Studio Ghibli inspired / cyberpunk aesthetic",
    ],
  },
  {
    category: "ライティング（Lighting）",
    icon: "💡",
    examples: [
      "golden hour sunlight / dramatic rim lighting",
      "neon glow / soft diffused light / studio lighting",
      "moonlit night / candlelight / volumetric fog",
    ],
  },
  {
    category: "品質修飾子（Quality）",
    icon: "⭐",
    examples: [
      "ultra-detailed, 8K resolution, masterpiece",
      "award-winning photography, sharp focus",
      "trending on ArtStation, hyper-realistic",
    ],
  },
];

const USE_CASES: UseCase[] = [
  {
    title: "ブログ・記事のアイキャッチ画像",
    icon: "📝",
    desc: "毎記事に合った高品質なアイキャッチを数秒で生成。外注費0円で記事の見栄えが大幅アップ。",
    tool: "DALL-E 3 / Adobe Firefly",
  },
  {
    title: "SNS用クリエイティブ素材",
    icon: "📱",
    desc: "Instagram・X（Twitter）用のオリジナルビジュアルを量産。バズるビジュアルが素早く作れる。",
    tool: "Midjourney",
  },
  {
    title: "ECサイト・商品画像",
    icon: "🛒",
    desc: "商品の背景差し替え・バナー作成などをAIで完結。撮影費・デザイン費を大幅削減。",
    tool: "Adobe Firefly",
  },
  {
    title: "ストックフォト販売",
    icon: "💰",
    desc: "AIで生成した画像をAdobe Stock・PIXTAに登録して継続収益化。月1〜10万円も夢ではない。",
    tool: "Midjourney / Adobe Firefly",
  },
  {
    title: "LINEスタンプ・グッズ販売",
    icon: "🎁",
    desc: "キャラクターや模様をLINEスタンプやSUZURIグッズに展開。低コストで副業スタート。",
    tool: "Midjourney / Stable Diffusion",
  },
  {
    title: "YouTubeサムネイル制作",
    icon: "🎬",
    desc: "クリック率を上げるインパクトのあるサムネイルをAIで内製化。外注コストゼロに。",
    tool: "DALL-E 3 / Midjourney",
  },
];

const FAQS: FaqItem[] = [
  {
    q: "AI画像生成ツールを無料で試したい場合はどれがおすすめですか？",
    a: "まずAdobe Fireflyがおすすめです。月25クレジットが完全無料で、日本語対応・商用利用可・ブラウザだけで動作します。PCスペックが高い方はStable Diffusionをローカルにインストールして無制限生成も可能です。",
  },
  {
    q: "Midjourneyの使い方がわかりません。初心者でも使えますか？",
    a: "MidjourneyはDiscordを通じて操作するため、初心者にはやや難しいです。より直感的に始めたい場合はChatGPT Plus（DALL-E 3）かAdobe Fireflyがおすすめです。慣れてきたら品質の高いMidjourneyに移行する流れが王道です。",
  },
  {
    q: "生成した画像は商用利用できますか？",
    a: "ツールによって異なります。Midjourney（有料プラン）・DALL-E 3・Adobe Fireflyは商用利用可能です。特にAdobe Fireflyは著作権に最も配慮した設計のため、企業の商業プロジェクトに最適です。各ツールの最新利用規約を必ず確認してください。",
  },
  {
    q: "Stable Diffusionを動かすのに必要なPCスペックは？",
    a: "NVIDIA製GPU（VRAM 6GB以上推奨、8GB以上が快適）、RAM 16GB以上、ストレージ20GB以上の空き容量が目安です。スペックが足りない場合はGoogle Colabでクラウド実行する方法もあります。",
  },
  {
    q: "日本語でプロンプトを書いても大丈夫ですか？",
    a: "DALL-E 3とAdobe Fireflyは日本語対応度が高く、日本語プロンプトでも精度よく生成できます。MidjourneyとStable Diffusionは英語プロンプトの方が精度が高いため、ChatGPTに「英語の画像生成プロンプトに変換して」と頼む方法が効果的です。",
  },
];

/* ────────────────────────────────────────────
   JSON-LD
──────────────────────────────────────────── */

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "AI画像生成完全ガイド2026【Midjourney・DALL-E・Stable Diffusion比較】",
  description:
    "主要AI画像生成ツールを徹底比較。プロンプトのコツ・活用事例・FAQを2026年版で解説。",
  datePublished: "2026-06-14",
  dateModified: "2026-06-14",
  author: { "@type": "Organization", name: "AI JAPAN" },
  publisher: { "@type": "Organization", name: "AI JAPAN" },
};

/* ────────────────────────────────────────────
   コンポーネント
──────────────────────────────────────────── */

export default function AiImageGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <main className="min-h-screen bg-gray-950 text-gray-200">

        {/* ── ヒーロー ── */}
        <section className="bg-gradient-to-b from-slate-900 to-gray-950 py-14 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-xs font-bold text-purple-400 uppercase tracking-widest bg-purple-400/10 px-4 py-1.5 rounded-full mb-4">
              2026年版 最新ガイド
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight mb-4">
              AI画像生成完全ガイド2026
              <br />
              <span className="text-purple-400">
                【Midjourney・DALL-E・Stable Diffusion比較】
              </span>
            </h1>
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              主要AI画像生成ツールを徹底比較。プロンプトの書き方・活用事例・ビジネス副業への応用まで2026年版で完全解説します。
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                { href: "#tools", label: "ツール比較" },
                { href: "#prompt", label: "プロンプト術" },
                { href: "#usecases", label: "活用事例" },
                { href: "#faq", label: "FAQ" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-xs font-bold px-4 py-2 rounded-full bg-slate-800 text-purple-300 border border-slate-700 hover:bg-slate-700 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── AI画像生成とは ── */}
        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-black text-white mb-5 flex items-center gap-3">
              <span className="w-1.5 h-7 bg-purple-500 rounded-full flex-shrink-0" />
              AI画像生成とは？
            </h2>
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                AI画像生成とは、テキスト（プロンプト）を入力するだけで、AIが自動的に画像を生成する技術です。
                2022年以降に急速に普及し、2026年現在では個人から企業まで幅広く活用されています。
              </p>
              <div className="grid sm:grid-cols-3 gap-3">
                {[
                  { label: "テキストから画像", desc: "文章を入力するだけで高品質な画像を自動生成", icon: "✍️" },
                  { label: "スタイル自由自在", desc: "写真風・イラスト・アート・アニメなど多様なスタイル対応", icon: "🎨" },
                  { label: "商用利用可能", desc: "主要ツールは商用利用OKで副業・ビジネスに活用可能", icon: "💼" },
                ].map((item) => (
                  <div key={item.label} className="bg-slate-800 rounded-xl p-4 text-center">
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <p className="text-white font-bold text-xs mb-1">{item.label}</p>
                    <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── ツール比較 ── */}
        <section id="tools" className="py-14 px-4 bg-slate-950">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
                主要AI画像生成ツール徹底比較
              </h2>
              <p className="text-gray-400 text-sm">
                品質・価格・使いやすさ・商用利用で選ぶ
              </p>
            </div>

            <div className="flex flex-col gap-5">
              {TOOLS.map((tool, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-slate-800 bg-slate-900 p-5 sm:p-6"
                >
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="text-2xl">{tool.icon}</span>
                    <div>
                      <h3 className="text-white font-black text-base">{tool.name}</h3>
                      <p className="text-gray-500 text-xs">{tool.maker}</p>
                    </div>
                    {tool.free && (
                      <span className="text-xs font-bold bg-green-500/20 text-green-300 border border-green-500/30 px-2.5 py-1 rounded-full">
                        無料あり
                      </span>
                    )}
                    {tool.beginnerFriendly && (
                      <span className="text-xs font-bold bg-blue-500/20 text-blue-300 border border-blue-500/30 px-2.5 py-1 rounded-full">
                        初心者向け
                      </span>
                    )}
                    <span
                      className={`text-xs font-bold px-2.5 py-1 rounded-full border ${
                        tool.commercial === "可"
                          ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/30"
                          : "bg-amber-500/20 text-amber-300 border-amber-500/30"
                      }`}
                    >
                      商用{tool.commercial}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 mb-3">
                    <span className="text-yellow-400 text-sm">{tool.quality}</span>
                    <span className="text-gray-500 text-xs ml-1">/ 画質クオリティ</span>
                  </div>

                  <p className="text-gray-300 text-sm leading-relaxed mb-3">{tool.desc}</p>

                  <div className="flex flex-wrap gap-3 text-xs">
                    <div className="bg-slate-800 rounded-lg px-3 py-2">
                      <span className="text-gray-500 block mb-0.5">💴 料金</span>
                      <span className="text-gray-200">{tool.price}</span>
                    </div>
                    <div className="bg-slate-800 rounded-lg px-3 py-2">
                      <span className="text-gray-500 block mb-0.5">🇯🇵 日本語</span>
                      <span className="text-gray-200">{tool.japaneseOk ? "対応" : "一部対応"}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* まとめ表 */}
            <div className="mt-8 rounded-2xl border border-slate-800 overflow-hidden">
              <div className="grid grid-cols-4 bg-slate-800 px-4 py-3 text-xs font-bold text-gray-300">
                <div>ツール</div>
                <div className="text-center">無料</div>
                <div className="text-center">商用利用</div>
                <div className="text-center hidden sm:block">初心者向け</div>
              </div>
              {TOOLS.map((tool, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-4 px-4 py-3 border-t border-slate-800 text-xs ${
                    i % 2 === 0 ? "bg-slate-900" : "bg-slate-800/30"
                  }`}
                >
                  <div className="text-white font-bold">{tool.name}</div>
                  <div className="text-center">
                    <span className={tool.free ? "text-green-400" : "text-gray-500"}>
                      {tool.free ? "○" : "×"}
                    </span>
                  </div>
                  <div className="text-center">
                    <span className={tool.commercial === "可" ? "text-green-400" : "text-amber-400"}>
                      {tool.commercial}
                    </span>
                  </div>
                  <div className="text-center hidden sm:block">
                    <span className={tool.beginnerFriendly ? "text-green-400" : "text-gray-500"}>
                      {tool.beginnerFriendly ? "○" : "△"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── プロンプトの書き方 ── */}
        <section id="prompt" className="py-14 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
                プロンプトの書き方・コツ
              </h2>
              <p className="text-gray-400 text-sm">
                4つの要素を組み合わせて高品質な画像を生成しよう
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              {PROMPT_TIPS.map((tip, i) => (
                <div key={i} className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
                  <h3 className="text-white font-black text-sm mb-3 flex items-center gap-2">
                    <span>{tip.icon}</span>
                    {tip.category}
                  </h3>
                  <ul className="space-y-2">
                    {tip.examples.map((ex, j) => (
                      <li key={j} className="bg-slate-800 rounded-lg px-3 py-2 text-xs text-gray-300 font-mono leading-relaxed">
                        {ex}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl bg-purple-500/10 border border-purple-500/30 p-5">
              <p className="text-sm text-gray-300 leading-relaxed">
                <span className="font-black text-purple-300">プロ技：</span>
                　英語が苦手な場合はChatGPTに「この内容を画像生成AI向けの英語プロンプトに変換して」と依頼する方法が効果的です。
                Midjourneyでは末尾に <span className="text-purple-300 font-bold">--v 6.1 --ar 16:9</span> を追加すると最新版・横長で生成できます。
              </p>
            </div>
          </div>
        </section>

        {/* ── 活用事例 ── */}
        <section id="usecases" className="py-14 px-4 bg-slate-950">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
                AI画像生成の活用事例6選
              </h2>
              <p className="text-gray-400 text-sm">
                個人・ビジネスで使える実践的な活用法
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {USE_CASES.map((uc, i) => (
                <div key={i} className="rounded-2xl border border-slate-800 bg-slate-900 p-5 flex flex-col gap-3">
                  <div className="text-2xl">{uc.icon}</div>
                  <h3 className="text-white font-black text-sm">{uc.title}</h3>
                  <p className="text-gray-300 text-xs leading-relaxed flex-1">{uc.desc}</p>
                  <div className="mt-auto">
                    <span className="text-xs px-2.5 py-1 rounded-full bg-slate-800 text-purple-300 border border-slate-700">
                      おすすめ：{uc.tool}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 関連ガイドCTA ── */}
        <section className="py-10 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="rounded-2xl bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/30 p-6 sm:p-8 text-center">
              <p className="text-xs font-bold text-purple-400 uppercase tracking-widest mb-3">関連ガイド</p>
              <h2 className="text-xl sm:text-2xl font-black text-white mb-3">
                AI動画生成ツールも学ぼう
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                画像生成の次は動画生成AI。Sora・RunwayML・Pikなど最新ツールを活用して
                コンテンツ制作をさらにレベルアップしましょう。
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/ai-video-guide"
                  className="inline-flex items-center justify-center gap-2 bg-purple-500 hover:bg-purple-400 text-white font-black text-sm px-6 py-3 rounded-xl transition-colors"
                >
                  AI動画生成ガイドを見る →
                </Link>
                <Link
                  href="/midjourney-guide"
                  className="inline-flex items-center justify-center gap-2 bg-slate-700 hover:bg-slate-600 text-white font-black text-sm px-6 py-3 rounded-xl transition-colors"
                >
                  Midjourney完全ガイド →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section id="faq" className="py-14 px-4 bg-slate-950">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
                よくある質問（FAQ）
              </h2>
              <p className="text-gray-400 text-sm">AI画像生成の疑問をまとめて解決</p>
            </div>

            <div className="flex flex-col gap-4">
              {FAQS.map((faq, i) => (
                <div key={i} className="rounded-2xl border border-slate-800 bg-slate-900 p-5 sm:p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center font-black text-xs border border-purple-500/30 mt-0.5">
                      Q
                    </span>
                    <h3 className="font-black text-white text-sm sm:text-base leading-snug">
                      {faq.q}
                    </h3>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-black text-xs border border-emerald-500/30 mt-0.5">
                      A
                    </span>
                    <p className="text-gray-300 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── アフィリエイト ── */}
        <AffiliateSectionAiNews />
      </main>
    </>
  );
}

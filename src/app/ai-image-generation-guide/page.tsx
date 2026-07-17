import type { Metadata } from "next";
import Link from "next/link";
import AffiliateSectionAiNews from "@/components/AffiliateSectionAiNews";

export const metadata: Metadata = {
  title:
    "AI画像生成完全ガイド2026年【Midjourney・DALL-E・Stable Diffusion比較・使い方】",
  description:
    "AI画像生成ツールを徹底比較。Midjourney・DALL-E 3・Stable Diffusion・Adobe Fireflyの特徴・価格・プロンプトの書き方・商用利用可否・副業活用法を2026年版で完全解説。",
  keywords: [
    "AI 画像生成",
    "Midjourney 使い方",
    "DALL-E 3",
    "Stable Diffusion",
    "Adobe Firefly",
    "画像生成AI 比較",
    "AI 画像生成 プロンプト",
    "AI 画像 商用利用",
    "AI 画像 副業",
    "画像生成AI 無料",
  ],
  alternates: {
    canonical: "https://ai-news-site-wheat.vercel.app/ai-image-generation-guide",
  },
  openGraph: {
    title: "AI画像生成完全ガイド2026年【Midjourney・DALL-E・Stable Diffusion比較・使い方】",
    description:
      "Midjourney・DALL-E 3・Stable Diffusion・Adobe Fireflyを徹底比較。プロンプトの書き方・商用利用・副業活用法を2026年版で完全解説。",
    type: "article",
    locale: "ja_JP",
    url: "https://ai-news-site-wheat.vercel.app/ai-image-generation-guide",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI画像生成完全ガイド2026年【Midjourney・DALL-E・Stable Diffusion比較】",
    description:
      "主要AI画像生成ツールを徹底比較。プロンプトのコツ・商用利用・副業活用まで完全解説。",
  },
};

/* ────────────────────────────────────────────
   データ定義
──────────────────────────────────────────── */

type PricePlan = "無料あり" | "有料のみ" | "完全無料";

interface ImageAiTool {
  id: string;
  rank: number;
  name: string;
  developer: string;
  pricePlan: PricePlan;
  priceDetail: string;
  qualityScore: number;
  japaneseSupport: boolean;
  commercialUse: "可" | "条件付き" | "規約確認要";
  description: string;
  pros: string[];
  cons: string[];
  bestFor: string;
  accentColor: string;
}

interface PromptSection {
  id: string;
  title: string;
  tips: { label: string; example: string }[];
}

interface BusinessUseCase {
  id: string;
  title: string;
  description: string;
  earnings: string;
  tools: string[];
}

interface FAQ {
  question: string;
  answer: string;
}

const IMAGE_AI_TOOLS: ImageAiTool[] = [
  {
    id: "midjourney",
    rank: 1,
    name: "Midjourney",
    developer: "Midjourney Inc.",
    pricePlan: "有料のみ",
    priceDetail: "月額$10〜（Basic）・$30〜（Standard）",
    qualityScore: 5,
    japaneseSupport: true,
    commercialUse: "可",
    description:
      "世界最高峰の画像クオリティを誇るAI画像生成ツール。アート・イラスト・写真風・ファンタジーなど多様なスタイルに対応。2026年現在、商業用途でも最も広く使われているプロ向けサービス。",
    pros: [
      "圧倒的な芸術性・画質の高さ",
      "プロンプトの自由度が非常に高い",
      "活発なコミュニティで学びやすい",
      "商用利用可（有料プラン）",
    ],
    cons: [
      "月$10〜の有料プランのみ",
      "主にDiscordで操作する独特のUI",
      "英語プロンプトの方が精度が高い",
    ],
    bestFor: "アート制作・商業イラスト・高品質SNS素材",
    accentColor: "text-yellow-400",
  },
  {
    id: "dalle3",
    rank: 2,
    name: "DALL-E 3（ChatGPT）",
    developer: "OpenAI",
    pricePlan: "無料あり",
    priceDetail: "ChatGPT Plus月額$20で利用可",
    qualityScore: 4,
    japaneseSupport: true,
    commercialUse: "可",
    description:
      "OpenAIが開発したAI画像生成エンジン。ChatGPT Plusから直接使えるため、テキストで詳細な指示を出しながら画像を生成・修正できる。日本語プロンプトへの対応度が最も高い。",
    pros: [
      "日本語プロンプトが最も得意",
      "ChatGPTとの連携で指示が直感的",
      "テキスト入り画像も高精度で生成",
      "商用利用可",
    ],
    cons: [
      "ChatGPT Plus契約（月$20）が必要",
      "1日の生成枚数に上限あり",
      "Midjourneyより芸術的な表現は劣る",
    ],
    bestFor: "ブログ用アイキャッチ・プレゼン資料・SNS投稿画像",
    accentColor: "text-green-400",
  },
  {
    id: "stable-diffusion",
    rank: 3,
    name: "Stable Diffusion",
    developer: "Stability AI（オープンソース）",
    pricePlan: "完全無料",
    priceDetail: "ローカル環境ならランニングコスト0円",
    qualityScore: 4,
    japaneseSupport: true,
    commercialUse: "条件付き",
    description:
      "オープンソースで公開されているAI画像生成モデル。PCにインストールして完全無料・無制限で使える。カスタムモデルの追加で多様なスタイルに対応でき、最高レベルのカスタマイズ性を誇る。",
    pros: [
      "ローカル環境では完全無料・無制限",
      "カスタムモデルで多様なスタイル表現",
      "プライバシー保護（データが外部に出ない）",
      "コミュニティが非常に活発",
    ],
    cons: [
      "GPU搭載PCが必要（VRAM 6GB以上推奨）",
      "初期設定がやや複雑",
      "最高品質を出すには学習コストが高い",
    ],
    bestFor: "大量生成・独自スタイル確立・プライバシー重視の用途",
    accentColor: "text-blue-400",
  },
  {
    id: "adobe-firefly",
    rank: 4,
    name: "Adobe Firefly",
    developer: "Adobe",
    pricePlan: "無料あり",
    priceDetail: "月25クレジット無料・Creative Cloud連携",
    qualityScore: 4,
    japaneseSupport: true,
    commercialUse: "可",
    description:
      "Adobeが開発した商用利用に安全な設計の画像生成AI。著作権配慮の学習データのみ使用しているため、企業の商用プロジェクトに安心して使える。PhotoshopやIllustratorとの統合が強力。",
    pros: [
      "商用利用に最も安全な設計",
      "Photoshop・Illustratorとの深い統合",
      "高品質な写真風・リアル系画像",
      "日本語プロンプト対応",
    ],
    cons: [
      "月25クレジット（無料）は少なめ",
      "リアルな人物生成には制限あり",
      "Creative Cloud契約でフル活用",
    ],
    bestFor: "商業デザイン・Web素材・マーケティング資料",
    accentColor: "text-red-400",
  },
];

const PROMPT_SECTIONS: PromptSection[] = [
  {
    id: "basic",
    title: "プロンプトの基本構成",
    tips: [
      {
        label: "主題（Subject）",
        example: "a cyberpunk female warrior / サイバーパンクの女性戦士",
      },
      {
        label: "スタイル（Style）",
        example: "digital art style, oil painting style, photorealistic",
      },
      {
        label: "雰囲気・ライティング（Mood/Lighting）",
        example: "golden hour lighting, moody atmosphere, neon lights",
      },
      {
        label: "品質修飾子（Quality Modifiers）",
        example: "ultra-detailed, 8K resolution, award-winning, masterpiece",
      },
    ],
  },
  {
    id: "advanced",
    title: "上級者向けテクニック",
    tips: [
      {
        label: "カメラ設定を指定",
        example: "shot with Canon 5D, 85mm lens, f/1.8 bokeh, close-up portrait",
      },
      {
        label: "アーティストスタイルを参照",
        example: "in the style of Makoto Shinkai / inspired by Studio Ghibli aesthetics",
      },
      {
        label: "ネガティブプロンプト（SD向け）",
        example: "negative prompt: blurry, low quality, distorted, extra limbs, watermark",
      },
      {
        label: "アスペクト比を指定（Midjourney）",
        example: "--ar 16:9（横長）/ --ar 9:16（縦長・スマホ向け）/ --ar 1:1（正方形）",
      },
    ],
  },
];

const BUSINESS_USE_CASES: BusinessUseCase[] = [
  {
    id: "stock",
    title: "ストックフォト販売",
    description:
      "Adobe Stock・Shutterstock・PIXTAなどのストックフォトサイトにAI生成画像を投稿して販売。1枚あたり数十〜数百円の収益が継続的に発生する。",
    earnings: "月1〜10万円（枚数と質次第）",
    tools: ["Midjourney", "Adobe Firefly"],
  },
  {
    id: "design",
    title: "バナー・SNS素材受注",
    description:
      "クラウドソーシングでSNS用アイキャッチ・バナー・サムネイルの制作を受注。AI生成ベースでCanvaで仕上げると高速・高品質に納品できる。",
    earnings: "1件3,000〜30,000円",
    tools: ["DALL-E 3", "Midjourney"],
  },
  {
    id: "print",
    title: "グッズ・LINEスタンプ販売",
    description:
      "AI生成キャラクターや模様をTシャツ・マグカップ・LINEスタンプに転用して販売。SUZURI・Booth・LINEクリエイターズマーケットで展開できる。",
    earnings: "月5,000〜5万円",
    tools: ["Midjourney", "Stable Diffusion"],
  },
  {
    id: "content",
    title: "ブログ・YouTube用素材制作",
    description:
      "自分のブログやYouTubeのサムネイル・アイキャッチを内製化してコスト削減・差別化。外注費を削減しながらオリジナリティを高められる。",
    earnings: "外注費削減（月数万円相当）",
    tools: ["DALL-E 3", "Adobe Firefly"],
  },
];

const FAQS: FAQ[] = [
  {
    question: "AI画像生成ツールは完全無料で使えますか？",
    answer:
      "はい、完全無料で使えるツールはいくつかあります。Stable Diffusionはローカル環境にインストールすれば生成枚数無制限で無料です（GPU搭載PCが必要）。Adobe Fireflyは月25クレジット無料。Google ImageFX（Googleアカウントがあればすぐ使える）。Leonardo.AI（毎日150クレジット無料）なども使えます。高品質を重視するなら有料のMidjourney（月$10〜）やChatGPT Plus（月$20）が圧倒的におすすめです。",
  },
  {
    question: "AI画像生成の著作権・商用利用はどうなりますか？",
    answer:
      "ツールによって異なります。Midjourney（有料プラン）・DALL-E 3・Adobe Fireflyは商用利用が可能です。特にAdobe Fireflyは著作権に配慮した学習データのみを使用しているため、企業の商業プロジェクトに最も安全です。Stable Diffusionは使用するモデルによって商用利用可否が異なります。日本では2026年現在、AI生成画像への著作権は原則発生しないとされていますが、各サービスの利用規約を必ず確認してください。",
  },
  {
    question: "MidjourneyとDALL-E 3はどちらが良いですか？",
    answer:
      "用途によって異なります。芸術性・クオリティを最優先するならMidjourney。日本語で直感的に指示したい・ChatGPTとセットで使いたい・テキスト入り画像を作りたいならDALL-E 3がおすすめです。Midjourneyは月$10〜の有料のみ。DALL-E 3はChatGPT Plus（月$20）に含まれています。両方試せる場合はMidjourneyのBasicプランから始めるのがおすすめです。",
  },
  {
    question: "プロンプトはどの言語で書くべきですか？日本語でも使えますか？",
    answer:
      "基本的には英語プロンプトの方が精度が高いです。これはほとんどの画像生成AIが英語データで学習しているためです。ただし、DALL-E 3とAdobe Fireflyは日本語プロンプトへの対応度が高く、日本語でもかなり意図通りの画像が生成されます。英語が苦手な場合はChatGPTに「この内容を画像生成AI向けの英語プロンプトに変換して」と依頼する方法が効果的です。",
  },
  {
    question: "Stable DiffusionはどんなPCスペックが必要ですか？",
    answer:
      "Stable Diffusionをローカルで動かすには、NVIDIA製GPU（VRAM 6GB以上推奨・8GB以上なら快適）、RAM 16GB以上、ストレージ20GB以上の空き容量が必要です。VRAM 4GBでも一部モデルは動作しますが非常に遅いです。PCスペックが足りない場合はGoogle Colab（クラウド）でStable Diffusionを動かす方法もありますが、Googleアカウントが必要で無料枠に制限があります。",
  },
];

/* ────────────────────────────────────────────
   JSON-LD 生成
──────────────────────────────────────────── */

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const rankBadgeColors = [
  "bg-yellow-400 text-black",
  "bg-gray-300 text-black",
  "bg-amber-600 text-white",
  "bg-slate-600 text-white",
];

const commercialBadge: Record<string, string> = {
  可: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  条件付き: "bg-amber-500/15 text-amber-400 border-amber-500/30",
  規約確認要: "bg-red-500/15 text-red-400 border-red-500/30",
};

/* ────────────────────────────────────────────
   ページコンポーネント
──────────────────────────────────────────── */

export default function AiImageGenerationGuidePage() {
  return (
    <>
      {/* FAQ JSON-LD 構造化データ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main className="min-h-screen bg-gray-950 text-gray-200">
        {/* ── ヒーローセクション ── */}
        <section className="bg-gradient-to-b from-slate-900 to-gray-950 py-14 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-xs font-bold text-purple-400 uppercase tracking-widest bg-purple-400/10 px-4 py-1.5 rounded-full mb-4">
              2026年版 最新情報
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight mb-4">
              AI画像生成完全ガイド2026年
              <br />
              <span className="text-purple-400">
                【Midjourney・DALL-E・Stable Diffusion比較・使い方】
              </span>
            </h1>
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              主要AI画像生成ツールを徹底比較。プロンプトの書き方・商用利用の可否・ビジネス副業での活用法まで2026年版で完全解説。
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                { href: "#tools", label: "ツール比較" },
                { href: "#prompt", label: "プロンプト術" },
                { href: "#commercial", label: "商用利用" },
                { href: "#business", label: "副業活用" },
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

        {/* ── ツール比較 ── */}
        <section id="tools" className="py-14 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
                主要AI画像生成ツール徹底比較
              </h2>
              <p className="text-gray-300 text-sm">
                品質・価格・商用利用・日本語対応の観点で選ぶ
              </p>
            </div>

            <div className="flex flex-col gap-6">
              {IMAGE_AI_TOOLS.map((tool) => (
                <div
                  key={tool.id}
                  className="rounded-2xl border border-slate-800 bg-slate-900 p-5 sm:p-6"
                >
                  {/* ヘッダー */}
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-black text-sm flex-shrink-0 ${
                        rankBadgeColors[tool.rank - 1] ?? "bg-slate-700 text-gray-300"
                      }`}
                    >
                      {tool.rank}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className={`font-black text-lg ${tool.accentColor}`}>{tool.name}</h3>
                        <span className="text-xs text-gray-300">{tool.developer}</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <span
                          className={`text-xs font-bold px-2.5 py-1 rounded-full border ${
                            tool.pricePlan === "完全無料"
                              ? "bg-emerald-500/15 text-emerald-400 border-emerald-500/30"
                              : tool.pricePlan === "無料あり"
                              ? "bg-blue-500/15 text-blue-400 border-blue-500/30"
                              : "bg-orange-500/15 text-orange-400 border-orange-500/30"
                          }`}
                        >
                          {tool.pricePlan}
                        </span>
                        <span
                          className={`text-xs font-bold px-2.5 py-1 rounded-full border ${commercialBadge[tool.commercialUse]}`}
                        >
                          商用利用{tool.commercialUse}
                        </span>
                        {tool.japaneseSupport && (
                          <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-cyan-500/15 text-cyan-400 border border-cyan-500/30">
                            日本語対応
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* 星評価 */}
                  <div className="flex items-center gap-1 mb-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span
                        key={i}
                        className={`text-base ${i < tool.qualityScore ? "text-yellow-400" : "text-slate-700"}`}
                      >
                        ★
                      </span>
                    ))}
                    <span className="text-xs text-gray-300 ml-1">画質・クオリティ</span>
                  </div>

                  <p className="text-gray-300 text-sm leading-relaxed mb-4">{tool.description}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                    <div>
                      <p className="text-emerald-400 text-xs font-bold mb-2">メリット</p>
                      <ul className="space-y-1">
                        {tool.pros.map((pro) => (
                          <li key={pro} className="text-gray-300 text-xs flex gap-1.5">
                            <span className="text-emerald-500 flex-shrink-0">+</span>
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-red-400 text-xs font-bold mb-2">デメリット</p>
                      <ul className="space-y-1">
                        {tool.cons.map((con) => (
                          <li key={con} className="text-gray-300 text-xs flex gap-1.5">
                            <span className="text-red-500 flex-shrink-0">-</span>
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="rounded-xl bg-slate-800 border border-slate-700 px-4 py-2.5">
                    <span className="text-purple-400 text-xs font-bold">向いている用途: </span>
                    <span className="text-gray-300 text-xs">{tool.bestFor}</span>
                  </div>

                  <p className="text-xs text-gray-300 mt-2">{tool.priceDetail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── プロンプトの書き方 ── */}
        <section id="prompt" className="py-14 px-4 bg-slate-950">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
                プロンプトの書き方・コツ
              </h2>
              <p className="text-gray-300 text-sm">
                同じアイデアでも書き方次第で出力品質が劇的に変わる
              </p>
            </div>

            <div className="flex flex-col gap-8">
              {PROMPT_SECTIONS.map((section) => (
                <div key={section.id}>
                  <h3 className="text-lg font-black text-white mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-purple-500 rounded-full flex-shrink-0" />
                    {section.title}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {section.tips.map((tip) => (
                      <div
                        key={tip.label}
                        className="rounded-xl border border-slate-800 bg-slate-900 p-4"
                      >
                        <p className="text-purple-300 text-xs font-bold mb-2">{tip.label}</p>
                        <p className="text-gray-300 text-xs leading-relaxed font-mono bg-slate-800 rounded-lg px-3 py-2">
                          {tip.example}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl bg-purple-500/10 border border-purple-500/30 p-5">
              <p className="text-sm text-gray-300 leading-relaxed">
                <span className="font-black text-purple-300">プロンプト作成のコツ：</span>
                　まず「主題＋スタイル＋品質修飾子」の3要素から始めてください。英語が苦手な場合は、ChatGPTに「この内容を画像生成AI向けの英語プロンプトに変換して」と頼む方法が効果的です。Midjourneyでは
                <span className="text-purple-300 font-bold">--v 6.1</span>
                （最新バージョン指定）を末尾に追加すると最高品質が出やすいです。
              </p>
            </div>
          </div>
        </section>

        {/* ── 商用利用まとめ ── */}
        <section id="commercial" className="py-14 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
                商用利用の可否まとめ
              </h2>
              <p className="text-gray-300 text-sm">
                ビジネス・副業で使う前に必ず確認
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 overflow-hidden">
              <div className="grid grid-cols-4 bg-slate-800 px-4 py-3 text-xs font-bold text-gray-300">
                <div>ツール</div>
                <div className="text-center">商用利用</div>
                <div className="text-center">プラン条件</div>
                <div className="text-center hidden sm:block">特記事項</div>
              </div>
              {[
                { tool: "Midjourney", status: "可", plan: "有料プランのみ", note: "Basic $10以上" },
                { tool: "DALL-E 3", status: "可", plan: "ChatGPT Plus", note: "OpenAI規約準拠" },
                { tool: "Adobe Firefly", status: "可", plan: "無料枠含む", note: "最も安全な設計" },
                { tool: "Stable Diffusion", status: "条件付き", plan: "モデル依存", note: "使用モデルで確認" },
                { tool: "Leonardo.AI", status: "条件付き", plan: "有料プランを推奨", note: "規約を要確認" },
                { tool: "Canva AI", status: "可", plan: "Pro含む各プラン", note: "Canva規約準拠" },
              ].map((row, i) => (
                <div
                  key={row.tool}
                  className={`grid grid-cols-4 px-4 py-3 border-t border-slate-800 text-xs ${
                    i % 2 === 0 ? "bg-slate-900" : "bg-slate-800/30"
                  }`}
                >
                  <div className="text-white font-bold">{row.tool}</div>
                  <div className="text-center">
                    <span
                      className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                        row.status === "可"
                          ? "bg-emerald-500/20 text-emerald-400"
                          : "bg-amber-500/20 text-amber-400"
                      }`}
                    >
                      {row.status}
                    </span>
                  </div>
                  <div className="text-center text-gray-300">{row.plan}</div>
                  <div className="text-center text-gray-300 hidden sm:block">{row.note}</div>
                </div>
              ))}
            </div>

            <p className="mt-4 text-xs text-gray-300 leading-relaxed">
              ※各ツールの利用規約は随時更新されます。商用利用前に必ず公式サイトの最新規約を確認してください。
            </p>
          </div>
        </section>

        {/* ── ビジネス・副業活用 ── */}
        <section id="business" className="py-14 px-4 bg-slate-950">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
                ビジネス・副業での活用法
              </h2>
              <p className="text-gray-300 text-sm">
                AI画像生成を収益につなげる4つの方法
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {BUSINESS_USE_CASES.map((uc) => (
                <div
                  key={uc.id}
                  className="rounded-2xl border border-slate-800 bg-slate-900 p-5 flex flex-col gap-3"
                >
                  <h3 className="font-black text-white text-base">{uc.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{uc.description}</p>
                  <div className="flex items-center gap-2 mt-auto">
                    <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                      収益目安：{uc.earnings}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {uc.tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-xs px-2.5 py-1 rounded-full bg-slate-800 text-purple-300 border border-slate-700"
                      >
                        {tool}
                      </span>
                    ))}
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
              <p className="text-xs font-bold text-purple-400 uppercase tracking-widest mb-3">
                関連ガイド
              </p>
              <h2 className="text-xl sm:text-2xl font-black text-white mb-3">
                テキストAIツールも合わせて活用しよう
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                画像生成AIと組み合わせると最強。ChatGPT・Claude・GeminiなどのテキストAIも使いこなして収益をさらに拡大しましょう。
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/chatgpt-guide"
                  className="inline-flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black text-sm px-6 py-3 rounded-xl transition-colors"
                >
                  ChatGPT完全ガイド →
                </Link>
                <Link
                  href="/claude-ai-guide"
                  className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-black text-sm px-6 py-3 rounded-xl transition-colors"
                >
                  Claude AIガイド →
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
              <p className="text-gray-300 text-sm">
                AI画像生成の疑問をまとめて解決
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {FAQS.map((faq, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-800 bg-slate-900 p-5 sm:p-6"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center font-black text-xs border border-purple-500/30 mt-0.5">
                      Q
                    </span>
                    <h3 className="font-black text-white text-sm sm:text-base leading-snug">
                      {faq.question}
                    </h3>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-black text-xs border border-emerald-500/30 mt-0.5">
                      A
                    </span>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── アフィリエイトセクション ── */}
        <AffiliateSectionAiNews />
      </main>
    </>
  );
}

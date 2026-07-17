import type { Metadata } from "next";
import AffiliateSectionAiNews from "@/components/AffiliateSectionAiNews";

export const metadata: Metadata = {
  title: "画像生成AI おすすめ7選2026年版【無料・日本語対応・副業に使える】",
  description:
    "画像生成AIのおすすめを2026年版で徹底比較。Midjourney・DALL-E・Stable Diffusionなど無料・有料サービスの特徴・使い方・副業活用法を完全解説。",
  alternates: {
    canonical: "https://ai-news-site-wheat.vercel.app/gazou-ai-guide",
  },
  openGraph: {
    title: "画像生成AI おすすめ7選2026年版【無料・日本語対応】",
    description: "Midjourney・DALL-E・Stable Diffusionを徹底比較。無料から始められる画像生成AIガイド。",
    type: "article",
    locale: "ja_JP",
    url: "https://ai-news-site-wheat.vercel.app/gazou-ai-guide",
  },
  twitter: {
    card: "summary_large_image",
    title: "画像生成AI おすすめ7選2026年版",
    description: "無料から使える画像生成AIを徹底比較。副業・仕事活用法も解説。",
  },
};

type Plan = "無料あり" | "有料のみ" | "無料（制限あり）";

interface AiTool {
  rank: number;
  name: string;
  plan: Plan;
  quality: number;
  japanese: boolean;
  description: string;
  pros: string[];
  cons: string[];
  useCase: string;
}

interface FaqItem {
  q: string;
  a: string;
}

const AI_TOOLS: AiTool[] = [
  {
    rank: 1,
    name: "Midjourney",
    plan: "有料のみ",
    quality: 5,
    japanese: true,
    description:
      "世界最高峰の画像クオリティ。アート・イラスト・写真風など多様なスタイルに対応。Discordで使う独特なUIが特徴。",
    pros: ["圧倒的な画質・芸術性", "プロンプトの自由度が高い", "コミュニティが活発"],
    cons: ["月20ドル〜の有料のみ", "Discordが必須", "日本語プロンプトは精度が落ちることも"],
    useCase: "アート作品・商業イラスト・SNS素材",
  },
  {
    rank: 2,
    name: "DALL-E 3（ChatGPT）",
    plan: "無料あり",
    quality: 4,
    japanese: true,
    description:
      "OpenAIが開発。ChatGPT Plus（月20ドル）で利用可能。日本語プロンプトに強く、指示通りの画像を生成しやすい。",
    pros: ["日本語プロンプトが非常に得意", "ChatGPTと連携で使いやすい", "テキスト入り画像も生成可能"],
    cons: ["ChatGPT Plus契約が必要", "1日の生成枚数に上限あり", "Midjourneyより芸術性は低め"],
    useCase: "ブログ用アイキャッチ・SNS投稿・プレゼン資料",
  },
  {
    rank: 3,
    name: "Adobe Firefly",
    plan: "無料あり",
    quality: 4,
    japanese: true,
    description:
      "Adobe製の画像生成AI。商用利用に適した著作権配慮設計。Photoshopに統合されており、プロのデザイナーにも人気。",
    pros: ["商用利用に安全な設計", "Photoshopと連携", "高品質な写真風画像"],
    cons: ["月25クレジット（無料）は少ない", "リアルな人物生成は制限あり"],
    useCase: "商用デザイン・Web素材・マーケティング",
  },
  {
    rank: 4,
    name: "Stable Diffusion（Automatic1111）",
    plan: "無料（制限あり）",
    quality: 4,
    japanese: true,
    description:
      "オープンソースの画像生成AI。ローカル環境にインストールすれば完全無料・無制限で使える。カスタマイズ性が最高。",
    pros: ["完全無料・生成枚数無制限", "カスタムモデルで多様なスタイル", "プライバシー配慮（ローカル動作）"],
    cons: ["PCスペックが必要（GPU必須）", "初期設定が複雑", "クラウド版は有料"],
    useCase: "大量生成・独自スタイル・R18コンテンツ（自己責任）",
  },
  {
    rank: 5,
    name: "Leonardo.AI",
    plan: "無料あり",
    quality: 4,
    japanese: false,
    description:
      "ゲーム・キャラクターデザインに特化した画像生成AI。毎日150クレジット無料で使える太っ腹な無料枠が魅力。",
    pros: ["毎日150クレジット無料", "ゲームアセット・キャラクター生成が得意", "高品質なアニメ・イラスト"],
    cons: ["日本語プロンプトは英語より精度低め", "UIが英語のみ"],
    useCase: "ゲーム素材・アニメキャラ・ファンアート",
  },
  {
    rank: 6,
    name: "Canva AI（Magic Media）",
    plan: "無料あり",
    quality: 3,
    japanese: true,
    description:
      "デザインツールCanvaに統合された画像生成AI。デザインと画像生成を一気通貫で完結できる使いやすさが魅力。",
    pros: ["Canvaのデザインと一体化", "日本語対応", "初心者向け使いやすいUI"],
    cons: ["画質はMidjourneyより劣る", "Free版は生成回数が少ない"],
    useCase: "SNS投稿・プレゼン・ブログ用画像",
  },
  {
    rank: 7,
    name: "ImageFX（Google）",
    plan: "無料（制限あり）",
    quality: 3,
    japanese: true,
    description:
      "Googleが開発した画像生成AI。無料で使えてGoogleアカウントがあればすぐ始められる。日本語プロンプトにも対応。",
    pros: ["Googleアカウントで無料利用可", "日本語プロンプト対応", "シンプルで使いやすい"],
    cons: ["生成回数に制限あり", "画質はMidjourney等より低め"],
    useCase: "手軽な画像生成・テスト用途",
  },
];

const FAQS: FaqItem[] = [
  {
    q: "画像生成AIで副業は本当に稼げますか？",
    a: "はい、稼げます。具体的な方法として①ストックフォトサイトへの投稿（Adobe Stock・Shutterstockなど）②クラウドソーシングでのデザイン受注③SNS用アイキャッチ・バナー制作④LINEスタンプ・グッズ販売⑤NFTアート販売などがあります。月1〜10万円を達成している副業者は多数います。",
  },
  {
    q: "画像生成AIの著作権はどうなっていますか？",
    a: "各AIサービスによって規約が異なります。一般的に「AIが生成した画像には著作権が発生しない」という考え方が主流ですが、商用利用については各サービスの利用規約を確認することが重要です。Adobe Fireflyは商用利用に安全な設計として知られています。2026年現在、法整備は進行中であり定期的に規約を確認することをおすすめします。",
  },
  {
    q: "画像生成AIは無料で使えますか？",
    a: "はい、Stable Diffusion（ローカル）・Leonardo.AI（毎日150クレジット）・Canva AI（限定回数）・ImageFX（Google）などが無料で使えます。ただし高品質を求めるならMidjourney（月20ドル〜）やChatGPT Plus（月20ドル）の有料プランを検討するのがおすすめです。",
  },
  {
    q: "画像生成AIで日本語プロンプトは使えますか？",
    a: "DALL-E 3（ChatGPT）・Adobe Firefly・Canva AI・ImageFXは日本語プロンプトに対応しています。ただし英語プロンプトの方が精度が高いことが多く、慣れてきたら英語で試してみることをおすすめします。ChatGPTに「この画像の英語プロンプトを生成して」と頼む方法も効果的です。",
  },
  {
    q: "Midjourneyと他のAIの違いは何ですか？",
    a: "Midjourneyは芸術性・品質が世界最高水準で、特にアート・イラスト・幻想的な画像生成に優れています。DALL-E 3は日本語指示への対応度が高く、指示通りの画像を作りやすい特徴があります。Stable Diffusionはオープンソースで無制限に使えます。用途に合わせて使い分けるのが最も効率的です。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const planColors: Record<Plan, string> = {
  "無料あり": "bg-green-500/20 text-green-300 border-green-500/30",
  "有料のみ": "bg-orange-500/20 text-orange-300 border-orange-500/30",
  "無料（制限あり）": "bg-blue-500/20 text-blue-300 border-blue-500/30",
};

const rankColors = ["bg-yellow-400 text-black", "bg-gray-300 text-black", "bg-orange-400 text-black"];

export default function GazouAiGuidePage() {
  return (
    <main className="bg-gray-950 min-h-screen text-gray-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="max-w-3xl mx-auto px-4 py-12">

        {/* ヒーロー */}
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold bg-purple-500/20 text-purple-400 border border-purple-500/30 rounded-full px-4 py-1 mb-4">
            🎨 2026年最新版
          </span>
          <h1 className="text-3xl sm:text-4xl font-black mb-4 leading-tight">
            画像生成AI<br />
            <span className="text-purple-400">おすすめ7選2026年版</span>
            <br />
            <span className="text-xl text-gray-300 font-bold">【無料・日本語対応・副業に使える】</span>
          </h1>
          <p className="text-gray-300 text-sm leading-relaxed">
            Midjourney・DALL-E・Stable Diffusionなど主要な画像生成AIを<br />
            品質・価格・日本語対応・副業活用の観点で徹底比較します。
          </p>
        </div>

        {/* ツール一覧 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-6 border-l-4 border-purple-500 pl-3">
            🎨 画像生成AI おすすめランキング TOP7
          </h2>
          <div className="space-y-5">
            {AI_TOOLS.map((tool) => (
              <div key={tool.rank} className="bg-gray-900 border border-gray-700 rounded-xl p-5">
                <div className="flex items-start gap-4 mb-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-black text-sm flex-shrink-0 ${
                    tool.rank <= 3 ? rankColors[tool.rank - 1] : "bg-gray-700 text-gray-300"
                  }`}>
                    {tool.rank}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="text-white font-black text-base">{tool.name}</h3>
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full border ${planColors[tool.plan]}`}>
                        {tool.plan}
                      </span>
                      {tool.japanese && (
                        <span className="text-xs bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 rounded-full px-2 py-0.5">
                          🇯🇵 日本語対応
                        </span>
                      )}
                    </div>
                    <p className="text-yellow-400 text-xs">{"★".repeat(tool.quality)}{"☆".repeat(5 - tool.quality)}</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-3">{tool.description}</p>
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div>
                    <p className="text-green-400 text-xs font-bold mb-1">✅ メリット</p>
                    <ul className="space-y-0.5">
                      {tool.pros.map((p, i) => (
                        <li key={i} className="text-gray-300 text-xs">・{p}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-red-400 text-xs font-bold mb-1">❌ デメリット</p>
                    <ul className="space-y-0.5">
                      {tool.cons.map((c, i) => (
                        <li key={i} className="text-gray-300 text-xs">・{c}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg px-3 py-2">
                  <span className="text-purple-400 text-xs font-bold">💡 向いている用途: </span>
                  <span className="text-gray-300 text-xs">{tool.useCase}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mb-12 bg-gradient-to-r from-cyan-900/30 to-purple-900/30 border border-cyan-500/30 rounded-2xl p-6 text-center">
          <h2 className="text-xl font-bold text-white mb-2">
            🤖 ChatGPTも今すぐ使いこなそう
          </h2>
          <p className="text-gray-300 text-sm mb-4">
            DALL-E 3（画像生成）はChatGPT Plusで使えます。ChatGPTの全機能を徹底解説。
          </p>
          <a
            href="/chatgpt-guide"
            className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm"
          >
            ChatGPT完全ガイドを読む →
          </a>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-6 border-l-4 border-purple-500 pl-3">
            よくある質問（FAQ）
          </h2>
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <div key={i} className="bg-gray-900 border border-gray-700 rounded-xl p-4">
                <p className="text-white font-bold text-sm mb-2">Q. {faq.q}</p>
                <p className="text-gray-300 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* アフィリエイト */}
        <AffiliateSectionAiNews />
      </div>
    </main>
  );
}

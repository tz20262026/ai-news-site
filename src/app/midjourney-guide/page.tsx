import type { Metadata } from "next";
import Link from "next/link";
import AffiliateSectionAiNews from "@/components/AffiliateSectionAiNews";

export const metadata: Metadata = {
  title:
    "Midjourney使い方完全ガイド2026年版【プロンプト・料金プラン・機能一覧】",
  description:
    "Midjourneyの基本操作からプロンプトの書き方、料金プラン比較まで2026年版で完全解説。初心者でもすぐに高品質AI画像を生成できる実践テクニックを網羅。",
  keywords: [
    "Midjourney 使い方",
    "Midjourney プロンプト",
    "Midjourney 料金",
    "Midjourney 日本語",
    "AI画像生成",
    "Midjourney --sref",
    "Midjourney --cref",
    "画像生成AI 使い方",
  ],
  alternates: {
    canonical: "https://ai-news-site-wheat.vercel.app/midjourney-guide",
  },
  openGraph: {
    title: "Midjourney使い方完全ガイド2026年版【プロンプト・料金プラン・機能一覧】",
    description:
      "Midjourneyの基本操作からプロンプトの書き方、料金プラン比較まで2026年版で完全解説。初心者でもすぐに高品質AI画像を生成できる実践テクニックを網羅。",
    type: "article",
    locale: "ja_JP",
    url: "https://ai-news-site-wheat.vercel.app/midjourney-guide",
  },
  twitter: {
    card: "summary_large_image",
    title: "Midjourney使い方完全ガイド2026年版",
    description:
      "Midjourneyの基本操作・プロンプト・料金プランを完全解説。初心者から上級者まで使えるテクニック集。",
  },
};

/* ────────────────────────────────────────────
   データ定義
──────────────────────────────────────────── */

type Plan = "無料" | "Basic" | "Standard" | "Pro";

interface MJFeature {
  id: string;
  name: string;
  icon: string;
  plan: Plan;
  description: string;
  tips: string[];
}

interface PromptElement {
  id: string;
  label: string;
  example: string;
  effect: string;
}

interface FAQ {
  question: string;
  answer: string;
}

const MJ_FEATURES: MJFeature[] = [
  {
    id: "basic-generation",
    name: "基本画像生成（/imagine）",
    icon: "🎨",
    plan: "Basic",
    description:
      "「/imagine prompt:」に続けてテキストを入力するだけで高品質な画像を4枚生成。英語プロンプトが基本だが、日本語でもある程度動作する。生成された4枚からお気に入りをU（アップスケール）またはV（バリエーション）で深掘りできる。",
    tips: [
      "プロンプトは英語で書くと精度UP",
      "スタイル指定（oil painting, photorealistic等）で雰囲気をコントロール",
      "アスペクト比は --ar 16:9 や --ar 1:1 で指定",
    ],
  },
  {
    id: "variation",
    name: "バリエーション生成（V1〜V4）",
    icon: "🔄",
    plan: "Basic",
    description:
      "気に入った画像のVボタンを押すと、そのスタイルを維持しながら構図や細部が異なる4枚のバリエーションを新たに生成。「もう少し構図を変えたい」「雰囲気は好きだけど細部を変えたい」という場合に使う。",
    tips: [
      "V1〜V4で4枚それぞれの強いバリエーションを生成",
      "Vary（Subtle）は細かい変化、Vary（Strong）は大きな変化",
      "Vary（Region）で画像の一部だけを変更可能",
    ],
  },
  {
    id: "upscale",
    name: "アップスケール（U1〜U4）",
    icon: "🔍",
    plan: "Basic",
    description:
      "選んだ画像のUボタンを押すと解像度を上げた単体画像を生成。デフォルトで1024×1024px。Upscale（Subtle）は元の画像に近いまま高解像度化、Upscale（Creative）は細部をAIが補完しながら高解像度化する。",
    tips: [
      "Upscale（2x）で2048px、Upscale（4x）で4096pxまで拡大可能（Pro以上）",
      "印刷物・商用利用には必ずアップスケールを使う",
      "アップスケール後もVariationsでさらに改変可能",
    ],
  },
  {
    id: "sref",
    name: "スタイル参照（--sref）",
    icon: "🖼️",
    plan: "Standard",
    description:
      "参照画像のURLを指定することで、その画像のスタイル（色調・画風・雰囲気）を反映した画像を生成できる機能。「このイラストのような絵柄で」という指示を画像で伝えられるため、一貫したビジュアルブランドの構築に非常に有効。",
    tips: [
      "プロンプト末尾に --sref [画像URL] を追加するだけ",
      "--sw 0〜1000 でスタイルの強度を調整（デフォルト100）",
      "複数URLをスペース区切りで並べてスタイルをブレンド可能",
    ],
  },
  {
    id: "cref",
    name: "キャラクター参照（--cref）",
    icon: "👤",
    plan: "Standard",
    description:
      "参照画像のキャラクター（人物・キャラクター）の外見を維持したまま、異なるポーズ・シーン・スタイルの画像を生成できる機能。オリジナルキャラクターのストーリーボードや漫画制作に最適。",
    tips: [
      "プロンプト末尾に --cref [キャラクター画像URL] を追加",
      "--cw 0〜100 でキャラクター参照強度を調整（デフォルト100）",
      "顔の一致率を上げたい場合は --cw 0 で顔のみを参照",
    ],
  },
  {
    id: "pan-zoom",
    name: "パン＆アウトペイント（Zoom Out）",
    icon: "🌐",
    plan: "Standard",
    description:
      "アップスケールした画像をさらに外側に広げてキャンバスを拡張できる機能。「Zoom Out 2x」で元の画像を囲むように新しいコンテンツを生成。パノラマ画像や風景拡張に非常に便利。",
    tips: [
      "Zoom Out 2x / 1.5x でズームアウト倍率を選択",
      "Custom Zoom で任意の倍率・プロンプトを指定して拡張",
      "矢印ボタンで上下左右にパン（移動）も可能",
    ],
  },
];

const PROMPT_ELEMENTS: PromptElement[] = [
  {
    id: "subject",
    label: "主題（Subject）",
    example: "a golden retriever puppy, a futuristic city skyline",
    effect: "何を描くかを最初に明確に。詳細なほど意図通りの画像になる",
  },
  {
    id: "style",
    label: "スタイル（Style）",
    example: "oil painting, photorealistic, anime style, watercolor",
    effect: "アートスタイルを指定。有名アーティスト名（例: by Makoto Shinkai）も有効",
  },
  {
    id: "lighting",
    label: "ライティング（Lighting）",
    example: "golden hour lighting, studio lighting, cinematic lighting",
    effect: "光の種類で雰囲気が激変。プロ品質の画像に最も効果的なパラメータ",
  },
  {
    id: "camera",
    label: "カメラ設定（Camera）",
    example: "wide angle lens, macro shot, portrait lens, aerial view",
    effect: "構図・距離感を制御。写真風画像には特に重要",
  },
  {
    id: "quality",
    label: "クオリティパラメータ",
    example: "--q 1 --s 750 --ar 16:9 --v 6.1",
    effect: "品質・スタイライズ強度・アスペクト比・バージョンを数値で指定",
  },
  {
    id: "negative",
    label: "ネガティブプロンプト（--no）",
    example: "--no blur, text, watermark, ugly hands",
    effect: "生成してほしくない要素を除外。手の乱れ・テキスト混入防止に必須",
  },
];

const PLANS = [
  {
    name: "Basic",
    price: "$10/月",
    fastHours: "3.3時間/月",
    concurrent: "3枚同時",
    features: ["全コアコマンド利用可", "ギャラリー閲覧", "Webエディター"],
    color: "emerald",
  },
  {
    name: "Standard",
    price: "$30/月",
    fastHours: "15時間/月",
    concurrent: "3枚同時",
    features: ["全Basic機能", "--sref/--cref", "Relax（無制限）", "ステルスモードなし"],
    color: "cyan",
  },
  {
    name: "Pro",
    price: "$60/月",
    fastHours: "30時間/月",
    concurrent: "12枚同時",
    features: ["全Standard機能", "ステルスモード", "高速処理優先"],
    color: "violet",
  },
  {
    name: "Mega",
    price: "$120/月",
    fastHours: "60時間/月",
    concurrent: "12枚同時",
    features: ["全Pro機能", "大量生成向け", "API優先アクセス"],
    color: "amber",
  },
];

const FAQS: FAQ[] = [
  {
    question: "Midjourneyに無料プランはありますか？",
    answer:
      "2024年3月以降、無料トライアルは廃止されました。利用には最低Basic（$10/月）以上のサブスクリプションが必要です。ただし、年払い（Annual）にすると約20%割引になります。",
  },
  {
    question: "Midjourneyを日本語プロンプトで使えますか？",
    answer:
      "ある程度は動作しますが、英語プロンプトの方が精度・再現性ともに高いです。日本語で考えた内容をGoogle翻訳やChatGPTで英語に変換してから使うのがベストプラクティスです。",
  },
  {
    question: "生成した画像の商用利用は可能ですか？",
    answer:
      "有料プランユーザーは基本的に商用利用可能です（Paid Subscription Terms適用）。ただし月間収益$1,000,000以上の企業はProプラン以上が必要です。無料トライアル（廃止済み）で生成した画像はCC BY-NC 4.0ライセンスのため商用利用不可でした。",
  },
  {
    question: "Midjourneyはどこで使えますか？Discord以外でも使える？",
    answer:
      "2024年後半からWebアプリ（midjourney.com）が一般公開されています。ブラウザ上でプロンプト入力・画像管理が可能になり、Discordを使わずに利用できます。スマートフォンからもブラウザで同様に使えます。",
  },
  {
    question: "生成した画像が著作権に引っかかることはありますか？",
    answer:
      "Midjourneyが生成した画像は現状（2026年）、日本の著作権法上、AIが生成したコンテンツは著作権の保護対象外とする考え方が主流ですが、参照元画像の著作権には注意が必要です。実在するアーティストのスタイルを過度に模倣するプロンプトは倫理的・法的リスクがあります。",
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

/* ────────────────────────────────────────────
   ページコンポーネント
──────────────────────────────────────────── */

export default function MidjourneyGuidePage() {
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
            <span className="inline-block text-xs font-bold text-violet-400 uppercase tracking-widest bg-violet-400/10 px-4 py-1.5 rounded-full mb-4">
              2026年版 最新情報
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight mb-4">
              Midjourney使い方完全ガイド2026年版
              <br />
              <span className="text-violet-400">
                【プロンプト・料金プラン・全機能解説】
              </span>
            </h1>
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              Midjourneyの基本操作からプロンプトの書き方、--sref/--cref等の上級機能、料金プランの選び方まで徹底解説。
            </p>
            {/* 目次クイックリンク */}
            <div className="flex flex-wrap justify-center gap-2">
              {[
                { href: "#features", label: "全機能一覧" },
                { href: "#prompt", label: "プロンプト術" },
                { href: "#plans", label: "料金プラン" },
                { href: "#faq", label: "よくある質問" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-xs font-bold px-4 py-2 rounded-full bg-slate-800 text-violet-300 border border-slate-700 hover:bg-slate-700 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── 機能一覧 ── */}
        <section id="features" className="py-14 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
                Midjourney主要機能一覧
              </h2>
              <p className="text-gray-400 text-sm">
                基本操作から上級機能まで使えるすべてを解説
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {MJ_FEATURES.map((feature) => (
                <div
                  key={feature.id}
                  className="rounded-2xl border border-slate-800 bg-slate-900 p-5 flex flex-col gap-3"
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{feature.icon}</span>
                      <h3 className="font-black text-white text-base">
                        {feature.name}
                      </h3>
                    </div>
                    <span className="text-xs font-bold px-3 py-1 rounded-full flex-shrink-0 bg-violet-500/15 text-violet-300 border border-violet-500/30">
                      {feature.plan}+
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="flex flex-col gap-1.5 mt-auto">
                    {feature.tips.map((tip, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <span className="text-violet-400 text-xs flex-shrink-0 mt-0.5">▶</span>
                        <span className="text-gray-300 text-xs leading-relaxed">{tip}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── プロンプト要素 ── */}
        <section id="prompt" className="py-14 px-4 bg-slate-950">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
                プロンプト6大構成要素
              </h2>
              <p className="text-gray-400 text-sm">
                この6要素を組み合わせるだけでプロ品質の画像が生成できる
              </p>
            </div>

            <div className="flex flex-col gap-6">
              {PROMPT_ELEMENTS.map((el, index) => (
                <div
                  key={el.id}
                  className="rounded-2xl border border-slate-800 bg-slate-900 p-5 sm:p-6"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-violet-500/20 text-violet-400 flex items-center justify-center font-black text-sm border border-violet-500/30">
                      {index + 1}
                    </span>
                    <div className="flex-1 flex flex-col gap-3">
                      <h3 className="font-black text-white text-base">
                        {el.label}
                      </h3>
                      <div className="rounded-xl bg-slate-800 border border-slate-700 px-4 py-3">
                        <p className="text-xs text-violet-300 font-bold mb-1">
                          例
                        </p>
                        <p className="text-gray-300 text-sm leading-relaxed font-mono">
                          {el.example}
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-emerald-400 font-bold text-xs flex-shrink-0 mt-0.5">
                          効果：
                        </span>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {el.effect}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* プロンプトサンプル */}
            <div className="mt-8 rounded-2xl bg-slate-900 border border-violet-500/30 p-5">
              <p className="text-sm font-bold text-violet-300 mb-2">
                💡 完成プロンプトサンプル
              </p>
              <p className="text-gray-200 text-sm font-mono leading-relaxed bg-slate-800 rounded-xl p-4 border border-slate-700">
                a young japanese woman in a traditional kimono, sitting in a bamboo forest, golden hour lighting, shallow depth of field, photorealistic, 8k --ar 9:16 --v 6.1 --s 750 --no blur, text
              </p>
            </div>
          </div>
        </section>

        {/* ── 料金プラン ── */}
        <section id="plans" className="py-14 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
                料金プラン比較2026年版
              </h2>
              <p className="text-gray-400 text-sm">
                月額・年額割引あり。用途に合わせてプランを選ぼう
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {PLANS.map((plan) => (
                <div
                  key={plan.name}
                  className="rounded-2xl border border-slate-800 bg-slate-900 p-5 flex flex-col gap-3"
                >
                  <div className="text-center">
                    <p className="font-black text-white text-lg">{plan.name}</p>
                    <p className="text-2xl font-black text-violet-400 mt-1">{plan.price}</p>
                    <p className="text-xs text-gray-400 mt-1">高速生成 {plan.fastHours}</p>
                    <p className="text-xs text-gray-400">同時生成 {plan.concurrent}</p>
                  </div>
                  <ul className="flex flex-col gap-1.5 mt-auto">
                    {plan.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-emerald-400 text-xs flex-shrink-0 mt-0.5">✓</span>
                        <span className="text-gray-300 text-xs">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl bg-slate-900 border border-slate-800 p-5">
              <p className="text-sm text-gray-300 leading-relaxed">
                <span className="font-bold text-white">💡 プラン選びのポイント：</span>
                　個人で画像生成を楽しむなら<span className="text-emerald-400 font-bold">Basic（$10/月）</span>で十分。--sref・--crefやRelaxモード（使い放題）が必要なら<span className="text-cyan-400 font-bold">Standard（$30/月）</span>がコスパ最強。年払いにすると約20%お得になります。
              </p>
            </div>
          </div>
        </section>

        {/* ── 関連ガイドCTA ── */}
        <section className="py-10 px-4 bg-slate-950">
          <div className="max-w-3xl mx-auto">
            <div className="rounded-2xl bg-gradient-to-r from-violet-500/10 to-blue-500/10 border border-violet-500/30 p-6 sm:p-8 text-center">
              <p className="text-xs font-bold text-violet-400 uppercase tracking-widest mb-3">
                関連ガイド
              </p>
              <h2 className="text-xl sm:text-2xl font-black text-white mb-3">
                Midjourney以外のAI画像生成ツールも比較したい方へ
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Midjourney・DALL-E 3・Stable Diffusion・Ideogramを4ツール徹底比較。
                <br />
                用途別のおすすめを詳しく解説しています。
              </p>
              <Link
                href="/ai-image-comparison"
                className="inline-flex items-center gap-2 bg-violet-500 hover:bg-violet-400 text-white font-black text-sm px-6 py-3 rounded-xl transition-colors"
              >
                AI画像生成ツール比較を読む →
              </Link>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section id="faq" className="py-14 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
                よくある質問（FAQ）
              </h2>
              <p className="text-gray-400 text-sm">
                Midjourneyに関する疑問をまとめて解決
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {FAQS.map((faq, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-800 bg-slate-900 p-5 sm:p-6"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-violet-500/20 text-violet-400 flex items-center justify-center font-black text-xs border border-violet-500/30 mt-0.5">
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

import type { Metadata } from "next";
import Link from "next/link";
import AffiliateSectionAiNews from "@/components/AffiliateSectionAiNews";

export const metadata: Metadata = {
  title:
    "AI画像生成ツール徹底比較2026年版【Midjourney vs DALL-E 3 vs Stable Diffusion vs Ideogram】",
  description:
    "Midjourney・DALL-E 3・Stable Diffusion・Ideogramの4大AI画像生成ツールを料金・品質・特徴・おすすめユーザーで徹底比較。2026年版最新情報。",
  keywords: [
    "AI画像生成 比較",
    "Midjourney",
    "DALL-E 3",
    "Stable Diffusion",
    "Ideogram",
    "AI画像生成ツール",
    "画像生成AI おすすめ",
    "AI画像生成 無料",
    "AI画像生成 商用利用",
  ],
  alternates: {
    canonical: "https://ai-news-site-wheat.vercel.app/ai-image-comparison",
  },
  openGraph: {
    title: "AI画像生成ツール徹底比較2026年版【Midjourney vs DALL-E 3 vs Stable Diffusion vs Ideogram】",
    description:
      "Midjourney・DALL-E 3・Stable Diffusion・Ideogramの4大AI画像生成ツールを料金・品質・特徴・おすすめユーザーで徹底比較。2026年版最新情報。",
    type: "article",
    locale: "ja_JP",
    url: "https://ai-news-site-wheat.vercel.app/ai-image-comparison",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI画像生成ツール徹底比較2026年版",
    description:
      "Midjourney・DALL-E 3・Stable Diffusion・Ideogramを徹底比較。料金・品質・特徴・おすすめユーザー別に解説。",
  },
};

/* ────────────────────────────────────────────
   データ定義
──────────────────────────────────────────── */

interface ImageTool {
  id: string;
  name: string;
  icon: string;
  tagline: string;
  description: string;
  strengths: string[];
  weaknesses: string[];
  price: string;
  freeOption: string;
  quality: number; // 1-5
  ease: number; // 1-5
  bestFor: string;
  color: string;
}

interface ComparisonCategory {
  label: string;
  midjourney: string;
  dalle: string;
  sd: string;
  ideogram: string;
}

interface FAQ {
  question: string;
  answer: string;
}

const IMAGE_TOOLS: ImageTool[] = [
  {
    id: "midjourney",
    name: "Midjourney",
    icon: "🎨",
    tagline: "アート品質No.1の画像生成AI",
    description:
      "2022年登場のDiscord/Webベースの画像生成AI。現在最も高品質かつ芸術的な画像を生成できるとして、プロのデザイナー・アーティストから絶大な支持を受けている。プロンプトの解釈力・構図センス・色彩表現が他ツールを圧倒。v6.1以降は写真品質のリアリズムも実現。",
    strengths: [
      "アート・イラストの品質がダントツ",
      "--sref/--crefでスタイル・キャラクター統一",
      "コミュニティとプロンプト資産が豊富",
      "Webアプリで操作が簡単",
    ],
    weaknesses: [
      "無料プランが廃止（最低$10/月）",
      "テキスト入り画像の生成が苦手",
      "プロンプトに英語スキルが求められる",
    ],
    price: "$10〜$120/月",
    freeOption: "なし（廃止済み）",
    quality: 5,
    ease: 4,
    bestFor: "デザイナー・イラストレーター・クリエイター",
    color: "violet",
  },
  {
    id: "dalle3",
    name: "DALL-E 3",
    icon: "🤖",
    tagline: "テキスト描写力最強のOpenAI製AI",
    description:
      "OpenAIが開発するAI画像生成モデル。ChatGPT経由で自然言語での指示が通じるため、細かいテキスト・ロゴ・構図指定の精度が非常に高い。日本語プロンプトにも対応。ただしスタイル的な表現力はMidjourneyに劣る傾向がある。ChatGPT Plusに含まれるため追加コスト不要で使えるのが強み。",
    strengths: [
      "日本語プロンプトが通じる",
      "テキスト・ロゴ入り画像の生成が得意",
      "ChatGPT Plusで追加コストなし",
      "詳細な構図指定の再現精度が高い",
    ],
    weaknesses: [
      "アート的な表現力はMidjourneyに劣る",
      "ChatGPT Plus（月$20）が必要",
      "生成枚数に制限あり（時間あたり）",
    ],
    price: "ChatGPT Plus月$20に含む",
    freeOption: "Bing Image Creator（無料・制限あり）",
    quality: 4,
    ease: 5,
    bestFor: "ビジネスユーザー・ブロガー・非エンジニア",
    color: "cyan",
  },
  {
    id: "stable-diffusion",
    name: "Stable Diffusion",
    icon: "⚙️",
    tagline: "オープンソース・完全無料の画像生成AI",
    description:
      "Stability AIが開発・公開したオープンソースの画像生成モデル。完全無料でローカル実行でき、商用利用も基本的に自由（モデルライセンスによる）。カスタムモデル・LoRA・ControlNetなど膨大なカスタマイズオプションが特徴。一方でセットアップに技術知識が必要で、初心者にはハードルが高い。",
    strengths: [
      "完全無料・ローカル実行可能",
      "商用利用も基本OK（ライセンス確認要）",
      "カスタムモデル・LoRAで無限カスタマイズ",
      "APIで自社サービスに組み込み可能",
    ],
    weaknesses: [
      "セットアップに技術知識が必要",
      "高性能GPUが必要（VRAM 8GB以上推奨）",
      "デフォルトの出力品質はやや低い",
    ],
    price: "無料（ローカル実行）/ AUTOMATIC1111等のクラウドサービスは有料",
    freeOption: "完全無料（要セットアップ）",
    quality: 3,
    ease: 2,
    bestFor: "エンジニア・研究者・DIY志向の開発者",
    color: "amber",
  },
  {
    id: "ideogram",
    name: "Ideogram",
    icon: "✍️",
    tagline: "テキスト×デザイン特化の新星AI",
    description:
      "Googleの元研究者チームが設立したIdeogram AIが開発する画像生成サービス。他のAI画像生成ツールが苦手とする「画像内のテキスト描写」に特化して開発されており、ロゴ・ポスター・タイポグラフィデザインでは他の追随を許さない品質を誇る。無料プランも充実しており、コストパフォーマンスが高い。",
    strengths: [
      "テキスト・ロゴ・タイポグラフィの精度が最高",
      "無料プランで1日10枚以上生成可能",
      "Magic Promptで日本語をAIが最適化",
      "ポスター・バナー・商品ラベルに最適",
    ],
    weaknesses: [
      "写真リアリズムはMidjourneyに劣る",
      "日本語テキストの精度はまだ発展途上",
      "スタイル参照機能は限定的",
    ],
    price: "無料〜$20/月",
    freeOption: "無料プランあり（1日10枚相当）",
    quality: 4,
    ease: 4,
    bestFor: "マーケター・バナー制作者・SNSクリエイター",
    color: "emerald",
  },
];

const COMPARISON_TABLE: ComparisonCategory[] = [
  {
    label: "無料プラン",
    midjourney: "❌ なし",
    dalle: "△ Bing経由",
    sd: "✅ 完全無料",
    ideogram: "✅ あり",
  },
  {
    label: "最安価格",
    midjourney: "$10/月",
    dalle: "ChatGPT Plus $20/月",
    sd: "無料",
    ideogram: "無料〜$8/月",
  },
  {
    label: "アート品質",
    midjourney: "★★★★★",
    dalle: "★★★★☆",
    sd: "★★★☆☆",
    ideogram: "★★★★☆",
  },
  {
    label: "テキスト描写",
    midjourney: "★★☆☆☆",
    dalle: "★★★★☆",
    sd: "★★☆☆☆",
    ideogram: "★★★★★",
  },
  {
    label: "日本語対応",
    midjourney: "△ 英語推奨",
    dalle: "✅ 対応",
    sd: "△ 英語推奨",
    ideogram: "△ Magic Prompt",
  },
  {
    label: "商用利用",
    midjourney: "✅（有料プラン）",
    dalle: "✅（利用規約内）",
    sd: "✅（モデル次第）",
    ideogram: "✅（有料プラン）",
  },
  {
    label: "操作難易度",
    midjourney: "中（英語要）",
    dalle: "易（日本語OK）",
    sd: "難（技術知識要）",
    ideogram: "易（Web完結）",
  },
];

const FAQS: FAQ[] = [
  {
    question: "AI画像生成ツールで最も品質が高いのはどれですか？",
    answer:
      "2026年現在、アート・イラスト・フォトリアリズム全体での総合品質ではMidjourney（v6.1以降）がトップと評価されています。ただし「テキスト入り画像」ではIdeogramが最高、「日本語指示の通りやすさ」ではDALL-E 3が最も優れています。用途によって使い分けるのがベストです。",
  },
  {
    question: "無料で使えるAI画像生成ツールはどれですか？",
    answer:
      "無料で使えるツールは①Ideogram（無料プランで1日数枚）②Stable Diffusion（ローカル実行・完全無料）③Bing Image Creator（DALL-E 3ベース・制限あり）③Adobe Firefly（無料枠あり）があります。Midjourneyは2024年3月に無料トライアルを廃止しました。",
  },
  {
    question: "商用利用できるAI画像生成ツールはどれですか？",
    answer:
      "MidjourneyはBasic以上の有料プランで商用利用可能。DALL-E 3はOpenAIの利用規約内で商用利用可。Stable Diffusionはモデルごとのライセンス（CreativeML Open RAIL-M等）を確認が必要。Ideogramは有料プランで商用利用可能。Adobe Firefeyは商用利用に最も安全な選択肢の一つです。",
  },
  {
    question: "ロゴやポスター制作に最適なAI画像生成ツールはどれですか？",
    answer:
      "テキスト・タイポグラフィを含むデザイン制作なら「Ideogram」が最も優れています。他のツールが苦手とする「画像内の文字を正確に描写する」能力に特化して開発されており、ロゴ・バナー・ポスター・商品ラベルの制作に最適です。無料プランでも試せます。",
  },
  {
    question: "AI画像生成ツールは今後どうなりますか？",
    answer:
      "2026年のトレンドは①動画生成への統合（Sora・Runway等との融合）②リアルタイム生成（待ち時間ゼロ）③3D・音声との統合④スタイル一貫性の向上（--cref的機能の普及）です。特にMidjourney・DALL-E・Google Imagenの競争が品質向上を牽引しており、1年前と比べて革命的な進化が続いています。",
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
   ヘルパー
──────────────────────────────────────────── */

function StarRating({ score }: { score: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} className={i <= score ? "text-amber-400" : "text-slate-600"}>
          ★
        </span>
      ))}
    </div>
  );
}

/* ────────────────────────────────────────────
   ページコンポーネント
──────────────────────────────────────────── */

export default function AiImageComparisonPage() {
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
            <span className="inline-block text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-400/10 px-4 py-1.5 rounded-full mb-4">
              2026年版 最新比較
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight mb-4">
              AI画像生成ツール徹底比較2026年版
              <br />
              <span className="text-amber-400">
                【Midjourney vs DALL-E 3 vs Stable Diffusion vs Ideogram】
              </span>
            </h1>
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              4大AI画像生成ツールを料金・品質・特徴・おすすめユーザーで徹底比較。あなたに最適なツールがわかる。
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                { href: "#tools", label: "4ツール詳細" },
                { href: "#comparison", label: "一覧比較表" },
                { href: "#recommend", label: "用途別おすすめ" },
                { href: "#faq", label: "よくある質問" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-xs font-bold px-4 py-2 rounded-full bg-slate-800 text-amber-300 border border-slate-700 hover:bg-slate-700 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4ツール詳細 ── */}
        <section id="tools" className="py-14 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
                4大AI画像生成ツール詳細解説
              </h2>
              <p className="text-gray-400 text-sm">
                各ツールの特徴・強み・弱み・料金を詳しく比較
              </p>
            </div>

            <div className="flex flex-col gap-5">
              {IMAGE_TOOLS.map((tool) => (
                <div
                  key={tool.id}
                  className="rounded-2xl border border-slate-800 bg-slate-900 p-5 sm:p-6"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                    {/* ヘッダー */}
                    <div className="flex items-center gap-3 sm:w-52 flex-shrink-0">
                      <span className="text-3xl">{tool.icon}</span>
                      <div>
                        <h3 className="font-black text-white text-lg leading-tight">{tool.name}</h3>
                        <p className="text-xs text-amber-400 font-semibold">{tool.tagline}</p>
                        <div className="flex gap-2 mt-1">
                          <div>
                            <p className="text-xs text-gray-500">品質</p>
                            <StarRating score={tool.quality} />
                          </div>
                          <div>
                            <p className="text-xs text-gray-500">易しさ</p>
                            <StarRating score={tool.ease} />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 詳細 */}
                    <div className="flex-1 flex flex-col gap-3">
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {tool.description}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-3">
                          <p className="text-xs font-bold text-emerald-400 mb-2">強み</p>
                          <ul className="flex flex-col gap-1">
                            {tool.strengths.map((s, i) => (
                              <li key={i} className="flex items-start gap-1.5">
                                <span className="text-emerald-400 text-xs flex-shrink-0 mt-0.5">✓</span>
                                <span className="text-gray-300 text-xs">{s}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="rounded-xl bg-red-500/5 border border-red-500/20 p-3">
                          <p className="text-xs font-bold text-red-400 mb-2">弱み</p>
                          <ul className="flex flex-col gap-1">
                            {tool.weaknesses.map((w, i) => (
                              <li key={i} className="flex items-start gap-1.5">
                                <span className="text-red-400 text-xs flex-shrink-0 mt-0.5">✗</span>
                                <span className="text-gray-300 text-xs">{w}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-3 mt-1">
                        <div className="rounded-xl bg-slate-800 border border-slate-700 px-3 py-2">
                          <span className="text-xs text-gray-400 font-bold">料金：</span>
                          <span className="text-xs text-amber-300">{tool.price}</span>
                        </div>
                        <div className="rounded-xl bg-slate-800 border border-slate-700 px-3 py-2">
                          <span className="text-xs text-gray-400 font-bold">無料：</span>
                          <span className="text-xs text-emerald-300">{tool.freeOption}</span>
                        </div>
                        <div className="rounded-xl bg-slate-800 border border-slate-700 px-3 py-2">
                          <span className="text-xs text-gray-400 font-bold">おすすめ：</span>
                          <span className="text-xs text-cyan-300">{tool.bestFor}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 一覧比較表 ── */}
        <section id="comparison" className="py-14 px-4 bg-slate-950">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
                4ツール一覧比較表
              </h2>
              <p className="text-gray-400 text-sm">
                主要項目で4ツールを横並び比較
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px] border-collapse">
                <thead>
                  <tr className="border-b border-slate-800">
                    <th className="text-left py-3 px-4 text-xs font-bold text-gray-400">項目</th>
                    <th className="text-center py-3 px-3 text-xs font-bold text-violet-400">Midjourney</th>
                    <th className="text-center py-3 px-3 text-xs font-bold text-cyan-400">DALL-E 3</th>
                    <th className="text-center py-3 px-3 text-xs font-bold text-amber-400">Stable Diffusion</th>
                    <th className="text-center py-3 px-3 text-xs font-bold text-emerald-400">Ideogram</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_TABLE.map((row, index) => (
                    <tr
                      key={index}
                      className="border-b border-slate-800/50 hover:bg-slate-900/50 transition-colors"
                    >
                      <td className="py-3 px-4 text-xs font-bold text-gray-300">{row.label}</td>
                      <td className="py-3 px-3 text-xs text-gray-300 text-center">{row.midjourney}</td>
                      <td className="py-3 px-3 text-xs text-gray-300 text-center">{row.dalle}</td>
                      <td className="py-3 px-3 text-xs text-gray-300 text-center">{row.sd}</td>
                      <td className="py-3 px-3 text-xs text-gray-300 text-center">{row.ideogram}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── 用途別おすすめ ── */}
        <section id="recommend" className="py-14 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
                用途別おすすめAI画像生成ツール
              </h2>
              <p className="text-gray-400 text-sm">
                目的別に最適な1ツールを厳選
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { goal: "とにかく高品質な画像を作りたい", tool: "Midjourney", reason: "アート品質・構図センスで業界最高水準", color: "violet" },
                { goal: "無料でとりあえず試したい", tool: "Ideogram", reason: "無料プランで1日数枚生成可能・操作も簡単", color: "emerald" },
                { goal: "テキスト入りロゴ・バナーを作りたい", tool: "Ideogram", reason: "テキスト描写精度がAI画像生成ツール中No.1", color: "emerald" },
                { goal: "ChatGPTから使いたい・日本語で指示したい", tool: "DALL-E 3", reason: "ChatGPT Plus内で追加コストなし・日本語OK", color: "cyan" },
                { goal: "完全無料・カスタマイズ自由に使いたい", tool: "Stable Diffusion", reason: "オープンソース・ローカル実行で費用ゼロ", color: "amber" },
                { goal: "自社サービスにAI画像生成を組み込みたい", tool: "Stable Diffusion", reason: "APIで完全制御可能・商用利用も柔軟", color: "amber" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-800 bg-slate-900 p-5 flex flex-col gap-2"
                >
                  <p className="text-xs text-gray-400 font-bold">目的</p>
                  <p className="text-white font-black text-sm">{item.goal}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30">
                      おすすめ: {item.tool}
                    </span>
                  </div>
                  <p className="text-gray-300 text-xs leading-relaxed">{item.reason}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 関連ガイドCTA ── */}
        <section className="py-10 px-4 bg-slate-950">
          <div className="max-w-3xl mx-auto">
            <div className="rounded-2xl bg-gradient-to-r from-amber-500/10 to-violet-500/10 border border-amber-500/30 p-6 sm:p-8 text-center">
              <p className="text-xs font-bold text-amber-400 uppercase tracking-widest mb-3">
                関連ガイド
              </p>
              <h2 className="text-xl sm:text-2xl font-black text-white mb-3">
                Midjourneyをもっと詳しく知りたい方へ
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Midjourneyの基本操作・プロンプトの書き方・--sref/--cref等の上級機能を完全解説。
                <br />
                初心者でも使いこなせる実践テクニックを網羅しています。
              </p>
              <Link
                href="/midjourney-guide"
                className="inline-flex items-center gap-2 bg-violet-500 hover:bg-violet-400 text-white font-black text-sm px-6 py-3 rounded-xl transition-colors"
              >
                Midjourneyガイドを読む →
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
                AI画像生成ツールに関する疑問をまとめて解決
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {FAQS.map((faq, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-800 bg-slate-900 p-5 sm:p-6"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-black text-xs border border-amber-500/30 mt-0.5">
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

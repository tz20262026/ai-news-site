import type { Metadata } from "next";
import Link from "next/link";
import AffiliateSectionAiNews from "@/components/AffiliateSectionAiNews";
import ArticleAffiliateBanner from "@/components/ArticleAffiliateBanner";

const PAGE_URL = "https://ai-news-site-wheat.vercel.app/nano-banana-guide";
const PUBLISHED_AT = "2026-08-13";

export const metadata: Metadata = {
  title: "Nano Banana Pro 使い方完全ガイド2026【料金・無料枠・商用利用まで】",
  description:
    "Google「Nano Banana Pro」（Gemini 3 Pro Image）の使い方を2026年最新版で解説。無料枠の回数・有料プランとの違い・文字入り画像やポスター制作のコツ・商用利用の注意点まで、初めてでも迷わない手順で紹介します。",
  keywords: [
    "Nano Banana Pro 使い方",
    "Nano Banana Pro 料金",
    "Nano Banana 無料",
    "Gemini 3 Pro Image",
    "Nano Banana 商用利用",
    "Gemini 画像生成 使い方",
    "Nano Banana Pro 日本語",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Nano Banana Pro 使い方完全ガイド2026｜料金・無料枠・商用利用",
    description:
      "Google「Nano Banana Pro」（Gemini 3 Pro Image）の始め方・無料枠・料金プラン・商用利用の注意点を解説。",
    type: "article",
    locale: "ja_JP",
    url: PAGE_URL,
    publishedTime: PUBLISHED_AT,
  },
  twitter: {
    card: "summary_large_image",
    title: "Nano Banana Pro 使い方完全ガイド2026",
    description: "Google「Nano Banana Pro」の無料枠・料金・商用利用の注意点を解説。",
  },
};

interface UsageStep {
  step: number;
  title: string;
  desc: string;
}

interface FaqItem {
  q: string;
  a: string;
}

interface CompareTool {
  name: string;
  strength: string;
  weakness: string;
}

const STEPS: UsageStep[] = [
  {
    step: 1,
    title: "Googleアカウントで Gemini にアクセスする",
    desc: "gemini.google.com にアクセスし、普段使っているGoogleアカウントでログインします。新しいアプリのインストールや別サービスへの登録は不要で、すぐに使い始められます。",
  },
  {
    step: 2,
    title: "モデルを「Thinking」系（Gemini 3 Pro）に切り替える",
    desc: "画面上部のモデル選択から、画像生成に対応したモデルを選びます。無料プランでも標準モデル（Nano Banana 2相当）で画像生成が可能で、Pro相当の高精度な生成には有料プラン（Google AI Pro/Ultra）が有利です。",
  },
  {
    step: 3,
    title: "作りたい画像を日本語でそのまま指示する",
    desc: "「白背景で商品を中央に配置したECサイト用の写真にして」のように、目的・構図・文字の内容まで日本語で具体的に書くほど狙い通りの結果になります。文字入りポスターやチラシを作る場合は、入れたい文言をそのままプロンプトに書き込みましょう。",
  },
  {
    step: 4,
    title: "既存の画像をアップロードして編集する",
    desc: "手持ちの写真や過去に作った画像をアップロードし、「背景だけ変えて」「この商品を別の色にして」のように指示すると、元の構図や被写体を保ったまま部分編集ができます。複数枚を合成する使い方にも対応しています。",
  },
  {
    step: 5,
    title: "高解像度で書き出す（Pro機能）",
    desc: "印刷用のポスターやパンフレットなど大きいサイズが必要な場合は、最大4K相当の高解像度出力に対応しています。SNS投稿用ならそのままの解像度でも十分なことがほとんどです。",
  },
];

const COMPARE: CompareTool[] = [
  {
    name: "Midjourney",
    strength: "芸術性・画質の完成度は依然として最高水準。幻想的なイラストやアート作品に強い。",
    weakness: "Discordが必須で操作がやや複雑。文字入り画像の精度はNano Banana Proに劣る。",
  },
  {
    name: "DALL-E 3（ChatGPT）",
    strength: "ChatGPTとの会話の流れで自然に画像生成を依頼できる手軽さ。",
    weakness: "画像の部分編集や複数枚の合成はNano Banana Proほど柔軟ではない。",
  },
  {
    name: "Stable Diffusion",
    strength: "オープンソースで無制限・無料。カスタムモデルで独自のスタイルを作れる。",
    weakness: "環境構築にPCスペックと知識が必要。文字の描画精度は弱い。",
  },
];

const FAQS: FaqItem[] = [
  {
    q: "Nano Banana Proは無料で使えますか？",
    a: "はい。Geminiの無料プランでも1日あたり一定回数まで画像生成を利用できます（回数はGoogle側の運用状況により変動します）。2026年2月以降は無料の標準モデルでもNano Banana Pro相当に近い品質の画像が作れるようになっています。生成回数の上限に頻繁に達する場合や、より高精度な生成を安定して使いたい場合は有料プラン（Google AI Pro/Ultra）の検討をおすすめします。",
  },
  {
    q: "Nano BananaとNano Banana Proの違いは何ですか？",
    a: "Nano Banana Proは、上位モデルのGemini 3 Proを基盤にした画像生成モデルです。無印のNano Bananaと比べて、文字を正確に描画する精度・複雑な指示への追従性・高解像度（最大4K相当）出力に対応している点が大きな違いです。ポスターやインフォグラフィックのように文字と図解を組み合わせた画像を作る用途で特に差が出ます。",
  },
  {
    q: "商用利用はできますか？",
    a: "Google AI Studioやアプリの無料枠は個人利用が前提で、商用利用には制限があります。広告や販売用の素材など商用目的で使う場合は、Google Workspace with GeminiやVertex AI経由の有料プランを利用する必要があります。案件で使う前に必ずGoogleの最新の利用規約を確認してください。",
  },
  {
    q: "日本語のプロンプトでも綺麗に生成できますか？",
    a: "できます。Nano Banana Proは日本語の指示への理解度が高く、特に「看板に書く文字」「商品パッケージの文言」のような日本語テキストを画像内に正確に描画できる点が強みです。他の画像生成AIで「文字が崩れる」という悩みを持っていた人ほど効果を実感しやすいモデルです。",
  },
  {
    q: "MidjourneyやDALL-E 3とどちらを使うべきですか？",
    a: "芸術性を追求したアート作品ならMidjourney、ChatGPTでの会話の延長で気軽に使いたいならDALL-E 3、文字入りのポスター・資料・ECサイト用画像を正確に作りたいならNano Banana Proが向いています。用途によって使い分けるのが最も効率的です。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Nano Banana Pro 使い方完全ガイド2026【料金・無料枠・商用利用まで】",
  description:
    "Google「Nano Banana Pro」（Gemini 3 Pro Image）の使い方・無料枠・料金プラン・商用利用の注意点をまとめた2026年最新版ガイド。",
  datePublished: PUBLISHED_AT,
  dateModified: PUBLISHED_AT,
  inLanguage: "ja",
  mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
  author: { "@type": "Organization", name: "AI News Japan" },
  publisher: { "@type": "Organization", name: "AI News Japan" },
};

export default function NanoBananaGuidePage() {
  return (
    <main className="bg-gray-950 min-h-screen text-gray-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <div className="max-w-3xl mx-auto px-4 py-12">
        {/* ヒーロー */}
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold bg-yellow-500/20 text-yellow-300 border border-yellow-500/30 rounded-full px-4 py-1 mb-4">
            🍌 2026年最新版
          </span>
          <h1 className="text-3xl sm:text-4xl font-black mb-4 leading-tight">
            Nano Banana Pro 使い方完全ガイド
            <br />
            <span className="text-yellow-300">2026年版</span>
          </h1>
          <p className="text-gray-300 text-sm leading-relaxed">
            無料枠の回数・料金プラン・文字入り画像を綺麗に作るコツ・商用利用の注意点まで、
            <br className="hidden sm:block" />
            Googleの画像生成AI「Nano Banana Pro」（Gemini 3 Pro Image）を迷わず使いこなす手順をまとめました。
          </p>
          <p className="text-gray-300 text-xs mt-3">公開日：2026年8月13日</p>
        </div>

        {/* 先に結論 */}
        <section className="mb-12">
          <div className="bg-yellow-900/20 border border-yellow-700/40 rounded-xl p-5">
            <h2 className="text-base font-bold text-yellow-200 mb-3">先に結論</h2>
            <ul className="space-y-2 text-sm text-gray-200 leading-relaxed">
              <li className="flex gap-2">
                <span className="text-yellow-300 flex-shrink-0">▸</span>
                <span>
                  <strong className="text-white">Googleアカウントさえあれば無料で今すぐ試せる。</strong>
                  gemini.google.com にログインするだけで、追加アプリのインストールは不要。
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-yellow-300 flex-shrink-0">▸</span>
                <span>
                  <strong className="text-white">最大の強みは「文字を正確に描ける」こと。</strong>
                  他の画像生成AIが苦手な看板・パッケージ・ポスターの文字入れを高精度でこなす。
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-yellow-300 flex-shrink-0">▸</span>
                <span>
                  <strong className="text-white">既存写真の部分編集・合成も日本語の指示だけでできる。</strong>
                  「背景だけ変えて」のような自然な指示に対応。
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-yellow-300 flex-shrink-0">▸</span>
                <span>
                  <strong className="text-white">商用利用は要確認。</strong>
                  無料枠は個人利用が前提で、広告・販売用途にはGoogle Workspace with Gemini等の有料プランが必要。
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* 使い方ステップ */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-6 border-l-4 border-yellow-500 pl-3">
            🪜 Nano Banana Pro の使い方 5ステップ
          </h2>
          <p className="text-gray-300 text-sm leading-relaxed mb-5">
            初めてでも迷わないよう、アクセスから高解像度書き出しまでの流れを順番に解説します。
          </p>
          <div className="space-y-3">
            {STEPS.map(({ step, title, desc }) => (
              <div key={step} className="flex gap-4 bg-gray-900 border border-gray-700 rounded-xl p-4">
                <div className="w-9 h-9 rounded-full bg-yellow-500 text-black font-black text-sm flex items-center justify-center flex-shrink-0">
                  {step}
                </div>
                <div className="flex-1">
                  <p className="font-bold text-white text-sm mb-1">{title}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 中間アフィリエイト */}
        <ArticleAffiliateBanner tags={["画像生成", "デザイン", "クリエイティブ"]} />

        {/* 他ツールとの比較 */}
        <section className="my-12">
          <h2 className="text-xl font-bold text-white mb-6 border-l-4 border-yellow-500 pl-3">
            🆚 Midjourney・DALL-E 3・Stable Diffusion との違い
          </h2>
          <div className="space-y-4">
            {COMPARE.map((tool) => (
              <div key={tool.name} className="bg-gray-900 border border-gray-700 rounded-xl p-5">
                <h3 className="text-white font-black text-base mb-2">{tool.name}</h3>
                <p className="text-green-300 text-xs font-bold mb-1">✅ 強み</p>
                <p className="text-gray-300 text-sm leading-relaxed mb-2">{tool.strength}</p>
                <p className="text-red-300 text-xs font-bold mb-1">❌ 弱み</p>
                <p className="text-gray-300 text-sm leading-relaxed">{tool.weakness}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-300 text-xs mt-4 leading-relaxed">
            画像生成AI全体を横断比較したい場合は
            <Link href="/gazou-ai-guide" className="text-blue-300 hover:underline">
              画像生成AIおすすめ比較ガイド
            </Link>
            もあわせてご覧ください。
          </p>
        </section>

        {/* 注意点 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-6 border-l-4 border-red-500 pl-3">
            ⚠️ 使う前に確認すべきこと
          </h2>
          <div className="bg-red-900/10 border border-red-700/30 rounded-xl p-5 space-y-3">
            <div>
              <p className="font-bold text-red-200 text-sm mb-1">商用利用は無料枠の対象外</p>
              <p className="text-gray-300 text-sm leading-relaxed">
                広告・販売用の素材として使う場合は、Google Workspace with GeminiやVertex AI経由の有料プランが必要です。案件で使う前に必ずGoogleの最新の利用規約を確認してください。
              </p>
            </div>
            <div>
              <p className="font-bold text-red-200 text-sm mb-1">実在人物・著作物キャラクターは無断で使わない</p>
              <p className="text-gray-300 text-sm leading-relaxed">
                有名人の肖像や既存キャラクターを無断で生成に使うと、規約違反や権利侵害のリスクがあります。オリジナルの設定でプロンプトを作るのが安全です。
              </p>
            </div>
            <div>
              <p className="font-bold text-red-200 text-sm mb-1">無料枠の生成回数には上限がある</p>
              <p className="text-gray-300 text-sm leading-relaxed">
                1日あたりの生成回数には上限が設けられています（運用状況により変動）。業務で頻繁に使う場合は有料プランへの切り替えを検討しましょう。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-6 border-l-4 border-yellow-500 pl-3">
            よくある質問
          </h2>
          <div className="space-y-3">
            {FAQS.map(({ q, a }) => (
              <div key={q} className="bg-gray-900 border border-gray-700 rounded-xl p-5">
                <p className="font-bold text-white text-sm mb-2">Q. {q}</p>
                <p className="text-gray-300 text-sm leading-relaxed">A. {a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 内部リンク */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-6 border-l-4 border-blue-500 pl-3">
            あわせて読みたい
          </h2>
          <p className="text-gray-300 text-sm leading-[1.9]">
            画像生成AI全般を比較したい人は
            <Link href="/gazou-ai-guide" className="text-blue-300 hover:underline">
              画像生成AIおすすめ比較ガイド
            </Link>
            、Google製AIをまとめて使いこなしたい人は
            <Link href="/gemini-guide" className="text-blue-300 hover:underline">
              Gemini完全ガイド
            </Link>
            、生成した画像やデザインを副業に活かしたい人は
            <Link href="/ai-side-job" className="text-blue-300 hover:underline">
              AI副業ガイド
            </Link>
            もチェックしてみてください。
          </p>
        </section>

        <AffiliateSectionAiNews />
      </div>
    </main>
  );
}

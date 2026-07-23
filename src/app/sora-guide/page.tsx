import type { Metadata } from "next";
import Link from "next/link";
import AffiliateSectionAiNews from "@/components/AffiliateSectionAiNews";
import ArticleAffiliateBanner from "@/components/ArticleAffiliateBanner";

const PAGE_URL = "https://ai-news-site-wheat.vercel.app/sora-guide";
const PUBLISHED_AT = "2026-07-23";

export const metadata: Metadata = {
  title: "Sora 2 使い方完全ガイド2026【料金・日本語プロンプト・商用利用まで】",
  description:
    "OpenAI「Sora 2」の使い方を2026年最新版で解説。料金プラン（Plus/Pro）・日本語プロンプトのコツ・音声付き動画生成・商用利用の注意点・Veo3やKling AIとの違いまで、初めてでも迷わない手順で紹介します。",
  keywords: [
    "Sora 2 使い方",
    "Sora2 日本語",
    "Sora2 料金",
    "AI 動画生成 使い方",
    "Sora 商用利用",
    "ChatGPT Sora",
    "Sora2 プロンプト",
    "AI動画 無料",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Sora 2 使い方完全ガイド2026｜料金・日本語プロンプト・商用利用",
    description:
      "OpenAI「Sora 2」の始め方・料金プラン・日本語プロンプトのコツ・商用利用の注意点を解説。",
    type: "article",
    locale: "ja_JP",
    url: PAGE_URL,
    publishedTime: PUBLISHED_AT,
  },
  twitter: {
    card: "summary_large_image",
    title: "Sora 2 使い方完全ガイド2026",
    description: "OpenAI「Sora 2」の料金・日本語プロンプトのコツ・商用利用の注意点を解説。",
  },
};

/** 料金プラン1件分のデータ型 */
interface PricingPlan {
  name: string;
  icon: string;
  price: string;
  limit: string;
  bestFor: string;
  tags: string[];
}

/** 使い方ステップ1件分 */
interface UsageStep {
  step: number;
  title: string;
  desc: string;
}

/** よくある質問1件分 */
interface FaqItem {
  q: string;
  a: string;
}

const PLANS: PricingPlan[] = [
  {
    name: "ChatGPT Plus",
    icon: "💬",
    price: "月額 約3,000円（ChatGPT Plusに内包）",
    limit: "生成本数に制限あり。混雑時は生成が遅くなることがある",
    bestFor: "まずSora 2を試したい人・個人でSNS投稿用の短尺動画を作りたい人",
    tags: ["最安で試せる", "スマホアプリ対応"],
  },
  {
    name: "ChatGPT Pro",
    icon: "🚀",
    price: "月額 約30,000円",
    limit: "生成本数・解像度・優先処理が大幅に強化される上位プラン",
    bestFor: "商用利用や高頻度でSoraを使う制作者・チーム利用",
    tags: ["優先生成", "高解像度", "商用利用向け"],
  },
  {
    name: "Sora API（開発者向け）",
    icon: "🧩",
    price: "従量課金制（秒数・解像度に応じて変動）",
    limit: "自社サービスへの組み込みが前提。ChatGPTアプリとは別契約",
    bestFor: "自社アプリ・サービスにSoraの動画生成機能を組み込みたい開発者",
    tags: ["API連携", "従量課金"],
  },
];

const STEPS: UsageStep[] = [
  {
    step: 1,
    title: "ChatGPT Plus以上のプランに登録する",
    desc: "2026年1月の仕様変更以降、Sora 2は無料プランでは利用できません。ChatGPT Plus（またはPro）に加入し、Webまたは専用アプリからSoraにアクセスします。",
  },
  {
    step: 2,
    title: "プロンプトを入力する（日本語でもOK）",
    desc: "「誰が」「何を」「どんな場所で」「どんなカメラワークで」を具体的に書くほど精度が上がります。日本語プロンプトも通りますが、キャラクターの細かい動きや物理表現は英語の方がやや正確に反映される傾向があります。",
  },
  {
    step: 3,
    title: "スタイルプリセット・解像度を選ぶ",
    desc: "用意されたビジュアルスタイル（プリセット）から近いテイストを選ぶと、狙った雰囲気に近づけやすくなります。SNS投稿用なら縦型、YouTube用なら横型など、用途に合わせてアスペクト比も指定しましょう。",
  },
  {
    step: 4,
    title: "音声・セリフ・BGMを含めて生成する",
    desc: "Sora 2は映像だけでなく、セリフ・環境音・BGMまで統合して生成できるのが最大の特徴です。台詞を入れたい場合はプロンプトにセリフ内容を明記すると、口の動きと音声が同期した動画になります。",
  },
  {
    step: 5,
    title: "生成結果を確認し、必要なら再生成・編集する",
    desc: "一発で狙い通りになることは少ないため、プロンプトを微調整しながら数回生成するのが前提です。書き出した動画は他の動画編集ソフトに読み込んで、テロップやカット編集を加えると完成度が上がります。",
  },
];

const FAQS: FaqItem[] = [
  {
    q: "Sora 2は無料で使えますか？",
    a: "2026年1月10日の仕様変更により、無料プランでのSora 2利用は終了しました。現在はChatGPT Plus（月額約3,000円）またはPro（月額約30,000円）への加入が必須です。まず試したいだけならPlusプランで十分です。",
  },
  {
    q: "日本語プロンプトでも問題なく使えますか？",
    a: "使えます。ただし学習データの多くが英語のため、複雑な物理表現やキャラクターの細かい動きは英語プロンプトの方がやや正確に反映される傾向があります。一方で「日本人らしい人物」を出したい場合は、日本語で属性を指定した方が狙った見た目になりやすいという報告もあります。",
  },
  {
    q: "生成した動画を商用利用してもいいですか？",
    a: "商用利用には利用規約上の制約があります。実在の人物・著作権のあるキャラクターやブランドを無断で登場させることは禁止されており、商用配信・広告利用を検討する場合は必ずOpenAIの最新の利用規約とライセンス条件を確認してください。特にPlusプランでの生成物の商用利用可否は変更されることがあるため、案件で使う前の確認が欠かせません。",
  },
  {
    q: "Sora 2とVeo3・Kling AIはどう違いますか？",
    a: "Sora 2の強みは、映像とセリフ・効果音・BGMを一体で生成できる点と、ChatGPTエコシステムとの統合です。Veo3はGoogleのエコシステム（YouTube連携など）に強みがあり、Kling AIは中国発で人物の自然な動きの再現に定評があります。どれも一長一短のため、用途（SNS向け短尺か、広告向け高品質かなど）に応じて使い分けるのが実践的です。",
  },
  {
    q: "生成できる動画の長さや画質はどのくらいですか？",
    a: "最大で1080p・約25秒程度の動画を生成できます（プランや仕様により変動します）。長尺の動画が必要な場合は、複数のクリップを生成してから動画編集ソフトでつなぎ合わせる方法が一般的です。",
  },
];

/** FAQ構造化データ */
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

/** 記事構造化データ */
const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Sora 2 使い方完全ガイド2026【料金・日本語プロンプト・商用利用まで】",
  description:
    "OpenAI「Sora 2」の使い方・料金プラン・日本語プロンプトのコツ・商用利用の注意点をまとめた2026年最新版ガイド。",
  datePublished: PUBLISHED_AT,
  dateModified: PUBLISHED_AT,
  inLanguage: "ja",
  mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
  author: { "@type": "Organization", name: "AI News Japan" },
  publisher: { "@type": "Organization", name: "AI News Japan" },
};

export default function SoraGuidePage() {
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
          <span className="inline-block text-xs font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 rounded-full px-4 py-1 mb-4">
            🎬 2026年最新版
          </span>
          <h1 className="text-3xl sm:text-4xl font-black mb-4 leading-tight">
            Sora 2 使い方完全ガイド
            <br />
            <span className="text-indigo-300">2026年版</span>
          </h1>
          <p className="text-gray-300 text-sm leading-relaxed">
            料金プラン・日本語プロンプトのコツ・商用利用の注意点まで、
            <br className="hidden sm:block" />
            OpenAIのAI動画生成モデル「Sora 2」を迷わず使いこなす手順をまとめました。
          </p>
          <p className="text-gray-300 text-xs mt-3">公開日：2026年7月23日</p>
        </div>

        {/* 先に結論 */}
        <section className="mb-12">
          <div className="bg-indigo-900/20 border border-indigo-700/40 rounded-xl p-5">
            <h2 className="text-base font-bold text-indigo-200 mb-3">先に結論</h2>
            <ul className="space-y-2 text-sm text-gray-200 leading-relaxed">
              <li className="flex gap-2">
                <span className="text-indigo-300 flex-shrink-0">▸</span>
                <span>
                  <strong className="text-white">2026年1月から無料プランは廃止。</strong>
                  Sora 2を使うにはChatGPT Plus（月額約3,000円）以上への加入が必須。
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-indigo-300 flex-shrink-0">▸</span>
                <span>
                  <strong className="text-white">最大の強みは「映像＋音声」を一体生成できること。</strong>
                  セリフ・効果音・BGMまで含めた動画を1回の生成で作れる。
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-indigo-300 flex-shrink-0">▸</span>
                <span>
                  <strong className="text-white">日本語プロンプトも使えるが、複雑な動きは英語が有利。</strong>
                  人物の属性指定だけは日本語の方が狙い通りになりやすい。
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-indigo-300 flex-shrink-0">▸</span>
                <span>
                  <strong className="text-white">商用利用は規約の確認が必須。</strong>
                  実在人物・著作物キャラクターの無断登場はNG。案件利用前に必ず最新規約を確認する。
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* 料金プラン比較 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-6 border-l-4 border-indigo-500 pl-3">
            💰 Sora 2 料金プラン比較【2026年版】
          </h2>
          <div className="space-y-4">
            {PLANS.map((plan) => (
              <div key={plan.name} className="bg-gray-900 border border-gray-700 rounded-xl p-5">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="text-xl">{plan.icon}</span>
                  <h3 className="text-white font-black text-sm">{plan.name}</h3>
                </div>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {plan.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-indigo-900/20 text-indigo-300 border border-indigo-700/30 px-2 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs mb-3">
                  <div className="bg-green-900/10 border border-green-700/20 rounded px-2.5 py-1.5">
                    <span className="text-green-300 font-bold">💴 </span>
                    <span className="text-gray-200">{plan.price}</span>
                  </div>
                  <div className="bg-gray-800 rounded px-2.5 py-1.5">
                    <span className="text-gray-300 font-bold">📊 </span>
                    <span className="text-gray-200">{plan.limit}</span>
                  </div>
                </div>
                <div className="bg-gray-800 rounded px-2.5 py-1.5 text-xs">
                  <span className="text-gray-300">👤 向いている人：</span>
                  <span className="text-gray-200">{plan.bestFor}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-300 text-xs mt-4 leading-relaxed">
            ※料金・生成制限はOpenAIの都合で変更されます。契約前に必ず公式サイトで最新の内容を確認してください。
          </p>
        </section>

        {/* 中間アフィリエイト */}
        <ArticleAffiliateBanner tags={["動画", "クリエイター", "編集"]} />

        {/* 使い方ステップ */}
        <section className="my-12">
          <h2 className="text-xl font-bold text-white mb-6 border-l-4 border-indigo-500 pl-3">
            🪜 Sora 2 の使い方 5ステップ
          </h2>
          <p className="text-gray-300 text-sm leading-relaxed mb-5">
            初めてでも迷わないよう、登録から動画の書き出しまでの流れを順番に解説します。
          </p>
          <div className="space-y-3">
            {STEPS.map(({ step, title, desc }) => (
              <div key={step} className="flex gap-4 bg-gray-900 border border-gray-700 rounded-xl p-4">
                <div className="w-9 h-9 rounded-full bg-indigo-500 text-white font-black text-sm flex items-center justify-center flex-shrink-0">
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

        {/* 注意点 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-6 border-l-4 border-red-500 pl-3">
            ⚠️ 使う前に確認すべきこと
          </h2>
          <div className="bg-red-900/10 border border-red-700/30 rounded-xl p-5 space-y-3">
            <div>
              <p className="font-bold text-red-200 text-sm mb-1">実在人物・著作物キャラクターは無断で使わない</p>
              <p className="text-gray-300 text-sm leading-relaxed">
                有名人の肖像や既存アニメ・映画のキャラクターを無断で登場させる生成は、規約違反や権利侵害のリスクがあります。オリジナルの設定でプロンプトを作るのが安全です。
              </p>
            </div>
            <div>
              <p className="font-bold text-red-200 text-sm mb-1">商用利用の可否はプランごとに異なる</p>
              <p className="text-gray-300 text-sm leading-relaxed">
                広告・クライアントワークで使う場合は、契約しているプランの利用規約で商用利用が許可されているかを必ず事前確認してください。規約は改定されることがあります。
              </p>
            </div>
            <div>
              <p className="font-bold text-red-200 text-sm mb-1">混雑時は生成待ちが発生する</p>
              <p className="text-gray-300 text-sm leading-relaxed">
                アクセスが集中する時間帯は生成に時間がかかることがあります。納期がある制作では余裕を持ったスケジュールで作業しましょう。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-6 border-l-4 border-indigo-500 pl-3">
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
            AI動画生成ツール全般を比較したい人は
            <Link href="/ai-video-guide" className="text-blue-300 hover:underline">
              AI動画生成ツール完全ガイド
            </Link>
            もあわせてどうぞ。ChatGPTの新しいAI内蔵ブラウザに興味があるなら
            <Link href="/chatgpt-atlas-guide" className="text-blue-300 hover:underline">
              ChatGPT Atlas使い方ガイド
            </Link>
            、生成した動画をSNSで発信して収益化したい人は
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

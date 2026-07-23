import type { Metadata } from "next";
import Link from "next/link";
import AffiliateSectionAiNews from "@/components/AffiliateSectionAiNews";
import ArticleAffiliateBanner from "@/components/ArticleAffiliateBanner";

const PAGE_URL = "https://ai-news-site-wheat.vercel.app/chatgpt-atlas-guide";
const PUBLISHED_AT = "2026-07-23";

export const metadata: Metadata = {
  title: "ChatGPT Atlas 使い方完全ガイド2026【AI内蔵ブラウザ・エージェントモード】",
  description:
    "OpenAIのAI統合ブラウザ「ChatGPT Atlas」の使い方を解説。サイドチャット・ブラウザメモリ・エージェントモードの使い方から、対応OS・セキュリティの注意点、既存ブラウザとの違いまで2026年最新版でまとめました。",
  keywords: [
    "ChatGPT Atlas 使い方",
    "ChatGPT Atlas とは",
    "AI ブラウザ",
    "ChatGPT Atlas エージェントモード",
    "ChatGPT Atlas ダウンロード",
    "ChatGPT Atlas セキュリティ",
    "AI 内蔵ブラウザ 比較",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "ChatGPT Atlas 使い方完全ガイド2026｜AI内蔵ブラウザの全機能",
    description:
      "ChatGPT Atlasのサイドチャット・エージェントモードの使い方とセキュリティ上の注意点を解説。",
    type: "article",
    locale: "ja_JP",
    url: PAGE_URL,
    publishedTime: PUBLISHED_AT,
  },
  twitter: {
    card: "summary_large_image",
    title: "ChatGPT Atlas 使い方完全ガイド2026",
    description: "AI内蔵ブラウザ「ChatGPT Atlas」の使い方とセキュリティの注意点を解説。",
  },
};

/** 主要機能1件分のデータ型 */
interface AtlasFeature {
  name: string;
  icon: string;
  desc: string;
  tip: string;
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

const FEATURES: AtlasFeature[] = [
  {
    name: "サイドチャット",
    icon: "💬",
    desc: "画面右側に常時ChatGPTのチャット欄が表示され、今開いているページの内容について質問できる。ページを移動してタブを切り替える手間がなくなる。",
    tip: "長い記事や資料を開いたまま「要約して」「ここの意味は？」と聞くだけで理解が早まる。",
  },
  {
    name: "ブラウザメモリ",
    icon: "🧠",
    desc: "過去の閲覧履歴やタスクの文脈を記憶し、次回以降の提案や作業補助に活用する機能。継続的な調査・作業に強い。",
    tip: "同じテーマを何日かにわたって調べる案件で威力を発揮する。不要な記憶は設定からいつでも削除できる。",
  },
  {
    name: "エージェントモード",
    icon: "🤖",
    desc: "指示を出すとAIがブラウザを自動操作し、検索・ページ遷移・情報抽出・フォーム入力などの一連の作業を代行する。",
    tip: "リサーチや資料集めなど「決まった手順の繰り返し作業」から任せると効果を実感しやすい。決済や個人情報の入力は必ず自分の目で確認する。",
  },
  {
    name: "スマート検索",
    icon: "🔎",
    desc: "アドレスバーからの検索とChatGPTへの質問が統合され、通常のWeb検索とAIへの質問を意識せず使い分けられる。",
    tip: "「調べたいこと」を検索する感覚でそのまま打ち込めば、必要に応じてAIの回答も一緒に表示される。",
  },
];

const STEPS: UsageStep[] = [
  {
    step: 1,
    title: "公式サイトからダウンロードする",
    desc: "OpenAIの公式サイトからChatGPT Atlasをダウンロードします。提供OSは順次拡大しているため、対応状況は必ず公式サイトの最新情報を確認してください。",
  },
  {
    step: 2,
    title: "ChatGPTアカウントでログインする",
    desc: "既存のChatGPTアカウント（無料・Plus・Pro）でそのままログインできます。プランによって使えるエージェントモードの実行回数などに差があります。",
  },
  {
    step: 3,
    title: "サイドチャットで普段のブラウジングを試す",
    desc: "まずはニュースサイトや資料を開いた状態でサイドチャットに質問してみましょう。「要約して」「重要な数字だけ抜き出して」など具体的な指示が効果的です。",
  },
  {
    step: 4,
    title: "エージェントモードで定型作業を任せる",
    desc: "複数サイトを回って情報を集める、フォームに繰り返し入力するといった定型作業から任せてみると、時間短縮の効果を実感しやすいです。",
  },
  {
    step: 5,
    title: "権限・メモリ設定を自分の使い方に合わせて調整する",
    desc: "ブラウザメモリの保存範囲や、エージェントモードがアクセスできる操作範囲は設定から調整できます。業務利用では扱う情報の機密性に応じて権限を絞り込むことをおすすめします。",
  },
];

const FAQS: FaqItem[] = [
  {
    q: "ChatGPT Atlasは無料で使えますか？",
    a: "ChatGPT Atlas自体のダウンロードは無料で、既存のChatGPTアカウント（無料プラン含む）でログインして使えます。ただしエージェントモードの実行回数や高度な機能は、Plus・Proなど有料プランの方が制限が緩い傾向があります。",
  },
  {
    q: "普段使っているブラウザ（Chrome・Edgeなど）から乗り換える必要がありますか？",
    a: "必須ではありません。AIを使った調べ物や定型作業をする時だけAtlasを開き、普段のブラウジングは今までのブラウザを使うという併用の仕方でも十分メリットを得られます。",
  },
  {
    q: "エージェントモードにパスワードやカード情報の入力を任せても安全ですか？",
    a: "ログイン情報や決済情報を含む操作は、必ず自分の目で最終確認してから実行することを強くおすすめします。エージェントが誤ったページを開いたり、意図しない操作をするリスクはゼロではないため、金銭や個人情報が絡む操作は自動化の範囲を限定的にするのが安全です。",
  },
  {
    q: "ChatGPT Atlasと他のAIブラウザ・拡張機能はどう違いますか？",
    a: "ChatGPT Atlasの強みは、OpenAIのモデルとブラウザ操作が最初から統合されている点です。ブラウザ拡張機能タイプのAIツールと比べて、ページ文脈の理解精度やエージェントの操作範囲が広く設計されています。一方でブラウザ自体を乗り換える必要があるため、既存の拡張機能やブックマーク環境をそのまま使いたい人は移行の手間を考慮する必要があります。",
  },
  {
    q: "対応しているOSを教えてください。",
    a: "提供開始時はmacOS版が先行し、その後Windows・iOS・Androidへの対応が順次進められています。対応状況は更新が早いため、利用前に必ず公式サイトで最新の対応OSを確認してください。",
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
  headline: "ChatGPT Atlas 使い方完全ガイド2026【AI内蔵ブラウザ・エージェントモード】",
  description:
    "OpenAIのAI統合ブラウザ「ChatGPT Atlas」の使い方・主要機能・セキュリティの注意点をまとめた2026年最新版ガイド。",
  datePublished: PUBLISHED_AT,
  dateModified: PUBLISHED_AT,
  inLanguage: "ja",
  mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
  author: { "@type": "Organization", name: "AI News Japan" },
  publisher: { "@type": "Organization", name: "AI News Japan" },
};

export default function ChatgptAtlasGuidePage() {
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
            🌐 2026年最新版
          </span>
          <h1 className="text-3xl sm:text-4xl font-black mb-4 leading-tight">
            ChatGPT Atlas
            <br />
            <span className="text-indigo-300">使い方完全ガイド2026年版</span>
          </h1>
          <p className="text-gray-300 text-sm leading-relaxed">
            サイドチャット・エージェントモードの使い方から、
            <br className="hidden sm:block" />
            セキュリティ上の注意点まで、AI内蔵ブラウザの全機能をまとめました。
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
                  <strong className="text-white">ChatGPT AtlasはOpenAI製のAI統合ブラウザ。</strong>
                  既存のChatGPTアカウントでそのままログインでき、無料プランでも利用可能。
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-indigo-300 flex-shrink-0">▸</span>
                <span>
                  <strong className="text-white">最大の特徴はエージェントモード。</strong>
                  検索・ページ遷移・情報抽出などの定型作業をAIが自動で代行する。
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-indigo-300 flex-shrink-0">▸</span>
                <span>
                  <strong className="text-white">乗り換え不要で併用できる。</strong>
                  AIを使いたい時だけ開く使い方でも十分メリットがある。
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-indigo-300 flex-shrink-0">▸</span>
                <span>
                  <strong className="text-white">決済・個人情報の自動操作は要注意。</strong>
                  重要な操作は必ず自分の目で最終確認してから実行する。
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* 主要機能 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-6 border-l-4 border-indigo-500 pl-3">
            🧩 ChatGPT Atlas の主要機能4つ
          </h2>
          <div className="space-y-4">
            {FEATURES.map((f) => (
              <div key={f.name} className="bg-gray-900 border border-gray-700 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">{f.icon}</span>
                  <h3 className="text-white font-black text-sm">{f.name}</h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-3">{f.desc}</p>
                <div className="bg-gray-800 rounded px-2.5 py-1.5 text-xs">
                  <span className="text-indigo-300 font-bold">💡 使い方のコツ：</span>
                  <span className="text-gray-200">{f.tip}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 中間アフィリエイト */}
        <ArticleAffiliateBanner tags={["ブラウザ", "生産性", "業務効率化"]} />

        {/* 使い方ステップ */}
        <section className="my-12">
          <h2 className="text-xl font-bold text-white mb-6 border-l-4 border-indigo-500 pl-3">
            🪜 ChatGPT Atlas の始め方 5ステップ
          </h2>
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
              <p className="font-bold text-red-200 text-sm mb-1">エージェントモードの操作範囲を確認する</p>
              <p className="text-gray-300 text-sm leading-relaxed">
                自動操作の対象範囲は設定で調整できます。業務で使う場合は、機密情報にアクセスできる範囲を必要最小限に絞り込みましょう。
              </p>
            </div>
            <div>
              <p className="font-bold text-red-200 text-sm mb-1">決済・ログイン操作は必ず目視確認する</p>
              <p className="text-gray-300 text-sm leading-relaxed">
                AIが意図しないページを開いたり誤操作をするリスクはゼロではありません。お金や個人情報が絡む操作は自動化に任せきりにせず、実行前に内容を確認してください。
              </p>
            </div>
            <div>
              <p className="font-bold text-red-200 text-sm mb-1">ブラウザメモリの保存範囲を把握しておく</p>
              <p className="text-gray-300 text-sm leading-relaxed">
                閲覧履歴やタスクの文脈が記憶される仕組みのため、共有端末で使う場合は設定を確認し、必要に応じて記憶を削除しましょう。
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
            OpenAIの動画生成AI「Sora 2」の使い方は
            <Link href="/sora-guide" className="text-blue-300 hover:underline">
              Sora 2使い方ガイド
            </Link>
            にまとめています。ChatGPT全般の使い方をおさらいしたい人は
            <Link href="/chatgpt-guide" className="text-blue-300 hover:underline">
              ChatGPT使い方ガイド
            </Link>
            、業務効率化に活かしたい人は
            <Link href="/ai-business-guide" className="text-blue-300 hover:underline">
              AI業務活用ガイド
            </Link>
            もどうぞ。
          </p>
        </section>

        <AffiliateSectionAiNews />
      </div>
    </main>
  );
}

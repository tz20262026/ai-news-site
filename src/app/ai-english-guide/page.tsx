import type { Metadata } from "next";
import Link from "next/link";
import AffiliateSectionAiNews from "@/components/AffiliateSectionAiNews";
import ArticleAffiliateBanner from "@/components/ArticleAffiliateBanner";

const PAGE_URL = "https://ai-news-site-wheat.vercel.app/ai-english-guide";
const PUBLISHED_AT = "2026-07-20";

export const metadata: Metadata = {
  title: "AI英語学習・AI英会話アプリ 比較ガイド2026年版【スピーク・スピークバディ・ChatGPT】",
  description:
    "スピーク(Speak)・スピークバディ・ELSA Speak・Duolingo・ChatGPT音声会話を2026年版で比較。料金の目安・特徴・向いている人を解説。ChatGPTを英会話練習に使う具体的な手順や、失敗しないAI英会話アプリの選び方4ステップもまとめました。",
  keywords: [
    "AI 英会話 アプリ",
    "AI 英語学習",
    "スピークバディ 評判",
    "ChatGPT 英会話 やり方",
    "AI 英会話 無料",
    "スピーク アプリ",
    "ELSA Speak",
    "英会話 アプリ おすすめ",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "AI英語学習・AI英会話アプリ 比較ガイド2026年版【料金・選び方】",
    description:
      "スピーク・スピークバディ・ELSA Speak・Duolingo・ChatGPT音声会話の特徴と選び方を比較。自分に合うAI英会話アプリの見つけ方を解説。",
    type: "article",
    locale: "ja_JP",
    url: PAGE_URL,
    publishedTime: PUBLISHED_AT,
  },
  twitter: {
    card: "summary_large_image",
    title: "AI英語学習・AI英会話アプリ 比較ガイド2026年版",
    description: "スピーク・スピークバディ・ELSA Speak・ChatGPT音声会話の特徴と選び方を比較。",
  },
};

/** AI英会話アプリ1件分のデータ型 */
interface AiEnglishApp {
  name: string;
  icon: string;
  provider: string;
  level: "初心者向け" | "中級者向け" | "全レベル";
  summary: string;
  fee: string;
  feature: string;
  bestFor: string;
  caution: string;
  tags: string[];
}

/** ChatGPT英会話の手順1ステップ分 */
interface ChatGptStep {
  step: number;
  title: string;
  desc: string;
}

/** 選び方1ステップ分 */
interface ChooseStep {
  step: number;
  title: string;
  desc: string;
}

/** よくある質問1件分 */
interface FaqItem {
  q: string;
  a: string;
}

const APPS: AiEnglishApp[] = [
  {
    name: "スピーク（Speak）",
    icon: "🗣️",
    provider: "Speakeasy Labs",
    level: "全レベル",
    summary:
      "OpenAIの技術を活用したことで知られる、会話量重視のAI英会話アプリ。AIチューターと自由な会話ができ、発話量を徹底的に増やす設計が特徴。レッスンは実践的なフレーズ中心で、間違いへのフィードバックもその場で返ってくる。「とにかく口を動かす練習がしたい」人の定番になりつつある。",
    fee: "料金の目安：月額プランで数千円程度（年払いで割安になるプランあり）",
    feature: "AIと自由会話できる「AIチューター」機能・発話量重視のカリキュラム",
    bestFor: "スピーキングの練習量を確保したい人・対人英会話に緊張してしまう人・独学で会話練習を続けたい人",
    caution: "自由会話の楽しさに頼ると文法や語彙の土台作りが手薄になりがち。基礎学習と併用したい。",
    tags: ["発話量重視", "AI自由会話", "スマホ完結"],
  },
  {
    name: "スピークバディ",
    icon: "🤖",
    provider: "スピークバディ（日本企業）",
    level: "初心者向け",
    summary:
      "AIキャラクターと会話しながら学ぶ日本発のAI英会話アプリ。日本人学習者向けに設計されており、シナリオ会話→単語・フレーズ学習→発音チェックと段階を踏んで進む構成。「いきなり自由会話は不安」という初心者でも取り組みやすく、レベル診断から自分に合ったカリキュラムを組んでくれる。",
    fee: "料金の目安：月額数千円程度（12ヶ月プランなどの長期割引あり）",
    feature: "日本人向け設計・レベル診断とカリキュラム自動生成・発音評価",
    bestFor: "英会話初心者・何から始めるべきか決めてほしい人・日本語のサポートがあるアプリが安心な人",
    caution: "シナリオ中心のため、完全に自由な雑談練習をしたい上級者には物足りない場合がある。",
    tags: ["初心者向け", "日本発", "カリキュラム型"],
  },
  {
    name: "ELSA Speak",
    icon: "🎯",
    provider: "ELSA",
    level: "全レベル",
    summary:
      "発音矯正に特化したAI英語学習アプリ。音声認識AIがユーザーの発音を音素レベルで分析し、「どの音がネイティブとどうズレているか」を具体的に指摘してくれる。会話の流暢さより先に「通じる発音」を作りたい人に強く、TOEFL・IELTSなどスピーキング試験対策の発音トレーニングにも使われている。",
    fee: "料金の目安：無料版あり・有料版は月額数百円〜千円台程度",
    feature: "音素レベルの発音分析・弱点に合わせた発音トレーニング",
    bestFor: "発音にコンプレックスがある人・「通じない」経験をしたことがある人・スピーキング試験の対策をしたい人",
    caution: "発音特化のため、これ1本で会話力全体は伸びない。会話系アプリとの併用が前提。",
    tags: ["発音特化", "無料版あり", "試験対策"],
  },
  {
    name: "Duolingo（AI機能）",
    icon: "🦉",
    provider: "Duolingo",
    level: "初心者向け",
    summary:
      "世界的に有名なゲーム感覚の語学アプリ。基本無料で始められ、連続記録（ストリーク）やリーグ戦など、継続させる仕組みが世界トップクラス。上位プランではAIを活用した会話練習や間違いの解説機能が提供されており、「まず英語学習の習慣を作る」入り口として最適。",
    fee: "料金の目安：基本無料（広告あり）・AI機能を含む上位プランは月額千円〜数千円程度",
    feature: "ゲーミフィケーションによる習慣化・基礎から段階的に学べるコース設計",
    bestFor: "英語学習が三日坊主になりがちな人・まず無料で始めたい人・基礎の単語と文法からやり直したい人",
    caution: "無料版だけでは会話練習量が不足しがち。会話力を上げたい段階になったら会話特化アプリへ。",
    tags: ["基本無料", "習慣化に強い", "ゲーム感覚"],
  },
  {
    name: "ChatGPT音声会話",
    icon: "💬",
    provider: "OpenAI",
    level: "中級者向け",
    summary:
      "英会話専用アプリではないが、音声会話モードを使えば「無料枠から始められる英会話パートナー」になる。話すスピード・話題・訂正の厳しさなどを指示で自由にカスタマイズでき、ロールプレイ（面接・会議・旅行）も自在。使い方の工夫次第で専用アプリに匹敵する練習環境を作れるのが最大の魅力。",
    fee: "料金の目安：無料枠あり・有料プランは月額数千円程度（利用制限が緩和される）",
    feature: "会話内容を完全カスタマイズ可能・場面別ロールプレイ・訂正やフィードバックも指示できる",
    bestFor: "自分で練習メニューを設計したい人・仕事の場面（会議・メール）に直結する練習がしたい人・費用を抑えたい人",
    caution: "英会話用の教材やカリキュラムはないため、初心者が丸腰で使うと続かない。下記の手順を参考に。",
    tags: ["無料枠あり", "カスタマイズ自在", "ロールプレイ"],
  },
];

const CHATGPT_STEPS: ChatGptStep[] = [
  {
    step: 1,
    title: "音声会話モードを起動する",
    desc: "ChatGPTのスマホアプリを開き、音声会話（ボイスモード）を開始します。イヤホンを使うと聞き取りやすく、外でも練習しやすくなります。",
  },
  {
    step: 2,
    title: "最初に「英会話の先生」の役割を指示する",
    desc: "例：「あなたは英会話の先生です。私は英語初級者です。簡単な英語でゆっくり話し、私が文法を間違えたら会話の後に訂正してください」。この一言で練習の質が大きく変わります。",
  },
  {
    step: 3,
    title: "場面（シチュエーション）を決めてロールプレイする",
    desc: "「海外旅行のホテルのチェックインの場面をロールプレイしましょう。あなたはフロント係です」のように場面を指定すると、実際に使う英語を練習できます。仕事の会議・自己紹介・面接練習も可能です。",
  },
  {
    step: 4,
    title: "会話後に「今日の間違いまとめ」を作らせる",
    desc: "会話が終わったら「今の会話で私が間違えた表現と、より自然な言い方を一覧にしてください」と頼みます。これが自分専用の復習ノートになります。",
  },
  {
    step: 5,
    title: "同じ場面をもう一度やって定着させる",
    desc: "訂正された表現を使って同じ場面をもう一度ロールプレイします。「言えなかった→言えた」に変わる瞬間が、AI英会話でいちばん力が付くポイントです。",
  },
];

const CHOOSE_STEPS: ChooseStep[] = [
  {
    step: 1,
    title: "目的を1つに絞る（会話量・発音・習慣化・仕事）",
    desc: "「会話量を増やしたい」ならスピークやChatGPT、「発音」ならELSA Speak、「まず習慣化」ならDuolingo、「初心者が段階的に」ならスピークバディ。目的が決まればアプリはほぼ自動的に決まります。",
  },
  {
    step: 2,
    title: "無料版・無料体験で「声を出す練習」を必ず試す",
    desc: "AI英会話アプリの相性は、実際に声を出してみないとわかりません。発音判定の厳しさ・AIの応答速度・自分が続けられそうかを、課金前に無料の範囲で確認しましょう。",
  },
  {
    step: 3,
    title: "1日の練習時間から料金プランを逆算する",
    desc: "1日5分しか取れないのに高機能な年間プランを契約するのは典型的な失敗です。まず月額プランで1ヶ月続くか試し、習慣になってから長期プランで割安にするのが安全です。",
  },
  {
    step: 4,
    title: "3ヶ月後に「話せるようになりたい場面」を決めて測る",
    desc: "「海外旅行で注文できる」「会議で一言発言できる」など具体的なゴールを決め、3ヶ月後にその場面をロールプレイして達成度を確認します。伸びが感じられなければアプリを乗り換えるサインです。",
  },
];

const FAQS: FaqItem[] = [
  {
    q: "AI英会話アプリは無料でも使えますか？",
    a: "使えます。Duolingoは基本無料で始められ、ELSA Speakにも無料版があります。ChatGPTの音声会話も無料枠から試せます。ただし無料版は練習量や機能に制限があるため、本格的に会話量を増やす段階になったら、有料プランや会話特化アプリの検討をおすすめします。",
  },
  {
    q: "AI英会話とオンライン英会話（人間の講師）はどちらがいいですか？",
    a: "役割が違います。AI英会話は「24時間いつでも・恥ずかしさゼロで・低コストに練習量を稼ぐ」のに向いており、人間の講師は「実際のコミュニケーションの緊張感・雑談の予測不能さ・文化的なニュアンス」を学ぶのに向いています。AIで練習量を確保し、月数回は人間と話す併用が理想的です。",
  },
  {
    q: "まったくの英語初心者はどのアプリから始めるべきですか？",
    a: "初心者にはスピークバディまたはDuolingoがおすすめです。どちらも段階的なカリキュラムがあり、「何を勉強すればいいか」をアプリ側が決めてくれます。いきなりChatGPTやスピークの自由会話から入ると、言葉が出てこず挫折しやすいため、基礎を作ってから会話量重視のアプリに進むのが定番ルートです。",
  },
  {
    q: "ChatGPTで英会話の練習をするのは効果がありますか？",
    a: "使い方次第で十分効果があります。ポイントは「先生役を指示する」「場面を決めてロールプレイする」「会話後に間違いをまとめさせる」の3つです。専用アプリのようなカリキュラムはないため、この記事で紹介した5ステップの型に沿って練習メニューを固定すると継続しやすくなります。",
  },
  {
    q: "AI英会話アプリの料金はどのくらいかかりますか？",
    a: "目安として、無料で始められるもの（Duolingo・ELSA Speak無料版・ChatGPT無料枠）から、月額数百円〜数千円程度の有料プランまで幅があります。多くのアプリは年払いにすると月あたりの負担が下がります。料金は改定されることがあるため、契約前に必ず各アプリの公式サイトで最新の金額を確認してください。",
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
  headline: "AI英語学習・AI英会話アプリ 比較ガイド2026年版【スピーク・スピークバディ・ChatGPT】",
  description:
    "スピーク・スピークバディ・ELSA Speak・Duolingo・ChatGPT音声会話の料金の目安・特徴・向いている人を比較し、AI英会話アプリの選び方とChatGPTを英会話練習に使う手順を解説する。",
  datePublished: PUBLISHED_AT,
  dateModified: PUBLISHED_AT,
  inLanguage: "ja",
  mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
  author: { "@type": "Organization", name: "AI News Japan" },
  publisher: { "@type": "Organization", name: "AI News Japan" },
};

/** レベルバッジの色分け */
const levelColor: Record<AiEnglishApp["level"], string> = {
  初心者向け: "bg-green-500/20 text-green-300 border-green-500/30",
  中級者向け: "bg-amber-500/20 text-amber-300 border-amber-500/30",
  全レベル: "bg-blue-500/20 text-blue-300 border-blue-500/30",
};

export default function AiEnglishGuidePage() {
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
          <span className="inline-block text-xs font-bold bg-blue-500/20 text-blue-300 border border-blue-500/30 rounded-full px-4 py-1 mb-4">
            🗣️ 2026年最新版
          </span>
          <h1 className="text-3xl sm:text-4xl font-black mb-4 leading-tight">
            AI英語学習・AI英会話アプリ
            <br />
            <span className="text-blue-300">比較ガイド2026年版</span>
            <br />
            <span className="text-lg sm:text-xl text-gray-300 font-bold">
              【スピーク・スピークバディ・ChatGPT】
            </span>
          </h1>
          <p className="text-gray-300 text-sm leading-relaxed">
            料金の目安・特徴・向いている人を比較し、
            <br className="hidden sm:block" />
            自分に合うAI英会話アプリの選び方とChatGPT活用の手順をまとめました。
          </p>
          <p className="text-gray-300 text-xs mt-3">公開日：2026年7月20日</p>
        </div>

        {/* 結論を先に置く（AI検索に引用されやすい形） */}
        <section className="mb-12">
          <div className="bg-blue-900/20 border border-blue-700/40 rounded-xl p-5">
            <h2 className="text-base font-bold text-blue-200 mb-3">先に結論</h2>
            <ul className="space-y-2 text-sm text-gray-200 leading-relaxed">
              <li className="flex gap-2">
                <span className="text-blue-300 flex-shrink-0">▸</span>
                <span>
                  <strong className="text-white">初心者はスピークバディかDuolingoから。</strong>
                  カリキュラムが用意されているので「何をやるか」で迷わず、挫折しにくい。
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-300 flex-shrink-0">▸</span>
                <span>
                  <strong className="text-white">会話量を増やしたいならスピーク（Speak）。</strong>
                  AIとの自由会話で発話量を稼げる。対人英会話が緊張する人の練習場としても最適。
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-300 flex-shrink-0">▸</span>
                <span>
                  <strong className="text-white">発音を直したいならELSA Speak一択。</strong>
                  音素レベルで発音のズレを指摘してくれる。会話系アプリと併用して使う。
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-300 flex-shrink-0">▸</span>
                <span>
                  <strong className="text-white">費用を抑えたいならChatGPT音声会話。</strong>
                  無料枠から始められる。「先生役の指示＋ロールプレイ＋間違いまとめ」の型で使えば専用アプリ級の練習になる。
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* アプリ比較 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-6 border-l-4 border-blue-500 pl-3">
            🗣️ 主要AI英会話アプリ5選【料金・特徴・向いている人を比較】
          </h2>
          <div className="space-y-4">
            {APPS.map((app) => (
              <div key={app.name} className="bg-gray-900 border border-gray-700 rounded-xl p-5">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="text-xl">{app.icon}</span>
                  <h3 className="text-white font-black text-sm">{app.name}</h3>
                  <span
                    className={`text-xs font-bold px-2 py-0.5 rounded-full border ${levelColor[app.level]}`}
                  >
                    {app.level}
                  </span>
                </div>

                <p className="text-gray-300 text-xs mb-2">提供：{app.provider}</p>

                <div className="flex flex-wrap gap-1.5 mb-3">
                  {app.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-blue-900/20 text-blue-300 border border-blue-700/30 px-2 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-gray-300 text-sm leading-relaxed mb-3">{app.summary}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs mb-3">
                  <div className="bg-green-900/10 border border-green-700/20 rounded px-2.5 py-1.5">
                    <span className="text-green-300 font-bold">💰 </span>
                    <span className="text-gray-200">{app.fee}</span>
                  </div>
                  <div className="bg-gray-800 rounded px-2.5 py-1.5">
                    <span className="text-gray-300 font-bold">✨ </span>
                    <span className="text-gray-200">{app.feature}</span>
                  </div>
                </div>

                <div className="bg-gray-800 rounded px-2.5 py-1.5 text-xs mb-2">
                  <span className="text-gray-300">👤 向いている人：</span>
                  <span className="text-gray-200">{app.bestFor}</span>
                </div>
                <div className="bg-amber-900/10 border border-amber-700/20 rounded px-2.5 py-1.5 text-xs">
                  <span className="text-amber-300 font-bold">⚠️ 注意：</span>
                  <span className="text-gray-200">{app.caution}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-300 text-xs mt-4 leading-relaxed">
            ※料金・プラン内容は各サービスの都合で変更されます。契約前に必ず各公式サイトで最新の内容を確認してください。
          </p>
        </section>

        {/* ChatGPT英会話の手順 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-6 border-l-4 border-blue-500 pl-3">
            💬 ChatGPTを英会話練習に使う具体的な手順【5ステップ】
          </h2>
          <p className="text-gray-300 text-sm leading-relaxed mb-5">
            ChatGPTには英会話用のカリキュラムがない代わりに、指示の仕方で練習内容を自由に設計できます。
            以下の5ステップを「型」として毎回同じ流れで回すと、無料枠でも本格的な練習になります。
          </p>
          <div className="space-y-3">
            {CHATGPT_STEPS.map(({ step, title, desc }) => (
              <div key={step} className="flex gap-4 bg-gray-900 border border-gray-700 rounded-xl p-4">
                <div className="w-9 h-9 rounded-full bg-blue-500 text-white font-black text-sm flex items-center justify-center flex-shrink-0">
                  {step}
                </div>
                <div className="flex-1">
                  <p className="font-bold text-white text-sm mb-1">{title}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-300 text-xs mt-4 leading-relaxed">
            ChatGPT自体の基本操作は
            <Link href="/chatgpt-guide" className="text-blue-300 hover:underline">
              ChatGPT使い方ガイド
            </Link>
            で詳しく解説しています。
          </p>
        </section>

        {/* 中間アフィリエイト（英語学習にマッチ） */}
        <ArticleAffiliateBanner tags={["英語", "英語学習", "学習"]} />

        {/* 選び方4ステップ */}
        <section className="my-12">
          <h2 className="text-xl font-bold text-white mb-6 border-l-4 border-blue-500 pl-3">
            🪜 失敗しないAI英会話アプリの選び方【4ステップ】
          </h2>
          <p className="text-gray-300 text-sm leading-relaxed mb-5">
            AI英会話でいちばん多い失敗は「有名だから」で選んで数週間で使わなくなること。
            先に目的と続けられる時間を固定してから選ぶと、課金の失敗がなくなります。
          </p>
          <div className="space-y-3">
            {CHOOSE_STEPS.map(({ step, title, desc }) => (
              <div key={step} className="flex gap-4 bg-gray-900 border border-gray-700 rounded-xl p-4">
                <div className="w-9 h-9 rounded-full bg-blue-500 text-white font-black text-sm flex items-center justify-center flex-shrink-0">
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
            ⚠️ AI英会話を始める前に知っておくべきこと
          </h2>
          <div className="bg-red-900/10 border border-red-700/30 rounded-xl p-5 space-y-3">
            <div>
              <p className="font-bold text-red-200 text-sm mb-1">AIだけで「実戦」は完結しない</p>
              <p className="text-gray-300 text-sm leading-relaxed">
                AI英会話は練習量を稼ぐ最強のツールですが、実際の会話の緊張感や予測不能な展開はAIでは完全に再現できません。AIで自信をつけたら、オンライン英会話や実際の場面で試す機会を意識的に作りましょう。
              </p>
            </div>
            <div>
              <p className="font-bold text-red-200 text-sm mb-1">長期プランの一括払いは習慣化してから</p>
              <p className="text-gray-300 text-sm leading-relaxed">
                年間プランは割安ですが、続かなければ最も高い買い物になります。まず無料版や月額プランで1ヶ月継続できるかを確認してから、長期プランに切り替えるのが安全です。
              </p>
            </div>
            <div>
              <p className="font-bold text-red-200 text-sm mb-1">個人情報・機密情報は話さない</p>
              <p className="text-gray-300 text-sm leading-relaxed">
                AIとの会話データはサービスの品質改善に使われる場合があります。練習とはいえ、住所・勤務先の内部情報などの個人情報や機密情報は話題にしないようにしましょう。各アプリのプライバシーポリシーも一度確認しておくと安心です。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-6 border-l-4 border-blue-500 pl-3">
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
          <h2 className="text-xl font-bold text-white mb-6 border-l-4 border-cyan-500 pl-3">
            あわせて読みたい
          </h2>
          <p className="text-gray-300 text-sm leading-[1.9]">
            ChatGPTの基本操作をまだ押さえていない人は
            <Link href="/chatgpt-guide" className="text-blue-300 hover:underline">
              ChatGPT使い方ガイド
            </Link>
            から始めるのがおすすめです。AIツール全体を俯瞰したい人は
            <Link href="/ai-beginner-guide" className="text-blue-300 hover:underline">
              AI初心者完全ガイド
            </Link>
            と
            <Link href="/ai-tools-comparison" className="text-blue-300 hover:underline">
              AIツール比較ガイド
            </Link>
            が入り口になります。英文の読み書きには
            <Link href="/ai-translation-guide" className="text-blue-300 hover:underline">
              AI翻訳ツールガイド
            </Link>
            も役立ちます。
          </p>
        </section>

        <AffiliateSectionAiNews />
      </div>
    </main>
  );
}

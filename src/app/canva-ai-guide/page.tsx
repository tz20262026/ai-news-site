import type { Metadata } from "next";
import Link from "next/link";
import AffiliateSectionAiNews from "@/components/AffiliateSectionAiNews";

export const metadata: Metadata = {
  title:
    "Canva AI機能完全ガイド2026年版【Magic Studio・デザイン効率化・使い方】",
  description:
    "CanvaのAI機能「Magic Studio」を完全解説。Magic Write・Magic Design・Magic Edit・Text to Imageの使い方から料金プランまで2026年版で紹介。デザイン未経験でも高品質コンテンツを作る方法を解説。",
  keywords: [
    "Canva AI 使い方",
    "Canva Magic Studio",
    "Canva Magic Write",
    "Canva Magic Design",
    "Canva AI 画像生成",
    "Canva Pro 料金",
    "Canva デザイン効率化",
    "Canva Text to Image",
  ],
  alternates: {
    canonical: "https://ai-news-site-wheat.vercel.app/canva-ai-guide",
  },
  openGraph: {
    title:
      "Canva AI機能完全ガイド2026年版【Magic Studio・デザイン効率化・使い方】",
    description:
      "CanvaのAI機能「Magic Studio」を完全解説。Magic Write・Magic Design・Magic Edit・Text to Imageの使い方から料金プランまで2026年版で紹介。デザイン未経験でも高品質コンテンツを作る方法を解説。",
    type: "article",
    locale: "ja_JP",
    url: "https://ai-news-site-wheat.vercel.app/canva-ai-guide",
  },
  twitter: {
    card: "summary_large_image",
    title: "Canva AI機能完全ガイド2026年版",
    description:
      "Magic Studio全機能を徹底解説。デザイン未経験でもAIで高品質コンテンツが作れる方法を紹介。",
  },
};

/* ────────────────────────────────────────────
   データ定義
──────────────────────────────────────────── */

interface MagicFeature {
  id: string;
  name: string;
  icon: string;
  plan: "無料" | "Pro" | "Teams";
  description: string;
  howToUse: string;
  bestFor: string;
}

interface DesignUseCase {
  id: string;
  title: string;
  icon: string;
  template: string;
  aiFeatures: string[];
  outputFormat: string;
}

interface CanvaPlan {
  name: string;
  price: string;
  aiCredits: string;
  features: string[];
  recommended: boolean;
}

interface FAQ {
  question: string;
  answer: string;
}

const MAGIC_FEATURES: MagicFeature[] = [
  {
    id: "magic-write",
    name: "Magic Write",
    icon: "✍️",
    plan: "無料",
    description:
      "Canvaのデザイン内でAIがテキストを自動生成・改善する機能。プレゼンのスライド文章、SNS投稿のキャプション、ブログ記事のアウトラインなど、デザインに合ったテキストをリアルタイムで提案してくれる。無料プランでは月25回まで利用可能。",
    howToUse: "テキストボックスを選択 →「Magic Write」ボタン → 指示を入力 → 生成",
    bestFor: "プレゼン文章・SNSキャプション・商品説明文",
  },
  {
    id: "magic-design",
    name: "Magic Design",
    icon: "🎨",
    plan: "Pro",
    description:
      "テーマやキーワードを入力するだけで、Canvaの数百万テンプレートから最適なデザインを自動生成する機能。プレゼン・SNS投稿・チラシなどをゼロから作る必要がなくなり、デザインの出発点として非常に強力。生成後は自由にカスタマイズできる。",
    howToUse: "ホーム画面の「Magic Design」→ 用途・内容を入力 → テンプレート自動選択・カスタマイズ",
    bestFor: "プレゼン資料・ピッチデッキ・SNS投稿テンプレート",
  },
  {
    id: "magic-edit",
    name: "Magic Edit",
    icon: "🖌️",
    plan: "Pro",
    description:
      "画像内の特定の部分をブラシで塗って、テキストで置き換えや追加を指示できるAIインペイント機能。写真の背景を変更する、不要なオブジェクトを消す、新しい要素を追加するなど、Photoshopレベルの編集がCanvaのUI上で直感的に行える。",
    howToUse: "画像選択 →「編集」→「Magic Edit」→ 変更したい部分をブラシで塗る → テキストで指示",
    bestFor: "商品写真の背景変更・不要オブジェクト除去・広告クリエイティブ改善",
  },
  {
    id: "magic-eraser",
    name: "Magic Eraser",
    icon: "🧹",
    plan: "Pro",
    description:
      "写真内の不要な人物・物体・文字などをブラシで塗るだけで自然に消せるAI消去機能。AIが消去した部分の背景を自動補完するため、まるで最初からなかったかのような自然な仕上がりになる。商品写真の余計な影や背景整理に特に効果的。",
    howToUse: "画像選択 →「編集」→「Magic Eraser」→ 消したい部分をブラシでなぞる → 自動消去",
    bestFor: "商品写真の余白クリーンアップ・観光写真の人物除去・広告素材の最終仕上げ",
  },
  {
    id: "text-to-image",
    name: "Text to Image（AI画像生成）",
    icon: "🖼️",
    plan: "Pro",
    description:
      "テキストプロンプトを入力するだけでオリジナルのAI画像を生成できる機能。Stable DiffusionやDall-Eなど複数のAIモデルから選択でき、生成した画像はそのままCanvaデザインに配置して使える。著作権フリーで商用利用可能なのも大きなメリット。",
    howToUse: "「アプリ」→「Text to Image」→ 説明文を入力 → スタイルを選択 → 生成",
    bestFor: "SNS投稿のオリジナル画像・ブログ記事のアイキャッチ・広告クリエイティブ",
  },
  {
    id: "magic-expand",
    name: "Magic Expand",
    icon: "↔️",
    plan: "Pro",
    description:
      "画像を指定した方向・サイズに自動拡張するAI機能。縦型写真を横型ビジュアルに変換したい場合など、アスペクト比を変えながらAIが自然に背景を補完してくれる。SNS各プラットフォームのサイズ変換に非常に役立つ機能。",
    howToUse: "画像選択 →「編集」→「Magic Expand」→ 拡張方向・サイズを指定 → 自動補完",
    bestFor: "Instagram縦型→Twitter横型変換・ビルボードサイズへの引き伸ばし",
  },
];

const DESIGN_USE_CASES: DesignUseCase[] = [
  {
    id: "sns",
    title: "SNS投稿コンテンツ量産",
    icon: "📱",
    template: "Instagram・Twitter・TikTokサムネイルテンプレート",
    aiFeatures: ["Magic Design", "Text to Image", "Magic Write"],
    outputFormat: "1080×1080px（Instagram）/ 1200×675px（Twitter）など",
  },
  {
    id: "presentation",
    title: "プレゼン・ピッチデッキ作成",
    icon: "📊",
    template: "ビジネスプレゼン・スタートアップピッチデッキ",
    aiFeatures: ["Magic Design", "Magic Write", "AI画像生成"],
    outputFormat: "PDF・PPTXエクスポート / Canvaでのライブ発表",
  },
  {
    id: "marketing",
    title: "マーケティング素材制作",
    icon: "📣",
    template: "バナー広告・チラシ・ランディングページヘッダー",
    aiFeatures: ["Magic Edit", "Magic Eraser", "Magic Expand"],
    outputFormat: "PNG・JPG（高解像度）/ SVGエクスポート",
  },
  {
    id: "video",
    title: "動画・リール・YouTube素材",
    icon: "🎬",
    template: "YouTubeサムネイル・Reels・TikTokテンプレート",
    aiFeatures: ["Magic Write", "Text to Image", "Magic Design"],
    outputFormat: "MP4動画 / PNG静止画（1920×1080px）",
  },
];

const CANVA_PLANS: CanvaPlan[] = [
  {
    name: "無料",
    price: "¥0",
    aiCredits: "50クレジット/月",
    features: [
      "基本テンプレート25万点",
      "Magic Write（月25回）",
      "Text to Image（月50回）",
      "ストレージ5GB",
    ],
    recommended: false,
  },
  {
    name: "Pro",
    price: "¥1,500/月〜",
    aiCredits: "500クレジット/月",
    features: [
      "全テンプレート100万点",
      "全Magic Studio機能",
      "Magic Edit / Eraser / Expand",
      "背景リムーバー無制限",
      "ストレージ1TB",
    ],
    recommended: true,
  },
  {
    name: "Teams",
    price: "¥1,800/月/人〜",
    aiCredits: "500クレジット/月/人",
    features: [
      "全Pro機能",
      "ブランドキット複数設定",
      "チームテンプレート共有",
      "承認ワークフロー",
      "高度な管理機能",
    ],
    recommended: false,
  },
];

const FAQS: FAQ[] = [
  {
    question: "Canvaの無料プランでAI機能は使えますか？",
    answer:
      "はい、一部のAI機能は無料プランでも利用できます。Magic Writeは月25回、Text to Imageは月50回まで無料。ただしMagic Edit・Magic Eraser・Magic ExpandなどのMagic Studio上位機能はProプラン（¥1,500/月〜）が必要です。まずは無料版でAI機能を体験してみてください。",
  },
  {
    question: "Canva AIで生成した画像は商用利用できますか？",
    answer:
      "有料プラン（Pro・Teams）でAIを使って生成した画像は商用利用可能です。Canvaのコンテンツライセンスに従い、商品販売・広告・Webサイトなどへの使用が認められています。ただし、Canvaのストック素材を利用した場合は素材ごとのライセンスを確認することをお勧めします。",
  },
  {
    question: "Canva AIはAdobe製品と比べてどうですか？",
    answer:
      "Canvaは直感的なUIと豊富なテンプレートで、デザイン経験がない人でも素早く高品質な素材が作れます。AdobeのFirefly（Photoshop AI）は細部の制御精度が高く、プロユースに向いています。コスト面ではCanva Proが圧倒的に安く、SNS・プレゼン用途ならCanvaが最適です。",
  },
  {
    question: "Canva AIの生成画像のクオリティはどれくらいですか？",
    answer:
      "SNS投稿・プレゼン・Webバナーなどの一般的な用途では十分な品質です。Midjourney・Stable Diffusionほどのフォトリアリスティックな精度はありませんが、Canvaのテンプレートと組み合わせることで完成度の高いビジュアルが作れます。2026年時点でモデルは継続的に改善されています。",
  },
  {
    question: "Magic Writeは日本語に対応していますか？",
    answer:
      "はい、Magic Writeは日本語での文章生成・改善に対応しています。ただし英語の精度の方が若干高い場合があります。日本語でプロンプトを入力してから英語に翻訳するワークフローを使うと、さらに高品質な結果が得られます。Canvaの日本語UIも整備されており、全体的に日本語環境でも快適に利用できます。",
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

export default function CanvaAiGuidePage() {
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
            <span className="inline-block text-xs font-bold text-pink-400 uppercase tracking-widest bg-pink-400/10 px-4 py-1.5 rounded-full mb-4">
              2026年版 最新情報
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight mb-4">
              Canva AI機能完全ガイド2026年版
              <br />
              <span className="text-pink-400">
                【Magic Studio全機能・デザイン効率化・料金比較】
              </span>
            </h1>
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              デザイン未経験でも高品質なビジュアルが作れるCanvaのAI機能「Magic Studio」を完全解説。
              Magic Write・Magic Design・Magic Editなど全機能の使い方を実践的に紹介。
            </p>
            {/* 目次クイックリンク */}
            <div className="flex flex-wrap justify-center gap-2">
              {[
                { href: "#magic-studio", label: "Magic Studio機能" },
                { href: "#usecases", label: "活用シナリオ" },
                { href: "#pricing", label: "料金プラン" },
                { href: "#faq", label: "よくある質問" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-xs font-bold px-4 py-2 rounded-full bg-slate-800 text-pink-300 border border-slate-700 hover:bg-slate-700 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── 特徴3点 ── */}
        <section className="py-10 px-4 bg-slate-950">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { icon: "🎨", label: "デザイン不要", desc: "AIとテンプレートで誰でもプロ品質のビジュアルが完成" },
                { icon: "⚡", label: "圧倒的スピード", desc: "1つのコンテンツを複数サイズに一括展開" },
                { icon: "💰", label: "コスパ最強", desc: "Proで月¥1,500、全AI機能と100万テンプレートが使い放題" },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl bg-slate-900 border border-slate-800 p-5 text-center">
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <p className="font-black text-white text-base mb-1">{item.label}</p>
                  <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Magic Studio機能一覧 ── */}
        <section id="magic-studio" className="py-14 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
                Magic Studio 全機能解説
              </h2>
              <p className="text-gray-400 text-sm">
                テキスト生成から画像編集まで、Canvaの6大AI機能を徹底解説
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {MAGIC_FEATURES.map((feature) => (
                <div
                  key={feature.id}
                  className="rounded-2xl border border-slate-800 bg-slate-900 p-5 flex flex-col gap-3"
                >
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{feature.icon}</span>
                      <h3 className="font-black text-white text-base">{feature.name}</h3>
                    </div>
                    <span
                      className={`text-xs font-bold px-3 py-1 rounded-full flex-shrink-0 border ${
                        feature.plan === "無料"
                          ? "bg-emerald-500/15 text-emerald-300 border-emerald-500/30"
                          : "bg-pink-500/15 text-pink-300 border-pink-500/30"
                      }`}
                    >
                      {feature.plan}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="flex flex-col gap-2 mt-auto">
                    <div className="rounded-xl bg-slate-800 border border-slate-700 px-3 py-2">
                      <p className="text-xs font-bold text-pink-300 mb-0.5">使い方</p>
                      <p className="text-gray-300 text-xs leading-relaxed">{feature.howToUse}</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-pink-400 text-xs font-bold flex-shrink-0">向いている用途：</span>
                      <span className="text-gray-300 text-xs">{feature.bestFor}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* 補足情報 */}
            <div className="mt-8 rounded-2xl bg-slate-900 border border-pink-500/30 p-5">
              <p className="text-sm font-bold text-pink-300 mb-2">
                🎯 Magic Studio の呼び出し方
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                Canvaエディター上で要素を選択した状態で「編集」ボタンをクリックするか、
                テキストを入力するエリアにカーソルを置いて<span className="text-white font-bold">スラッシュ（/）キー</span>を押すと
                AIコマンドメニューが表示されます。また、ホーム画面の検索バーにAI機能名を入力しても素早くアクセスできます。
              </p>
            </div>
          </div>
        </section>

        {/* ── 活用シナリオ ── */}
        <section id="usecases" className="py-14 px-4 bg-slate-950">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
                用途別デザイン活用シナリオ
              </h2>
              <p className="text-gray-400 text-sm">
                SNS・プレゼン・マーケティング・動画の4領域で実践的な使い方を解説
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {DESIGN_USE_CASES.map((useCase) => (
                <div
                  key={useCase.id}
                  className="rounded-2xl border border-slate-800 bg-slate-900 p-5 flex flex-col gap-3"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{useCase.icon}</span>
                    <h3 className="font-black text-white text-base">{useCase.title}</h3>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="rounded-xl bg-slate-800 border border-slate-700 px-3 py-2">
                      <p className="text-xs font-bold text-gray-400 mb-0.5">使用テンプレート</p>
                      <p className="text-gray-300 text-xs">{useCase.template}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-pink-400 mb-1.5">活用するAI機能</p>
                      <div className="flex flex-wrap gap-1.5">
                        {useCase.aiFeatures.map((f) => (
                          <span key={f} className="text-xs font-bold px-2.5 py-1 rounded-full bg-pink-500/10 text-pink-300 border border-pink-500/20">
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-pink-400 text-xs font-bold">出力形式：</span>
                      <span className="text-gray-300 text-xs">{useCase.outputFormat}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* ワークフロー例 */}
            <div className="mt-8 rounded-2xl bg-slate-900 border border-slate-800 p-5 sm:p-6">
              <h3 className="font-black text-white text-base mb-4">
                ⚡ SNS投稿量産の推奨ワークフロー
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                {[
                  { step: "1", label: "Magic Designで\nベーステンプレ生成", icon: "🎨" },
                  { step: "2", label: "Text to Imageで\nオリジナル画像生成", icon: "🖼️" },
                  { step: "3", label: "Magic Writeで\nキャプション文章作成", icon: "✍️" },
                  { step: "4", label: "サイズ変換で\n各SNSに一括展開", icon: "📱" },
                ].map((item) => (
                  <div key={item.step} className="rounded-xl bg-slate-800 border border-slate-700 p-3 text-center">
                    <span className="text-xl mb-1.5 block">{item.icon}</span>
                    <span className="text-xs font-bold text-pink-400 block mb-1">Step {item.step}</span>
                    <p className="text-gray-300 text-xs leading-relaxed whitespace-pre-line">{item.label}</p>
                  </div>
                ))}
              </div>
              <p className="text-gray-400 text-xs leading-relaxed mt-4">
                このワークフローで1セットの投稿コンテンツを最短15分で作成可能。週間分をまとめて作れば、毎日の投稿作業が大幅に効率化されます。
              </p>
            </div>
          </div>
        </section>

        {/* ── 料金プラン ── */}
        <section id="pricing" className="py-14 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
                Canva料金プラン比較2026年版
              </h2>
              <p className="text-gray-400 text-sm">
                個人・チームの用途に合わせて最適なプランを選ぼう
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {CANVA_PLANS.map((plan) => (
                <div
                  key={plan.name}
                  className={`rounded-2xl border p-5 flex flex-col gap-3 ${
                    plan.recommended
                      ? "border-pink-500/50 bg-pink-500/5"
                      : "border-slate-800 bg-slate-900"
                  }`}
                >
                  {plan.recommended && (
                    <span className="text-xs font-bold text-pink-400 bg-pink-400/10 border border-pink-400/30 rounded-full px-3 py-1 text-center">
                      個人に最もおすすめ
                    </span>
                  )}
                  <div className="text-center">
                    <p className="font-black text-white text-xl">{plan.name}</p>
                    <p className="text-2xl font-black text-pink-400 mt-1">{plan.price}</p>
                    <p className="text-xs text-gray-400 mt-1">年払い時の月額</p>
                    <div className="mt-2 rounded-xl bg-slate-800 border border-slate-700 px-3 py-2">
                      <p className="text-xs font-bold text-gray-400 mb-0.5">AIクレジット</p>
                      <p className="text-xs font-bold text-pink-300">{plan.aiCredits}</p>
                    </div>
                  </div>
                  <ul className="flex flex-col gap-1.5">
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
                　個人でSNS運用・ブログ・副業に使うなら<span className="text-pink-400 font-bold">Proプラン（¥1,500/月）</span>が圧倒的コスパ。
                Magic Edit・Magic Eraser・Magic Expandなど全AIツールが使えます。
                年払い（¥14,400/年）にするとさらにお得。30日間の無料トライアルで全機能を試してから判断してください。
              </p>
            </div>
          </div>
        </section>

        {/* ── 関連ガイドCTA ── */}
        <section className="py-10 px-4 bg-slate-950">
          <div className="max-w-3xl mx-auto">
            <div className="rounded-2xl bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/30 p-6 sm:p-8 text-center">
              <p className="text-xs font-bold text-pink-400 uppercase tracking-widest mb-3">
                関連ガイド
              </p>
              <h2 className="text-xl sm:text-2xl font-black text-white mb-3">
                AI画像生成ツールをさらに深掘りしたい方へ
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Midjourney・Stable Diffusion・DALL-E 3を徹底比較。
                <br />
                Canva AIより高品質な画像が必要な場合の選び方も解説しています。
              </p>
              <Link
                href="/ai-image-comparison"
                className="inline-flex items-center gap-2 bg-pink-500 hover:bg-pink-400 text-white font-black text-sm px-6 py-3 rounded-xl transition-colors"
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
                Canva AIに関する疑問をまとめて解決
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {FAQS.map((faq, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-800 bg-slate-900 p-5 sm:p-6"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-pink-500/20 text-pink-400 flex items-center justify-center font-black text-xs border border-pink-500/30 mt-0.5">
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

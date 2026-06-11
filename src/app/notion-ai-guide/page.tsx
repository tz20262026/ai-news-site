import type { Metadata } from "next";
import Link from "next/link";
import AffiliateSectionAiNews from "@/components/AffiliateSectionAiNews";

export const metadata: Metadata = {
  title:
    "Notion AI活用ガイド2026年版【機能紹介・活用法・料金プラン完全解説】",
  description:
    "Notion AIの全機能を徹底解説。文章生成・要約・翻訳・Q&Aからデータベース連携まで、仕事・勉強・個人プロジェクトへの活用法と料金プランを2026年版で紹介。",
  keywords: [
    "Notion AI 使い方",
    "Notion AI 機能",
    "Notion AI 料金",
    "Notion AI 活用法",
    "Notion AI 文章生成",
    "Notion AI アドオン",
    "Notionコネクター",
    "AI ノート管理",
  ],
  alternates: {
    canonical: "https://ai-news-site-wheat.vercel.app/notion-ai-guide",
  },
  openGraph: {
    title:
      "Notion AI活用ガイド2026年版【機能紹介・活用法・料金プラン完全解説】",
    description:
      "Notion AIの全機能を徹底解説。文章生成・要約・翻訳・Q&Aからデータベース連携まで、仕事・勉強・個人プロジェクトへの活用法と料金プランを2026年版で紹介。",
    type: "article",
    locale: "ja_JP",
    url: "https://ai-news-site-wheat.vercel.app/notion-ai-guide",
  },
  twitter: {
    card: "summary_large_image",
    title: "Notion AI活用ガイド2026年版",
    description:
      "Notion AIの全機能・活用法・料金プランを完全解説。業務効率を劇的に上げる使い方を紹介。",
  },
};

/* ────────────────────────────────────────────
   データ定義
──────────────────────────────────────────── */

interface AIFeature {
  id: string;
  name: string;
  icon: string;
  category: string;
  description: string;
  useCase: string;
  example: string;
}

interface UsageScenario {
  id: string;
  title: string;
  icon: string;
  description: string;
  tips: string[];
}

interface PricePlan {
  name: string;
  price: string;
  aiIncluded: boolean;
  aiAddon: string;
  features: string[];
  recommended: boolean;
}

interface FAQ {
  question: string;
  answer: string;
}

const AI_FEATURES: AIFeature[] = [
  {
    id: "writing",
    name: "AI文章生成・ドラフト作成",
    icon: "✍️",
    category: "コンテンツ作成",
    description:
      "テーマや概要を伝えるだけでブログ記事・メール・提案書・議事録などのドラフトを自動生成。空白ページの恐怖から解放され、生成されたテキストを自分でブラッシュアップするだけで高品質なコンテンツが完成する。",
    useCase: "ブログ記事の骨格作り・メール下書き・会議アジェンダ作成",
    example: "「製品発表会の招待メールを書いて」→ 件名・本文・署名を一括生成",
  },
  {
    id: "summary",
    name: "長文要約・重要点抽出",
    icon: "📋",
    category: "情報整理",
    description:
      "長い会議メモ・リサーチノート・ドキュメントを瞬時に要約。要点をリスト化・アクションアイテムを抽出する機能も備えており、情報過多な現代のナレッジワーカーに欠かせないツールとなっている。",
    useCase: "会議録の要約・調査資料のサマリー作成・書籍ノートの整理",
    example: "「この会議録から決定事項とネクストアクションをまとめて」",
  },
  {
    id: "improve",
    name: "文章改善・校正・トーン調整",
    icon: "✨",
    category: "コンテンツ改善",
    description:
      "書いた文章のスペルミス・文法エラーを自動修正し、ビジネス向け・カジュアルなどトーンの変更も一発。「もっと簡潔に」「より専門的な表現に」という自然言語での指示で文章のクオリティを底上げできる。",
    useCase: "提案書の最終チェック・SNS投稿の最適化・英語メールの添削",
    example: "「この文章をより簡潔でプロフェッショナルなトーンに変えて」",
  },
  {
    id: "translate",
    name: "多言語翻訳",
    icon: "🌐",
    category: "多言語対応",
    description:
      "Notion内のテキストを直接翻訳できる。英語・日本語・中国語・スペイン語など主要言語に対応。ページ全体を一括翻訳することも可能で、グローバルチームでのドキュメント共有が格段に楽になる。",
    useCase: "英文記事の日本語要約・日本語マニュアルの英語化・多言語FAQ作成",
    example: "「このページを英語に翻訳して」でページ全体を一括翻訳",
  },
  {
    id: "qa",
    name: "AI Q&A（ワークスペース検索）",
    icon: "💬",
    category: "情報検索",
    description:
      "ワークスペース内の全ドキュメントを横断して自然言語で質問できる機能。「先月のプロジェクト会議で決定したことは？」と聞けば、関連するメモから回答を生成してくれる。社内Wikiや個人のナレッジベースが巨大AIアシスタントに変わる。",
    useCase: "社内ナレッジ検索・過去の決定事項の確認・プロジェクト履歴の把握",
    example: "「Aプロジェクトの予算はいくらで、担当者は誰？」→ 関連ページから回答",
  },
  {
    id: "autofill",
    name: "データベース自動入力（AI Autofill）",
    icon: "🗄️",
    category: "データ管理",
    description:
      "Notionデータベースのプロパティ列に対してAIが自動入力するプレミアム機能。コンテンツカテゴリの自動分類・タグ付け・センチメント分析なども設定可能。大量のデータ管理が劇的に効率化される。",
    useCase: "記事カテゴリの自動分類・タスク優先度の自動設定・感情分析",
    example: "記事タイトル一覧から「カテゴリ」「推定読了時間」を一括自動入力",
  },
];

const USE_SCENARIOS: UsageScenario[] = [
  {
    id: "business",
    title: "ビジネス文書・提案書作成",
    icon: "💼",
    description:
      "会議の議事録作成・提案書のドラフト・週次レポートの自動生成など、日常業務のドキュメント作成時間を大幅に削減できる。",
    tips: [
      "会議メモを箇条書きで入力 → 「議事録形式に整形して」で完成",
      "プロジェクト概要を一言入力 → 提案書の構成案を生成",
      "週次レポートテンプレートと実績データを入力 → 文章化を自動化",
    ],
  },
  {
    id: "learning",
    title: "学習・研究ノート管理",
    icon: "📚",
    description:
      "読書メモや授業ノートを要約・整理し、Q&A機能で復習に活用できる。知識の定着と情報の活用効率が大幅に向上する。",
    tips: [
      "読書メモを入力 → 「3つの重要ポイントにまとめて」で要点抽出",
      "テキストを貼り付け → 「理解度テストの問題を5問作って」",
      "複数のノートを参照して「〇〇の関連性を説明して」で横断分析",
    ],
  },
  {
    id: "content",
    title: "コンテンツ作成・ブログ運営",
    icon: "🖊️",
    description:
      "ブログ記事・SNS投稿・ニュースレターの作成をAIでサポート。アイデア出しからドラフト、SEO最適化まで一気通貫で対応できる。",
    tips: [
      "キーワードを渡して「SEOに強いブログ記事の構成案を作って」",
      "長文ブログを入力 → 「Twitter用に3バリエーションの要約ツイートを書いて」",
      "過去の人気記事を参考に「同じトーンで続編のネタを5つ提案して」",
    ],
  },
];

const PRICE_PLANS: PricePlan[] = [
  {
    name: "Free",
    price: "無料",
    aiIncluded: false,
    aiAddon: "利用不可",
    features: [
      "ブロック数制限あり",
      "ゲスト最大10名",
      "7日間のページ履歴",
      "Notion AI非対応",
    ],
    recommended: false,
  },
  {
    name: "Plus",
    price: "¥1,650/月〜",
    aiIncluded: false,
    aiAddon: "追加料金でAI利用可",
    features: [
      "ブロック数無制限",
      "ゲスト最大100名",
      "30日間のページ履歴",
      "Notion AI：+¥1,350/月/メンバー",
    ],
    recommended: false,
  },
  {
    name: "Business",
    price: "¥2,500/月〜",
    aiIncluded: false,
    aiAddon: "追加料金でAI利用可",
    features: [
      "全Plus機能",
      "SAML SSO対応",
      "90日間のページ履歴",
      "Notion AI：+¥1,350/月/メンバー",
    ],
    recommended: true,
  },
  {
    name: "Enterprise",
    price: "要問合せ",
    aiIncluded: true,
    aiAddon: "AIアドオン含む",
    features: [
      "全Business機能",
      "高度なセキュリティ",
      "無制限のページ履歴",
      "専任サポート",
    ],
    recommended: false,
  },
];

const FAQS: FAQ[] = [
  {
    question: "Notion AIは無料プランでも使えますか？",
    answer:
      "無料プランではNotion AIは利用できません。有料プラン（Plus以上）に加入し、さらにNotion AIアドオン（¥1,350/月/メンバー）を追加する必要があります。ただし、新規登録時に一定のAI無料トライアルが提供される場合があります。",
  },
  {
    question: "Notion AIはどのAIモデルを使っていますか？",
    answer:
      "NotionはAIの基盤モデルを非公開としていますが、Claude（Anthropic）やOpenAI GPTなど複数のモデルを組み合わせて利用していると報告されています。機能や用途によって最適なモデルが自動選択される設計になっています。",
  },
  {
    question: "Notion AIに入力したデータはAI学習に使われますか？",
    answer:
      "Notionの利用規約では、ユーザーのデータはAIモデルのトレーニングには使用しないと明記されています。エンタープライズプランではさらに厳格なデータ保護契約（BAA/DPA）が締結可能です。",
  },
  {
    question: "Notion AIとChatGPTを使い分けるメリットは何ですか？",
    answer:
      "最大の違いはNotion内のデータに直接アクセスできる点です。ChatGPTは会話履歴しか参照できませんが、Notion AIは自分のワークスペース全体をコンテキストとして使えます。既にNotionをメインで使っているなら、Notion AIが圧倒的に便利です。",
  },
  {
    question: "Notion AIは日本語に対応していますか？",
    answer:
      "はい、日本語での文章生成・翻訳・要約・Q&Aが全て対応しています。UIも日本語化されており、プロンプトも日本語で入力できます。英語への翻訳や英文校正など英語関連の精度も高く、バイリンガルな業務に非常に便利です。",
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

export default function NotionAiGuidePage() {
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
            <span className="inline-block text-xs font-bold text-sky-400 uppercase tracking-widest bg-sky-400/10 px-4 py-1.5 rounded-full mb-4">
              2026年版 最新情報
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight mb-4">
              Notion AI活用ガイド2026年版
              <br />
              <span className="text-sky-400">
                【全機能解説・活用法・料金プラン比較】
              </span>
            </h1>
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              ワークスペースに組み込まれたAIアシスタントで業務効率を劇的に向上。
              文章生成・要約・翻訳・Q&Aまで、Notion AIの全機能と実践的な活用法を解説。
            </p>
            {/* 目次クイックリンク */}
            <div className="flex flex-wrap justify-center gap-2">
              {[
                { href: "#features", label: "AI機能一覧" },
                { href: "#scenarios", label: "活用シナリオ" },
                { href: "#pricing", label: "料金プラン" },
                { href: "#faq", label: "よくある質問" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-xs font-bold px-4 py-2 rounded-full bg-slate-800 text-sky-300 border border-slate-700 hover:bg-slate-700 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── 強み3点 ── */}
        <section className="py-10 px-4 bg-slate-950">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { icon: "🧠", label: "ワークスペース統合", desc: "自分のデータをコンテキストとしてAIが回答" },
                { icon: "⚡", label: "インラインAI操作", desc: "テキスト選択→AIコマンドで即時改善" },
                { icon: "🔗", label: "データベース連携", desc: "AIがDBプロパティを自動入力・分類" },
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

        {/* ── AI機能一覧 ── */}
        <section id="features" className="py-14 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
                Notion AI 全機能一覧
              </h2>
              <p className="text-gray-400 text-sm">
                コンテンツ作成から情報管理まで、あらゆる業務をカバーする6大機能
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {AI_FEATURES.map((feature) => (
                <div
                  key={feature.id}
                  className="rounded-2xl border border-slate-800 bg-slate-900 p-5 flex flex-col gap-3"
                >
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{feature.icon}</span>
                      <h3 className="font-black text-white text-base">
                        {feature.name}
                      </h3>
                    </div>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-sky-500/15 text-sky-300 border border-sky-500/30 flex-shrink-0">
                      {feature.category}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="flex flex-col gap-1.5 mt-auto">
                    <div className="flex items-start gap-2">
                      <span className="text-sky-400 text-xs font-bold flex-shrink-0">用途：</span>
                      <span className="text-gray-300 text-xs">{feature.useCase}</span>
                    </div>
                    <div className="rounded-xl bg-slate-800 border border-slate-700 px-3 py-2">
                      <p className="text-xs text-gray-400 font-bold mb-0.5">活用例</p>
                      <p className="text-gray-300 text-xs leading-relaxed">{feature.example}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 活用シナリオ ── */}
        <section id="scenarios" className="py-14 px-4 bg-slate-950">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
                用途別活用シナリオ
              </h2>
              <p className="text-gray-400 text-sm">
                ビジネス・学習・コンテンツ作成の3領域で実践的な活用法を紹介
              </p>
            </div>

            <div className="flex flex-col gap-6">
              {USE_SCENARIOS.map((scenario) => (
                <div
                  key={scenario.id}
                  className="rounded-2xl border border-slate-800 bg-slate-900 p-5 sm:p-6"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{scenario.icon}</span>
                    <h3 className="font-black text-white text-lg">{scenario.title}</h3>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {scenario.description}
                  </p>
                  <div className="flex flex-col gap-2">
                    {scenario.tips.map((tip, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <span className="text-sky-400 text-xs flex-shrink-0 mt-0.5 font-bold">
                          {i + 1}.
                        </span>
                        <span className="text-gray-300 text-sm leading-relaxed">{tip}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 料金プラン ── */}
        <section id="pricing" className="py-14 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
                Notion 料金プラン比較2026年版
              </h2>
              <p className="text-gray-400 text-sm">
                Notion AI利用には有料プラン＋AIアドオンが必要（Enterprise除く）
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {PRICE_PLANS.map((plan) => (
                <div
                  key={plan.name}
                  className={`rounded-2xl border p-5 flex flex-col gap-3 ${
                    plan.recommended
                      ? "border-sky-500/50 bg-sky-500/5"
                      : "border-slate-800 bg-slate-900"
                  }`}
                >
                  {plan.recommended && (
                    <span className="text-xs font-bold text-sky-400 bg-sky-400/10 border border-sky-400/30 rounded-full px-3 py-1 text-center">
                      おすすめ
                    </span>
                  )}
                  <div className="text-center">
                    <p className="font-black text-white text-lg">{plan.name}</p>
                    <p className="text-2xl font-black text-sky-400 mt-1">{plan.price}</p>
                    <p className="text-xs text-gray-400 mt-1">年払い時の月額</p>
                  </div>
                  <div className="rounded-xl bg-slate-800 border border-slate-700 px-3 py-2 text-center">
                    <p className="text-xs font-bold text-gray-400 mb-0.5">Notion AI</p>
                    <p className={`text-xs font-bold ${plan.aiIncluded ? "text-emerald-400" : "text-amber-400"}`}>
                      {plan.aiAddon}
                    </p>
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
                <span className="font-bold text-white">💡 コスパ最良の選び方：</span>
                　個人利用なら<span className="text-sky-400 font-bold">Plus＋AIアドオン（合計約¥3,000/月）</span>が最もコスパ良好。
                チームでNotionを活用する場合は<span className="text-sky-400 font-bold">Business</span>プランで全員がAIを使える環境を整えると業務効率が大幅に向上します。
                年払いにすると月払いより約20%お得になります。
              </p>
            </div>
          </div>
        </section>

        {/* ── 関連ガイドCTA ── */}
        <section className="py-10 px-4 bg-slate-950">
          <div className="max-w-3xl mx-auto">
            <div className="rounded-2xl bg-gradient-to-r from-sky-500/10 to-blue-500/10 border border-sky-500/30 p-6 sm:p-8 text-center">
              <p className="text-xs font-bold text-sky-400 uppercase tracking-widest mb-3">
                関連ガイド
              </p>
              <h2 className="text-xl sm:text-2xl font-black text-white mb-3">
                AIライティングツールを一括比較したい方へ
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                ChatGPT・Claude・Geminiなど主要AIライティングツールを比較。
                <br />
                Notion AI と組み合わせて使う最強ワークフローも解説しています。
              </p>
              <Link
                href="/ai-writing-guide"
                className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-white font-black text-sm px-6 py-3 rounded-xl transition-colors"
              >
                AIライティングガイドを読む →
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
                Notion AIに関する疑問をまとめて解決
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {FAQS.map((faq, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-800 bg-slate-900 p-5 sm:p-6"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center font-black text-xs border border-sky-500/30 mt-0.5">
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

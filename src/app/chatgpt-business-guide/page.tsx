import type { Metadata } from "next";
import AffiliateSectionAiNews from "@/components/AffiliateSectionAiNews";

export const metadata: Metadata = {
  title:
    "ChatGPT仕事・ビジネス活用完全ガイド2026年版【業務効率化・プロンプト集】| AI最新ニュース",
  description:
    "ChatGPTをビジネスで使う具体的な方法を完全解説。メール作成・会議議事録・プレゼン資料・Excel分析・コード生成などのプロンプトサンプル付き。ChatGPT Business/Teamプランも解説。",
  keywords: [
    "ChatGPT ビジネス",
    "ChatGPT 仕事 活用",
    "ChatGPT 業務効率化",
    "ChatGPT プロンプト",
    "ChatGPT Business",
    "ChatGPT Team",
    "AIツール ビジネス",
    "生成AI 業務活用",
    "ChatGPT メール作成",
    "ChatGPT 議事録",
  ],
  alternates: {
    canonical: "https://ai-news-site-wheat.vercel.app/chatgpt-business-guide",
  },
  openGraph: {
    title:
      "ChatGPT仕事・ビジネス活用完全ガイド2026年版【業務効率化・プロンプト集】",
    description:
      "ChatGPTをビジネスで使う具体的な方法を完全解説。メール作成・会議議事録・プレゼン資料・Excel分析・コード生成などのプロンプトサンプル付き。",
    type: "article",
    locale: "ja_JP",
    url: "https://ai-news-site-wheat.vercel.app/chatgpt-business-guide",
  },
  twitter: {
    card: "summary_large_image",
    title: "ChatGPT仕事・ビジネス活用完全ガイド2026年版",
    description:
      "メール作成・会議議事録・プレゼン資料・Excel分析・コード生成のプロンプトサンプル付き完全ガイド。",
  },
};

/* ────────────────────────────────────────────
   データ定義
──────────────────────────────────────────── */

interface UseCase {
  id: string;
  icon: string;
  title: string;
  description: string;
  prompt: string;
  timeSaved: string;
}

interface Plan {
  id: string;
  name: string;
  price: string;
  target: string;
  features: string[];
  highlight: boolean;
}

interface FAQ {
  question: string;
  answer: string;
}

const USE_CASES: UseCase[] = [
  {
    id: "email",
    icon: "✉️",
    title: "ビジネスメール作成・返信",
    description:
      "定型メールや複雑な依頼文を秒速で生成。トーン（丁寧・カジュアル・英語）の指定も可能。返信文の下書きも箇条書きメモから瞬時に生成できる。",
    prompt:
      "「以下のメモをもとに取引先への謝罪メールを作成してください。敬語・簡潔・結論先出し。[メモ: 納期遅延、3日延長、代替案あり]」",
    timeSaved: "1通あたり10〜20分 → 30秒",
  },
  {
    id: "minutes",
    icon: "📝",
    title: "会議議事録の自動作成",
    description:
      "会議の録音テキストや箇条書きメモを貼り付けるだけで、決定事項・担当者・次回アクションを整理した議事録を自動生成。フォーマット統一にも有効。",
    prompt:
      "「以下の会議メモを議事録にしてください。形式：①開催日時 ②参加者 ③議題 ④決定事項 ⑤アクションアイテム（担当・期限付き）[メモ内容]」",
    timeSaved: "30分 → 5分以内",
  },
  {
    id: "presentation",
    icon: "📊",
    title: "プレゼン資料の構成・スライド作成",
    description:
      "テーマと対象聴衆を伝えるだけで、スライド構成・各ページの要点・トーキングポイントをまとめて生成。PowerPoint用のアウトラインとして活用できる。",
    prompt:
      "「新サービス導入提案のプレゼン構成を作ってください。聴衆：役員5名・時間15分・スライド10枚。各スライドのタイトルと3つの要点を出してください」",
    timeSaved: "2〜3時間 → 30分",
  },
  {
    id: "excel",
    icon: "📈",
    title: "Excel・データ分析サポート",
    description:
      "CSVやExcelデータを貼り付けると要約・集計・分析提案を返してくれる。数式やマクロのコードも生成可能。有料版ではファイルを直接アップロードして解析できる。",
    prompt:
      "「以下の売上データ（月別・商品別）を分析して、前年比・成長トレンド・改善すべき点を3つ指摘してください。[データ]」",
    timeSaved: "分析・レポート作成：半日 → 1時間",
  },
  {
    id: "code",
    icon: "💻",
    title: "コード生成・自動化スクリプト",
    description:
      "PythonやVBAのスクリプトを自然言語で生成。Excelの繰り返し作業自動化・APIデータ取得・ファイル整理など業務自動化に直結。コードの説明も日本語で返す。",
    prompt:
      "「Pythonで毎朝9時に指定フォルダ内のPDFファイルを自動的に日付別サブフォルダに整理するスクリプトを作成してください。コメントは日本語で」",
    timeSaved: "手動作業：毎日20分 → ゼロ",
  },
  {
    id: "research",
    icon: "🔍",
    title: "市場調査・競合分析レポート",
    description:
      "業界トレンドや競合情報を整理した調査レポートの構成を生成。Webブラウジング機能（Plus）を使えばリアルタイムの最新情報も収集できる。",
    prompt:
      "「国内AIツール市場2026年の競合分析レポートを作成してください。主要5社のサービス比較・市場規模・2026年のトレンドをまとめてください」",
    timeSaved: "調査・資料作成：丸1日 → 2時間",
  },
];

const PLANS: Plan[] = [
  {
    id: "free",
    name: "ChatGPT 無料",
    price: "0円",
    target: "個人・試し使い",
    features: [
      "GPT-4o mini 利用可能",
      "テキスト生成・コード生成",
      "音声入力対応",
      "1日の利用回数に制限あり",
      "ファイルアップロード不可",
    ],
    highlight: false,
  },
  {
    id: "plus",
    name: "ChatGPT Plus",
    price: "月額 $20（約3,000円）",
    target: "個人ビジネス利用",
    features: [
      "GPT-4o フル利用可能",
      "ファイル・PDF分析",
      "DALL-E 3 画像生成",
      "Webブラウジング（最新情報）",
      "GPTs 利用・作成",
      "高度な音声モード",
    ],
    highlight: true,
  },
  {
    id: "team",
    name: "ChatGPT Team",
    price: "月額 $30/人（年払い）",
    target: "チーム・中小企業",
    features: [
      "Plusの全機能",
      "学習データに使用されない",
      "チーム用ワークスペース",
      "管理者コンソール",
      "GPTs共有機能",
      "優先サポート",
    ],
    highlight: false,
  },
  {
    id: "enterprise",
    name: "ChatGPT Enterprise",
    price: "要問い合わせ",
    target: "大企業・セキュリティ重視",
    features: [
      "Teamの全機能",
      "SOC 2 / GDPR 対応",
      "SSO・SCIM対応",
      "128kコンテキストウィンドウ",
      "GPT-4 無制限アクセス",
      "専任カスタマーサクセス",
    ],
    highlight: false,
  },
];

const FAQS: FAQ[] = [
  {
    question: "ビジネスでChatGPTを使う場合、情報漏洩のリスクはありますか？",
    answer:
      "無料・Plusプランはデフォルトで入力内容がOpenAIの学習データに使われる場合があります。顧客情報・社外秘・個人情報は入力しないことが原則です。「設定 → データコントロール → チャット履歴とトレーニングをオフ」にすることでデータ学習を無効化できます。企業向けにはChatGPT TeamまたはEnterpriseプランが入力データを学習に使わない設計になっており、ビジネス利用に推奨です。",
  },
  {
    question: "ChatGPT Businessとは何ですか？Teamプランと同じですか？",
    answer:
      "「ChatGPT Business」はかつてのプラン名で、現在は「ChatGPT Team」に名称変更・統合されています。2026年時点では個人向けPlus（月$20）、チーム向けTeam（月$30/人・年払い）、大企業向けEnterprise（要問い合わせ）の3段階が主なビジネスプランです。",
  },
  {
    question: "ChatGPTで作成した文章・コードの著作権は誰のものですか？",
    answer:
      "OpenAIの利用規約では、ユーザーが入力したプロンプトと受け取った出力の権利はユーザーに帰属するとされています（2026年時点）。ただし、AIが生成した文章の著作権保護については各国の法律によって異なります。日本では生成AIの出力単体に著作権は発生しないとする見解が一般的です。商業利用の際は社内のリーガルチェックを推奨します。",
  },
  {
    question: "ChatGPT Plusの月額$20は費用対効果が高いですか？",
    answer:
      "ビジネス利用であれば十分に元が取れます。たとえばメール作成・議事録・プレゼン構成だけで週5〜10時間の削減が見込めます。仮に時給2,000円換算で週10時間削減なら月8万円相当の価値です。ファイル分析・最新情報収集・画像生成まで含めると、月3,000円のコストは小さいと言えます。",
  },
  {
    question: "プロンプトを毎回考えるのが面倒です。効率的な方法はありますか？",
    answer:
      "よく使うプロンプトは「カスタム指示」機能（設定 → カスタム指示）に登録しておくと、毎回の設定が不要になります。また「GPTs」機能を使えば、特定業務専用のカスタムChatGPTを自作できます。チームで使う場合はプロンプトテンプレートをNotionやExcelで共有するのも効果的です。",
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

export default function ChatGPTBusinessGuidePage() {
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
            <span className="inline-block text-xs font-bold text-emerald-400 uppercase tracking-widest bg-emerald-400/10 px-4 py-1.5 rounded-full mb-4">
              2026年版 最新情報
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight mb-4">
              ChatGPT仕事・ビジネス活用完全ガイド2026年版
              <br />
              <span className="text-emerald-400">
                【業務効率化・プロンプト集】
              </span>
            </h1>
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              メール作成・会議議事録・プレゼン資料・Excel分析・コード生成まで、ビジネスで即使えるプロンプトサンプルを完全網羅。ChatGPT Business/Teamプランの選び方も解説。
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                { href: "#use-cases", label: "ユースケース6選" },
                { href: "#plans", label: "プラン比較" },
                { href: "#faq", label: "よくある質問" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-xs font-bold px-4 py-2 rounded-full bg-slate-800 text-emerald-300 border border-slate-700 hover:bg-slate-700 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── ユースケース ── */}
        <section id="use-cases" className="py-14 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
                ビジネスユースケース6選
              </h2>
              <p className="text-gray-300 text-sm">
                各ユースケースで使えるプロンプトサンプルをそのままコピーして使えます
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {USE_CASES.map((uc) => (
                <div
                  key={uc.id}
                  className="rounded-2xl border border-slate-800 bg-slate-900 p-5 flex flex-col gap-3"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{uc.icon}</span>
                    <h3 className="font-black text-white text-base leading-tight">
                      {uc.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {uc.description}
                  </p>
                  <div className="rounded-xl bg-slate-800 border border-slate-700 px-4 py-3">
                    <p className="text-xs text-emerald-400 font-bold mb-1.5">
                      プロンプトサンプル
                    </p>
                    <p className="text-gray-300 text-xs leading-relaxed font-mono">
                      {uc.prompt}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 mt-auto">
                    <span className="text-xs text-amber-400 font-bold">⏱ 時短効果：</span>
                    <span className="text-xs text-gray-300">{uc.timeSaved}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── プラン比較 ── */}
        <section id="plans" className="py-14 px-4 bg-slate-950">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
                ChatGPTビジネスプラン比較2026年版
              </h2>
              <p className="text-gray-300 text-sm">
                用途・人数・セキュリティ要件に合わせて選ぶ
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {PLANS.map((plan) => (
                <div
                  key={plan.id}
                  className={`rounded-2xl border p-5 flex flex-col gap-3 ${
                    plan.highlight
                      ? "border-emerald-500/50 bg-emerald-500/5"
                      : "border-slate-800 bg-slate-900"
                  }`}
                >
                  {plan.highlight && (
                    <span className="text-xs font-bold text-emerald-400 bg-emerald-500/15 border border-emerald-500/30 px-3 py-1 rounded-full self-start">
                      おすすめ
                    </span>
                  )}
                  <div>
                    <h3 className="font-black text-white text-base">
                      {plan.name}
                    </h3>
                    <p className="text-emerald-400 font-bold text-sm mt-1">
                      {plan.price}
                    </p>
                    <p className="text-gray-400 text-xs mt-1">{plan.target}</p>
                  </div>
                  <ul className="flex flex-col gap-1.5 mt-auto">
                    {plan.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-1.5 text-xs text-gray-300"
                      >
                        <span className="text-emerald-400 flex-shrink-0 mt-0.5">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl bg-slate-900 border border-slate-800 p-5">
              <p className="text-sm text-gray-300 leading-relaxed">
                <span className="font-bold text-white">💡 選び方のポイント：</span>
                　個人でビジネス利用するなら
                <span className="text-emerald-400 font-bold"> ChatGPT Plus（月$20）</span>
                が最もコスパ良好です。5人以上のチームで使うなら
                <span className="text-emerald-400 font-bold"> Team</span>
                でデータ保護も確保できます。大企業のセキュリティ要件にはEnterpriseを検討してください。
              </p>
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
              <p className="text-gray-300 text-sm">
                ビジネス利用で気になる疑問をまとめて解決
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {FAQS.map((faq, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-800 bg-slate-900 p-5 sm:p-6"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-black text-xs border border-emerald-500/30 mt-0.5">
                      Q
                    </span>
                    <h3 className="font-black text-white text-sm sm:text-base leading-snug">
                      {faq.question}
                    </h3>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-black text-xs border border-cyan-500/30 mt-0.5">
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

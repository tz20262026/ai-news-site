import type { Metadata } from "next";
import Link from "next/link";
import AffiliateSectionAiNews from "@/components/AffiliateSectionAiNews";

export const metadata: Metadata = {
  title: "AIビジネス活用完全ガイド2026【業種別・部署別事例集】",
  description:
    "ビジネスでAIを活用する具体的な方法を業種別・部署別に解説。営業・マーケ・経理・人事・開発でのAI活用事例、導入ステップ、コスト削減シミュレーションを網羅。",
  keywords: [
    "AI ビジネス活用",
    "AI 業務効率化",
    "ChatGPT 仕事",
    "AI 営業",
    "AI マーケティング",
    "AI 経理",
    "AI 人事",
    "生成AI 企業導入",
    "AI コスト削減",
  ],
  openGraph: {
    title: "AIビジネス活用完全ガイド2026【業種別・部署別事例集】",
    description:
      "営業・マーケ・経理・人事・開発でのAI活用事例と導入ステップを徹底解説。コスト削減シミュレーション付き。",
    type: "article",
    locale: "ja_JP",
    url: "https://ai-news-site-wheat.vercel.app/ai-business-guide",
    images: [
      {
        url: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&q=80&fit=crop",
        width: 1200,
        height: 630,
        alt: "AIビジネス活用完全ガイド2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AIビジネス活用完全ガイド2026【業種別・部署別事例集】",
    description:
      "営業・マーケ・経理・人事・開発でのAI活用事例と導入ステップを徹底解説。",
    images: [
      "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&q=80&fit=crop",
    ],
  },
  alternates: {
    canonical: "https://ai-news-site-wheat.vercel.app/ai-business-guide",
  },
};

const DEPARTMENTS = [
  {
    dept: "営業",
    icon: "📊",
    color: "border-blue-500",
    badgeBg: "bg-blue-700",
    badgeText: "text-blue-100",
    accentColor: "text-blue-300",
    tools: ["ChatGPT", "Gemini"],
    cases: [
      {
        title: "提案書・営業メール自動生成",
        time: "3時間 → 30分",
        desc: "顧客情報と要件を入力するだけで提案書の骨子・メール文案を自動生成。1日5件の提案が15件に増加した事例も。",
        prompt: "「〇〇業界の中小企業向けに、コスト削減をテーマにした提案書の構成と概要を作成してください」",
      },
      {
        title: "競合・市場リサーチの高速化",
        time: "半日 → 1時間",
        desc: "競合他社の強み弱みを整理したレポートをAIで即作成。Perplexityを使えば最新情報込みのリサーチが可能。",
        prompt: "「〇〇市場の主要競合5社を比較し、それぞれの価格・強み・弱みを表形式で整理して」",
      },
      {
        title: "商談後レポートの自動化",
        time: "30分 → 5分",
        desc: "商談のメモをAIに渡すだけで議事録・次回アクション・フォローアップメールを一括生成。SFAへの入力工数を大幅削減。",
        prompt: "「以下の商談メモをもとに、議事録・次回アクション・フォローメールを作成して：[メモ内容]」",
      },
    ],
  },
  {
    dept: "マーケティング",
    icon: "📣",
    color: "border-pink-500",
    badgeBg: "bg-pink-700",
    badgeText: "text-pink-100",
    accentColor: "text-pink-300",
    tools: ["ChatGPT", "Midjourney", "Gamma"],
    cases: [
      {
        title: "SNSコンテンツの量産",
        time: "週8時間 → 2時間",
        desc: "月間のSNS投稿計画をAIで一括作成。X・Instagram・LinkedIn向けの文体調整もAIが担当。投稿頻度が3倍に増えた企業も。",
        prompt: "「〇〇というテーマで、X（Twitter）向け投稿を10本作成して。各140字以内・絵文字あり・ハッシュタグ付き」",
      },
      {
        title: "LP・広告コピーのAB案作成",
        time: "2日 → 2時間",
        desc: "ランディングページのキャッチコピー・ボディコピーのバリエーションをAIで大量生成してABテストに活用。転換率改善に直結。",
        prompt: "「30代女性向け美容サプリのLPキャッチコピーを10案作成して。ベネフィット訴求と課題解決型を5案ずつ」",
      },
      {
        title: "SEO記事の制作効率化",
        time: "5時間/本 → 1.5時間/本",
        desc: "キーワード調査・構成作成・下書き生成・タイトル案をAIが担当。人間はファクトチェックと最終仕上げのみに集中できる。",
        prompt: "「『〇〇 選び方』というキーワードで2000字のSEO記事の構成と各見出しの要点を作成して」",
      },
    ],
  },
  {
    dept: "経理・財務",
    icon: "💹",
    color: "border-green-500",
    badgeBg: "bg-green-700",
    badgeText: "text-green-100",
    accentColor: "text-green-300",
    tools: ["ChatGPT", "NotebookLM"],
    cases: [
      {
        title: "決算レポート・コメント作成",
        time: "1日 → 2時間",
        desc: "数値データをAIに渡すと分析コメント・経営陣向けサマリーを自動生成。決算開示のスピードが大幅改善した企業事例多数。",
        prompt: "「以下の売上・費用・利益データをもとに、取締役会向けの経営サマリーを600字で作成して：[数値]」",
      },
      {
        title: "経費規程・社内規程の読み解き",
        time: "30分 → 3分",
        desc: "長い社内規程をNotebookLMにアップロードして質問するだけで、必要な情報を即座に抽出できる。",
        prompt: "「この経費規程において、海外出張の場合の日当の上限と申請方法を教えて」",
      },
      {
        title: "請求書・見積書テンプレート作成",
        time: "2時間 → 15分",
        desc: "法令要件を考慮した請求書・見積書のフォーマットをAIが即作成。様式の修正依頼もチャットで完結。",
        prompt: "「インボイス制度対応の請求書テンプレートをExcel向けに作成して。必須項目を全て含めて」",
      },
    ],
  },
  {
    dept: "人事・採用",
    icon: "👥",
    color: "border-amber-500",
    badgeBg: "bg-amber-700",
    badgeText: "text-amber-100",
    accentColor: "text-amber-300",
    tools: ["ChatGPT", "Gemini"],
    cases: [
      {
        title: "求人票・JDの高速作成",
        time: "2時間 → 20分",
        desc: "職種名と必要スキルを伝えるだけで、応募者を惹きつける求人票を即作成。媒体ごとの文字数調整もAIが担当。",
        prompt: "「Webエンジニア（React・TypeScript経験者）の求人票を作成して。必須スキル・歓迎スキル・仕事内容・魅力を含めて」",
      },
      {
        title: "面接質問リストの設計",
        time: "1時間 → 15分",
        desc: "職種・選考段階・評価したいコンピテンシーを指定するだけで、的確な面接質問リストと評価基準を生成できる。",
        prompt: "「営業職の最終面接用質問を20問作成して。論理思考力・顧客志向・ストレス耐性を評価する質問を含めて」",
      },
      {
        title: "研修資料・オンボーディング文書の作成",
        time: "3日 → 半日",
        desc: "新入社員向けのオンボーディング資料・研修スライドの骨子をAIで生成。内製化コストを大幅削減できる。",
        prompt: "「中途入社者向けの初週スケジュールと読んでおくべき社内情報をまとめたオンボーディングガイドを作成して」",
      },
    ],
  },
  {
    dept: "開発・エンジニア",
    icon: "💻",
    color: "border-violet-500",
    badgeBg: "bg-violet-700",
    badgeText: "text-violet-100",
    accentColor: "text-violet-300",
    tools: ["GitHub Copilot", "ChatGPT", "Claude"],
    cases: [
      {
        title: "コード生成・レビューの自動化",
        time: "8時間 → 3時間",
        desc: "GitHub CopilotとChatGPTを組み合わせることで、コーディング速度が2〜3倍に向上。テストコードの自動生成も可能。",
        prompt: "「このPython関数のユニットテストをpytestで作成して。エッジケースも考慮して：[コード]」",
      },
      {
        title: "バグ原因の特定と修正案提示",
        time: "2時間 → 20分",
        desc: "エラーログをAIに貼り付けるだけで原因と修正方法を提示。デバッグ作業の大部分をAIが担当できる。",
        prompt: "「このエラーの原因と修正方法を教えて：[エラーメッセージとコード]」",
      },
      {
        title: "技術文書・API仕様書の生成",
        time: "1日 → 2時間",
        desc: "コードのコメントやロジックを読み込ませて、開発者向けのREADME・API仕様書を自動生成できる。",
        prompt: "「このAPIのエンドポイントのOpenAPI仕様をYAML形式で作成して：[コード]」",
      },
    ],
  },
];

const INTRO_STEPS = [
  {
    step: 1,
    title: "AI活用の目的を明確にする",
    desc: "「何に使うか」を決めると効果が出やすい。まずは1つの業務に絞って始めることが成功のコツです。",
    icon: "🎯",
  },
  {
    step: 2,
    title: "無料ツールでPoC（実証実験）",
    desc: "ChatGPTの無料版で実際の業務タスクを試してみる。効果を確認してから有料版・法人プランを検討する。",
    icon: "🧪",
  },
  {
    step: 3,
    title: "社内ルール・情報セキュリティを整備",
    desc: "機密情報の取り扱いルール・利用可能ツールの範囲を決める。法人向けプランはデータ学習がオフになるものが多い。",
    icon: "🛡️",
  },
  {
    step: 4,
    title: "パイロットチームで運用開始",
    desc: "1つの部署・チームで試験導入し、ノウハウとROI（投資対効果）を計測する。成功事例を社内に横展開する。",
    icon: "🚀",
  },
  {
    step: 5,
    title: "全社展開・継続改善",
    desc: "成功事例をもとに全社展開し、プロンプトのナレッジベース化・定期的なツール見直しで継続的に改善する。",
    icon: "📈",
  },
];

const COST_CASES = [
  {
    dept: "中小企業（社員50名）",
    before: "月間残業コスト：約120万円",
    after: "AI導入後：約80万円",
    saving: "月33%・年500万円削減",
    detail: "文書作成・調査業務の時間削減が主な効果",
    color: "border-blue-500 bg-blue-950/30",
    badgeColor: "bg-blue-700 text-blue-100",
  },
  {
    dept: "マーケティング部（10名）",
    before: "コンテンツ制作費：月80万円（外注込み）",
    after: "AI導入後：月35万円",
    saving: "月56%・年540万円削減",
    detail: "SNS・記事コンテンツの内製化が主な効果",
    color: "border-pink-500 bg-pink-950/30",
    badgeColor: "bg-pink-700 text-pink-100",
  },
  {
    dept: "カスタマーサポート（15名）",
    before: "1問い合わせ対応：平均12分",
    after: "AI補助後：平均5分",
    saving: "処理量2.4倍・人員増なし",
    detail: "AI提案のドラフト確認→送信フローで効率化",
    color: "border-green-500 bg-green-950/30",
    badgeColor: "bg-green-700 text-green-100",
  },
];

const FAQ = [
  {
    q: "生成AIをビジネスで使う場合、著作権はどうなりますか？",
    a: "日本の現行著作権法では、AIが生成したコンテンツへの著作権保護は限定的です。ただし、他者の著作物を学習したAIが類似コンテンツを出力するリスクはゼロではありません。商用利用の際は、生成物に独自の付加価値（編集・修正・加工）を加えることを推奨します。また、OpenAI・Anthropicなどの利用規約でビジネス利用が許可されていることを事前に確認してください。",
  },
  {
    q: "社内の機密情報をAIに入力しても大丈夫ですか？",
    a: "無料版・個人向けプランでは入力データが学習に使用される場合があります。機密情報を扱う場合は、ChatGPT Team/Enterprise・Claude for Work・Gemini Workspaceなどの法人向けプランを利用してください。これらは学習へのデータ使用を契約でオフにできます。",
  },
  {
    q: "AI導入に必要な予算はどのくらいですか？",
    a: "最小規模での導入なら月額数千円から始められます。ChatGPT Plus（月$20/人）・Claude Pro（月$20/人）・Gemini Advanced（月¥2,900/人）などが主要選択肢です。10名チームなら月2〜5万円程度で本格導入が可能です。ROIは通常3〜6ヶ月以内に回収できるケースが多いです。",
  },
  {
    q: "AIツールを導入したら社員の仕事がなくなりますか？",
    a: "現時点では、AIが人間の仕事を完全に代替するのではなく、定型・反復作業を自動化し、人間がより創造的・戦略的な仕事に集中できる環境を作るケースが大半です。AIを「使う人材」と「使わない人材」の間に生産性格差が生まれているため、むしろ積極的に習得することが重要です。",
  },
  {
    q: "中小企業でも生成AIを導入できますか？",
    a: "はい、むしろ中小企業こそAI導入の恩恵が大きいです。少人数で多くの業務をこなす必要がある中小企業では、1人当たりの業務量削減効果がより大きく出ます。ChatGPTの無料版から始めて、効果を確認してから有料プランに移行するステップが最もリスクが少なく効果的です。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export default function AIBusinessGuidePage() {
  return (
    <div className="bg-slate-950 min-h-screen">
      {/* FAQ JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="max-w-4xl mx-auto py-8 px-4 space-y-14">
        {/* ヒーロー */}
        <section className="text-center space-y-5 pt-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold border border-green-400 bg-green-800 text-green-100">
            💼 ビジネス活用完全ガイド
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white leading-tight">
            AIビジネス活用完全ガイド2026
            <br />
            <span className="text-cyan-400">
              【業種別・部署別事例集】
            </span>
          </h1>
          <p className="text-slate-200 text-base max-w-2xl mx-auto leading-relaxed">
            営業・マーケティング・経理・人事・開発エンジニアなど、部署別のAI活用事例と具体的なプロンプト例を徹底解説。コスト削減・業務効率化の実例も紹介します。
          </p>
          <div className="flex flex-wrap justify-center gap-2 text-xs">
            {["営業", "マーケ", "経理", "人事", "開発", "コスト削減事例"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-slate-700 text-white border border-slate-500 font-semibold"
              >
                {tag}
              </span>
            ))}
          </div>
        </section>

        {/* 部署別活用例 */}
        <section className="space-y-8">
          <h2 className="text-2xl font-black text-white text-center">
            部署別 AI活用事例
          </h2>
          {DEPARTMENTS.map((dept) => (
            <div
              key={dept.dept}
              className={`bg-slate-800 border-2 ${dept.color} rounded-2xl p-6 space-y-5`}
            >
              {/* 部署ヘッダー */}
              <div className="flex items-center gap-3 flex-wrap">
                <span className="text-2xl">{dept.icon}</span>
                <h3 className="text-xl font-black text-white">{dept.dept}</h3>
                <div className="flex gap-2 flex-wrap">
                  {dept.tools.map((tool) => (
                    <span
                      key={tool}
                      className={`text-xs px-2.5 py-1 rounded-full font-bold ${dept.badgeBg} ${dept.badgeText}`}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* 活用事例 */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {dept.cases.map((c) => (
                  <div
                    key={c.title}
                    className="bg-slate-900 border border-slate-700 rounded-xl p-4 space-y-3"
                  >
                    <h4 className="font-black text-white text-sm">{c.title}</h4>
                    <div className={`text-xs font-bold ${dept.accentColor}`}>
                      ⏱️ {c.time}
                    </div>
                    <p className="text-slate-200 text-xs leading-relaxed">{c.desc}</p>
                    <div className="bg-slate-800 rounded-lg p-3 border border-slate-600">
                      <p className="text-xs text-amber-300 font-bold mb-1">プロンプト例</p>
                      <p className="text-slate-300 text-xs leading-relaxed">{c.prompt}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* 導入ステップ */}
        <section className="space-y-6">
          <h2 className="text-2xl font-black text-white text-center">
            AI導入5ステップ
          </h2>
          <div className="space-y-3">
            {INTRO_STEPS.map((s) => (
              <div
                key={s.step}
                className="bg-slate-800 border border-slate-600 rounded-xl p-5 flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-cyan-700 flex items-center justify-center font-black text-white text-sm flex-shrink-0">
                  {s.step}
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{s.icon}</span>
                    <h3 className="font-black text-white text-sm">{s.title}</h3>
                  </div>
                  <p className="text-slate-200 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* コスト削減事例 */}
        <section className="space-y-6">
          <h2 className="text-2xl font-black text-white text-center">
            コスト削減・ROI事例
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {COST_CASES.map((c) => (
              <div
                key={c.dept}
                className={`border-2 rounded-2xl p-5 space-y-3 ${c.color}`}
              >
                <span className={`text-xs px-2.5 py-1 rounded-full font-bold ${c.badgeColor}`}>
                  {c.dept}
                </span>
                <div className="space-y-1">
                  <p className="text-xs text-slate-400 line-through">{c.before}</p>
                  <p className="text-sm font-bold text-white">{c.after}</p>
                </div>
                <div className="text-cyan-300 font-black text-sm">✅ {c.saving}</div>
                <p className="text-slate-300 text-xs leading-relaxed">{c.detail}</p>
              </div>
            ))}
          </div>
          <div className="bg-slate-800 border border-amber-500/40 rounded-xl p-4">
            <p className="text-amber-300 text-xs font-bold mb-1">⚠️ 注記</p>
            <p className="text-slate-300 text-xs leading-relaxed">
              上記の数値は業種・規模・活用方法によって大きく異なります。自社への適用可能性は、まず1業務での試験導入でROIを計測することを推奨します。
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="space-y-5">
          <h2 className="text-2xl font-black text-white text-center">
            よくある質問（FAQ）
          </h2>
          <div className="space-y-3">
            {FAQ.map(({ q, a }) => (
              <div
                key={q}
                className="bg-slate-800 border border-slate-600 rounded-xl p-5"
              >
                <p className="font-black text-white text-sm mb-2">Q. {q}</p>
                <p className="text-slate-200 text-sm leading-relaxed">A. {a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 関連ガイドへのリンク */}
        <section className="bg-slate-800 border border-slate-600 rounded-2xl p-6 space-y-4">
          <h2 className="font-black text-white text-lg">関連ガイドも読む</h2>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/ai-beginner-guide"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm transition-all hover:opacity-90 bg-blue-700 text-white border border-blue-500"
            >
              AI初心者ガイドへ →
            </Link>
            <Link
              href="/chatgpt-guide"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm transition-all hover:opacity-90 bg-emerald-700 text-white border border-emerald-500"
            >
              ChatGPT完全ガイドへ →
            </Link>
            <Link
              href="/ai-tools-guide"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm transition-all hover:opacity-90 bg-slate-700 text-white border border-slate-500"
            >
              無料AIツール一覧へ →
            </Link>
          </div>
        </section>

        {/* アフィリエイト */}
        <AffiliateSectionAiNews />
      </div>
    </div>
  );
}

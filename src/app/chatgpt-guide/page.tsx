import type { Metadata } from "next";
import Link from "next/link";
import AffiliateSectionAiNews from "@/components/AffiliateSectionAiNews";

export const metadata: Metadata = {
  title:
    "ChatGPT完全ガイド2026年【始め方・使い方・プロンプト・無料 vs 有料の違い】",
  description:
    "ChatGPT 4oの始め方・無料版と有料版（Plus）の違い・ビジネス副業勉強への活用法・プロンプトのコツ・GPTsの使い方を2026年版で完全解説。",
  keywords: [
    "ChatGPT 使い方",
    "ChatGPT 始め方",
    "ChatGPT 無料 有料 違い",
    "ChatGPT プロンプト",
    "ChatGPT Plus",
    "GPT-4o 使い方",
    "GPTs 使い方",
    "ChatGPT 副業",
    "ChatGPT ビジネス活用",
    "生成AI 初心者",
  ],
  alternates: {
    canonical: "https://ai-news-site-wheat.vercel.app/chatgpt-guide",
  },
  openGraph: {
    title: "ChatGPT完全ガイド2026年【始め方・使い方・プロンプト・無料 vs 有料の違い】",
    description:
      "ChatGPT 4oの始め方・無料版と有料版（Plus）の違い・ビジネス副業勉強への活用法・プロンプトのコツ・GPTsの使い方を2026年版で完全解説。",
    type: "article",
    locale: "ja_JP",
    url: "https://ai-news-site-wheat.vercel.app/chatgpt-guide",
  },
  twitter: {
    card: "summary_large_image",
    title: "ChatGPT完全ガイド2026年【始め方・使い方・プロンプト・無料 vs 有料】",
    description:
      "ChatGPT 4oの始め方・無料版と有料版の違い・プロンプトのコツ・GPTsまで徹底解説。",
  },
};

/* ────────────────────────────────────────────
   データ定義
──────────────────────────────────────────── */

type Plan = "無料" | "有料(Plus)";

interface ChatGPTFeature {
  id: string;
  name: string;
  plan: Plan;
  description: string;
  useCases: string[];
}

interface PromptTip {
  id: string;
  tip: string;
  example: string;
  effect: string;
}

interface UseCase {
  id: string;
  category: string;
  title: string;
  description: string;
  promptExample: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface PlanComparison {
  feature: string;
  free: string;
  plus: string;
}

const CHATGPT_FEATURES: ChatGPTFeature[] = [
  {
    id: "text-generation",
    name: "テキスト生成・文章作成",
    plan: "無料",
    description:
      "メール・レポート・SNS投稿・ブログ記事など、あらゆる文章を自然な日本語で生成。指示の仕方次第でライティングスタイルも自在に変更できる。",
    useCases: ["ビジネスメール作成", "ブログ記事の下書き", "SNS投稿文案", "レポート・論文の要約"],
  },
  {
    id: "code-generation",
    name: "コード生成・デバッグ",
    plan: "無料",
    description:
      "Python・JavaScript・TypeScript・HTMLなど主要言語のコードを生成・修正・解説。エラーメッセージを貼り付けるだけで原因と修正方法を提示する。",
    useCases: ["スクリプト自動生成", "エラーのデバッグ", "コードの説明・解読", "リファクタリング提案"],
  },
  {
    id: "dalle-image",
    name: "画像生成（DALL-E 3）",
    plan: "有料(Plus)",
    description:
      "テキストのプロンプトから高品質な画像をリアルタイムで生成。ビジネス資料のビジュアルやSNSサムネイルなどに活用できる。",
    useCases: ["アイキャッチ画像制作", "サムネイル素材", "商品イメージ作成", "アイデアの可視化"],
  },
  {
    id: "voice-input",
    name: "音声入力・高度な音声モード",
    plan: "無料",
    description:
      "スマートフォンアプリではマイクボタンで音声入力が可能。有料プランの「高度な音声モード」ではリアルタイムの自然な会話・感情表現ができる。",
    useCases: ["ハンズフリー質問", "発音練習・英会話", "議事録の文字起こし", "移動中の情報収集"],
  },
  {
    id: "file-analysis",
    name: "ファイル分析・データ解析",
    plan: "有料(Plus)",
    description:
      "PDF・Excel・CSV・画像などのファイルをアップロードするだけで内容を解析。資料の要約・データの可視化・グラフ作成も自動で行える。",
    useCases: ["PDF資料の要約", "CSVデータの集計", "決算書の分析", "契約書の読み解き"],
  },
  {
    id: "gpts",
    name: "GPTs（カスタムAI）",
    plan: "有料(Plus)",
    description:
      "特定用途に特化したカスタムChatGPTを利用・作成できる機能。料理・法律・SEOなど専門分野に特化したGPTsが数万種類以上公開されている。",
    useCases: ["SEO特化GPTs活用", "語学学習特化AI", "プログラミング専用AI", "独自GPTs作成"],
  },
  {
    id: "browsing",
    name: "Webブラウジング（リアルタイム検索）",
    plan: "有料(Plus)",
    description:
      "インターネットをリアルタイムで検索して最新情報を回答に反映する機能。学習データ以降の情報や最新ニュースも参照できる。",
    useCases: ["最新ニュース調査", "株価・為替の確認", "競合調査", "最新技術トレンドの把握"],
  },
  {
    id: "memory",
    name: "メモリ機能（会話の記憶）",
    plan: "有料(Plus)",
    description:
      "ユーザーの情報・好み・過去の会話を記憶し、次回以降の会話に活かせる機能。「いつも丁寧語で」「職業はエンジニア」などを一度伝えるだけでよい。",
    useCases: ["パーソナライズされた回答", "繰り返し入力の削減", "長期プロジェクト管理", "個人設定の継続"],
  },
];

const PLAN_COMPARISONS: PlanComparison[] = [
  { feature: "利用料金", free: "無料", plus: "月額$20（約3,000円）" },
  { feature: "使用モデル", free: "GPT-4o mini（制限あり）", plus: "GPT-4o（高性能版）" },
  { feature: "1日の利用制限", free: "あり（上限で低性能に切替）", plus: "大幅に緩和" },
  { feature: "画像生成（DALL-E 3）", free: "不可", plus: "可能（1日制限あり）" },
  { feature: "ファイルアップロード", free: "制限あり", plus: "PDF・Excel・CSVなど自由に" },
  { feature: "GPTs（カスタムAI）", free: "利用のみ可", plus: "利用＋作成が可能" },
  { feature: "Webブラウジング", free: "不可", plus: "リアルタイム検索可能" },
  { feature: "メモリ機能", free: "限定的", plus: "フル活用可能" },
  { feature: "高度な音声モード", free: "基本のみ", plus: "感情表現・自然会話" },
  { feature: "o1モデルアクセス", free: "不可", plus: "推論特化モデルを利用可" },
];

const PROMPT_TIPS: PromptTip[] = [
  {
    id: "role-setting",
    tip: "役割（ペルソナ）を設定する",
    example: "「あなたはプロのSEOライターです。以下の記事タイトルを10個提案してください」",
    effect: "ChatGPTが専門家として回答するため、出力の質・専門度が大幅に向上する",
  },
  {
    id: "specific-instruction",
    tip: "具体的な条件・数字を盛り込む",
    example: "「300字以内で・箇条書きで・初心者向けに・3つのポイントを」",
    effect: "出力フォーマットが安定し、そのまま使えるアウトプットが得られる",
  },
  {
    id: "few-shot",
    tip: "例を示す（Few-shotプロンプト）",
    example: "「例：良い件名→『〇〇様へ、お世話になっております』　このスタイルで5件作成して」",
    effect: "期待するトーン・スタイルを学習させることで、好みに合った出力になる",
  },
  {
    id: "step-by-step",
    tip: "段階的に指示する（Chain of Thought）",
    example: "「まず構成を考えて → 次に各段落の要点を書いて → 最後に全文を完成させて」",
    effect: "複雑なタスクでも精度が上がり、論理的で一貫した回答が得られる",
  },
  {
    id: "output-format",
    tip: "出力形式を明示する",
    example: "「マークダウン形式で・H2/H3を使って・表を入れて・URLはリンクで出力して」",
    effect: "コピペ後の編集工数がゼロになり、すぐに使える形で出力される",
  },
  {
    id: "iterative",
    tip: "繰り返し改善する（Iterative Prompting）",
    example: "「もっとカジュアルなトーンに変えて」「3番目の項目をもっと具体的に」",
    effect: "一発完璧を求めず対話を重ねることで最終的に理想に近い出力が得られる",
  },
];

const USE_CASES: UseCase[] = [
  {
    id: "business",
    category: "ビジネス",
    title: "ビジネス文書・メール作成",
    description:
      "会議の議事録・週次報告書・提案書・メール返信文の下書きなど、定型業務を自動化。1日1〜2時間の時間削減が見込める。",
    promptExample:
      "「以下の箇条書きメモをもとに、上司向けの週次報告メールを作成してください。敬語・簡潔・結論先出しでお願いします。[メモ内容]」",
  },
  {
    id: "study",
    category: "勉強",
    title: "資格取得・学習サポート",
    description:
      "難しい専門用語を中学生でも分かるレベルで説明させたり、過去問を解説させたり、学習計画を立てさせたりと、個人教師として活用できる。",
    promptExample:
      "「宅建の『借地借家法』を初心者向けに図解（テキスト表現）を使いながら解説してください。重要ポイントも箇条書きでまとめてください」",
  },
  {
    id: "fukugyou",
    category: "副業",
    title: "副業・フリーランスライティング",
    description:
      "記事の構成案作成・下書き生成・タイトル案出しなど、ライティング業務のスピードを5〜10倍に高速化できる。クラウドソーシングでの受注量増加に直結する。",
    promptExample:
      "「ダイエットをテーマにしたSEO記事（2000字）の構成と各段落の要点を作成してください。読者は30代女性、キーワードは『ダイエット 食事制限なし』です」",
  },
  {
    id: "programming",
    category: "開発",
    title: "プログラミング・システム開発",
    description:
      "コードの自動生成だけでなく、エラー解析・コードレビュー・ドキュメント作成も可能。未経験者がPythonスクリプトを作成する用途にも広く使われている。",
    promptExample:
      "「PythonでExcelファイルを読み込み、A列の重複を削除してB列の合計を出すスクリプトを書いてください。コメントを日本語で入れてください」",
  },
  {
    id: "content",
    category: "コンテンツ",
    title: "SNS運用・コンテンツ制作",
    description:
      "X（旧Twitter）・Instagram・YouTubeの投稿文・台本・ハッシュタグ提案まで一括生成。SNSアカウント運用の更新頻度を維持しながら品質を高められる。",
    promptExample:
      "「ChatGPTの活用術をテーマにしたX投稿を5パターン作成してください。各140字以内・絵文字あり・最後に関連ハッシュタグを3〜5個付けて」",
  },
];

const FAQS: FAQ[] = [
  {
    question: "ChatGPTの始め方・アカウント登録の手順は？",
    answer:
      "ChatGPTの始め方は簡単です。①chat.openai.comにアクセス ②「Sign up」をクリック ③メールアドレスまたはGoogleアカウントで登録 ④メール認証 ⑤生年月日・名前を入力 ⑥利用規約に同意、以上で完了です。スマートフォンの場合はApp Store・Google PlayでChatGPTアプリをインストールする方法が便利です。登録後すぐに無料で使い始められます。",
  },
  {
    question: "ChatGPT無料版と有料版（Plus）の一番の違いは何ですか？",
    answer:
      "最大の違いはモデル性能と利用制限です。無料版はGPT-4o mini（軽量版）が中心で1日の利用回数に上限があります。有料版（Plus、月額$20）ではGPT-4o（高性能版）を制限少なく使え、DALL-E 3での画像生成・ファイルアップロード分析・Webブラウジング・GPTs作成・メモリ機能・高度な音声モードなどが利用可能になります。毎日多く使うなら有料版への移行がおすすめです。",
  },
  {
    question: "GPTsとは何ですか？どうやって使うのですか？",
    answer:
      "GPTs（ジーピーティーズ）はChatGPTをカスタマイズして特定の用途に特化させたAIです。例えば「SEO記事ライター専用GPT」「英語発音コーチ専用GPT」などが公開されています。使い方は：ChatGPTにログイン後、左サイドバーの「GPTを探す」をクリックし、目的に合ったGPTsを検索・選択するだけです。有料プランではGPTsを自分で作成することもでき、独自のシステムプロンプトや知識ファイルを設定できます。",
  },
  {
    question: "仕事でChatGPTを使う場合、情報漏洩のリスクはありますか？",
    answer:
      "入力した内容はOpenAIのサーバーに送信されます。デフォルト設定では学習データに使用される場合があるため、顧客情報・社外秘データ・個人情報は入力しないことを推奨します。設定から「チャット履歴とトレーニングをオフ」にすることでデータ学習を無効化できます。企業向けには「ChatGPT Team/Enterprise」プランが非学習・データ保護対応です。",
  },
  {
    question: "ChatGPTで副業収入を得る具体的な方法は？",
    answer:
      "主な方法は5つあります。①ライティング代行（クラウドワークス・ランサーズでの記事作成）②プログラミング代行（Pythonスクリプト・Webサイト制作）③翻訳代行④SNS運用代行⑤プロンプト販売（NoteやマーケットプレイスでのChatGPTプロンプト販売）。ChatGPTを使ったライティングで月5〜10万円を稼ぐ方も増えています。まずはクラウドソーシングサイトに登録してライティングから始めるのがおすすめです。",
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

export default function ChatGPTGuidePage() {
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
            <span className="inline-block text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-400/10 px-4 py-1.5 rounded-full mb-4">
              2026年版 最新情報
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight mb-4">
              ChatGPT完全ガイド2026年
              <br />
              <span className="text-cyan-400">
                【始め方・使い方・プロンプト・無料 vs 有料の違い】
              </span>
            </h1>
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              ChatGPT 4oの始め方から無料版と有料版（Plus）の違い、ビジネス・副業・勉強への活用法、プロンプトのコツ、GPTsの使い方まで徹底網羅。
            </p>
            {/* 目次クイックリンク */}
            <div className="flex flex-wrap justify-center gap-2">
              {[
                { href: "#start", label: "始め方" },
                { href: "#plan-compare", label: "無料 vs 有料" },
                { href: "#features", label: "全機能一覧" },
                { href: "#prompt-tips", label: "プロンプト術" },
                { href: "#use-cases", label: "活用シーン" },
                { href: "#gpts", label: "GPTs活用" },
                { href: "#faq", label: "FAQ" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-xs font-bold px-4 py-2 rounded-full bg-slate-800 text-cyan-300 border border-slate-700 hover:bg-slate-700 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── 始め方 ── */}
        <section id="start" className="py-14 px-4 bg-slate-950">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
                ChatGPT始め方・登録手順（5分で完了）
              </h2>
              <p className="text-gray-300 text-sm">
                スマホ・PCどちらからでも無料で始められます
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { step: 1, title: "公式サイトにアクセス", desc: "chat.openai.com または App Store / Google Play で「ChatGPT」と検索してアプリをインストール" },
                { step: 2, title: "Sign up をクリック", desc: "メールアドレスまたはGoogle・Microsoftアカウントで登録。どれも無料です" },
                { step: 3, title: "メール認証", desc: "登録したメールアドレスに届いた認証コードを入力してアカウントを有効化" },
                { step: 4, title: "プロフィール設定", desc: "名前・生年月日を入力。個人情報は最小限でOK。詳細設定は後からでも変更可能" },
                { step: 5, title: "利用規約に同意", desc: "OpenAIの利用規約・プライバシーポリシーを確認して同意をクリック" },
                { step: 6, title: "すぐに使い始めよう", desc: "テキストボックスに質問を入力するだけでAIとの会話が始まります。難しい設定は不要" },
              ].map((item) => (
                <div
                  key={item.step}
                  className="rounded-2xl border border-slate-800 bg-slate-900 p-5"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 rounded-full bg-cyan-500 text-slate-950 flex items-center justify-center font-black text-sm flex-shrink-0">
                      {item.step}
                    </span>
                    <h3 className="font-black text-white text-sm">{item.title}</h3>
                  </div>
                  <p className="text-gray-300 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 無料 vs 有料 比較 ── */}
        <section id="plan-compare" className="py-14 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
                無料版 vs 有料版（Plus）徹底比較
              </h2>
              <p className="text-gray-300 text-sm">
                月額$20の価値があるかどうかを機能一覧で確認
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 overflow-hidden">
              {/* ヘッダー */}
              <div className="grid grid-cols-3 bg-slate-800 px-4 py-3">
                <div className="text-gray-300 text-xs font-bold">機能</div>
                <div className="text-center text-emerald-400 text-xs font-bold">無料版</div>
                <div className="text-center text-amber-400 text-xs font-bold">Plus（月$20）</div>
              </div>
              {PLAN_COMPARISONS.map((row, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-3 px-4 py-3 border-t border-slate-800 text-xs ${
                    i % 2 === 0 ? "bg-slate-900" : "bg-slate-800/30"
                  }`}
                >
                  <div className="text-gray-300 font-bold pr-2">{row.feature}</div>
                  <div className="text-center text-gray-300 px-1">{row.free}</div>
                  <div className="text-center text-amber-300 px-1 font-medium">{row.plus}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl bg-amber-500/10 border border-amber-500/30 p-5">
              <p className="text-sm text-gray-300 leading-relaxed">
                <span className="font-black text-amber-400">Plus移行のおすすめタイミング：</span>
                　無料版で1日の上限に達することが増えてきた・画像生成を試したい・仕事でガッツリ使いたい、という場合にPlus（月額$20）への移行を検討してください。月数千円の投資で業務効率化の恩恵を受けられます。
              </p>
            </div>
          </div>
        </section>

        {/* ── 機能一覧 ── */}
        <section id="features" className="py-14 px-4 bg-slate-950">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
                ChatGPT主要機能一覧
              </h2>
              <p className="text-gray-300 text-sm">
                無料・有料(Plus)で使える機能を完全網羅
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CHATGPT_FEATURES.map((feature) => (
                <div
                  key={feature.id}
                  className="rounded-2xl border border-slate-800 bg-slate-900 p-5 flex flex-col gap-3"
                >
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-black text-white text-base">
                      {feature.name}
                    </h3>
                    <span
                      className={`text-xs font-bold px-3 py-1 rounded-full flex-shrink-0 ${
                        feature.plan === "無料"
                          ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30"
                          : "bg-amber-500/15 text-amber-400 border border-amber-500/30"
                      }`}
                    >
                      {feature.plan}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {feature.useCases.map((uc) => (
                      <span
                        key={uc}
                        className="text-xs px-2.5 py-1 rounded-full bg-slate-800 text-gray-300 border border-slate-700"
                      >
                        {uc}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── プロンプトのコツ ── */}
        <section id="prompt-tips" className="py-14 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
                プロンプト6大テクニック
              </h2>
              <p className="text-gray-300 text-sm">
                同じ質問でも「聞き方」次第で出力品質が劇的に変わる
              </p>
            </div>

            <div className="flex flex-col gap-6">
              {PROMPT_TIPS.map((tip, index) => (
                <div
                  key={tip.id}
                  className="rounded-2xl border border-slate-800 bg-slate-900 p-5 sm:p-6"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-black text-sm border border-cyan-500/30">
                      {index + 1}
                    </span>
                    <div className="flex-1 flex flex-col gap-3">
                      <h3 className="font-black text-white text-base">
                        {tip.tip}
                      </h3>
                      <div className="rounded-xl bg-slate-800 border border-slate-700 px-4 py-3">
                        <p className="text-xs text-cyan-300 font-bold mb-1">
                          例
                        </p>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {tip.example}
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-emerald-400 font-bold text-xs flex-shrink-0 mt-0.5">
                          効果：
                        </span>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {tip.effect}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 活用シーン ── */}
        <section id="use-cases" className="py-14 px-4 bg-slate-950">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
                ChatGPT活用シーン5選
              </h2>
              <p className="text-gray-300 text-sm">
                ビジネス・副業・勉強・開発・コンテンツ制作での実践的な使い方
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {USE_CASES.map((uc, index) => (
                <div
                  key={uc.id}
                  className="rounded-2xl border border-slate-800 bg-slate-900 p-5 flex flex-col gap-3"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-cyan-500/15 text-cyan-400 border border-cyan-500/30 flex-shrink-0">
                      {uc.category}
                    </span>
                    <span className="w-5 h-5 rounded-full bg-slate-800 text-gray-300 flex items-center justify-center font-black text-xs border border-slate-700 flex-shrink-0">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="font-black text-white text-sm leading-tight">
                    {uc.title}
                  </h3>
                  <p className="text-gray-300 text-xs leading-relaxed">
                    {uc.description}
                  </p>
                  <div className="rounded-xl bg-slate-800 border border-slate-700 px-3 py-2.5 mt-auto">
                    <p className="text-xs text-amber-400 font-bold mb-1">
                      プロンプト例
                    </p>
                    <p className="text-gray-300 text-xs leading-relaxed">
                      {uc.promptExample}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── GPTs活用 ── */}
        <section id="gpts" className="py-14 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
                GPTs（カスタムAI）の使い方
              </h2>
              <p className="text-gray-300 text-sm">
                目的特化のAIを選ぶだけで専門家レベルの回答が得られる
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { name: "SEO Content Optimizer", desc: "SEO記事のキーワード密度・タイトルタグ・メタディスクリプションを最適化。ブログ運営者に人気。" },
                { name: "Coding Assistant", desc: "コードのデバッグ・リファクタリング・ドキュメント生成に特化。エラー解決が爆速になる。" },
                { name: "English Language Coach", desc: "英語の文法修正・発音ガイド・TOEIC対策など英語学習に完全特化したGPTs。" },
                { name: "Image Prompt Generator", desc: "Midjourneyや DALL-E向けの高品質なプロンプトを自動生成。画像生成AI活用に必須。" },
                { name: "Business Plan Creator", desc: "事業計画書・ビジネスモデル・マーケティング戦略の作成を段階的にサポート。" },
                { name: "Resume & CV Builder", desc: "職務経歴書・履歴書・カバーレターを業種・経験に合わせて最適な形式で作成。" },
              ].map((gpt) => (
                <div
                  key={gpt.name}
                  className="rounded-2xl border border-slate-800 bg-slate-900 p-4"
                >
                  <h3 className="font-black text-cyan-300 text-sm mb-2">{gpt.name}</h3>
                  <p className="text-gray-300 text-xs leading-relaxed">{gpt.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl bg-slate-900 border border-slate-800 p-5">
              <p className="text-sm text-gray-300 leading-relaxed">
                <span className="font-black text-white">GPTsの見つけ方：</span>
                　ChatGPT Plus登録後、左サイドバーの「GPTを探す」または
                <span className="text-cyan-400 font-bold"> chat.openai.com/gpts </span>
                にアクセス。カテゴリや検索で目的に合ったGPTsを見つけられます。
              </p>
            </div>
          </div>
        </section>

        {/* ── 関連ガイドCTA ── */}
        <section className="py-10 px-4 bg-slate-950">
          <div className="max-w-3xl mx-auto">
            <div className="rounded-2xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 p-6 sm:p-8 text-center">
              <p className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-3">
                関連ガイド
              </p>
              <h2 className="text-xl sm:text-2xl font-black text-white mb-3">
                ChatGPT以外のAIツールも知りたい方へ
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Claude・Gemini・Perplexityなど2026年に使えるAIツールを目的別に比較。
                <br />
                無料で使えるツールだけを厳選して解説しています。
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/claude-ai-guide"
                  className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-black text-sm px-6 py-3 rounded-xl transition-colors"
                >
                  Claude AIガイドを読む →
                </Link>
                <Link
                  href="/ai-tools-guide"
                  className="inline-flex items-center justify-center gap-2 bg-slate-700 hover:bg-slate-600 text-cyan-300 font-black text-sm px-6 py-3 rounded-xl transition-colors border border-slate-600"
                >
                  無料AIツール完全ガイド →
                </Link>
              </div>
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
                ChatGPTの始め方・使い方に関する疑問を解決
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {FAQS.map((faq, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-800 bg-slate-900 p-5 sm:p-6"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-black text-xs border border-cyan-500/30 mt-0.5">
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

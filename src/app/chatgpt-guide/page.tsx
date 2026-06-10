import type { Metadata } from "next";
import Link from "next/link";
import AffiliateSectionAiNews from "@/components/AffiliateSectionAiNews";

export const metadata: Metadata = {
  title:
    "ChatGPT使い方完全ガイド2026年版【初心者〜上級者・無料プランで使える全機能】",
  description:
    "ChatGPT無料・有料の使い方を完全解説。日本語での質問コツ、プロンプトテクニック、副業・仕事効率化への活用法まで2026年版で網羅。",
  keywords: [
    "ChatGPT 使い方",
    "ChatGPT 無料",
    "ChatGPT 日本語",
    "ChatGPT プロンプト",
    "ChatGPT 副業",
    "ChatGPT 仕事効率化",
    "GPT-4o 使い方",
    "生成AI 初心者",
  ],
  alternates: {
    canonical: "https://ai-news-site-wheat.vercel.app/chatgpt-guide",
  },
  openGraph: {
    title: "ChatGPT使い方完全ガイド2026年版【初心者〜上級者・無料プランで使える全機能】",
    description:
      "ChatGPT無料・有料の使い方を完全解説。日本語での質問コツ、プロンプトテクニック、副業・仕事効率化への活用法まで2026年版で網羅。",
    type: "article",
    locale: "ja_JP",
    url: "https://ai-news-site-wheat.vercel.app/chatgpt-guide",
  },
  twitter: {
    card: "summary_large_image",
    title: "ChatGPT使い方完全ガイド2026年版",
    description:
      "ChatGPT無料・有料の使い方を完全解説。プロンプトテクニック・副業・仕事効率化まで網羅。",
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
  title: string;
  description: string;
  promptExample: string;
}

interface FAQ {
  question: string;
  answer: string;
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
    name: "音声入力・会話モード",
    plan: "無料",
    description:
      "スマートフォンアプリではマイクボタンで音声入力が可能。有料プランの「高度な音声モード」ではリアルタイムの自然な会話ができる。",
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
    id: "api-access",
    name: "APIアクセス",
    plan: "有料(Plus)",
    description:
      "OpenAI APIを利用してChatGPTの機能をシステムやアプリに組み込める。従量課金制で自社サービスへのAI機能実装が可能。",
    useCases: ["自社アプリへのAI組み込み", "業務自動化システム構築", "チャットボット開発", "データ処理パイプライン"],
  },
];

const PROMPT_TIPS: PromptTip[] = [
  {
    id: "role-setting",
    tip: "役割（ペルソナ）を設定する",
    example: '「あなたはプロのSEOライターです。以下の記事タイトルを10個提案してください」',
    effect: "ChatGPTが専門家として回答するため、出力の質・専門度が大幅に向上する",
  },
  {
    id: "specific-instruction",
    tip: "具体的な条件・数字を盛り込む",
    example: '「300字以内で・箇条書きで・初心者向けに・3つのポイントを」',
    effect: "出力フォーマットが安定し、そのまま使えるアウトプットが得られる",
  },
  {
    id: "few-shot",
    tip: "例を示す（Few-shotプロンプト）",
    example: '「例：良い件名→『〇〇様へ、お世話になっております』　このスタイルで5件作成して」',
    effect: "期待するトーン・スタイルを学習させることで、好みに合った出力になる",
  },
  {
    id: "step-by-step",
    tip: "段階的に指示する（Chain of Thought）",
    example: '「まず構成を考えて → 次に各段落の要点を書いて → 最後に全文を完成させて」',
    effect: "複雑なタスクでも精度が上がり、論理的で一貫した回答が得られる",
  },
  {
    id: "output-format",
    tip: "出力形式を明示する",
    example: '「マークダウン形式で・H2/H3を使って・表を入れて・URLはリンクで出力して」',
    effect: "コピペ後の編集工数がゼロになり、すぐに使える形で出力される",
  },
  {
    id: "iterative",
    tip: "繰り返し改善する（Iterative Prompting）",
    example: '「もっとカジュアルなトーンに変えて」「3番目の項目をもっと具体的に」',
    effect: "一発完璧を求めず対話を重ねることで最終的に理想に近い出力が得られる",
  },
];

const USE_CASES: UseCase[] = [
  {
    id: "freelance-writing",
    title: "副業・フリーランスライティング",
    description:
      "記事の構成案作成・下書き生成・タイトル案出しなど、ライティング業務のスピードを5〜10倍に高速化できる。クラウドソーシングでの受注量増加に直結する。",
    promptExample:
      '「ダイエットをテーマにしたSEO記事（2000字）の構成と各段落の要点を作成してください。読者は30代女性、キーワードは"ダイエット 食事制限なし"です」',
  },
  {
    id: "work-efficiency",
    title: "仕事効率化・ビジネス文書",
    description:
      "会議の議事録作成・メール返信文の下書き・報告書のテンプレート化など、定型業務を自動化して1日1〜2時間の時間削減が可能。",
    promptExample:
      '「以下の箇条書きメモをもとに、上司向けの週次報告メールを作成してください。敬語・簡潔・結論先出しでお願いします。[メモ内容]」',
  },
  {
    id: "learning",
    title: "学習・資格取得サポート",
    description:
      "難しい専門用語を中学生でも分かるレベルで説明させたり、過去問を解説させたり、学習計画を立てさせたりと、個人教師として活用できる。",
    promptExample:
      '「宅建の「借地借家法」を初心者向けに図解（テキスト表現）を使いながら解説してください。重要ポイントも箇条書きでまとめてください」',
  },
  {
    id: "programming",
    title: "プログラミング・システム開発",
    description:
      "コードの自動生成だけでなく、エラー解析・コードレビュー・ドキュメント作成も可能。未経験者がPythonスクリプトを作成する用途にも広く使われている。",
    promptExample:
      '「PythonでExcelファイルを読み込み、A列の重複を削除してB列の合計を出すスクリプトを書いてください。コメントを日本語で入れてください」',
  },
  {
    id: "content-creation",
    title: "コンテンツ制作・SNS運用",
    description:
      "X（旧Twitter）・Instagram・YouTubeの投稿文・台本・ハッシュタグ提案まで一括生成。SNSアカウント運用の更新頻度を維持しながら品質を高められる。",
    promptExample:
      '「ChatGPTの活用術をテーマにしたX投稿を5パターン作成してください。各140字以内・絵文字あり・最後に関連ハッシュタグを3〜5個付けて」',
  },
];

const FAQS: FAQ[] = [
  {
    question: "ChatGPT無料版でできることの制限は何ですか？",
    answer:
      "2026年現在、無料版ではGPT-4o miniが利用可能で、テキスト生成・コード生成・画像入力（テキスト解析）・音声入力が使えます。ただし1日の利用回数に上限があり、ファイルアップロード・DALL-E画像生成・GPTs・Webブラウジング・GPT-4oへの切り替えには有料プラン（ChatGPT Plus、月額$20）が必要です。",
  },
  {
    question: "GPT-4oとGPT-4の違いは何ですか？",
    answer:
      "GPT-4oは「omni（全モーダル）」の略で、テキスト・画像・音声をネイティブに処理できる最新モデルです。GPT-4と比べて処理速度が2倍以上速く、コストも大幅に低下しています。日本語理解力も向上しており、2026年現在はGPT-4oが標準モデルとなっています。",
  },
  {
    question: "ChatGPTは日本語で使えますか？精度は高いですか？",
    answer:
      "はい、ChatGPTは日本語に完全対応しています。GPT-4oでは自然な敬語・口語・専門用語も正確に理解し、英語と同等レベルの品質で回答します。日本語で質問しても英語で回答される場合は「日本語で答えてください」と追加するだけで解決します。",
  },
  {
    question: "仕事でChatGPTを使う場合、情報漏洩のリスクはありますか？",
    answer:
      "入力した内容はOpenAIのサーバーに送信されます。デフォルト設定では学習データに使用される場合があるため、顧客情報・社外秘データ・個人情報は入力しないことを推奨します。設定から「チャット履歴とトレーニングをオフ」にすることでデータ学習を無効化できます。企業向けには「ChatGPT Team/Enterprise」プランが非学習・データ保護対応です。",
  },
  {
    question: "ChatGPTで副業収入を得られますか？具体的な方法は？",
    answer:
      "はい、実際に多くの方が副業に活用しています。主な方法は①ライティング代行（クラウドワークス・ランサーズでの記事作成）②プログラミング代行（Pythonスクリプト・Webサイト制作）③翻訳代行④SNS運用代行⑤プロンプト販売（Noteやマーケットプレイスでの販売）があります。ChatGPTを使ったライティングで月5〜10万円を稼ぐ方も増えています。",
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
              ChatGPT使い方完全ガイド2026年版
              <br />
              <span className="text-cyan-400">
                【初心者〜上級者・無料プランで使える全機能】
              </span>
            </h1>
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              ChatGPT無料・有料の使い方を完全解説。日本語での質問コツ、プロンプトテクニック、副業・仕事効率化への活用法まで徹底網羅。
            </p>
            {/* 目次クイックリンク */}
            <div className="flex flex-wrap justify-center gap-2">
              {[
                { href: "#features", label: "全機能一覧" },
                { href: "#prompt-tips", label: "プロンプト術" },
                { href: "#use-cases", label: "活用シーン" },
                { href: "#faq", label: "よくある質問" },
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

        {/* ── 機能一覧 ── */}
        <section id="features" className="py-14 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
                ChatGPT主要機能一覧
              </h2>
              <p className="text-gray-400 text-sm">
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
                        className="text-xs px-2.5 py-1 rounded-full bg-slate-800 text-gray-400 border border-slate-700"
                      >
                        {uc}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* プラン比較メモ */}
            <div className="mt-8 rounded-2xl bg-slate-900 border border-slate-800 p-5">
              <p className="text-sm text-gray-300 leading-relaxed">
                <span className="font-bold text-white">💡 プランの選び方：</span>
                　テキスト生成・コード生成・音声入力は無料プランで十分です。画像生成・ファイル分析・GPTs・Webブラウジングを使いたい場合は
                <span className="text-amber-400 font-bold">ChatGPT Plus（月額$20）</span>
                へのアップグレードを検討してください。
              </p>
            </div>
          </div>
        </section>

        {/* ── プロンプトのコツ ── */}
        <section id="prompt-tips" className="py-14 px-4 bg-slate-950">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
                プロンプト6大テクニック
              </h2>
              <p className="text-gray-400 text-sm">
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
        <section id="use-cases" className="py-14 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
                ChatGPT活用シーン5選
              </h2>
              <p className="text-gray-400 text-sm">
                副業・仕事・学習・プログラミング・コンテンツ制作での実践的な使い方
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {USE_CASES.map((uc, index) => (
                <div
                  key={uc.id}
                  className="rounded-2xl border border-slate-800 bg-slate-900 p-5 flex flex-col gap-3"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-slate-800 text-cyan-400 flex items-center justify-center font-black text-xs border border-slate-700 flex-shrink-0">
                      {index + 1}
                    </span>
                    <h3 className="font-black text-white text-sm leading-tight">
                      {uc.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 text-xs leading-relaxed">
                    {uc.description}
                  </p>
                  <div className="rounded-xl bg-slate-800 border border-slate-700 px-3 py-2.5 mt-auto">
                    <p className="text-xs text-amber-400 font-bold mb-1">
                      プロンプト例
                    </p>
                    <p className="text-gray-400 text-xs leading-relaxed">
                      {uc.promptExample}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── AI Tools へのCTAリンク ── */}
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
                Gemini・Claude・Perplexityなど2026年に使えるAIツール15選を目的別に比較。
                <br />
                無料で使えるツールだけを厳選して解説しています。
              </p>
              <Link
                href="/ai-tools-guide"
                className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black text-sm px-6 py-3 rounded-xl transition-colors"
              >
                無料AIツール完全ガイドを読む →
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
                ChatGPTに関する疑問・不安をまとめて解決
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

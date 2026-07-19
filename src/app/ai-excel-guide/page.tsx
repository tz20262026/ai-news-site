import type { Metadata } from "next";
import Link from "next/link";
import AffiliateSectionAiNews from "@/components/AffiliateSectionAiNews";
import ArticleAffiliateBanner from "@/components/ArticleAffiliateBanner";

const PAGE_URL = "https://ai-news-site-wheat.vercel.app/ai-excel-guide";
const PUBLISHED_AT = "2026-07-20";

export const metadata: Metadata = {
  title: "Excel×AI活用 完全ガイド2026【Copilot・ChatGPTで仕事効率化】",
  description:
    "Excel作業をAIで効率化する方法を2026年版で解説。Microsoft Copilot in Excel・ChatGPTでの関数作成/VBA生成・GPT for Sheetsを比較し、そのままコピペで使えるプロンプト例5選、機密データを扱う際の注意点、FAQまでまとめました。",
  keywords: [
    "Excel AI 活用",
    "Copilot Excel 使い方",
    "ChatGPT Excel 関数",
    "エクセル 自動化 AI",
    "ChatGPT VBA 作成",
    "Excel 効率化",
    "GPT for Sheets",
    "エクセル AI 無料",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Excel×AI活用 完全ガイド2026【Copilot・ChatGPTで仕事効率化】",
    description:
      "Copilot in Excel・ChatGPTでの関数作成/VBA生成・GPT for Sheetsを比較。コピペで使えるプロンプト例と業務での注意点を解説。",
    type: "article",
    locale: "ja_JP",
    url: PAGE_URL,
    publishedTime: PUBLISHED_AT,
  },
  twitter: {
    card: "summary_large_image",
    title: "Excel×AI活用 完全ガイド2026",
    description: "Copilot・ChatGPTでExcel作業を効率化。プロンプト例と注意点を解説。",
  },
};

/** Excel×AIツール1件分のデータ型 */
interface ExcelAiTool {
  name: string;
  icon: string;
  provider: string;
  type: "Excel内蔵" | "外部AI併用" | "アドイン";
  summary: string;
  fee: string;
  feature: string;
  bestFor: string;
  caution: string;
  tags: string[];
}

/** プロンプト例1件分 */
interface PromptExample {
  title: string;
  scene: string;
  prompt: string;
  point: string;
}

/** よくある質問1件分 */
interface FaqItem {
  q: string;
  a: string;
}

const TOOLS: ExcelAiTool[] = [
  {
    name: "Microsoft Copilot in Excel",
    icon: "🟢",
    provider: "Microsoft",
    type: "Excel内蔵",
    summary:
      "Excelに直接組み込まれたMicrosoft公式のAIアシスタント。表のデータを日本語で指示するだけで、集計・並べ替え・数式の提案・グラフ作成・データの傾向分析までExcelの画面内で完結する。外部にファイルをコピペする必要がないため、社内データを扱う業務でも導入しやすいのが最大の強み。",
    fee: "料金の目安：Microsoft 365の対象プラン＋Copilotライセンスが必要（法人・個人でプラン体系が異なる）",
    feature: "Excel画面内で完結・数式提案・データ分析・グラフ自動作成",
    bestFor: "会社でMicrosoft 365を使っている人・データを外部AIに出せない職場の人・Excel操作自体が苦手な人",
    caution: "利用にはライセンス費用がかかり、テーブル形式のデータでないと性能を発揮しにくい。まず表をテーブル化する習慣を。",
    tags: ["公式機能", "画面内完結", "法人向き"],
  },
  {
    name: "ChatGPTで関数作成・VBA生成",
    icon: "💬",
    provider: "OpenAI",
    type: "外部AI併用",
    summary:
      "「やりたいこと」を日本語で説明すると、必要なExcel関数やVBAマクロのコードを書いてくれる使い方。VLOOKUPとXLOOKUPの使い分け、複雑なIF文の組み立て、繰り返し作業のマクロ化など、「調べながら数式を書く時間」を大幅に削れる。無料枠から始められるため、Excel×AIの入門として最も手軽。",
    fee: "料金の目安：無料枠あり・有料プランは月額数千円程度",
    feature: "関数の作成と解説・VBAマクロ生成・エラーの原因調査・数式の読み解き",
    bestFor: "関数やマクロを自分で調べて書くのがつらい人・費用をかけずに始めたい人・エラーの意味がわからず困っている人",
    caution: "生成された数式・コードは必ずコピーのファイルでテストしてから本番に使う。データそのものを貼る場合は機密情報に注意。",
    tags: ["無料枠あり", "VBA対応", "入門に最適"],
  },
  {
    name: "GPT for Sheets等のアドイン",
    icon: "🧩",
    provider: "サードパーティ各社",
    type: "アドイン",
    summary:
      "GoogleスプレッドシートやExcelにAI機能を追加するアドイン（拡張機能）。セルの中でAI関数を呼び出し、大量の行に対して「文章の要約」「カテゴリ分類」「翻訳」などを一括実行できるのが特徴。1行ずつChatGPTに貼り付ける手間がなくなるため、数百行規模のテキスト処理で威力を発揮する。",
    fee: "料金の目安：アドイン自体は無料〜有料までさまざま＋AIのAPI利用料が別途かかるものが多い",
    feature: "セル内でAI呼び出し・大量データの一括処理・分類/要約/翻訳",
    bestFor: "スプレッドシートで大量のテキストデータを処理する人・API利用に抵抗がない中級者以上",
    caution: "APIキーの設定が必要なものが多く、処理量に応じて従量課金が発生する。まず少量でコストを確認してから本格利用を。",
    tags: ["一括処理", "スプレッドシート", "中級者向け"],
  },
];

const PROMPTS: PromptExample[] = [
  {
    title: "① やりたいことから関数を作ってもらう",
    scene: "関数名がわからないとき",
    prompt:
      "Excelで、A列に日付、B列に売上金額が入っています。「2026年6月の売上だけを合計する」数式を作ってください。数式の意味も初心者向けに解説してください。",
    point: "列の構成（どの列に何が入っているか）を伝えるのがコツ。解説付きで頼むと次から自分で応用できます。",
  },
  {
    title: "② 複雑な数式の意味を解読してもらう",
    scene: "引き継いだファイルの数式が読めないとき",
    prompt:
      "次のExcel数式が何をしているのか、ステップごとに日本語で説明してください：=IFERROR(INDEX(C:C,MATCH(A2&B2,D:D,0)),\"該当なし\")",
    point: "前任者が残した謎の数式の解読は、AIが最も得意とする作業のひとつ。エラーが出る数式の原因調査にも使えます。",
  },
  {
    title: "③ 繰り返し作業をVBAマクロにしてもらう",
    scene: "毎回同じ手作業をしているとき",
    prompt:
      "Excel VBAのマクロを書いてください。内容：ブック内の全シートについて、1行目を太字にして、A列の幅を自動調整し、シート名の一覧を新しいシート「目次」に書き出す。初心者なので、マクロの登録方法と実行手順も教えてください。",
    point: "「何を・どの順番で」を箇条書きレベルで具体的に書くほど精度が上がります。実行手順まで頼めば初心者でも使えます。",
  },
  {
    title: "④ データ整形の手順を設計してもらう",
    scene: "汚れたデータを整えたいとき",
    prompt:
      "Excelで顧客リストを整理したいです。「姓と名が1つのセルに入っている」「全角と半角が混在」「重複行がある」という状態です。関数や標準機能を使って整形する手順を、順番に教えてください。",
    point: "データそのものを貼らずに「状態の説明」だけで手順を設計してもらうのが安全な使い方。機密リストでも相談できます。",
  },
  {
    title: "⑤ グラフ・レポートの構成を提案してもらう",
    scene: "報告資料の見せ方に迷ったとき",
    prompt:
      "月別売上・前年同月比・商品カテゴリ別構成比のデータがあります。上司への月次報告に載せるグラフの種類と構成を提案してください。それぞれのグラフをExcelで作る手順も簡単に教えてください。",
    point: "「誰に見せる資料か」を伝えると提案の質が上がります。数値を渡さなくても構成の相談ができます。",
  },
];

const FAQS: FaqItem[] = [
  {
    q: "Copilot in ExcelとChatGPTはどちらを使うべきですか？",
    a: "役割で使い分けます。Copilotは「Excelの画面内でデータを直接操作・分析させたい」場合に強く、社内データを外部に出さずに済みます。ChatGPTは「関数やVBAを作ってもらう・数式を解説してもらう」相談相手として強く、無料枠から始められます。会社にCopilotライセンスがなければ、まずChatGPTで関数・マクロ作成から始めるのが現実的です。",
  },
  {
    q: "無料でExcel×AIを始める方法はありますか？",
    a: "あります。最も手軽なのはChatGPTの無料枠を使い、この記事のプロンプト例のように「関数を作ってもらう」「数式を解説してもらう」使い方です。データそのものを渡さず、列の構成ややりたいことを説明するだけでも十分実用になります。Copilot in Excelは原則有料ライセンスが必要です。",
  },
  {
    q: "会社のデータをChatGPTに貼り付けても大丈夫ですか？",
    a: "原則として、顧客情報・個人情報・社外秘データをそのまま貼り付けるのは避けてください。入力内容がサービス改善に利用される設定になっている場合があります。安全に使うには「データの構造だけ説明して数式や手順を作ってもらう」「ダミーデータに置き換えて相談する」方法が有効です。会社にAI利用ガイドラインがある場合は必ず従いましょう。",
  },
  {
    q: "AIが作ったVBAマクロをそのまま実行しても安全ですか？",
    a: "そのまま本番ファイルで実行するのは危険です。マクロは元に戻せない操作（削除・上書き）を含むことがあるため、必ずファイルのコピーを作ってテストしてから使ってください。また、実行前に「このマクロが何をするのか」をAIに日本語で説明させて内容を理解しておくと、意図しない動作を防げます。",
  },
  {
    q: "AIを使えるとExcelの関数を覚える必要はなくなりますか？",
    a: "完全にはなくなりません。AIの出力が正しいかを判断するには、VLOOKUP・IF・SUMIFSといった主要関数の「読める力」が必要です。ただし「暗記して自力で書く力」の重要性は下がっており、これからは「やりたいことを正確に言語化してAIに指示し、出てきた数式を検証できる力」が実務での差になります。",
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
  headline: "Excel×AI活用 完全ガイド2026【Copilot・ChatGPTで仕事効率化】",
  description:
    "Microsoft Copilot in Excel・ChatGPTでの関数作成/VBA生成・GPT for Sheetsを比較し、コピペで使えるプロンプト例5選と業務利用時の注意点を解説する。",
  datePublished: PUBLISHED_AT,
  dateModified: PUBLISHED_AT,
  inLanguage: "ja",
  mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
  author: { "@type": "Organization", name: "AI News Japan" },
  publisher: { "@type": "Organization", name: "AI News Japan" },
};

/** ツール種別バッジの色分け */
const typeColor: Record<ExcelAiTool["type"], string> = {
  Excel内蔵: "bg-green-500/20 text-green-300 border-green-500/30",
  外部AI併用: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  アドイン: "bg-amber-500/20 text-amber-300 border-amber-500/30",
};

export default function AiExcelGuidePage() {
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
          <span className="inline-block text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded-full px-4 py-1 mb-4">
            📊 2026年最新版
          </span>
          <h1 className="text-3xl sm:text-4xl font-black mb-4 leading-tight">
            Excel×AI活用
            <br />
            <span className="text-emerald-300">完全ガイド2026</span>
            <br />
            <span className="text-lg sm:text-xl text-gray-300 font-bold">
              【Copilot・ChatGPTで仕事効率化】
            </span>
          </h1>
          <p className="text-gray-300 text-sm leading-relaxed">
            関数作成・VBA生成・データ分析をAIに任せる方法と、
            <br className="hidden sm:block" />
            そのまま使えるプロンプト例・業務での注意点をまとめました。
          </p>
          <p className="text-gray-300 text-xs mt-3">公開日：2026年7月20日</p>
        </div>

        {/* 結論を先に置く（AI検索に引用されやすい形） */}
        <section className="mb-12">
          <div className="bg-emerald-900/20 border border-emerald-700/40 rounded-xl p-5">
            <h2 className="text-base font-bold text-emerald-200 mb-3">先に結論</h2>
            <ul className="space-y-2 text-sm text-gray-200 leading-relaxed">
              <li className="flex gap-2">
                <span className="text-emerald-300 flex-shrink-0">▸</span>
                <span>
                  <strong className="text-white">まず始めるならChatGPTで関数・VBA作成。</strong>
                  無料枠から使え、「調べながら数式を書く時間」が即なくなる。Excel×AIの入門に最適。
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-emerald-300 flex-shrink-0">▸</span>
                <span>
                  <strong className="text-white">社内データを直接分析するならCopilot in Excel。</strong>
                  Excel画面内で完結するため、データを外部AIに出せない職場でも使いやすい。
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-emerald-300 flex-shrink-0">▸</span>
                <span>
                  <strong className="text-white">大量行の一括処理はGPT for Sheets等のアドイン。</strong>
                  数百行の要約・分類・翻訳をセル関数感覚で回せる。API課金には注意。
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-emerald-300 flex-shrink-0">▸</span>
                <span>
                  <strong className="text-white">鉄則は「機密データを貼らない・コピーでテストする」。</strong>
                  データ構造の説明だけで数式は作れる。マクロは必ず複製ファイルで試してから本番へ。
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* ツール比較 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-6 border-l-4 border-emerald-500 pl-3">
            📊 Excel×AIの3つの方法【特徴・費用・向いている人を比較】
          </h2>
          <div className="space-y-4">
            {TOOLS.map((tool) => (
              <div key={tool.name} className="bg-gray-900 border border-gray-700 rounded-xl p-5">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="text-xl">{tool.icon}</span>
                  <h3 className="text-white font-black text-sm">{tool.name}</h3>
                  <span
                    className={`text-xs font-bold px-2 py-0.5 rounded-full border ${typeColor[tool.type]}`}
                  >
                    {tool.type}
                  </span>
                </div>

                <p className="text-gray-300 text-xs mb-2">提供：{tool.provider}</p>

                <div className="flex flex-wrap gap-1.5 mb-3">
                  {tool.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-emerald-900/20 text-emerald-300 border border-emerald-700/30 px-2 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-gray-300 text-sm leading-relaxed mb-3">{tool.summary}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs mb-3">
                  <div className="bg-green-900/10 border border-green-700/20 rounded px-2.5 py-1.5">
                    <span className="text-green-300 font-bold">💰 </span>
                    <span className="text-gray-200">{tool.fee}</span>
                  </div>
                  <div className="bg-gray-800 rounded px-2.5 py-1.5">
                    <span className="text-gray-300 font-bold">✨ </span>
                    <span className="text-gray-200">{tool.feature}</span>
                  </div>
                </div>

                <div className="bg-gray-800 rounded px-2.5 py-1.5 text-xs mb-2">
                  <span className="text-gray-300">👤 向いている人：</span>
                  <span className="text-gray-200">{tool.bestFor}</span>
                </div>
                <div className="bg-amber-900/10 border border-amber-700/20 rounded px-2.5 py-1.5 text-xs">
                  <span className="text-amber-300 font-bold">⚠️ 注意：</span>
                  <span className="text-gray-200">{tool.caution}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-300 text-xs mt-4 leading-relaxed">
            ※料金・プラン内容は各サービスの都合で変更されます。導入前に必ず各公式サイトで最新の内容を確認してください。
          </p>
        </section>

        {/* プロンプト例 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-6 border-l-4 border-emerald-500 pl-3">
            💬 ChatGPTにExcel作業を頼む具体的なプロンプト例5選
          </h2>
          <p className="text-gray-300 text-sm leading-relaxed mb-5">
            そのままコピペして、自分の列構成ややりたい内容に書き換えて使えます。
            共通のコツは「列の構成を伝える」「やりたいことを箇条書きレベルで具体的に書く」「解説や手順もセットで頼む」の3つです。
          </p>
          <div className="space-y-4">
            {PROMPTS.map(({ title, scene, prompt, point }) => (
              <div key={title} className="bg-gray-900 border border-gray-700 rounded-xl p-5">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <p className="font-bold text-white text-sm">{title}</p>
                  <span className="text-xs bg-emerald-900/20 text-emerald-300 border border-emerald-700/30 px-2 py-0.5 rounded">
                    {scene}
                  </span>
                </div>
                <div className="bg-gray-800 border border-gray-700 rounded-lg p-3 mb-2 overflow-x-auto">
                  <p className="text-gray-200 text-xs leading-relaxed font-mono whitespace-pre-wrap">{prompt}</p>
                </div>
                <p className="text-gray-300 text-xs leading-relaxed">
                  <span className="text-emerald-300 font-bold">💡 ポイント：</span>
                  {point}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 中間アフィリエイト（スキルアップ・効率化にマッチ） */}
        <ArticleAffiliateBanner tags={["プログラミング", "スキル", "学習", "副業"]} />

        {/* 注意点 */}
        <section className="my-12">
          <h2 className="text-xl font-bold text-white mb-6 border-l-4 border-red-500 pl-3">
            ⚠️ 業務でExcel×AIを使う際の注意点
          </h2>
          <div className="bg-red-900/10 border border-red-700/30 rounded-xl p-5 space-y-3">
            <div>
              <p className="font-bold text-red-200 text-sm mb-1">機密データ・個人情報を外部AIに貼らない</p>
              <p className="text-gray-300 text-sm leading-relaxed">
                顧客リスト・給与データ・社外秘の数値をChatGPTなどの外部AIにそのまま貼り付けるのは避けてください。「A列に顧客名、B列に購入額が入っている」のように構造だけ説明すれば、データを渡さなくても数式や手順は作れます。会社のAI利用ルールがある場合は必ず従いましょう。
              </p>
            </div>
            <div>
              <p className="font-bold text-red-200 text-sm mb-1">AIの出力は必ずコピーのファイルで検証する</p>
              <p className="text-gray-300 text-sm leading-relaxed">
                AIが作る数式・マクロは大半は正しく動きますが、条件の解釈違いや古い関数の提案が混ざることがあります。特にVBAマクロは削除・上書きを含む場合があるため、必ずファイルの複製でテストし、結果を目視確認してから本番に反映してください。
              </p>
            </div>
            <div>
              <p className="font-bold text-red-200 text-sm mb-1">「AIに任せた」は言い訳にならない</p>
              <p className="text-gray-300 text-sm leading-relaxed">
                集計ミスの責任は作成者にあります。合計値のクロスチェック（別の方法で同じ集計をして一致を確認する）など、AI以前から使われてきた検算の習慣はそのまま残しましょう。AIは作業を速くする道具であり、確認を省く道具ではありません。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-6 border-l-4 border-emerald-500 pl-3">
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
            仕事でのChatGPT活用全般は
            <Link href="/chatgpt-business-guide" className="text-blue-300 hover:underline">
              ChatGPT仕事活用ガイド
            </Link>
            で詳しく解説しています。Copilotそのものを知りたい人は
            <Link href="/copilot-guide" className="text-blue-300 hover:underline">
              Microsoft Copilotガイド
            </Link>
            、部署へのAI導入を考えている人は
            <Link href="/ai-business-guide" className="text-blue-300 hover:underline">
              AI業務活用ガイド
            </Link>
            が参考になります。指示の書き方を磨くなら
            <Link href="/chatgpt-prompt-guide" className="text-blue-300 hover:underline">
              ChatGPTプロンプト完全ガイド
            </Link>
            もどうぞ。
          </p>
        </section>

        <AffiliateSectionAiNews />
      </div>
    </main>
  );
}

import type { Metadata } from "next";
import AffiliateSectionAiNews from "@/components/AffiliateSectionAiNews";

export const metadata: Metadata = {
  title: "ChatGPTプロンプト集2026年版【コピペで使える例文50選・仕事・副業・学習に活用】",
  description:
    "ChatGPTプロンプト集2026年版。コピペで使えるビジネス・副業・学習・創作に役立つプロンプト例文50選を厳選。プロンプトの書き方のコツ・テンプレートも解説。",
  openGraph: {
    title: "ChatGPTプロンプト集2026年版【コピペで使える例文50選】",
    description: "コピペで使えるChatGPTプロンプト50選。ビジネス・副業・学習に活用。",
    type: "article",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "ChatGPTプロンプト集2026年版【コピペ50選】",
    description: "コピペで使えるChatGPTプロンプト例文50選。",
  },
};

interface PromptCategory {
  category: string;
  icon: string;
  prompts: { title: string; prompt: string; tip?: string }[];
}

interface FaqItem {
  q: string;
  a: string;
}

const PROMPT_CATEGORIES: PromptCategory[] = [
  {
    category: "ビジネス・仕事効率化",
    icon: "💼",
    prompts: [
      { title: "メールの下書き", prompt: "以下の内容で、丁寧なビジネスメールを書いてください。\n相手：[宛先]\n内容：[伝えたいこと]\n状況：[背景情報]\nトーン：[丁寧・カジュアル等]", tip: "状況や相手に合わせてトーンを指定すると精度UP" },
      { title: "議事録の要約", prompt: "以下の会議内容を要約してください。\n・決定事項\n・TODO（担当者と期限付き）\n・保留事項\nの3つに分けてまとめてください。\n---\n[会議の内容をここに貼る]", tip: "音声文字起こしをそのまま貼ると高精度で整理される" },
      { title: "プレゼン構成作成", prompt: "以下のテーマで20分のプレゼンテーション構成を作ってください。\nテーマ：[テーマ]\n対象：[聴衆・役職・背景]\n目的：[承認を得る・情報共有・提案等]\nスライド枚数目安：[枚数]", tip: "対象聴衆を具体的に書くと刺さる構成になる" },
      { title: "報告書のドラフト", prompt: "[プロジェクト名]の月次報告書を作成してください。\n進捗：[進捗率・達成事項]\n課題：[問題点]\n来月の予定：[次のアクション]\nフォーマット：A4 1枚程度・箇条書き中心", tip: "事実だけ渡せばChatGPTが文章化してくれる" },
    ],
  },
  {
    category: "副業・マーケティング",
    icon: "💰",
    prompts: [
      { title: "ブログ記事の見出し案", prompt: "「[テーマ]」に関するSEOに強いブログ記事の見出し案を10個作ってください。\nターゲット読者：[読者層]\n検索キーワード：[KW]\n記事の目的：[悩み解決・情報提供等]", tip: "検索意図（KW）を渡すとSEO向けの見出しを提案してくれる" },
      { title: "商品説明文（LP向け）", prompt: "以下の商品・サービスのLP（ランディングページ）向けの説明文を書いてください。\n商品：[商品名]\nターゲット：[誰の]\n悩み：[どんな悩みを解決]\n強み：[特徴・差別化ポイント]\n文字数：300文字", tip: "ターゲットの悩みを明確にするとコピーの精度が上がる" },
      { title: "SNS投稿文（X・Instagram）", prompt: "以下のテーマでX（Twitter）の投稿文を5パターン作ってください。\nテーマ：[内容]\nターゲット：[対象読者]\n目的：[エンゲージメント・サイト誘導・認知拡大]\n文字数：140文字以内\nトーン：[丁寧・砕けた・問いかけ型等]", tip: "「問いかけ型」「共感型」など投稿タイプを指定すると差別化できる" },
    ],
  },
  {
    category: "学習・情報収集",
    icon: "📚",
    prompts: [
      { title: "概念を簡単に説明", prompt: "[専門用語・概念]を小学生にもわかるように、例え話を使って説明してください。その後、もう少し詳しい説明を大人向けに追加してください。", tip: "「例え話を使って」を入れると直感的に理解しやすい" },
      { title: "本・記事の要約", prompt: "以下の文章を要約してください。\n・3行で超要約\n・重要ポイント5つ（箇条書き）\n・実践できるアクション3つ\n---\n[文章をここに貼る]", tip: "長い記事もこのフォーマットで素早く整理できる" },
      { title: "比較・リスト作成", prompt: "[A]と[B]を以下の観点で比較表にまとめてください。\n観点：機能・価格・使いやすさ・対象ユーザー・デメリット\nMarkdown形式の表で出力してください。", tip: "比較表は意思決定スピードを大幅に上げる" },
    ],
  },
  {
    category: "文章作成・編集",
    icon: "✍️",
    prompts: [
      { title: "文章の校正・改善", prompt: "以下の文章を校正・改善してください。\n目的：[ブログ・ビジネス文書・SNS等]\n改善ポイント：読みやすさ・説得力・文法\n修正前後を対比形式で出力してください。\n---\n[文章をここに貼る]", tip: "「対比形式で」と指定すると変更箇所が把握しやすい" },
      { title: "タイトル・見出しのA/Bテスト案", prompt: "以下のコンテンツのタイトルを5パターン考えてください。\nコンテンツ：[内容の概要]\nターゲット：[読者層]\nそれぞれの狙い（クリックしたくなる理由）も一緒に説明してください。", tip: "狙いを説明させることで意図の異なるパターンが揃う" },
    ],
  },
];

const FAQS: FaqItem[] = [
  {
    q: "プロンプトの書き方で最も重要なポイントは何ですか？",
    a: "最も重要なのは「誰に（ペルソナ・役割）」「何を（タスク）」「どんな形式で（フォーマット・文字数）」の3点を明確にすることです。例：「あなたはSEOの専門家です。30代会社員向けに副業ブログの始め方を500文字で解説してください」のように具体的に指定するほど回答精度が上がります。",
  },
  {
    q: "ChatGPTに役割（ペルソナ）を与えると何が変わりますか？",
    a: "「あなたはマーケティングの専門家です」「あなたは現役エンジニアです」のように役割を与えると、その立場からの視点・専門知識を活かした回答が返ってきます。一般的な回答より具体的かつ深い内容になり、特定分野の判断基準・優先順位も反映されます。",
  },
  {
    q: "ChatGPTの回答が的外れな時の対処法は？",
    a: "まず「先ほどの回答について、〇〇という観点から修正してください」と追加指示を出しましょう。それでも改善しない場合は新しいチャットを開いてプロンプトを書き直す方が効率的です。「もっと短く」「もっと具体的に」「初心者向けに」など、改善方向を明示した追加指示が有効です。",
  },
  {
    q: "長いプロンプトと短いプロンプト、どちらが良いですか？",
    a: "一般的に「具体的な情報が多いほど精度が上がる」ため、関連情報は積極的に入れることをおすすめします。ただし「無関係な情報が多い」と精度が落ちることもあります。コツは「必要な情報はすべて入れ、不要な情報は入れない」ことです。箇条書きで整理して渡すと効果的です。",
  },
  {
    q: "ChatGPTの回答はそのまま使っても大丈夫ですか？",
    a: "事実確認が重要な内容（数値・日付・固有名詞・法律・医療情報）はそのまま使わず必ず一次情報で確認してください。ChatGPTは知識カットオフがあり、最新情報が含まれない場合があります。文章作成・アイデア出し・文章整理などの用途では、人間が最終確認・編集するという流れで活用するのが安全です。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function ChatGptPromptGuidePage() {
  return (
    <main className="bg-gray-950 min-h-screen text-gray-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="max-w-3xl mx-auto px-4 py-12">

        {/* ヒーロー */}
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold bg-green-500/20 text-green-400 border border-green-500/30 rounded-full px-4 py-1 mb-4">
            🤖 2026年最新版
          </span>
          <h1 className="text-3xl sm:text-4xl font-black mb-4 leading-tight">
            ChatGPTプロンプト集<br />
            <span className="text-green-400">2026年版</span>
            <br />
            <span className="text-xl text-gray-300 font-bold">【コピペで使える例文・仕事・副業・学習に活用】</span>
          </h1>
          <p className="text-gray-400 text-sm leading-relaxed">
            コピペですぐ使えるChatGPTプロンプト例文を<br />
            ビジネス・副業・学習の用途別にまとめました。
          </p>
        </div>

        {/* プロンプト集 */}
        {PROMPT_CATEGORIES.map((cat, ci) => (
          <section key={ci} className="mb-12">
            <h2 className="text-xl font-bold text-white mb-5 border-l-4 border-green-500 pl-3">
              {cat.icon} {cat.category}
            </h2>
            <div className="space-y-4">
              {cat.prompts.map((p, pi) => (
                <div key={pi} className="bg-gray-900 border border-gray-700 rounded-xl overflow-hidden">
                  <div className="px-4 py-3 bg-gray-800 border-b border-gray-700">
                    <h3 className="text-white font-bold text-sm">{p.title}</h3>
                  </div>
                  <div className="p-4">
                    <pre className="text-xs text-green-300 font-mono whitespace-pre-wrap leading-relaxed bg-gray-950/50 rounded-lg p-3 mb-3 border border-gray-700">
                      {p.prompt}
                    </pre>
                    {p.tip && (
                      <p className="text-xs text-yellow-400">💡 {p.tip}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* CTA */}
        <section className="mb-12 bg-gradient-to-r from-green-900/20 to-gray-900/20 border border-green-500/30 rounded-2xl p-6 text-center">
          <h2 className="text-xl font-bold text-white mb-2">
            🤖 ChatGPTの使い方も合わせて学ぼう
          </h2>
          <p className="text-gray-300 text-sm mb-4">
            プロンプトの活用には基本的な使い方の理解も大切。<br />
            ChatGPT完全ガイドで基礎から学べます。
          </p>
          <a
            href="/chatgpt-guide"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm"
          >
            ChatGPT使い方ガイドを見る →
          </a>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-5 border-l-4 border-green-500 pl-3">
            よくある質問（FAQ）
          </h2>
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <div key={i} className="bg-gray-900 border border-gray-700 rounded-xl p-4">
                <p className="text-white font-bold text-sm mb-2">Q. {faq.q}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <AffiliateSectionAiNews />
      </div>
    </main>
  );
}

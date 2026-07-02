import type { Metadata } from "next";
import AffiliateSectionAiNews from "@/components/AffiliateSectionAiNews";

export const metadata: Metadata = {
  title: "AI文章生成完全ガイド2026年版【ChatGPT・Claude・Geminiで記事を自動作成する方法】",
  description:
    "AI文章生成（AIライティング）の方法を2026年版で完全解説。ChatGPT・Claude・Geminiを使ったブログ記事・コピーライティング・メール作成の手順をステップバイステップで紹介。",
  alternates: {
    canonical: "https://ai-news-site-wheat.vercel.app/ai-writing-guide",
  },
  openGraph: {
    title: "AI文章生成完全ガイド2026年版【自動記事作成の方法】",
    description: "ChatGPT・Claude・GeminiでブログSEO記事・コピー・メールを自動生成する方法を完全解説。",
    type: "article",
    locale: "ja_JP",
    url: "https://ai-news-site-wheat.vercel.app/ai-writing-guide",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI文章生成完全ガイド2026年版",
    description: "ChatGPT・Claude・GeminiでAI文章生成。自動記事作成の方法を解説。",
  },
};

interface UseCase {
  title: string;
  icon: string;
  description: string;
  prompt: string;
  tips: string[];
}

interface FaqItem {
  q: string;
  a: string;
}

const USE_CASES: UseCase[] = [
  {
    title: "ブログ記事・SEO記事の作成",
    icon: "📝",
    description: "AIを使ったブログ記事作成。SEO対策のキーワードを含めながら人間が読みやすい記事を高速作成できる。",
    prompt: `「[キーワード]について初心者向けに2000文字の解説記事を書いてください。見出しはH2・H3で階層化し、箇条書きを適度に使ってください。最後に「まとめ」を入れてください」`,
    tips: [
      "生成後は必ず人間が読んで自然さをチェック・修正する",
      "独自の体験談・データ・画像を加えてオリジナリティを出す",
      "Google のHelpful Content Guidelineに注意（AIのみの薄いコンテンツはNG）",
    ],
  },
  {
    title: "コピーライティング・広告文作成",
    icon: "📣",
    description: "商品説明・LP（ランディングページ）・広告コピー・SNS投稿文など、売れる文章をAIで高速作成。",
    prompt: `「[商品/サービス名]の魅力を伝えるキャッチコピーを10個作ってください。ターゲット: [ターゲット層]。強調したいポイント: [ベネフィット]」`,
    tips: [
      "複数のバリエーションを出してもらいA/Bテストに活用",
      "PAS法（Problem→Agitation→Solution）などフレームワークを指示すると精度UP",
      "競合との差別化ポイントを明確に伝えるほど良いコピーが生成される",
    ],
  },
  {
    title: "ビジネスメール・文書作成",
    icon: "📧",
    description: "取引先への連絡・お詫びメール・提案書・議事録など、ビジネス文書の作成時間を大幅削減。",
    prompt: `「[状況]について[相手]に送る[丁寧度]のビジネスメールを書いてください。内容: [伝えたいこと]。文体: です・ます調。長さ: 200〜300文字」`,
    tips: [
      "送信前に誤った情報・ニュアンスがないか必ず確認",
      "AIが生成した文章はそのまま使わず、自分の言葉で少し変える",
      "機密情報・個人情報はプロンプトに含めない",
    ],
  },
  {
    title: "SNS投稿・Twitter（X）ツイート",
    icon: "📱",
    description: "X・Instagram・Facebook・LinkedIn向けの投稿文をAIで量産。一貫したトーンを保ちながら継続投稿が可能。",
    prompt: `「[テーマ]について[ターゲット層]が共感するXの投稿を5つ作ってください。1投稿140文字以内。絵文字あり。教育系・問いかけ形式にしてください」`,
    tips: [
      "自分のキャラクター・口調をプロンプトで具体的に指示する",
      "生成した投稿は少し手を加えて「自分らしさ」を出す",
      "スケジューリングツール（Typefullyなど）と組み合わせて自動化",
    ],
  },
  {
    title: "プレゼン資料・企画書の構成作成",
    icon: "📊",
    description: "パワポのスライド構成・企画書のアウトライン・レポートの骨格をAIで瞬時に作成。",
    prompt: `「[テーマ]について[対象者]向けのプレゼン構成を10スライドで作ってください。各スライドのタイトルと要点3つを箇条書きで教えてください」`,
    tips: [
      "AIが作った構成に自分のデータ・事例を肉付けする",
      "Canva・GoogleスライドのAI機能と組み合わせると効率的",
      "「想定される反論への対応策も含めて」と指示すると完成度UP",
    ],
  },
];

const FAQS: FaqItem[] = [
  {
    q: "AIで生成した文章はSEOに使えますか？",
    a: "使えますが注意が必要です。Googleは「AIで生成したコンテンツだから」という理由でペナルティを与えるのではなく、「役に立つか否か」で評価します。AIで下書きを作り、人間が体験談・データ・独自の視点を加えてリライトした記事はSEOでも高評価を得られます。AIのみで生成した薄いコンテンツは評価されにくいです。",
  },
  {
    q: "ChatGPTとClaudeはどちらが文章生成に向いていますか？",
    a: "用途によります。長文・構成の整った記事はClaude（最大200,000トークン）、アイデア量産・バリエーション生成・短文コピーはChatGPTが向いているケースが多いです。どちらも高品質なので、両方試して自分の用途に合った方を使うのが最善です。多くのプロライターは両方を使い分けています。",
  },
  {
    q: "プロンプトエンジニアリングとは何ですか？",
    a: "AIへの指示（プロンプト）を最適化して、より高品質なアウトプットを引き出す技術・スキルです。「役割を与える（あなたは〇〇の専門家です）」「具体的な条件を指定する（〇〇文字・〇〇のトーン）」「出力フォーマットを指定する（箇条書き・表形式）」などのテクニックがあります。プロンプト次第でAIのアウトプット品質は2〜5倍変わります。",
  },
  {
    q: "AI文章生成で副業・仕事はできますか？",
    a: "はい、クラウドワークス・ランサーズなどでAIを活用したライティング案件は多数あります。「AIで下書き→人間が品質チェック・修正」のフローで効率化し、一般的なライターより短時間で納品できる点が強みになります。ただし「AIのみで生成して修正なし」の納品は品質が低くなりやすく、評価低下や返金リクエストの原因になるため必ず人間が確認してください。",
  },
  {
    q: "AI文章生成の著作権はどうなりますか？",
    a: "2026年現在、日本ではAIが生成したコンテンツの著作権について法整備が進行中です。一般的な考え方として「AIのみが生成した文章は著作権が発生しにくい」とされていますが、人間が指示・修正・選択を加えた場合は人間の創作性が認められる可能性があります。商用利用する場合は各AIサービスの利用規約を確認してください。",
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

export default function AiWritingGuidePage() {
  return (
    <main className="bg-gray-950 min-h-screen text-gray-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="max-w-3xl mx-auto px-4 py-12">

        {/* ヒーロー */}
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold bg-blue-500/20 text-blue-400 border border-blue-500/30 rounded-full px-4 py-1 mb-4">
            ✍️ 2026年最新版
          </span>
          <h1 className="text-3xl sm:text-4xl font-black mb-4 leading-tight">
            AI文章生成<br />
            <span className="text-blue-400">完全ガイド2026年版</span>
            <br />
            <span className="text-xl text-gray-300 font-bold">【ChatGPT・Claude・Geminiで記事を自動作成】</span>
          </h1>
          <p className="text-gray-400 text-sm leading-relaxed">
            ChatGPT・Claude・Geminiを使ったAI文章生成の方法を<br />
            ブログ記事・コピー・メール・SNS投稿などユースケース別に完全解説。
          </p>
        </div>

        {/* ユースケース */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-6 border-l-4 border-blue-500 pl-3">
            💡 AI文章生成の主要ユースケース
          </h2>
          <div className="space-y-5">
            {USE_CASES.map((u, i) => (
              <div key={i} className="bg-gray-900 border border-gray-700 rounded-xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{u.icon}</span>
                  <h3 className="text-white font-black text-base">{u.title}</h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-3">{u.description}</p>
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3 mb-3">
                  <p className="text-blue-400 text-xs font-bold mb-1">💬 プロンプト例</p>
                  <p className="text-gray-300 text-xs leading-relaxed font-mono">{u.prompt}</p>
                </div>
                <ul className="space-y-1">
                  {u.tips.map((tip, j) => (
                    <li key={j} className="text-gray-400 text-xs flex gap-2">
                      <span className="text-blue-400 flex-shrink-0">✓</span>{tip}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mb-12 bg-gradient-to-r from-blue-900/20 to-cyan-900/20 border border-blue-500/30 rounded-2xl p-6 text-center">
          <h2 className="text-xl font-bold text-white mb-2">
            🤖 ChatGPTの使い方をもっと詳しく
          </h2>
          <p className="text-gray-300 text-sm mb-4">
            文章生成だけじゃない！ChatGPT全機能の完全ガイドはこちら。
          </p>
          <a
            href="/chatgpt-guide"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm"
          >
            ChatGPT完全ガイドを読む →
          </a>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-6 border-l-4 border-blue-500 pl-3">
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

        {/* アフィリエイト */}
        <AffiliateSectionAiNews />
      </div>
    </main>
  );
}

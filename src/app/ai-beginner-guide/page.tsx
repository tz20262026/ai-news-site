import type { Metadata } from "next";
import Link from "next/link";
import AffiliateSectionAiNews from "@/components/AffiliateSectionAiNews";

export const metadata: Metadata = {
  title: "AI初心者完全ガイド2026【ChatGPT・Gemini・Claude使い方】",
  description:
    "AI初心者向け完全ガイド。ChatGPT・Gemini・Claudeを10ステップで使いこなす方法を丁寧に解説。登録方法から実践活用まで、ゼロから始めるAI入門の決定版。",
  keywords: [
    "AI 初心者",
    "ChatGPT 使い方 初心者",
    "Gemini 使い方",
    "Claude 使い方",
    "生成AI 始め方",
    "AI ガイド 2026",
    "AI入門",
  ],
  openGraph: {
    title: "AI初心者完全ガイド2026【ChatGPT・Gemini・Claude使い方】",
    description:
      "ChatGPT・Gemini・Claudeを10ステップで使いこなす方法を丁寧に解説。ゼロから始めるAI入門の決定版。",
    type: "article",
    locale: "ja_JP",
    url: "https://ai-news-site-wheat.vercel.app/ai-beginner-guide",
    images: [
      {
        url: "https://ai-news-site-wheat.vercel.app/opengraph-image",
        width: 1200,
        height: 630,
        alt: "AI初心者完全ガイド2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI初心者完全ガイド2026【ChatGPT・Gemini・Claude使い方】",
    description:
      "ChatGPT・Gemini・Claudeを10ステップで使いこなす方法を丁寧に解説。",
    images: [
      "https://ai-news-site-wheat.vercel.app/opengraph-image",
    ],
  },
  alternates: {
    canonical: "https://ai-news-site-wheat.vercel.app/ai-beginner-guide",
  },
};

const STEPS = [
  {
    step: 1,
    title: "AIとは何かを理解する",
    icon: "🤔",
    color: "bg-blue-700",
    desc: "AI（人工知能）は大量のテキストデータを学習した「会話できるプログラム」です。あなたが質問を書くと、AIが自然な文章で答えてくれます。難しい技術知識は一切不要です。",
    tips: ["AIは命令するのではなく『話しかける』感覚で使う", "日本語でそのまま質問してOK", "間違えてもすぐ訂正できる"],
  },
  {
    step: 2,
    title: "まずChatGPTに登録する",
    icon: "📝",
    color: "bg-emerald-700",
    desc: "世界で最も使われているAI「ChatGPT」から始めましょう。chat.openai.comにアクセスして、Googleアカウントで1分登録するだけ。完全無料で始められます。",
    tips: ["chat.openai.com を開く", "「Sign up」→Googleでログイン", "メール認証なしで即利用可能"],
  },
  {
    step: 3,
    title: "最初の質問をしてみる",
    icon: "💬",
    color: "bg-cyan-700",
    desc: "テキストボックスに「自己紹介して」と入力して送信するだけ。AIが流暢な日本語で返答します。最初はシンプルな質問から慣れていきましょう。",
    tips: ["「自己紹介して」「おはようございます」など気軽に", "送信はEnterキーまたは矢印ボタン", "失敗しても怒られません"],
  },
  {
    step: 4,
    title: "文章作成に使ってみる",
    icon: "✍️",
    color: "bg-violet-700",
    desc: "メールの返信文・感謝状・ブログ記事の下書きなど、文章作成がAIの得意分野です。「〇〇という内容のビジネスメールを書いて」と伝えるだけで完成します。",
    tips: ["「上司への休暇申請メールを書いて」", "「300字で自社のサービスを紹介して」", "気に入らなければ「もっと丁寧に」と追加指示"],
  },
  {
    step: 5,
    title: "情報収集・調べ物に使う",
    icon: "🔍",
    color: "bg-orange-700",
    desc: "わからないことをそのまま質問できます。専門用語を噛み砕いて説明してくれるため、Googleで調べるより圧倒的にわかりやすい答えが返ってきます。",
    tips: ["「〇〇を小学生でもわかるように説明して」", "「〇〇の長所短所を箇条書きで」", "「おすすめの〇〇を5つ教えて」"],
  },
  {
    step: 6,
    title: "Gemini（Google）を試す",
    icon: "💎",
    color: "bg-indigo-700",
    desc: "Googleアカウントがあれば即使えるAI「Gemini」を試しましょう。GmailやGoogleドキュメントと連携していて、Google検索の最新情報を参照できるのが強みです。",
    tips: ["gemini.google.com からアクセス", "Googleアカウントで自動ログイン", "「最新の〇〇について教えて」が得意"],
  },
  {
    step: 7,
    title: "Claudeで長文処理を体験する",
    icon: "🧠",
    color: "bg-amber-700",
    desc: "長い文章の要約や分析が得意なAI「Claude」を試してみましょう。PDFや長い記事を貼り付けて「要約して」と言うだけで、重要ポイントをまとめてくれます。",
    tips: ["claude.ai からアクセス", "長い文章をそのまま貼り付けてOK", "「この文章の要点を3つにまとめて」"],
  },
  {
    step: 8,
    title: "プロンプトのコツを覚える",
    icon: "⚡",
    color: "bg-rose-700",
    desc: "AIへの指示文（プロンプト）の書き方次第で、出力品質が大きく変わります。「誰に向けて」「どんな形式で」「どのくらいの長さで」を明示するだけで劇的に改善します。",
    tips: ["「200字で・箇条書きで・初心者向けに」", "「あなたはプロのコピーライターです」と役割設定", "「もっと具体的に」「短くして」で改善できる"],
  },
  {
    step: 9,
    title: "毎日1つ業務に取り入れる",
    icon: "📅",
    color: "bg-teal-700",
    desc: "AIは毎日使うことで習熟します。今日はメール作成、明日は調べ物、明後日は企画書作成、というように少しずつ取り入れると、1ヶ月後には劇的に使い方が上達します。",
    tips: ["1日1タスクをAIに任せる", "うまくいったプロンプトをメモしておく", "失敗してもそれが学習になる"],
  },
  {
    step: 10,
    title: "AIを仕事・副業に活用する",
    icon: "💰",
    color: "bg-green-700",
    desc: "AIを使いこなせると、業務効率が2〜5倍に向上します。さらに進んでAIを使ったライティング副業・SNS運用代行・プログラミング補助など収益化の道も広がります。",
    tips: ["ライティング副業（クラウドワークス等）", "SNS運用代行", "AI×専門知識でフリーランス案件"],
  },
];

const AI_TOOLS = [
  {
    name: "ChatGPT",
    company: "OpenAI",
    icon: "🤖",
    free: "無料あり",
    color: "border-emerald-500",
    badge: "bg-emerald-700 text-emerald-100",
    bestFor: "万能・文章作成",
    url: "https://chat.openai.com",
    desc: "初心者に最もおすすめ。何でもこなせる万能AIで日本語も自然。",
  },
  {
    name: "Gemini",
    company: "Google",
    icon: "💎",
    free: "無料あり",
    color: "border-indigo-500",
    badge: "bg-indigo-700 text-indigo-100",
    bestFor: "Google連携・最新情報",
    url: "https://gemini.google.com",
    desc: "Googleサービスと連携。最新情報の検索や画像理解が得意。",
  },
  {
    name: "Claude",
    company: "Anthropic",
    icon: "🧠",
    free: "無料あり",
    color: "border-amber-500",
    badge: "bg-amber-700 text-amber-100",
    bestFor: "長文処理・文章品質",
    url: "https://claude.ai",
    desc: "長い文章の要約・分析が最も優れたAI。文章品質が高い。",
  },
  {
    name: "Perplexity",
    company: "Perplexity AI",
    icon: "🔍",
    free: "基本無料",
    color: "border-cyan-500",
    badge: "bg-cyan-700 text-cyan-100",
    bestFor: "リサーチ・情報収集",
    url: "https://perplexity.ai",
    desc: "検索エンジン×AI。ソース付きで最新情報を調査できる。",
  },
];

const FAQ = [
  {
    q: "AIを使うのに費用はかかりますか？",
    a: "ChatGPT・Gemini・Claude・Perplexityはいずれも無料プランがあります。初心者は全て無料で始められます。有料プランは月額1,500〜3,000円程度で、より高性能なモデルや追加機能が使えるようになります。",
  },
  {
    q: "スマートフォンでもAIは使えますか？",
    a: "はい、ChatGPT・Gemini・ClaudeはいずれもiOS・Androidアプリが無料で提供されています。App Store・Google Playで「ChatGPT」と検索してインストールするだけで、すぐに使い始めることができます。",
  },
  {
    q: "AIに何でも聞いていいですか？危険なことはありますか？",
    a: "基本的には何でも質問できますが、個人情報・機密情報・パスワードなどはAIに入力しないことを強く推奨します。入力したデータはサービスのサーバーに送信されるため、情報漏洩のリスクがあります。また、AIの回答には間違いが含まれることもあるため、重要な情報は必ず別途確認してください。",
  },
  {
    q: "AIが答えた内容が間違っていることはありますか？",
    a: "はい、あります。AIは「もっともらしい文章を生成する」仕組みのため、事実と異なる情報を自信満々に答えることがあります（ハルシネーションと呼ばれます）。医療・法律・金融など重要な判断に関わる情報は、必ず専門家や公式情報で確認するようにしてください。",
  },
  {
    q: "ChatGPT・Gemini・Claudeのどれから始めるべきですか？",
    a: "まずChatGPTから始めることを強くおすすめします。利用者が最も多くノウハウが豊富で、質問すれば解決策がすぐ見つかります。慣れてきたらGemini（Google系サービスを使う方）やClaude（長文処理が必要な方）を追加で使ってみてください。",
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

export default function AIBeginnerGuidePage() {
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold border border-blue-400 bg-blue-800 text-blue-100">
            🚀 初心者向け完全ガイド
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white leading-tight">
            AI初心者完全ガイド2026
            <br />
            <span className="text-cyan-400">
              【ChatGPT・Gemini・Claude使い方】
            </span>
          </h1>
          <p className="text-slate-200 text-base max-w-2xl mx-auto leading-relaxed">
            「AIって難しそう…」と感じている方へ。10ステップで誰でもAIを使いこなせるようになる完全ガイドです。登録から実践活用まで、ゼロから丁寧に解説します。
          </p>
          <div className="flex flex-wrap justify-center gap-2 text-xs">
            {["登録方法", "ChatGPT", "Gemini", "Claude", "プロンプト術", "副業活用"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-slate-700 text-white border border-slate-500 font-semibold"
              >
                {tag}
              </span>
            ))}
          </div>
        </section>

        {/* なぜAIを学ぶか */}
        <section className="space-y-6">
          <h2 className="text-2xl font-black text-white text-center">
            なぜ今AIを学ぶべきか？
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                icon: "⏱️",
                title: "作業時間が2〜5倍速くなる",
                desc: "メール作成・資料まとめ・調べ物など、これまで1時間かかっていた作業が15〜20分で終わるようになります。",
              },
              {
                icon: "💡",
                title: "アイデアが無限に湧く",
                desc: "企画・提案・コンテンツのアイデア出しをAIに手伝ってもらうことで、発想力が格段に広がります。",
              },
              {
                icon: "💰",
                title: "収益化・副業の武器になる",
                desc: "AIを活用したライティング副業・SNS運用代行など、新しい収入源を作ることができます。",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-slate-800 border border-slate-600 rounded-2xl p-5 text-center space-y-3"
              >
                <div className="text-3xl">{item.icon}</div>
                <h3 className="font-black text-white text-sm">{item.title}</h3>
                <p className="text-slate-200 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 10ステップ */}
        <section className="space-y-6">
          <h2 className="text-2xl font-black text-white text-center">
            10ステップでAIを使いこなす
          </h2>
          <div className="space-y-4">
            {STEPS.map((step) => (
              <div
                key={step.step}
                className="bg-slate-800 border border-slate-600 rounded-2xl p-5 hover:border-slate-400 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-10 h-10 rounded-full ${step.color} flex items-center justify-center font-black text-white text-sm flex-shrink-0`}
                  >
                    {step.step}
                  </div>
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xl">{step.icon}</span>
                      <h3 className="font-black text-white text-base">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-slate-200 text-sm leading-relaxed">{step.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {step.tips.map((tip) => (
                        <span
                          key={tip}
                          className="text-xs px-2.5 py-1 rounded-full bg-slate-700 text-slate-200 border border-slate-500"
                        >
                          ✅ {tip}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* おすすめツール */}
        <section className="space-y-6">
          <h2 className="text-2xl font-black text-white text-center">
            初心者におすすめのAIツール4選
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {AI_TOOLS.map((tool) => (
              <div
                key={tool.name}
                className={`bg-slate-800 border-2 ${tool.color} rounded-2xl p-5 space-y-3`}
              >
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{tool.icon}</span>
                    <div>
                      <p className="font-black text-white text-base">{tool.name}</p>
                      <p className="text-xs text-slate-400">{tool.company}</p>
                    </div>
                  </div>
                  <span className={`text-xs px-2.5 py-1 rounded-full font-bold ${tool.badge}`}>
                    {tool.free}
                  </span>
                </div>
                <p className="text-slate-200 text-sm leading-relaxed">{tool.desc}</p>
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="text-xs text-cyan-300 font-semibold">
                    🎯 {tool.bestFor}
                  </span>
                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold px-3 py-1.5 rounded-lg bg-slate-700 text-white border border-slate-500 hover:bg-slate-600 transition-all"
                  >
                    無料で試す →
                  </a>
                </div>
              </div>
            ))}
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
          <h2 className="font-black text-white text-lg">次のステップ：詳細ガイドを読む</h2>
          <p className="text-slate-200 text-sm">
            AI入門を終えたら、各ツールの詳細な使い方を学びましょう。
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/chatgpt-guide"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm transition-all hover:opacity-90 bg-emerald-700 text-white border border-emerald-500"
            >
              ChatGPT完全ガイドへ →
            </Link>
            <Link
              href="/ai-business-guide"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm transition-all hover:opacity-90 bg-blue-700 text-white border border-blue-500"
            >
              AI業務活用ガイドへ →
            </Link>
            <Link
              href="/ai-tools-guide"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm transition-all hover:opacity-90 bg-slate-700 text-white border border-slate-500"
            >
              無料AIツール一覧へ →
            </Link>
            <Link
              href="/ai-shikaku-guide"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm transition-all hover:opacity-90 bg-indigo-700 text-white border border-indigo-500"
            >
              生成AI資格ガイドへ →
            </Link>
          </div>
        </section>

        {/* アフィリエイト */}
        <AffiliateSectionAiNews />
      </div>
    </div>
  );
}

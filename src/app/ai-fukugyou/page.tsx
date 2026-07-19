import type { Metadata } from "next";
import Link from "next/link";
import AffiliateSectionAiNews from "@/components/AffiliateSectionAiNews";

export const metadata: Metadata = {
  title: "AIで副業する方法 完全ガイド2026年版【月収10万円・実績あり手段7選】| AI最新情報",
  description: "AIツールを使った副業の始め方・稼ぎ方を完全解説。ChatGPT・Claude・Midjourneyを活用した副業7選と収益化ロードマップ。2026年実績のある方法だけを厳選紹介。",
  keywords: ["AI 副業", "ChatGPT 稼ぎ方", "AI 副業 始め方", "AI ライター 副業", "Midjourney 副業"],
  openGraph: {
    title: "AIで副業する方法 2026年版｜月収10万円の実績ある7つの方法",
    description: "ChatGPT・Claude・Midjourneyを活用した副業方法を完全解説。実績者の収益化ロードマップ付き。",
    type: "article",
    locale: "ja_JP",
    url: "https://ai-news-site-wheat.vercel.app/ai-fukugyou",
    images: [
      {
        url: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&q=80&fit=crop",
        width: 1200,
        height: 630,
        alt: "AIで副業する方法 2026年版",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AIで副業する方法 2026年版｜月収10万円の実績ある7つの方法",
    description: "ChatGPT・Claude・Midjourneyを活用した副業方法を完全解説。実績者の収益化ロードマップ付き。",
    images: ["https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&q=80&fit=crop"],
  },
  alternates: {
    canonical: "https://ai-news-site-wheat.vercel.app/ai-fukugyou",
  },
};

const AI_JOBS = [
  {
    no: 1, name: "AIライティング副業", emoji: "✍️",
    color: "#06b6d4", difficulty: "低", income: "月3〜15万円", time: "週5〜15h",
    tools: ["ChatGPT", "Claude", "Gemini"],
    desc: "AIを使ってブログ記事・商品説明文・SNS投稿を作成する副業。AIが下書きを作り、人間が編集・品質チェックする「AI補助ライター」は需要が高まっている。",
    start: ["A8.net・クラウドワークスに登録", "ChatGPT Pro（月3,000円）を契約", "まず実績5〜10本を格安で受注", "単価を上げながら月10万円を目指す"],
  },
  {
    no: 2, name: "AIイラスト・画像生成", emoji: "🎨",
    color: "#8b5cf6", difficulty: "低〜中", income: "月1〜20万円", time: "週5〜20h",
    tools: ["Midjourney", "Stable Diffusion", "Adobe Firefly"],
    desc: "Midjourneyなど画像生成AIを使ったイラスト・デザイン制作。SNSアイコン・書籍表紙・壁紙・LINEスタンプなどで需要がある。著作権・ガイドラインの理解が必須。",
    start: ["Midjourney（月10ドル〜）を契約", "プロンプトエンジニアリングを習得", "メルカリ・BOOTHで販売開始", "クライアント受注に切り替え"],
  },
  {
    no: 3, name: "AIによる動画編集", emoji: "🎬",
    color: "#ef4444", difficulty: "中", income: "月5〜25万円", time: "週10〜20h",
    tools: ["Runway", "Kling AI", "CapCut AI", "VideoProc"],
    desc: "AI動画生成・自動字幕・ハイライト抽出ツールを使って動画編集の効率を3〜5倍に。YouTuber・企業向け動画の短納期案件を低コストで対応できるようになる。",
    start: ["Runway・CapCutの無料版で練習", "スクールで体系的に動画編集を習得", "クラウドワークスで案件受注", "AI活用を売りにして単価アップ"],
  },
  {
    no: 4, name: "AIブログ・アフィリエイト", emoji: "📝",
    color: "#f59e0b", difficulty: "中〜高", income: "月0〜50万円（6ヶ月以降）",
    time: "週10〜30h", tools: ["ChatGPT", "Claude", "Surfer SEO"],
    desc: "AIでSEO記事を大量に生成してアフィリエイト収益を得る。キーワード選定・構成・執筆・画像生成まで全てAIで完結できる。半年〜1年で収益化する「資産型副業」の代表。",
    start: ["エックスサーバーでブログ開設", "AIで記事量産システムを構築", "A8.netでアフィリエイト登録", "月100記事ペースで量産して収益化"],
  },
  {
    no: 5, name: "AIコンサル・講師", emoji: "🎓",
    color: "#10b981", difficulty: "高", income: "月10〜100万円", time: "週10〜20h",
    tools: ["ChatGPT", "Claude", "Perplexity"],
    desc: "「AIツールの使い方」をビジネスオーナーや個人に教えるコンサル・講師業。AIリテラシーが低い経営者は多く、使い方を教えるだけで高単価報酬になる。",
    start: ["自分でAIツール活用の実績を作る", "ノート（note）で知識を発信", "zoomで個別コンサルを開始", "法人向けに研修を展開"],
  },
  {
    no: 6, name: "AI翻訳・ローカライゼーション", emoji: "🌍",
    color: "#2563eb", difficulty: "中", income: "月3〜20万円", time: "週5〜15h",
    tools: ["DeepL Pro", "ChatGPT", "Claude"],
    desc: "AI翻訳ツールで翻訳量を10倍に。英語〜日本語の翻訳・字幕制作・海外コンテンツのローカライズなど。英語力があれば高単価案件が多数。",
    start: ["DeepL Pro（月1,000円〜）を契約", "クラウドワークスで翻訳案件に応募", "英語力があればプレミアム案件へ", "定期契約クライアントを獲得"],
  },
  {
    no: 7, name: "AIプロンプトエンジニアリング販売", emoji: "💡",
    color: "#7c3aed", difficulty: "中", income: "月1〜10万円", time: "週3〜10h",
    tools: ["ChatGPT", "Midjourney", "Claude"],
    desc: "高品質な出力を得るためのプロンプト（指示文）を販売する副業。海外ではプロンプト1件で数千円の事例も。BOOTH・Gumroadで販売できる。",
    start: ["様々なツールでプロンプトを研究", "特化型プロンプト集を作成", "BOOTHやnoteで有料販売", "定期更新版に切り替え安定収益"],
  },
];

const FAQ = [
  { q: "AIを使った副業は本当に稼げますか？", a: "はい、AIツールを活用した副業は2025年〜2026年にかけて急成長しています。特にAIライティング・画像生成・動画編集は需要が高く、月10〜20万円を達成している事例が増えています。ただしAIが作ったコンテンツの品質管理・編集スキルが重要で、AIまかせでは品質が落ちることに注意が必要です。" },
  { q: "AI副業に必要な初期費用はいくらですか？", a: "最低限の初期費用は月2,000〜5,000円程度です。ChatGPT Pro（月3,000円）またはClaude Pro（月3,000円）があれば多くのAI副業を始められます。Midjourneyは月10ドル（約1,500円）から。ブログを開設する場合はサーバー代（月1,000円〜）が追加で必要です。" },
  { q: "AIを使った副業でどのくらい稼げますか？", a: "AI副業の収益はジャンルによって大きく異なります。AIライティングは月5〜15万円、AIコンサルは月10〜50万円が現実的な目安です。最初の3ヶ月は月1〜3万円程度で、6〜12ヶ月かけて月10万円以上を目指すのが一般的なロードマップです。" },
  { q: "AIライターはAIが書いた文章をそのまま提出してもいいですか？", a: "依頼先によって異なりますが、多くのクライアントはAI生成文章の確認・修正を求めます。AIの出力をそのまま提出するのは品質・正確性の観点からリスクがあります。AIを「下書き作成アシスタント」として使い、自分で必ず確認・編集するのがプロとしての在り方です。" },
  { q: "ChatGPTとClaudeとGeminiどれが副業に向いていますか？", a: "用途によって使い分けるのがベストです。ChatGPTは万能でPlugins対応が充実。Claudeは長文処理・コーディングに強く日本語品質が高い。GeminiはGoogle検索・Docsとの連携が強み。副業では複数ツールを目的別に使い分けることをおすすめします。" },
];

export default function AiFukugyouPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-950 -mx-4 sm:-mx-8 -my-8 px-4 sm:px-8 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: FAQ.map(({ q, a }) => ({
          "@type": "Question", name: q,
          acceptedAnswer: { "@type": "Answer", text: a },
        })),
      })}} />

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-14">
        {/* ヘッダー */}
        <section className="space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold bg-cyan-400/10 text-cyan-400 border border-cyan-400/25">
            🤖 AI副業ガイド 2026年版
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white leading-tight">
            AIで<span className="text-cyan-400">副業</span>する方法<br />
            完全ガイド
            <span className="text-base font-normal ml-2 text-slate-400">2026年最新版</span>
          </h1>
          <p className="text-slate-400 leading-relaxed">
            ChatGPT・Claude・Midjourneyなどを活用した副業方法を完全解説。
            実績のある7つの手段と、ゼロから月10万円を達成するロードマップを紹介します。
          </p>
          <div className="flex flex-wrap gap-2">
            {["ChatGPT活用", "初期費用少", "在宅OK", "2026年実績あり"].map(tag => (
              <span key={tag} className="text-xs px-3 py-1 rounded-full bg-cyan-400/10 text-cyan-300 font-semibold border border-cyan-400/20">{tag}</span>
            ))}
          </div>
        </section>

        {/* 副業7選 */}
        <section className="space-y-5">
          <h2 className="text-xl font-black text-white">AI副業7選｜難易度・月収・必要ツール</h2>
          <div className="space-y-5">
            {AI_JOBS.map(j => (
              <div key={j.no} className="rounded-2xl border border-slate-700 bg-slate-800/60 p-6 space-y-4">
                <div className="flex items-center gap-3 flex-wrap">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center font-black text-black flex-shrink-0 text-sm" style={{ background: j.color }}>
                    {j.no}
                  </div>
                  <span className="text-2xl">{j.emoji}</span>
                  <span className="font-black text-white text-lg">{j.name}</span>
                  <div className="ml-auto flex gap-2 flex-wrap">
                    {[`難易度:${j.difficulty}`, j.income].map(tag => (
                      <span key={tag} className="text-xs px-2 py-0.5 rounded-full font-semibold" style={{ background: `${j.color}18`, color: j.color, border: `1px solid ${j.color}30` }}>{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {j.tools.map(t => (
                    <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-slate-700 text-slate-300 border border-slate-600">🔧 {t}</span>
                  ))}
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">{j.desc}</p>
                <div className="bg-slate-900/60 rounded-xl p-4 space-y-1">
                  <div className="text-xs font-bold text-slate-400 mb-2">📋 始め方ロードマップ：</div>
                  {j.start.map((s, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-400">
                      <span className="font-bold flex-shrink-0 mt-0.5" style={{ color: j.color }}>Step {i+1}</span>
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA - 無料AIツールガイドへ */}
        <section className="rounded-2xl bg-gradient-to-br from-cyan-900/40 to-blue-900/40 border border-cyan-500/25 p-8 text-center space-y-4">
          <h2 className="font-black text-white text-xl">まず使えるAIツールを無料で試そう</h2>
          <p className="text-slate-400 text-sm">無料で使えるAIツール15選を一覧で確認できます。副業を始める前にどのツールが自分に合うか試してみましょう。</p>
          <Link href="/ai-tools-guide"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-black text-black text-base transition-all hover:opacity-90 hover:scale-105"
            style={{ background: "linear-gradient(135deg, #06b6d4, #3b82f6)" }}>
            無料AIツール15選を見る →
          </Link>
          <p className="text-slate-400 text-sm pt-1">
            スキルの証明を作りたい人は{" "}
            <Link href="/ai-shikaku-guide" className="text-cyan-300 hover:underline font-bold">
              生成AI資格・AI検定ガイド
            </Link>
            {" "}もあわせてどうぞ。
          </p>
        </section>

        {/* FAQ */}
        <section className="space-y-4">
          <h2 className="text-xl font-black text-white">よくある質問</h2>
          <div className="space-y-3">
            {FAQ.map(({ q, a }) => (
              <div key={q} className="bg-slate-800/60 border border-slate-700 rounded-xl p-5">
                <p className="font-bold text-white text-sm mb-2">Q. {q}</p>
                <p className="text-slate-400 text-sm leading-relaxed">A. {a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* アフィリエイト */}
        <AffiliateSectionAiNews />
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import AffiliateSectionAiNews from "@/components/AffiliateSectionAiNews";

export const metadata: Metadata = {
  title: "AIを使った副業5選【2026年版・初心者でも月10万円可能】| AI最新情報",
  description:
    "ChatGPT・Claude・Midjourney等のAIツールを活用した副業を厳選5選。AIライティング・AI画像生成・AI動画編集・AIブログ・AIコンサルから自分に合う副業を見つけて2026年に月収アップを狙おう。",
  keywords: [
    "AI 副業",
    "AI 副業 始め方",
    "ChatGPT 副業",
    "AIツール 稼ぎ方",
    "AI 副業 月10万円",
    "生成AI 副業 2026",
  ],
  alternates: {
    canonical: "https://ai-news-site-wheat.vercel.app/ai-side-job",
  },
  openGraph: {
    title: "AIを使った副業5選【2026年版・初心者でも月10万円可能】",
    description:
      "ChatGPT・Claude・Midjourneyを使った実践的な副業5選と収益化ロードマップ。2026年最新の稼ぎ方を完全解説。",
    type: "article",
    locale: "ja_JP",
    siteName: "AI最新情報",
  },
  twitter: {
    card: "summary_large_image",
    title: "AIを使った副業5選【2026年版・初心者でも月10万円可能】",
    description:
      "ChatGPT・Claude・Midjourneyを使った実践的な副業5選と収益化ロードマップ。2026年最新の稼ぎ方を完全解説。",
  },
};

interface AiJob {
  no: number;
  name: string;
  emoji: string;
  color: string;
  difficulty: string;
  income: string;
  timeRequired: string;
  tools: string[];
  desc: string;
  startSteps: string[];
  realCase: string;
}

interface CompareRow {
  job: string;
  income: string;
  initial: string;
  time: string;
  difficulty: string;
}

interface FaqItem {
  q: string;
  a: string;
}

const AI_JOBS: AiJob[] = [
  {
    no: 1,
    name: "AIライティング副業",
    emoji: "✍️",
    color: "#06b6d4",
    difficulty: "低",
    income: "月3〜15万円",
    timeRequired: "週5〜15時間",
    tools: ["ChatGPT Plus", "Claude", "Gemini"],
    desc: "AIが下書きを作り、人間が編集・品質チェック・SEO最適化をする「AI補助ライター」は2026年現在も需要が急増しています。記事作成・メルマガ・LP・商品説明文など依頼案件が多く、クラウドワークスやランサーズに常時案件が出ています。",
    startSteps: [
      "ChatGPT Plus（月3,000円）またはClaude Pro（月3,000円）を契約",
      "クラウドワークス・ランサーズで「AI記事」「ブログ記事」で検索して案件を探す",
      "まず文字単価0.5〜1円の案件で実績を3〜5本作る",
      "ポートフォリオを整えて文字単価2〜5円にステップアップ",
    ],
    realCase: "会社員Aさん（29歳）：ChatGPT活用でライター業務を3倍速化。週10時間で月8万円を3ヶ月で達成。",
  },
  {
    no: 2,
    name: "AI画像生成・デザイン副業",
    emoji: "🎨",
    color: "#8b5cf6",
    difficulty: "低〜中",
    income: "月1〜20万円",
    timeRequired: "週5〜20時間",
    tools: ["Midjourney", "Stable Diffusion", "Adobe Firefly", "DALL-E 3"],
    desc: "Midjourney・Stable DiffusionなどのAI画像生成ツールを使った商業デザイン副業。SNSアイコン・サムネイル・書籍表紙・WebサイトのビジュアルなどをAIで大量生成して納品。著作権・ガイドラインの理解が必須です。",
    startSteps: [
      "Midjourney（月10〜30ドル）または無料のAdobe Firefly・Canva AIを使い込む",
      "プロンプトエンジニアリングをYouTubeで学習（2〜3週間）",
      "ランサーズ・BOOTHで「AI画像生成」として出品",
      "企業・個人クリエイターへの提案営業で単価アップ",
    ],
    realCase: "フリーランスBさん（34歳）：Midjourneyでサムネイル制作を受注。1件3,000〜5,000円×20件/月で月収7万円に。",
  },
  {
    no: 3,
    name: "AI動画編集副業",
    emoji: "🎬",
    color: "#ef4444",
    difficulty: "中",
    income: "月5〜25万円",
    timeRequired: "週10〜20時間",
    tools: ["CapCut AI", "Runway ML", "Kling AI", "Adobe Premiere AI"],
    desc: "AI自動字幕・ハイライト生成・BGM自動挿入・ノイズ除去などのAI機能を活用して動画編集を3〜5倍速化。YouTuber・企業のショート動画・Reels・TikTok向け動画編集を低コスト・短納期で請け負えるようになります。",
    startSteps: [
      "CapCut（無料）でAI機能（字幕・カット・エフェクト）を使い込む",
      "スクールまたはYouTubeで動画編集の基礎をマスター（1〜2ヶ月）",
      "クラウドワークスで動画編集案件を受注（まず単価5,000〜10,000円/本）",
      "「AI活用で高速納品」を売りにして単価を上げる",
    ],
    realCase: "副業Cさん（26歳）：AI動画ツールで作業時間を1/4に短縮。週末2日で月12万円を安定受注。",
  },
  {
    no: 4,
    name: "AIブログ・アフィリエイト",
    emoji: "📝",
    color: "#f59e0b",
    difficulty: "中〜高",
    income: "月0〜100万円以上（6ヶ月〜）",
    timeRequired: "週10〜30時間",
    tools: ["ChatGPT", "Claude", "Surfer SEO", "RankMath"],
    desc: "AIで記事の下書きを作り、SEO最適化・独自情報追加・E-E-A-T対策をして検索上位を狙うブログ。立ち上げから6ヶ月以上かかりますが、軌道に乗ると収入が「資産型」になる点が最大の魅力。アフィリエイト報酬単価3,000円以上の案件を中心に攻める。",
    startSteps: [
      "WordPressブログをエックスサーバーで開設（月990円〜）",
      "A8ネット・もしもアフィリエイトに登録して報酬3,000円以上の案件を探す",
      "ChatGPT/Claudeで記事の構成案・下書きを作成し、事実確認・独自情報を追加",
      "月4〜8本ペースで継続投稿（6ヶ月間は収益ゼロでも続ける）",
    ],
    realCase: "副業Dさん（38歳）：AIブログで40本記事後に月収3万円、12ヶ月後に月収20万円を達成。",
  },
  {
    no: 5,
    name: "AIコンサル・プロンプト販売",
    emoji: "🤖",
    color: "#10b981",
    difficulty: "中〜高",
    income: "月5〜50万円",
    timeRequired: "週5〜20時間",
    tools: ["ChatGPT", "Claude", "Dify", "Make"],
    desc: "AIツールの使い方・業務自動化コンサルティングは2026年現在も需要が爆増中。中小企業・個人事業主向けに「AIで業務を効率化するサポート」をするコンサル副業。プロンプト販売（Gumroad・BOOTH）も月収5〜10万円の実績が出始めています。",
    startSteps: [
      "ChatGPT・Claude・AIツールを自分の業務で徹底的に使い込む（最低3ヶ月）",
      "Xで「AI活用事例」を毎日発信してフォロワーを増やす",
      "ストアカ・ウェブで「AI活用講座」（1万円〜）を開講",
      "企業向けの個別コンサル（月5〜30万円）へステップアップ",
    ],
    realCase: "Eさん（41歳）：中小企業向けChatGPT導入支援を開始。3社と契約して月収25万円の副業収入に。",
  },
];

const COMPARE: CompareRow[] = [
  { job: "AIライター", income: "月3〜15万円", initial: "低（月3,000円〜）", time: "週5〜15h", difficulty: "⭐" },
  { job: "AI画像生成", income: "月1〜20万円", initial: "低（月1,000〜3,000円）", time: "週5〜20h", difficulty: "⭐⭐" },
  { job: "AI動画編集", income: "月5〜25万円", initial: "低（無料ツール多数）", time: "週10〜20h", difficulty: "⭐⭐⭐" },
  { job: "AIブログ", income: "月0〜100万円", initial: "低（月1,000円〜）", time: "週10〜30h", difficulty: "⭐⭐⭐" },
  { job: "AIコンサル", income: "月5〜50万円", initial: "ほぼゼロ", time: "週5〜20h", difficulty: "⭐⭐⭐⭐" },
];

const FAQ: FaqItem[] = [
  {
    q: "AIを使った副業で稼ぐのに特別なスキルが必要ですか？",
    a: "最初は不要です。ChatGPTやClaudeは誰でも使えます。ただし「AIが生成した文章をそのまま納品する」のは品質問題・著作権問題があります。AIの出力を編集・品質向上・独自情報追加できる人間の判断力が付加価値になります。",
  },
  {
    q: "AI副業でどのくらいの期間で月10万円を稼げますか？",
    a: "AIライター・AI動画編集などのスキル売り副業は3〜6ヶ月で月3〜5万円、6〜12ヶ月で月10万円が現実的な目安です。AIブログは収益化まで6〜12ヶ月かかりますが、軌道に乗ると月50万円超も可能です。",
  },
  {
    q: "ChatGPTの有料版（Plus）は必要ですか？",
    a: "副業で使うなら月3,000円のChatGPT Plusは必須投資です。GPT-4oが使えると生成品質が大幅に向上し、副業の単価・品質・速度が全て改善します。ClaudeもPro版（月3,000円）が長文・複雑な作業に向いています。",
  },
  {
    q: "AI副業で確定申告は必要ですか？",
    a: "副業収入（給与以外の所得）が年間20万円を超えると確定申告が必要です。AIツールの月額費用・サーバー代・書籍代などは経費計上できます。freee・マネーフォワードなどのクラウド会計ソフトを使えば確定申告は簡単にできます。",
  },
];

export default function AiSideJobPage() {
  return (
    <div className="min-h-screen bg-[#0d1117]">
      <div
        className="fixed top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] pointer-events-none opacity-8"
        style={{
          background: "radial-gradient(ellipse, #06b6d4 0%, #8b5cf6 50%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "AIを使った副業5選【2026年版・初心者でも月10万円可能】",
            description: "ChatGPT・Claude・Midjourneyを活用した副業5選と収益化ロードマップ。",
            author: { "@type": "Organization", name: "AI最新情報" },
            datePublished: "2026-06-30",
            dateModified: "2026-06-30",
            url: "https://ai-news-site-wheat.vercel.app/ai-side-job",
          }),
        }}
      />
      <div className="relative z-10 max-w-4xl mx-auto px-4 pt-24 pb-20">
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-gray-300 transition-colors">トップ</Link>
          <span>/</span>
          <Link href="/ai-fukugyou" className="hover:text-gray-300 transition-colors">AI副業</Link>
          <span>/</span>
          <span className="text-gray-400">AIを使った副業5選</span>
        </nav>
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-sm font-semibold text-cyan-400 mb-6">
            🤖 AI副業完全ガイド 2026年版
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight mb-4">
            AIを使った副業5選
            <span className="block text-xl sm:text-3xl mt-2 font-bold" style={{
              background: "linear-gradient(135deg, #06b6d4, #8b5cf6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              【2026年版・初心者でも月10万円可能】
            </span>
          </h1>
          <p className="text-gray-400 text-base leading-relaxed mb-4">
            ChatGPT・Claude・Midjourney等のAIツールが普及した2026年、AI活用スキルは最強の副業武器です。本記事では初心者でも始めやすいAI副業を5つ厳選し、収益化までの具体的なステップを公開します。
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <span>📅 2026年6月30日</span>
            <span>⏱️ 読了時間：約12分</span>
          </div>
        </div>
        <section className="mb-14">
          <h2 className="text-2xl font-black text-white mb-6">📊 AI副業5選 一覧比較</h2>
          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-white/[0.06]">
                  <th className="text-left px-4 py-3 text-gray-400 font-bold">副業</th>
                  <th className="text-left px-4 py-3 text-gray-400 font-bold">月収目安</th>
                  <th className="text-left px-4 py-3 text-gray-400 font-bold hidden sm:table-cell">初期費用</th>
                  <th className="text-left px-4 py-3 text-gray-400 font-bold hidden sm:table-cell">週の時間</th>
                  <th className="text-left px-4 py-3 text-gray-400 font-bold">難易度</th>
                </tr>
              </thead>
              <tbody>
                {COMPARE.map((row, i) => (
                  <tr key={i} className="border-t border-white/5 hover:bg-white/[0.02] transition-colors">
                    <td className="px-4 py-3 font-bold text-white">{row.job}</td>
                    <td className="px-4 py-3 text-cyan-400 font-bold">{row.income}</td>
                    <td className="px-4 py-3 text-gray-400 hidden sm:table-cell">{row.initial}</td>
                    <td className="px-4 py-3 text-gray-400 hidden sm:table-cell">{row.time}</td>
                    <td className="px-4 py-3 text-yellow-400">{row.difficulty}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        <section className="mb-14">
          <h2 className="text-2xl font-black text-white mb-8">🚀 AI副業5選の詳細解説</h2>
          <div className="space-y-8">
            {AI_JOBS.map((job) => (
              <div key={job.no} className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden">
                <div className="px-6 py-5 flex items-start gap-4" style={{ borderBottom: `1px solid ${job.color}30`, background: `${job.color}0a` }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 font-black" style={{ background: `${job.color}20`, color: job.color, border: `1px solid ${job.color}40` }}>
                    {job.no}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-black text-white mb-1">{job.emoji} {job.name}</h3>
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="text-xs font-bold" style={{ color: job.color }}>💰 {job.income}</span>
                      <span className="text-xs text-gray-500">⏱ {job.timeRequired}</span>
                      <span className="text-xs text-gray-500">難易度：{job.difficulty}</span>
                    </div>
                  </div>
                </div>
                <div className="px-6 py-5 space-y-5">
                  <p className="text-gray-400 text-sm leading-relaxed">{job.desc}</p>
                  <div>
                    <p className="text-xs text-gray-500 mb-2 font-bold">主要AIツール</p>
                    <div className="flex flex-wrap gap-2">
                      {job.tools.map((tool) => (
                        <span key={tool} className="text-xs px-2 py-1 rounded-full font-bold" style={{ color: job.color, background: `${job.color}15`, border: `1px solid ${job.color}30` }}>{tool}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-3 font-bold">始め方ステップ</p>
                    <ol className="space-y-2">
                      {job.startSteps.map((step, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                          <span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-black" style={{ background: `${job.color}20`, color: job.color }}>{i + 1}</span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                  <div className="rounded-lg p-4" style={{ background: `${job.color}08`, border: `1px solid ${job.color}25` }}>
                    <p className="text-xs font-bold mb-1" style={{ color: job.color }}>📌 実例</p>
                    <p className="text-xs text-gray-400 leading-relaxed">{job.realCase}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="mb-14">
          <h2 className="text-2xl font-black text-white mb-6">❓ よくある質問</h2>
          <div className="space-y-4">
            {FAQ.map((item, i) => (
              <div key={i} className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
                <p className="font-bold text-white mb-2">Q. {item.q}</p>
                <p className="text-sm text-gray-400 leading-relaxed">A. {item.a}</p>
              </div>
            ))}
          </div>
        </section>
        <div className="rounded-2xl p-8 text-center mb-10" style={{ background: "linear-gradient(135deg, rgba(6,182,212,0.12), rgba(139,92,246,0.12))", border: "1px solid rgba(6,182,212,0.25)" }}>
          <p className="text-gray-400 text-sm mb-2">AI副業に必須のAIツール比較も読んでみよう</p>
          <h2 className="text-2xl font-black text-white mb-4">ChatGPT・Claude・Gemini どれを使うべきか？</h2>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/ai-tools-comparison" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-black text-base text-[#0d1117] bg-cyan-400 hover:bg-cyan-300 transition-all hover:-translate-y-0.5 shadow-lg">
              🤖 AIツール徹底比較を見る
            </Link>
            <Link href="/ai-fukugyou" className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-sm border border-white/20 text-gray-300 hover:border-white/40 hover:text-white transition-all">
              💰 AI副業の始め方ガイド
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { href: "/chatgpt-guide", label: "ChatGPT完全ガイド", emoji: "💬" },
            { href: "/claude-guide", label: "Claude活用ガイド", emoji: "🤖" },
            { href: "/ai-writing-guide", label: "AIライティング入門", emoji: "✍️" },
          ].map((link) => (
            <Link key={link.href} href={link.href} className="rounded-xl border border-white/10 bg-white/[0.02] p-4 hover:border-white/20 transition-all text-center">
              <p className="text-xl mb-1">{link.emoji}</p>
              <p className="text-sm font-bold text-gray-300">{link.label}</p>
            </Link>
          ))}
        </div>
      </div>
      <AffiliateSectionAiNews />
    </div>
  );
}
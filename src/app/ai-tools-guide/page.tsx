import type { Metadata } from "next";
import Link from "next/link";
import AffiliateSectionAiNews from "@/components/AffiliateSectionAiNews";

export const metadata: Metadata = {
  title: "2026年版 無料で使えるAIツール完全ガイド【最新15選】| AI News Japan",
  description: "ChatGPT・Gemini・Claude・Perplexityなど2026年に無料で使えるAIツールを厳選15個紹介。テキスト生成・画像生成・コーディング支援・翻訳・音声合成の用途別に解説。",
  keywords: ["AIツール 無料", "ChatGPT 使い方", "AI ツール 2026", "生成AI おすすめ", "無料AI"],
  openGraph: {
    title: "2026年版 無料AIツール完全ガイド【15選】",
    description: "ChatGPT・Gemini・Claudeなど無料で使えるAIツール15選を用途別に徹底解説",
    type: "article",
    locale: "ja_JP",
    url: "https://ai-news-site-wheat.vercel.app/ai-tools-guide",
    images: [
      {
        url: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&q=80&fit=crop",
        width: 1200,
        height: 630,
        alt: "2026年版 無料AIツール完全ガイド",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "2026年版 無料AIツール完全ガイド【15選】",
    description: "ChatGPT・Gemini・Claudeなど無料で使えるAIツール15選を用途別に徹底解説",
    images: ["https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&q=80&fit=crop"],
  },
  alternates: {
    canonical: "https://ai-news-site-wheat.vercel.app/ai-tools-guide",
  },
};

const TOOLS = [
  {
    name: "ChatGPT（OpenAI）",
    category: "テキスト生成・会話",
    free: "GPT-4o mini 無料",
    /* カテゴリーバッジ用の明るい背景・テキスト色 */
    badgeBg: "bg-emerald-700",
    badgeText: "text-emerald-100",
    accentText: "text-emerald-300",
    btnBg: "bg-emerald-700",
    btnText: "text-emerald-100",
    icon: "🤖",
    desc: "世界最多ユーザーのAIチャット。文章作成・翻訳・コード生成・アイデア出しまで何でもこなす万能AI。GPT-4o miniが無料で使える。",
    url: "https://chat.openai.com",
    useCases: ["文章・メール作成", "翻訳", "コード生成", "アイデア出し"],
  },
  {
    name: "Gemini（Google）",
    category: "テキスト生成・マルチモーダル",
    free: "Gemini 1.5 Flash 無料",
    badgeBg: "bg-indigo-700",
    badgeText: "text-indigo-100",
    accentText: "text-indigo-300",
    btnBg: "bg-indigo-700",
    btnText: "text-indigo-100",
    icon: "💎",
    desc: "Googleが開発したマルチモーダルAI。Gmail・Docs・Sheetsとの連携が強力。Googleアカウントがあればすぐ使える。",
    url: "https://gemini.google.com",
    useCases: ["Gmail・Docs連携", "画像解析", "Webリサーチ", "多言語対応"],
  },
  {
    name: "Claude（Anthropic）",
    category: "長文処理・文章品質",
    free: "Claude 3.5 Haiku 無料",
    badgeBg: "bg-amber-700",
    badgeText: "text-amber-100",
    accentText: "text-amber-300",
    btnBg: "bg-amber-700",
    btnText: "text-amber-100",
    icon: "🧠",
    desc: "長い文章の要約・分析に最も優れたAI。安全性重視の設計で、長いドキュメント処理やコード品質向上に定評がある。",
    url: "https://claude.ai",
    useCases: ["長文要約・分析", "コードレビュー", "レポート作成", "論文読解"],
  },
  {
    name: "Perplexity AI",
    category: "AI検索・リサーチ",
    free: "基本機能無料",
    badgeBg: "bg-cyan-700",
    badgeText: "text-cyan-100",
    accentText: "text-cyan-300",
    btnBg: "bg-cyan-700",
    btnText: "text-cyan-100",
    icon: "🔍",
    desc: "検索エンジンとAIを融合した次世代リサーチツール。回答にソースURLが表示されるため、情報の信頼性を確認しながら調査できる。",
    url: "https://perplexity.ai",
    useCases: ["最新情報検索", "事実確認", "論文調査", "競合リサーチ"],
  },
  {
    name: "Copilot（Microsoft）",
    category: "Office統合AI",
    free: "Web版無料",
    badgeBg: "bg-blue-700",
    badgeText: "text-blue-100",
    accentText: "text-blue-300",
    btnBg: "bg-blue-700",
    btnText: "text-blue-100",
    icon: "🪟",
    desc: "BingとChatGPTを組み合わせたMicrosoftのAI。EdgeブラウザやWindows 11に内蔵。DALL-E 3で画像生成も無料でできる。",
    url: "https://copilot.microsoft.com",
    useCases: ["Office連携", "画像生成（DALL-E 3）", "Web検索強化", "コード補完"],
  },
  {
    name: "Stable Diffusion（オンライン版）",
    category: "AI画像生成",
    free: "クレジット制の無料枠あり",
    badgeBg: "bg-violet-700",
    badgeText: "text-violet-100",
    accentText: "text-violet-300",
    btnBg: "bg-violet-700",
    btnText: "text-violet-100",
    icon: "🎨",
    desc: "オープンソースの画像生成AI。Stability AIが提供するオンライン版は無料クレジットで利用可能。ローカル実行すれば完全無料。",
    url: "https://stability.ai",
    useCases: ["イラスト生成", "写真加工", "SNSバナー作成", "商品画像生成"],
  },
  {
    name: "Midjourney",
    category: "高品質AI画像生成",
    free: "限定無料トライアル",
    badgeBg: "bg-pink-700",
    badgeText: "text-pink-100",
    accentText: "text-pink-300",
    btnBg: "bg-pink-700",
    btnText: "text-pink-100",
    icon: "🖼️",
    desc: "最高品質の画像を生成できるAI。アーティスト・デザイナーに人気。Discord経由で使用。プロ品質のビジュアル制作に最適。",
    url: "https://midjourney.com",
    useCases: ["高品質アート", "コンセプト画像", "広告ビジュアル", "ゲームアセット"],
  },
  {
    name: "GitHub Copilot",
    category: "AIコーディング支援",
    free: "月2,000補完まで無料",
    /* 元の色が #374151（ほぼ黒）なのでスレート系の明るい色に変更 */
    badgeBg: "bg-slate-600",
    badgeText: "text-slate-100",
    accentText: "text-slate-200",
    btnBg: "bg-slate-600",
    btnText: "text-slate-100",
    icon: "💻",
    desc: "GitHubとOpenAIが共同開発のコーディングAI。VS CodeやJetBrainsに統合。コードの自動補完・バグ修正・テスト生成が劇的に速くなる。",
    url: "https://github.com/features/copilot",
    useCases: ["コード補完", "バグ修正", "テスト生成", "コードレビュー"],
  },
  {
    name: "ElevenLabs",
    category: "AI音声合成",
    free: "月10,000文字無料",
    badgeBg: "bg-yellow-700",
    badgeText: "text-yellow-100",
    accentText: "text-yellow-200",
    btnBg: "bg-yellow-700",
    btnText: "text-yellow-100",
    icon: "🎙️",
    desc: "最もリアルな音声合成AI。クリエイター向けに月1万文字無料。日本語対応。YouTube・ポッドキャスト・有声コンテンツ制作に。",
    url: "https://elevenlabs.io",
    useCases: ["ナレーション", "YouTube動画", "音声読み上げ", "多言語翻訳音声"],
  },
  {
    name: "Runway",
    category: "AI動画生成",
    free: "125クレジット無料",
    badgeBg: "bg-red-700",
    badgeText: "text-red-100",
    accentText: "text-red-300",
    btnBg: "bg-red-700",
    btnText: "text-red-100",
    icon: "🎬",
    desc: "テキストや画像から動画を生成するAI。SNS・広告・映像制作に革命をもたらしている。初回125クレジット無料で試せる。",
    url: "https://runwayml.com",
    useCases: ["動画生成", "動画編集", "背景削除", "スローモーション"],
  },
  {
    name: "Kling AI",
    category: "AI動画生成",
    free: "無料プランあり",
    badgeBg: "bg-purple-700",
    badgeText: "text-purple-100",
    accentText: "text-purple-300",
    btnBg: "bg-purple-700",
    btnText: "text-purple-100",
    icon: "🎥",
    desc: "中国Kuaishouが開発した高品質動画生成AI。Soraに匹敵するクオリティを無料でも体験可能。日本語対応。",
    url: "https://klingai.com",
    useCases: ["テキスト→動画", "画像→動画", "ショート動画制作"],
  },
  {
    name: "NotebookLM（Google）",
    category: "AIドキュメント解析",
    free: "完全無料",
    badgeBg: "bg-green-700",
    badgeText: "text-green-100",
    accentText: "text-green-300",
    btnBg: "bg-green-700",
    btnText: "text-green-100",
    icon: "📓",
    desc: "PDFや文書をアップロードしてAIと対話できるGoogleの無料ツール。論文・報告書・契約書の要約・Q&Aに革命的に便利。",
    url: "https://notebooklm.google.com",
    useCases: ["PDF要約", "論文解析", "議事録整理", "資料Q&A"],
  },
  {
    name: "Suno",
    category: "AI音楽生成",
    free: "1日50クレジット無料",
    badgeBg: "bg-orange-700",
    badgeText: "text-orange-100",
    accentText: "text-orange-300",
    btnBg: "bg-orange-700",
    btnText: "text-orange-100",
    icon: "🎵",
    desc: "テキストから楽曲を自動生成するAI。BGM制作・コンテンツBGM・プロトタイプ制作に使える。毎日50クレジット無料付与。",
    url: "https://suno.ai",
    useCases: ["BGM制作", "オリジナル楽曲", "コンテンツBGM", "効果音"],
  },
  {
    name: "Gamma",
    category: "AIプレゼン生成",
    free: "400クレジット無料",
    badgeBg: "bg-indigo-600",
    badgeText: "text-indigo-100",
    accentText: "text-indigo-200",
    btnBg: "bg-indigo-600",
    btnText: "text-indigo-100",
    icon: "📊",
    desc: "テキストを入力するだけで美しいプレゼン・資料を自動生成。デザインセンス不要でプロ品質のスライドが5分で完成。",
    url: "https://gamma.app",
    useCases: ["プレゼン作成", "提案書", "スライド", "レポート"],
  },
  {
    name: "Dify",
    category: "AI開発プラットフォーム",
    free: "基本機能無料（オープンソース）",
    badgeBg: "bg-sky-700",
    badgeText: "text-sky-100",
    accentText: "text-sky-300",
    btnBg: "bg-sky-700",
    btnText: "text-sky-100",
    icon: "⚡",
    desc: "ノーコードでAIアプリを作れるプラットフォーム。ChatGPT・ClaudeなどのAIをフローで組み合わせてカスタムアプリを構築できる。",
    url: "https://dify.ai",
    useCases: ["AIアプリ開発", "チャットbot", "ワークフロー自動化"],
  },
];

const FAQ = [
  { q: "AIツールは本当に無料で使えますか？", a: "多くのAIツールは無料プランがあります。ChatGPT・Gemini・Claudeは基本機能を無料で利用できます。制限はありますが、個人利用や学習目的には十分な機能が揃っています。" },
  { q: "日本語で使えるAIツールはどれですか？", a: "ChatGPT・Gemini・Claude・Perplexity・Copilotはいずれも日本語に対応しています。品質ではClaudeとChatGPTが特に優れています。" },
  { q: "画像生成AIで著作権は大丈夫ですか？", a: "生成したAI画像の著作権は基本的に生成者（ユーザー）に帰属します。ただし、実在する人物の顔を生成する場合や、他者の作風を完全模倣する場合は問題が生じることがあります。商用利用の際は各サービスの利用規約を必ず確認してください。" },
  { q: "AIに個人情報を入力しても安全ですか？", a: "重要な個人情報・機密情報はAIに入力しないことを推奨します。多くのサービスでは入力データをモデル学習に使用する場合があります。ビジネス利用にはエンタープライズプランや、プライバシー設定をオフにして利用することを検討してください。" },
  { q: "初心者におすすめのAIツールはどれですか？", a: "まずはChatGPT（無料）から始めることをおすすめします。次にGemini（Google連携）、Perplexity（検索に強い）の順で試すと、AIツールの使い方の幅が広がります。" },
];

export default function AIToolsGuidePage() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4 space-y-12">
      {/* FAQ JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQ.map(({ q, a }) => ({
              "@type": "Question",
              name: q,
              acceptedAnswer: { "@type": "Answer", text: a },
            })),
          }),
        }}
      />

      {/* ヘッダー */}
      <section className="text-center space-y-4 pt-4">
        {/* バッジ: 不透過背景・明るいテキストに修正 */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold border border-cyan-400 bg-cyan-800 text-cyan-100">
          🤖 完全無料AIツール
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white leading-tight">
          2026年版 無料で使える<br className="sm:hidden" />
          <span className="text-cyan-400">AIツール完全ガイド</span>【15選】
        </h1>
        <p className="text-slate-200 text-base max-w-2xl mx-auto">
          ChatGPT・Gemini・Claude・画像生成AI・動画生成AIなど、今すぐ無料で試せるAIツールを用途別に厳選。2026年最新情報でお届けします。
        </p>
        <div className="flex flex-wrap justify-center gap-2 text-xs">
          {["テキスト生成", "画像生成", "動画生成", "コーディング", "音楽・音声"].map(tag => (
            <span key={tag} className="px-3 py-1 rounded-full bg-slate-600 text-white border border-slate-400 font-semibold">{tag}</span>
          ))}
        </div>
      </section>

      {/* ツール一覧 */}
      <section className="space-y-6">
        <h2 className="text-xl font-black text-white">無料AIツール15選（2026年最新）</h2>
        <div className="grid gap-5">
          {TOOLS.map((tool, i) => (
            <div key={tool.name} className="bg-slate-800 border border-slate-500 rounded-2xl p-5 hover:border-slate-300 transition-all">
              <div className="flex items-start gap-4 flex-wrap">
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <span className="text-3xl flex-shrink-0">{tool.icon}</span>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-white font-black text-base">
                        {i + 1}. {tool.name}
                      </span>
                      {/* カテゴリーバッジ: 不透過背景・明るいテキストに修正 */}
                      <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${tool.badgeBg} ${tool.badgeText}`}>
                        {tool.category}
                      </span>
                    </div>
                    {/* 無料表示: 暗色ツール（GitHub Copilot等）対策で明るい色に固定 */}
                    <div className={`text-xs mt-0.5 font-semibold ${tool.accentText}`}>
                      ✅ {tool.free}
                    </div>
                  </div>
                </div>
                {/* 「試してみる」ボタン: 不透過背景・明るいテキストに修正 */}
                <a href={tool.url} target="_blank" rel="noopener noreferrer"
                  className={`text-xs font-bold px-3 py-1.5 rounded-lg transition-all hover:opacity-80 flex-shrink-0 border border-white/20 ${tool.btnBg} ${tool.btnText}`}>
                  試してみる →
                </a>
              </div>
              <p className="text-slate-100 text-sm mt-3 leading-relaxed">{tool.desc}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {tool.useCases.map(uc => (
                  <span key={uc} className="text-xs px-2 py-0.5 rounded bg-slate-600 text-white font-medium">{uc}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="space-y-4">
        <h2 className="text-xl font-black text-white">よくある質問</h2>
        <div className="space-y-3">
          {FAQ.map(({ q, a }) => (
            <div key={q} className="bg-slate-800 border border-slate-500 rounded-xl p-5">
              <p className="font-bold text-white text-sm mb-2">Q. {q}</p>
              <p className="text-slate-100 text-sm leading-relaxed">A. {a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 関連リンク */}
      <section className="bg-slate-800 border border-slate-500 rounded-2xl p-6 space-y-3">
        <h2 className="font-black text-white">最新AIニュースをもっと読む</h2>
        <p className="text-slate-100 text-sm">AIツールの最新アップデート・新サービス情報を毎日お届けしています。</p>
        {/* ボタン: 不透過背景・明るいテキストに修正 */}
        <Link href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all hover:opacity-90 bg-cyan-700 text-white border border-cyan-500">
          最新AI記事をチェック →
        </Link>
      </section>

      {/* アフィリエイト */}
      <AffiliateSectionAiNews />
    </div>
  );
}

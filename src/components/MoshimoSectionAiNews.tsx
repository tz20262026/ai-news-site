"use client";

// もしもアフィリエイト経由の広告カード（2026-07-13作成 / 2026-07-14 第2弾5件を追記）
// ※ A8の AffiliateSectionAiNews とは独立した別セクション。既存リンクには一切手を触れない

/** もしも広告カード1件分の型定義 */
type MoshimoItem = {
  /** もしもアフィリエイトの計測リンク */
  href: string;
  /** カード上部のバッジ文言（絵文字つき） */
  badge: string;
  /** バッジ・CTAのアクセントカラー */
  badgeColor: string;
  /** サービス名 */
  title: string;
  /** ひとことキャッチ */
  tagline: string;
  /** 紹介文（誇大表現なし） */
  desc: string;
  /** CTAボタンの文言 */
  cta: string;
  /** CTAボタンのアクセントカラー */
  color: string;
};

/** 最上位で大きく見せる注目案件（1件のみ・成果報酬が最も高い） */
const featured: MoshimoItem = {
  // 2026-07-14追加・成果報酬 最大198,000円（本セクション最高単価）
  href: "https://af.moshimo.com/af/c/click?a_id=5692070&p_id=7624&pc_id=22031&pl_id=95181",
  badge: "🥇 注目のAI自動ブログ",
  badgeColor: "#eab308",
  title: "AIブログくんGOLD",
  tagline: "キーワードを入れるだけでAIが記事を書いて自動投稿",
  desc: "テーマを登録しておくと、AIが記事の構成・本文・画像まで生成してWordPressへ自動投稿するサービス。記事更新の手が回らないメディア運営者や、AIでの発信を仕組み化したい方向けの有料プラン。",
  cta: "AIブログくんGOLDを見る →",
  color: "#eab308",
};

/** 通常グリッドに並べる案件（成果報酬の高い順） */
const items: MoshimoItem[] = [
  {
    // 2026-07-14追加・成果報酬30,000円
    href: "https://af.moshimo.com/af/c/click?a_id=5692052&p_id=3953&pc_id=9863&pl_id=54912",
    badge: "📊 データサイエンスを学ぶ",
    badgeColor: "#3b82f6",
    title: "スタアカ（スタビジアカデミー）",
    tagline: "データサイエンス・機械学習が学べるオンライン講座",
    desc: "AIの中身を理解したい人向け。統計・Python・機械学習をロードマップ形式で学べるオンラインスクール。生成AIを「使う側」から「作る側」に回りたい方に。",
    cta: "講座ラインナップを見る →",
    color: "#3b82f6",
  },
  {
    // 成果報酬23,000円
    href: "https://af.moshimo.com/af/c/click?a_id=5692076&p_id=7521&pc_id=21723&pl_id=94320",
    badge: "🏪 AI検索時代の店舗集客",
    badgeColor: "#f59e0b",
    title: "LOCALGOAT",
    tagline: "AIO×MEO×SNSの次世代店舗集客サービス",
    desc: "ChatGPTやAI検索で店舗が紹介される時代へ。AI検索対策（AIO）とGoogleマップ対策（MEO）をまとめて支援するサービス。店舗経営者の方に。",
    cta: "サービス資料を見る →",
    color: "#f59e0b",
  },
  {
    // 2026-07-14追加・成果報酬15,000円（無料申込で成果発生）
    href: "https://af.moshimo.com/af/c/click?a_id=5692077&p_id=7494&pc_id=21647&pl_id=93995",
    badge: "🤖 Claude Codeで業務自動化",
    badgeColor: "#ef4444",
    title: "AI鬼管理",
    tagline: "Claude Codeを使った業務自動化トレーニング（無料申込）",
    desc: "Claude Codeなどのコーディングエージェントを実務に落とし込むためのトレーニングプログラム。「AIに任せて自動化したいが何から手をつけるか分からない」段階の方向け。申込は無料。",
    cta: "無料で相談してみる →",
    color: "#ef4444",
  },
  {
    // 成果報酬10,000円
    href: "https://af.moshimo.com/af/c/click?a_id=5692062&p_id=2402&pc_id=5229&pl_id=31546",
    badge: "💻 AI時代のコーディング学習",
    badgeColor: "#7c3aed",
    title: "ProgrammingHacks",
    tagline: "オンライン完結のプログラミングスクール",
    desc: "ChatGPTやCopilotを使いこなすにも、コードの基礎があると理解の深さが違う。動画教材で自分のペースで学べるオンラインスクール。",
    cta: "講座の内容を見る →",
    color: "#7c3aed",
  },
  {
    // 成果報酬8,000円
    href: "https://af.moshimo.com/af/c/click?a_id=5692025&p_id=4942&pc_id=13183&pl_id=65512",
    badge: "🆕 新世代サーバー",
    badgeColor: "#f43f5e",
    title: "シンレンタルサーバー",
    tagline: "自由と先進性を兼ね備えた新世代レンタルサーバー",
    desc: "新機能をいち早く取り入れる先進志向のサーバー。AI関連メディアやポートフォリオサイトの運用基盤に。コスパ重視の方にも。",
    cta: "サーバー詳細を見る →",
    color: "#f43f5e",
  },
  {
    // 2026-07-14追加・成果報酬6,000円（無料カウンセリング）
    href: "https://af.moshimo.com/af/c/click?a_id=5692058&p_id=3404&pc_id=8110&pl_id=80579",
    badge: "🐍 Python入門なら",
    badgeColor: "#22c55e",
    title: "テックジム",
    tagline: "月額制プログラミング教室｜Python入門講座",
    desc: "座学よりも手を動かして覚えるスタイルの月額制プログラミング教室。AI・データ分析の共通言語であるPythonを基礎から。無料カウンセリングあり。",
    cta: "無料カウンセリングを予約 →",
    color: "#22c55e",
  },
  {
    // 成果報酬5,000円
    href: "https://af.moshimo.com/af/c/click?a_id=5692024&p_id=2312&pc_id=4967&pl_id=80062",
    badge: "🚀 AIブログを始めるなら",
    badgeColor: "#0ea5e9",
    title: "ConoHa WING",
    tagline: "国内最速・初期費用無料の高性能レンタルサーバー",
    desc: "AIニュースや使い方記事を発信するブログの開設に。表示速度の速さはSEOでも読者体験でも有利。WordPressかんたんセットアップ対応。",
    cta: "料金プランを確認 →",
    color: "#0ea5e9",
  },
  {
    // 2026-07-14追加・成果報酬5,000円
    href: "https://af.moshimo.com/af/c/click?a_id=5692055&p_id=3554&pc_id=8575&pl_id=51506",
    badge: "✍️ AIライティングも学べる",
    badgeColor: "#14b8a6",
    title: "デイトラ",
    tagline: "プログラミング・デザイン・動画編集・AIライティング",
    desc: "1日1題のカリキュラムで進めるオンラインスクール。AIライティングコースもあり、生成AIを前提とした実務スキルを学べる。副業から始めたい方に。",
    cta: "コース一覧を見る →",
    color: "#14b8a6",
  },
];

/** もしもアフィリエイト広告セクション（Propsなし） */
export default function MoshimoSectionAiNews() {
  return (
    <section className="py-14 bg-slate-950 border-t border-slate-800">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-10">
          <span className="inline-block text-xs font-bold text-amber-300 uppercase tracking-widest bg-amber-300/10 px-4 py-1.5 rounded-full mb-3">
            PR / 広告
          </span>
          <h2 className="text-xl md:text-2xl font-black text-white mb-2">
            AI時代のスキルアップ＆サイト運営に役立つサービス
          </h2>
          <p className="text-slate-300 text-sm">学習・発信・集客をワンランク上げる厳選サービス</p>
        </div>

        {/* 注目案件（横1枚・スマホは縦積み） */}
        <a
          href={featured.href}
          rel="nofollow sponsored noopener"
          target="_blank"
          className="group flex flex-col md:flex-row md:items-center gap-4 md:gap-6 p-6 mb-4 rounded-2xl border border-amber-400/40 bg-gradient-to-br from-amber-500/10 to-slate-800/60 hover:border-amber-300/70 hover:-translate-y-0.5 transition-all duration-200"
        >
          <div className="flex-1 min-w-0">
            <span
              className="inline-block text-xs font-bold px-3 py-1 rounded-full"
              style={{
                background: `${featured.badgeColor}20`,
                color: featured.badgeColor,
                border: `1px solid ${featured.badgeColor}35`,
              }}
            >
              {featured.badge}
            </span>
            <p className="font-black text-white text-lg md:text-xl leading-tight mt-3">{featured.title}</p>
            <p className="text-xs md:text-sm text-slate-300 mt-1">{featured.tagline}</p>
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed mt-3">{featured.desc}</p>
          </div>
          <span
            className="inline-flex items-center justify-center text-sm font-bold py-3 px-6 rounded-xl whitespace-nowrap transition-all group-hover:opacity-80 md:shrink-0"
            style={{
              background: `${featured.color}18`,
              color: featured.color,
              border: `1px solid ${featured.color}30`,
            }}
          >
            {featured.cta}
          </span>
        </a>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item) => (
            <a
              key={item.title}
              href={item.href}
              rel="nofollow sponsored noopener"
              target="_blank"
              className="group flex flex-col gap-3 p-5 rounded-2xl border border-slate-700 bg-slate-800/60 hover:border-slate-500 hover:bg-slate-800 hover:-translate-y-0.5 transition-all duration-200"
            >
              <div>
                <span
                  className="text-xs font-bold px-3 py-1 rounded-full"
                  style={{ background: `${item.badgeColor}20`, color: item.badgeColor, border: `1px solid ${item.badgeColor}35` }}
                >
                  {item.badge}
                </span>
              </div>
              <div>
                <p className="font-black text-white text-base leading-tight break-words">{item.title}</p>
                <p className="text-xs text-slate-300 mt-0.5">{item.tagline}</p>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed flex-1">{item.desc}</p>
              <span
                className="inline-flex items-center text-xs font-bold mt-auto py-2 px-4 rounded-xl transition-all group-hover:opacity-80"
                style={{ background: `${item.color}18`, color: item.color, border: `1px solid ${item.color}30` }}
              >
                {item.cta}
              </span>
            </a>
          ))}
        </div>
        <p className="text-center text-xs text-slate-300 mt-6">※ 本セクションはPR・広告（もしもアフィリエイト）を含みます</p>
      </div>
    </section>
  );
}

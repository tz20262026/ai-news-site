"use client";

// もしもアフィリエイト経由の広告カード（2026-07-13追加）
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

const items: MoshimoItem[] = [
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
          <p className="text-slate-300 text-sm">学習・発信・集客をワンランク上げる厳選4サービス</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                <p className="font-black text-white text-base leading-tight">{item.title}</p>
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

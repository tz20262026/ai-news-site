// アクセストレード経由の広告カード（2026-07-14作成）
// ※ A8の AffiliateSectionAiNews / もしもの MoshimoSectionAiNews / バリューコマースの VcSectionAiNews とは
//    完全に独立した別セクション。既存の広告リンクには一切手を触れないこと。
// 訴求：AIを学ぶ・使う・仕事に変えるための実務サービス

/** アクセストレード広告カード1件分の型定義 */
type AtItem = {
  /** アクセストレードの広告リンクID（rk）。クリック計測とインプレッション計測の両方に使う */
  rk: string;
  /** カード上部のバッジ文言（絵文字つき） */
  badge: string;
  /** バッジのアクセントカラー */
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

/** アクセストレードの計測用クリックURLを組み立てる */
const ccUrl = (rk: string): string => `https://h.accesstrade.net/sp/cc?rk=${rk}`;

/** アクセストレードのインプレッション計測用1x1画像のURLを組み立てる */
const rrUrl = (rk: string): string => `https://h.accesstrade.net/sp/rr?rk=${rk}`;

/** 最上位で大きく見せる注目案件（成果報酬が最も高い） */
const featured: AtItem = {
  // 成果報酬 22,000円（本セクション最高単価）
  rk: "0100knoa00ovms",
  badge: "🎓 AIエンジニアを目指す",
  badgeColor: "#f59e0b",
  title: "ディープロ（DIVE INTO CODE）",
  tagline: "実務を想定したカリキュラムのプログラミングスクール",
  desc: "Pythonや機械学習まで踏み込んで学べるプログラミングスクール。「AIのニュースを追う側」から「AIを組み込む側」に回りたい人向けに、説明会や相談の窓口が用意されています。",
  cta: "コースを詳しく見る →",
  color: "#f59e0b",
};

/** 通常グリッドに並べる案件（成果報酬の高い順） */
const items: AtItem[] = [
  {
    // 成果報酬 20,000円（2026-07-17追加）
    rk: "0100q0x500ovms",
    badge: "🌐 生成AI利用の土台に",
    badgeColor: "#0ea5e9",
    title: "eo光【シンプルプラン】",
    tagline: "関西エリアの光回線｜開通でキャッシュバック",
    desc: "クラウドAIツールや大容量データのやり取りが増えるほど、回線の安定性が効いてきます。関西エリア向けの光回線で、シンプルな料金プランから申し込めます。",
    cta: "料金プランを見る →",
    color: "#0ea5e9",
  },
  {
    // 成果報酬 最大18,315円
    rk: "0100p9b000ovms",
    badge: "🌐 AIを使う土台をつくる",
    badgeColor: "#3b82f6",
    title: "フレッツ光",
    tagline: "NTTの光回線｜個人・法人どちらも申し込める",
    desc: "生成AIやクラウドを日常的に使うほど、回線の安定性が効いてきます。全国で使えるNTTの光回線を、キャッシュバック特典つきの窓口から申し込めます。",
    cta: "回線プランを見る →",
    color: "#3b82f6",
  },
  {
    // 成果報酬 10,989円
    rk: "0100pomr00ovms",
    badge: "🤖 SNS運用を自動化する",
    badgeColor: "#8b5cf6",
    title: "iステップ",
    tagline: "Instagramのメッセージ対応を自動化するチャットボット",
    desc: "投稿へのコメントをきっかけに、あらかじめ用意した内容をDMで自動送信できるツール。Meta公式APIを使った仕組みで、問い合わせ対応の手間を減らす用途で使われています。",
    cta: "機能と料金を見る →",
    color: "#8b5cf6",
  },
  {
    // 成果報酬 2,500円
    rk: "0100p0be00ovms",
    badge: "🛠️ 足りない手を外注する",
    badgeColor: "#06b6d4",
    title: "ココナラ（制作物の発注）",
    tagline: "スキルを売り買いできる国内最大級のマーケット",
    desc: "AIで下書きまでは作れても、最後の仕上げは人に頼みたい——そんなときに使えるスキルマーケット。ロゴ・資料・コード・記事などを個人に直接発注できます。",
    cta: "できる人を探す →",
    color: "#06b6d4",
  },
  {
    // 成果報酬 1,980円
    rk: "0100q26900ovms",
    badge: "📊 サイトの改善点を可視化",
    badgeColor: "#22c55e",
    title: "SiteLead（サイトリード）",
    tagline: "ヒートマップ解析｜どこまで読まれたかが見える",
    desc: "訪問者がどこをクリックし、どこで離脱したかを色で可視化できるヒートマップツール。無料プランがあるので、まず自分のサイトで試してから判断できます。",
    cta: "無料プランを見る →",
    color: "#22c55e",
  },
];

/** このセクションのProps */
type AtSectionAiNewsProps = {
  /** 通常グリッドに表示する件数の上限（未指定なら全件表示。注目案件は常に表示） */
  limit?: number;
};

/** アクセストレード広告セクション */
export default function AtSectionAiNews({ limit }: AtSectionAiNewsProps) {
  /** limit 指定時は上位のみ表示（成果報酬の高い順に並んでいる） */
  const shownItems = typeof limit === "number" ? items.slice(0, limit) : items;

  return (
    <section className="py-14 bg-slate-900 border-t border-slate-800">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-10">
          <span className="inline-block text-xs font-bold text-emerald-300 uppercase tracking-widest bg-emerald-300/10 px-4 py-1.5 rounded-full mb-3">
            PR / 広告
          </span>
          <h2 className="text-xl md:text-2xl font-black text-white mb-2">
            AIを「読む側」から「使う側」に回るために
          </h2>
          <p className="text-slate-300 text-sm">学習・自動化・外注｜実務で使える厳選サービス</p>
        </div>

        {/* 注目案件（PCは横1枚・スマホは縦積み） */}
        <a
          href={ccUrl(featured.rk)}
          rel="nofollow sponsored noopener"
          target="_blank"
          referrerPolicy="no-referrer-when-downgrade"
          className="group relative flex flex-col md:flex-row md:items-center gap-4 md:gap-6 p-6 mb-4 rounded-2xl border border-amber-400/40 bg-gradient-to-br from-amber-500/10 to-slate-800/60 hover:border-amber-300/70 hover:-translate-y-0.5 transition-all duration-200"
        >
          {/* アクセストレードのインプレッション計測用1x1画像 */}
          <img
            src={rrUrl(featured.rk)}
            height={1}
            width={1}
            alt=""
            aria-hidden="true"
            className="absolute h-px w-px opacity-0"
          />
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
            <p className="font-black text-white text-lg md:text-xl leading-tight mt-3 break-words">
              {featured.title}
            </p>
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
          {shownItems.map((item) => (
            <a
              key={item.rk}
              href={ccUrl(item.rk)}
              rel="nofollow sponsored noopener"
              target="_blank"
              referrerPolicy="no-referrer-when-downgrade"
              className="group relative flex flex-col gap-3 p-5 rounded-2xl border border-slate-700 bg-slate-800/60 hover:border-slate-500 hover:bg-slate-800 hover:-translate-y-0.5 transition-all duration-200"
            >
              {/* アクセストレードのインプレッション計測用1x1画像 */}
              <img
                src={rrUrl(item.rk)}
                height={1}
                width={1}
                alt=""
                aria-hidden="true"
                className="absolute h-px w-px opacity-0"
              />
              <div>
                <span
                  className="text-xs font-bold px-3 py-1 rounded-full"
                  style={{
                    background: `${item.badgeColor}20`,
                    color: item.badgeColor,
                    border: `1px solid ${item.badgeColor}35`,
                  }}
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

        <p className="text-center text-xs text-slate-300 mt-6">
          ※ 本セクションはPR・広告（アクセストレード）を含みます
        </p>
      </div>
    </section>
  );
}

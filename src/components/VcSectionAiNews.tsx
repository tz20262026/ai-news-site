// バリューコマース経由の広告カード（2026-07-14作成）
// ※ A8の AffiliateSectionAiNews / もしもの MoshimoSectionAiNews とは完全に独立した別セクション。
//    既存の広告リンクには一切手を触れないこと。

/** バリューコマース広告カード1件分の型定義 */
type VcItem = {
  /** バリューコマースのサイトID（sid） */
  sid: string;
  /** バリューコマースの広告リンクID（pid） */
  pid: string;
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

/** バリューコマースの計測用クリックURLを組み立てる */
const refUrl = (sid: string, pid: string): string =>
  `https://ck.jp.ap.valuecommerce.com/servlet/referral?sid=${sid}&pid=${pid}`;

/** バリューコマースのインプレッション計測用1x1 gifのURLを組み立てる */
const impUrl = (sid: string, pid: string): string =>
  `https://ad.jp.ap.valuecommerce.com/servlet/gifbanner?sid=${sid}&pid=${pid}`;

/** 最上位で大きく見せる注目案件（成果報酬が最も高い） */
const featured: VcItem = {
  // 成果報酬 最大26,400円（本セクション最高単価）
  sid: "3775848",
  pid: "892658453",
  badge: "🎓 AI・Webの専門スクール",
  badgeColor: "#f59e0b",
  title: "インターネット・アカデミー",
  tagline: "AI・Webデザイン・プログラミングが学べる老舗スクール",
  desc: "生成AIの活用からWeb制作・プログラミングまで、実務を想定したカリキュラムで学べるスクール。「AIを使う側から作る側へ回りたい」段階の方向けに、無料カウンセリングや説明会が用意されています。",
  cta: "無料カウンセリングを見る →",
  color: "#f59e0b",
};

/** 通常グリッドに並べる案件（成果報酬の高い順） */
const items: VcItem[] = [
  {
    // 成果報酬 17,600円
    sid: "3775848",
    pid: "892658454",
    badge: "⚡ AIツールを常時稼働",
    badgeColor: "#3b82f6",
    title: "ABLENET VPS",
    tagline: "AI関連ツールの常時稼働・自動化処理に使えるVPS",
    desc: "自分のPCを閉じてもプログラムを動かし続けられる仮想サーバー。AIエージェントの常時稼働や定期実行のバッチ処理を置く場所として使われています。",
    cta: "VPSプランを見る →",
    color: "#3b82f6",
  },
  {
    // 成果報酬 7,150円
    sid: "3775848",
    pid: "892658455",
    badge: "🖥️ 情報発信の基盤に",
    badgeColor: "#06b6d4",
    title: "ABLENET レンタルサーバー",
    tagline: "共用サーバー｜AI検証ログの発信基盤に",
    desc: "AIツールの検証メモや使い方の記事を発信するサイトを立てるための共用レンタルサーバー。WordPressにも対応しています。",
    cta: "サーバー詳細を見る →",
    color: "#06b6d4",
  },
  {
    // 成果報酬 最大6,600円
    sid: "3775848",
    pid: "892658458",
    badge: "📶 縛りなしポケットWi-Fi",
    badgeColor: "#22c55e",
    title: "にゃんこWi-Fi",
    tagline: "契約期間の縛りなし・業界最安級のポケットWi-Fi",
    desc: "外出先でAIツールを使う機会が増えた人向けのモバイルWi-Fi。契約期間の縛りがなく、必要な期間だけ使える点が特徴です。",
    cta: "料金プランを確認 →",
    color: "#22c55e",
  },
  {
    // 成果報酬 最大5,500円
    sid: "3775848",
    pid: "892658456",
    badge: "☁️ Windows環境をクラウドに",
    badgeColor: "#8b5cf6",
    title: "お名前.com デスクトップクラウド",
    tagline: "クラウド上のWindowsデスクトップ環境",
    desc: "ブラウザ越しにWindowsのデスクトップを使えるクラウドサービス。手元のPCのスペックに関係なく、重い処理を回したい場面で使えます。",
    cta: "サービス詳細を見る →",
    color: "#8b5cf6",
  },
  {
    // 成果報酬 11%
    sid: "3775848",
    pid: "892658459",
    badge: "🧰 定番PCソフトを揃える",
    badgeColor: "#ef4444",
    title: "ソースネクスト",
    tagline: "翻訳・音声認識・PDF編集などの定番ソフト",
    desc: "AI翻訳や音声認識、PDF編集といった実務ソフトを扱う老舗のダウンロード販売サイト。セール頻度が高いのが特徴です。",
    cta: "ソフト一覧を見る →",
    color: "#ef4444",
  },
  {
    // 成果報酬 最大5.28%
    sid: "3775848",
    pid: "892658460",
    badge: "💻 省スペースな高性能PC",
    badgeColor: "#0ea5e9",
    title: "MINISFORUM 日本公式ストア",
    tagline: "ミニPC専門店｜省スペースで高性能",
    desc: "手のひらサイズながらローカルAIの検証にも耐えるスペックのミニPCを扱う公式ストア。デスクを広く使いたい人にも。",
    cta: "ミニPCを見る →",
    color: "#0ea5e9",
  },
  {
    // 成果報酬 5.5%
    sid: "3775848",
    pid: "892658457",
    badge: "🌐 独自ドメインを取る",
    badgeColor: "#64748b",
    title: "お名前.com",
    tagline: "ドメイン登録数 国内トップクラス",
    desc: "AI関連の情報発信サイトや検証用サイトに独自ドメインを用意したいときの定番。サーバーとまとめて管理できます。",
    cta: "ドメインを検索する →",
    color: "#64748b",
  },
  {
    // 成果報酬 5.24%
    sid: "3775848",
    pid: "892658461",
    badge: "⬇️ ソフトを即ダウンロード",
    badgeColor: "#14b8a6",
    title: "PCソフト ダウンロード販売",
    tagline: "パッケージ不要ですぐ使えるPCソフト",
    desc: "業務ソフトやセキュリティソフトをダウンロードで購入できるストア。届くのを待たずにその場で使い始められます。",
    cta: "ソフトを探す →",
    color: "#14b8a6",
  },
  {
    // 成果報酬 2%
    sid: "3775848",
    pid: "892658463",
    badge: "🛒 ガジェットをまとめ買い",
    badgeColor: "#ec4899",
    title: "Yahoo!ショッピング",
    tagline: "PC周辺機器・ガジェットの総合ネットショッピング",
    desc: "PC周辺機器やAI関連のガジェットを探すならここから。PayPayポイントが貯まる・使える大手ショッピングモールです。",
    cta: "商品を探しに行く →",
    color: "#ec4899",
  },
];

/** このセクションのProps */
type VcSectionAiNewsProps = {
  /** 通常グリッドに表示する件数の上限（未指定なら全件表示。注目案件は常に表示） */
  limit?: number;
};

/** バリューコマース広告セクション */
export default function VcSectionAiNews({ limit }: VcSectionAiNewsProps) {
  /** limit 指定時は上位のみ表示（成果報酬の高い順に並んでいる） */
  const shownItems = typeof limit === "number" ? items.slice(0, limit) : items;

  return (
    <section className="py-14 bg-slate-900 border-t border-slate-800">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-10">
          <span className="inline-block text-xs font-bold text-sky-300 uppercase tracking-widest bg-sky-300/10 px-4 py-1.5 rounded-full mb-3">
            PR / 広告
          </span>
          <h2 className="text-xl md:text-2xl font-black text-white mb-2">
            AIを学ぶ・動かす・発信するための環境づくり
          </h2>
          <p className="text-slate-300 text-sm">スクール・サーバー・PC環境の厳選サービス</p>
        </div>

        {/* 注目案件（PCは横1枚・スマホは縦積み） */}
        <a
          href={refUrl(featured.sid, featured.pid)}
          rel="nofollow sponsored noopener"
          target="_blank"
          className="group relative flex flex-col md:flex-row md:items-center gap-4 md:gap-6 p-6 mb-4 rounded-2xl border border-amber-400/40 bg-gradient-to-br from-amber-500/10 to-slate-800/60 hover:border-amber-300/70 hover:-translate-y-0.5 transition-all duration-200"
        >
          {/* バリューコマースのインプレッション計測用1x1画像 */}
          <img
            src={impUrl(featured.sid, featured.pid)}
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
            <p className="font-black text-white text-lg md:text-xl leading-tight mt-3 break-words">{featured.title}</p>
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
              key={item.pid}
              href={refUrl(item.sid, item.pid)}
              rel="nofollow sponsored noopener"
              target="_blank"
              className="group relative flex flex-col gap-3 p-5 rounded-2xl border border-slate-700 bg-slate-800/60 hover:border-slate-500 hover:bg-slate-800 hover:-translate-y-0.5 transition-all duration-200"
            >
              {/* バリューコマースのインプレッション計測用1x1画像 */}
              <img
                src={impUrl(item.sid, item.pid)}
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
          ※ 本セクションはPR・広告（バリューコマース）を含みます
        </p>
      </div>
    </section>
  );
}

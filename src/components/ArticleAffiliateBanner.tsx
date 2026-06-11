// 記事ページ内アフィリエイトバナー（タグ連動・2カード表示）

const ALL_ITEMS = [
  {
    key: "english",
    tags: ["英語", "海外", "openai", "google", "anthropic", "chatgpt", "claude", "ai", "llm", "海外メディア"],
    href: "https://px.a8.net/svt/ejp?a8mat=4B5RS7+1L5MUQ+40GA+61C2P",
    badge: "🌍 英語でAI情報を収集",
    badgeColor: "#2563eb",
    title: "スパルタ英会話",
    tagline: "英語でAI最新情報を読む｜海外ソース直読みスキル",
    desc: "OpenAI・Google・Anthropicの最新AIニュースは英語が早い。英語力を身につけて一次情報に直接アクセスしよう。",
    cta: "無料体験レッスンを受ける →",
    color: "#2563eb",
  },
  {
    key: "nordvpn",
    tags: ["セキュリティ", "プライバシー", "vpn", "ハッキング", "データ", "情報漏洩", "chatgpt", "ai"],
    href: "https://px.a8.net/svt/ejp?a8mat=4B5RS6+G7GTMA+3YFI+674EQ",
    badge: "🛡️ セキュリティ最強",
    badgeColor: "#4f46e5",
    title: "NordVPN",
    tagline: "世界No.1 VPN｜AIツール安全利用に必須",
    desc: "海外AIサービス・ChatGPT系ツールを安心して使うために。プライバシー保護とログなし方針で情報漏洩リスクをゼロに。",
    cta: "63%オフ・今すぐ保護する →",
    color: "#4f46e5",
  },
  {
    key: "expressvpn",
    tags: ["セキュリティ", "vpn", "海外", "制限", "アクセス", "プライバシー"],
    href: "https://px.a8.net/svt/ejp?a8mat=4B5RS6+G6VE0I+5JSS+5YRHE",
    badge: "⚡ 高速接続",
    badgeColor: "#0891b2",
    title: "ExpressVPN",
    tagline: "高速VPN｜海外AI・テックサービス制限突破",
    desc: "ChatGPTや海外AIツールへの制限なしアクセス。業界最速の接続速度で大容量AIファイル転送もストレスなし。",
    cta: "30日間返金保証で試す →",
    color: "#0891b2",
  },
  {
    key: "xserver",
    tags: ["ブログ", "seo", "メディア", "wordpress", "サーバー", "webサイト", "コンテンツ"],
    href: "https://px.a8.net/svt/ejp?a8mat=4B3G6D+E0VLRM+CO4+61C2Q",
    badge: "🏆 シェアNo.1",
    badgeColor: "#f97316",
    title: "エックスサーバー",
    tagline: "国内最強レンタルサーバー｜AIブログ開設に",
    desc: "AIニュースを発信するブログ・メディアを立ち上げるなら。表示速度・安定性・SEOスコアどれも業界トップ水準。",
    cta: "10日間無料お試し →",
    color: "#f97316",
  },
  {
    key: "saily",
    tags: ["海外", "旅行", "カンファレンス", "ces", "mwc", "出張", "グローバル", "esim"],
    href: "https://px.a8.net/svt/ejp?a8mat=4B5RS6+G994FM+5L2C+5YJRM",
    badge: "✈️ 海外旅行に最適",
    badgeColor: "#059669",
    title: "Saily eSIM",
    tagline: "海外用eSIM｜テックカンファレンス・出張に",
    desc: "CES・MWCなど海外テックイベントに参加するなら。SIMなし・アプリだけで現地データ通信。北米・欧州・アジア対応。",
    cta: "渡航先のプランを確認 →",
    color: "#059669",
  },
  {
    key: "millen",
    tags: ["vpn", "格安", "初心者", "節約", "コスパ"],
    href: "https://px.a8.net/svt/ejp?a8mat=4B5RS6+G53376+3JTE+HV7V6",
    badge: "💡 コスパ重視",
    badgeColor: "#d97706",
    title: "MillenVPN",
    tagline: "格安VPN｜初心者向け・月額176円〜",
    desc: "とにかく安くVPNを始めたい方に。国内最安クラスの月額料金でも接続速度は十分。AI系サービスの安全利用に。",
    cta: "最安プランを見る →",
    color: "#d97706",
  },
];

function pickItems(tags: string[]) {
  const lowerTags = tags.map((t) => t.toLowerCase());

  const scored = ALL_ITEMS.map((item) => ({
    ...item,
    score: item.tags.filter((keyword) =>
      lowerTags.some((tag) => tag.includes(keyword) || keyword.includes(tag))
    ).length,
  }));

  scored.sort((a, b) => b.score - a.score);

  // スコアが高い順に2件。同スコアなら先頭から
  const top = scored.slice(0, 2);

  // スコア0のものしかない場合はデフォルト（英会話＋NordVPN）
  if (top.every((i) => i.score === 0)) {
    return [ALL_ITEMS[0], ALL_ITEMS[1]];
  }

  return top;
}

type Props = { tags: string[] };

export default function ArticleAffiliateBanner({ tags }: Props) {
  const items = pickItems(tags);

  return (
    <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-700/60">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
          PR / 広告
        </span>
        <span className="text-xs text-gray-400 dark:text-gray-500">この記事に関連するおすすめサービス</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {items.map((item) => (
          <a
            key={item.key}
            href={item.href}
            rel="nofollow sponsored noopener"
            target="_blank"
            className="group flex flex-col gap-2.5 p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/60 hover:border-blue-300 dark:hover:border-blue-700 hover:bg-white dark:hover:bg-gray-800 hover:-translate-y-0.5 transition-all duration-200"
          >
            <div>
              <span
                className="text-xs font-bold px-2.5 py-0.5 rounded-full"
                style={{
                  background: `${item.badgeColor}15`,
                  color: item.badgeColor,
                  border: `1px solid ${item.badgeColor}30`,
                }}
              >
                {item.badge}
              </span>
            </div>
            <div>
              <p className="font-bold text-gray-900 dark:text-white text-sm leading-tight">{item.title}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{item.tagline}</p>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed flex-1">{item.desc}</p>
            <span
              className="inline-flex items-center text-xs font-bold py-1.5 px-3 rounded-lg transition-all group-hover:opacity-80 mt-auto"
              style={{
                background: `${item.color}15`,
                color: item.color,
                border: `1px solid ${item.color}25`,
              }}
            >
              {item.cta}
            </span>
          </a>
        ))}
      </div>
      <p className="text-xs text-gray-400 dark:text-gray-600 mt-2">※ 本コンテンツはPR・広告を含みます</p>
    </div>
  );
}

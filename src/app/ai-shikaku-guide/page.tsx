import type { Metadata } from "next";
import Link from "next/link";
import AffiliateSectionAiNews from "@/components/AffiliateSectionAiNews";
import ArticleAffiliateBanner from "@/components/ArticleAffiliateBanner";

const PAGE_URL = "https://ai-news-site-wheat.vercel.app/ai-shikaku-guide";
const PUBLISHED_AT = "2026-07-19";

export const metadata: Metadata = {
  title: "生成AI資格・AI検定 比較ガイド2026年版【生成AIパスポート・G検定・E資格】",
  description:
    "生成AIパスポート・G検定・E資格・AI-900・ITパスポートを2026年版で比較。難易度・受験料の目安・向いている人を解説。文系ビジネスパーソンからエンジニアまで、AI資格の選び方と勉強の進め方がわかります。",
  keywords: [
    "生成AI 資格",
    "生成AIパスポート",
    "G検定 難易度",
    "E資格 とは",
    "AI 資格 おすすめ",
    "AI 検定 種類",
    "AI 資格 文系",
    "AI 勉強 何から",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "生成AI資格・AI検定 比較ガイド2026年版【難易度・選び方】",
    description:
      "生成AIパスポート・G検定・E資格・AI-900・ITパスポートの難易度と選び方を比較。自分に合うAI資格の見つけ方を解説。",
    type: "article",
    locale: "ja_JP",
    url: PAGE_URL,
    publishedTime: PUBLISHED_AT,
  },
  twitter: {
    card: "summary_large_image",
    title: "生成AI資格・AI検定 比較ガイド2026年版",
    description: "生成AIパスポート・G検定・E資格・AI-900の難易度と選び方を比較。",
  },
};

/** AI資格1件分のデータ型 */
interface AiCert {
  name: string;
  icon: string;
  organizer: string;
  level: "入門" | "中級" | "上級";
  summary: string;
  fee: string;
  format: string;
  bestFor: string;
  caution: string;
  tags: string[];
}

/** 勉強の進め方1ステップ分 */
interface StudyStep {
  step: number;
  title: string;
  desc: string;
}

/** よくある質問1件分 */
interface FaqItem {
  q: string;
  a: string;
}

const CERTS: AiCert[] = [
  {
    name: "生成AIパスポート",
    icon: "🎫",
    organizer: "生成AI活用普及協会（GUGA）",
    level: "入門",
    summary:
      "「生成AIを仕事で安全に使えること」を証明する入門資格。ChatGPTなどの基礎知識に加えて、著作権・個人情報・プロンプトの基本といった、企業がいちばん気にする「安全に使うためのリテラシー」が中心。文系・非エンジニアが最初に取る資格として定番になりつつある。",
    fee: "受験料の目安：一般 1万円前後（学生割引あり）",
    format: "オンライン受験（IBT）・年数回開催",
    bestFor: "生成AIを業務で使い始めた社会人・AI活用を社内で推進したい人・就活でAIリテラシーを示したい学生",
    caution: "技術的な深さはないため、エンジニア職のアピールには不向き。上位資格への足がかりと考える。",
    tags: ["文系OK", "オンライン受験", "ビジネス向け"],
  },
  {
    name: "G検定（ジェネラリスト検定）",
    icon: "🧠",
    organizer: "日本ディープラーニング協会（JDLA）",
    summary:
      "AI・ディープラーニングの知識を体系的に問う、日本で最も知名度の高いAI資格のひとつ。機械学習の仕組み・AI関連法規・倫理まで出題範囲が広く、「AIを事業にどう活かすか」を考える立場の人向け。合格者コミュニティがあり企業の評価も安定している。",
    level: "中級",
    fee: "受験料の目安：一般 1.3万円前後（学生割引あり）",
    format: "オンライン受験（自宅可）・年数回開催",
    bestFor: "企画・マネジメント層・AIプロジェクトを推進する立場の人・体系的にAIを学び直したい人",
    caution: "出題範囲が広く、ノー勉強では受からない。公式テキスト＋問題集で1〜2ヶ月の学習を見込む。",
    tags: ["知名度高", "出題範囲広い", "ビジネス＋技術"],
  },
  {
    name: "E資格（エンジニア資格）",
    icon: "⚙️",
    organizer: "日本ディープラーニング協会（JDLA）",
    level: "上級",
    summary:
      "ディープラーニングを実装できるエンジニアであることを証明する上級資格。数学（微分・線形代数）とPython実装まで踏み込み、受験には「JDLA認定プログラム」の修了が必須。AIエンジニアへの転職市場で最も評価される国内資格のひとつ。",
    fee: "受験料の目安：一般 3万円台＋認定プログラム受講費（数万〜十数万円）",
    format: "認定プログラム修了後に受験・年2回程度",
    bestFor: "AIエンジニア・機械学習エンジニアを本気で目指す人・理系学生",
    caution: "認定プログラムの受講が前提のため総費用が大きい。まずG検定で適性を確かめてからが王道。",
    tags: ["エンジニア向け", "実装力", "認定講座必須"],
  },
  {
    name: "AI-900（Azure AI Fundamentals）",
    icon: "☁️",
    organizer: "Microsoft",
    level: "入門",
    summary:
      "Microsoftが提供するクラウドAIの入門認定。機械学習・生成AIの基礎概念と、Azure上のAIサービスの使いどころを問う。世界共通の認定なので外資系・グローバル企業へのアピールに強く、無料の公式学習コンテンツ（Microsoft Learn）だけで合格を狙えるのも魅力。",
    fee: "受験料の目安：1万円台前半（無料受験キャンペーンが行われることもある）",
    format: "テストセンターまたはオンライン受験・随時",
    bestFor: "IT職でクラウドも合わせて学びたい人・外資系志望・英語の教材に抵抗がない人",
    caution: "Azure前提の内容が含まれるため、クラウドを一切使わない人には遠回りになることも。",
    tags: ["国際資格", "無料教材あり", "クラウド"],
  },
  {
    name: "ITパスポート",
    icon: "🇯🇵",
    organizer: "IPA（独立行政法人 情報処理推進機構）",
    level: "入門",
    summary:
      "ITの基礎知識全般を問う国家試験。近年のシラバス改訂でAI・機械学習・生成AIに関する出題が強化された。「AI専門」ではないが、国家資格という安心感と圧倒的な知名度があり、IT基礎＋AIの入り口をまとめて押さえられる。",
    fee: "受験料の目安：7,500円",
    format: "全国のテストセンターで随時受験（CBT）",
    bestFor: "IT知識ゼロから始める人・国家資格の肩書きが欲しい人・新社会人・学生",
    caution: "AIの出題は一部のみ。生成AIを深く学びたいなら生成AIパスポートやG検定と組み合わせる。",
    tags: ["国家試験", "知名度抜群", "IT基礎全般"],
  },
];

const STUDY_STEPS: StudyStep[] = [
  {
    step: 1,
    title: "目的を決める（昇進・転職・リテラシー証明）",
    desc: "「社内でAI活用を主導したい」なら生成AIパスポートかG検定、「AIエンジニアに転職したい」ならE資格、「IT基礎から」ならITパスポート。目的が決まれば資格はほぼ自動的に決まります。",
  },
  {
    step: 2,
    title: "公式テキスト・シラバスを最初に確認する",
    desc: "AI資格は出題範囲の改訂が頻繁です。ネット上の古い勉強法ではなく、必ず主催団体の最新シラバスと公式テキストから始めてください。",
  },
  {
    step: 3,
    title: "問題集を2周してから申し込む",
    desc: "G検定・生成AIパスポートは選択式なので、問題集の正答率が8割を超えたら合格圏です。先に申し込んで締切効果を使うのも有効ですが、受験料が無駄にならないよう腕試しをしてから。",
  },
  {
    step: 4,
    title: "取ったら「使った実績」をセットで作る",
    desc: "資格単体より「資格＋業務での活用実績」が何倍も評価されます。合格したら社内の業務改善やポートフォリオ作りにすぐ使い、履歴書に書ける実績に変えましょう。",
  },
];

const FAQS: FaqItem[] = [
  {
    q: "文系・非エンジニアでも取れるAI資格はありますか？",
    a: "あります。生成AIパスポートとG検定は数学やプログラミングの実装力を問わないため、文系のビジネスパーソンの合格者が多数います。まず生成AIパスポートでAIリテラシーの土台を作り、物足りなければG検定に進むのが定番ルートです。",
  },
  {
    q: "AI資格は転職で本当に評価されますか？",
    a: "職種によります。AIエンジニア職ではE資格やAI-900などの技術系資格が評価される一方、企画・DX推進などのビジネス職ではG検定・生成AIパスポートが「AIの共通言語を持っている」証明として機能します。ただしどの職種でも、資格単体より「資格＋実務での活用経験」の組み合わせが最も評価されます。",
  },
  {
    q: "生成AIパスポートとG検定はどちらを先に受けるべきですか？",
    a: "AI学習が初めてなら生成AIパスポートが先です。出題範囲が生成AIの利活用とリスク管理に絞られており、学習期間も短く済みます。G検定は機械学習の仕組みや法律・倫理まで範囲が広いため、その次のステップに向いています。",
  },
  {
    q: "独学で合格できますか？講座は必要ですか？",
    a: "生成AIパスポート・G検定・ITパスポート・AI-900は公式テキストと問題集による独学合格が十分可能です。例外はE資格で、受験資格としてJDLA認定プログラムの修了が必須のため、講座の受講が避けられません。学習が続かない人や最短で受かりたい人は、入門資格でも講座を使う価値はあります。",
  },
  {
    q: "受験料はどのくらいかかりますか？",
    a: "目安として、ITパスポートが7,500円、生成AIパスポートが1万円前後、G検定が1.3万円前後、AI-900が1万円台前半、E資格が3万円台＋認定プログラム受講費です。料金は改定されることがあるため、申し込み前に必ず各主催団体の公式サイトで最新の金額を確認してください。",
  },
];

/** FAQ構造化データ */
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

/** 記事構造化データ */
const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "生成AI資格・AI検定 比較ガイド2026年版【生成AIパスポート・G検定・E資格】",
  description:
    "生成AIパスポート・G検定・E資格・AI-900・ITパスポートの難易度・受験料の目安・向いている人を比較し、AI資格の選び方と勉強の進め方を解説する。",
  datePublished: PUBLISHED_AT,
  dateModified: PUBLISHED_AT,
  inLanguage: "ja",
  mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
  author: { "@type": "Organization", name: "AI News Japan" },
  publisher: { "@type": "Organization", name: "AI News Japan" },
};

/** レベルバッジの色分け */
const levelColor: Record<AiCert["level"], string> = {
  入門: "bg-green-500/20 text-green-300 border-green-500/30",
  中級: "bg-amber-500/20 text-amber-300 border-amber-500/30",
  上級: "bg-red-500/20 text-red-300 border-red-500/30",
};

export default function AiShikakuGuidePage() {
  return (
    <main className="bg-gray-950 min-h-screen text-gray-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <div className="max-w-3xl mx-auto px-4 py-12">
        {/* ヒーロー */}
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 rounded-full px-4 py-1 mb-4">
            🎓 2026年最新版
          </span>
          <h1 className="text-3xl sm:text-4xl font-black mb-4 leading-tight">
            生成AI資格・AI検定
            <br />
            <span className="text-indigo-300">比較ガイド2026年版</span>
            <br />
            <span className="text-lg sm:text-xl text-gray-300 font-bold">
              【生成AIパスポート・G検定・E資格】
            </span>
          </h1>
          <p className="text-gray-300 text-sm leading-relaxed">
            難易度・受験料の目安・向いている人を比較し、
            <br className="hidden sm:block" />
            自分に合うAI資格の選び方と勉強の進め方をまとめました。
          </p>
          <p className="text-gray-300 text-xs mt-3">公開日：2026年7月19日</p>
        </div>

        {/* 結論を先に置く（AI検索に引用されやすい形） */}
        <section className="mb-12">
          <div className="bg-indigo-900/20 border border-indigo-700/40 rounded-xl p-5">
            <h2 className="text-base font-bold text-indigo-200 mb-3">先に結論</h2>
            <ul className="space-y-2 text-sm text-gray-200 leading-relaxed">
              <li className="flex gap-2">
                <span className="text-indigo-300 flex-shrink-0">▸</span>
                <span>
                  <strong className="text-white">非エンジニアが最初に取るなら生成AIパスポート。</strong>
                  生成AIを安全に業務で使うリテラシーの証明として、いま一番選ばれている入門資格。
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-indigo-300 flex-shrink-0">▸</span>
                <span>
                  <strong className="text-white">知名度と評価の安定感ならG検定。</strong>
                  企画・マネジメント層がAIを体系的に学んだ証明になる。学習期間は1〜2ヶ月が目安。
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-indigo-300 flex-shrink-0">▸</span>
                <span>
                  <strong className="text-white">AIエンジニアを目指すならE資格。</strong>
                  ただし認定講座の受講が必須で費用も大きい。まずG検定で適性を確認してから。
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-indigo-300 flex-shrink-0">▸</span>
                <span>
                  <strong className="text-white">資格はゴールではなく「実績を作るための入場券」。</strong>
                  合格したらすぐ業務やポートフォリオで使い、履歴書に書ける実績に変える。
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* 資格比較 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-6 border-l-4 border-indigo-500 pl-3">
            🎓 主要AI資格5選【難易度・費用・向いている人を比較】
          </h2>
          <div className="space-y-4">
            {CERTS.map((cert) => (
              <div key={cert.name} className="bg-gray-900 border border-gray-700 rounded-xl p-5">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="text-xl">{cert.icon}</span>
                  <h3 className="text-white font-black text-sm">{cert.name}</h3>
                  <span
                    className={`text-xs font-bold px-2 py-0.5 rounded-full border ${levelColor[cert.level]}`}
                  >
                    難易度：{cert.level}
                  </span>
                </div>

                <p className="text-gray-300 text-xs mb-2">主催：{cert.organizer}</p>

                <div className="flex flex-wrap gap-1.5 mb-3">
                  {cert.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-indigo-900/20 text-indigo-300 border border-indigo-700/30 px-2 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-gray-300 text-sm leading-relaxed mb-3">{cert.summary}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs mb-3">
                  <div className="bg-green-900/10 border border-green-700/20 rounded px-2.5 py-1.5">
                    <span className="text-green-300 font-bold">💰 </span>
                    <span className="text-gray-200">{cert.fee}</span>
                  </div>
                  <div className="bg-gray-800 rounded px-2.5 py-1.5">
                    <span className="text-gray-300 font-bold">📝 </span>
                    <span className="text-gray-200">{cert.format}</span>
                  </div>
                </div>

                <div className="bg-gray-800 rounded px-2.5 py-1.5 text-xs mb-2">
                  <span className="text-gray-300">👤 向いている人：</span>
                  <span className="text-gray-200">{cert.bestFor}</span>
                </div>
                <div className="bg-amber-900/10 border border-amber-700/20 rounded px-2.5 py-1.5 text-xs">
                  <span className="text-amber-300 font-bold">⚠️ 注意：</span>
                  <span className="text-gray-200">{cert.caution}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-300 text-xs mt-4 leading-relaxed">
            ※受験料・開催形式は主催団体の都合で変更されます。申し込み前に必ず各公式サイトで最新の内容を確認してください。
          </p>
        </section>

        {/* 中間アフィリエイト（学習・キャリア系にマッチ） */}
        <ArticleAffiliateBanner tags={["副業", "フリーランス", "エンジニア"]} />

        {/* 勉強の進め方 */}
        <section className="my-12">
          <h2 className="text-xl font-bold text-white mb-6 border-l-4 border-indigo-500 pl-3">
            🪜 AI資格の勉強を始める4ステップ
          </h2>
          <p className="text-gray-300 text-sm leading-relaxed mb-5">
            AI資格でいちばん多い失敗は「なんとなく有名だから」で選んで挫折すること。
            先に目的を固定してから資格を選ぶと、学習も申し込みも迷いません。
          </p>
          <div className="space-y-3">
            {STUDY_STEPS.map(({ step, title, desc }) => (
              <div key={step} className="flex gap-4 bg-gray-900 border border-gray-700 rounded-xl p-4">
                <div className="w-9 h-9 rounded-full bg-indigo-500 text-white font-black text-sm flex items-center justify-center flex-shrink-0">
                  {step}
                </div>
                <div className="flex-1">
                  <p className="font-bold text-white text-sm mb-1">{title}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 注意点 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-6 border-l-4 border-red-500 pl-3">
            ⚠️ 申し込む前に確認すべきこと
          </h2>
          <div className="bg-red-900/10 border border-red-700/30 rounded-xl p-5 space-y-3">
            <div>
              <p className="font-bold text-red-200 text-sm mb-1">「資格だけ」では仕事は来ない</p>
              <p className="text-gray-300 text-sm leading-relaxed">
                AI資格は運転免許のような独占資格ではなく、知識の証明です。転職・昇進で効かせるには、資格取得後に業務改善・ポートフォリオ・副業案件など「使った実績」を必ずセットで作ってください。
              </p>
            </div>
            <div>
              <p className="font-bold text-red-200 text-sm mb-1">高額な「資格保証付き講座」は中身を確認する</p>
              <p className="text-gray-300 text-sm leading-relaxed">
                E資格以外は独学合格が十分可能です。数十万円の講座に申し込む前に、公式テキストでの独学と比べて何が上乗せされるのか（質問対応・転職支援など）を具体的に確認しましょう。
              </p>
            </div>
            <div>
              <p className="font-bold text-red-200 text-sm mb-1">シラバス改訂のタイミングに注意</p>
              <p className="text-gray-300 text-sm leading-relaxed">
                生成AI分野は変化が速く、出題範囲の改訂が頻繁にあります。中古の古いテキストで勉強すると範囲がズレることがあるため、テキストは最新版を使ってください。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-6 border-l-4 border-indigo-500 pl-3">
            よくある質問
          </h2>
          <div className="space-y-3">
            {FAQS.map(({ q, a }) => (
              <div key={q} className="bg-gray-900 border border-gray-700 rounded-xl p-5">
                <p className="font-bold text-white text-sm mb-2">Q. {q}</p>
                <p className="text-gray-300 text-sm leading-relaxed">A. {a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 内部リンク */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-6 border-l-4 border-blue-500 pl-3">
            あわせて読みたい
          </h2>
          <p className="text-gray-300 text-sm leading-[1.9]">
            AIをこれから学ぶ人はまず
            <Link href="/ai-beginner-guide" className="text-blue-300 hover:underline">
              AI初心者完全ガイド
            </Link>
            で全体像をつかむのがおすすめです。資格を仕事につなげたい人は
            <Link href="/ai-fukugyou" className="text-blue-300 hover:underline">
              AI副業ガイド
            </Link>
            と
            <Link href="/ai-business-guide" className="text-blue-300 hover:underline">
              AI業務活用ガイド
            </Link>
            が実践編になります。日々のツール操作に慣れるなら
            <Link href="/chatgpt-guide" className="text-blue-300 hover:underline">
              ChatGPT使い方ガイド
            </Link>
            もどうぞ。
          </p>
        </section>

        <AffiliateSectionAiNews />
      </div>
    </main>
  );
}

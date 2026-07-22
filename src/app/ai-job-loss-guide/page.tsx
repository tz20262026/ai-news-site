import type { Metadata } from "next";
import Link from "next/link";
import AtSectionAiNews from "@/components/AtSectionAiNews";

export const metadata: Metadata = {
  title: "AIに仕事を奪われる不安、どう備える？【2026年版・職種別リスクと対策】| AI最新情報",
  description:
    "AIで無くなる仕事・残る仕事を職種別に整理し、2026年に今すぐできる備え方を解説。リスキリング・キャリアチェンジ・独立の3方向から現実的な選択肢をまとめました。",
  keywords: [
    "AI 仕事 奪われる",
    "AI失業 対策",
    "AIに仕事を奪われない方法",
    "AI 無くなる仕事 2026",
    "AI リスキリング",
    "AI時代 キャリア",
  ],
  alternates: {
    canonical: "https://ai-news-site-wheat.vercel.app/ai-job-loss-guide",
  },
  openGraph: {
    title: "AIに仕事を奪われる不安、どう備える？【2026年版】",
    description: "AIで無くなる仕事・残る仕事を職種別に整理し、今すぐできる備え方を解説。",
    type: "article",
    locale: "ja_JP",
    siteName: "AI最新情報",
  },
  twitter: {
    card: "summary_large_image",
    title: "AIに仕事を奪われる不安、どう備える？【2026年版】",
    description: "AIで無くなる仕事・残る仕事を職種別に整理し、今すぐできる備え方を解説。",
  },
};

interface RiskRow {
  job: string;
  risk: "高" | "中" | "低";
  reason: string;
}

interface FaqItem {
  q: string;
  a: string;
}

const RISK_TABLE: RiskRow[] = [
  { job: "データ入力・単純事務", risk: "高", reason: "定型作業はAI-OCR・RPAとの相性が最も良く、既に置き換えが進行中" },
  { job: "翻訳・簡易ライティング", risk: "高", reason: "生成AIの精度が実務水準に達し、下訳・量産記事の需要が縮小" },
  { job: "テレアポ・一次対応の電話応対", risk: "高", reason: "音声AIによる自動応答が急速に実用レベルに到達" },
  { job: "経理・記帳の定型処理", risk: "中", reason: "クラウド会計×AIで自動化が進むが、判断・例外対応は当面人が必要" },
  { job: "プログラマー（実装工程）", risk: "中", reason: "AIがコード生成を担う比率が上昇するが、要件定義・設計は人材需要が続く" },
  { job: "営業・カスタマーサクセス", risk: "低", reason: "関係構築・交渉・信頼形成はAI代替が難しい領域として残りやすい" },
  { job: "介護・保育・対人ケア", risk: "低", reason: "身体的ケアと情緒的サポートはAI代替の優先度が低い" },
  { job: "マネジメント・意思決定職", risk: "低", reason: "責任を伴う最終判断は当面人間が担う構造が続く見込み" },
];

const FAQ: FaqItem[] = [
  {
    q: "AIに仕事を奪われるという不安は大げさですか？",
    a: "職種によって温度差があります。定型的・反復的な作業ほどリスクは高く、対人折衝や身体的ケアを伴う仕事は当面残りやすい傾向にあります。「全部なくなる」ではなく「業務の一部がAIに置き換わり、残った部分の価値が上がる」という見方が実態に近いです。",
  },
  {
    q: "今の仕事がリスク高だった場合、何から始めればいいですか？",
    a: "いきなり転職より、今の仕事を続けながら①AIツールを使いこなすスキルを身につける（社内での価値が上がる） ②並行してリスキリングで次の選択肢を作る、の二段構えが現実的です。無料相談ができるスクールやキャリア相談窓口をまず1つ利用してみるのがおすすめです。",
  },
  {
    q: "文系・未経験でもAI関連のスキルは身につけられますか？",
    a: "はい。ノーコード・プロンプト活用・AIツール運用といった領域は非エンジニアでも参入しやすく、実際に未経験からのキャリアチェンジ事例も増えています。まずは無料カウンセリングで自分に合う学習ルートを相談するのが近道です。",
  },
];

export default function AiJobLossGuidePage() {
  return (
    <div className="min-h-screen bg-[#0d1117]">
      <div
        className="fixed top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] pointer-events-none opacity-8"
        style={{
          background: "radial-gradient(ellipse, #f59e0b 0%, #ef4444 50%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "AIに仕事を奪われる不安、どう備える？【2026年版】",
            description: "AIで無くなる仕事・残る仕事を職種別に整理し、今すぐできる備え方を解説。",
            author: { "@type": "Organization", name: "AI最新情報" },
            datePublished: "2026-07-22",
            dateModified: "2026-07-22",
            url: "https://ai-news-site-wheat.vercel.app/ai-job-loss-guide",
          }),
        }}
      />
      <div className="relative z-10 max-w-4xl mx-auto px-4 pt-24 pb-20">
        <nav className="flex items-center gap-2 text-sm text-gray-300 mb-8">
          <Link href="/" className="hover:text-gray-300 transition-colors">トップ</Link>
          <span>/</span>
          <span className="text-gray-300">AIに仕事を奪われる不安、どう備える？</span>
        </nav>
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-sm font-semibold text-amber-400 mb-6">
            ⚠️ AI時代のキャリア 2026年版
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight mb-4">
            AIに仕事を奪われる不安、
            <span className="block text-xl sm:text-3xl mt-2 font-bold" style={{
              background: "linear-gradient(135deg, #f59e0b, #ef4444)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              どう備える？【職種別リスクと対策】
            </span>
          </h1>
          <p className="text-gray-300 text-base leading-relaxed mb-4">
            「自分の仕事、いつかAIに置き換わるのでは」という不安は多くの人が感じています。本記事では職種別のリスク度を整理したうえで、今すぐ始められる現実的な備え方を3方向から紹介します。
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <span>📅 2026年7月22日</span>
            <span>⏱️ 読了時間：約8分</span>
          </div>
        </div>

        <section className="mb-14">
          <h2 className="text-2xl font-black text-white mb-6">📊 職種別・AI代替リスク早見表</h2>
          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-white/[0.06]">
                  <th className="text-left px-4 py-3 text-gray-300 font-bold">職種・業務</th>
                  <th className="text-left px-4 py-3 text-gray-300 font-bold">リスク</th>
                  <th className="text-left px-4 py-3 text-gray-300 font-bold hidden sm:table-cell">理由</th>
                </tr>
              </thead>
              <tbody>
                {RISK_TABLE.map((row, i) => (
                  <tr key={i} className="border-t border-white/5 hover:bg-white/[0.02] transition-colors">
                    <td className="px-4 py-3 font-bold text-white">{row.job}</td>
                    <td className="px-4 py-3 font-bold" style={{ color: row.risk === "高" ? "#ef4444" : row.risk === "中" ? "#f59e0b" : "#22c55e" }}>
                      {row.risk}
                    </td>
                    <td className="px-4 py-3 text-gray-300 hidden sm:table-cell">{row.reason}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-600 mt-3">※あくまで一般的な傾向の目安であり、個々の企業・業務内容によって変わります。</p>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-black text-white mb-6">🛡️ 今すぐできる備え方・3つの方向</h2>
          <div className="space-y-6">
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <h3 className="text-lg font-black text-white mb-2">① 今の仕事の中でAI活用スキルを身につける</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                転職しなくても、今の業務でAIツールを使いこなせる人材になることが最初の防衛線です。「AIに仕事を奪われる人」ではなく「AIを使って成果を出す人」というポジションに移ることで、社内での価値が上がります。
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <h3 className="text-lg font-black text-white mb-2">② リスキリングで次の選択肢を増やす</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                プログラミング・Web制作・データ分析など、AI時代でも需要が続きやすい分野を並行して学ぶことで、今の仕事がどうなっても動ける状態を作れます。まずは無料カウンセリングや説明会で「自分に合うか」を確認するのが失敗しない進め方です。
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <h3 className="text-lg font-black text-white mb-2">③ 今の環境が限界なら、環境ごと変える</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                会社の方針でAI活用が進まない、相談しても変わらない——そんな場合は転職やキャリアチェンジも選択肢です。退職の意思表示自体がストレスで動けない場合は、退職代行のようなサービスで環境を変える一歩を後押ししてもらう方法もあります。
              </p>
            </div>
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-black text-white mb-6">❓ よくある質問</h2>
          <div className="space-y-4">
            {FAQ.map((item, i) => (
              <div key={i} className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
                <p className="font-bold text-white mb-2">Q. {item.q}</p>
                <p className="text-sm text-gray-300 leading-relaxed">A. {item.a}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="rounded-2xl p-8 text-center mb-10" style={{ background: "linear-gradient(135deg, rgba(245,158,11,0.12), rgba(239,68,68,0.12))", border: "1px solid rgba(245,158,11,0.25)" }}>
          <p className="text-gray-300 text-sm mb-2">AIを味方につけて稼ぐ方法も見てみよう</p>
          <h2 className="text-2xl font-black text-white mb-4">AIを使った副業5選【2026年版】</h2>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/ai-side-job" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-black text-base text-[#0d1117] bg-amber-400 hover:bg-amber-300 transition-all hover:-translate-y-0.5 shadow-lg">
              💰 AI副業ガイドを見る
            </Link>
            <Link href="/ai-tools-comparison" className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-sm border border-white/20 text-gray-300 hover:border-white/40 hover:text-white transition-all">
              🤖 AIツール徹底比較
            </Link>
          </div>
        </div>
      </div>
      <AtSectionAiNews />
    </div>
  );
}

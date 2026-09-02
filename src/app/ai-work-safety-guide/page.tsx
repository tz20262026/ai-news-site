import type { Metadata } from "next";
import Link from "next/link";
import AffiliateSectionAiNews from "@/components/AffiliateSectionAiNews";

export const metadata: Metadata = {
  title: "生成AIを仕事で使うときの注意点2026【情報漏洩・著作権・ハルシネーション対策】",
  description:
    "会社や副業で生成AI（ChatGPT・Gemini・Claudeなど）を使う前に知っておきたいリスクと対策を2026年版で解説。社外秘の入力を避ける方法、学習利用のオプトアウト、ハルシネーションのファクトチェック、生成物の著作権・商用利用、利用規約違反、社内チェックリストまで網羅。",
  keywords: [
    "生成AI 注意点",
    "ChatGPT 情報漏洩",
    "AI 著作権 商用利用",
    "ハルシネーション 対策",
    "生成AI 仕事 リスク",
    "AI 利用規約",
    "会社 ChatGPT 禁止",
    "AI 個人情報 入力",
  ],
  openGraph: {
    title: "生成AIを仕事で使うときの注意点2026【情報漏洩・著作権・ハルシネーション対策】",
    description:
      "会社・副業で生成AIを使う前に知っておくべきリスクと対策。社外秘の扱い、学習オプトアウト、ファクトチェック、著作権、規約違反を解説。",
    type: "article",
    locale: "ja_JP",
    url: "https://ai-news-site-wheat.vercel.app/ai-work-safety-guide",
    images: [
      { url: "https://ai-news-site-wheat.vercel.app/opengraph-image", width: 1200, height: 630, alt: "生成AIを仕事で使うときの注意点2026" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "生成AIを仕事で使うときの注意点2026",
    description: "情報漏洩・ハルシネーション・著作権・規約違反。仕事でAIを使う前のリスクと対策。",
    images: ["https://ai-news-site-wheat.vercel.app/opengraph-image"],
  },
  alternates: { canonical: "https://ai-news-site-wheat.vercel.app/ai-work-safety-guide" },
};

interface Risk {
  no: string;
  icon: string;
  title: string;
  body: string;
  actions: string[];
}

const RISKS: Risk[] = [
  {
    no: "01",
    icon: "🔒",
    title: "情報漏洩：社外秘・個人情報を入力しない",
    body:
      "無料版の生成AIに入力した内容は、サービス改善（モデルの学習）に使われる場合があります。顧客リスト、未公開の財務数値、ソースコード、契約書、他人の個人情報などをそのまま貼り付けると、意図せず情報が外部に出るリスクがあります。過去には、社員が社内の機密コードを生成AIに貼り付けて問題になった事例も報じられています。",
    actions: [
      "実名・住所・電話番号・マイナンバー・口座番号などは伏せ字にしてから入力する",
      "設定画面で「チャット履歴とトレーニング（学習利用）」をオフにする、または法人向けプラン（学習に使われない契約）を使う",
      "社外秘のコード・資料は要点だけを一般化して質問し、原文は貼らない",
      "会社に生成AIの利用ルール（ガイドライン）があるか確認し、なければ上長に相談する",
      "公共のPCや共有アカウントでログインしたまま離席しない",
    ],
  },
  {
    no: "02",
    icon: "🌀",
    title: "ハルシネーション：AIは自信満々に間違える",
    body:
      "生成AIは「それらしい文章」を作るのが得意で、事実かどうかは保証しません。存在しない論文・判例・製品名・統計を、本当らしい体裁で出力することがあります（ハルシネーション＝もっともらしい嘘）。そのままレポートや提案書に使うと、信用を失いかねません。",
    actions: [
      "数字・固有名詞・日付・法律・医療・お金に関わる記述は、必ず一次情報（公式サイト・原典）で裏を取る",
      "「出典を教えて」と聞き、示されたURLや書名が実在するか自分で確認する",
      "重要な資料は、別のAIや検索でクロスチェックする",
      "AIの回答は「下書き・たたき台」と位置づけ、最終判断は人間が行う",
      "社外に出す文書は、AI生成部分も含めて必ず担当者が読み直す",
    ],
  },
  {
    no: "03",
    icon: "©️",
    title: "著作権・商用利用：生成物をそのまま売れるとは限らない",
    body:
      "生成AIが作った文章・画像・音楽・コードには、既存の著作物と偶然よく似たものが混ざる可能性があります。特定の作家名・作品名・ブランド名を指定して「そっくりに作って」と依頼した生成物を商用利用すると、著作権・商標のトラブルになるおそれがあります。生成AIの出力そのものの権利の扱いは、利用するサービスの規約や国によって異なります。",
    actions: [
      "利用するAIサービスの利用規約で「生成物の商用利用が可能か」「権利は誰に帰属するか」を確認する",
      "実在の作家・イラストレーター・キャラクター・ブランドを名指しした模倣依頼は避ける",
      "納品前に、画像は画像検索、文章はコピペチェックツールで既存物との類似を確認する",
      "クライアントワークでは「一部にAIを使用しています」と事前に伝え、契約書で扱いを明確にする",
      "ロゴ・商標・キャッチコピーなど「唯一性」が重要な用途は、専門家（弁理士・デザイナー）のチェックを入れる",
    ],
  },
  {
    no: "04",
    icon: "📜",
    title: "利用規約違反：禁止されている使い方がある",
    body:
      "各社の生成AIには利用規約があり、違法行為の支援、他人へのなりすまし、大量のスパム生成、特定の医療・法律アドバイスの提供、年齢制限のある内容などが禁止されています。規約違反はアカウント停止のリスクがあり、業務で使っている場合は影響が大きくなります。",
    actions: [
      "使うサービスの「利用ポリシー / Usage Policy」に一度は目を通す",
      "自動化ツールでAPIを大量に叩く場合は、レート制限と禁止用途を必ず確認する",
      "AIが出力した内容を「専門家の助言」として第三者に提供しない（医療・法律・投資など）",
      "生成物を人間が書いたものと偽って提出しない（学術・応募規定で禁止されている場合がある）",
    ],
  },
  {
    no: "05",
    icon: "⚖️",
    title: "バイアス・不適切表現：出力をうのみにしない",
    body:
      "生成AIは学習データの偏りを反映することがあり、性別・国籍・年齢・職業などについて偏った表現や、誤解を招く言い回しを出すことがあります。採用・評価・広告など、人の判断に関わる場面でそのまま使うと差別的と受け取られるおそれがあります。",
    actions: [
      "採用選考・人事評価そのものをAIに丸投げしない（補助にとどめる）",
      "広告・SNS投稿は公開前に、特定の属性をおとしめる表現がないか人がチェックする",
      "「中立的に」「複数の立場を併記して」と指示し、断定を避ける",
    ],
  },
];

const CHECKLIST = [
  "会社に生成AIの利用ガイドラインがあるか確認した",
  "無料版の学習利用（トレーニング）設定をオフにした、または法人プランを使っている",
  "社外秘・個人情報・パスワード・コード全文は入力していない",
  "社外に出す文書は、AI生成部分も人が読み直している",
  "数字・固有名詞・法律・お金の記述は一次情報で裏を取った",
  "生成画像・文章の既存物との類似をチェックした",
  "使っているAIサービスの利用規約・商用利用条件を確認した",
  "クライアントにAI使用の有無を必要に応じて開示している",
  "公共・共有環境でログインしたまま離席していない",
  "AIの回答は最終決定ではなく『たたき台』として扱っている",
];

const FAQ = [
  {
    q: "会社のPCでChatGPTを使うのは禁止ですか？",
    a: "会社によります。多くの企業は「社外秘・個人情報を入力しない」「業務利用は所定のプラン・ツールに限る」といったルールを設けています。まず自社に生成AIの利用ガイドラインがあるか確認し、なければ勝手に判断せず上長や情報システム部門に相談してください。禁止されていない場合でも、学習利用をオフにする・機密情報を入れないという基本は必ず守りましょう。",
  },
  {
    q: "入力した内容はAIに学習されてしまいますか？",
    a: "無料版・個人向けプランでは、入力内容がモデルの改善（学習）に使われる場合があります。多くのサービスは設定画面から学習利用をオフにでき、法人向けプランやAPIでは原則として学習に使われない契約になっています。重要なのは、オフにしていても「機密情報は入れない」を徹底することです。",
  },
  {
    q: "AIが作った文章や画像は、そのまま仕事の成果物として使えますか？",
    a: "サービスの規約で商用利用が認められていれば使えますが、既存の著作物と似ていないか、実在の人物・ブランドを模倣していないかの確認は必要です。クライアントワークでは、AIを使ったことを伝え、契約書で権利の扱いを明確にしておくとトラブルを避けられます。",
  },
  {
    q: "AIの回答が正しいかどうか、どう見分ければいいですか？",
    a: "見た目では見分けられません。数字・固有名詞・日付・出典は必ず一次情報（公式サイトや原典）で確認してください。「出典を教えて」と聞いても、AIが実在しないURLや書名を出すことがあるため、示されたリンクを自分で開いて存在を確かめることが大切です。",
  },
  {
    q: "副業でAIを使って記事や画像を納品しても大丈夫ですか？",
    a: "クラウドソーシングなどでは、規約でAI生成物の扱いが定められている場合があります。募集要項を確認し、AIの使用可否・開示の要否をチェックしてください。納品物の権利がクライアントに移る契約が多いため、AI由来の権利リスク（既存物との類似など）は自分側で下読みしておくと安全です。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export default function AIWorkSafetyGuidePage() {
  return (
    <div className="bg-slate-950 min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <div className="max-w-4xl mx-auto py-8 px-4 space-y-14">
        {/* ヒーロー */}
        <section className="text-center space-y-5 pt-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold border border-amber-400 bg-amber-800 text-amber-100">
            ⚠️ 仕事で使う前に読む
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white leading-tight">
            生成AIを仕事で使うときの注意点2026
            <br />
            <span className="text-cyan-400">【情報漏洩・著作権・ハルシネーション対策】</span>
          </h1>
          <p className="text-slate-200 text-base max-w-2xl mx-auto leading-relaxed">
            ChatGPT・Gemini・Claudeなどの生成AIを会社や副業で使う人が急増しています。
            便利な一方で、情報漏洩・誤情報・著作権・規約違反といったリスクもあります。
            このガイドは、トラブルを避けて安全に使うための「やってはいけないこと」と対策をまとめた実務チェック集です。
          </p>
          <p className="text-slate-300 text-xs">最終更新：2026年9月2日</p>
        </section>

        {/* リスク5つ */}
        <section className="space-y-6">
          <h2 className="text-2xl font-black text-white border-l-4 border-cyan-500 pl-3">
            仕事で生成AIを使うときの5大リスクと対策
          </h2>
          {RISKS.map((r) => (
            <div key={r.no} className="bg-slate-800 border border-slate-600 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-black text-slate-400">RISK {r.no}</span>
                <span className="text-2xl">{r.icon}</span>
                <h3 className="text-lg font-black text-white">{r.title}</h3>
              </div>
              <p className="text-slate-200 text-sm leading-relaxed mb-4">{r.body}</p>
              <div className="bg-slate-900 border border-slate-700 rounded-xl p-4">
                <p className="text-cyan-300 text-xs font-black mb-2">✅ 対策</p>
                <ul className="space-y-1.5">
                  {r.actions.map((a, i) => (
                    <li key={i} className="text-slate-200 text-sm leading-relaxed">・{a}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </section>

        {/* チェックリスト */}
        <section className="space-y-4">
          <h2 className="text-2xl font-black text-white border-l-4 border-cyan-500 pl-3">
            会社でAIを使う前の10項目チェックリスト
          </h2>
          <div className="bg-slate-800 border border-slate-600 rounded-2xl p-6">
            <ul className="space-y-2.5">
              {CHECKLIST.map((c, i) => (
                <li key={i} className="flex gap-3 text-slate-200 text-sm leading-relaxed">
                  <span className="text-cyan-400 font-black">{String(i + 1).padStart(2, "0")}</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 副業の場合 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-black text-white border-l-4 border-cyan-500 pl-3">
            副業でAIを使うときに追加で気をつけること
          </h2>
          <div className="bg-slate-800 border border-slate-600 rounded-2xl p-6 space-y-3 text-slate-200 text-sm leading-relaxed">
            <p>
              <span className="text-white font-bold">① 募集要項のAI規定を確認する。</span>
              クラウドソーシングやコンペでは「AI生成物の納品可否」「使用の申告義務」が定められていることがあります。違反すると報酬未払いやアカウント停止につながります。
            </p>
            <p>
              <span className="text-white font-bold">② 納品物の権利リスクは自分で下読みする。</span>
              多くの契約で成果物の権利はクライアントに移ります。AI由来の類似・模倣リスクは発注者ではなく受注者側の責任とされがちなので、画像検索・コピペチェックは自分でかけておきます。
            </p>
            <p>
              <span className="text-white font-bold">③ 情報管理を分ける。</span>
              複数のクライアントの情報を同じチャットに混ぜない。案件ごとに会話を分け、終わったら履歴を消す運用が安全です。
            </p>
            <p>
              <span className="text-white font-bold">④ 収入が増えたら確定申告。</span>
              AI副業でも、給与以外の所得が年間20万円を超えると原則として確定申告が必要です。レシートや売上の記録は早めにアプリなどで管理しておくと後がラクです。
            </p>
          </div>
        </section>

        {/* 中間アフィリエイト導線 */}
        <AffiliateSectionAiNews />

        {/* FAQ */}
        <section className="space-y-4">
          <h2 className="text-2xl font-black text-white border-l-4 border-cyan-500 pl-3">
            よくある質問（FAQ）
          </h2>
          <div className="space-y-3">
            {FAQ.map(({ q, a }) => (
              <div key={q} className="bg-slate-800 border border-slate-600 rounded-xl p-5">
                <p className="font-black text-white text-sm mb-2">Q. {q}</p>
                <p className="text-slate-200 text-sm leading-relaxed">A. {a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* まとめ */}
        <section className="bg-slate-800 border border-slate-600 rounded-2xl p-6 space-y-3">
          <h2 className="font-black text-white text-lg">まとめ：3つの原則だけは必ず守る</h2>
          <p className="text-slate-200 text-sm leading-relaxed">
            細かい対策はたくさんありますが、覚えておくべき原則は3つです。
            <span className="text-white font-bold">①機密情報を入れない ②出力をうのみにせず人が確認する ③使うサービスの規約を読む</span>。
            この3点を守るだけで、仕事で起きるAIトラブルの大半は防げます。会社にルールがなければ、この記事のチェックリストをたたき台に整備を提案してみてください。
          </p>
        </section>

        {/* 関連ガイド */}
        <section className="bg-slate-800 border border-slate-600 rounded-2xl p-6 space-y-4">
          <h2 className="font-black text-white text-lg">関連ガイドも読む</h2>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/ai-business-guide" className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm transition-all hover:opacity-90 bg-blue-700 text-white border border-blue-500">
              AIビジネス活用ガイドへ →
            </Link>
            <Link href="/ai-side-job" className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm transition-all hover:opacity-90 bg-emerald-700 text-white border border-emerald-500">
              AI副業ガイドへ →
            </Link>
            <Link href="/chatgpt-guide" className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm transition-all hover:opacity-90 bg-slate-700 text-white border border-slate-500">
              ChatGPT完全ガイドへ →
            </Link>
          </div>
        </section>

        <AffiliateSectionAiNews />
      </div>
    </div>
  );
}

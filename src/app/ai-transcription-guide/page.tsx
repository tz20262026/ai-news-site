import type { Metadata } from "next";
import Link from "next/link";
import AffiliateSectionAiNews from "@/components/AffiliateSectionAiNews";

const PAGE_URL = "https://ai-news-site-wheat.vercel.app/ai-transcription-guide";
const PUBLISHED_AT = "2026-07-14";

export const metadata: Metadata = {
  title: "AI文字起こし・議事録ツール比較2026年版【Whisper・Notta・Rimo Voice・tl;dv】",
  description:
    "AI文字起こし・議事録ツールを2026年版で比較。Whisper・Notta・Rimo Voice・tl;dv・Teams/Meet標準機能の日本語精度・料金・無料枠・話者分離の有無を解説。会議の議事録を自動化する手順と、機密情報を扱う際の注意点まで。",
  keywords: [
    "AI 文字起こし",
    "議事録 AI",
    "文字起こし 無料",
    "Whisper 使い方",
    "Notta 料金",
    "Rimo Voice",
    "会議 議事録 自動",
    "文字起こし 精度 比較",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "AI文字起こし・議事録ツール比較2026年版【日本語精度・料金・無料枠】",
    description:
      "Whisper・Notta・Rimo Voice・tl;dv・Teams標準機能を比較。日本語の精度・話者分離・無料枠の違いと、議事録を自動化する手順を解説。",
    type: "article",
    locale: "ja_JP",
    url: PAGE_URL,
    publishedTime: PUBLISHED_AT,
  },
  twitter: {
    card: "summary_large_image",
    title: "AI文字起こし・議事録ツール比較2026年版",
    description: "Whisper・Notta・Rimo Voice・tl;dvの日本語精度・料金・無料枠を比較。",
  },
};

/** 文字起こしツール1件分のデータ型 */
interface TranscriptionTool {
  name: string;
  icon: string;
  summary: string;
  freePlan: string;
  paidPlan: string;
  speakerSeparation: "対応" | "一部対応" | "非対応";
  bestFor: string;
  caution: string;
  tags: string[];
}

/** 議事録自動化の手順1ステップ分 */
interface FlowStep {
  step: number;
  title: string;
  desc: string;
}

/** よくある質問1件分 */
interface FaqItem {
  q: string;
  a: string;
}

const TOOLS: TranscriptionTool[] = [
  {
    name: "Whisper（OpenAI）",
    icon: "🧠",
    summary:
      "OpenAIが公開している音声認識モデル。APIとして使うか、自分のPCにインストールして使う。ツールというより「部品」に近く、そのままでは議事録の形にはならない。",
    freePlan: "ローカル実行なら無料（自分のPCで動かす場合・GPU推奨）",
    paidPlan: "API利用は従量課金（音声の長さに応じて課金）",
    speakerSeparation: "非対応",
    bestFor: "コストを抑えて大量の音声を処理したい人・自分で仕組みを組める人",
    caution:
      "誰が話したかの区別（話者分離）は標準では付かない。要約も自動では出ないため、別途ChatGPT等に渡す必要がある。",
    tags: ["高精度", "従量課金", "要セットアップ"],
  },
  {
    name: "Notta",
    icon: "📝",
    summary:
      "日本語対応の文字起こしサービス。録音・インポート・Web会議への同席に対応し、文字起こしから要約まで画面上で完結する。日本のビジネス利用で定番。",
    freePlan: "無料プランあり（月あたりの文字起こし時間に上限）",
    paidPlan: "有料プランで時間上限が大幅に拡張（月額課金）",
    speakerSeparation: "対応",
    bestFor: "とりあえず今日から議事録を自動化したい人・非エンジニア",
    caution: "無料枠は1回あたりの録音時間・月間合計時間に制限があるため、長時間会議には有料プランが前提になる。",
    tags: ["日本語対応", "要約機能あり", "無料枠あり"],
  },
  {
    name: "Rimo Voice",
    icon: "🎙️",
    summary:
      "日本語に特化した国産の文字起こしサービス。日本語特有の言い回しや固有名詞に強く、AIによる要約機能を備える。",
    freePlan: "トライアルあり（時間制限あり）",
    paidPlan: "従量課金＋月額プラン",
    speakerSeparation: "対応",
    bestFor: "日本語の会議・インタビューの精度を最優先したい人",
    caution: "海外ツールに比べると料金は高めになりやすい。まずはトライアルで自社の音声との相性を確認するのが確実。",
    tags: ["日本語特化", "国産", "要約機能あり"],
  },
  {
    name: "tl;dv",
    icon: "🎥",
    summary:
      "Zoom・Google Meet・Microsoft Teams の会議に同席して録画・文字起こし・要約を行うツール。会議の該当箇所にジャンプできるタイムスタンプが強み。",
    freePlan: "無料プランあり（録画・文字起こしの基本機能）",
    paidPlan: "有料プランでAI要約・連携機能が拡張",
    speakerSeparation: "対応",
    bestFor: "Web会議が中心のチーム・あとから会議を見返したい人",
    caution: "ボットが会議に参加する形式のため、社外の会議では事前に参加者へ録画の同意を得る必要がある。",
    tags: ["Web会議連携", "無料枠あり", "タイムスタンプ"],
  },
  {
    name: "Teams / Google Meet の標準機能",
    icon: "🏢",
    summary:
      "Microsoft Teams・Google Meet に組み込まれている文字起こし機能。追加のツールを入れずに使えるため、会社のセキュリティ審査が通りやすい。",
    freePlan: "プランにより利用可（無料版では制限あり・組織の契約に依存）",
    paidPlan: "Microsoft 365 / Google Workspace の上位プランに含まれる",
    speakerSeparation: "対応",
    bestFor: "会社が既にTeams・Google Workspaceを契約している場合",
    caution:
      "組織の管理者が機能をオフにしている場合は使えない。まず情報システム部門に利用可否を確認するのが早い。",
    tags: ["追加契約不要", "社内審査が楽", "管理者設定に依存"],
  },
];

const FLOW: FlowStep[] = [
  {
    step: 1,
    title: "録音・録画をする",
    desc: "対面の会議ならスマホやICレコーダーで録音、Web会議なら会議ツールの録画機能かtl;dvのようなツールを使う。音声が明瞭なほど精度は上がるため、マイクの近くで話すだけでも結果が変わる。",
  },
  {
    step: 2,
    title: "文字起こしにかける",
    desc: "音声ファイルをNotta・Rimo Voiceにアップロードするか、Whisperに渡す。この時点ではまだ「話した言葉がそのまま並んだテキスト」であり、議事録ではない。",
  },
  {
    step: 3,
    title: "AIで議事録の形に整える",
    desc: "文字起こしテキストをChatGPTやClaudeに渡し、「決定事項」「宿題（担当者と期限）」「議論の要点」に整理させる。ツール内蔵の要約機能を使ってもよい。",
  },
  {
    step: 4,
    title: "人が最終確認する",
    desc: "固有名詞・数字・金額・日付はAIが取り違えることがある。ここだけは必ず人が原文と突き合わせる。この確認を省くと、誤った議事録が正式記録として残ってしまう。",
  },
];

const FAQS: FaqItem[] = [
  {
    q: "AI文字起こしの精度はどのくらいですか？",
    a: "音声の条件によって大きく変わります。静かな部屋でマイクに近く、1人ずつ話している音声であれば、主要ツールは実用的な精度が出ます。一方で、複数人が同時に話す、雑音が多い、専門用語や社内固有の略語が多い、といった条件では誤字が増えます。特に固有名詞・数字・金額は間違えやすいため、AIの出力をそのまま正式な議事録にせず、人が確認する前提で運用してください。",
  },
  {
    q: "無料で文字起こしをする方法はありますか？",
    a: "あります。主な選択肢は3つです。①Notta・tl;dvなどの無料プランを使う（月あたりの時間に上限あり）。②OpenAIのWhisperを自分のPCにインストールして使う（ソフト自体は無料。ただしセットアップの手間があり、処理速度はPC性能に依存します）。③会社がMicrosoft 365やGoogle Workspaceを契約している場合、Teams・Google Meetの標準の文字起こし機能を使う（追加費用なし）。まず③を確認し、使えなければ①を試すのが手軽です。",
  },
  {
    q: "「誰が話したか」を区別できますか？",
    a: "ツールによります。Notta・Rimo Voice・tl;dv・Teams/Meetの標準機能は話者の区別（話者分離）に対応しています。一方、OpenAIのWhisperは標準では話者を区別しません。会議の議事録では「誰が何を担当することになったか」が重要になるため、話者分離に対応したツールを選ぶほうが後工程が楽になります。",
  },
  {
    q: "会議を録音・録画するとき、参加者の同意は必要ですか？",
    a: "録音・録画することは事前に参加者へ伝えてください。特にtl;dvのようなボットが会議に参加する形式のツールは、参加者一覧に表示されるため、黙って使うとトラブルになります。社外を含む会議では冒頭に「記録のため録画します」と一言伝えるのが基本です。また、社内規程で録音が制限されている場合もあるため、業務利用の前に自社のルールを確認してください。",
  },
  {
    q: "機密情報を含む会議でAI文字起こしを使っても大丈夫ですか？",
    a: "そのまま使うのは避けてください。クラウド型のツールは音声データを外部サーバーに送信します。人事・法務・未公開の経営情報などを扱う会議では、①会社が契約済みのTeams・Google Meetの標準機能を使う、②自分のPC内で完結するWhisperのローカル実行を使う、のいずれかが比較的安全です。いずれの場合も、導入前に情報システム部門や法務部門に確認してください。",
  },
  {
    q: "文字起こししたテキストから議事録を作るコツはありますか？",
    a: "文字起こしをそのまま貼り付けて「要約して」と頼むのではなく、出力の形式を指定するのがコツです。たとえば「以下の会議の文字起こしから、(1)決定事項、(2)宿題（担当者と期限つき）、(3)議論はしたが結論が出ていない点、の3つに分けて箇条書きにしてください。原文にない内容は追加しないでください」と指示すると、議事録として使える形に近づきます。最後に固有名詞・数字を人が確認してください。",
  },
];

/** FAQ構造化データ（AI検索・リッチリザルト向け） */
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

/** 記事構造化データ */
const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "AI文字起こし・議事録ツール比較2026年版【Whisper・Notta・Rimo Voice・tl;dv】",
  description:
    "AI文字起こし・議事録ツールの日本語精度・料金・無料枠・話者分離の有無を比較し、議事録を自動化する手順を解説する。",
  datePublished: PUBLISHED_AT,
  dateModified: PUBLISHED_AT,
  inLanguage: "ja",
  mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
  author: { "@type": "Organization", name: "AI News Japan" },
  publisher: { "@type": "Organization", name: "AI News Japan" },
};

/** 話者分離バッジの色分け */
const separationColor: Record<TranscriptionTool["speakerSeparation"], string> = {
  対応: "bg-green-500/20 text-green-300 border-green-500/30",
  一部対応: "bg-amber-500/20 text-amber-300 border-amber-500/30",
  非対応: "bg-gray-500/20 text-gray-300 border-gray-500/30",
};

export default function AiTranscriptionGuidePage() {
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
          <span className="inline-block text-xs font-bold bg-teal-500/20 text-teal-300 border border-teal-500/30 rounded-full px-4 py-1 mb-4">
            🎙️ 2026年最新版
          </span>
          <h1 className="text-3xl sm:text-4xl font-black mb-4 leading-tight">
            AI文字起こし・議事録ツール
            <br />
            <span className="text-teal-300">比較ガイド2026年版</span>
            <br />
            <span className="text-lg sm:text-xl text-gray-300 font-bold">
              【Whisper・Notta・Rimo Voice・tl;dv】
            </span>
          </h1>
          <p className="text-gray-300 text-sm leading-relaxed">
            日本語の精度・料金・無料枠・話者分離の有無を比較し、
            <br className="hidden sm:block" />
            会議の議事録を自動化する手順と注意点までまとめました。
          </p>
          <p className="text-gray-400 text-xs mt-3">公開日：2026年7月14日</p>
        </div>

        {/* 結論を先に置く（AI検索に引用されやすい形） */}
        <section className="mb-12">
          <div className="bg-teal-900/20 border border-teal-700/40 rounded-xl p-5">
            <h2 className="text-base font-bold text-teal-200 mb-3">先に結論</h2>
            <ul className="space-y-2 text-sm text-gray-200 leading-relaxed">
              <li className="flex gap-2">
                <span className="text-teal-300 flex-shrink-0">▸</span>
                <span>
                  <strong className="text-white">まず確認すべきは会社のTeams・Google Meet。</strong>
                  すでに契約があれば追加費用ゼロで文字起こしが使え、セキュリティ審査も通りやすい。
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-teal-300 flex-shrink-0">▸</span>
                <span>
                  <strong className="text-white">今日から手軽に始めるならNotta。</strong>
                  無料枠があり、文字起こしから要約まで画面上で完結する。
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-teal-300 flex-shrink-0">▸</span>
                <span>
                  <strong className="text-white">コストを抑えて大量処理するならWhisper。</strong>
                  ただし話者分離が付かず、セットアップの手間がかかる。
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-teal-300 flex-shrink-0">▸</span>
                <span>
                  <strong className="text-white">どのツールでも、固有名詞・数字・金額は人が確認する。</strong>
                  AIの出力をそのまま正式な議事録にしない。
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* ツール比較 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-6 border-l-4 border-teal-500 pl-3">
            🎙️ AI文字起こしツール5選【精度・料金・話者分離を比較】
          </h2>
          <div className="space-y-4">
            {TOOLS.map((tool) => (
              <div key={tool.name} className="bg-gray-900 border border-gray-700 rounded-xl p-5">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="text-xl">{tool.icon}</span>
                  <h3 className="text-white font-black text-sm">{tool.name}</h3>
                  <span
                    className={`text-xs font-bold px-2 py-0.5 rounded-full border ${separationColor[tool.speakerSeparation]}`}
                  >
                    話者分離：{tool.speakerSeparation}
                  </span>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-3">
                  {tool.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-teal-900/20 text-teal-300 border border-teal-700/30 px-2 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-gray-300 text-sm leading-relaxed mb-3">{tool.summary}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs mb-3">
                  <div className="bg-green-900/10 border border-green-700/20 rounded px-2.5 py-1.5">
                    <span className="text-green-300 font-bold">無料：</span>
                    <span className="text-gray-200">{tool.freePlan}</span>
                  </div>
                  <div className="bg-gray-800 rounded px-2.5 py-1.5">
                    <span className="text-gray-300 font-bold">有料：</span>
                    <span className="text-gray-200">{tool.paidPlan}</span>
                  </div>
                </div>

                <div className="bg-gray-800 rounded px-2.5 py-1.5 text-xs mb-2">
                  <span className="text-gray-300">👤 向いている人：</span>
                  <span className="text-gray-200">{tool.bestFor}</span>
                </div>
                <div className="bg-amber-900/10 border border-amber-700/20 rounded px-2.5 py-1.5 text-xs">
                  <span className="text-amber-300 font-bold">⚠️ 注意：</span>
                  <span className="text-gray-200">{tool.caution}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-400 text-xs mt-4 leading-relaxed">
            ※料金・無料枠は提供元の都合で変更されます。契約前に各ツールの公式サイトで最新の内容を確認してください。
          </p>
        </section>

        {/* 議事録自動化の手順 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-6 border-l-4 border-teal-500 pl-3">
            🪜 会議の議事録を自動化する4ステップ
          </h2>
          <p className="text-gray-300 text-sm leading-relaxed mb-5">
            「文字起こし」と「議事録」は別物です。文字起こしは話した言葉がそのまま並んだテキストで、
            そのままでは読みにくく使えません。議事録にするには、次の4ステップを踏みます。
          </p>
          <div className="space-y-3">
            {FLOW.map(({ step, title, desc }) => (
              <div key={step} className="flex gap-4 bg-gray-900 border border-gray-700 rounded-xl p-4">
                <div className="w-9 h-9 rounded-full bg-teal-500 text-white font-black text-sm flex items-center justify-center flex-shrink-0">
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

        {/* 精度を上げるコツ */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-6 border-l-4 border-teal-500 pl-3">
            ✅ 文字起こしの精度を上げる5つのコツ
          </h2>
          <div className="space-y-2">
            {[
              {
                point: "マイクに近づいて話す",
                detail:
                  "精度に最も効くのは音質です。高いツールに乗り換えるより、マイクとの距離を縮めるほうが効果が大きい場面は多いです。",
              },
              {
                point: "1人ずつ話す・かぶせない",
                detail:
                  "複数人の声が重なった区間は、どのツールでも精度が落ちます。司会が発言を交通整理するだけで結果が変わります。",
              },
              {
                point: "専門用語・社名を事前に登録する",
                detail:
                  "ツールによっては用語集（辞書）を登録できます。社内の略語や固有名詞を登録しておくと誤変換が減ります。",
              },
              {
                point: "会議の冒頭で参加者が名乗る",
                detail:
                  "話者分離は「誰か」までは判定できず「話者A・B」と出ることがあります。冒頭で名乗ると後から紐づけが楽になります。",
              },
              {
                point: "静かな場所で録音する",
                detail:
                  "エアコン・タイピング音・カフェの雑音は精度を下げます。可能なら静かな会議室で録音してください。",
              },
            ].map(({ point, detail }) => (
              <div key={point} className="flex gap-3 bg-gray-900 border border-gray-700 rounded-xl p-4">
                <span className="text-teal-300 font-black flex-shrink-0">✓</span>
                <div>
                  <p className="font-bold text-white text-sm">{point}</p>
                  <p className="text-gray-300 text-xs mt-1 leading-relaxed">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 注意点 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-6 border-l-4 border-red-500 pl-3">
            ⚠️ 使う前に確認すべきこと
          </h2>
          <div className="bg-red-900/10 border border-red-700/30 rounded-xl p-5 space-y-3">
            <div>
              <p className="font-bold text-red-200 text-sm mb-1">録音は事前に伝える</p>
              <p className="text-gray-300 text-sm leading-relaxed">
                会議を録音・録画することは参加者に事前に伝えてください。ボットが会議に同席するタイプのツールは参加者一覧に表示されます。
              </p>
            </div>
            <div>
              <p className="font-bold text-red-200 text-sm mb-1">機密情報は外部に送らない</p>
              <p className="text-gray-300 text-sm leading-relaxed">
                クラウド型のツールは音声を外部サーバーに送信します。人事・法務・未公開の経営情報を含む会議では、会社が契約済みの機能か、PC内で完結する方法を使い、事前に情報システム部門へ確認してください。
              </p>
            </div>
            <div>
              <p className="font-bold text-red-200 text-sm mb-1">AIの出力をそのまま正式記録にしない</p>
              <p className="text-gray-300 text-sm leading-relaxed">
                固有名詞・数字・金額・日付はAIが取り違えることがあります。最終確認は必ず人が行ってください。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-6 border-l-4 border-teal-500 pl-3">
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
            文字起こししたテキストを要約・整形するAIの使い分けは
            <Link href="/ai-writing-guide" className="text-blue-300 hover:underline">
              AI文章生成ガイド
            </Link>
            にまとめています。整形の指示文の書き方は
            <Link href="/chatgpt-prompt-guide" className="text-blue-300 hover:underline">
              ChatGPTプロンプト集
            </Link>
            が参考になります。長い資料やPDFの要約なら
            <Link href="/notebooklm-guide" className="text-blue-300 hover:underline">
              NotebookLMガイド
            </Link>
            、仕事全般でのAI活用は
            <Link href="/chatgpt-business-guide" className="text-blue-300 hover:underline">
              ChatGPTビジネス活用ガイド
            </Link>
            もどうぞ。
          </p>
        </section>

        <AffiliateSectionAiNews />
      </div>
    </main>
  );
}

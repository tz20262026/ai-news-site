import type { Metadata } from "next";
import Link from "next/link";
import AffiliateSectionAiNews from "@/components/AffiliateSectionAiNews";

export const metadata: Metadata = {
  title:
    "Stable Diffusion完全ガイド2026年版【インストール・使い方・プロンプト】",
  description:
    "Stable Diffusionのインストール方法から基本操作、プロンプトの書き方、おすすめモデルまで2026年版で完全解説。無料でローカル環境に構築する手順を初心者向けに詳しく説明。",
  keywords: [
    "Stable Diffusion 使い方",
    "Stable Diffusion インストール",
    "Stable Diffusion プロンプト",
    "Stable Diffusion AUTOMATIC1111",
    "Stable Diffusion ComfyUI",
    "AI画像生成 無料",
    "ローカルAI 画像",
    "Stable Diffusion モデル",
  ],
  alternates: {
    canonical: "https://ai-news-site-wheat.vercel.app/stable-diffusion-guide",
  },
  openGraph: {
    title:
      "Stable Diffusion完全ガイド2026年版【インストール・使い方・プロンプト】",
    description:
      "Stable Diffusionのインストール方法から基本操作、プロンプトの書き方、おすすめモデルまで2026年版で完全解説。無料でローカル環境に構築する手順を初心者向けに詳しく説明。",
    type: "article",
    locale: "ja_JP",
    url: "https://ai-news-site-wheat.vercel.app/stable-diffusion-guide",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stable Diffusion完全ガイド2026年版",
    description:
      "インストールからプロンプト術・おすすめモデルまで完全解説。無料でローカルAI画像生成を始めよう。",
  },
};

/* ────────────────────────────────────────────
   データ定義
──────────────────────────────────────────── */

interface InstallStep {
  id: string;
  step: number;
  title: string;
  description: string;
  note?: string;
}

interface SDModel {
  id: string;
  name: string;
  type: string;
  description: string;
  bestFor: string;
  fileSize: string;
}

interface PromptTip {
  id: string;
  category: string;
  icon: string;
  positive: string;
  negative: string;
  effect: string;
}

interface FAQ {
  question: string;
  answer: string;
}

const INSTALL_STEPS: InstallStep[] = [
  {
    id: "requirements",
    step: 1,
    title: "動作環境の確認",
    description:
      "Stable DiffusionをローカルPCで動かすには、NVIDIA製GPUが必須です。最低でもVRAM 4GB（推奨8GB以上）のGPUを用意してください。VRAM 6GB以上あればほぼ全てのモデルが動作します。GPUなしのCPU生成も可能ですが、1枚生成に数分〜数十分かかります。",
    note: "推奨スペック: GPU VRAM 8GB以上 / RAM 16GB以上 / ストレージ空き容量 50GB以上",
  },
  {
    id: "python",
    step: 2,
    title: "Python 3.10のインストール",
    description:
      "Python公式サイト（python.org）からPython 3.10.x をダウンロードしてインストールします。3.11以上だとエラーが出る場合があるため必ず3.10系を選んでください。インストール時に「Add Python to PATH」にチェックを入れることが重要です。",
    note: "Python 3.10.x 推奨。最新版（3.12等）は一部モジュールで非互換が生じる場合あり",
  },
  {
    id: "git",
    step: 3,
    title: "Gitのインストール",
    description:
      "Git公式サイト（git-scm.com）からGitをインストールします。AUTOMATIC1111のコードをGitHubからクローンするために必要です。インストール時の設定はデフォルトのままで問題ありません。",
  },
  {
    id: "a1111",
    step: 4,
    title: "AUTOMATIC1111のクローン",
    description:
      "コマンドプロンプト（またはターミナル）で任意のフォルダに移動し、`git clone https://github.com/AUTOMATIC1111/stable-diffusion-webui` を実行します。クローン完了後、フォルダ内の `webui-user.bat`（Windows）を実行するだけで自動セットアップが始まります。",
    note: "初回起動時は依存パッケージの自動インストールで10〜30分かかる場合があります",
  },
  {
    id: "model",
    step: 5,
    title: "モデルファイルの配置",
    description:
      "Civitai（civitai.com）やHugging FaceからSDモデル（.safetensors または .ckpt ファイル）をダウンロードし、`models/Stable-diffusion/` フォルダに配置します。その後WebUIをリフレッシュするとモデルが選択できるようになります。",
    note: "初心者には Realistic Vision や DreamShaper など汎用モデルがおすすめ",
  },
  {
    id: "generate",
    step: 6,
    title: "初回生成",
    description:
      "ブラウザで `http://127.0.0.1:7860` を開くとWebUI画面が表示されます。テキストボックスにプロンプトを入力し、「Generate」ボタンを押すだけで画像生成が開始されます。生成した画像は `outputs/txt2img-images/` フォルダに自動保存されます。",
  },
];

const SD_MODELS: SDModel[] = [
  {
    id: "realistic-vision",
    name: "Realistic Vision V6",
    type: "リアル系",
    description:
      "人物・風景のリアルな写真風画像生成に特化した人気モデル。ポートレートから商品写真まで幅広く使える。",
    bestFor: "人物・ポートレート・リアル風景",
    fileSize: "約2GB",
  },
  {
    id: "dreamshaper",
    name: "DreamShaper XL",
    type: "汎用",
    description:
      "リアルからイラスト・ファンタジーまで幅広いスタイルに対応する最も人気の高い汎用モデル。初心者に最適。",
    bestFor: "キャラクター・イラスト・ファンタジー",
    fileSize: "約2.1GB",
  },
  {
    id: "anything-xl",
    name: "Anything XL",
    type: "アニメ系",
    description:
      "日本のアニメ・マンガスタイルの画像生成に特化。高品質な2Dキャラクターイラストを生成できる。",
    bestFor: "アニメ・マンガ・2Dイラスト",
    fileSize: "約6.5GB",
  },
  {
    id: "sdxl-base",
    name: "SDXL 1.0（Base+Refiner）",
    type: "高解像度",
    description:
      "Stability AI公式の高解像度モデル。1024×1024px以上の高品質画像を生成可能。精細なテクスチャが特徴。",
    bestFor: "高解像度・精細な描写・商用品質",
    fileSize: "約6.5GB（Base+Refiner合計）",
  },
  {
    id: "deliberate",
    name: "Deliberate V6",
    type: "セミリアル",
    description:
      "リアルとイラストの中間スタイル。人物・動物・自然など幅広い被写体で高品質な画像を生成する。",
    bestFor: "半写実的・コンセプトアート・人物",
    fileSize: "約2GB",
  },
];

const PROMPT_TIPS: PromptTip[] = [
  {
    id: "portrait",
    category: "人物ポートレート",
    icon: "👤",
    positive:
      "1girl, beautiful face, long black hair, school uniform, soft lighting, photorealistic, 8k, detailed skin",
    negative:
      "bad anatomy, bad hands, extra fingers, deformed, ugly, blurry, low quality",
    effect: "人物の顔・手の乱れを防ぎ、自然なポートレートを生成できる",
  },
  {
    id: "landscape",
    category: "風景・自然",
    icon: "🌄",
    positive:
      "beautiful mountain landscape, cherry blossoms, golden hour, volumetric lighting, ultra detailed, 4k",
    negative: "text, watermark, logo, signature, oversaturated, cartoon",
    effect: "光の表現を豊かにし、写真品質の風景画を生成できる",
  },
  {
    id: "anime",
    category: "アニメ・イラスト",
    icon: "🎌",
    positive:
      "masterpiece, best quality, 1girl, anime style, detailed eyes, colorful, vivid colors, kawaii",
    negative:
      "realistic, 3d, bad anatomy, missing limbs, extra limbs, low quality, jpeg artifacts",
    effect: "アニメスタイルを強調し、高品質な2Dイラストを生成できる",
  },
  {
    id: "product",
    category: "商品・物撮り",
    icon: "📦",
    positive:
      "product photography, white background, studio lighting, sharp focus, commercial photography, high resolution",
    negative: "shadow, reflection, background objects, text, dirty",
    effect: "EC向け白バック商品写真を生成できる",
  },
];

const FAQS: FAQ[] = [
  {
    question: "Stable Diffusionは完全無料で使えますか？",
    answer:
      "はい、ローカルにインストールして使う場合は完全無料です。生成回数制限もなく、商用利用も基本的に可能です（ただし使用するモデルのライセンスを確認すること）。クラウドサービス（DreamStudio等）を使う場合は従量課金制になります。",
  },
  {
    question: "GPUなしのPCでも使えますか？",
    answer:
      "CPU生成は可能ですが、1枚の画像生成に数分〜数十分かかるため実用的ではありません。クラウドサービス（Google ColabやDreamStudio）を使えばGPUなしのPCからでも高速生成できます。ゲーミングPCがない方はまずGoogle Colab版から試すことをおすすめします。",
  },
  {
    question: "AUTOMATIC1111とComfyUIはどちらがおすすめですか？",
    answer:
      "初心者にはUI操作が直感的なAUTOMATIC1111がおすすめです。ComfyUIはノードベースのワークフローで高度な制御ができますが、学習コストが高いです。まずAUTOMATIC1111で基本を学び、より高度なワークフローが必要になったらComfyUIに移行するのが定石です。",
  },
  {
    question: "生成した画像は商用利用できますか？",
    answer:
      "モデルのライセンスによって異なります。Stable Diffusion公式モデル（SDXL等）はCreativeML Open RAIL-Mライセンスで商用利用可能。ただしCivitaiで配布されているモデルは個別にライセンスが異なるため、ダウンロード前に必ずライセンス条項を確認してください。",
  },
  {
    question: "LoRAとは何ですか？どう使いますか？",
    answer:
      "LoRA（Low-Rank Adaptation）は、特定のスタイル・キャラクター・被写体に特化した追加学習ファイルです。メインモデルに重ねて使うことで、特定の画風や人物を再現できます。AUTOMATIC1111では`models/Lora/`フォルダに配置し、プロンプトに`<lora:ファイル名:強度>`と記述して使います。",
  },
];

/* ────────────────────────────────────────────
   JSON-LD 生成
──────────────────────────────────────────── */

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

/* ────────────────────────────────────────────
   ページコンポーネント
──────────────────────────────────────────── */

export default function StableDiffusionGuidePage() {
  return (
    <>
      {/* FAQ JSON-LD 構造化データ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main className="min-h-screen bg-gray-950 text-gray-200">
        {/* ── ヒーローセクション ── */}
        <section className="bg-gradient-to-b from-slate-900 to-gray-950 py-14 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-xs font-bold text-orange-400 uppercase tracking-widest bg-orange-400/10 px-4 py-1.5 rounded-full mb-4">
              2026年版 最新情報
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight mb-4">
              Stable Diffusion完全ガイド2026年版
              <br />
              <span className="text-orange-400">
                【インストール・使い方・プロンプト徹底解説】
              </span>
            </h1>
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              完全無料でローカルPCに構築できるAI画像生成ツール。
              インストール手順からモデル選び、プロンプト術まで初心者向けに丁寧に解説。
            </p>
            {/* 目次クイックリンク */}
            <div className="flex flex-wrap justify-center gap-2">
              {[
                { href: "#install", label: "インストール手順" },
                { href: "#models", label: "モデル比較" },
                { href: "#prompt", label: "プロンプト術" },
                { href: "#faq", label: "よくある質問" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-xs font-bold px-4 py-2 rounded-full bg-slate-800 text-orange-300 border border-slate-700 hover:bg-slate-700 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── 概要 ── */}
        <section className="py-10 px-4 bg-slate-950">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { icon: "🆓", label: "完全無料", desc: "ローカル環境なら生成回数無制限・課金なし" },
                { icon: "🖥️", label: "ローカル動作", desc: "データがクラウドに送られないプライバシー安全な環境" },
                { icon: "🎨", label: "高いカスタマイズ性", desc: "数千のモデル・LoRAで自分好みのスタイルを実現" },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl bg-slate-900 border border-slate-800 p-5 text-center">
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <p className="font-black text-white text-base mb-1">{item.label}</p>
                  <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── インストール手順 ── */}
        <section id="install" className="py-14 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
                AUTOMATIC1111 インストール手順
              </h2>
              <p className="text-gray-400 text-sm">
                Windows環境での標準的なセットアップ手順を6ステップで解説
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {INSTALL_STEPS.map((step) => (
                <div
                  key={step.id}
                  className="rounded-2xl border border-slate-800 bg-slate-900 p-5 sm:p-6"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-9 h-9 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center font-black text-base border border-orange-500/30">
                      {step.step}
                    </span>
                    <div className="flex-1">
                      <h3 className="font-black text-white text-base mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {step.description}
                      </p>
                      {step.note && (
                        <div className="mt-3 rounded-xl bg-orange-500/10 border border-orange-500/20 px-4 py-2.5">
                          <p className="text-orange-300 text-xs leading-relaxed">
                            ⚠️ {step.note}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* ComfyUI案内 */}
            <div className="mt-8 rounded-2xl bg-slate-900 border border-orange-500/30 p-5 sm:p-6">
              <p className="text-sm font-bold text-orange-300 mb-2">
                🔧 上級者向け：ComfyUI について
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                AUTOMATIC1111以外にも、ノードベースのワークフローで高度な制御ができる<span className="text-white font-bold">ComfyUI</span>が人気です。
                画像生成パイプラインを視覚的に構築でき、AnimateDiff（動画生成）やControlNetとの組み合わせが得意。
                AUTOMATIC1111に慣れた後のステップアップとして検討してください。
              </p>
            </div>
          </div>
        </section>

        {/* ── モデル比較 ── */}
        <section id="models" className="py-14 px-4 bg-slate-950">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
                おすすめモデル比較2026年版
              </h2>
              <p className="text-gray-400 text-sm">
                Civitaiで人気の厳選5モデル。用途に合わせて選ぼう
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SD_MODELS.map((model) => (
                <div
                  key={model.id}
                  className="rounded-2xl border border-slate-800 bg-slate-900 p-5 flex flex-col gap-3"
                >
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <h3 className="font-black text-white text-base">
                      {model.name}
                    </h3>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-orange-500/15 text-orange-300 border border-orange-500/30 flex-shrink-0">
                      {model.type}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {model.description}
                  </p>
                  <div className="flex flex-col gap-1.5 mt-auto">
                    <div className="flex items-center gap-2">
                      <span className="text-orange-400 text-xs font-bold">用途：</span>
                      <span className="text-gray-300 text-xs">{model.bestFor}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-orange-400 text-xs font-bold">容量：</span>
                      <span className="text-gray-300 text-xs">{model.fileSize}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl bg-slate-900 border border-slate-800 p-5">
              <p className="text-sm text-gray-300 leading-relaxed">
                <span className="font-bold text-white">💡 モデル入手先：</span>
                　<span className="text-orange-400 font-bold">Civitai（civitai.com）</span>が最大のモデル配布サイト。
                数万種類のモデル・LoRAが無料でダウンロード可能。
                Stability AI公式は<span className="text-orange-400 font-bold">Hugging Face（huggingface.co）</span>で配布。
                ダウンロード時は必ずライセンス条項を確認してください。
              </p>
            </div>
          </div>
        </section>

        {/* ── プロンプト術 ── */}
        <section id="prompt" className="py-14 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
                用途別プロンプト実践集
              </h2>
              <p className="text-gray-400 text-sm">
                ポジティブ・ネガティブプロンプトのセットでそのままコピペ可能
              </p>
            </div>

            <div className="flex flex-col gap-6">
              {PROMPT_TIPS.map((tip) => (
                <div
                  key={tip.id}
                  className="rounded-2xl border border-slate-800 bg-slate-900 p-5 sm:p-6"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xl">{tip.icon}</span>
                    <h3 className="font-black text-white text-base">{tip.category}</h3>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="rounded-xl bg-slate-800 border border-emerald-500/30 px-4 py-3">
                      <p className="text-xs font-bold text-emerald-400 mb-1">ポジティブプロンプト</p>
                      <p className="text-gray-300 text-xs leading-relaxed font-mono">{tip.positive}</p>
                    </div>
                    <div className="rounded-xl bg-slate-800 border border-red-500/30 px-4 py-3">
                      <p className="text-xs font-bold text-red-400 mb-1">ネガティブプロンプト</p>
                      <p className="text-gray-300 text-xs leading-relaxed font-mono">{tip.negative}</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-orange-400 font-bold text-xs flex-shrink-0 mt-0.5">効果：</span>
                      <p className="text-gray-300 text-sm leading-relaxed">{tip.effect}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* パラメータ早見表 */}
            <div className="mt-8 rounded-2xl bg-slate-900 border border-slate-800 p-5 sm:p-6">
              <h3 className="font-black text-white text-base mb-4">⚙️ 主要パラメータ早見表</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { param: "Sampling Steps", value: "20〜30", desc: "生成ステップ数。増やすと品質UP・時間増" },
                  { param: "CFG Scale", value: "7〜12", desc: "プロンプト追従度。高いほど指示通りになる" },
                  { param: "Seed", value: "-1（ランダム）", desc: "固定すると再現性UP。実験時は-1で" },
                  { param: "Sampling Method", value: "DPM++ 2M Karras", desc: "最もバランスの良い人気サンプラー" },
                  { param: "Hires Fix", value: "ON（2x）", desc: "高解像度生成。512pxから1024pxに拡大" },
                  { param: "Denoising Strength", value: "0.5〜0.7", desc: "img2imgの変化量。低いほど元画像に近い" },
                ].map((item) => (
                  <div key={item.param} className="rounded-xl bg-slate-800 border border-slate-700 p-3">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-white font-bold text-xs">{item.param}</span>
                      <span className="text-orange-300 text-xs font-bold">{item.value}</span>
                    </div>
                    <p className="text-gray-400 text-xs">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 関連ガイドCTA ── */}
        <section className="py-10 px-4 bg-slate-950">
          <div className="max-w-3xl mx-auto">
            <div className="rounded-2xl bg-gradient-to-r from-orange-500/10 to-amber-500/10 border border-orange-500/30 p-6 sm:p-8 text-center">
              <p className="text-xs font-bold text-orange-400 uppercase tracking-widest mb-3">
                関連ガイド
              </p>
              <h2 className="text-xl sm:text-2xl font-black text-white mb-3">
                MidjourneyなどAI画像生成ツールを比較したい方へ
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Midjourney・DALL-E 3・Stable Diffusion・Ideogramを4ツール徹底比較。
                <br />
                有料・無料・ローカル環境の違いも解説しています。
              </p>
              <Link
                href="/ai-image-comparison"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-black text-sm px-6 py-3 rounded-xl transition-colors"
              >
                AI画像生成ツール比較を読む →
              </Link>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section id="faq" className="py-14 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
                よくある質問（FAQ）
              </h2>
              <p className="text-gray-400 text-sm">
                Stable Diffusionに関する疑問をまとめて解決
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {FAQS.map((faq, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-800 bg-slate-900 p-5 sm:p-6"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center font-black text-xs border border-orange-500/30 mt-0.5">
                      Q
                    </span>
                    <h3 className="font-black text-white text-sm sm:text-base leading-snug">
                      {faq.question}
                    </h3>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-black text-xs border border-emerald-500/30 mt-0.5">
                      A
                    </span>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── アフィリエイトセクション ── */}
        <AffiliateSectionAiNews />
      </main>
    </>
  );
}

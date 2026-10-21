import type { MetadataRoute } from "next";

// PWA対応のWeb App Manifest
// アイコンは既存の動的ルート（/icon, /apple-icon）をそのまま参照する（画像ファイルは新規作成しない）
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "AI News Japan — 海外AIツール最新情報",
    short_name: "AI News Japan",
    description:
      "海外の最新AIツール・ニュースを日本語でお届け。TechCrunch・VentureBeat・Wiredなど海外100媒体から毎日自動収集。ChatGPT・Gemini・Claude最新情報も網羅。無料で読める。",
    start_url: "/",
    display: "standalone",
    background_color: "#030712",
    theme_color: "#2563eb",
    lang: "ja",
    icons: [
      {
        src: "/icon",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}

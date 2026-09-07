import { ImageResponse } from "next/og";

// ガイド系ページ共通のOGP画像（1200x630）を生成するヘルパー
// 各ルートの opengraph-image.tsx から呼び出す。外部fetchはせず自己完結で描画する。

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

type GuideOgParams = {
  /** 大見出し（2行程度まで） */
  title: string;
  /** サブコピー（1〜2行） */
  subtitle: string;
  /** アクセントカラー（16進） */
  accent?: string;
  /** 下部に並べるタグ */
  tags?: string[];
};

export function guideOgImage({
  title,
  subtitle,
  accent = "#38bdf8",
  tags = [],
}: GuideOgParams) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          fontFamily: "sans-serif",
          position: "relative",
          background: "#0b1120",
        }}
      >
        {/* ダーク下地 */}
        <div
          style={{
            display: "flex",
            position: "absolute",
            top: 0,
            left: 0,
            width: "1200px",
            height: "630px",
            background:
              "linear-gradient(120deg, rgba(6,10,24,1) 0%, rgba(9,13,32,1) 55%, rgba(17,24,44,1) 100%)",
          }}
        />
        {/* グリッド */}
        <div
          style={{
            display: "flex",
            position: "absolute",
            top: 0,
            left: 0,
            width: "1200px",
            height: "630px",
            backgroundImage:
              "linear-gradient(rgba(148,163,184,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.10) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        {/* アクセントの発光オーブ */}
        <div
          style={{
            display: "flex",
            position: "absolute",
            top: "-160px",
            right: "-120px",
            width: "520px",
            height: "520px",
            borderRadius: "999px",
            background: `radial-gradient(circle, ${accent}66 0%, ${accent}00 70%)`,
          }}
        />
        {/* 左端のアクセントバー */}
        <div
          style={{
            display: "flex",
            position: "absolute",
            top: 0,
            left: 0,
            width: "14px",
            height: "630px",
            background: accent,
          }}
        />

        {/* 本体 */}
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "1200px",
            height: "630px",
            padding: "64px 76px",
          }}
        >
          {/* ロゴ */}
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                display: "flex",
                background: "linear-gradient(135deg, #60a5fa 0%, #2563eb 100%)",
                color: "#fff",
                fontWeight: 900,
                fontSize: 28,
                padding: "8px 18px",
                borderRadius: 12,
              }}
            >
              AI
            </div>
            <span
              style={{
                display: "flex",
                color: "#f8fafc",
                fontWeight: 800,
                fontSize: 32,
                letterSpacing: "-0.5px",
              }}
            >
              News Japan
            </span>
          </div>

          {/* 見出し */}
          <div style={{ display: "flex", flexDirection: "column", maxWidth: 1000 }}>
            <div
              style={{
                display: "flex",
                alignSelf: "flex-start",
                background: `${accent}22`,
                border: `1px solid ${accent}77`,
                borderRadius: 999,
                padding: "8px 20px",
                marginBottom: 24,
                color: accent,
                fontSize: 20,
                fontWeight: 700,
                letterSpacing: "0.5px",
              }}
            >
              完全ガイド 2026
            </div>
            <div
              style={{
                display: "flex",
                color: "#ffffff",
                fontWeight: 900,
                fontSize: 60,
                lineHeight: 1.2,
                letterSpacing: "-1.5px",
                textShadow: "0 4px 24px rgba(0,0,0,0.45)",
              }}
            >
              {title}
            </div>
            <div
              style={{
                display: "flex",
                color: "#cbd5e1",
                fontSize: 26,
                lineHeight: 1.6,
                marginTop: 20,
                maxWidth: 940,
              }}
            >
              {subtitle}
            </div>
          </div>

          {/* 下段 */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", gap: 12 }}>
              {tags.slice(0, 4).map((tag) => (
                <div
                  key={tag}
                  style={{
                    display: "flex",
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.18)",
                    borderRadius: 999,
                    padding: "9px 22px",
                    color: "#e2e8f0",
                    fontSize: 20,
                    fontWeight: 600,
                  }}
                >
                  {tag}
                </div>
              ))}
            </div>
            <span
              style={{
                display: "flex",
                color: "#64748b",
                fontSize: 20,
                fontWeight: 600,
                letterSpacing: "0.5px",
              }}
            >
              ai-news-site-wheat.vercel.app
            </span>
          </div>
        </div>
      </div>
    ),
    { ...OG_SIZE }
  );
}

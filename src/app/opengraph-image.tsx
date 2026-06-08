import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "AI News Japan";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* 背景グリッド */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(99,102,241,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.08) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* バッジ */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            background: "rgba(99,102,241,0.25)",
            border: "1px solid rgba(99,102,241,0.5)",
            borderRadius: 999,
            padding: "8px 20px",
            marginBottom: 28,
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: "#4ade80",
            }}
          />
          <span style={{ color: "#a5b4fc", fontSize: 18, fontWeight: 700 }}>
            AIによる自律判定
          </span>
        </div>
        {/* ロゴ */}
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
          <div
            style={{
              background: "#2563eb",
              color: "#fff",
              fontWeight: 900,
              fontSize: 32,
              padding: "6px 18px",
              borderRadius: 10,
            }}
          >
            AI
          </div>
          <span style={{ color: "#fff", fontWeight: 800, fontSize: 64 }}>
            News Japan
          </span>
        </div>
        {/* サブタイトル */}
        <p
          style={{
            color: "#94a3b8",
            fontSize: 24,
            textAlign: "center",
            maxWidth: 700,
            lineHeight: 1.5,
          }}
        >
          海外AIツール・最新ニュースを日本語で毎日お届け
        </p>
      </div>
    ),
    { ...size }
  );
}

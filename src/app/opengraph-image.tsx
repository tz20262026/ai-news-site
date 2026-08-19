import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "AI News Japan — 海外AIツール最新情報";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  // 背景写真(テック系オフィス)を base64 化して敷く
  // opengraph-image.tsx はファイル規約のためRequestを受け取れない → 本番の絶対URLを直接指定する
  let bgDataUri: string | null = null;
  try {
    const bgUrl = "https://ai-news-site-wheat.vercel.app/hero-poster.jpg";
    const bgRes = await fetch(bgUrl);
    const bgBuffer = await bgRes.arrayBuffer();
    const bgBase64 = Buffer.from(bgBuffer).toString("base64");
    bgDataUri = `data:image/jpeg;base64,${bgBase64}`;
  } catch {
    bgDataUri = null;
  }

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
        {/* 背景写真 */}
        {bgDataUri && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={bgDataUri}
            width={1200}
            height={630}
            style={{ position: "absolute", top: 0, left: 0, objectFit: "cover" }}
          />
        )}

        {/* ダークグラデーション(視認性確保) */}
        <div
          style={{
            display: "flex",
            position: "absolute",
            top: 0,
            left: 0,
            width: "1200px",
            height: "630px",
            background:
              "linear-gradient(115deg, rgba(6,10,24,0.97) 0%, rgba(9,13,32,0.96) 38%, rgba(11,18,36,0.93) 62%, rgba(24,22,64,0.9) 100%)",
          }}
        />

        {/* 背景グリッド */}
        <div
          style={{
            display: "flex",
            position: "absolute",
            top: 0,
            left: 0,
            width: "1200px",
            height: "630px",
            backgroundImage:
              "linear-gradient(rgba(99,179,237,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(99,179,237,0.12) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />

        {/* 発光オーブ(シアン) */}
        <div
          style={{
            display: "flex",
            position: "absolute",
            top: "-140px",
            right: "-100px",
            width: "480px",
            height: "480px",
            borderRadius: "999px",
            background:
              "radial-gradient(circle, rgba(56,189,248,0.4) 0%, rgba(56,189,248,0) 70%)",
          }}
        />
        {/* 発光オーブ(ブルー) */}
        <div
          style={{
            display: "flex",
            position: "absolute",
            bottom: "-180px",
            left: "-120px",
            width: "520px",
            height: "520px",
            borderRadius: "999px",
            background:
              "radial-gradient(circle, rgba(37,99,235,0.45) 0%, rgba(37,99,235,0) 70%)",
          }}
        />

        {/* ─── コンテンツ本体 ─── */}
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "1200px",
            height: "630px",
            padding: "64px 72px",
          }}
        >
          {/* 上段: ロゴ */}
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                display: "flex",
                background: "linear-gradient(135deg, #60a5fa 0%, #2563eb 100%)",
                color: "#fff",
                fontWeight: 900,
                fontSize: 30,
                padding: "8px 20px",
                borderRadius: 12,
                boxShadow: "0 0 32px rgba(37,99,235,0.55)",
              }}
            >
              AI
            </div>
            <span style={{ display: "flex", color: "#f8fafc", fontWeight: 800, fontSize: 34, letterSpacing: "-0.5px" }}>
              News Japan
            </span>
          </div>

          {/* 中段: 見出し・サブコピー */}
          <div style={{ display: "flex", flexDirection: "column", maxWidth: 980 }}>
            {/* ライブバッジ */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                alignSelf: "flex-start",
                background: "rgba(56,189,248,0.14)",
                border: "1px solid rgba(56,189,248,0.45)",
                borderRadius: 999,
                padding: "8px 20px",
                marginBottom: 26,
              }}
            >
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: "#4ade80",
                  boxShadow: "0 0 10px rgba(74,222,128,0.9)",
                }}
              />
              <span style={{ color: "#7dd3fc", fontSize: 20, fontWeight: 700, letterSpacing: "0.5px" }}>
                海外100媒体から毎日自動更新
              </span>
            </div>

            <div
              style={{
                display: "flex",
                color: "#ffffff",
                fontWeight: 900,
                fontSize: 68,
                lineHeight: 1.18,
                letterSpacing: "-1.5px",
                textShadow: "0 4px 24px rgba(0,0,0,0.45)",
              }}
            >
              海外AIツール最新情報
            </div>

            <div
              style={{
                display: "flex",
                color: "#cbd5e1",
                fontSize: 26,
                lineHeight: 1.6,
                marginTop: 20,
                maxWidth: 880,
              }}
            >
              TechCrunch・VentureBeat・Wiredなど海外100媒体を日本語で毎日お届け
            </div>
          </div>

          {/* 下段: タグ + URL */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", gap: 12 }}>
              {["ChatGPT", "Gemini", "Claude", "Sora"].map((tag) => (
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
            <span style={{ display: "flex", color: "#64748b", fontSize: 20, fontWeight: 600, letterSpacing: "0.5px" }}>
ai-news-site-wheat.vercel.app
            </span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}

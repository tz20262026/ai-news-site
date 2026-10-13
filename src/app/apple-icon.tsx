import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "180px",
          height: "180px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #60a5fa 0%, #2563eb 100%)",
        }}
      >
        <span
          style={{
            display: "flex",
            color: "#fff",
            fontWeight: 900,
            fontSize: 80,
            fontFamily: "sans-serif",
            letterSpacing: "-2px",
          }}
        >
          AI
        </span>
      </div>
    ),
    { ...size }
  );
}

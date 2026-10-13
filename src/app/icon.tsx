import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "32px",
          height: "32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #60a5fa 0%, #2563eb 100%)",
          borderRadius: "7px",
        }}
      >
        <span
          style={{
            display: "flex",
            color: "#fff",
            fontWeight: 900,
            fontSize: 19,
            fontFamily: "sans-serif",
            letterSpacing: "-0.5px",
          }}
        >
          AI
        </span>
      </div>
    ),
    { ...size }
  );
}

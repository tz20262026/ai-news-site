import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Server ヘッダーで使われるフレームワーク名を隠す（情報漏洩の低減）
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "picsum.photos" },
      { protocol: "https", hostname: "images.microcms-assets.io" },
      { protocol: "https", hostname: "storage.googleapis.com" },
    ],
  },
  turbopack: { root: process.cwd() },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          // HTTPS を強制（Vercel は常時 HTTPS のため副作用なし・SEO/セキュリティ両面でプラス）
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          // 外部ドメイン（picsum / A8 等）への名前解決を先読みして体感速度を改善
          { key: "X-DNS-Prefetch-Control", value: "on" },
        ],
      },
    ];
  },
};

export default nextConfig;

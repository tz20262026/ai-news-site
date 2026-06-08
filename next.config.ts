import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "picsum.photos" },
      { protocol: "https", hostname: "images.microcms-assets.io" },
      { protocol: "https", hostname: "storage.googleapis.com" },
    ],
  },
  turbopack: { root: process.cwd() },
};

export default nextConfig;

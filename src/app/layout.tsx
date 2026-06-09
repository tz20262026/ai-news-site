import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { Analytics } from "@vercel/analytics/next";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "AI News Japan — 海外AIツール最新情報",
    template: "%s | AI News Japan",
  },
  description: "海外の最新AIツール・ニュースを日本語でお届けします。TechCrunch・VentureBeatなど海外100媒体から毎日自動更新。",
  metadataBase: new URL("https://ai-news-site-wheat.vercel.app"),
  alternates: {
    canonical: "https://ai-news-site-wheat.vercel.app",
  },
  openGraph: {
    siteName: "AI News Japan",
    title: "AI News Japan — 海外AIツール最新情報",
    description: "海外の最新AIツール・ニュースを日本語でお届けします。TechCrunch・VentureBeatなど海外100媒体から毎日自動更新。",
    type: "website",
    locale: "ja_JP",
    url: "https://ai-news-site-wheat.vercel.app",
    images: [
      {
        url: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&q=80&fit=crop",
        width: 1200,
        height: 630,
        alt: "AI News Japan — 海外AIツール最新情報",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI News Japan — 海外AIツール最新情報",
    description: "海外の最新AIツール・ニュースを日本語でお届けします。TechCrunch・VentureBeatなど海外100媒体から毎日自動更新。",
    images: ["https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&q=80&fit=crop"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const ADSENSE_ID = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} h-full`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-gray-100 antialiased transition-colors">
        {/* ─── Google AdSense ─────────────────────────────── */}
        {ADSENSE_ID && (
          <Script
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_ID}`}
            strategy="afterInteractive"
            crossOrigin="anonymous"
          />
        )}

        {/* ─── Google Analytics 4 ─────────────────────────── */}
        {GA_ID && GA_ID !== "G-XXXXXXXXXX" && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}

        {/* ─── WebSite + Organization 構造化データ ────────── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: "AI News Japan",
                url: "https://ai-news-site-wheat.vercel.app",
                description: "海外の最新AIツール・ニュースを日本語でお届けするニュースサイト",
                inLanguage: "ja",
                potentialAction: {
                  "@type": "SearchAction",
                  target: {
                    "@type": "EntryPoint",
                    urlTemplate: "https://ai-news-site-wheat.vercel.app/?q={search_term_string}",
                  },
                  "query-input": "required name=search_term_string",
                },
              },
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "AI News Japan",
                url: "https://ai-news-site-wheat.vercel.app",
                logo: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=200&q=80&fit=crop",
                sameAs: [],
              },
            ]),
          }}
        />

        <Header />
        <main className="flex-1 w-full max-w-[1400px] mx-auto px-4 sm:px-8 py-8">
          {children}
        </main>
        <Footer />
        <BackToTop />
        <Analytics />
      </body>
    </html>
  );
}

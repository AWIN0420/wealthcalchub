import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const GA_MEASUREMENT_ID = "G-BLZC2DSRHE";
const ADSENSE_CLIENT_ID = "ca-pub-2840766206066218";

export const metadata: Metadata = {
  metadataBase: new URL("https://wealthcalchub.vercel.app"),
  title: {
    default: "WealthCalcHub | Free Finance Calculators",
    template: "%s | WealthCalcHub",
  },
  description:
    "Free finance calculators for compound interest, FIRE planning, and dividend income estimates.",
  verification: {
    google: "PsbQP_dhVIibp1jq16WC4v8B-uUZAjfDKX-sRhBSlm4",
  },
  other: {
    "google-adsense-account": "ca-pub-2840766206066218",
  },
  openGraph: {
    title: "WealthCalcHub | Free Finance Calculators",
    description:
      "Free finance calculators for compound interest, FIRE planning, and dividend income estimates.",
    url: "https://wealthcalchub.vercel.app",
    siteName: "WealthCalcHub",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Script
          id="google-adsense"
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT_ID}`}
          crossOrigin="anonymous"
          strategy="beforeInteractive"
        />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}

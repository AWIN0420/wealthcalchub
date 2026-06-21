import type { Metadata } from "next";
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

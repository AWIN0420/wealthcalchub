import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Dividend Income Calculator",
  description:
    "Estimate current and future dividend income from portfolio value, dividend yield, annual contributions, and time horizon.",
  openGraph: {
    title: "Dividend Income Calculator | WealthCalcHub",
    description:
      "Estimate current and future dividend income from portfolio value, dividend yield, annual contributions, and time horizon.",
    url: "https://wealthcalchub.vercel.app/dividend-income-calculator",
    type: "website",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Dividend Income Calculator",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  url: "https://wealthcalchub.vercel.app/dividend-income-calculator",
  description:
    "Estimate current and future dividend income from portfolio value, dividend yield, annual contributions, and time horizon.",
  publisher: {
    "@type": "Organization",
    name: "WealthCalcHub",
    url: "https://wealthcalchub.vercel.app",
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  inLanguage: "en",
};

export default function DividendIncomeCalculatorLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {children}
    </>
  );
}

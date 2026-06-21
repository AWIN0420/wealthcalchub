import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Compound Interest Calculator",
  description:
    "Estimate compound interest growth from an initial investment, monthly contributions, annual return, and time horizon.",
  openGraph: {
    title: "Compound Interest Calculator | WealthCalcHub",
    description:
      "Estimate compound interest growth from an initial investment, monthly contributions, annual return, and time horizon.",
    url: "https://wealthcalchub.vercel.app/compound-interest-calculator",
    type: "website",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Compound Interest Calculator",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  url: "https://wealthcalchub.vercel.app/compound-interest-calculator",
  description:
    "Estimate compound interest growth from an initial investment, monthly contributions, annual return, and time horizon.",
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

export default function CompoundInterestCalculatorLayout({
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

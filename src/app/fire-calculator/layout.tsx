import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "FIRE Calculator",
  description:
    "Estimate your financial independence number and projected years to FIRE using expenses, savings, withdrawal rate, and return assumptions.",
  openGraph: {
    title: "FIRE Calculator | WealthCalcHub",
    description:
      "Estimate your financial independence number and projected years to FIRE using expenses, savings, withdrawal rate, and return assumptions.",
    url: "https://wealthcalchub.vercel.app/fire-calculator",
    type: "website",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "FIRE Calculator",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  url: "https://wealthcalchub.vercel.app/fire-calculator",
  description:
    "Estimate your financial independence number and projected years to FIRE using expenses, savings, withdrawal rate, and return assumptions.",
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

export default function FireCalculatorLayout({
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

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

export default function DividendIncomeCalculatorLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}

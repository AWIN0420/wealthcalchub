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

export default function CompoundInterestCalculatorLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}

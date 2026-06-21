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

export default function FireCalculatorLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}

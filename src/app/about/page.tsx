import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    absolute: "About WealthCalcHub | Free Financial Calculators",
  },
  description:
    "Learn about WealthCalcHub, a free educational website offering financial calculators for compound interest, FIRE planning, and dividend income estimates.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About WealthCalcHub | Free Financial Calculators",
    description:
      "Learn about WealthCalcHub, a free educational website offering financial calculators for compound interest, FIRE planning, and dividend income estimates.",
    url: "/about",
    siteName: "WealthCalcHub",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "About WealthCalcHub | Free Financial Calculators",
    description:
      "Learn about WealthCalcHub, a free educational website offering financial calculators for compound interest, FIRE planning, and dividend income estimates.",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-4xl px-6 py-16">
        <Link
          href="/"
          className="text-sm font-semibold text-emerald-400 hover:text-emerald-300"
        >
          Back to WealthCalcHub
        </Link>

        <div className="mt-10 rounded-3xl border border-slate-800 bg-slate-900/70 p-8 shadow-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">
            About
          </p>

          <h1 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
            About WealthCalcHub
          </h1>

          <p className="mt-6 leading-8 text-slate-300">
            WealthCalcHub is a free, browser-based suite of personal finance
            calculators designed to help individuals visualize the long-term
            impact of saving, investing, and planning for financial
            independence. Every tool runs entirely in your browser &mdash; no
            account required, no data stored.
          </p>

          <p className="mt-4 leading-8 text-slate-300">
            Whether you are just starting to save or already on the path to
            financial independence, our calculators give you a clearer picture
            of where your money could go over time.
          </p>
        </div>

        <div className="mt-8 rounded-3xl border border-slate-800 bg-slate-900/70 p-8 shadow-2xl">
          <h2 className="text-xl font-bold">Our calculators</h2>

          <div className="mt-6 space-y-6">
            <div>
              <h3 className="font-semibold text-emerald-400">
                Compound Interest Calculator
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                See how starting early and contributing consistently can
                compound a small amount of savings into significant wealth over
                decades. Adjust your initial deposit, monthly contributions,
                expected return, and time horizon to explore different
                scenarios.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-emerald-400">
                FIRE Calculator
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                Model your path to financial independence by estimating the
                savings target you need and the timeline to reach it, based on
                your current net worth, savings rate, and expected annual
                spending in retirement.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-emerald-400">
                Dividend Income Calculator
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                Explore how a dividend-focused portfolio can generate passive
                income. Enter your portfolio size and target dividend yield to
                estimate your projected monthly and annual income from
                dividends.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-slate-700 bg-slate-900/50 p-8">
          <h2 className="text-lg font-semibold text-slate-200">
            Educational use only
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-400">
            All content and calculator results on WealthCalcHub are provided
            for educational and informational purposes only. Projections are
            hypothetical and depend entirely on the assumptions you enter. Past
            investment performance does not guarantee future results.
            WealthCalcHub does not provide financial, investment, tax, or legal
            advice. Please consult a licensed financial professional before
            making any investment or financial decision.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-4 text-sm">
          <Link
            href="/privacy-policy"
            className="font-semibold text-emerald-400 hover:text-emerald-300"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="font-semibold text-emerald-400 hover:text-emerald-300"
          >
            Terms and Disclaimer
          </Link>
          <Link
            href="/contact"
            className="font-semibold text-emerald-400 hover:text-emerald-300"
          >
            Contact
          </Link>
        </div>
      </section>
    </main>
  );
}

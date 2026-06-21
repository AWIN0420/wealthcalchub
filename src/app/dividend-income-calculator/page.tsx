"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

export default function DividendIncomeCalculatorPage() {
  const [portfolioValue, setPortfolioValue] = useState(100000);
  const [dividendYield, setDividendYield] = useState(4);
  const [annualContribution, setAnnualContribution] = useState(12000);
  const [years, setYears] = useState(10);

  const result = useMemo(() => {
    const annualDividendIncome = portfolioValue * (dividendYield / 100);
    const monthlyDividendIncome = annualDividendIncome / 12;

    const futurePortfolioValue = portfolioValue + annualContribution * years;
    const futureAnnualDividendIncome =
      futurePortfolioValue * (dividendYield / 100);
    const futureMonthlyDividendIncome = futureAnnualDividendIncome / 12;

    return {
      annualDividendIncome,
      monthlyDividendIncome,
      futurePortfolioValue,
      futureAnnualDividendIncome,
      futureMonthlyDividendIncome,
    };
  }, [portfolioValue, dividendYield, annualContribution, years]);

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(value);

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-white">
      <section className="mx-auto max-w-6xl">
        <Link href="/" className="text-sm text-emerald-400 hover:text-emerald-300">
          ← Back to WealthCalcHub
        </Link>

        <div className="mt-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">
            Free Finance Calculator
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            Dividend Income Calculator
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Estimate your monthly and annual dividend income based on portfolio
            value, dividend yield, and future contributions.
          </p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-[1fr_0.9fr]">
          <section className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
            <h2 className="text-2xl font-bold">Enter your assumptions</h2>

            <div className="mt-6 space-y-5">
              <label className="block">
                <span className="text-sm text-slate-300">Portfolio value</span>
                <input
                  type="number"
                  value={portfolioValue}
                  onChange={(e) => setPortfolioValue(Number(e.target.value))}
                  className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white"
                />
              </label>

              <label className="block">
                <span className="text-sm text-slate-300">Dividend yield (%)</span>
                <input
                  type="number"
                  value={dividendYield}
                  onChange={(e) => setDividendYield(Number(e.target.value))}
                  className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white"
                />
              </label>

              <label className="block">
                <span className="text-sm text-slate-300">
                  Annual contribution
                </span>
                <input
                  type="number"
                  value={annualContribution}
                  onChange={(e) => setAnnualContribution(Number(e.target.value))}
                  className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white"
                />
              </label>

              <label className="block">
                <span className="text-sm text-slate-300">Years</span>
                <input
                  type="number"
                  value={years}
                  onChange={(e) => setYears(Number(e.target.value))}
                  className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white"
                />
              </label>
            </div>
          </section>

          <section className="rounded-3xl border border-emerald-500/30 bg-slate-900 p-8">
            <h2 className="text-2xl font-bold">Estimated result</h2>

            <div className="mt-6 space-y-6">
              <div>
                <p className="text-sm text-slate-400">
                  Current annual dividend income
                </p>
                <p className="mt-1 text-5xl font-bold text-emerald-400">
                  {formatCurrency(result.annualDividendIncome)}
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-400">
                  Current monthly dividend income
                </p>
                <p className="mt-1 text-2xl font-semibold">
                  {formatCurrency(result.monthlyDividendIncome)}
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-400">
                  Future portfolio value
                </p>
                <p className="mt-1 text-2xl font-semibold">
                  {formatCurrency(result.futurePortfolioValue)}
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-400">
                  Future annual dividend income
                </p>
                <p className="mt-1 text-2xl font-semibold">
                  {formatCurrency(result.futureAnnualDividendIncome)}
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-400">
                  Future monthly dividend income
                </p>
                <p className="mt-1 text-2xl font-semibold">
                  {formatCurrency(result.futureMonthlyDividendIncome)}
                </p>
              </div>
            </div>

            <p className="mt-8 text-sm leading-6 text-slate-400">
              This calculator is for educational purposes only. Dividend yields
              can change and results are estimates, not investment advice.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
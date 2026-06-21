"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

export default function CompoundInterestCalculatorPage() {
  const [initialInvestment, setInitialInvestment] = useState(10000);
  const [monthlyContribution, setMonthlyContribution] = useState(500);
  const [annualReturn, setAnnualReturn] = useState(7);
  const [years, setYears] = useState(30);

  const result = useMemo(() => {
    const monthlyRate = annualReturn / 100 / 12;
    const months = years * 12;

    let balance = initialInvestment;

    for (let i = 0; i < months; i++) {
      balance = balance * (1 + monthlyRate) + monthlyContribution;
    }

    const totalContributions =
      initialInvestment + monthlyContribution * months;
    const totalGrowth = balance - totalContributions;

    return {
      futureValue: balance,
      totalContributions,
      totalGrowth,
    };
  }, [initialInvestment, monthlyContribution, annualReturn, years]);

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(value);

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-white">
      <section className="mx-auto max-w-6xl">
        <Link
          href="/"
          className="text-sm text-emerald-400 hover:text-emerald-300"
      >
          ← Back to WealthCalcHub
        </Link>

        <div className="mt-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">
            Free Finance Calculator
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
            Compound Interest Calculator
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Estimate how your investment may grow over time with compound
            returns and regular monthly contributions.
          </p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-[1fr_0.9fr]">
          <section className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
            <h2 className="text-2xl font-bold">Enter your assumptions</h2>

            <div className="mt-6 space-y-5">
              <label className="block">
                <span className="text-sm text-slate-300">
                  Initial investment
                </span>
                <input
                  type="number"
                  value={initialInvestment}
                  onChange={(e) =>
                    setInitialInvestment(Number(e.target.value))
                  }
                  className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white"
                />
              </label>

              <label className="block">
                <span className="text-sm text-slate-300">
                  Monthly contribution
                </span>
                <input
                  type="number"
                  value={monthlyContribution}
                  onChange={(e) =>
                    setMonthlyContribution(Number(e.target.value))
                  }
                  className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white"
                />
              </label>

              <label className="block">
                <span className="text-sm text-slate-300">
                  Annual return (%)
                </span>
                <input
                  type="number"
                  value={annualReturn}
                  onChange={(e) => setAnnualReturn(Number(e.target.value))}
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
                <p className="text-sm text-slate-400">Future value</p>
                <p className="mt-1 text-5xl font-bold text-emerald-400">
                  {formatCurrency(result.futureValue)}
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-400">Total contributions</p>
                <p className="mt-1 text-2xl font-semibold">
                  {formatCurrency(result.totalContributions)}
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-400">Estimated growth</p>
                <p className="mt-1 text-2xl font-semibold">
                  {formatCurrency(result.totalGrowth)}
                </p>
              </div>
            </div>

            <p className="mt-8 text-sm leading-6 text-slate-400">
              This calculator is for educational purposes only. Results are
              estimates and do not guarantee future investment performance.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
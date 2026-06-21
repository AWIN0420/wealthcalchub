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

        <section className="mt-12 rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
          <h2 className="text-2xl font-bold">
            How compound interest works
          </h2>

          <div className="mt-5 space-y-5 text-sm leading-7 text-slate-300">
            <p>
              Compound interest means your investment can earn returns not only
              on your original principal, but also on the growth that has
              already accumulated. Over long periods of time, this compounding
              effect can become one of the most important drivers of investment
              growth.
            </p>

            <p>
              This calculator estimates future value by applying an assumed
              annual return on a monthly basis, then adding the selected monthly
              contribution. The result is a simplified estimate that can help
              you understand how time, contribution amount, and return
              assumptions may affect long-term outcomes.
            </p>

            <p>
              The longer the investment period, the more important the
              compounding effect may become. Even small changes in annual return
              or monthly contributions can create large differences over 20 or
              30 years.
            </p>
          </div>
        </section>

        <section className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-lg font-semibold text-white">
              Initial investment
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              A larger starting balance gives compounding more money to work
              with from the beginning. However, even a smaller starting amount
              can grow meaningfully when combined with consistent contributions.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-lg font-semibold text-white">
              Monthly contributions
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Regular contributions can be powerful because they add new capital
              throughout the investment period. This can help long-term savers
              build wealth even if the initial investment is modest.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-lg font-semibold text-white">
              Time horizon
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Time is one of the most important inputs in compound growth.
              Longer time horizons allow more periods for returns to build on
              prior growth.
            </p>
          </div>
        </section>

        <section className="mt-8 rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
          <h2 className="text-2xl font-bold">
            Frequently asked questions
          </h2>

          <div className="mt-6 space-y-6">
            <div>
              <h3 className="font-semibold text-white">
                Is this calculator a guarantee of future returns?
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                No. The results are estimates based on the assumptions entered.
                Actual investment performance can be higher or lower because of
                market conditions, fees, taxes, inflation, and other factors.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-white">
                Why does the calculator use monthly compounding?
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                Monthly compounding is a common simplified approach for
                long-term planning because many people invest or save monthly.
                Real-world investments may compound differently depending on the
                product, account, or market.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-white">
                What annual return should I enter?
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                The annual return is only an assumption. Conservative users may
                want to test lower return scenarios, while long-term investors
                may compare several different assumptions to understand a range
                of possible outcomes.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-white">
                Does this calculator include taxes, fees, or inflation?
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                No. This calculator provides a simplified estimate and does not
                automatically include taxes, account fees, fund expenses,
                inflation, or changes in contribution behavior.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-3xl border border-amber-500/20 bg-amber-500/10 p-6">
          <h2 className="text-lg font-semibold text-amber-200">
            Important disclaimer
          </h2>
          <p className="mt-3 text-sm leading-7 text-amber-100/90">
            This calculator is for educational and informational purposes only.
            It is not financial, investment, tax, or legal advice. Before making
            financial decisions, consider consulting a qualified professional.
          </p>
        </section>

      </section>
    </main>
  );
}
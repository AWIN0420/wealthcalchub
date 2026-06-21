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

        <section className="mt-12 rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
          <h2 className="text-2xl font-bold">
            How dividend income works
          </h2>

          <div className="mt-5 space-y-5 text-sm leading-7 text-slate-300">
            <p>
              Dividend income is cash flow that investors may receive from
              dividend-paying stocks, funds, or other income-focused
              investments. The amount of dividend income depends mainly on the
              portfolio value and the dividend yield assumption.
            </p>

            <p>
              This calculator estimates current annual dividend income by
              multiplying portfolio value by dividend yield. Monthly dividend
              income is estimated by dividing the annual amount by 12.
            </p>

            <p>
              The future portfolio value in this calculator is a simplified
              estimate based on current portfolio value plus annual
              contributions over the selected number of years. It does not
              automatically assume market growth, dividend reinvestment, taxes,
              or changes in dividend yield.
            </p>
          </div>
        </section>

        <section className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-lg font-semibold text-white">
              Portfolio value
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Portfolio value is the investment base used to estimate dividend
              income. A larger portfolio can generate more income at the same
              dividend yield, but the income is still only an estimate.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-lg font-semibold text-white">
              Dividend yield
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Dividend yield is the annual dividend income divided by portfolio
              value. Higher yields may look attractive, but they can also
              reflect higher risk or a dividend that may not be sustainable.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-lg font-semibold text-white">
              Annual contributions
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Annual contributions increase the estimated future portfolio
              value in this simplified model. The calculator does not assume
              that those contributions earn investment returns before the end
              of the selected period.
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
                Is dividend income guaranteed?
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                No. Dividends can be increased, reduced, suspended, or
                eliminated. Dividend income depends on the investments held and
                the decisions made by companies or fund managers.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-white">
                Does this calculator include dividend reinvestment?
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                No. This calculator uses a simplified model. It estimates future
                portfolio value from current portfolio value plus annual
                contributions. It does not automatically reinvest dividends or
                compound investment returns.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-white">
                Why can a high dividend yield be risky?
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                A high dividend yield may sometimes reflect a falling stock
                price, weaker business outlook, or concern that the dividend may
                be reduced. Yield should be reviewed together with business
                quality, cash flow, payout policy, and risk.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-white">
                Does this calculator include taxes or fees?
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                No. The estimates do not include taxes, brokerage fees, fund
                expenses, withholding taxes, inflation, or currency effects.
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
            It is not financial, investment, tax, or legal advice. Dividend
            income can change over time, and investors should review risks
            carefully before making investment decisions.
          </p>
        </section>

      </section>
    </main>
  );
}
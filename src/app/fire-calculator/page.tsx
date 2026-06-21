"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

export default function FireCalculatorPage() {
  const [annualExpenses, setAnnualExpenses] = useState(50000);
  const [currentSavings, setCurrentSavings] = useState(100000);
  const [annualSavings, setAnnualSavings] = useState(25000);
  const [withdrawalRate, setWithdrawalRate] = useState(4);
  const [annualReturn, setAnnualReturn] = useState(7);

  const result = useMemo(() => {
    const fireNumber = annualExpenses / (withdrawalRate / 100);
    const annualRate = annualReturn / 100;

    let balance = currentSavings;
    let yearsToFire = 0;

    while (balance < fireNumber && yearsToFire < 100) {
      balance = balance * (1 + annualRate) + annualSavings;
      yearsToFire += 1;
    }

    return {
      fireNumber,
      yearsToFire,
      projectedBalance: balance,
      isAlreadyFire: currentSavings >= fireNumber,
    };
  }, [
    annualExpenses,
    currentSavings,
    annualSavings,
    withdrawalRate,
    annualReturn,
  ]);

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
            FIRE Calculator
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Estimate your financial independence number and how long it may take
            to reach FIRE based on your expenses, savings, and assumptions.
          </p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-[1fr_0.9fr]">
          <section className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
            <h2 className="text-2xl font-bold">Enter your assumptions</h2>

            <div className="mt-6 space-y-5">
              <label className="block">
                <span className="text-sm text-slate-300">Annual expenses</span>
                <input
                  type="number"
                  value={annualExpenses}
                  onChange={(e) => setAnnualExpenses(Number(e.target.value))}
                  className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white"
                />
              </label>

              <label className="block">
                <span className="text-sm text-slate-300">Current savings</span>
                <input
                  type="number"
                  value={currentSavings}
                  onChange={(e) => setCurrentSavings(Number(e.target.value))}
                  className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white"
                />
              </label>

              <label className="block">
                <span className="text-sm text-slate-300">Annual savings</span>
                <input
                  type="number"
                  value={annualSavings}
                  onChange={(e) => setAnnualSavings(Number(e.target.value))}
                  className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white"
                />
              </label>

              <label className="block">
                <span className="text-sm text-slate-300">
                  Safe withdrawal rate (%)
                </span>
                <input
                  type="number"
                  value={withdrawalRate}
                  onChange={(e) => setWithdrawalRate(Number(e.target.value))}
                  className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white"
                />
              </label>

              <label className="block">
                <span className="text-sm text-slate-300">
                  Expected annual return (%)
                </span>
                <input
                  type="number"
                  value={annualReturn}
                  onChange={(e) => setAnnualReturn(Number(e.target.value))}
                  className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white"
                />
              </label>
            </div>
          </section>

          <section className="rounded-3xl border border-emerald-500/30 bg-slate-900 p-8">
            <h2 className="text-2xl font-bold">Estimated result</h2>

            <div className="mt-6 space-y-6">
              <div>
                <p className="text-sm text-slate-400">FIRE number</p>
                <p className="mt-1 text-5xl font-bold text-emerald-400">
                  {formatCurrency(result.fireNumber)}
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-400">Estimated years to FIRE</p>
                <p className="mt-1 text-3xl font-semibold">
                  {result.isAlreadyFire
                    ? "Already reached"
                    : `${result.yearsToFire} years`}
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-400">
                  Projected balance at FIRE
                </p>
                <p className="mt-1 text-2xl font-semibold">
                  {formatCurrency(result.projectedBalance)}
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
            How the FIRE number works
          </h2>

          <div className="mt-5 space-y-5 text-sm leading-7 text-slate-300">
            <p>
              FIRE stands for Financial Independence, Retire Early. The core
              idea is to estimate how much invested wealth may be needed to
              cover annual living expenses without relying primarily on active
              employment income.
            </p>

            <p>
              This calculator estimates a FIRE number by dividing annual
              expenses by the selected withdrawal rate. For example, if annual
              expenses are $50,000 and the withdrawal rate assumption is 4%,
              the estimated FIRE number is $1,250,000.
            </p>

            <p>
              The years-to-FIRE estimate then projects how long it may take for
              current savings plus annual savings and assumed annual investment
              returns to reach the FIRE number.
            </p>
          </div>
        </section>

        <section className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-lg font-semibold text-white">
              Annual expenses
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Annual expenses are one of the most important inputs. Lower
              expenses reduce the estimated FIRE number, while higher expenses
              require a larger investment portfolio to support the same
              withdrawal-rate assumption.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-lg font-semibold text-white">
              Annual savings
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Annual savings can shorten the path to financial independence by
              adding new capital each year. A higher savings rate can have a
              large effect because it both increases contributions and may
              reflect lower annual expenses.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-lg font-semibold text-white">
              Withdrawal rate
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              The withdrawal rate is an assumption about how much of the
              portfolio may be withdrawn each year. A lower withdrawal rate
              usually produces a larger FIRE number, while a higher withdrawal
              rate produces a smaller estimate.
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
                Is the FIRE number a guaranteed retirement target?
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                No. The FIRE number is only an estimate based on the expenses
                and withdrawal-rate assumption entered. Real outcomes can vary
                because of market returns, inflation, taxes, health costs,
                lifestyle changes, and unexpected expenses.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-white">
                Why does the withdrawal rate matter so much?
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                The withdrawal rate directly changes the portfolio size needed
                to support estimated expenses. A lower withdrawal rate requires
                more savings but may provide a larger margin of safety.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-white">
                Does this calculator include taxes or inflation?
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                No. This calculator is simplified. It does not automatically
                include income taxes, investment fees, inflation, health
                insurance, housing changes, or future changes in spending.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-white">
                What annual return should I use?
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                The expected annual return is only an assumption. Testing
                conservative, moderate, and optimistic scenarios can help users
                understand how sensitive the FIRE timeline may be.
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
            It is not financial, investment, tax, retirement, or legal advice.
            Before making financial or retirement decisions, consider consulting
            a qualified professional.
          </p>
        </section>

      </section>
    </main>
  );
}
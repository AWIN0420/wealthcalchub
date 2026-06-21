const tools = [
  {
    title: "Compound Interest Calculator",
    description:
      "Estimate how your money can grow over time with regular contributions and compound returns.",
    href: "/compound-interest-calculator",
  },
  {
    title: "FIRE Calculator",
    description:
      "Estimate your financial independence number and see how long it may take to reach it.",
    href: "/fire-calculator",
  },
  {
    title: "Dividend Income Calculator",
    description:
      "Estimate monthly and annual dividend income based on portfolio size and dividend yield.",
    href: "/dividend-income-calculator",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-16">
        <header className="mb-20 flex items-center justify-between">
          <div className="text-xl font-bold tracking-tight">WealthCalcHub</div>
          <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
            <a href="#tools" className="hover:text-white">
              Calculators
            </a>
            <a href="#about" className="hover:text-white">
              About
            </a>
          </nav>
        </header>

        <div className="grid flex-1 items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
          <section>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">
              Free Finance Calculators
            </p>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-5xl">
              Simple tools for smarter money decisions.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              WealthCalcHub helps you estimate compound growth, financial
              independence goals, and dividend income with simple, easy-to-use
              calculators.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#tools"
                className="rounded-full bg-emerald-400 px-6 py-3 text-center font-semibold text-slate-950 hover:bg-emerald-300"
              >
                Explore calculators
              </a>
              <a
                href="#about"
                className="rounded-full border border-slate-700 px-6 py-3 text-center font-semibold text-white hover:border-slate-400"
              >
                Learn more
              </a>
            </div>
          </section>

          <aside className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8 shadow-2xl">
            <p className="text-sm font-medium text-slate-400">Example</p>
            <div className="mt-6 space-y-5">
              <div>
                <p className="text-sm text-slate-400">Initial investment</p>
                <p className="text-3xl font-bold">$10,000</p>
              </div>
              <div>
                <p className="text-sm text-slate-400">Monthly contribution</p>
                <p className="text-3xl font-bold">$500</p>
              </div>
              <div>
                <p className="text-sm text-slate-400">Estimated future value</p>
                <p className="text-5xl font-bold text-emerald-400">$462,040</p>
              </div>
            </div>
          </aside>
        </div>

        <section id="tools" className="py-20">
          <h2 className="text-3xl font-bold">Financial calculators</h2>
          <p className="mt-3 max-w-2xl text-slate-300">
            Start with one of our free tools designed for long-term investing
            and financial planning.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {tools.map((tool) => (
              <a
                key={tool.title}
                href={tool.href}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-emerald-400"
              >
                <h3 className="text-xl font-semibold">{tool.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {tool.description}
                </p>
                <p className="mt-6 text-sm font-semibold text-emerald-400">
                  Open calculator →
                </p>
              </a>
            ))}
          </div>
        </section>

        <section id="about" className="border-t border-slate-800 py-10">
          <p className="max-w-3xl text-sm leading-7 text-slate-400">
            WealthCalcHub provides educational financial calculators. The tools
            are for informational purposes only and should not be considered
            financial, investment, tax, or legal advice.
          </p>
        </section>
      </section>
    </main>
  );
}
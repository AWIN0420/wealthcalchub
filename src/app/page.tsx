import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "WealthCalcHub | Free Financial Calculators & Planning Tools",
  },
  description:
    "Use free finance calculators to estimate compound interest, FIRE goals, and dividend income. Educational tools for long-term saving and investment planning.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "WealthCalcHub | Free Financial Calculators & Planning Tools",
    description:
      "Use free finance calculators to estimate compound interest, FIRE goals, and dividend income. Educational tools for long-term saving and investment planning.",
    url: "/",
    siteName: "WealthCalcHub",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "WealthCalcHub | Free Financial Calculators & Planning Tools",
    description:
      "Use free finance calculators to estimate compound interest, FIRE goals, and dividend income. Educational tools for long-term saving and investment planning.",
  },
};

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

const faqs = [
  {
    q: "Are the calculator results accurate?",
    a: "The results are estimates based on the inputs you provide. They assume a steady rate of return and do not account for taxes, inflation, fees, or market volatility. Use them as a planning guide rather than a precise forecast.",
  },
  {
    q: "Do I need to create an account?",
    a: "No. All calculators are completely free and run in your browser. No sign-up, login, or personal data is required.",
  },
  {
    q: "Is WealthCalcHub providing financial advice?",
    a: "No. WealthCalcHub is an educational resource. The results are for informational purposes only and should not be treated as personalized financial, investment, tax, or legal advice. Always consult a qualified professional before making financial decisions.",
  },
  {
    q: "Can I use these calculators for retirement planning?",
    a: "Yes — the tools are well-suited for exploring retirement scenarios and savings targets. Keep in mind that retirement planning involves many factors a calculator cannot fully capture, so treat the results as a starting point rather than a definitive plan.",
  },
];

const whoItems = [
  "Beginners who want to understand investing concepts before getting started",
  "Savers looking to set realistic long-term financial goals",
  "FIRE community members modeling early retirement timelines",
  "Dividend investors estimating passive income from their portfolio",
  "Students and educators exploring personal finance topics",
  "Anyone curious about how time and compounding affect wealth",
];

const homepageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://wealthcalchub.vercel.app/#organization",
      name: "WealthCalcHub",
      url: "https://wealthcalchub.vercel.app/",
      description:
        "Free educational financial calculators for compound interest, FIRE planning, and dividend income estimates.",
    },
    {
      "@type": "WebSite",
      "@id": "https://wealthcalchub.vercel.app/#website",
      name: "WealthCalcHub",
      url: "https://wealthcalchub.vercel.app/",
      description:
        "Free finance calculators and educational planning tools for long-term saving, investing, FIRE goals, and dividend income.",
      publisher: { "@id": "https://wealthcalchub.vercel.app/#organization" },
      inLanguage: "en",
    },
  ],
};

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageJsonLd) }}
      />
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-16">
        <header className="mb-20 flex items-center justify-between">
          <div className="text-xl font-bold tracking-tight">WealthCalcHub</div>
          <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
            <a href="#tools" className="hover:text-white">
              Calculators
            </a>
            <a href="/about" className="hover:text-white">
              About
            </a>
          </nav>
        </header>

        <div className="grid flex-1 items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
          <section>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">
              Free Finance Calculators
            </p>
            <h1 className="max-w-3xl text-3xl font-bold leading-tight tracking-tight md:text-4xl">
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
                href="/about"
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

        {/* What is WealthCalcHub */}
        <section id="what-is" className="border-t border-slate-800 py-16">
          <h2 className="text-3xl font-bold">What is WealthCalcHub?</h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            WealthCalcHub is a free, browser-based suite of personal finance
            calculators built to help you visualize how saving, investing, and
            time work together to build wealth. Every tool runs entirely in your
            browser &mdash; no account required, no data stored, no strings
            attached.
          </p>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
            Whether you are just starting to save or already on the path to
            financial independence, our calculators give you a clearer picture
            of where your money could go over time.
          </p>
        </section>

        {/* How our calculators help */}
        <section id="how-it-helps" className="border-t border-slate-800 py-16">
          <h2 className="text-3xl font-bold">How our calculators help</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="text-lg font-semibold text-emerald-400">
                Compound Interest
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                See how starting early and contributing consistently can
                compound a small amount of savings into significant wealth over
                decades. Adjust your initial deposit, monthly contributions,
                expected return, and time horizon to explore different
                scenarios.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-emerald-400">
                FIRE Planning
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Model your path to financial independence by estimating the
                savings target you need and the timeline to reach it based on
                your current net worth, savings rate, and expected annual
                spending in retirement.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-emerald-400">
                Dividend Income
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Explore how a dividend-focused portfolio can generate passive
                income. Enter your portfolio size and target dividend yield to
                estimate your projected monthly and annual income from
                dividends.
              </p>
            </div>
          </div>
        </section>

        {/* Who can use these tools */}
        <section id="who" className="border-t border-slate-800 py-16">
          <h2 className="text-3xl font-bold">Who can use these tools?</h2>
          <p className="mt-4 max-w-2xl text-slate-300">
            WealthCalcHub is designed for anyone exploring personal finance
            &mdash; no financial background required.
          </p>
          <ul className="mt-6 grid max-w-3xl gap-4 md:grid-cols-2">
            {whoItems.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm text-slate-300"
              >
                <span className="mt-0.5 font-semibold text-emerald-400">
                  &#10003;
                </span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* FAQ */}
        <section id="faq" className="border-t border-slate-800 py-16">
          <h2 className="text-3xl font-bold">Frequently asked questions</h2>
          <div className="mt-8 max-w-3xl space-y-10">
            {faqs.map(({ q, a }) => (
              <div key={q}>
                <h3 className="text-lg font-semibold">{q}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">{a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Educational disclaimer */}
        <section id="disclaimer" className="border-t border-slate-800 py-12">
          <div className="max-w-3xl rounded-2xl border border-slate-700 bg-slate-900/50 p-8">
            <h2 className="text-lg font-semibold text-slate-200">
              Educational use only
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-400">
              All content and calculator results on WealthCalcHub are provided
              for educational and informational purposes only. Projections are
              hypothetical and depend entirely on the assumptions you enter.
              Past investment performance does not guarantee future results.
              WealthCalcHub does not provide financial, investment, tax, or
              legal advice. Please consult a licensed financial professional
              before making any investment or financial decision.
            </p>
          </div>
        </section>

        <section id="about" className="border-t border-slate-800 py-10">
          <p className="max-w-3xl text-sm leading-7 text-slate-400">
            WealthCalcHub provides educational financial calculators. The tools
            are for informational purposes only and should not be considered
            financial, investment, tax, or legal advice.
          </p>

          <div className="mt-4 flex flex-wrap gap-4 text-sm">
            <a
              href="/privacy-policy"
              className="font-semibold text-emerald-400 hover:text-emerald-300"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="font-semibold text-emerald-400 hover:text-emerald-300"
            >
              Terms and Disclaimer
            </a>
            <a
              href="/contact"
              className="font-semibold text-emerald-400 hover:text-emerald-300"
            >
              Contact
            </a>
          </div>
        </section>
      </section>
    </main>
  );
}

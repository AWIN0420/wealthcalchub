import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms and Disclaimer",
  description:
    "Terms and Disclaimer for WealthCalcHub, including educational use, financial disclaimer, and limitation of liability.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-4xl px-6 py-16">
        <Link
          href="/"
          className="text-sm font-semibold text-emerald-400 hover:text-emerald-300"
        >
          Back to WealthCalcHub
        </Link>

        <nav className="mt-6 flex flex-wrap gap-4 text-sm">
          <Link href="/about" className="font-semibold text-emerald-400 hover:text-emerald-300">
            About
          </Link>
          <Link href="/privacy-policy" className="font-semibold text-emerald-400 hover:text-emerald-300">
            Privacy Policy
          </Link>
          <Link href="/terms" className="font-semibold text-emerald-400 hover:text-emerald-300">
            Terms and Disclaimer
          </Link>
          <Link href="/contact" className="font-semibold text-emerald-400 hover:text-emerald-300">
            Contact
          </Link>
        </nav>

        <div className="mt-10 rounded-3xl border border-slate-800 bg-slate-900/70 p-8 shadow-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">
            Terms and Disclaimer
          </p>

          <h1 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
            Terms and Disclaimer
          </h1>

          <p className="mt-4 text-sm text-slate-400">
            Last updated: June 21, 2026
          </p>

          <div className="mt-8 space-y-8 text-slate-300">
            <section>
              <h2 className="text-xl font-semibold text-white">
                1. Educational Use Only
              </h2>
              <p className="mt-3 leading-7">
                WealthCalcHub provides free financial calculators for general
                educational and informational purposes only. The calculators and
                content on this website are designed to help users estimate
                possible financial scenarios, but they should not be treated as
                professional advice.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                2. Not Financial Advice
              </h2>
              <p className="mt-3 leading-7">
                WealthCalcHub does not provide financial, investment, tax,
                accounting, retirement, or legal advice. Any results generated
                by the calculators are estimates only and may not reflect actual
                future outcomes. You should consult a qualified professional
                before making financial decisions.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                3. No Guarantee of Accuracy
              </h2>
              <p className="mt-3 leading-7">
                We aim to provide useful and easy-to-understand tools, but we do
                not guarantee that the calculations, assumptions, outputs, or
                content are complete, accurate, current, or suitable for your
                personal situation.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                4. User Responsibility
              </h2>
              <p className="mt-3 leading-7">
                You are responsible for reviewing and verifying any calculator
                results before relying on them. Financial outcomes can be
                affected by market performance, inflation, taxes, fees,
                behavioral choices, and other factors that may not be fully
                reflected in the calculators.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                5. Limitation of Liability
              </h2>
              <p className="mt-3 leading-7">
                To the fullest extent permitted by applicable law,
                WealthCalcHub and its operators are not liable for any direct,
                indirect, incidental, consequential, or other damages arising
                from your use of this website or reliance on any calculator
                results.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                6. Third-Party Services
              </h2>
              <p className="mt-3 leading-7">
                This website may use third-party services, including analytics
                and advertising services. Your use of those services may be
                subject to the terms and policies of the relevant third-party
                providers.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                7. Changes to These Terms
              </h2>
              <p className="mt-3 leading-7">
                We may update these Terms and Disclaimer from time to time. Any
                changes will be posted on this page with an updated date.
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
import type { Metadata } from "next";
import Link from "next/link";

const contactEmail = "hw0420@gmail.com";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact WealthCalcHub for questions, feedback, or website-related inquiries.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-4xl px-6 py-16">
        <Link
          href="/"
          className="text-sm font-semibold text-emerald-400 hover:text-emerald-300"
        >
          ← Back to WealthCalcHub
        </Link>

        <div className="mt-10 rounded-3xl border border-slate-800 bg-slate-900/70 p-8 shadow-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">
            Contact
          </p>

          <h1 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
            Contact WealthCalcHub
          </h1>

          <p className="mt-4 leading-7 text-slate-300">
            If you have questions, feedback, or website-related inquiries,
            please contact us by email.
          </p>

          <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-950/60 p-6">
            <p className="text-sm font-semibold text-slate-400">
              Email
            </p>

            <a
              href={`mailto:${contactEmail}`}
              className="mt-2 inline-block text-lg font-semibold text-emerald-400 hover:text-emerald-300"
            >
              {contactEmail}
            </a>
          </div>

          <div className="mt-8 space-y-4 text-sm leading-7 text-slate-400">
            <p>
              WealthCalcHub provides educational financial calculators for
              informational purposes only. We do not provide personalized
              financial, investment, tax, or legal advice.
            </p>

            <p>
              For questions about your personal financial situation, please
              consult a qualified professional.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
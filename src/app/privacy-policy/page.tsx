import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for WealthCalcHub, including how analytics and website usage data may be collected and used.",
};

export default function PrivacyPolicyPage() {
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
            Privacy Policy
          </p>

          <h1 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
            Privacy Policy
          </h1>

          <p className="mt-4 text-sm text-slate-400">
            Last updated: June 21, 2026
          </p>

          <div className="mt-8 space-y-8 text-slate-300">
            <section>
              <h2 className="text-xl font-semibold text-white">
                1. Overview
              </h2>
              <p className="mt-3 leading-7">
                WealthCalcHub provides free educational financial calculators.
                The tools on this website are for informational purposes only
                and are not financial, investment, tax, or legal advice.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                2. Information We Collect
              </h2>
              <p className="mt-3 leading-7">
                We do not require users to create an account or submit personal
                information to use our calculators. However, we may collect
                limited, non-personal website usage information through
                analytics tools, such as pages visited, browser type, device
                type, approximate location, referral source, and interaction
                data.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                3. Google Analytics
              </h2>
              <p className="mt-3 leading-7">
                We use Google Analytics to understand how visitors use this
                website and to improve the user experience. Google Analytics may
                use cookies or similar technologies to collect usage data. This
                information helps us understand traffic trends, popular pages,
                and general website performance.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                4. Cookies and Advertising
              </h2>
              <p className="mt-3 leading-7">
                This website may use cookies or similar technologies for
                analytics and, if advertising is enabled in the future, for ad
                delivery and measurement. Third-party vendors, including Google,
                may use cookies to serve ads based on a user&apos;s prior visits
                to this or other websites.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                5. How We Use Information
              </h2>
              <p className="mt-3 leading-7">
                We use website usage information to maintain the website,
                improve calculator features, understand visitor behavior, and
                evaluate site performance. We do not sell personal information.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                6. Third-Party Services
              </h2>
              <p className="mt-3 leading-7">
                This website may use third-party services such as Google
                Analytics and, in the future, Google AdSense or similar
                advertising services. These services may process data according
                to their own privacy policies and terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">
                7. Contact
              </h2>
              <p className="mt-3 leading-7">
                If you have questions about this Privacy Policy, please contact
                us through the contact information provided on this website.
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
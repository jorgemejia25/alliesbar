"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, CreditCard, FileText, LoaderCircle, LockKeyhole, Send } from "lucide-react";

import { API_URL, apiErrorMessage } from "@/lib/api";
import { enterprisePlan, license } from "@/lib/site-content";

// Card goes through Stripe; a check is arranged with the team, who sets up the
// venues when it arrives.
type Method = "card" | "check";

const FIELD = "mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 font-normal outline-none focus:border-[#b89232]";
const UNIT_PRICE = Number(license.price.replace(/[^0-9.]/g, ""));

/**
 * Enterprise purchase: a group pays for several venues in one transaction and
 * one master user (the email given here) manages all of them. Once Stripe
 * confirms the payment, every venue is set up and linked to that email.
 */
export default function EnterpriseCheckout({ cancelled = false }: { cancelled?: boolean }) {
  const [venues, setVenues] = useState(enterprisePlan.minVenues);
  const [method, setMethod] = useState<Method>("card");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [checkSent, setCheckSent] = useState<{ email: string; venues: number } | null>(null);

  const validVenues = Number.isInteger(venues) && venues >= enterprisePlan.minVenues && venues <= enterprisePlan.maxVenues;
  const total = validVenues ? (UNIT_PRICE * venues).toLocaleString("en-US") : null;

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError(null);
    const form = new FormData(event.currentTarget);
    const text = (name: string) => String(form.get(name) ?? "").trim();
    const optional = (name: string) => (text(name) ? { [name]: text(name) } : {});
    const fallback =
      method === "check"
        ? "We could not send your request. Please try again or call us."
        : "We could not start checkout. Please try again.";
    try {
      const response = await fetch(`${API_URL}/payments/enterprise-checkout`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          company_name: text("company_name"),
          contact_name: text("contact_name"),
          email: text("email"),
          country_code: text("country_code"),
          phone: text("phone"),
          city: text("city"),
          venues,
          payment_method: method,
          ...optional("address"),
          ...optional("venue_names"),
          ...optional("notes"),
        }),
      });
      const body = await response.json().catch(() => null);
      if (!response.ok || !body?.success) throw new Error(apiErrorMessage(body) || fallback);
      if (method === "check") {
        setCheckSent({ email: text("email"), venues });
        setLoading(false);
        return;
      }
      if (!body.checkoutUrl) throw new Error(fallback);
      window.location.assign(body.checkoutUrl);
    } catch (cause) {
      setError(cause instanceof Error && cause.message !== "Failed to fetch" ? cause.message : fallback);
      setLoading(false);
    }
  }

  return (
    <section className="min-h-screen bg-[#171b28] px-6 py-16 font-body text-white md:py-24">
      <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <aside className="h-fit rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-sm">
          <Link href="/pricing" className="inline-flex items-center gap-2 text-sm font-semibold text-[#fed65b] hover:text-white">
            <ArrowLeft size={16} /> Back to pricing
          </Link>
          <p className="mt-12 text-xs font-bold uppercase tracking-[0.24em] text-[#fed65b]">Enterprise</p>
          <h1 className="mt-4 font-headline text-4xl leading-tight">All your venues, one payment.</h1>
          <p className="mt-4 leading-7 text-slate-300">{enterprisePlan.description}</p>
          <ul className="mt-6 flex flex-col gap-3">
            {enterprisePlan.points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-sm text-slate-200">
                <CheckCircle2 aria-hidden size={18} className="mt-0.5 shrink-0 text-[#fed65b]" />
                {point}
              </li>
            ))}
          </ul>
          <div className="mt-10 rounded-2xl bg-[#fed65b] p-6 text-[#171b28]">
            <p className="text-xs font-bold uppercase tracking-[0.18em]">Your order</p>
            <p className="mt-3 font-headline text-3xl font-bold">
              {validVenues ? `${venues} venues` : "Venues"}
            </p>
            <p className="mt-1 text-lg font-semibold">
              {total ? `$${total}` : "—"} <span className="text-sm font-medium">per month</span>
            </p>
            <p className="mt-3 text-sm font-semibold">
              {license.price} per venue · {license.upcLimit} each
            </p>
          </div>
        </aside>

        {checkSent ? (
          <div role="status" className="flex flex-col items-start justify-center rounded-3xl bg-white p-7 text-slate-900 shadow-2xl md:p-10">
            <CheckCircle2 className="text-emerald-600" size={40} />
            <h2 className="mt-5 font-headline text-3xl leading-tight">Request received.</h2>
            <p className="mt-3 leading-7 text-slate-600">
              Our team will contact you at <span className="font-semibold text-slate-900">{checkSent.email}</span> within one business day with the check instructions for your {checkSent.venues} venues.
            </p>
            <p className="mt-3 leading-7 text-slate-600">Your venues are set up as soon as your check arrives.</p>
            <Link href="/" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#171b28] px-6 py-3 text-sm font-bold uppercase tracking-[0.15em] text-white hover:bg-[#29334a]">
              Back to home
            </Link>
          </div>
        ) : (
          <form onSubmit={submit} className="rounded-3xl bg-white p-7 text-slate-900 shadow-2xl md:p-10">
            <label className="block text-sm font-semibold">
              How many venues?
              <span className="mt-2 flex items-center gap-3">
                <input
                  required
                  type="number"
                  name="venues"
                  inputMode="numeric"
                  min={enterprisePlan.minVenues}
                  max={enterprisePlan.maxVenues}
                  step={1}
                  value={Number.isNaN(venues) ? "" : venues}
                  onChange={(event) => setVenues(event.target.valueAsNumber)}
                  className="w-28 rounded-xl border border-slate-200 px-4 py-3 text-lg font-bold outline-none focus:border-[#b89232]"
                />
                <span className="text-sm font-normal text-slate-500">
                  {enterprisePlan.minVenues}–{enterprisePlan.maxVenues} venues. For more, contact us.
                </span>
              </span>
            </label>

            <fieldset className="my-8">
              <legend className="mb-3 text-sm font-semibold">Payment method</legend>
              <div className="grid grid-cols-2 gap-3">
                {([
                  { value: "card", label: "Card", sub: "Pay now with Stripe", Icon: CreditCard },
                  { value: "check", label: "Check", sub: "Set up when it arrives", Icon: FileText },
                ] as const).map(({ value, label, sub, Icon }) => (
                  <button
                    key={value}
                    type="button"
                    aria-pressed={method === value}
                    onClick={() => {
                      setMethod(value);
                      setError(null);
                    }}
                    className={`flex items-start gap-3 rounded-xl border px-4 py-3 text-left transition ${method === value ? "border-[#171b28] bg-slate-50 ring-1 ring-[#171b28]" : "border-slate-200 hover:border-slate-300"}`}
                  >
                    <Icon size={18} className="mt-0.5 shrink-0 text-[#b89232]" />
                    <span>
                      <span className="block text-sm font-bold">{label}</span>
                      <span className="block text-xs text-slate-500">{sub}</span>
                    </span>
                  </button>
                ))}
              </div>
            </fieldset>

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="sm:col-span-2 text-sm font-semibold">
                Company or group name
                <input required name="company_name" autoComplete="organization" maxLength={120} className={FIELD} />
              </label>
              <label className="text-sm font-semibold">
                Contact name
                <input required name="contact_name" autoComplete="name" maxLength={120} className={FIELD} />
              </label>
              <label className="text-sm font-semibold">
                Master user email
                <input required type="email" name="email" autoComplete="email" maxLength={160} className={FIELD} />
              </label>
              <p className="sm:col-span-2 -mt-2 text-xs leading-5 text-slate-500">
                This email signs in to every venue and receives the access details.
              </p>
              <label className="text-sm font-semibold">
                Country code
                <input required name="country_code" defaultValue="+1" maxLength={8} className={FIELD} />
              </label>
              <label className="text-sm font-semibold">
                Phone / WhatsApp
                <input required type="tel" name="phone" autoComplete="tel" maxLength={30} className={FIELD} />
              </label>
              <label className="text-sm font-semibold">
                City
                <input required name="city" autoComplete="address-level2" maxLength={120} className={FIELD} />
              </label>
              <label className="text-sm font-semibold">
                Billing address <span className="font-normal text-slate-500">(optional)</span>
                <input name="address" autoComplete="street-address" maxLength={200} className={FIELD} />
              </label>
              <label className="sm:col-span-2 text-sm font-semibold">
                Venue names <span className="font-normal text-slate-500">(optional, one per line)</span>
                <textarea name="venue_names" rows={3} maxLength={2000} placeholder={"Rooftop Bar\nLobby Lounge"} className={FIELD} />
              </label>
              <label className="sm:col-span-2 text-sm font-semibold">
                Notes <span className="font-normal text-slate-500">(optional)</span>
                <textarea name="notes" rows={2} maxLength={1000} placeholder="Billing contact, best time to call…" className={FIELD} />
              </label>
            </div>

            {cancelled && !error && (
              <p className="mt-6 rounded-xl bg-amber-50 px-4 py-3 text-sm text-amber-800">
                Checkout was cancelled. You can try again whenever you&apos;re ready.
              </p>
            )}
            {error && (
              <p role="alert" className="mt-5 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
                {error}
              </p>
            )}
            <label className="mt-6 flex items-start gap-3 text-sm leading-6 text-slate-700">
              <input required type="checkbox" name="accept_terms" className="mt-1 size-4 shrink-0 accent-[#171b28]" />
              <span>
                I have read and agree to the{" "}
                <Link href="/terms" target="_blank" className="font-semibold text-slate-900 underline underline-offset-2 hover:text-[#b89232]">
                  Terms and Conditions
                </Link>
                .
              </span>
            </label>
            <button
              disabled={loading || !validVenues}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#171b28] px-6 py-4 text-sm font-bold uppercase tracking-[0.15em] text-white transition hover:bg-[#29334a] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? <LoaderCircle className="animate-spin" size={18} /> : method === "check" ? <Send size={18} /> : <LockKeyhole size={18} />}
              {method === "check" ? "Request check payment" : "Continue to Stripe"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

"use client";

import { FormEvent, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, CreditCard, FileText, LoaderCircle, LockKeyhole, Send } from "lucide-react";

import { API_URL, apiErrorMessage } from "@/lib/api";

type Plan = "initial" | "upgrade";
// Card goes through Stripe; a check is arranged with the team, who activates the venue when it arrives.
type Method = "card" | "check";

const planDetails: Record<Plan, { label: string; price: string; period: string; upcs: string; short: string }> = {
  initial: { label: "Initial license", price: "$299", period: "per month", upcs: "Up to 1,000 distinct UPCs", short: "Initial · $299" },
  upgrade: { label: "Upgrade license", price: "$399", period: "per month", upcs: "1,001 – 10,000 distinct UPCs", short: "Upgrade · $399" },
};

export default function PaymentCheckout({ initialPlan, cancelled = false }: { initialPlan: Plan; cancelled?: boolean }) {
  const [plan, setPlan] = useState<Plan>(initialPlan);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [method, setMethod] = useState<Method>("card");
  const [checkSent, setCheckSent] = useState<{ email: string } | null>(null);
  const detail = useMemo(() => planDetails[plan], [plan]);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError(null);
    const form = new FormData(event.currentTarget);
    const newClient = {
      name: form.get("name"),
      email: form.get("email"),
      country_code: form.get("country_code"),
      whatsapp: form.get("whatsapp"),
      address: form.get("address") || "Not provided",
      city: form.get("city"),
    };
    const fallback =
      method === "check"
        ? "We could not send your request. Please try again or call us."
        : "We could not start checkout. Please try again.";
    try {
      if (method === "check") {
        const notes = String(form.get("notes") ?? "").trim();
        const response = await fetch(`${API_URL}/payments/check-request`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ plan_type: plan, new_client: newClient, ...(notes ? { notes } : {}) }),
        });
        const body = await response.json();
        if (!response.ok || !body.success) throw new Error(apiErrorMessage(body) || fallback);
        setCheckSent({ email: String(newClient.email) });
        setLoading(false);
        return;
      }
      const response = await fetch(`${API_URL}/payments/checkout`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan_type: plan, new_client: newClient }),
      });
      const body = await response.json();
      if (!response.ok || !body.checkoutUrl) {
        throw new Error(apiErrorMessage(body) || fallback);
      }
      window.location.assign(body.checkoutUrl);
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : fallback);
      setLoading(false);
    }
  }

  return (
    <section className="min-h-screen bg-[#171b28] px-6 py-16 text-white md:py-24">
      <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <aside className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-sm">
          <Link href="/pricing" className="inline-flex items-center gap-2 text-sm font-semibold text-[#fed65b] hover:text-white">
            <ArrowLeft size={16} /> Back to pricing
          </Link>
          <p className="mt-12 text-xs font-bold uppercase tracking-[0.24em] text-[#fed65b]">{method === "check" ? "Pay by check" : "Secure checkout"}</p>
          <h1 className="mt-4 font-headline text-4xl leading-tight">Start with Allies.</h1>
          <p className="mt-4 leading-7 text-slate-300">
            {method === "check"
              ? "Choose a plan and enter your venue details. We'll send you the check instructions, and your venue account is activated as soon as your check arrives."
              : "Choose a plan, enter your venue details, then complete payment securely with Stripe. Your venue account is created automatically."}
          </p>
          <div className="mt-10 rounded-2xl bg-[#fed65b] p-6 text-[#171b28]">
            <p className="text-xs font-bold uppercase tracking-[0.18em]">Selected plan</p>
            <p className="mt-3 font-headline text-3xl font-bold">{detail.label}</p>
            <p className="mt-1 text-lg font-semibold">{detail.price} <span className="text-sm font-medium">{detail.period}</span></p>
            <p className="mt-3 text-sm font-semibold">{detail.upcs}</p>
          </div>
        </aside>

        {checkSent ? (
          <div role="status" className="flex flex-col items-start justify-center rounded-3xl bg-white p-7 text-slate-900 shadow-2xl md:p-10">
            <CheckCircle2 className="text-emerald-600" size={40} />
            <h2 className="mt-5 font-headline text-3xl leading-tight">Request received.</h2>
            <p className="mt-3 leading-7 text-slate-600">
              Our team will contact you at <span className="font-semibold text-slate-900">{checkSent.email}</span> within one business day with the check instructions for the {detail.label.toLowerCase()} ({detail.price} {detail.period}).
            </p>
            <p className="mt-3 leading-7 text-slate-600">Your venue account is activated as soon as your check arrives.</p>
            <Link href="/" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#171b28] px-6 py-3 text-sm font-bold uppercase tracking-[0.15em] text-white hover:bg-[#29334a]">
              Back to home
            </Link>
          </div>
        ) : (
        <form onSubmit={submit} className="rounded-3xl bg-white p-7 text-slate-900 shadow-2xl md:p-10">
          <div className="mb-8 flex rounded-xl bg-slate-100 p-1">
            {(["initial", "upgrade"] as Plan[]).map((value) => (
              <button key={value} type="button" onClick={() => setPlan(value)} className={`flex-1 rounded-lg px-3 py-3 text-sm font-bold transition ${plan === value ? "bg-[#171b28] text-white shadow" : "text-slate-600"}`}>
                {planDetails[value].short}
              </button>
            ))}
          </div>
          <fieldset className="mb-8">
            <legend className="mb-3 text-sm font-semibold">Payment method</legend>
            <div className="grid grid-cols-2 gap-3">
              {([
                { value: "card", label: "Card", sub: "Pay now with Stripe", Icon: CreditCard },
                { value: "check", label: "Check", sub: "Activated when it arrives", Icon: FileText },
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
            <label className="sm:col-span-2 text-sm font-semibold">Venue name<input required name="name" className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#b89232]" /></label>
            <label className="sm:col-span-2 text-sm font-semibold">Email<input required type="email" name="email" className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#b89232]" /></label>
            <label className="text-sm font-semibold">Country code<input required name="country_code" defaultValue="+1" className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#b89232]" /></label>
            <label className="text-sm font-semibold">WhatsApp<input required name="whatsapp" className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#b89232]" /></label>
            <label className="sm:col-span-2 text-sm font-semibold">City<input required name="city" className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#b89232]" /></label>
            <label className="sm:col-span-2 text-sm font-semibold">Address <span className="font-normal text-slate-500">(optional)</span><input name="address" className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#b89232]" /></label>
            {method === "check" && (
              <label className="sm:col-span-2 text-sm font-semibold">Notes <span className="font-normal text-slate-500">(optional)</span><textarea name="notes" rows={3} maxLength={1000} placeholder="Billing contact, best time to call…" className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#b89232]" /></label>
            )}
          </div>
          {cancelled && !error && <p className="mb-6 rounded-xl bg-amber-50 px-4 py-3 text-sm text-amber-800">Checkout was cancelled. You can try again whenever you&apos;re ready.</p>}
          {error && <p role="alert" className="mt-5 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>}
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
          <button disabled={loading} className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#171b28] px-6 py-4 text-sm font-bold uppercase tracking-[0.15em] text-white transition hover:bg-[#29334a] disabled:cursor-wait disabled:opacity-70">
            {loading ? <LoaderCircle className="animate-spin" size={18} /> : method === "check" ? <Send size={18} /> : <LockKeyhole size={18} />}
            {method === "check" ? "Request check payment" : "Continue to Stripe"}
          </button>
        </form>
        )}
      </div>
    </section>
  );
}

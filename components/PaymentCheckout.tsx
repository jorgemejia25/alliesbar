"use client";

import { FormEvent, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft, LoaderCircle, LockKeyhole } from "lucide-react";

const API_URL = "https://api.alliesbar.com";
type Plan = "initial" | "upgrade";

const planDetails: Record<Plan, { label: string; price: string; period: string; upcs: string; short: string }> = {
  initial: { label: "Initial license", price: "$299", period: "per month", upcs: "Up to 1,000 distinct UPCs", short: "Initial · $299" },
  upgrade: { label: "Upgrade license", price: "$399", period: "per month", upcs: "1,001 – 10,000 distinct UPCs", short: "Upgrade · $399" },
};

export default function PaymentCheckout({ initialPlan, cancelled = false }: { initialPlan: Plan; cancelled?: boolean }) {
  const [plan, setPlan] = useState<Plan>(initialPlan);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const detail = useMemo(() => planDetails[plan], [plan]);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError(null);
    const form = new FormData(event.currentTarget);
    try {
      const response = await fetch(`${API_URL}/payments/checkout`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          plan_type: plan,
          new_client: {
            name: form.get("name"),
            email: form.get("email"),
            country_code: form.get("country_code"),
            whatsapp: form.get("whatsapp"),
            address: form.get("address") || "Not provided",
            city: form.get("city"),
          },
        }),
      });
      const body = await response.json();
      if (!response.ok || !body.checkoutUrl) {
        throw new Error(body.message || "We could not start checkout. Please try again.");
      }
      window.location.assign(body.checkoutUrl);
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "We could not start checkout. Please try again.");
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
          <p className="mt-12 text-xs font-bold uppercase tracking-[0.24em] text-[#fed65b]">Secure checkout</p>
          <h1 className="mt-4 font-headline text-4xl leading-tight">Start with Allies.</h1>
          <p className="mt-4 leading-7 text-slate-300">Choose a plan, enter your venue details, then add a card securely with Stripe. Your 90-day free trial starts right away and your venue account is created automatically.</p>
          <div className="mt-10 rounded-2xl bg-[#fed65b] p-6 text-[#171b28]">
            <p className="text-xs font-bold uppercase tracking-[0.18em]">Selected plan</p>
            <p className="mt-3 font-headline text-3xl font-bold">{detail.label}</p>
            <p className="mt-1 text-lg font-semibold">{detail.price} <span className="text-sm font-medium">{detail.period}</span></p>
            <p className="mt-3 text-sm font-semibold">{detail.upcs}</p>
            <p className="mt-4 rounded-lg bg-[#171b28] px-3 py-2 text-sm font-bold text-[#fed65b]">90-day free trial · {detail.price} billed after the trial. Cancel anytime.</p>
          </div>
        </aside>

        <form onSubmit={submit} className="rounded-3xl bg-white p-7 text-slate-900 shadow-2xl md:p-10">
          <div className="mb-8 flex rounded-xl bg-slate-100 p-1">
            {(["initial", "upgrade"] as Plan[]).map((value) => (
              <button key={value} type="button" onClick={() => setPlan(value)} className={`flex-1 rounded-lg px-3 py-3 text-sm font-bold transition ${plan === value ? "bg-[#171b28] text-white shadow" : "text-slate-600"}`}>
                {planDetails[value].short}
              </button>
            ))}
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="sm:col-span-2 text-sm font-semibold">Venue name<input required name="name" className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#b89232]" /></label>
            <label className="sm:col-span-2 text-sm font-semibold">Email<input required type="email" name="email" className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#b89232]" /></label>
            <label className="text-sm font-semibold">Country code<input required name="country_code" defaultValue="+1" className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#b89232]" /></label>
            <label className="text-sm font-semibold">WhatsApp<input required name="whatsapp" className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#b89232]" /></label>
            <label className="sm:col-span-2 text-sm font-semibold">City<input required name="city" className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#b89232]" /></label>
            <label className="sm:col-span-2 text-sm font-semibold">Address <span className="font-normal text-slate-500">(optional)</span><input name="address" className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-[#b89232]" /></label>
          </div>
          {cancelled && !error && <p className="mb-6 rounded-xl bg-amber-50 px-4 py-3 text-sm text-amber-800">Checkout was cancelled. You can try again whenever you&apos;re ready.</p>}
          {error && <p role="alert" className="mt-5 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>}
          <button disabled={loading} className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-[#171b28] px-6 py-4 text-sm font-bold uppercase tracking-[0.15em] text-white transition hover:bg-[#29334a] disabled:cursor-wait disabled:opacity-70">
            {loading ? <LoaderCircle className="animate-spin" size={18} /> : <LockKeyhole size={18} />} Start 90-day free trial
          </button>
        </form>
      </div>
    </section>
  );
}

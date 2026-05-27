"use client";

import { ArrowRight, CheckCircle2, Globe2, ScanBarcode, Users } from "lucide-react";

import { pricingFeatures, pricingPlans, purchaseHref } from "@/lib/site-content";

import FadeIn from "./FadeIn";

const licenseNotes = [
  {
    icon: Users,
    title: "Unlimited users",
    body: "Every license supports the full team without per-seat limits.",
  },
  {
    icon: Globe2,
    title: "Remote access",
    body: "Review inventory and reports from any device with internet access.",
  },
  {
    icon: ScanBarcode,
    title: "Barcode additions",
    body: "Register bottles that are not already in the database using their barcode.",
  },
];

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="bg-surface-container-lowest px-6 py-24 text-on-surface md:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <FadeIn direction="up">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-secondary">
              Simple Pricing Plan
            </p>
            <h1 className="mb-4 font-headline text-4xl leading-tight text-primary md:text-5xl">
              Select your license
            </h1>
            <p className="text-lg font-medium text-on-surface-variant">
              Both plans include the complete Allie&apos;s inventory system, label
              printing access, documentation, support, and future updates.
            </p>
          </div>
        </FadeIn>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          {pricingPlans.map((plan, index) => (
            <FadeIn key={plan.name} direction="up" duration={0.55 + index * 0.15}>
              <article className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">
                <div className="mb-8 flex items-start justify-between gap-4">
                  <div>
                    <span className="mb-4 inline-flex rounded-full bg-secondary-fixed px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-on-secondary-fixed">
                      {plan.eyebrow}
                    </span>
                    <h2 className="font-headline text-3xl font-bold text-primary">
                      {plan.name}
                    </h2>
                  </div>
                  <div className="rounded-2xl bg-surface-container p-3 text-secondary">
                    <CheckCircle2 aria-hidden size={26} />
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex flex-wrap items-end gap-2">
                    <span className="text-5xl font-bold tracking-tight text-primary">
                      {plan.price}
                    </span>
                    <span className="pb-2 font-semibold text-on-surface-variant">
                      / {plan.period}
                    </span>
                  </div>
                  <p className="mt-3 min-h-6 text-sm font-bold uppercase tracking-[0.16em] text-on-surface-variant">
                    {plan.description}
                  </p>
                </div>

                <div className="mb-8 grow">
                  <p className="mb-4 font-bold text-primary">Includes:</p>
                  <ul className="flex flex-col gap-4">
                    {pricingFeatures.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle2
                          aria-hidden
                          size={20}
                          className="mt-0.5 shrink-0 text-secondary"
                        />
                        <span className="font-medium text-on-surface-variant">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={purchaseHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary-container px-6 py-4 text-sm font-bold uppercase tracking-[0.16em] text-on-primary transition-all hover:opacity-90 active:scale-95"
                >
                  Purchase Plan
                  <ArrowRight aria-hidden size={18} />
                </a>
              </article>
            </FadeIn>
          ))}
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-4 md:grid-cols-3">
          {licenseNotes.map((note, index) => {
            const Icon = note.icon;

            return (
              <FadeIn key={note.title} direction="up" delay={index * 0.08}>
                <article className="h-full rounded-2xl border border-slate-200 bg-surface-container-low p-6 dark:border-slate-800">
                  <Icon aria-hidden className="mb-5 text-secondary" size={28} />
                  <h3 className="mb-2 font-headline text-xl font-bold text-primary">
                    {note.title}
                  </h3>
                  <p className="text-sm leading-6 text-on-surface-variant">
                    {note.body}
                  </p>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

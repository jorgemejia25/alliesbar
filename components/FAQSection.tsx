"use client";

import Link from "next/link";
import { ChevronDown, CircleHelp, CreditCard, Mail } from "lucide-react";

import { faqItems } from "@/lib/site-content";

import FadeIn from "./FadeIn";

export default function FAQSection() {
  return (
    <section className="bg-surface-container-lowest px-6 pb-24 pt-32 text-on-surface md:px-8">
      <div className="mx-auto max-w-7xl">
        <FadeIn direction="up">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-secondary">
              FAQ
            </p>
            <h1 className="mb-4 font-headline text-5xl leading-tight text-primary md:text-6xl">
              Answers before you set up your bar
            </h1>
            <p className="text-lg font-medium text-on-surface-variant">
              The source FAQ focuses on installation, missing bottles, license
              users, and remote access.
            </p>
          </div>
        </FadeIn>

        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
          <aside className="lg:col-span-4">
            <FadeIn direction="right">
              <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg dark:border-slate-800 dark:bg-slate-900">
                <CircleHelp aria-hidden className="mb-5 text-secondary" size={32} />
                <h2 className="mb-3 font-headline text-2xl font-bold text-primary">
                  Need a direct answer?
                </h2>
                <p className="mb-6 leading-7 text-on-surface-variant">
                  Contact the team for details about prices, printers and
                  labels, or any setup question that is not covered here.
                </p>
                <div className="flex flex-col gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary-container px-5 py-3 font-bold text-on-primary transition-all hover:opacity-90 active:scale-95"
                  >
                    Contact us
                    <Mail aria-hidden size={18} />
                  </Link>
                  <Link
                    href="/pricing"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-primary-container px-5 py-3 font-bold text-primary transition-colors hover:bg-primary-container hover:text-on-primary"
                  >
                    View pricing
                    <CreditCard aria-hidden size={18} />
                  </Link>
                </div>
              </article>
            </FadeIn>
          </aside>

          <div className="lg:col-span-8">
            <div className="flex flex-col gap-4">
              {faqItems.map((item, index) => (
                <FadeIn
                  key={item.question}
                  direction="left"
                  delay={index * 0.06}
                  duration={0.45}
                >
                  <details
                    className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all open:shadow-lg dark:border-slate-800 dark:bg-slate-900"
                    open={index === 0}
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-headline text-xl font-bold text-primary">
                      {item.question}
                      <ChevronDown
                        aria-hidden
                        className="shrink-0 text-secondary transition-transform group-open:rotate-180"
                        size={22}
                      />
                    </summary>
                    <p className="mt-4 leading-7 text-on-surface-variant">
                      {item.answer}
                    </p>
                  </details>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

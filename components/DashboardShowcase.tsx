"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/**
 * Coded mock of the Allie's Dashboard (Overview): the cards appear one by one,
 * then the highlight walks through them and the side panel explains what each
 * one tells you. Sample figures only — not a real venue.
 */

type Tone = "default" | "good" | "warning" | "critical";

interface ShowcaseCard {
  id: string;
  label: string;
  value: string;
  sub: string;
  tone: Tone;
  title: string;
  body: string;
}

const CARDS: ShowcaseCard[] = [
  {
    id: "value",
    label: "Inventory value",
    value: "$52,480",
    sub: "on hand · 5 outlets",
    tone: "default",
    title: "What your stock is worth",
    body: "The value of everything on hand right now, overall or by outlet and category.",
  },
  {
    id: "used",
    label: "Amount used",
    value: "$8,920",
    sub: "consumption · this month",
    tone: "default",
    title: "What was used and what it cost",
    body: "Consumption valued at cost, from the counts and finished bottles your team records.",
  },
  {
    id: "cogs",
    label: "COGS %",
    value: "19.6%",
    sub: "Healthy · target ≤ 22%",
    tone: "good",
    title: "Cost of goods against revenue",
    body: "Daily beverage COGS by outlet and category, instead of waiting for month-end.",
  },
  {
    id: "purchases",
    label: "Purchases",
    value: "$6,340",
    sub: "received · this month",
    tone: "default",
    title: "What came in",
    body: "Every delivery verified at receiving, with the price paid, so costs stay current.",
  },
  {
    id: "par",
    label: "Under PAR",
    value: "12",
    sub: "reorder before you run out",
    tone: "critical",
    title: "What to reorder",
    body: "Products below their PAR level and how many days of stock are left, before a stockout.",
  },
  {
    id: "activity",
    label: "Recent activity",
    value: "48",
    sub: "counts · transfers · receiving",
    tone: "warning",
    title: "Who did what, and when",
    body: "Counts, transfers and receiving as they happen, with the user, the date and the time.",
  },
];

const TONE: Record<Tone, string> = {
  default: "text-[#171b28]",
  good: "text-emerald-600",
  warning: "text-amber-600",
  critical: "text-red-600",
};

const CYCLE_MS = 3200;

export default function DashboardShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);
  // A click stops the automatic walk so the visitor can read at their pace.
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!inView || paused || reduceMotion) return;
    // Start walking once every card has appeared.
    const id = window.setInterval(() => setActive((i) => (i + 1) % CARDS.length), CYCLE_MS);
    return () => window.clearInterval(id);
  }, [inView, paused, reduceMotion]);

  const select = (i: number) => {
    setActive(i);
    setPaused(true);
  };

  const current = CARDS[active];

  return (
    <div ref={ref} className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_300px] gap-6 lg:gap-10 items-center">
      {/* Browser frame with the dashboard */}
      <div className="rounded-2xl border border-outline-variant/50 bg-white shadow-[0_30px_80px_-30px_rgba(23,27,40,0.35)] overflow-hidden">
        <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
          <span className="ml-3 truncate rounded-md bg-white px-3 py-0.5 text-[11px] text-slate-400 border border-slate-200">
            alliesbar.com/dashboard
          </span>
        </div>

        <div className="flex items-center justify-between gap-3 border-b border-slate-200 px-4 sm:px-6 h-11">
          <span className="text-[13px] font-semibold text-[#171b28]">
            Dashboard <span className="font-normal text-slate-400">· Overview</span>
          </span>
          <span className="hidden sm:flex items-center rounded-sm border border-slate-200 text-[10px] text-slate-500 overflow-hidden">
            <span className="px-2 py-0.5">7 days</span>
            <span className="px-2 py-0.5 border-l border-slate-200 bg-[#171b28] text-white">This month</span>
            <span className="px-2 py-0.5 border-l border-slate-200">Year</span>
          </span>
        </div>

        <ul className="grid grid-cols-2 md:grid-cols-3 gap-2.5 sm:gap-3 bg-slate-50/70 p-3 sm:p-5">
          {CARDS.map((card, i) => {
            const on = i === active;
            return (
              <motion.li
                key={card.id}
                initial={reduceMotion ? false : { opacity: 0, y: 18, scale: 0.97 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : undefined}
                transition={{ duration: 0.45, delay: reduceMotion ? 0 : 0.15 + i * 0.18, ease: "easeOut" }}
              >
                <button
                  type="button"
                  onClick={() => select(i)}
                  aria-pressed={on}
                  className={`relative w-full h-full text-left rounded-xl border bg-white px-3 py-3 sm:px-4 sm:py-4 transition-all duration-300 ${
                    on
                      ? "border-[#e9c349] shadow-[0_0_0_3px_rgba(254,214,91,0.35)] -translate-y-0.5"
                      : "border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <span className="block text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                    {card.label}
                  </span>
                  <span className={`mt-1.5 block font-headline text-2xl sm:text-3xl leading-none tabular-nums ${TONE[card.tone]}`}>
                    {card.value}
                  </span>
                  <span className="mt-1.5 block truncate text-[10px] sm:text-[11px] text-slate-400">{card.sub}</span>
                </button>
              </motion.li>
            );
          })}
        </ul>
      </div>

      {/* What the highlighted card tells you */}
      <div className="flex flex-col gap-5">
        <div className="min-h-[148px] rounded-2xl bg-[#171b28] p-6 text-white">
          <motion.div
            key={current.id}
            initial={reduceMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            aria-live="polite"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#fed65b]">{current.label}</p>
            <h3 className="mt-2 font-headline text-2xl leading-snug">{current.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">{current.body}</p>
          </motion.div>
        </div>

        <div className="flex items-center justify-center lg:justify-start gap-2" role="tablist" aria-label="Dashboard cards">
          {CARDS.map((card, i) => (
            <button
              key={card.id}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-label={card.label}
              onClick={() => select(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === active ? "w-8 bg-[#e9c349]" : "w-3 bg-outline-variant/60 hover:bg-outline-variant"
              }`}
            />
          ))}
        </div>
        <p className="text-center lg:text-left text-[11px] text-on-surface-variant/60">
          Sample figures. Tap a card to read about it.
        </p>
      </div>
    </div>
  );
}

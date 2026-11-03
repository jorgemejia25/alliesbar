"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Coded mock of the Allie's Dashboard (Overview), with the same cards as the
 * app: KPIs, operations panels and charts. They appear one by one, then the
 * highlight walks through them and the side panel explains what each one tells
 * you. Sample figures only — not a real venue.
 */

const NAVY = "#171b28";
const RED = "text-red-600";
const AMBER = "text-amber-600";
const GREEN = "text-emerald-600";

function Kpi({ value, sub, tone = "text-[#171b28]" }: { value: string; sub: string; tone?: string }) {
  return (
    <>
      <span className={`mt-1.5 block font-headline text-xl sm:text-2xl leading-none tabular-nums ${tone}`}>{value}</span>
      <span className="mt-1.5 block truncate text-[10px] text-slate-400">{sub}</span>
    </>
  );
}

const GLANCE = [
  { label: "Under PAR", value: "12", tone: RED },
  { label: "Low stock", value: "27", tone: AMBER },
  { label: "Awaiting", value: "3", tone: AMBER },
  { label: "On track", value: "291", tone: GREEN },
  { label: "Items", value: "1,284", tone: "text-[#171b28]" },
  { label: "Outlets", value: "5", tone: "text-[#171b28]" },
];

function Glance() {
  return (
    <span className="mt-2 grid grid-cols-3 gap-x-2 gap-y-2">
      {GLANCE.map((s) => (
        <span key={s.label} className="min-w-0">
          <span className="block truncate text-[8px] uppercase tracking-wide text-slate-400">{s.label}</span>
          <span className={`block text-sm font-bold leading-tight tabular-nums ${s.tone}`}>{s.value}</span>
        </span>
      ))}
    </span>
  );
}

function Rows({ rows }: { rows: { title: string; sub: string; dot?: string; right?: string }[] }) {
  return (
    <span className="mt-2 flex flex-col gap-2">
      {rows.map((r) => (
        <span key={r.title} className="flex items-center gap-2 min-w-0">
          {r.dot && <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${r.dot}`} />}
          <span className="min-w-0 flex-1">
            <span className="block truncate text-[10px] font-semibold leading-tight text-[#171b28]">{r.title}</span>
            <span className="block truncate text-[9px] leading-tight text-slate-400">{r.sub}</span>
          </span>
          {r.right && <span className="shrink-0 text-[9px] font-semibold tabular-nums text-red-600">{r.right}</span>}
        </span>
      ))}
    </span>
  );
}

function Shortcuts() {
  return (
    <span className="mt-2 grid grid-cols-2 gap-1.5">
      {["Usage", "Receiving", "Inventory", "PAR", "Labels", "All reports"].map((r) => (
        <span key={r} className="truncate rounded-md border border-slate-200 px-1.5 py-1 text-[9px] font-medium text-[#171b28]">
          {r}
        </span>
      ))}
    </span>
  );
}

const TREND = [34, 58, 22, 71, 45, 90, 38, 64, 52, 100, 41, 76];

function PurchasesChart() {
  return (
    <span className="mt-3 flex h-16 items-end gap-1" aria-hidden>
      {TREND.map((h, i) => (
        <span key={i} className="flex-1 rounded-t-sm" style={{ height: `${h}%`, backgroundColor: NAVY }} />
      ))}
    </span>
  );
}

const MIX = [
  { label: "Liquor", share: 58, color: NAVY, value: "$30.4k" },
  { label: "Wine", share: 27, color: "#b89232", value: "$14.2k" },
  { label: "Beer", share: 15, color: "#94a3b8", value: "$7.9k" },
];

function InventoryMix() {
  return (
    <>
      <span className="mt-3 flex h-2.5 overflow-hidden rounded-full" aria-hidden>
        {MIX.map((m) => (
          <span key={m.label} style={{ width: `${m.share}%`, backgroundColor: m.color }} />
        ))}
      </span>
      <span className="mt-2.5 flex flex-col gap-1">
        {MIX.map((m) => (
          <span key={m.label} className="flex items-center gap-1.5 text-[10px]">
            <span className="h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: m.color }} />
            <span className="flex-1 text-slate-500">{m.label}</span>
            <span className="font-semibold tabular-nums text-[#171b28]">{m.value}</span>
          </span>
        ))}
      </span>
    </>
  );
}

const TOP = [
  { name: "House Vodka 1L", cost: "$1,240", share: 100 },
  { name: "Silver Tequila 750mL", cost: "$985", share: 79 },
  { name: "Draft Lager Keg", cost: "$760", share: 61 },
  { name: "Pinot Noir 750mL", cost: "$540", share: 44 },
];

function TopProducts() {
  return (
    <span className="mt-2 flex flex-col gap-1.5">
      {TOP.map((p) => (
        <span key={p.name} className="block">
          <span className="flex justify-between gap-2 text-[9px]">
            <span className="truncate font-medium text-[#171b28]">{p.name}</span>
            <span className="shrink-0 tabular-nums text-slate-500">{p.cost}</span>
          </span>
          <span className="mt-0.5 block h-1 rounded-full bg-slate-100">
            <span className="block h-full rounded-full bg-[#b89232]" style={{ width: `${p.share}%` }} />
          </span>
        </span>
      ))}
    </span>
  );
}

interface ShowcaseCard {
  id: string;
  label: string;
  content: ReactNode;
  title: string;
  body: string;
}

const KPI_CARDS: ShowcaseCard[] = [
  {
    id: "used",
    label: "Amount used",
    content: <Kpi value="$8,920" sub="consumption · this month" />,
    title: "What was used and what it cost",
    body: "Consumption valued at cost, from the counts and finished bottles your team records.",
  },
  {
    id: "cogs",
    label: "COGS %",
    content: <Kpi value="19.6%" sub="Healthy" tone={GREEN} />,
    title: "Cost of goods against revenue",
    body: "Beverage COGS for the period and the categories you choose, instead of waiting for month-end.",
  },
  {
    id: "units",
    label: "Units consumed",
    content: <Kpi value="612" sub="used · this month" />,
    title: "How much went out",
    body: "Units used in the period, with partial bottles counted by what was actually poured.",
  },
  {
    id: "purchases",
    label: "Purchases",
    content: <Kpi value="$6,340" sub="received · this month" />,
    title: "What came in",
    body: "Every delivery verified at receiving, with the price paid, so costs stay current.",
  },
  {
    id: "value",
    label: "Inventory value",
    content: <Kpi value="$52,480" sub="1,284 units on hand" />,
    title: "What your stock is worth",
    body: "The value of everything on hand right now, with the breakdown by category.",
  },
];

const OPS_CARDS: ShowcaseCard[] = [
  {
    id: "glance",
    label: "Operation at a glance",
    content: <Glance />,
    title: "The state of your stock",
    body: "Products under PAR, low on stock or awaiting a count, next to everything that's on track, across your outlets.",
  },
  {
    id: "activity",
    label: "Recent activity",
    content: (
      <Rows
        rows={[
          { title: "27 items low on stock", sub: "Review and reorder", dot: "bg-amber-500" },
          { title: "Reorder House Vodka 1L", sub: "Liquor · 2 on hand", dot: "bg-red-500", right: "1d left" },
          { title: "Reorder Draft Lager", sub: "Beer · 1 on hand", dot: "bg-red-500", right: "2d left" },
        ]}
      />
    ),
    title: "What needs you today",
    body: "What to reorder and how many days of stock are left, before it becomes a stockout.",
  },
  {
    id: "shortcuts",
    label: "Report shortcuts",
    content: <Shortcuts />,
    title: "Your reports, one tap away",
    body: "Usage, Receiving, Inventory and PAR reports, plus label printing, right from the Dashboard.",
  },
  {
    id: "notifications",
    label: "Notifications",
    content: (
      <Rows
        rows={[
          { title: "Receiving completed", sub: "Main Bar · 2 h ago", dot: "bg-[#b89232]" },
          { title: "Quick Count finished", sub: "Rooftop · 5 h ago", dot: "bg-[#b89232]" },
          { title: "Transfer confirmed", sub: "Banquets · yesterday", dot: "bg-slate-300" },
        ]}
      />
    ),
    title: "Who did what, and when",
    body: "Counts, transfers and receiving as they happen, so you know what your team did without asking.",
  },
];

const CHART_CARDS: ShowcaseCard[] = [
  {
    id: "trend",
    label: "Purchases",
    content: <PurchasesChart />,
    title: "Spending, day by day",
    body: "What you received each day of the period, so an unusual order stands out.",
  },
  {
    id: "mix",
    label: "Inventory on hand",
    content: <InventoryMix />,
    title: "Where your money is sitting",
    body: "The value on hand by category, to see at a glance where your capital is tied up.",
  },
  {
    id: "top",
    label: "Top used products",
    content: <TopProducts />,
    title: "What drives your cost",
    body: "The products behind most of your usage cost in the period, ranked.",
  },
];

const ROWS = [
  { cards: KPI_CARDS, grid: "grid-cols-2 md:grid-cols-5" },
  { cards: OPS_CARDS, grid: "grid-cols-1 sm:grid-cols-2 xl:grid-cols-4" },
  { cards: CHART_CARDS, grid: "grid-cols-1 sm:grid-cols-3" },
];

const CARDS = ROWS.flatMap((row) => row.cards);

const CYCLE_MS = 3200;
const APPEAR_STEP_S = 0.1;

export default function DashboardShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);
  // A click stops the automatic walk so the visitor can read at their pace.
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!inView || paused || reduceMotion) return;
    const id = window.setInterval(() => setActive((i) => (i + 1) % CARDS.length), CYCLE_MS);
    return () => window.clearInterval(id);
  }, [inView, paused, reduceMotion]);

  const select = (i: number) => {
    setActive(i);
    setPaused(true);
  };

  const current = CARDS[active];

  return (
    <div ref={ref} className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_280px] gap-6 lg:gap-8 items-center">
      {/* Browser frame with the dashboard */}
      <div className="order-2 lg:order-1 rounded-2xl border border-outline-variant/50 bg-white shadow-[0_30px_80px_-30px_rgba(23,27,40,0.35)] overflow-hidden">
        <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
          <span className="ml-3 truncate rounded-md bg-white px-3 py-0.5 text-[11px] text-slate-400 border border-slate-200">
            alliesbar.com/dashboard
          </span>
        </div>

        <div className="flex items-center justify-between gap-3 border-b border-slate-200 px-4 sm:px-5 h-11">
          <span className="text-[13px] font-semibold text-[#171b28]">
            Dashboard <span className="font-normal text-slate-400">· Overview</span>
          </span>
          <span className="hidden sm:flex items-center rounded-sm border border-slate-200 text-[10px] text-slate-500 overflow-hidden">
            <span className="px-2 py-0.5 bg-[#171b28] text-white">This month</span>
            <span className="px-2 py-0.5 border-l border-slate-200">Last month</span>
            <span className="px-2 py-0.5 border-l border-slate-200">Custom</span>
          </span>
        </div>

        <div className="flex flex-col gap-2 sm:gap-2.5 bg-slate-50/70 p-2.5 sm:p-4">
          {ROWS.map((row, r) => {
            const before = ROWS.slice(0, r).reduce((n, x) => n + x.cards.length, 0);
            return (
              <ul key={row.cards[0].id} className={`grid gap-2 sm:gap-2.5 ${row.grid}`}>
                {row.cards.map((card, c) => {
                  const i = before + c;
                  const on = i === active;
                  return (
                    <motion.li
                      key={card.id}
                      initial={reduceMotion ? false : { opacity: 0, y: 14, scale: 0.97 }}
                      animate={inView ? { opacity: 1, y: 0, scale: 1 } : undefined}
                      transition={{ duration: 0.4, delay: reduceMotion ? 0 : 0.15 + i * APPEAR_STEP_S, ease: "easeOut" }}
                      className="min-w-0"
                    >
                      <button
                        type="button"
                        onClick={() => select(i)}
                        aria-pressed={on}
                        className={`block w-full h-full text-left rounded-xl border bg-white px-3 py-2.5 transition-all duration-300 ${
                          on
                            ? "border-[#e9c349] shadow-[0_0_0_3px_rgba(254,214,91,0.35)]"
                            : "border-slate-200 hover:border-slate-300"
                        }`}
                      >
                        <span className="block truncate text-[9px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                          {card.label}
                        </span>
                        {card.content}
                      </button>
                    </motion.li>
                  );
                })}
              </ul>
            );
          })}
        </div>
      </div>

      {/* What the highlighted card tells you. First on phones: the dashboard is
          long there, and this stays next to the top of it. */}
      <div className="order-1 lg:order-2 flex flex-col gap-4">
        <div className="min-h-[176px] rounded-2xl bg-[#171b28] p-6 text-white">
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

        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-1.5" role="group" aria-label="Dashboard cards">
          {CARDS.map((card, i) => (
            <button
              key={card.id}
              type="button"
              aria-pressed={i === active}
              aria-label={card.label}
              onClick={() => select(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === active ? "w-6 bg-[#e9c349]" : "w-2.5 bg-outline-variant/60 hover:bg-outline-variant"
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

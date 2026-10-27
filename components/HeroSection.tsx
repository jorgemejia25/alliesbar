"use client";

import FadeIn from "./FadeIn";
import Link from "next/link";

// SVG viewBox is 1024×1024. Logo content occupies:
//   top:    y=304  → 29.7% from top
//   bottom: y=660  → 64.5% from top
//   height ratio:  34.8% of total SVG height
const CONTENT_TOP = 0.297;
const CONTENT_HEIGHT = 0.348;

// Small breathing room so the top of the A is never clipped.
const BUFFER = 0.03;
const CLIP_TOP = CONTENT_TOP - BUFFER;        // 0.267
const CLIP_HEIGHT = CONTENT_HEIGHT + BUFFER * 2; // 0.408

// Impact figures from the Case Study (The Starling Atlanta Midtown, Sep 2026),
// so a first-time visitor sees what the product does before scrolling.
const CASE_STUDY = [
  { value: "3 h", label: "Full inventory count", before: "15 h" },
  { value: "< 5 min", label: "Final report", before: "4+ h" },
  { value: "1–2", label: "Stockouts a month", before: "6–10" },
  { value: "Daily", label: "Beverage COGS", before: "Month-end" },
];

function GoldLogo({ maxWidth = 520 }: { maxWidth?: number }) {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth,
        // paddingTop drives height = CLIP_HEIGHT × width (aspect-ratio trick)
        height: 0,
        paddingTop: `${CLIP_HEIGHT * 100}%`,
        overflow: "hidden",
      }}
    >
      {/*
        translateY percentage resolves against the element's own rendered height
        (paddingTop: 100% → height = width = W), so translateY(-CLIP_TOP × 100%)
        shifts the SVG up by exactly CLIP_TOP × W — aligning the letter tops with
        the container's top edge. Using `top` instead would resolve against the
        containing block's height: 0, giving zero offset (the original bug).
      */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: 0,
          paddingTop: "100%",
          transform: `translateY(-${CLIP_TOP * 100}%)`,
          backgroundColor: "#fed65b",
          maskImage: "url(/new-logo.svg)",
          WebkitMaskImage: "url(/new-logo.svg)",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
          maskSize: "contain",
          WebkitMaskSize: "contain",
          maskPosition: "center top",
          WebkitMaskPosition: "center top",
        }}
      />
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-svh flex items-center justify-center overflow-hidden font-body py-28">

      {/* ── Background ── */}
      <div className="absolute inset-0 z-0 bg-[#171b28]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="w-full h-full object-cover opacity-20 mix-blend-luminosity"
          src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=2674&auto=format&fit=crop"
          alt="Atmospheric luxury bar interior with warm ambient lighting"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#171b28] via-[#171b28]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#f2f3ff] via-[#f2f3ff]/8 to-transparent" />
        {/* Subtle central gold bloom */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 65% 50% at 50% 50%, rgba(254,214,91,0.06) 0%, transparent 100%)",
          }}
        />
      </div>

      {/* ── Content — single centered column ── */}
      <FadeIn
        direction="up"
        duration={0.9}
        className="relative z-10 flex flex-col items-center text-center px-6 w-full max-w-2xl mx-auto gap-5"
      >
        {/* Eyebrow badge */}
        <span className="inline-flex items-center gap-1.5 px-4 py-1.5 text-[#fed65b]/60 font-medium tracking-[0.2em] text-[9px] uppercase bg-[#fed65b]/5 rounded-full border border-[#fed65b]/10">
          <span className="w-[3px] h-[3px] rounded-full bg-[#fed65b]/70 inline-block" />
          The Gold Standard in Inventory
        </span>

        {/* Gold logo — responsive, CSS-only sizing */}
        <GoldLogo maxWidth={520} />

        {/* Powered by AI */}
        <div className="flex items-center justify-center gap-2 -mt-1">
          <span className="text-[9px] text-slate-400/70 font-light tracking-[0.25em] uppercase">
            Powered by AI
          </span>
          <span className="relative flex h-[5px] w-[5px]">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#fed65b] opacity-65" />
            <span className="relative inline-flex rounded-full h-[5px] w-[5px] bg-[#fed65b]" />
          </span>
        </div>

        {/* Thin gold rule */}
        <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#fed65b]/40 to-transparent" />

        {/* Subheadline */}
        <p className="max-w-md text-slate-300/80 text-[13px] sm:text-sm md:text-[15px] leading-relaxed font-light -mt-1">
          Elevate your hospitality operations. A seamless blend of artificial
          intelligence and professional bar management for the modern curator.
        </p>

        {/* CTA */}
        <Link
          href="/pricing"
          className="inline-block px-9 py-3.5 bg-[#fed65b] text-[#171b28] text-[10px] font-bold tracking-[0.18em] uppercase rounded-full hover:bg-[#e9c349] active:scale-95 transition-all duration-200 shadow-[0_0_50px_rgba(254,214,91,0.15)] hover:shadow-[0_0_70px_rgba(254,214,91,0.3)]"
        >
          Get Started
        </Link>

        {/* Case Study impact */}
        <div className="w-full mt-6">
          <p className="mb-3 text-[9px] font-medium uppercase tracking-[0.25em] text-[#fed65b]/70">
            Case study · The Starling Atlanta Midtown
          </p>
          {/* gap-px over a light background draws the dividers on any column count */}
          <dl className="grid grid-cols-2 sm:grid-cols-4 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10">
            {CASE_STUDY.map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-1 px-3 py-4 bg-[#171b28]/90 backdrop-blur-sm">
                <dd className="order-1 font-headline text-2xl md:text-3xl text-white leading-none">
                  {item.value}
                </dd>
                <dt className="order-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-300/90">
                  {item.label}
                </dt>
                <span className="order-3 text-[10px] text-slate-400/70">
                  Before: {item.before}
                </span>
              </div>
            ))}
          </dl>
        </div>
      </FadeIn>
    </section>
  );
}

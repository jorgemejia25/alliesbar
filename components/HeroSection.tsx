"use client";

import FadeIn from "./FadeIn";
import dynamic from "next/dynamic";

const HeroGlbModel = dynamic(() => import("./HeroGlbModel"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full rounded-full bg-white/5 animate-pulse" />
  ),
});

export default function HeroSection() {
  return (
    <section 
      className="relative h-screen flex flex-col items-center justify-center pt-24 pb-12 px-6 overflow-hidden"
      style={{ fontFamily: '"Century Gothic", Futura, sans-serif' }}
    >
      {/* Background image with brand dark overlay */}
      <div className="absolute inset-0 z-0 bg-[#171b28]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
          src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=2674&auto=format&fit=crop"
          alt="Atmospheric luxury bar interior with warm ambient lighting"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#171b28]/80 via-[#171b28]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#f2f3ff] via-transparent to-transparent" />
      </div>

      {/* Content */}
      <FadeIn direction="up" duration={0.8} className="relative z-10 max-w-4xl w-full text-center flex flex-col items-center mt-6">
        
        {/* 3D Model with Dashed Border (Bordes punteados) */}
        <div className="relative w-56 h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 mb-6 flex items-center justify-center">
          {/* Rotating dashed outer circle */}
          <svg
            viewBox="0 0 100 100"
            className="absolute inset-0 w-full h-full animate-[spin_20s_linear_infinite] text-[#fed65b]/40"
          >
            <circle
              cx="50"
              cy="50"
              r="49"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              strokeDasharray="2 4"
            />
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              strokeDasharray="4 8"
              className="opacity-50"
            />
          </svg>

          {/* Subtle glow behind the 3D model */}
          <div className="absolute inset-0 bg-[#fed65b]/10 blur-[60px] rounded-full pointer-events-none" />
          
          {/* The actual 3D GLB Model */}
          <HeroGlbModel className="w-[85%] h-[85%] relative z-10 drop-shadow-2xl" />
        </div>

        {/* Eyebrow badge / Advertising Phrase */}
        <span className="inline-block px-4 py-1.5 mb-4 text-slate-400 font-medium tracking-widest text-[10px] uppercase bg-white/5 backdrop-blur-sm rounded-full border border-white/5">
          The Gold Standard in Inventory
        </span>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl text-white leading-tight font-normal tracking-tight drop-shadow-lg mb-2">
          Allie&apos;s Bar
        </h1>
        
        {/* Inventory System */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-[#fed65b] leading-tight font-light tracking-[0.2em] uppercase drop-shadow-lg mb-4">
          Inventory System
        </h2>

        {/* Powered by AI */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="text-xs md:text-sm text-slate-300 font-light tracking-wide uppercase">Powered by AI</span>
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#fed65b] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#fed65b]"></span>
          </span>
        </div>

        {/* Subheadline */}
        <p className="max-w-2xl mx-auto text-slate-300 text-base md:text-lg leading-relaxed mb-8 font-light drop-shadow-md">
          Elevate your hospitality operations. A seamless blend of artificial intelligence and professional bar management experience for the modern curator.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button className="w-full sm:w-auto px-8 py-4 bg-[#fed65b] text-[#171b28] text-sm font-medium tracking-wide uppercase rounded-full hover:bg-[#e9c349] active:scale-95 transition-all shadow-[0_0_20px_rgba(254,214,91,0.2)]">
            Get Started
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-white/5 text-white border border-white/10 text-sm font-light tracking-wide uppercase rounded-full hover:bg-white/10 active:scale-95 transition-all backdrop-blur-sm">
            See How It Works
          </button>
        </div>
      </FadeIn>
    </section>
  );
}

import FadeIn from "./FadeIn";
import RotatingLogo from "./RotatingLogo";

export default function HeroSection() {
  return (
    <section 
      className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 overflow-hidden"
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
      <FadeIn direction="up" duration={0.8} className="relative z-10 max-w-4xl w-full text-center flex flex-col items-center mt-12">
        
        {/* Rotating Logo */}
        <RotatingLogo className="w-24 h-24 mb-8" />

        {/* Eyebrow badge / Advertising Phrase - moved to top */}
        <span className="inline-block px-4 py-1.5 mb-6 text-slate-400 font-medium tracking-widest text-[10px] uppercase bg-white/5 backdrop-blur-sm rounded-full border border-white/5">
          The Gold Standard in Inventory
        </span>

        {/* Name */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl text-white leading-tight font-bold tracking-tighter drop-shadow-lg mb-2">
          Allie&apos;s Bar
        </h1>
        
        {/* Inventory System */}
        <h2 className="text-4xl md:text-5xl lg:text-7xl text-[#fed65b] leading-tight font-bold tracking-tight drop-shadow-lg mb-4">
          Inventory System
        </h2>

        {/* Powered by AI */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <span className="text-sm md:text-base text-slate-300 font-light tracking-wide uppercase">Powered by AI</span>
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#fed65b] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#fed65b]"></span>
          </span>
        </div>

        {/* Subheadline */}
        <p className="max-w-2xl mx-auto text-slate-300 text-lg md:text-xl leading-relaxed mb-12 font-light drop-shadow-md">
          Elevate your hospitality operations. A seamless blend of artificial intelligence and professional bar management experience for the modern curator.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto px-8 py-4 bg-[#fed65b] text-[#171b28] text-base font-bold rounded-full hover:bg-[#e9c349] active:scale-95 transition-all shadow-[0_0_20px_rgba(254,214,91,0.2)]">
            Get Started
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-white/5 text-white border border-white/10 text-base font-medium rounded-full hover:bg-white/10 active:scale-95 transition-all backdrop-blur-sm">
            See How It Works
          </button>
        </div>
      </FadeIn>
    </section>
  );
}

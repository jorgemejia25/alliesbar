const heroCards = [
  {
    icon: "liquor",
    title: "Real-time Stock",
    description:
      "Precision monitoring of every bottle across multiple locations instantly.",
    offset: "",
  },
  {
    icon: "monitoring",
    title: "Loss Mitigation",
    description:
      "AI-driven variance detection identifies exactly where revenue is leaking.",
    offset: "mt-0 md:mt-8",
  },
  {
    icon: "bolt",
    title: "One-Tap Scan",
    description:
      "Rapid mobile scanning using bottle recognition for 90% faster inventory.",
    offset: "mt-0 md:mt-16",
  },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
      {/* Background image with gradient overlay */}
      <div className="absolute inset-0 z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="w-full h-full object-cover opacity-10 blur-sm"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZGcqf67fQ9lxqJIpfjMzXhr19SR2ksuZRtoEboIOZdVCubBacaAjXj2VH5kYTBLqy0jUapTNx5CFSmVpwbe_f9ANgiwUZa54tbZMJXQYQe0O_RsB-Uqfl0voeuGCVC66IDU8vqXuII0fq418pzRH_tvo36XP0snhVEnYy8vdrSGtXtERquNU0xRlddelIM_KQo5MNV_pMAvwJMSRXgyfP83kLvblCBSiAzuNu-5O3PQ7QilZ1Mj2B0qYEb8lZD3fVzJhHWburp_o"
          alt="Atmospheric luxury bar interior with warm ambient lighting"
        />
        <div className="absolute inset-0 hero-gradient" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl w-full text-center">
        {/* Eyebrow badge */}
        <span className="inline-block px-4 py-1.5 mb-8 text-secondary font-semibold tracking-widest text-xs uppercase bg-secondary-fixed rounded-full">
          The Gold Standard in Inventory
        </span>

        {/* Headline */}
        <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl text-primary leading-tight mb-8">
          Precision poured into <br />
          <span className="italic">every drop.</span>
        </h1>

        {/* Subheadline */}
        <p className="max-w-2xl mx-auto text-on-surface-variant text-lg md:text-xl leading-relaxed mb-12 font-light">
          Elevate your hospitality operations with Allie&apos;s Bar. A seamless
          blend of artificial intelligence and professional bar management
          experience for the modern curator.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="w-full sm:w-auto px-10 py-5 bg-primary-container text-on-primary text-lg font-semibold rounded-xl hover:opacity-90 active:scale-95 transition-all shadow-xl shadow-primary-container/10">
            Get Started
          </button>
          <button className="w-full sm:w-auto px-10 py-5 bg-surface-container-highest text-primary text-lg font-semibold rounded-xl hover:bg-surface-container-high active:scale-95 transition-all">
            See How It Works
          </button>
        </div>

        {/* Glassmorphic feature cards */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-6xl mx-auto px-4">
          {heroCards.map((card) => (
            <div
              key={card.title}
              className={`glass-panel p-8 rounded-2xl shadow-lg border border-white/40 ${card.offset}`}
            >
              <div className="text-secondary mb-4">
                <span className="material-symbols-outlined text-4xl">
                  {card.icon}
                </span>
              </div>
              <h3 className="text-xl font-headline font-semibold mb-2">
                {card.title}
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

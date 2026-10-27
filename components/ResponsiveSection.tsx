import DashboardShowcase from "./DashboardShowcase";
import FadeIn from "./FadeIn";

export default function ResponsiveSection() {
  return (
    <section className="py-24 md:py-36 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Header row */}
        <FadeIn direction="up" className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <div>
            <p className="text-secondary font-semibold tracking-[0.2em] text-xs uppercase mb-4">
              Built for the people behind the bar
            </p>
            <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl text-primary leading-tight">
              Fully Responsive{" "}
              <span className="italic">by Design</span>
            </h2>
          </div>
          <p className="text-on-surface-variant text-base md:text-lg max-w-xs md:text-right leading-relaxed">
            Seamlessly transition from bar-back tablet entry to executive
            office reporting.
          </p>
        </FadeIn>

        {/* Dashboard: the cards appear one by one and explain themselves */}
        <FadeIn direction="up" delay={0.1}>
          <DashboardShowcase />
        </FadeIn>

        {/* Bottom caption row */}
        <FadeIn direction="up" delay={0.8} className="mt-6 flex items-center gap-4">
          <div className="h-px flex-1 bg-outline-variant/40" />
          <span className="text-xs text-on-surface-variant/60 tracking-widest uppercase shrink-0">
            Allie&apos;s Beverage — Precision Inventory
          </span>
          <div className="h-px flex-1 bg-outline-variant/40" />
        </FadeIn>

      </div>
    </section>
  );
}

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

        {/* Photo grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 md:gap-4 md:h-[600px]">

          {/* Large left photo */}
          <FadeIn direction="left" delay={0.2} className="md:col-span-3 md:row-span-2 relative overflow-hidden rounded-2xl aspect-[3/4] md:aspect-auto group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/IMG_6173.png"
              alt="Bar owner at the marble counter"
              className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
            {/* subtle bottom vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none rounded-2xl" />
          </FadeIn>

          {/* Right column — flex so we can size each photo independently */}
          <div className="md:col-span-2 flex flex-col gap-3 md:gap-4 md:h-full">

            {/* Top-right photo — fixed shorter height */}
            <FadeIn direction="right" delay={0.4} className="relative overflow-hidden rounded-2xl aspect-video md:aspect-auto md:h-[220px] md:shrink-0 group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/IMG_6197.jpeg"
                alt="Founders at the venue"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            </FadeIn>

            {/* Bottom-right photo — grows to fill remaining height */}
            <FadeIn direction="right" delay={0.6} className="relative overflow-hidden rounded-2xl aspect-[4/3] md:aspect-auto md:flex-1 md:min-h-0 isolate group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/IMG_6199.jpeg"
                alt="Bar owner in the lounge"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            </FadeIn>

          </div>

        </div>

        {/* Bottom caption row */}
        <FadeIn direction="up" delay={0.8} className="mt-6 flex items-center gap-4">
          <div className="h-px flex-1 bg-outline-variant/40" />
          <span className="text-xs text-on-surface-variant/60 tracking-widest uppercase shrink-0">
            Allie&apos;s Bar — Precision Inventory
          </span>
          <div className="h-px flex-1 bg-outline-variant/40" />
        </FadeIn>

      </div>
    </section>
  );
}

import FadeIn from "./FadeIn";

export default function StorySection() {
  return (
    <section className="py-32 bg-surface-container-low overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Images column */}
          <FadeIn direction="right" className="order-2 lg:order-1">
            <div className="relative">
              {/* Primary image */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="w-full aspect-[4/5] object-cover rounded-2xl shadow-2xl relative z-10"
                src="/IMG_6197.jpeg"
                alt="Professional bartender hands carefully preparing a premium cocktail"
              />

              {/* Decorative yellow background shape */}
              <div className="absolute -top-10 -right-10 w-72 h-96 bg-secondary-fixed rounded-2xl -z-0 hidden lg:block" />

              {/* Secondary floating image */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="absolute -bottom-16 -right-16 w-64 h-80 object-cover rounded-2xl shadow-2xl z-20 border-8 border-surface-container-low hidden lg:block"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQyjovwKADplD7EuhWyNGDKLNS_loR-Zbzj-_hAACwkMkYy3vGLA_z-aZOp4nsTd1Rr2QijDaP_72vDx7lSiBe1AZ6h_uwUHJdAl86zMTJCZUPlzTCvfTPSKaNxXbx0arvfre76sL2-dqQu_AaGyF2FUGNSa3Mffyez3_eSbBGALxkl1NDNevDckAE7Qn4qbTgBra__cMJ2RqIOQWRnrkM3J1cXbCWC98NEKFSoJXMd7KrYNSigAPJe4eex5Mu4XEJgvqZG1CyjUM"
                alt="Rows of backlit premium spirit bottles on a high-end bar shelf"
              />
            </div>
          </FadeIn>

          {/* Text column */}
          <FadeIn direction="left" delay={0.2} className="order-1 lg:order-2 space-y-8">
            <span className="text-secondary font-bold tracking-[0.2em] uppercase text-xs">
              Our Heritage
            </span>
            <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl text-primary leading-tight">
              A shared vision born from{" "}
              <span className="italic">25 years of service.</span>
            </h2>
            <p className="text-on-surface-variant text-lg leading-relaxed">
              We don&apos;t just build software; we translate the hospitality
              language into digital intelligence. Allie&apos;s Bar was founded
              by industry veterans who spent decades behind the mahogany,
              understanding that inventory isn&apos;t just about counting
              bottles—it&apos;s about protecting your craft and your bottom
              line.
            </p>
            <p className="text-on-surface-variant text-lg leading-relaxed">
              Our system is designed to disappear into your workflow, providing
              the data you need without distracting you from what matters most:
              your guests.
            </p>
            <div className="pt-8">
              <a
                className="inline-flex items-center gap-4 text-primary font-bold group"
                href="#"
              >
                <span>Read our full story</span>
                <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">
                  arrow_forward
                </span>
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

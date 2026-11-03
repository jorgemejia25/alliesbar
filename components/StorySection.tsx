import FadeIn from "./FadeIn";
import Link from "next/link";

export default function StorySection() {
  return (
    <section className="py-32 bg-surface-container-low overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* The product it became */}
          <FadeIn direction="right" className="order-2 lg:order-1">
            <div className="relative flex aspect-square items-start justify-center gap-4 overflow-hidden rounded-2xl bg-[#171b28] px-5 pt-8 shadow-2xl sm:gap-6 sm:px-8 sm:pt-10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="w-1/2 rounded-[1.75rem] border-[6px] border-black/60 shadow-2xl"
                src="/app/dashboard.jpg"
                alt="The Allie's Dashboard on a phone, with under-PAR products and recent activity"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="mt-10 w-1/2 rounded-[1.75rem] border-[6px] border-black/60 shadow-2xl"
                src="/app/measure.jpg"
                alt="Allie's measuring the liquid left in a bottle from a photo"
              />
            </div>
          </FadeIn>

          {/* Text column */}
          <FadeIn direction="left" delay={0.2} className="order-1 lg:order-2 space-y-8">
            <span className="text-secondary font-bold tracking-[0.2em] uppercase text-xs">
              The story behind Allie&apos;s
            </span>
            <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl text-primary leading-tight">
              &ldquo;What if we could{" "}
              <span className="italic">do it better?&rdquo;</span>
            </h2>
            <p className="text-on-surface-variant text-lg leading-relaxed">
              That simple question changed everything. After more than 25
              years in hospitality, Timothy used a beverage inventory platform
              he liked, but it had limitations. When Alejandra saw it, she
              realized the problem wasn&apos;t a lack of technology. It was
              that technology could do so much more.
            </p>
            <p className="text-on-surface-variant text-lg leading-relaxed">
              He knew the industry. She knew processes, technology and AI.
              Together, they built Allie&apos;s: a smarter, simpler way to
              manage beverage inventory, born from a real problem rather than
              a boardroom.
            </p>
            <div className="pt-8">
              <Link
                href="/us"
                className="inline-flex items-center gap-4 text-primary font-bold group"
              >
                <span>Read our full story</span>
                <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">
                  arrow_forward
                </span>
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

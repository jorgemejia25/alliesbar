import FadeIn from "./FadeIn";
import Link from "next/link";

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
                className="w-full aspect-[4/5] object-cover object-[center_70%] rounded-2xl shadow-2xl relative z-10"
                src="/founders.jpg"
                alt="Timothy and Alejandra, the founders of Allie's, seated on a hotel staircase"
              />

              {/* Decorative yellow background shape */}
              <div className="absolute -top-10 -right-10 w-72 h-96 bg-secondary-fixed rounded-2xl -z-0 hidden lg:block" />

              {/* Secondary floating image */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="absolute -bottom-16 -right-16 w-52 aspect-[9/16] object-cover object-top rounded-[1.75rem] shadow-2xl z-20 border-[6px] border-[#171b28] hidden lg:block"
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

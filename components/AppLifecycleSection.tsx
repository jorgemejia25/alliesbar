import Image from "next/image";

import { bottleLifecycle } from "@/lib/site-content";

import FadeIn from "./FadeIn";

export default function AppLifecycleSection() {
  return (
    <section id="how-it-works" className="py-32 px-6 bg-surface-container-low overflow-hidden">
      {/* Section header */}
      <FadeIn direction="up" className="max-w-3xl mx-auto text-center mb-20">
        <span className="text-secondary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
          Inside the app
        </span>
        <h2 className="font-headline text-4xl md:text-5xl text-primary mb-6">
          Follow one bottle through{" "}
          <span className="italic">its lifecycle</span>
        </h2>
        <p className="text-on-surface-variant text-lg leading-relaxed">
          Receiving, transfer, inventory, bottle measurement and cost control
          in one web platform. These are real screens from Allie&apos;s.
        </p>
      </FadeIn>

      {/* Steps grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
        {bottleLifecycle.map((item, index) => (
          <FadeIn
            key={item.step}
            direction="up"
            delay={(index % 3) * 0.1}
            className="flex flex-col"
          >
            {/* Phone frame */}
            <div className="relative mx-auto mb-10 w-full max-w-[260px] aspect-[9/16] overflow-hidden rounded-[2.25rem] border-[7px] border-[#171b28] bg-white shadow-2xl">
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="260px"
                className="object-cover object-top"
              />
            </div>

            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-secondary">
              {String(index + 1).padStart(2, "0")} · {item.step}
            </p>
            <h3 className="font-headline text-2xl font-bold text-primary mb-4">
              {item.title}
            </h3>
            <ul className="space-y-3">
              {item.points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-on-surface-variant leading-relaxed">
                  <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-secondary" />
                  {point}
                </li>
              ))}
            </ul>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

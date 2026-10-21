import Image from "next/image";

import FadeIn from "./FadeIn";

const checklistItems = [
  "Inventory value, purchases, consumption, most-used products, low stock and recent activity.",
  "Cost Control: cost of goods used as a share of revenue, overall or by outlet and category.",
  "Reports with filters and export to PDF or Excel, plus shortcuts straight from the dashboard.",
];

export default function AnalyticsSection() {
  return (
    <section className="py-32 bg-primary-container text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
        {/* Left: copy */}
        <FadeIn direction="right" className="lg:col-span-2 space-y-8">
          <span className="text-secondary-fixed font-bold tracking-[0.2em] uppercase text-xs">
            The Dashboard
          </span>
          <h2 className="font-headline text-4xl md:text-5xl leading-tight">
            See your cost of goods sold and{" "}
            <span className="italic text-secondary-fixed">reorder in time.</span>
          </h2>
          <p className="text-on-primary-container text-lg leading-relaxed">
            What you have and what it is worth, what was used and what it
            cost, and what to reorder before you run out, by outlet.
          </p>

          {/* Checklist */}
          <div className="flex flex-col gap-6 pt-4">
            {checklistItems.map((item, index) => (
              <FadeIn key={item} direction="up" delay={0.2 + index * 0.1} className="flex items-start gap-4">
                <div className="mt-1 w-6 h-6 rounded-full bg-secondary-fixed/20 flex items-center justify-center shrink-0">
                  <span
                    className="material-symbols-outlined text-secondary-fixed text-sm"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    check
                  </span>
                </div>
                <p className="text-on-primary-container">{item}</p>
              </FadeIn>
            ))}
          </div>
        </FadeIn>

        {/* Right: real dashboard screen */}
        <FadeIn direction="left" delay={0.2} className="lg:col-span-3 flex justify-center">
          <div className="relative w-full max-w-[340px] aspect-[9/16] overflow-hidden rounded-[2.5rem] border-[8px] border-[#0d1019] bg-white shadow-2xl">
            <Image
              src="/app/dashboard.jpg"
              alt="Dashboard in the Allie's app, with stock status and reorder alerts"
              fill
              sizes="340px"
              className="object-cover object-top"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

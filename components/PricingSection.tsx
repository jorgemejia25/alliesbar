"use client";

import FadeIn from "./FadeIn";

const features = [
  "Complete system",
  "Access to print your labels",
  "Technical manual",
  "Support 24/7",
  "Free updates",
];

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="py-24 px-6 md:px-8 bg-surface-container-lowest relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <FadeIn direction="up">
          <div className="text-center mb-16 relative">
            <h2 className="font-headline text-4xl md:text-5xl text-primary leading-tight mb-4 relative inline-block">
              Simple Pricing Plan
              {/* Decorative Arrow */}
              <svg
                className="absolute -right-16 -top-2 w-12 h-12 text-secondary-container transform rotate-100 hidden md:block"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </h2>
            <p className="text-xl text-on-surface-variant font-medium">
              Select Your License
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Annual Plan */}
          <FadeIn direction="up" duration={0.6}>
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 relative shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1">
              <div className="absolute top-0 right-0 bg-secondary-container text-slate-900 px-5 py-1.5 rounded-bl-3xl rounded-tr-3xl text-sm font-bold uppercase tracking-wider">
                Best Value
              </div>
              <h3 className="text-2xl font-headline font-bold text-primary mb-2">
                Annual plan
              </h3>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-5xl font-bold text-primary">$2850</span>
                <span className="text-on-surface-variant font-medium">
                  / Per year
                </span>
              </div>
              <p className="text-xs font-bold text-secondary-fixed-dim uppercase tracking-wide mb-8 h-8 flex items-center">
                Check out our wonderful Alliesbar inventory system
              </p>

              <div className="mb-8 grow">
                <p className="font-bold text-primary mb-4">Includes:</p>
                <ul className="space-y-4">
                  {features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-secondary-container text-xl mt-0.5 select-none">
                        check_circle
                      </span>
                      <span className="text-on-surface-variant font-medium">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>

          {/* Monthly Plan */}
          <FadeIn direction="up" duration={0.8}>
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 relative shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1">
              <h3 className="text-2xl font-headline font-bold text-primary mb-2">
                Monthly plan
              </h3>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-5xl font-bold text-primary">$250</span>
                <span className="text-on-surface-variant font-medium">
                  / Per Month
                </span>
              </div>
              <p className="text-xs font-bold text-on-surface-variant uppercase tracking-wide mb-8 h-8 flex items-center">
                No extra charges
              </p>

              <div className="mb-8 grow">
                <p className="font-bold text-primary mb-4">Includes:</p>
                <ul className="space-y-4">
                  {features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-secondary-container text-xl mt-0.5 select-none">
                        check_circle
                      </span>
                      <span className="text-on-surface-variant font-medium">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

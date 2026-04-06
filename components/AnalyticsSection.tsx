import FadeIn from "./FadeIn";

const checklistItems = [
  "Identify top 10% highest margin cocktails",
  "Auto-generate purchase orders based on par levels",
];

const chartBars = [
  { color: "bg-primary-container/20", height: "h-[40%]" },
  { color: "bg-secondary", height: "h-[85%]" },
  { color: "bg-primary-container", height: "h-[65%]" },
  { color: "bg-secondary", height: "h-[95%]" },
  { color: "bg-primary-container/40", height: "h-[55%]" },
  { color: "bg-secondary-fixed", height: "h-[75%]" },
];

const aiPrompts = [
  "Show me the variance report for Don Julio 1942",
  "Which cocktails have the highest profit margin?",
];

export default function AnalyticsSection() {
  return (
    <section className="py-32 bg-primary-container text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
        {/* Left: copy */}
        <FadeIn direction="right" className="lg:col-span-2 space-y-8">
          <span className="text-secondary-fixed font-bold tracking-[0.2em] uppercase text-xs">
            Deep Intelligence
          </span>
          <h2 className="font-headline text-4xl md:text-5xl leading-tight">
            Insight that{" "}
            <span className="italic text-secondary-fixed">transmutes</span> data
            into profit.
          </h2>
          <p className="text-on-primary-container text-lg leading-relaxed">
            Stop guessing. Our analytics engine correlates sales data with
            inventory levels to provide a crystal-clear picture of your cost
            percentage and pouring habits.
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

        {/* Right: dashboard mockup */}
        <FadeIn direction="left" delay={0.2} className="lg:col-span-3 relative">
          <div className="bg-surface-container-lowest rounded-3xl p-8 shadow-2xl text-on-surface min-h-[400px] border border-white/10">
            {/* Mockup header */}
            <div className="flex justify-between items-center mb-10">
              <h4 className="font-headline text-xl font-bold">
                Revenue Insights
              </h4>
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-error" />
                <div className="w-3 h-3 rounded-full bg-secondary" />
                <div className="w-3 h-3 rounded-full bg-primary-container" />
              </div>
            </div>

            {/* Chart bars */}
            <div className="space-y-6">
              <div className="flex items-end gap-2 h-48">
                {chartBars.map((bar, i) => (
                  <div
                    key={i}
                    className={`${bar.color} w-full rounded-t-lg ${bar.height} transition-all duration-1000 hover:opacity-80`}
                    style={{ animationDelay: `${i * 100}ms` }}
                  />
                ))}
              </div>

              {/* KPI tiles */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-surface-container-low p-4 rounded-xl">
                  <span className="text-xs text-on-surface-variant">
                    Cost Ratio
                  </span>
                  <p className="text-2xl font-headline font-bold">
                    18.4%{" "}
                    <span className="text-xs text-green-600">▼ 2.1%</span>
                  </p>
                </div>
                <div className="bg-surface-container-low p-4 rounded-xl">
                  <span className="text-xs text-on-surface-variant">
                    Dead Stock
                  </span>
                  <p className="text-2xl font-headline font-bold text-error">
                    $1,420
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Floating AI panel */}
          <FadeIn direction="up" delay={0.6} className="absolute -bottom-10 -left-10 md:left-20 w-full max-w-[320px] glass-panel rounded-2xl p-6 shadow-2xl border border-white/60 text-primary">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary-container text-white rounded-full flex items-center justify-center">
                <span
                  className="material-symbols-outlined text-sm animate-pulse"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  smart_toy
                </span>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider">
                  Allie AI
                </p>
                <span className="text-[10px] text-green-600 font-bold uppercase flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-ping" />
                  Online &amp; Analyzing
                </span>
              </div>
            </div>
            <div className="space-y-3">
              {aiPrompts.map((prompt) => (
                <button
                  key={prompt}
                  className="w-full text-left p-3 rounded-lg border border-outline-variant hover:bg-secondary-fixed transition-colors text-sm font-medium"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </FadeIn>
        </FadeIn>
      </div>
    </section>
  );
}

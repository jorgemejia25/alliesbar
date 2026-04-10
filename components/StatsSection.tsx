import FadeIn from "./FadeIn";

const stats = [
  {
    value: "85%",
    label: "Time Saved",
    description: "Average reduction in weekly inventory counting time.",
  },
  {
    value: "33%",
    label: "Profit Increase",
    description: "Average margin improvement in the first year of use.",
  },
  {
    value: "10k+",
    label: "Bottles Scanned",
    description: "Processed daily by our AI recognition engine.",
  },
  {
    value: "99.9%",
    label: "Accuracy",
    description: "Precision in volume estimation and brand matching.",
  },
];

export default function StatsSection() {
  return (
    <section className="py-24 bg-[#171b28] text-white overflow-hidden relative">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#fed65b]/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <FadeIn direction="up" className="text-center mb-16">
          <span className="text-[#fed65b] font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
            By The Numbers
          </span>
          <h2 className="font-headline text-4xl md:text-5xl text-white mb-6">
            Measurable impact on your <span className="italic text-[#fed65b]">bottom line</span>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <FadeIn
              key={stat.label}
              direction="up"
              delay={index * 0.1}
              className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm text-center hover:bg-white/10 transition-colors"
            >
              <div className="text-5xl md:text-6xl font-headline font-bold text-white mb-2 drop-shadow-lg">
                {stat.value}
              </div>
              <div className="text-[#fed65b] font-bold tracking-wider uppercase text-sm mb-4">
                {stat.label}
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                {stat.description}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

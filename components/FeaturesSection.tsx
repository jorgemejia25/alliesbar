const features = [
  {
    icon: "camera",
    title: "Bottle Recognition",
    description:
      "Simply point your camera. Our AI identifies label, volume, and brand instantly.",
  },
  {
    icon: "qr_code_scanner",
    title: "QR Integration",
    description:
      "Scan vendor QR codes to auto-populate invoices and update stock levels.",
  },
  {
    icon: "sync",
    title: "Web+Mobile Sync",
    description:
      "Start on your phone in the cellar, finish on your desktop in the office.",
  },
  {
    icon: "psychology",
    title: "24/7 AI Support",
    description:
      "Always available assistance for data analysis and troubleshooting.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-32 px-6 bg-surface">
      {/* Section header */}
      <div className="max-w-7xl mx-auto text-center mb-24">
        <span className="text-secondary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
          The Ecosystem
        </span>
        <h2 className="font-headline text-4xl md:text-5xl text-primary mb-6">
          Designed for the{" "}
          <span className="italic">Modern Bar Manager</span>
        </h2>
        <div className="w-24 h-1 bg-secondary-fixed mx-auto" />
      </div>

      {/* Feature cards grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="bg-surface-container-low p-10 rounded-2xl hover:bg-surface-container transition-all duration-300 group"
          >
            <div className="w-16 h-16 bg-white flex items-center justify-center rounded-xl mb-8 shadow-sm group-hover:bg-secondary-fixed transition-colors">
              <span className="material-symbols-outlined text-secondary text-3xl">
                {feature.icon}
              </span>
            </div>
            <h3 className="font-headline text-2xl font-bold mb-4">
              {feature.title}
            </h3>
            <p className="text-on-surface-variant leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

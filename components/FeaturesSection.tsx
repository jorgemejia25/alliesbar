import FadeIn from "./FadeIn";

const features = [
  {
    icon: "photo_camera",
    title: "AI Bottle Measurement",
    description:
      "A photo estimates what is left in the bottle. No scales or ruler needed.",
  },
  {
    icon: "receipt_long",
    title: "AI Invoice",
    description:
      "Photograph or upload an invoice. AI reads the products, and inventory updates when you confirm.",
  },
  {
    icon: "qr_code_2",
    title: "QR Bottle Tracking",
    description:
      "Print QR labels for individual liquor bottles and follow each one from receiving to finished.",
  },
  {
    icon: "devices",
    title: "Any Device",
    description:
      "Phones, tablets and computers with a browser. Nothing to install, and the whole team can count at once.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-32 px-6 bg-surface overflow-hidden">
      {/* Section header */}
      <FadeIn direction="up" className="max-w-7xl mx-auto text-center mb-24">
        <span className="text-secondary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
          The Ecosystem
        </span>
        <h2 className="font-headline text-4xl md:text-5xl text-primary mb-6">
          Designed for the{" "}
          <span className="italic">Modern Bar Manager</span>
        </h2>
        <div className="w-24 h-1 bg-secondary-fixed mx-auto" />
      </FadeIn>

      {/* Feature cards grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <FadeIn
            key={feature.title}
            direction="up"
            delay={index * 0.1}
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
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

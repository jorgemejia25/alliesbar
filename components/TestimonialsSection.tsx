interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "The AI bottle recognition is a game changer. We cut inventory time from 6 hours to just 45 minutes.",
    name: "Aldo",
    role: "Beverage Director",
  },
  {
    quote:
      "Finally, a system built for people who actually work in bars. Elegant, fast, and remarkably accurate.",
    name: "Jack",
    role: "Head Bartender",
  },
  {
    quote:
      "Allie's Bar saved us over $2,000 in 'lost' stock in our first month alone. It pays for itself.",
    name: "Olivia",
    role: "Bar Owner",
  },
  {
    quote:
      "The support is fantastic. Having an AI that actually understands the nuances of spirits is incredible.",
    name: "Tim",
    role: "Operations Manager",
  },
];

function StarRating() {
  return (
    <div className="flex text-secondary-fixed-dim">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className="material-symbols-outlined"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          star
        </span>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="py-32 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-20">
          <span className="text-secondary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
            Kind Words
          </span>
          <h2 className="font-headline text-4xl md:text-5xl text-primary leading-tight">
            Trust from the <span className="italic">Industry Leaders.</span>
          </h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm space-y-6"
            >
              <StarRating />
              <p className="text-on-surface-variant italic leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <h5 className="font-bold text-primary">{t.name}</h5>
                <p className="text-xs text-secondary font-medium uppercase tracking-widest">
                  {t.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

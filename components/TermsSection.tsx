import FadeIn from "./FadeIn";

const sections = [
  {
    number: "01",
    title: "Eligibility",
    body: "You must be at least 18 years old and have the legal authority to enter into these Terms. By registering, you confirm that the information you provide is accurate and complete.",
  },
  {
    number: "02",
    title: "Account Registration & Security",
    body: "You are responsible for keeping your login credentials secure. You agree not to share your account access with unauthorized users. You are responsible for all activity under your account.",
  },
  {
    number: "03",
    title: "Use of Services",
    body: "You may use our Services only for lawful business purposes. You agree not to upload false, misleading, or unlawful data; interfere with or disrupt the system, servers, or networks; or attempt to reverse engineer, copy, or resell our Services without written permission.",
  },
  {
    number: "04",
    title: "Subscription & Payments",
    body: "Access to certain features may require a paid subscription. Fees are billed on a recurring basis unless canceled. All payments are final and non-refundable, except where required by law.",
  },
  {
    number: "05",
    title: "Intellectual Property",
    body: "Allies Beverage Inventory System and its contents — logos, software, reports, and features — are owned by us and protected by copyright, trademark, and other laws. You may not copy, modify, or distribute our intellectual property without consent.",
  },
  {
    number: "06",
    title: "Data & Privacy",
    body: "Your data remains yours. By using the Services, you grant us a license to process and analyze your data solely to provide the Services.",
  },
  {
    number: "07",
    title: "Service Availability",
    body: "We aim to provide continuous service but do not guarantee uninterrupted access. We may suspend or modify Services for maintenance, upgrades, or other reasons.",
  },
  {
    number: "08",
    title: "Termination",
    body: "We may suspend or terminate your account if you violate these Terms. You may also terminate your account at any time by contacting us. Termination does not relieve you of any payment obligations already incurred.",
  },
  {
    number: "09",
    title: "Disclaimer of Warranties",
    body: 'The Services are provided "AS IS" and "AS AVAILABLE." We disclaim all warranties, express or implied, including merchantability, fitness for a particular purpose, and non-infringement.',
  },
  {
    number: "10",
    title: "Limitation of Liability",
    body: "To the maximum extent permitted by law, Allies Beverage Inventory System shall not be liable for any indirect, incidental, or consequential damages — including lost profits, lost data, or business interruption. Our total liability will not exceed the amount you paid for the Services in the past 12 months.",
  },
  {
    number: "11",
    title: "Governing Law",
    body: "These Terms are governed by and construed under applicable law, without regard to conflict of law principles.",
  },
  {
    number: "12",
    title: "Changes to Terms",
    body: "We may update these Terms at any time. Continued use of the Services after updates constitutes your acceptance of the new Terms.",
  },
  {
    number: "13",
    title: "Contact Us",
    body: "If you have any questions about these Terms, please contact us at ayuda.alliesbar.helpdesk@gmail.com.",
  },
];

export default function TermsSection() {
  return (
    <section className="bg-surface-container-lowest px-6 pb-24 pt-32 text-on-surface md:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <FadeIn direction="up">
          <div className="mb-16 border-b border-outline-variant pb-10">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-secondary">
              Legal
            </p>
            <h1 className="mb-4 font-headline text-5xl leading-tight text-primary md:text-6xl">
              Terms & Conditions
            </h1>
            <p className="text-base text-on-surface-variant">
              Last updated: September 23, 2025
            </p>
          </div>
        </FadeIn>

        {/* Intro */}
        <FadeIn direction="up" delay={0.05}>
          <p className="mb-14 text-lg leading-relaxed text-on-surface-variant">
            Please read these Terms and Conditions carefully before using the
            Allies Beverage Inventory System. By accessing or using our
            Services, you agree to be bound by these Terms.
          </p>
        </FadeIn>

        {/* Sections */}
        <div className="flex flex-col gap-10">
          {sections.map((section, i) => (
            <FadeIn key={section.number} direction="up" delay={i * 0.04} duration={0.45}>
              <article className="grid grid-cols-[3rem_1fr] gap-6 md:gap-10">
                {/* Section number */}
                <span className="mt-1 font-headline text-2xl font-bold text-secondary/40 leading-none">
                  {section.number}
                </span>

                <div>
                  <h2 className="mb-3 font-headline text-2xl font-bold text-primary">
                    {section.title}
                  </h2>
                  <p className="leading-7 text-on-surface-variant">
                    {section.body}
                  </p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

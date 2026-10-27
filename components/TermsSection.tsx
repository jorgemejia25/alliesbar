import FadeIn from "./FadeIn";

// 2026 edition, from "Allies_Terms_and_Conditions_2026.docx" (Allies Beverage
// Inventory System LLC). Each entry of `body` is one paragraph.
const sections = [
  {
    number: "01",
    title: "Eligibility & Business Use",
    body: [
      "The Services are intended for lawful business use. Users must be at least 18 years old and authorized to bind the business on whose behalf they act. Customers are responsible for complying with applicable alcoholic beverage, recordkeeping, employment, and other laws.",
    ],
  },
  {
    number: "02",
    title: "Accounts & Security",
    body: [
      "Customers must provide accurate registration and billing information, safeguard login credentials, manage user permissions, and promptly report suspected unauthorized access. Customers are responsible for activity through their accounts except to the extent attributable to Allies’ breach or applicable law.",
    ],
  },
  {
    number: "03",
    title: "Scope of Services",
    body: [
      "Allies offers AI-assisted bottle identification and liquid-level estimation, QR-based bottle identification, counts, reconciliation, receiving, transfers, dashboards, reporting, user permissions, and supported integrations. Features may vary by plan and may evolve through updates.",
    ],
  },
  {
    number: "04",
    title: "Subscriptions, Billing & Payments",
    body: [
      "Services are provided under paid subscription plans at prices disclosed at enrollment or in a separate written agreement. Recurring fees are generally billed monthly beginning at activation. Customers authorize charges through their selected payment method and payment processor.",
      "Allies does not charge a standard initial activation fee; separately agreed hardware, supplies, integrations, or professional services may cost extra.",
      "Promotional trials or discounted access may be offered only to selected customers at Allies’ discretion. They are not standard benefits or guaranteed. Any offer must be expressly authorized, with its duration, eligibility, billing commencement, and conditions communicated individually in writing. Unless otherwise agreed, standard fees apply upon activation.",
      "Payment failures may lead to notice and, after unresolved nonpayment, suspension or termination as permitted by law. Fees for commenced billing periods are generally nonrefundable except where required by law or agreed in writing. Changes to recurring pricing will be communicated in advance and applied consistently with contractual commitments and applicable law.",
    ],
  },
  {
    number: "05",
    title: "AI-Assisted Measurement & Accuracy",
    body: [
      "AI-generated estimates depend on bottle shape, transparency, lighting, positioning, image quality, and other conditions. Allies does not guarantee that every measurement or report is error-free. Customers must review discrepancies, verify records when appropriate, and maintain internal controls. The Services supplement rather than replace physical verification and professional judgment.",
    ],
  },
  {
    number: "06",
    title: "QR Identification & Inventory Tracking",
    body: [
      "Unique QR labels may associate bottles with inventory records. Customers are responsible for correct labeling and accurate receiving, transfers, counts, and depletion records. QR identification supports tracking but does not independently establish authenticity, legal ownership, or physical location.",
    ],
  },
  {
    number: "07",
    title: "Customer Data & Privacy",
    body: [
      "Customers retain ownership of business and inventory data they submit. They grant Allies a limited license to process, store, transmit, and analyze that data as needed to provide, secure, maintain, and improve the Services in accordance with applicable law and the Privacy Policy. Allies will not sell customer-specific confidential inventory data. Aggregated or de-identified information may be used for analytics and improvements when it does not reasonably identify customers or reveal confidential business information.",
    ],
  },
  {
    number: "08",
    title: "Security & Confidentiality",
    body: [
      "Allies will maintain reasonable administrative, technical, and organizational safeguards designed to protect customer information. Each party will protect the other’s confidential information and use it only for authorized purposes, subject to customary exceptions for public, independently developed, lawfully obtained, or legally required disclosures. No online system guarantees absolute security.",
    ],
  },
  {
    number: "09",
    title: "Availability & Support",
    body: [
      "Allies seeks reliable operation, but interruptions may arise from maintenance, upgrades, connectivity, third-party services, or events outside reasonable control. Allies will make reasonable efforts to communicate material planned outages when practicable. No specific uptime or support-response guarantee applies unless separately agreed in writing.",
    ],
  },
  {
    number: "10",
    title: "Equipment & Third Parties",
    body: [
      "Certain features require compatible devices, cameras, printers, QR labels, and internet access. Unless expressly included, equipment and supplies are obtained separately. Third-party payment processors and integrations may have their own terms. Allies is not responsible for failures solely attributable to third-party equipment or services beyond its reasonable control.",
    ],
  },
  {
    number: "11",
    title: "Intellectual Property",
    body: [
      "Allies or its licensors retain rights to the Services, software, algorithms, AI models, interfaces, documentation, trademarks, and proprietary workflows. During an active subscription, customers receive a limited, nonexclusive, nontransferable license for internal business use. Unauthorized copying, resale, circumvention, and reverse engineering are prohibited except as permitted by law. Customer ownership of submitted data is unaffected.",
    ],
  },
  {
    number: "12",
    title: "Acceptable Use",
    body: [
      "Customers may not use the Services for unlawful or fraudulent activity, unauthorized access, malicious code distribution, intentional disruption, or misuse of another customer’s data. Allies may take proportionate action to address misuse or protect security.",
    ],
  },
  {
    number: "13",
    title: "Cancellation, Suspension & Termination",
    body: [
      "Customers may request cancellation through the designated account process or Allies’ support channels. Unless otherwise agreed, cancellation takes effect at the end of the current paid billing period and stops future recurring charges after that date; already paid fees are generally not refunded. Allies may suspend or terminate for material breach, fraud, security threats, or unresolved nonpayment, subject to law and reasonable notice when practicable.",
      "Customers should export available records before access ends. Post-termination retention, deletion, and export are governed by the Privacy Policy, applicable law, and documented data procedures. Any special transition assistance requires separate agreement.",
    ],
  },
  {
    number: "14",
    title: "Warranty Disclaimer",
    body: [
      "To the maximum extent permitted by law, the Services are provided “AS IS” and “AS AVAILABLE.” Allies does not warrant uninterrupted operation or error-free AI estimates, reports, or calculations. Implied warranties are disclaimed to the extent legally permitted. Nonwaivable statutory rights remain unaffected.",
    ],
  },
  {
    number: "15",
    title: "Limitation of Liability",
    body: [
      "To the maximum extent permitted by law, neither party is liable for indirect, incidental, special, or consequential damages, including lost profits or business interruption. Except for liabilities that cannot lawfully be limited, Allies’ aggregate liability relating to the Services will not exceed fees paid by the affected customer in the 12 months preceding the event giving rise to the claim. Nothing excludes liability for fraud, willful misconduct, or other non-excludable matters.",
    ],
  },
  {
    number: "16",
    title: "Changes to Services & Terms",
    body: [
      "Allies may modify Services for improvements, security, compliance, or new features. Material changes to these Terms will be communicated by reasonable means, such as email, account notice, or website posting, with advance notice where legally required. The revised effective date will be displayed. Continued use may constitute acceptance where permitted by law.",
    ],
  },
  {
    number: "17",
    title: "Governing Law & Disputes",
    body: [
      "These Terms are governed by the laws of the State of Georgia, United States, without regard to conflict-of-law rules, subject to mandatory applicable law. The parties will first attempt to resolve disputes in good faith.",
    ],
  },
];

// Section 18 of the document, rendered as a contact card.
const contact = {
  number: "18",
  title: "Contact Information",
  company: "Allies Beverage Inventory System LLC",
  location: "Georgia, United States",
  website: "https://www.alliesbeverage.com",
  email: "alliesbar@gmail.com",
  phone: "+1 (470) 301-7614",
  phoneHref: "tel:+14703017614",
};

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
              Allies Beverage Inventory System LLC · Georgia, United States ·
              2026 Edition
            </p>
            <p className="mt-1 text-sm text-on-surface-variant/80">
              Effective date: October 2026
            </p>
          </div>
        </FadeIn>

        {/* Intro */}
        <FadeIn direction="up" delay={0.05}>
          <p className="mb-14 text-lg leading-relaxed text-on-surface-variant">
            These Terms &amp; Conditions (&ldquo;Terms&rdquo;) govern access to
            and use of the website, software, mobile applications, artificial
            intelligence features, and related services (collectively, the
            &ldquo;Services&rdquo;) offered by Allies Beverage Inventory System
            LLC, a Georgia limited liability company (&ldquo;Allies,&rdquo;
            &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). By
            registering for or using the Services, you accept these Terms for
            yourself or the business you represent.
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
                  <div className="flex flex-col gap-4">
                    {section.body.map((paragraph) => (
                      <p key={paragraph.slice(0, 40)} className="leading-7 text-on-surface-variant">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}

          <FadeIn direction="up" duration={0.45}>
            <article className="grid grid-cols-[3rem_1fr] gap-6 md:gap-10">
              <span className="mt-1 font-headline text-2xl font-bold text-secondary/40 leading-none">
                {contact.number}
              </span>
              <div>
                <h2 className="mb-3 font-headline text-2xl font-bold text-primary">
                  {contact.title}
                </h2>
                <address className="not-italic leading-7 text-on-surface-variant">
                  {contact.company}
                  <br />
                  {contact.location}
                  <br />
                  Website:{" "}
                  <a href={contact.website} className="text-secondary underline-offset-4 hover:underline">
                    www.alliesbeverage.com
                  </a>
                  <br />
                  Email:{" "}
                  <a href={`mailto:${contact.email}`} className="text-secondary underline-offset-4 hover:underline">
                    {contact.email}
                  </a>
                  <br />
                  Phone:{" "}
                  <a href={contact.phoneHref} className="text-secondary underline-offset-4 hover:underline">
                    {contact.phone}
                  </a>
                </address>
              </div>
            </article>
          </FadeIn>
        </div>

        <FadeIn direction="up" duration={0.45}>
          <p className="mt-14 border-t border-outline-variant pt-8 text-base leading-relaxed text-on-surface-variant">
            By using the Services, you acknowledge that you have read and agree
            to these Terms.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

import Link from "next/link";

const productLinks = [
  { label: "Printers and Label Rolls", href: "#" },
  { label: "Pricing & Plans", href: "#" },
  { label: "License", href: "#" },
];

const companyLinks = [
  { label: "About", href: "#" },
  { label: "Contact Us", href: "#" },
  { label: "Help & FAQ", href: "#" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms and Conditions", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-yellow-500 w-full">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-12 py-20 max-w-7xl mx-auto">
        {/* Brand column */}
        <div className="col-span-2 md:col-span-1">
          <div className="text-xl font-headline text-white mb-6">
            Allie&apos;s Bar
          </div>
          <p className="text-slate-400 text-sm max-w-[200px]">
            Precision inventory management for premium hospitality
            establishments.
          </p>
        </div>

        {/* Product links */}
        <div className="flex flex-col gap-4">
          <span className="text-xs uppercase tracking-widest font-bold text-white mb-2">
            Product
          </span>
          {productLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-slate-400 hover:text-yellow-500 transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Company links */}
        <div className="flex flex-col gap-4">
          <span className="text-xs uppercase tracking-widest font-bold text-white mb-2">
            Company
          </span>
          {companyLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-slate-400 hover:text-yellow-500 transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Legal links */}
        <div className="flex flex-col gap-4">
          <span className="text-xs uppercase tracking-widest font-bold text-white mb-2">
            Legal
          </span>
          {legalLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-slate-400 hover:text-yellow-500 transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4">
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.3em]">
              © 2024 Alfanetworks
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

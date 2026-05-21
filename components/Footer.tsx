import Image from "next/image";
import Link from "next/link";

const productLinks = [
  { label: "License", href: "/pricing" },
  { label: "Printers & Label Rolls", href: "/hardware" },
];

const companyLinks = [
  { label: "Who We Are", href: "/us" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact Us", href: "/contact" },
  { label: "Terms & Conditions", href: "/terms" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-yellow-500 w-full">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-12 py-20 max-w-7xl mx-auto">
        {/* Brand column */}
        <div className="col-span-2 md:col-span-1">
          <Image
            src="/new-logo.svg"
            alt="Allies Beverage Inventory System"
            width={100}
            height={100}
            className="h-10 w-auto mb-6"
            style={{ filter: "brightness(0) invert(1)" }}
          />
          <p className="text-slate-400 text-sm max-w-[200px]">
            Smart inventory control, label printing, and remote reporting for
            modern bar teams.
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
          <div className="pt-4 mt-auto">
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.3em]">
              © 2025 Alfanetworks
            </p>
          </div>
        </div>

        {/* Contact links */}
        <div className="flex flex-col gap-4">
          <span className="text-xs uppercase tracking-widest font-bold text-white mb-2">
            Contact
          </span>
          <a
            href="tel:+14703017614"
            className="text-slate-400 hover:text-yellow-500 transition-colors duration-300"
          >
            +1 (470) 301-7614
          </a>
          <a
            href="mailto:alliesbar@gmail.com"
            className="text-slate-400 hover:text-yellow-500 transition-colors duration-300 break-all"
          >
            alliesbar@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}

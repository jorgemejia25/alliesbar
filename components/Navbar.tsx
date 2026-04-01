"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Features", href: "#", active: true },
  { label: "Pricing", href: "#" },
  { label: "Printers and Rolls", href: "#" },
  { label: "Our Team", href: "#" },
  { label: "FAQ", href: "#" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Lock body scroll when sidebar is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Close on Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl shadow-sm dark:shadow-none">
        <div className="flex justify-between items-center px-8 py-4 max-w-full">
          {/* Logo */}
          <div className="text-2xl font-headline tracking-tight text-slate-900 dark:text-slate-50">
            Allie&apos;s Bar
          </div>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.active ? (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-yellow-600 dark:text-yellow-500 font-bold border-b-2 border-yellow-600 py-1 transition-opacity duration-300"
                >
                  {link.label}
                </Link>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 py-1 transition-opacity duration-300"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Right side: CTA (desktop) + hamburger (mobile) */}
          <div className="flex items-center gap-4">
            {/* Desktop CTAs */}
            <button className="hidden md:block text-slate-600 font-medium hover:opacity-80 transition-opacity">
              Login
            </button>
            <button className="hidden md:block bg-primary-container text-on-primary px-6 py-2 rounded-lg font-medium hover:opacity-80 active:scale-95 transition-all duration-200">
              Buy Alliesbar
            </button>

            {/* Hamburger button — mobile only */}
            <button
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-lg hover:bg-slate-100 transition-colors"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
            >
              <span className="block w-5 h-0.5 bg-slate-700 rounded-full" />
              <span className="block w-5 h-0.5 bg-slate-700 rounded-full" />
              <span className="block w-3.5 h-0.5 bg-slate-700 rounded-full self-start ml-[3px]" />
            </button>
          </div>
        </div>
      </nav>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* Slide-in sidebar */}
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-72 bg-white dark:bg-slate-900 shadow-2xl flex flex-col transition-transform duration-300 ease-in-out md:hidden ${
          open ? "translate-x-0 pointer-events-auto" : "translate-x-full pointer-events-none"
        }`}
        aria-label="Mobile navigation"
      >
        {/* Sidebar header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100 dark:border-slate-800">
          <span className="text-xl font-headline tracking-tight text-slate-900 dark:text-slate-50">
            Allie&apos;s Bar
          </span>
          <button
            onClick={() => setOpen(false)}
            className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Close menu"
          >
            <span className="material-symbols-outlined text-slate-600 dark:text-slate-300 text-xl">
              close
            </span>
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                link.active
                  ? "bg-secondary-fixed text-secondary font-bold"
                  : "text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Sidebar footer CTAs */}
        <div className="px-6 py-6 border-t border-slate-100 dark:border-slate-800 space-y-3">
          <button className="w-full py-3 text-slate-600 dark:text-slate-300 font-medium border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
            Login
          </button>
          <button className="w-full py-3 bg-primary-container text-on-primary font-semibold rounded-xl hover:opacity-90 active:scale-95 transition-all">
            Buy Alliesbar
          </button>
        </div>
      </aside>
    </>
  );
}

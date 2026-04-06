"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Features", href: "#", active: true },
  { label: "Pricing", href: "#" },
  { label: "Hardware", href: "#" },
  { label: "Us", href: "#" },
  { label: "FAQ", href: "#" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-sm" 
          : "bg-transparent"
      }`}>
        <div className={`grid grid-cols-2 md:grid-cols-3 items-center px-6 md:px-8 max-w-7xl mx-auto w-full transition-all duration-300 ${
          scrolled ? "py-4" : "py-6"
        }`}>
          {/* Logo (Left aligned) */}
          <div className={`justify-self-start text-2xl font-headline tracking-tight transition-colors duration-300 ${
            scrolled ? "text-slate-900 dark:text-slate-50" : "text-white drop-shadow-md"
          }`}>
            Allie&apos;s Bar
          </div>

          {/* Desktop nav links (Center aligned) */}
          <div className="hidden md:flex justify-self-center items-center gap-8">
            {navLinks.map((link) =>
              link.active ? (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`font-bold border-b-2 py-1 transition-all duration-300 ${
                    scrolled 
                      ? "text-yellow-600 dark:text-yellow-500 border-yellow-600" 
                      : "text-yellow-400 border-yellow-400 drop-shadow-md"
                  }`}
                >
                  {link.label}
                </Link>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`py-1 font-medium transition-all duration-300 ${
                    scrolled
                      ? "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100"
                      : "text-white/90 hover:text-white drop-shadow-md"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Right side: CTA (desktop) + hamburger (mobile) (Right aligned) */}
          <div className="justify-self-end flex items-center gap-4">
            {/* Desktop CTAs */}
            <button className={`hidden md:block font-medium hover:opacity-80 transition-all duration-300 ${
              scrolled ? "text-slate-600 dark:text-slate-300" : "text-white drop-shadow-md"
            }`}>
              Login
            </button>
            <button className={`hidden md:block px-6 py-2 rounded-lg font-bold hover:opacity-80 active:scale-95 transition-all duration-300 ${
              scrolled
                ? "bg-primary-container text-on-primary"
                : "bg-yellow-500 text-slate-950 shadow-[0_0_15px_rgba(234,179,8,0.4)]"
            }`}>
              Buy Alliesbar
            </button>

            {/* Hamburger button — mobile only */}
            <button
              className={`md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-lg transition-colors ${
                scrolled ? "hover:bg-slate-100" : "hover:bg-white/20"
              }`}
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
            >
              <span className={`block w-5 h-0.5 rounded-full transition-colors ${scrolled ? "bg-slate-700" : "bg-white"}`} />
              <span className={`block w-5 h-0.5 rounded-full transition-colors ${scrolled ? "bg-slate-700" : "bg-white"}`} />
              <span className={`block w-3.5 h-0.5 rounded-full self-start ml-[3px] transition-colors ${scrolled ? "bg-slate-700" : "bg-white"}`} />
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

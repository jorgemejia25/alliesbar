import type { Metadata } from "next";

import Footer from "@/components/Footer";
import HardwareSection from "@/components/HardwareSection";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Printers and Rolls | Allie's Beverage",
  description:
    "Recommended Rollo wireless label printer, 2x1 label rolls, printer specifications, and setup steps for Allie's.",
};

export default function HardwarePage() {
  return (
    <main className="bg-surface text-on-surface font-body selection:bg-secondary-fixed selection:text-on-secondary-fixed overflow-x-hidden flex flex-col min-h-screen">
      <Navbar />
      <div className="grow">
        <HardwareSection />
      </div>
      <Footer />
    </main>
  );
}

import type { Metadata } from "next";

import Footer from "@/components/Footer";
import HardwareSection from "@/components/HardwareSection";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Printers and Rolls | Allie's Beverage",
  description:
    "Recommended Rollo Wi-Fi direct thermal printer, weatherproof 2 × 1 inch QR labels, and setup steps for Allie's.",
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

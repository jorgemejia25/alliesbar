import type { Metadata } from "next";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PricingSection from "@/components/PricingSection";

export const metadata: Metadata = {
  title: "Pricing | Allie's Beverage",
  description:
    "Allie's license pricing with annual and monthly plans, label printing access, support, manuals, and free updates.",
};

export default function PricingPage() {
  return (
    <main className="bg-surface text-on-surface font-body selection:bg-secondary-fixed selection:text-on-secondary-fixed overflow-x-hidden flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <PricingSection />
      </div>
      <Footer />
    </main>
  );
}

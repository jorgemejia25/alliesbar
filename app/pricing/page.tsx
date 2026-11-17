import type { Metadata } from "next";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PricingSection from "@/components/PricingSection";

export const metadata: Metadata = {
  title: "Pricing | Allie's Beverage Inventory System",
  description:
    "Allie's Beverage Inventory System: $299/mo per venue for up to 1,000 distinct UPCs, with a +$100/mo upgrade for up to 10,000. Enterprise for groups with several venues. Plus $49/mo per additional category.",
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

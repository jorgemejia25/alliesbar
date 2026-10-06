import type { Metadata } from "next";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PricingSection from "@/components/PricingSection";

export const metadata: Metadata = {
  title: "Pricing | Allie's Beverage",
  description:
    "Allie's UPC-based licenses: Initial ($299/mo, up to 1,000 UPCs) and Upgrade ($399/mo, up to 10,000 UPCs), plus $49/mo per additional category.",
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

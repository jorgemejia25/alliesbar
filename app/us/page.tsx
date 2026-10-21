import type { Metadata } from "next";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import UsSection from "@/components/UsSection";

export const metadata: Metadata = {
  title: "Who We Are | Allie's Beverage",
  description:
    "Meet Timothy and Alejandra and learn the story, mission, and vision behind Allie's Beverage Inventory System.",
};

export default function UsPage() {
  return (
    <main className="bg-surface text-on-surface font-body selection:bg-secondary-fixed selection:text-on-secondary-fixed overflow-x-hidden flex flex-col min-h-screen">
      <Navbar />
      <div className="grow">
        <UsSection />
      </div>
      <Footer />
    </main>
  );
}

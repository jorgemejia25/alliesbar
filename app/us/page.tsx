import type { Metadata } from "next";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import UsSection from "@/components/UsSection";

export const metadata: Metadata = {
  title: "Who We Are | Allie's Bar",
  description:
    "Meet Alejandra Michaud and learn the mission, vision, and history behind Allie's Bar Inventory System.",
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

import type { Metadata } from "next";

import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Contact | Allie's Beverage",
  description:
    "Contact Allie's by phone or email for pricing, printer and label questions, setup doubts, or other bar inventory support.",
};

export default function ContactPage() {
  return (
    <main className="bg-surface text-on-surface font-body selection:bg-secondary-fixed selection:text-on-secondary-fixed overflow-x-hidden flex flex-col min-h-screen">
      <Navbar />
      <div className="grow">
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
}

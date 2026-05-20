import type { Metadata } from "next";

import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "FAQ | Allie's Bar",
  description:
    "Answers about installing Alliesbar, adding bottles by barcode, unlimited users, and remote inventory access.",
};

export default function FAQPage() {
  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden bg-surface font-body text-on-surface selection:bg-secondary-fixed selection:text-on-secondary-fixed">
      <Navbar />
      <div className="grow">
        <FAQSection />
      </div>
      <Footer />
    </main>
  );
}

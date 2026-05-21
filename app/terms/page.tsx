import type { Metadata } from "next";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TermsSection from "@/components/TermsSection";

export const metadata: Metadata = {
  title: "Terms & Conditions | Allies",
  description:
    "Terms and Conditions governing the use of the Allies Beverage Inventory System.",
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <TermsSection />
      <Footer />
    </>
  );
}

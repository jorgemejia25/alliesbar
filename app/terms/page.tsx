import type { Metadata } from "next";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TermsSection from "@/components/TermsSection";

export const metadata: Metadata = {
  title: "Terms & Conditions | Allie's Beverage Inventory System",
  description:
    "Terms and Conditions governing the use of Allie's Beverage Inventory System.",
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

import Navbar from "@/components/Navbar";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";

export default function PricingPage() {
  return (
    <main className="bg-surface text-on-surface font-body selection:bg-secondary-fixed selection:text-on-secondary-fixed overflow-x-hidden flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow pt-12 md:pt-24">
        <PricingSection />
      </div>
      <Footer />
    </main>
  );
}

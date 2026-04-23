import Navbar from "@/components/Navbar";
import HardwareSection from "@/components/HardwareSection";
import Footer from "@/components/Footer";

export default function HardwarePage() {
  return (
    <main className="bg-surface text-on-surface font-body selection:bg-secondary-fixed selection:text-on-secondary-fixed overflow-x-hidden flex flex-col min-h-screen">
      <Navbar />
      <div className="grow pt-12 md:pt-24">
        <HardwareSection />
      </div>
      <Footer />
    </main>
  );
}

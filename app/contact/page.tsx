import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

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

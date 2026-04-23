import Navbar from "@/components/Navbar";
import UsSection from "@/components/UsSection";
import Footer from "@/components/Footer";

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

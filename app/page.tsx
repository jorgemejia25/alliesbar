import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StorySection from "@/components/StorySection";
import FeaturesSection from "@/components/FeaturesSection";
import AnalyticsSection from "@/components/AnalyticsSection";
import ResponsiveSection from "@/components/ResponsiveSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-surface text-on-surface font-body selection:bg-secondary-fixed selection:text-on-secondary-fixed overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <StorySection />
      <FeaturesSection />
      <AnalyticsSection />
      <ResponsiveSection />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}

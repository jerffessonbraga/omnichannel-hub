import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Channels from "@/components/landing/Channels";
import Features from "@/components/landing/Features";
import HowItWorks from "@/components/landing/HowItWorks";
import Pricing from "@/components/landing/Pricing";
import Testimonials from "@/components/landing/Testimonials";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";
import CursorGlow from "@/components/CursorGlow";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <CursorGlow />
      <Navbar />
      <Hero />
      <Channels />
      <Features />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import RecruiterFeatures from "@/components/RecruiterFeatures";
import CandidateFeatures from "@/components/CandidateFeatures";
import HowItWorks from "@/components/HowItWorks";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <RecruiterFeatures />
      <CandidateFeatures />
      <HowItWorks />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;

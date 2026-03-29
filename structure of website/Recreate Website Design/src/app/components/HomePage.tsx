import { Navbar } from "./Navbar";
import { HeroSection } from "./HeroSection";
import { ValuableFeatures } from "./ValuableFeatures";
import { BenefitsSection } from "./BenefitsSection";
import { UsefulFeatures } from "./UsefulFeatures";
import { WhyChooseUs } from "./WhyChooseUs";
import { HowToUse } from "./HowToUse";
import { TestimonialsSection } from "./TestimonialsSection";
import { PricingSection } from "./PricingSection";
import { FaqSection } from "./FaqSection";
import { CtaSection } from "./CtaSection";
import { Footer } from "./Footer";
import { BackToTop } from "./BackToTop";
import { EaseCareThemeTakeover } from "./EaseCareThemeTakeover";
import { ScrollProgressBar } from "./ScrollProgressBar";
import { SmoothCursor } from "./SmoothCursor";

export function HomePage() {
  return (
    <div
      className="relative min-h-screen bg-[#0a0a0a] transition-colors duration-[800ms]"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <SmoothCursor />
      <ScrollProgressBar />
      <EaseCareThemeTakeover />
      <Navbar />
      <HeroSection />
      <ValuableFeatures />
      <BenefitsSection />
      <UsefulFeatures />
      <WhyChooseUs />
      <HowToUse />
      <TestimonialsSection />
      <PricingSection />
      <FaqSection />
      <CtaSection />
      <Footer />
      <BackToTop />
    </div>
  );
}
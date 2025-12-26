import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ClientsSection } from "@/components/home/ClientsSection";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { ProcessSection } from "@/components/home/ProcessSection";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { StatsSection } from "@/components/home/StatsSection";
import { TechStackSection } from "@/components/home/TechStackSection";
import { PricingSection } from "@/components/home/PricingSection";
import { Testimonials } from "@/components/home/Testimonials";
import { FAQSection } from "@/components/home/FAQSection";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import { CTASection } from "@/components/home/CTASection";
import { LampSection } from "@/components/ui/LampSection";
import { TimelineSection } from "@/components/home/TimelineSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ClientsSection />
      <ServicesPreview />
      <LampSection 
        title="Building the Future"
        subtitle="We craft digital experiences that push boundaries and deliver exceptional results for forward-thinking brands."
      />
      <ProcessSection />
      <FeaturedWork />
      <StatsSection />
      <TimelineSection />
      <TechStackSection />
      <PricingSection />
      <Testimonials />
      <FAQSection />
      <NewsletterSection />
      <CTASection />
    </Layout>
  );
};

export default Index;

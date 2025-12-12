import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ClientsSection } from "@/components/home/ClientsSection";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { ProcessSection } from "@/components/home/ProcessSection";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { StatsSection } from "@/components/home/StatsSection";
import { TechStackSection } from "@/components/home/TechStackSection";
import { Testimonials } from "@/components/home/Testimonials";
import { FAQSection } from "@/components/home/FAQSection";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ClientsSection />
      <ServicesPreview />
      <ProcessSection />
      <FeaturedWork />
      <StatsSection />
      <TechStackSection />
      <Testimonials />
      <FAQSection />
      <NewsletterSection />
      <CTASection />
    </Layout>
  );
};

export default Index;

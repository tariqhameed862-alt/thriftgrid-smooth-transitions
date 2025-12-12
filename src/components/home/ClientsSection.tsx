import { AnimatedSection } from "@/components/ui/AnimatedSection";

const clients = [
  { name: "TechCorp", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&q=80" },
  { name: "InnovateCo", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&q=80" },
  { name: "FutureTech", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&q=80" },
  { name: "DataFlow", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&q=80" },
  { name: "CloudNine", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&q=80" },
  { name: "SmartAI", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&q=80" },
];

export function ClientsSection() {
  return (
    <section className="py-16 border-y border-border/50 bg-muted/20">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-10">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Trusted by Industry Leaders
          </p>
        </AnimatedSection>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {clients.map((client, index) => (
            <AnimatedSection
              key={client.name}
              animation="fade-in"
              delay={index * 100}
            >
              <div className="group relative">
                <div className="text-2xl font-display font-bold text-muted-foreground/40 hover:text-primary transition-all duration-500 hover:scale-110 cursor-pointer">
                  {client.name}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

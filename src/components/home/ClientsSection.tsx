import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Building2, Cpu, Database, Globe, Layers, Rocket } from "lucide-react";

const clients = [
  { name: "TechCorp", icon: Cpu },
  { name: "InnovateLabs", icon: Rocket },
  { name: "DataFlow", icon: Database },
  { name: "GlobalTech", icon: Globe },
  { name: "LayerStack", icon: Layers },
  { name: "Enterprise AI", icon: Building2 },
];

export function ClientsSection() {
  return (
    <section className="py-20 border-y border-border/30 bg-card/30">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-12">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
            Trusted by Industry Leaders
          </p>
        </AnimatedSection>

        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 md:gap-x-20">
          {clients.map((client, index) => (
            <AnimatedSection
              key={client.name}
              animation="fade-in"
              delay={index * 80}
            >
              <div className="group flex items-center gap-3 cursor-pointer">
                <div className="p-2 rounded-lg bg-muted/50 text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300">
                  <client.icon className="w-5 h-5" />
                </div>
                <span className="text-lg font-display font-semibold text-muted-foreground/60 group-hover:text-foreground transition-colors duration-300">
                  {client.name}
                </span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

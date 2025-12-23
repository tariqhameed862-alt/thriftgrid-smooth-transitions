import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Search, Lightbulb, Code2, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery",
    description: "We dive deep into your vision, goals, and challenges through strategic consultations.",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Strategy",
    description: "Our team crafts a comprehensive roadmap with clear milestones and success metrics.",
  },
  {
    number: "03",
    icon: Code2,
    title: "Development",
    description: "We bring your vision to life with cutting-edge technology and beautiful design.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch",
    description: "We deploy your solution and provide ongoing support for continued growth.",
  },
];

export function ProcessSection() {
  return (
    <section className="py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/20 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">Process</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            How We <span className="gradient-text">Deliver</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A proven methodology that transforms ideas into successful digital products.
          </p>
        </AnimatedSection>

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-border -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <AnimatedSection
                key={step.number}
                animation="fade-up"
                delay={index * 120}
              >
                <div className="group relative flex flex-col items-center text-center">
                  {/* Step Number */}
                  <div className="absolute -top-8 text-7xl font-display font-bold text-muted/20 select-none group-hover:text-primary/15 transition-colors duration-500">
                    {step.number}
                  </div>

                  {/* Icon Circle */}
                  <div className="relative z-10 w-16 h-16 rounded-2xl bg-card border border-border/50 flex items-center justify-center mb-6 transition-all duration-500 group-hover:border-primary/50 group-hover:shadow-lg group-hover:shadow-primary/10">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-display font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

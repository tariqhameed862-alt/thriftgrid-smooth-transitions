import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { MessageSquare, Lightbulb, Code2, Rocket, CheckCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Discovery",
    description: "We start by understanding your vision, goals, and challenges through in-depth consultations.",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Strategy & Planning",
    description: "Our team crafts a comprehensive roadmap with clear milestones and deliverables.",
  },
  {
    number: "03",
    icon: Code2,
    title: "Design & Development",
    description: "We bring your vision to life with cutting-edge technology and beautiful design.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch & Scale",
    description: "We deploy your solution and provide ongoing support to ensure continued success.",
  },
];

export function ProcessSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Our Process
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-3 mb-4">
            How We <span className="gradient-text">Work</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A proven methodology that delivers exceptional results every time.
          </p>
        </AnimatedSection>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <AnimatedSection
                key={step.number}
                animation="fade-up"
                delay={index * 150}
              >
                <div className="group relative text-center">
                  {/* Step Number Background */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-8xl font-display font-bold text-muted/30 select-none transition-all duration-500 group-hover:text-primary/20">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="relative z-10 mx-auto w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-lg shadow-primary/20">
                    <step.icon className="w-10 h-10 text-card" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-display font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>

                  {/* Checkmark */}
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                    <CheckCircle className="w-6 h-6 text-primary mx-auto" />
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

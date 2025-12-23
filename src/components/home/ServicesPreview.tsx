import { Code2, Cloud, Smartphone, BrainCircuit, ShieldCheck, Workflow, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Custom websites and web applications built with React, Next.js, and modern frameworks.",
    features: ["React & Next.js", "TypeScript", "Performance Optimized"],
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications for iOS and Android platforms.",
    features: ["React Native", "Flutter", "Native iOS/Android"],
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure with AWS, GCP, and Azure for modern businesses.",
    features: ["AWS & GCP", "DevOps", "Auto-scaling"],
  },
  {
    icon: BrainCircuit,
    title: "AI & Machine Learning",
    description: "Intelligent solutions powered by cutting-edge AI and machine learning technology.",
    features: ["LLM Integration", "Custom Models", "Data Analytics"],
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    description: "Comprehensive security audits and solutions to protect your digital assets.",
    features: ["Penetration Testing", "SOC 2", "Compliance"],
  },
  {
    icon: Workflow,
    title: "Digital Transformation",
    description: "End-to-end digital transformation strategies for enterprise modernization.",
    features: ["Process Automation", "Legacy Migration", "Consulting"],
  },
];

export function ServicesPreview() {
  return (
    <section className="py-28 relative overflow-hidden bg-muted/30">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: 'radial-gradient(hsl(var(--foreground)) 1px, transparent 1px)',
        backgroundSize: '24px 24px'
      }} />

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Everything You Need to{" "}
            <span className="gradient-text">Scale</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            From concept to deployment, we provide comprehensive tech solutions 
            that drive innovation and accelerate your business growth.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <AnimatedSection
              key={service.title}
              animation="scale-up"
              delay={index * 80}
            >
              <div className="group h-full p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 mb-6 transition-transform duration-500 group-hover:scale-110">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-display font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Feature Tags */}
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-16" delay={600}>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-card border border-border/50 text-foreground font-medium hover:border-primary/50 hover:text-primary transition-all duration-300 group"
          >
            Explore All Services
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}

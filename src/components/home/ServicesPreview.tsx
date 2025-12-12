import { Code, Cloud, Smartphone, Brain, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom websites and web applications built with cutting-edge technologies.",
    gradient: "from-primary to-primary/50",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications for iOS and Android.",
    gradient: "from-secondary to-secondary/50",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and DevOps solutions for modern businesses.",
    gradient: "from-chart-3 to-chart-3/50",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Intelligent solutions powered by advanced machine learning algorithms.",
    gradient: "from-chart-4 to-chart-4/50",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets.",
    gradient: "from-chart-5 to-chart-5/50",
  },
  {
    icon: Zap,
    title: "Digital Transformation",
    description: "End-to-end digital transformation strategies for enterprises.",
    gradient: "from-primary to-secondary",
  },
];

export function ServicesPreview() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-3 mb-4">
            What We <span className="gradient-text">Offer</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            From concept to deployment, we provide comprehensive tech solutions that drive innovation and accelerate growth.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <AnimatedSection
              key={service.title}
              animation="scale-up"
              delay={index * 100}
            >
              <Card className="group h-full bg-card hover:bg-card/80 border-border/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-2 overflow-hidden">
                <CardContent className="p-8">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.gradient} mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                    <service.icon className="w-7 h-7 text-card" />
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-12" delay={600}>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-4 transition-all duration-300"
          >
            View All Services
            <span className="text-xl">→</span>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}

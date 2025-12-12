import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Code,
  Cloud,
  Smartphone,
  Brain,
  Shield,
  Zap,
  Database,
  Palette,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom websites and web applications built with modern frameworks like React, Next.js, and Vue. We create responsive, performant, and accessible digital experiences.",
    features: ["Custom Web Applications", "E-commerce Solutions", "Progressive Web Apps", "API Development"],
    gradient: "from-primary to-primary/50",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications for iOS and Android. We use React Native and Flutter to deliver seamless mobile experiences.",
    features: ["iOS Development", "Android Development", "Cross-Platform Apps", "App Store Optimization"],
    gradient: "from-secondary to-secondary/50",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure on AWS, Google Cloud, and Azure. We architect, migrate, and optimize your cloud environment for maximum efficiency.",
    features: ["Cloud Migration", "Infrastructure as Code", "Serverless Architecture", "Cost Optimization"],
    gradient: "from-chart-3 to-chart-3/50",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Intelligent solutions powered by advanced machine learning algorithms. From chatbots to predictive analytics, we bring AI to your business.",
    features: ["Natural Language Processing", "Computer Vision", "Predictive Analytics", "AI Chatbots"],
    gradient: "from-chart-4 to-chart-4/50",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets. We provide security audits, penetration testing, and ongoing protection.",
    features: ["Security Audits", "Penetration Testing", "Compliance Management", "Incident Response"],
    gradient: "from-chart-5 to-chart-5/50",
  },
  {
    icon: Zap,
    title: "Digital Transformation",
    description: "End-to-end digital transformation strategies for enterprises. We modernize legacy systems and streamline business processes.",
    features: ["Process Automation", "Legacy Modernization", "Digital Strategy", "Change Management"],
    gradient: "from-primary to-secondary",
  },
  {
    icon: Database,
    title: "Data Engineering",
    description: "Build robust data pipelines and analytics infrastructure. We help you collect, process, and derive insights from your data.",
    features: ["Data Pipelines", "Data Warehousing", "ETL Solutions", "Real-time Analytics"],
    gradient: "from-secondary to-chart-3",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "User-centered design that delights and converts. We create intuitive interfaces backed by research and testing.",
    features: ["User Research", "Interface Design", "Prototyping", "Usability Testing"],
    gradient: "from-chart-4 to-primary",
  },
];

export default function Services() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Our Services
            </span>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Solutions That Drive <span className="gradient-text">Innovation</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              We offer comprehensive technology services designed to transform your business and accelerate growth.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <AnimatedSection
                key={service.title}
                animation="scale-up"
                delay={index * 100}
              >
                <Card className="group h-full bg-card hover:bg-card/80 border-border/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 overflow-hidden">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className={`shrink-0 p-4 rounded-2xl bg-gradient-to-br ${service.gradient} transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                        <service.icon className="w-8 h-8 text-card" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-display font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                          {service.description}
                        </p>
                        <ul className="grid grid-cols-2 gap-3">
                          {service.features.map((feature) => (
                            <li key={feature} className="flex items-center gap-2 text-sm">
                              <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Ready to Get <span className="gradient-text">Started?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Let's discuss how we can help transform your business with our cutting-edge technology solutions.
            </p>
            <Button
              asChild
              size="lg"
              className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:scale-105"
            >
              <Link to="/contact">
                Start a Project
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}

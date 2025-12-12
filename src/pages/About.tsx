import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Eye, Heart, Users, Award, Rocket, ArrowRight, Linkedin, Twitter } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Innovation First",
    description: "We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "Open communication and honest feedback are at the core of every client relationship.",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "We're genuinely passionate about technology and its power to transform businesses.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We work closely with clients as true partners, ensuring alignment at every step.",
  },
];

const team = [
  {
    name: "Alex Thompson",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Sarah Mitchell",
    role: "CTO",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "David Chen",
    role: "Head of Engineering",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Emily Rodriguez",
    role: "Design Director",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
    linkedin: "#",
    twitter: "#",
  },
];

const stats = [
  { value: "150+", label: "Projects Completed" },
  { value: "50+", label: "Team Members" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "12+", label: "Years Experience" },
];

export default function About() {
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
              About Us
            </span>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Building the Future of <span className="gradient-text">Technology</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              We're a team of innovators, developers, and designers passionate about creating digital solutions that make a difference.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="slide-in-left">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                  alt="Team collaboration"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-2xl">
                  <div className="text-4xl font-display font-bold">12+</div>
                  <div className="text-sm">Years of Excellence</div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-in-right">
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                Our Story
              </span>
              <h2 className="text-4xl font-display font-bold mt-3 mb-6">
                From Startup to Industry Leader
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Founded in 2012, ThriftGrid began as a small team of passionate developers with a vision to make technology accessible and impactful for businesses of all sizes.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Today, we've grown into a full-service technology partner, helping companies across the globe transform their digital presence and operations. Our journey has been defined by continuous learning, innovation, and an unwavering commitment to our clients' success.
              </p>
              <div className="flex items-center gap-8">
                <div className="flex items-center gap-2">
                  <Award className="w-6 h-6 text-primary" />
                  <span className="font-medium">Award Winning</span>
                </div>
                <div className="flex items-center gap-2">
                  <Rocket className="w-6 h-6 text-primary" />
                  <span className="font-medium">Fast Delivery</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedSection
                key={stat.label}
                animation="scale-up"
                delay={index * 100}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-display font-bold gradient-text">
                  {stat.value}
                </div>
                <div className="text-muted-foreground mt-2">{stat.label}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Our Values
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-3">
              What Drives <span className="gradient-text">Us</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <AnimatedSection
                key={value.title}
                animation="fade-up"
                delay={index * 100}
              >
                <Card className="h-full bg-card border-border/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-2 text-center">
                  <CardContent className="p-8">
                    <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-primary to-secondary mb-6">
                      <value.icon className="w-8 h-8 text-card" />
                    </div>
                    <h3 className="text-xl font-display font-semibold mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Our Team
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-3 mb-4">
              Meet the <span className="gradient-text">Experts</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our talented team brings together diverse skills and experiences to deliver exceptional results.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <AnimatedSection
                key={member.name}
                animation="scale-up"
                delay={index * 100}
              >
                <div className="group text-center">
                  <div className="relative mb-6 overflow-hidden rounded-2xl">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                      <a
                        href={member.linkedin}
                        className="p-2 rounded-full bg-card text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a
                        href={member.twitter}
                        className="p-2 rounded-full bg-card text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        <Twitter className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                  <h3 className="text-xl font-display font-semibold">
                    {member.name}
                  </h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Want to Join Our <span className="gradient-text">Team?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              We're always looking for talented individuals who share our passion for innovation.
            </p>
            <Button
              asChild
              size="lg"
              className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:scale-105"
            >
              <Link to="/contact">
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}

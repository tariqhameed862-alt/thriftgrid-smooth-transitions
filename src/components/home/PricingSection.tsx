import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Starter",
    description: "Perfect for small projects and MVPs",
    price: "2,999",
    period: "project",
    features: [
      "Single page website",
      "Mobile responsive design",
      "Basic SEO setup",
      "2 rounds of revisions",
      "1 month support",
    ],
    popular: false,
  },
  {
    name: "Professional",
    description: "Ideal for growing businesses",
    price: "7,999",
    period: "project",
    features: [
      "Multi-page website (up to 10)",
      "Custom UI/UX design",
      "Advanced SEO optimization",
      "CMS integration",
      "Unlimited revisions",
      "3 months support",
      "Analytics dashboard",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For large-scale applications",
    price: "Custom",
    period: "quote",
    features: [
      "Full-stack development",
      "Custom integrations",
      "Dedicated project manager",
      "Priority support 24/7",
      "Performance optimization",
      "Security audit included",
      "Scalable architecture",
      "Ongoing maintenance",
    ],
    popular: false,
  },
];

export function PricingSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Pricing Plans
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-3 mb-4">
            Transparent <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Choose the perfect plan for your project. No hidden fees, no surprises.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <AnimatedSection
              key={plan.name}
              animation="fade-up"
              delay={index * 150}
            >
              <Card
                className={`relative h-full transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                  plan.popular
                    ? "border-primary/50 bg-gradient-to-b from-primary/5 to-transparent shadow-lg shadow-primary/10"
                    : "hover:border-primary/30"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground text-sm font-medium shadow-lg">
                      <Sparkles className="w-4 h-4" />
                      Most Popular
                    </div>
                  </div>
                )}

                <CardHeader className="pb-4 pt-8">
                  <h3 className="text-xl font-display font-bold">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="flex items-baseline gap-1">
                    {plan.price !== "Custom" && (
                      <span className="text-2xl text-muted-foreground">$</span>
                    )}
                    <span className="text-5xl font-display font-bold gradient-text">
                      {plan.price}
                    </span>
                    {plan.price !== "Custom" && (
                      <span className="text-muted-foreground">/{plan.period}</span>
                    )}
                  </div>

                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div className="mt-0.5 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    variant={plan.popular ? "gradient" : "outline"}
                    className="w-full"
                    size="lg"
                  >
                    <Link to="/contact">
                      {plan.price === "Custom" ? "Contact Us" : "Get Started"}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
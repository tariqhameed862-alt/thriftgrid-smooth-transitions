import { Star, Quote } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    content: "ThriftGrid transformed our entire digital infrastructure. Their team's expertise and dedication exceeded our expectations at every turn.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "CTO, InnovateCo",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    content: "The AI solutions they delivered have revolutionized our data analysis capabilities. Truly exceptional work and outstanding support.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Founder, GrowthHub",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    content: "Working with ThriftGrid was a game-changer for our startup. They understood our vision and brought it to life beautifully.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-3 mb-4">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Don't just take our word for it — hear from the amazing companies we've had the pleasure to work with.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection
              key={testimonial.name}
              animation="scale-up"
              delay={index * 150}
            >
              <Card className="h-full bg-card border-border/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-2">
                <CardContent className="p-8">
                  <Quote className="w-10 h-10 text-primary/20 mb-4" />
                  <p className="text-foreground/90 leading-relaxed mb-6">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20"
                    />
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

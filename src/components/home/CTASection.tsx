import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="relative rounded-3xl overflow-hidden">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-secondary opacity-90" />
            
            {/* Animated Shapes */}
            <div className="absolute top-10 left-10 w-40 h-40 bg-card/10 rounded-full blur-2xl animate-float" />
            <div className="absolute bottom-10 right-10 w-60 h-60 bg-card/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '-2s' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-card/5 rounded-full blur-3xl animate-pulse-slow" />

            {/* Content */}
            <div className="relative z-10 py-20 px-8 md:px-16 text-center">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-card mb-6">
                Ready to Transform
                <br />
                Your Business?
              </h2>
              <p className="text-card/80 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                Let's collaborate to build something extraordinary. Start your journey with ThriftGrid today.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="group bg-card text-foreground hover:bg-card/90 px-8 py-6 text-lg rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  <Link to="/contact">
                    Get in Touch
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="px-8 py-6 text-lg rounded-full border-card/30 bg-transparent text-card hover:bg-card/10 hover:text-card transition-all duration-300"
                >
                  <Link to="/portfolio">View Our Work</Link>
                </Button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

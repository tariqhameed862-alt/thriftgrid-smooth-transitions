import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function CTASection() {
  return (
    <section className="py-28 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="relative rounded-3xl overflow-hidden">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-secondary" />
            
            {/* Subtle Pattern */}
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }} />

            {/* Content */}
            <div className="relative z-10 py-20 px-8 md:px-20">
              <div className="max-w-3xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-background/10 border border-background/20 mb-8">
                  <Sparkles className="w-4 h-4 text-background" />
                  <span className="text-sm font-medium text-background">Let's Build Together</span>
                </div>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-background mb-6 leading-tight">
                  Ready to Transform Your Business?
                </h2>

                <p className="text-background/80 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                  Partner with us to build digital products that scale. Let's turn your vision into reality.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="group bg-background text-foreground hover:bg-background/90 px-8 h-14 text-base rounded-full transition-all duration-300 hover:shadow-xl"
                  >
                    <Link to="/contact">
                      Start a Project
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="px-8 h-14 text-base rounded-full border-background/30 bg-transparent text-background hover:bg-background/10 transition-all duration-300"
                  >
                    <Link to="/portfolio">View Case Studies</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

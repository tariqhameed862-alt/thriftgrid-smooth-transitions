import { useState } from "react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Mail, ArrowRight, CheckCircle } from "lucide-react";

export function NewsletterSection() {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Successfully Subscribed!",
      description: "You'll receive our latest updates and insights.",
    });

    setIsSubscribed(true);
    setEmail("");
    setIsSubmitting(false);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-card via-card to-muted border border-border/50">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5" style={{
              backgroundImage: 'linear-gradient(45deg, hsl(var(--primary)) 25%, transparent 25%), linear-gradient(-45deg, hsl(var(--primary)) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, hsl(var(--primary)) 75%), linear-gradient(-45deg, transparent 75%, hsl(var(--primary)) 75%)',
              backgroundSize: '20px 20px',
              backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
            }} />

            {/* Gradient Orbs */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl" />

            <div className="relative z-10 py-16 px-8 md:px-16">
              <div className="max-w-2xl mx-auto text-center">
                <div className="inline-flex p-3 rounded-2xl bg-primary/10 mb-6">
                  <Mail className="w-8 h-8 text-primary" />
                </div>

                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                  Stay Ahead of the <span className="gradient-text">Curve</span>
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Subscribe to our newsletter for the latest insights, tech trends, and exclusive updates from ThriftGrid.
                </p>

                {isSubscribed ? (
                  <div className="flex items-center justify-center gap-3 text-primary">
                    <CheckCircle className="w-6 h-6" />
                    <span className="font-medium">Thanks for subscribing!</span>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                    <Input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="flex-1 bg-background border-border h-12 rounded-xl"
                    />
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="group bg-primary hover:bg-primary/90 text-primary-foreground h-12 px-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
                    >
                      {isSubmitting ? (
                        "Subscribing..."
                      ) : (
                        <>
                          Subscribe
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </Button>
                  </form>
                )}

                <p className="text-xs text-muted-foreground mt-4">
                  No spam, unsubscribe anytime. We respect your privacy.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

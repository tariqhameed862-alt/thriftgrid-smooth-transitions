import { ArrowRight, Sparkles, Rocket, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroBg from "@/assets/hero-bg.jpg";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div className="absolute inset-0" style={{ y: backgroundY }}>
        <img
          src={heroBg}
          alt="Abstract technology background"
          className="w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/80" />
      </motion.div>

      {/* Animated Gradient Mesh with Parallax */}
      <motion.div className="absolute inset-0 overflow-hidden" style={{ y: backgroundY }}>
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-gradient-to-br from-secondary/15 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-accent/10 to-transparent rounded-full blur-3xl animate-pulse-slow" />
      </motion.div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)',
        backgroundSize: '80px 80px'
      }} />

      <motion.div 
        className="container mx-auto px-6 relative z-10 pt-24"
        style={{ y: textY, opacity }}
      >
        <div className="max-w-5xl mx-auto text-center">
          {/* Trust Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-10"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">
              Trusted by 500+ Companies Worldwide
            </span>
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-secondary border-2 border-background" />
              ))}
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] mb-8 tracking-tight"
          >
            Build the Future with{" "}
            <span className="relative">
              <span className="gradient-text">Next-Gen</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                <path d="M2 10C50 4 100 2 150 6C200 10 250 4 298 8" stroke="hsl(var(--primary))" strokeWidth="3" strokeLinecap="round" className="opacity-60"/>
              </svg>
            </span>
            {" "}Technology
          </motion.h1>

          {/* Subheadline */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            We partner with ambitious startups and enterprises to design, build, and scale 
            digital products that users love and businesses depend on.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Button
              asChild
              size="lg"
              variant="gradient"
              className="group px-8 h-14 text-base"
            >
              <Link to="/contact">
                <Rocket className="mr-2 h-5 w-5" />
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="group px-8 h-14 text-base border-border/50 hover:border-primary/50 hover:bg-primary/5"
            >
              <Link to="/portfolio">
                View Our Work
              </Link>
            </Button>
          </motion.div>

          {/* Feature Pills */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            {[
              { icon: Shield, text: "Enterprise Security" },
              { icon: Zap, text: "Lightning Fast" },
              { icon: Sparkles, text: "AI-Powered" },
            ].map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 border border-border/50 backdrop-blur-sm"
              >
                <feature.icon className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">{feature.text}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto mt-24"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-8 rounded-2xl bg-card/40 border border-border/30 backdrop-blur-xl">
            {[
              { value: "150+", label: "Projects Delivered" },
              { value: "98%", label: "Client Retention" },
              { value: "50+", label: "Team Experts" },
              { value: "12+", label: "Years Experience" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-display font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <div className="w-6 h-10 rounded-full border-2 border-border/40 flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-primary" />
        </div>
      </motion.div>
    </section>
  );
}

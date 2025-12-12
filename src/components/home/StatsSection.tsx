import { useEffect, useRef, useState } from "react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const stats = [
  { value: 150, suffix: "+", label: "Projects Delivered", duration: 2000 },
  { value: 98, suffix: "%", label: "Client Satisfaction", duration: 2200 },
  { value: 50, suffix: "+", label: "Team Experts", duration: 1800 },
  { value: 12, suffix: "+", label: "Years Experience", duration: 1600 },
  { value: 25, suffix: "M+", label: "Users Reached", duration: 2400 },
  { value: 15, suffix: "+", label: "Countries Served", duration: 2000 },
];

function AnimatedCounter({ value, suffix, duration }: { value: number; suffix: string; duration: number }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const increment = value / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            if (start >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value, duration, hasAnimated]);

  return (
    <div ref={ref} className="text-5xl md:text-6xl font-display font-bold gradient-text">
      {count}{suffix}
    </div>
  );
}

export function StatsSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      
      {/* Animated Orbs */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Our Impact
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-3 mb-4">
            Numbers That <span className="gradient-text">Speak</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Our track record of success speaks for itself through these milestones.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat, index) => (
            <AnimatedSection
              key={stat.label}
              animation="scale-up"
              delay={index * 100}
              className="text-center"
            >
              <AnimatedCounter value={stat.value} suffix={stat.suffix} duration={stat.duration} />
              <div className="text-muted-foreground mt-2 text-sm">{stat.label}</div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

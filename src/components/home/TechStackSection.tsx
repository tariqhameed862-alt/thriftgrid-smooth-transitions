import { AnimatedSection } from "@/components/ui/AnimatedSection";

const technologies = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Vue.js", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "Node.js", category: "Backend" },
  { name: "Python", category: "Backend" },
  { name: "Go", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "Redis", category: "Database" },
  { name: "AWS", category: "Cloud" },
  { name: "Google Cloud", category: "Cloud" },
  { name: "Docker", category: "DevOps" },
  { name: "Kubernetes", category: "DevOps" },
  { name: "TensorFlow", category: "AI/ML" },
  { name: "PyTorch", category: "AI/ML" },
];

export function TechStackSection() {
  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(var(--foreground)) 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Technology Stack
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-3 mb-4">
            Built With the <span className="gradient-text">Best</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We leverage cutting-edge technologies to build robust, scalable solutions.
          </p>
        </AnimatedSection>

        <div className="flex flex-wrap justify-center gap-4">
          {technologies.map((tech, index) => (
            <AnimatedSection
              key={tech.name}
              animation="scale-up"
              delay={index * 50}
            >
              <div className="group relative px-6 py-3 rounded-full bg-card border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/10 cursor-pointer">
                <span className="font-medium group-hover:text-primary transition-colors duration-300">
                  {tech.name}
                </span>
                <span className="absolute -top-2 -right-2 text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {tech.category}
                </span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

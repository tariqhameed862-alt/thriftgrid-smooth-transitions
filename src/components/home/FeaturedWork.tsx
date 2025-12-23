import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { HoverGlowCard } from "@/components/ui/MicroInteraction";

const projects = [
  {
    title: "FinTech Dashboard",
    category: "Web Application",
    description: "A comprehensive financial analytics platform with real-time data visualization and AI-powered insights.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["React", "Node.js", "PostgreSQL"],
  },
  {
    title: "HealthCare App",
    category: "Mobile Application",
    description: "Patient management and telemedicine solution with HIPAA compliance and secure video consultations.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    tags: ["React Native", "AWS", "HIPAA"],
  },
  {
    title: "E-Commerce Platform",
    category: "Full Stack",
    description: "Scalable multi-vendor marketplace with advanced inventory management and payment processing.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    tags: ["Next.js", "Stripe", "Vercel"],
  },
];

export function FeaturedWork() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Split screen parallax effect - left column moves up, right moves down
  const leftY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const rightY = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  return (
    <section ref={containerRef} className="py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6"
              whileHover={{ scale: 1.05, borderColor: "hsl(var(--primary))" }}
              transition={{ duration: 0.2 }}
            >
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">Portfolio</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              Featured <span className="gradient-text">Projects</span>
            </h2>
          </div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-card border border-border/50 text-foreground font-medium hover:border-primary/50 hover:text-primary hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group"
            >
              View All Work
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>
        </AnimatedSection>

        {/* Split Screen Parallax Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - First project */}
          <motion.div style={{ y: leftY }} className="will-change-transform">
            <HoverGlowCard>
              <ProjectCard project={projects[0]} index={0} />
            </HoverGlowCard>
          </motion.div>

          {/* Right Column - Second and Third projects stacked */}
          <motion.div style={{ y: rightY }} className="will-change-transform space-y-8">
            {projects.slice(1).map((project, index) => (
              <HoverGlowCard key={project.title}>
                <ProjectCard project={project} index={index + 1} isCompact />
              </HoverGlowCard>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: typeof projects[0];
  index: number;
  isCompact?: boolean;
}

function ProjectCard({ project, index, isCompact = false }: ProjectCardProps) {
  return (
    <AnimatedSection animation="fade-up" delay={index * 120}>
      <motion.div 
        className={`group relative ${isCompact ? 'h-[320px]' : 'h-[500px]'} rounded-2xl overflow-hidden bg-card border border-border/50 hover:border-primary/30 transition-all duration-500`}
        whileHover={{ boxShadow: "0 25px 50px -12px hsl(var(--primary) / 0.15)" }}
      >
        {/* Image with parallax zoom */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        </div>
        
        {/* Content */}
        <div className="absolute inset-0 p-8 flex flex-col justify-end">
          {/* Category Badge with hover */}
          <motion.span 
            className="inline-flex w-fit px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold mb-4"
            whileHover={{ scale: 1.05, backgroundColor: "hsl(var(--primary) / 0.3)" }}
          >
            {project.category}
          </motion.span>

          <h3 className="text-2xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
            {project.title}
          </h3>

          {!isCompact && (
            <p className="text-muted-foreground mb-6 line-clamp-2">
              {project.description}
            </p>
          )}

          {/* Tags with staggered hover */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, i) => (
              <motion.span
                key={i}
                className="px-3 py-1 text-xs font-medium rounded-full bg-muted/80 text-muted-foreground"
                whileHover={{ 
                  scale: 1.1, 
                  backgroundColor: "hsl(var(--primary) / 0.2)",
                  color: "hsl(var(--primary))"
                }}
                transition={{ duration: 0.2 }}
              >
                {tag}
              </motion.span>
            ))}
          </div>

          {/* View Link with slide-up animation */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileHover={{ opacity: 1, y: 0 }}
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <motion.button 
              className="inline-flex items-center gap-2 text-primary font-medium"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              View Case Study 
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ExternalLink className="w-4 h-4" />
              </motion.span>
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </AnimatedSection>
  );
}

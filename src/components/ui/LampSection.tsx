import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowRight, Sparkles, Zap, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface LampSectionProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const features = [
  {
    icon: Sparkles,
    title: "Creative Excellence",
    description: "Award-winning designs that captivate and convert",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized performance for exceptional user experience",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Solutions that scale across markets and platforms",
  },
];

export function LampSection({ title, subtitle, className }: LampSectionProps) {
  return (
    <section className={cn("relative bg-background py-20 md:py-32", className)}>
      {/* Lamp effect container */}
      <div className="absolute inset-x-0 top-0 h-[300px] overflow-hidden pointer-events-none">
        <div className="relative flex w-full items-center justify-center">
          {/* Left beam */}
          <motion.div
            initial={{ opacity: 0.5, width: "15rem" }}
            whileInView={{ opacity: 1, width: "30rem" }}
            viewport={{ once: true }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="absolute right-1/2 top-0 h-56 w-[30rem] bg-gradient-to-r from-transparent via-primary/20 to-primary/40"
            style={{
              clipPath: "polygon(100% 0, 50% 100%, 100% 100%)",
            }}
          />

          {/* Right beam */}
          <motion.div
            initial={{ opacity: 0.5, width: "15rem" }}
            whileInView={{ opacity: 1, width: "30rem" }}
            viewport={{ once: true }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="absolute left-1/2 top-0 h-56 w-[30rem] bg-gradient-to-l from-transparent via-primary/20 to-primary/40"
            style={{
              clipPath: "polygon(0 0, 50% 100%, 0 100%)",
            }}
          />

          {/* Primary glow orb */}
          <motion.div
            initial={{ opacity: 0.3, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="absolute top-0 h-32 w-64 rounded-full bg-primary/30 blur-3xl"
          />

          {/* Lamp bar */}
          <motion.div
            initial={{ width: "10rem", opacity: 0 }}
            whileInView={{ width: "20rem", opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="absolute top-0 h-1 w-80 rounded-full bg-primary shadow-lg shadow-primary/50"
          />
        </div>
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 pt-16">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5"
          >
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Innovation Driven</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="bg-gradient-to-br from-foreground to-foreground/60 py-4 bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-6xl lg:text-7xl"
          >
            {title}
          </motion.h2>
          
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.5,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="mt-4 max-w-2xl text-muted-foreground text-lg"
            >
              {subtitle}
            </motion.p>
          )}

          {/* Feature cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-6 w-full max-w-4xl"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm p-6 text-center transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-semibold text-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
          >
            <Button asChild size="lg" className="group">
              <Link to="/services">
                Explore Our Services
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-8 md:gap-12"
          >
            {[
              { value: "500+", label: "Projects Delivered" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "15+", label: "Countries Served" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.1 + index * 0.1, duration: 0.4 }}
                className="text-center"
              >
                <div className="text-2xl font-bold text-primary md:text-3xl">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

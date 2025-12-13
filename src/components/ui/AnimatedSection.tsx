import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: "fade-up" | "fade-down" | "fade-in" | "scale-up" | "slide-in-right" | "slide-in-left";
  delay?: number;
}

const variants = {
  "fade-up": {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  },
  "fade-down": {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0 }
  },
  "fade-in": {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  "scale-up": {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 }
  },
  "slide-in-right": {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 }
  },
  "slide-in-left": {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  },
};

export function AnimatedSection({
  children,
  className,
  animation = "fade-up",
  delay = 0,
}: AnimatedSectionProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={variants[animation]}
      transition={{ 
        duration: 0.6, 
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: delay / 1000 
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
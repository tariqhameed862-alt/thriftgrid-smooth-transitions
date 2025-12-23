import { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: "fade-up" | "fade-down" | "fade-in" | "scale-up" | "slide-in-right" | "slide-in-left";
  delay?: number;
  parallax?: boolean;
  parallaxSpeed?: number;
}

const variants = {
  "fade-up": {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  },
  "fade-down": {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0 }
  },
  "fade-in": {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  "scale-up": {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  },
  "slide-in-right": {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 }
  },
  "slide-in-left": {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 }
  },
};

export function AnimatedSection({
  children,
  className,
  animation = "fade-up",
  delay = 0,
  parallax = false,
  parallaxSpeed = 0.1,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50 * parallaxSpeed, -50 * parallaxSpeed]);

  if (parallax) {
    return (
      <motion.div
        ref={ref}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={variants[animation]}
        style={{ y }}
        transition={{ 
          duration: 0.7, 
          ease: [0.22, 1, 0.36, 1],
          delay: delay / 1000 
        }}
        className={cn(className)}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants[animation]}
      transition={{ 
        duration: 0.7, 
        ease: [0.22, 1, 0.36, 1],
        delay: delay / 1000 
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface HoverCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
}

export function HoverGlowCard({ children, className, glowColor = "primary" }: HoverCardProps) {
  return (
    <motion.div
      className={cn(
        "relative group cursor-pointer",
        className
      )}
      whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeOut" } }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Glow Effect */}
      <div className={cn(
        "absolute -inset-0.5 rounded-2xl opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-70",
        glowColor === "primary" && "bg-primary/20",
        glowColor === "accent" && "bg-accent/20",
        glowColor === "secondary" && "bg-secondary/20"
      )} />
      
      {/* Content */}
      <div className="relative">
        {children}
      </div>
    </motion.div>
  );
}

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  strength?: number;
}

export function MagneticButton({ children, className, strength = 0.3 }: MagneticButtonProps) {
  return (
    <motion.div
      className={cn("inline-block", className)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.div>
  );
}

interface FloatingElementProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  distance?: number;
}

export function FloatingElement({ 
  children, 
  className, 
  delay = 0, 
  duration = 3,
  distance = 10 
}: FloatingElementProps) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [-distance, distance, -distance],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  tiltAmount?: number;
}

export function TiltCard({ children, className, tiltAmount = 10 }: TiltCardProps) {
  return (
    <motion.div
      className={cn("transform-gpu", className)}
      whileHover={{
        rotateX: tiltAmount / 2,
        rotateY: tiltAmount,
        transition: { duration: 0.3 }
      }}
      style={{ transformStyle: "preserve-3d", perspective: 1000 }}
    >
      {children}
    </motion.div>
  );
}

interface RevealTextProps {
  children: string;
  className?: string;
  delay?: number;
}

export function RevealText({ children, className, delay = 0 }: RevealTextProps) {
  const words = children.split(" ");
  
  return (
    <motion.span className={className}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: delay + index * 0.1,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="inline-block mr-[0.25em]"
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}

interface PulseIconProps {
  children: ReactNode;
  className?: string;
}

export function PulseIcon({ children, className }: PulseIconProps) {
  return (
    <motion.div
      className={cn("relative", className)}
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <motion.div
        className="absolute inset-0 rounded-full bg-primary/20"
        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      {children}
    </motion.div>
  );
}

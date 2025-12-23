import { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface SplitScreenParallaxProps {
  leftContent: ReactNode;
  rightContent: ReactNode;
  className?: string;
  leftSpeed?: number;
  rightSpeed?: number;
  reverse?: boolean;
}

export function SplitScreenParallax({
  leftContent,
  rightContent,
  className,
  leftSpeed = 0.3,
  rightSpeed = 0.3,
  reverse = false,
}: SplitScreenParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const leftY = useTransform(
    scrollYProgress,
    [0, 1],
    reverse ? [100 * leftSpeed, -100 * leftSpeed] : [-100 * leftSpeed, 100 * leftSpeed]
  );
  
  const rightY = useTransform(
    scrollYProgress,
    [0, 1],
    reverse ? [-100 * rightSpeed, 100 * rightSpeed] : [100 * rightSpeed, -100 * rightSpeed]
  );

  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        <motion.div style={{ y: leftY }} className="will-change-transform">
          {leftContent}
        </motion.div>
        <motion.div style={{ y: rightY }} className="will-change-transform">
          {rightContent}
        </motion.div>
      </div>
    </div>
  );
}

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  speed?: number;
}

export function ParallaxImage({ src, alt, className, speed = 0.2 }: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-50 * speed, 50 * speed]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);

  return (
    <div ref={ref} className={cn("overflow-hidden", className)}>
      <motion.img
        src={src}
        alt={alt}
        style={{ y, scale }}
        className="w-full h-full object-cover will-change-transform"
      />
    </div>
  );
}

import { useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

export function useParallax(speed: number = 0.5) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100 * speed, -100 * speed]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.6, 1, 1, 0.6]);

  return { ref, y, opacity, scrollYProgress };
}

export function useParallaxRange(
  scrollYProgress: MotionValue<number>,
  inputRange: number[],
  outputRange: number[]
) {
  return useTransform(scrollYProgress, inputRange, outputRange);
}

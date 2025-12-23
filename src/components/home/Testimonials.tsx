import { useState, useEffect, useCallback } from "react";
import { Star, Quote, ChevronLeft, ChevronRight, Building2 } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechStart Inc.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    content: "ThriftGrid transformed our entire digital infrastructure. Their team's expertise and dedication exceeded our expectations at every turn. The results speak for themselves.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "CTO",
    company: "InnovateCo",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    content: "The AI solutions they delivered have revolutionized our data analysis capabilities. Truly exceptional work and outstanding support throughout the entire process.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Founder",
    company: "GrowthHub",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    content: "Working with ThriftGrid was a game-changer for our startup. They understood our vision and brought it to life with incredible attention to detail and craftsmanship.",
    rating: 5,
  },
  {
    name: "David Park",
    role: "VP Engineering",
    company: "CloudNine Systems",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
    content: "The cloud migration they executed was flawless. Zero downtime, seamless transition, and our infrastructure costs dropped by 40%. Highly recommend their services.",
    rating: 5,
  },
  {
    name: "Lisa Wang",
    role: "Product Director",
    company: "DataFlow Analytics",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80",
    content: "Their approach to product development is refreshingly collaborative. They don't just build what you ask - they help you discover what you actually need.",
    rating: 5,
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, nextSlide]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
    }),
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-transparent to-muted/30" />

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Trusted by <span className="gradient-text">Industry Leaders</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            See what our clients have to say about working with us.
          </p>
        </AnimatedSection>

        {/* Main Carousel */}
        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="relative overflow-hidden rounded-3xl bg-card border border-border/50 p-8 md:p-12 min-h-[400px]">
            {/* Quote Icon */}
            <div className="absolute top-8 right-8 md:top-12 md:right-12">
              <Quote className="w-16 h-16 text-primary/10" />
            </div>

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="relative z-10"
              >
                {/* Rating */}
                <div className="flex items-center gap-1 mb-6">
                  {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-xl md:text-2xl font-medium text-foreground leading-relaxed mb-8">
                  "{currentTestimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img
                    src={currentTestimonial.image}
                    alt={currentTestimonial.name}
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
                  />
                  <div className="flex-1">
                    <h4 className="font-display font-semibold text-lg">{currentTestimonial.name}</h4>
                    <p className="text-muted-foreground">
                      {currentTestimonial.role} at {currentTestimonial.company}
                    </p>
                  </div>
                  <div className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border/50">
                    <Building2 className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm font-medium text-muted-foreground">{currentTestimonial.company}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 w-12 h-12 rounded-full bg-card border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-300 shadow-lg"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 w-12 h-12 rounded-full bg-card border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-300 shadow-lg"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots Navigation */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  index === currentIndex
                    ? "w-8 bg-primary"
                    : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Client Logos */}
        <AnimatedSection className="mt-20" delay={300}>
          <p className="text-center text-sm text-muted-foreground mb-8">Trusted by teams at</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={cn(
                  "px-4 py-2 rounded-lg transition-all duration-300 cursor-pointer",
                  index === currentIndex
                    ? "bg-primary/10 text-foreground"
                    : "text-muted-foreground/50 hover:text-muted-foreground"
                )}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
              >
                <span className="font-display font-semibold">{testimonial.company}</span>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

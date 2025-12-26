import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MessageCircle, X, MessageSquare } from "lucide-react";
import { Button } from "./button";
import { cn } from "@/lib/utils";

const contactOptions = [
  {
    icon: Mail,
    label: "Email",
    href: "mailto:hello@agency.com",
    color: "bg-primary hover:bg-primary/90",
  },
  {
    icon: Phone,
    label: "Call",
    href: "tel:+1234567890",
    color: "bg-accent hover:bg-accent/90",
  },
  {
    icon: MessageCircle,
    label: "Chat",
    href: "#chat",
    color: "bg-secondary hover:bg-secondary/90",
  },
];

export function FloatingContactWidget() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8, 
      y: 20,
      transition: { duration: 0.2 }
    },
  };

  const optionVariants = {
    hidden: { opacity: 0, x: 20, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      },
    }),
    exit: (i: number) => ({
      opacity: 0,
      x: 20,
      scale: 0.8,
      transition: {
        delay: (contactOptions.length - 1 - i) * 0.05,
        duration: 0.2,
      },
    }),
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* Contact Options */}
          <AnimatePresence>
            {isExpanded && (
              <div className="flex flex-col gap-2">
                {contactOptions.map((option, index) => (
                  <motion.a
                    key={option.label}
                    href={option.href}
                    custom={index}
                    variants={optionVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 rounded-full shadow-lg text-primary-foreground transition-all",
                      option.color
                    )}
                    whileHover={{ scale: 1.05, x: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <option.icon className="h-5 w-5" />
                    <span className="font-medium text-sm">{option.label}</span>
                  </motion.a>
                ))}
              </div>
            )}
          </AnimatePresence>

          {/* Main Toggle Button */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Button
              size="lg"
              onClick={() => setIsExpanded(!isExpanded)}
              className={cn(
                "h-14 w-14 rounded-full shadow-xl transition-all duration-300",
                isExpanded 
                  ? "bg-muted text-muted-foreground hover:bg-muted/90" 
                  : "bg-primary text-primary-foreground hover:bg-primary/90"
              )}
            >
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isExpanded ? (
                  <X className="h-6 w-6" />
                ) : (
                  <MessageSquare className="h-6 w-6" />
                )}
              </motion.div>
            </Button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Rocket, Users, Award, Globe, Zap, Target } from "lucide-react";
import { cn } from "@/lib/utils";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const timelineData: TimelineItem[] = [
  {
    year: "2019",
    title: "Company Founded",
    description: "ThriftGrid was born with a vision to transform digital experiences for businesses worldwide.",
    icon: <Rocket className="h-5 w-5" />,
  },
  {
    year: "2020",
    title: "Team Expansion",
    description: "Grew our team to 25+ talented developers, designers, and strategists across multiple disciplines.",
    icon: <Users className="h-5 w-5" />,
  },
  {
    year: "2021",
    title: "First Major Award",
    description: "Recognized with the Digital Excellence Award for outstanding web development and innovation.",
    icon: <Award className="h-5 w-5" />,
  },
  {
    year: "2022",
    title: "Global Reach",
    description: "Expanded operations internationally, serving clients across 15+ countries worldwide.",
    icon: <Globe className="h-5 w-5" />,
  },
  {
    year: "2023",
    title: "AI Integration",
    description: "Pioneered AI-powered development solutions, enhancing efficiency and creative capabilities.",
    icon: <Zap className="h-5 w-5" />,
  },
  {
    year: "2024",
    title: "Future Vision",
    description: "Continuing to push boundaries with cutting-edge technologies and exceptional client results.",
    icon: <Target className="h-5 w-5" />,
  },
];

function TimelineCard({ item, index }: { item: TimelineItem; index: number }) {
  const isEven = index % 2 === 0;
  
  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      className={cn(
        "relative flex w-full items-center",
        isEven ? "md:justify-start" : "md:justify-end"
      )}
    >
      {/* Card */}
      <div
        className={cn(
          "group relative w-full md:w-[calc(50%-40px)] rounded-xl border border-border/50 bg-card p-6 shadow-lg transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5",
          isEven ? "md:mr-auto" : "md:ml-auto"
        )}
      >
        {/* Year badge */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
            {item.icon}
          </span>
          {item.year}
        </motion.div>

        {/* Content */}
        <h3 className="mb-2 text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
          {item.title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {item.description}
        </p>

        {/* Connector dot */}
        <div
          className={cn(
            "absolute top-1/2 hidden h-4 w-4 -translate-y-1/2 rounded-full border-4 border-primary bg-background md:block",
            isEven ? "-right-[42px]" : "-left-[42px]"
          )}
        />

        {/* Connector line */}
        <div
          className={cn(
            "absolute top-1/2 hidden h-0.5 w-[26px] -translate-y-1/2 bg-primary/50 md:block",
            isEven ? "-right-[26px]" : "-left-[26px]"
          )}
        />
      </div>
    </motion.div>
  );
}

export function TimelineSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="relative overflow-hidden bg-muted/30 py-20 md:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.05),transparent_70%)]" />

      <div className="container relative mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Our Journey
          </span>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Milestones That Define Us
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            From humble beginnings to industry recognition, explore the key moments that shaped our journey.
          </p>
        </motion.div>

        {/* Timeline */}
        <div ref={containerRef} className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-0.5 -translate-x-1/2 bg-border md:block">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-primary via-primary to-primary/50"
            />
          </div>

          {/* Mobile line */}
          <div className="absolute left-4 top-0 h-full w-0.5 bg-border md:hidden">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-primary via-primary to-primary/50"
            />
          </div>

          {/* Timeline items */}
          <div className="space-y-8 md:space-y-12">
            {timelineData.map((item, index) => (
              <TimelineCard key={item.year} item={item} index={index} />
            ))}
          </div>

          {/* End dot */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            viewport={{ once: true }}
            className="absolute bottom-0 left-1/2 hidden h-6 w-6 -translate-x-1/2 translate-y-3 rounded-full border-4 border-primary bg-background md:block"
          />
        </div>
      </div>
    </section>
  );
}

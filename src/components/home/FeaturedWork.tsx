import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const projects = [
  {
    title: "FinTech Dashboard",
    category: "Web Application",
    description: "A comprehensive financial analytics platform with real-time data visualization.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    color: "from-primary/80 to-secondary/80",
  },
  {
    title: "HealthCare App",
    category: "Mobile Application",
    description: "Patient management and telemedicine solution for healthcare providers.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    color: "from-secondary/80 to-chart-3/80",
  },
  {
    title: "E-Commerce Platform",
    category: "Full Stack",
    description: "Scalable multi-vendor marketplace with advanced inventory management.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    color: "from-chart-3/80 to-chart-4/80",
  },
];

export function FeaturedWork() {
  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Featured Work
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-3">
              Our Latest <span className="gradient-text">Projects</span>
            </h2>
          </div>
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-4 transition-all duration-300"
          >
            View All Projects
            <span className="text-xl">→</span>
          </Link>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection
              key={project.title}
              animation="fade-up"
              delay={index * 150}
            >
              <div className="group relative h-[450px] rounded-2xl overflow-hidden cursor-pointer">
                {/* Background Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-60 transition-opacity duration-500 group-hover:opacity-80`} />
                
                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-card">
                  <span className="text-sm font-medium opacity-80 mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-display font-bold mb-3 transform translate-y-0 group-hover:-translate-y-2 transition-transform duration-500">
                    {project.title}
                  </h3>
                  <p className="opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 mb-4">
                    {project.description}
                  </p>
                  <div className="opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                    <div className="inline-flex items-center gap-2 text-sm font-medium">
                      View Project <ExternalLink className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

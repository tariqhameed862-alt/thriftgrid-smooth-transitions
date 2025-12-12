import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ExternalLink } from "lucide-react";

const categories = ["All", "Web", "Mobile", "AI/ML", "Cloud"];

const projects = [
  {
    title: "FinTech Dashboard",
    category: "Web",
    description: "A comprehensive financial analytics platform with real-time data visualization and advanced reporting.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["React", "Node.js", "PostgreSQL"],
  },
  {
    title: "HealthCare App",
    category: "Mobile",
    description: "Patient management and telemedicine solution connecting patients with healthcare providers.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    tags: ["React Native", "Firebase", "AI"],
  },
  {
    title: "E-Commerce Platform",
    category: "Web",
    description: "Scalable multi-vendor marketplace with advanced inventory management and payment processing.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    tags: ["Next.js", "Stripe", "AWS"],
  },
  {
    title: "AI Content Generator",
    category: "AI/ML",
    description: "GPT-powered content creation tool for marketing teams with brand voice customization.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    tags: ["Python", "OpenAI", "FastAPI"],
  },
  {
    title: "Smart IoT Dashboard",
    category: "Cloud",
    description: "Real-time monitoring and control system for industrial IoT devices across multiple facilities.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    tags: ["AWS IoT", "React", "GraphQL"],
  },
  {
    title: "Fitness Tracking App",
    category: "Mobile",
    description: "Comprehensive fitness application with workout tracking, nutrition planning, and social features.",
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&q=80",
    tags: ["Flutter", "Firebase", "HealthKit"],
  },
  {
    title: "Predictive Analytics",
    category: "AI/ML",
    description: "Machine learning solution for sales forecasting and customer behavior prediction.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    tags: ["Python", "TensorFlow", "BigQuery"],
  },
  {
    title: "Cloud Migration",
    category: "Cloud",
    description: "Enterprise-scale cloud migration from on-premise infrastructure to AWS with zero downtime.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    tags: ["AWS", "Terraform", "Docker"],
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((project) => project.category === activeCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg" />
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Our Portfolio
            </span>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Explore our latest work and see how we've helped businesses transform their digital presence.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <AnimatedSection
                key={project.title}
                animation="scale-up"
                delay={index * 100}
              >
                <div className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer bg-card border border-border/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500">
                  {/* Background Image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-90" />
                  
                  {/* Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <span className="inline-block w-fit text-xs font-medium px-3 py-1 rounded-full bg-primary/20 text-primary mb-3">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-display font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-primary font-medium text-sm opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                      View Case Study <ExternalLink className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

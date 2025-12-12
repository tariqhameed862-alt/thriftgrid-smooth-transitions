import { AnimatedSection } from "@/components/ui/AnimatedSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What services does ThriftGrid offer?",
    answer: "We offer a comprehensive range of technology services including web development, mobile app development, cloud solutions, AI/ML implementation, cybersecurity, UI/UX design, and digital transformation consulting. Our team can handle projects of any scale and complexity.",
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on scope and complexity. A simple website might take 4-6 weeks, while a complex enterprise application could take 3-6 months. We provide detailed timelines during our discovery phase and keep you updated throughout the development process.",
  },
  {
    question: "What is your development process?",
    answer: "We follow an agile methodology with four key phases: Discovery (understanding your needs), Strategy & Planning (creating a roadmap), Design & Development (building your solution), and Launch & Scale (deployment and ongoing support). This ensures transparency and flexibility throughout.",
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer: "Absolutely! We offer comprehensive maintenance packages that include bug fixes, security updates, performance optimization, and feature enhancements. Our support team is available 24/7 for critical issues to ensure your applications run smoothly.",
  },
  {
    question: "What technologies do you work with?",
    answer: "We work with a wide range of modern technologies including React, Next.js, Vue.js, Node.js, Python, Go, AWS, Google Cloud, Docker, Kubernetes, TensorFlow, and more. We select the best tech stack based on your specific project requirements.",
  },
  {
    question: "How do you handle project communication?",
    answer: "We believe in transparent communication. You'll have a dedicated project manager, access to our project management tools, weekly progress reports, and regular video calls. We also provide real-time updates through Slack or your preferred communication channel.",
  },
];

export function FAQSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-3 mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Got questions? We've got answers. Find everything you need to know about working with us.
          </p>
        </AnimatedSection>

        <AnimatedSection className="max-w-3xl mx-auto" animation="fade-up">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border/50 rounded-xl px-6 data-[state=open]:shadow-lg data-[state=open]:shadow-primary/5 transition-all duration-300"
              >
                <AccordionTrigger className="text-left font-display font-semibold hover:text-primary transition-colors py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimatedSection>
      </div>
    </section>
  );
}

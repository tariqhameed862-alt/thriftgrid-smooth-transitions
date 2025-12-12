import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Headphones, FileQuestion } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Our team will respond within 24 hours",
    value: "hello@thriftgrid.com",
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "Mon-Fri from 9am to 6pm PST",
    value: "+1 (555) 123-4567",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    description: "Come say hello at our office",
    value: "123 Tech Street, San Francisco, CA",
  },
  {
    icon: Clock,
    title: "Business Hours",
    description: "We're here to help",
    value: "Mon - Fri: 9:00 AM - 6:00 PM PST",
  },
];

const supportOptions = [
  {
    icon: MessageSquare,
    title: "Sales Inquiry",
    description: "Interested in our services? Let's discuss your project needs.",
  },
  {
    icon: Headphones,
    title: "Technical Support",
    description: "Need help with an existing project? Our support team is ready.",
  },
  {
    icon: FileQuestion,
    title: "General Questions",
    description: "Have questions about ThriftGrid? We'd love to hear from you.",
  },
];

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({
      name: "",
      email: "",
      company: "",
      subject: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg" />
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Contact Us
            </span>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Let's Start a <span className="gradient-text">Conversation</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Have a project in mind? We'd love to hear about it. Get in touch and let's create something amazing together.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {supportOptions.map((option, index) => (
              <AnimatedSection
                key={option.title}
                animation="fade-up"
                delay={index * 100}
              >
                <Card className="h-full bg-card border-border/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10">
                      <option.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{option.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {option.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <AnimatedSection className="lg:col-span-3" animation="slide-in-left">
              <Card className="bg-card border-border/50">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-display font-bold mb-6">
                    Send Us a Message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          required
                          className="bg-background"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          required
                          className="bg-background"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="company">Company (Optional)</Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your Company"
                          className="bg-background"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="How can we help?"
                          required
                          className="bg-background"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project..."
                        rows={6}
                        required
                        className="bg-background resize-none"
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Contact Info */}
            <AnimatedSection className="lg:col-span-2" animation="slide-in-right">
              <div className="space-y-6">
                <h2 className="text-2xl font-display font-bold mb-6">
                  Contact Information
                </h2>
                {contactInfo.map((info, index) => (
                  <div
                    key={info.title}
                    className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="p-3 rounded-xl bg-primary/10">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{info.title}</h3>
                      <p className="text-sm text-muted-foreground mb-1">
                        {info.description}
                      </p>
                      <p className="font-medium text-primary">{info.value}</p>
                    </div>
                  </div>
                ))}

                {/* Map Placeholder */}
                <div className="mt-8 rounded-2xl overflow-hidden h-[250px] bg-muted relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.98555098464!2d-122.50764017948484!3d37.75780949904699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1702400000000!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="ThriftGrid Location"
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
}

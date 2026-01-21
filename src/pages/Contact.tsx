import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Mail,
  Send,
  MapPin,
  Clock,
  Linkedin,
  Facebook,
  Instagram,
  Youtube,
  ArrowRight,
  Phone,
  Loader2,
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const contactReasons = [
  { id: "consulting", label: "Consulting & Advisory", icon: "💼" },
  { id: "synergies", label: "Synergies / Project", icon: "🤝" },
  { id: "riding", label: "Riding Collaboration", icon: "🏍️" },
  { id: "general", label: "General Enquiry", icon: "💬" },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    reason: "",
    message: "",
  });
  const [selectedReason, setSelectedReason] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke("send-contact-email", {
        body: {
          name: formData.name,
          email: formData.email,
          mobile: formData.mobile,
          reason: formData.reason,
          message: formData.message,
        },
      });

      if (error) throw error;

      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      setFormData({ name: "", email: "", mobile: "", reason: "", message: "" });
      setSelectedReason("");
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or email directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleReasonSelect = (reason: string) => {
    setSelectedReason(reason);
    setFormData((prev) => ({ ...prev, reason }));
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Contact Om Mahajan | Digital Governance & e-Governance Consulting"
        description="Get in touch with Om Mahajan for discussions on digital governance, e-Governance systems, urban digital transformation, ERP consulting, or creative collaborations."
        keywords={[
          "Contact Om Mahajan",
          "IT Consulting",
          "Digital Transformation Consulting",
          "digital governance advisory",
          "government ERP consulting contact",
          "E-Governance Expert",
          "ERP and governance systems expert",
        ]}
        url="/contact"
      />
      <Header />

      {/* Hero Section - Compact */}
      <section className="relative pt-24 pb-8 bg-gradient-to-br from-primary/5 via-background to-accent/5 overflow-hidden">
        <div className="absolute top-10 left-10 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-5 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />

        <div className="container-blog relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            {/* Left: Title & Subtitle */}
            <div className="flex-1">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full text-xs text-primary font-medium mb-3">
                Let's Connect
              </span>
              <h1 className="text-3xl md:text-4xl font-serif font-light text-foreground">
                Have an idea? <span className="text-primary">Let's talk.</span>
              </h1>
              <p className="text-sm text-muted-foreground max-w-lg leading-relaxed mt-2">
                Whether you're looking for consulting, speaking engagements, or collaborations — I'm always open to
                meaningful conversations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <main id="main-content" className="container-blog py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
            {/* Left Column - Contact Info */}
            <div className="lg:col-span-2 space-y-10">
              {/* Direct Contact */}
              <div>
                <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-6">Direct Contact</h2>
                <div className="space-y-6">
                  <a href="mailto:hello@ommahajan.com" className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                        hello@ommahajan.com
                      </p>
                      <p className="text-sm text-muted-foreground">For all inquiries</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">India</p>
                      <p className="text-sm text-muted-foreground">Available for global projects</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Response Time</p>
                      <p className="text-sm text-muted-foreground">Usually within 24-48 hours</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="w-16 h-px bg-border" />

              {/* Social Links */}
              <div>
                <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-6">Connect Online</h2>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/in/om-mahajan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.facebook.com/mahajan.aum"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/perfectly.planted.brain/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.youtube.com/@RustyRidersPune"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors"
                    aria-label="YouTube"
                  >
                    <Youtube className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Quick Note */}
              <div className="p-6 bg-muted/50 rounded-2xl border border-border">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <span className="font-medium text-foreground">A quick note:</span> I prioritize meaningful projects
                  and collaborations. Please share relevant details about your inquiry to help me respond effectively.
                </p>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-card border border-border rounded-2xl p-8 md:p-10 shadow-sm">
                <h2 className="text-2xl font-serif font-light text-foreground mb-2">Send a Message</h2>
                <p className="text-muted-foreground mb-8">
                  Fill in the details below and I'll get back to you shortly.
                </p>

                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Reason Selection */}
                  <div className="space-y-3">
                    <Label className="text-sm font-medium">What's this about?</Label>
                    <div className="grid grid-cols-2 gap-3">
                      {contactReasons.map((reason) => (
                        <button
                          key={reason.id}
                          type="button"
                          onClick={() => handleReasonSelect(reason.id)}
                          className={`p-4 rounded-xl border text-left transition-all ${
                            selectedReason === reason.id
                              ? "border-primary bg-primary/5 ring-1 ring-primary"
                              : "border-border hover:border-primary/50 hover:bg-muted/50"
                          }`}
                        >
                          <span className="text-xl mb-2 block">{reason.icon}</span>
                          <span className="text-sm font-medium text-foreground">{reason.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name & Mobile Row */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        className="h-12 rounded-xl"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="mobile">Mobile Number</Label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                          id="mobile"
                          name="mobile"
                          type="tel"
                          placeholder="+91 98765 43210"
                          value={formData.mobile}
                          onChange={handleChange}
                          className="h-12 rounded-xl pl-11"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Email Address */}
                  <div className="space-y-2">
                    <Label htmlFor="email">
                      Email Address <span className="text-muted-foreground text-xs">(Optional)</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="h-12 rounded-xl"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label htmlFor="message">
                      Your Message <span className="text-muted-foreground text-xs">(Optional)</span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Share the details of your inquiry..."
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="rounded-xl resize-none"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full h-12 rounded-xl gap-2" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;

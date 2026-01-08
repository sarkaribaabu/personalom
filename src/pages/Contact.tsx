import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Send, MapPin, Clock, Linkedin, Twitter, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const contactReasons = [
  { id: 'consulting', label: 'Consulting & Advisory', icon: '💼' },
  { id: 'speaking', label: 'Speaking Engagement', icon: '🎤' },
  { id: 'collaboration', label: 'Book Collaboration', icon: '📚' },
  { id: 'general', label: 'General Inquiry', icon: '💬' },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    reason: '',
    message: ''
  });
  const [selectedReason, setSelectedReason] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    
    setFormData({ name: '', email: '', reason: '', message: '' });
    setSelectedReason('');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleReasonSelect = (reason: string) => {
    setSelectedReason(reason);
    setFormData(prev => ({ ...prev, reason }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-primary/10 via-background to-accent/10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--primary)/0.1),transparent_50%)]" />
        <div className="container-blog relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-sm text-primary font-medium mb-6">
              Let's Connect
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-light text-foreground mb-6 leading-tight">
              Have an idea? <br />
              <span className="text-primary">Let's talk.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Whether you're looking for consulting, speaking engagements, or book collaborations — 
              I'm always open to meaningful conversations.
            </p>
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
                <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-6">
                  Direct Contact
                </h2>
                <div className="space-y-6">
                  <a 
                    href="mailto:hello@ommahajan.com" 
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                        hello@ommahajan.com
                      </p>
                      <p className="text-sm text-muted-foreground">
                        For all inquiries
                      </p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">India</p>
                      <p className="text-sm text-muted-foreground">
                        Available for global projects
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Response Time</p>
                      <p className="text-sm text-muted-foreground">
                        Usually within 24-48 hours
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="w-16 h-px bg-border" />

              {/* Social Links */}
              <div>
                <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-6">
                  Connect Online
                </h2>
                <div className="flex gap-4">
                  <a 
                    href="https://linkedin.com/in/ommahajan" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://twitter.com/ommahajan" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Quick Note */}
              <div className="p-6 bg-muted/50 rounded-2xl border border-border">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <span className="font-medium text-foreground">A quick note:</span> I prioritize 
                  meaningful projects and collaborations. Please share relevant details about your 
                  inquiry to help me respond effectively.
                </p>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-card border border-border rounded-2xl p-8 md:p-10 shadow-sm">
                <h2 className="text-2xl font-serif font-light text-foreground mb-2">
                  Send a Message
                </h2>
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
                              ? 'border-primary bg-primary/5 ring-1 ring-primary'
                              : 'border-border hover:border-primary/50 hover:bg-muted/50'
                          }`}
                        >
                          <span className="text-xl mb-2 block">{reason.icon}</span>
                          <span className="text-sm font-medium text-foreground">
                            {reason.label}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name & Email Row */}
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
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="h-12 rounded-xl"
                        required
                      />
                    </div>
                  </div>
                  
                  {/* Message */}
                  <div className="space-y-2">
                    <Label htmlFor="message">Your Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Share the details of your inquiry..."
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="rounded-xl resize-none"
                      required
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full h-12 rounded-xl gap-2">
                    Send Message
                    <ArrowRight className="w-4 h-4" />
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

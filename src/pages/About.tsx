import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Mail, Linkedin, Twitter } from 'lucide-react';

const About = () => {
  const testimonials = [
    {
      quote: "A visionary technologist who bridges the gap between complex systems and business outcomes",
      source: "Tech Leadership Journal"
    },
    {
      quote: "His books demystify cloud architecture in ways that both beginners and experts appreciate",
      source: "Cloud Computing Weekly"
    },
    {
      quote: "One of the most insightful voices in the DevOps and cloud computing space",
      source: "DevOps Digest"
    },
    {
      quote: "An author who truly understands the challenges of modern IT infrastructure",
      source: "Enterprise Architecture Review"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section with Background */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-b from-primary/20 via-primary/10 to-background">
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-10" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-serif font-light text-foreground tracking-wide mb-6">
            ABOUT OM
          </h1>
          <div className="w-16 h-0.5 bg-primary mx-auto" />
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container-blog">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="text-center px-6">
                <p className="text-lg md:text-xl text-primary/90 italic font-light leading-relaxed mb-4">
                  '{testimonial.quote}'
                </p>
                <p className="text-sm text-muted-foreground uppercase tracking-widest">
                  {testimonial.source}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Bio Section */}
      <main id="main-content" className="container-blog py-16">
        <div className="max-w-4xl mx-auto">
          {/* Headline & Sub-headline */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-foreground leading-tight mb-8">
              Architecting Digital Governance. <br className="hidden md:block" />
              <span className="text-primary">Crafting Human Narratives.</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Om Mahajan is a Digital Transformation Specialist and Creative Author. With over 15 years of experience, he bridges the gap between precision-driven e-Governance systems and the art of storytelling, helping organizations build technology that serves the human experience.
            </p>
          </div>

          {/* The Technologist */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-serif font-light text-foreground mb-6 tracking-wide">
              THE TECHNOLOGIST
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Om has spent over a decade and a half mastering the architecture of complex systems. While his roots lie in Cloud Computing and DevOps, his passion has evolved into a specialized focus on e-Governance and Urban Digital Transformation.
              </p>
              <p>
                Currently pursuing a Doctorate in Digital Transformation in Urban Governance, Om combines academic rigor with practical execution. He is known for leading high-impact initiatives, including award-nominated projects for municipal corporations (such as NMMC) that modernize how cities interact with their citizens.
              </p>
            </div>
          </div>

          {/* The Storyteller */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-serif font-light text-foreground mb-6 tracking-wide">
              THE STORYTELLER
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Beyond the code, Om possesses a distinct narrative voice. He is a writer of fiction, poetry, and reflective articles, believing that the best solutions—whether digital or literary—require deep empathy.
              </p>
              <p>
                Unlike typical technical writers, Om explores the nuances of human nature through his stories. This "poetic mindset" allows him to approach IT leadership with a unique perspective: viewing technology not just as infrastructure, but as a tool to improve human lives.
              </p>
            </div>
          </div>

          {/* The Explorer */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-serif font-light text-foreground mb-6 tracking-wide">
              THE EXPLORER
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Om believes that creativity is fueled by curiosity. When not architecting government frameworks or penning his next story, he can be found on the open road on his motorcycle or capturing the world through miniature photography. A creator at heart, he is constantly seeking the intersection where logic meets imagination.
            </p>
          </div>

          {/* CTA Section */}
          <div className="text-center border-t border-border pt-12">
            <h3 className="text-2xl font-serif font-light text-foreground mb-6">
              Get in Touch
            </h3>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Button asChild size="lg">
                <Link to="/contact">
                  <Mail className="h-4 w-4 mr-2" />
                  Contact
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/books">View Books</Link>
              </Button>
            </div>
            <div className="flex justify-center gap-6">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;

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
          {/* Bio Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-xl text-foreground leading-relaxed mb-8">
              Om Mahajan is an IT professional with over 15 years of experience in cloud computing, 
              DevOps, and enterprise architecture. As an author, consultant, and technology leader, 
              his work focuses on helping organizations navigate the complexities of modern IT 
              infrastructure and digital transformation.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              With a career spanning multiple industries and technologies, Om has built expertise 
              in designing scalable systems, implementing DevOps practices, and architecting 
              cloud-native solutions. His practical approach to technology, combined with a deep 
              understanding of business needs, has made him a trusted advisor to enterprises 
              worldwide.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              As an author, Om has written and published books that demystify complex technical 
              concepts for practitioners at all levels. His writing combines real-world experience 
              with accessible explanations, making advanced topics approachable without sacrificing 
              depth. His published works cover cloud architecture, DevOps practices, and the 
              intersection of technology with business strategy.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              Beyond writing, Om is a frequent speaker at technology conferences and contributes 
              to the tech community through mentoring, workshops, and open-source projects. He 
              believes in continuous learning and sharing knowledge as the foundation of 
              professional growth.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-12">
              When not immersed in technology, Om enjoys exploring new ideas, reading across 
              diverse subjects, and connecting with fellow professionals who share his passion 
              for building better systems and solving complex problems.
            </p>
          </div>

          {/* Photo Section */}
          <div className="my-16">
            <div className="aspect-[4/3] max-w-2xl mx-auto rounded-lg bg-muted flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl font-serif text-primary">OM</span>
                </div>
                <p className="text-muted-foreground">Author Photo</p>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="prose prose-lg dark:prose-invert max-w-none mb-16">
            <h2 className="text-3xl font-serif font-light text-foreground mb-6">
              Current Focus
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Om is currently working on his next book, which explores emerging trends in 
              AI/ML infrastructure and the future of cloud computing. He continues to consult 
              with organizations on their digital transformation journeys and regularly shares 
              insights through articles, podcasts, and speaking engagements.
            </p>

            <h2 className="text-3xl font-serif font-light text-foreground mb-6">
              Connect
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Om is always interested in connecting with fellow technologists, aspiring authors, 
              and anyone passionate about building meaningful technology solutions. Whether you 
              have questions about his books, want to discuss a project, or simply want to 
              exchange ideas, feel free to reach out.
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

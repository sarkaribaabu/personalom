import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Mail, Linkedin, Twitter, Briefcase, Building2, ArrowRight } from 'lucide-react';

// Experience highlights for About page
const experienceHighlights = [
  {
    icon: Building2,
    title: "Head of Operations (Technical)",
    company: "Multinational Company",
    description: "Leading e-governance projects and managing 45+ team members"
  },
  {
    icon: Briefcase,
    title: "Founder & Director",
    company: "Precise IT Solutions Pvt Ltd",
    description: "Built an IT company specializing in eCommerce and mobile solutions"
  }
];

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

      {/* Main Bio Section - Side by Side Layout */}
      <main id="main-content" className="container-blog py-16">
        <div className="max-w-6xl mx-auto">
          {/* Author Introduction - Creative Side by Side */}
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start mb-20">
            {/* Bio Content Column */}
            <div className="lg:col-span-3 space-y-6 order-2 lg:order-1">
              <div className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-sm text-primary font-medium mb-2">
                Digital Transformation Specialist & Creative Author
              </div>
              
              <h2 className="text-3xl md:text-4xl font-serif font-light text-foreground leading-tight">
                Architecting Digital Governance. <br className="hidden md:block" />
                <span className="text-primary">Crafting Human Narratives.</span>
              </h2>

              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p className="text-lg text-foreground">
                  Om Mahajan is a Digital Transformation Specialist and Creative Author. With over 15 years of experience, he bridges the gap between precision-driven e-Governance systems and the art of storytelling, helping organizations build technology that serves the human experience.
                </p>
              </div>

              {/* The Technologist */}
              <div className="pt-4">
                <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                  <span className="w-8 h-0.5 bg-primary"></span>
                  The Technologist
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Om has spent over a decade and a half mastering the architecture of complex systems. While his roots lie in Cloud Computing and DevOps, his passion has evolved into a specialized focus on e-Governance and Urban Digital Transformation. Currently pursuing a Doctorate in Digital Transformation in Urban Governance, Om combines academic rigor with practical execution. He is known for leading high-impact initiatives, including award-nominated projects for municipal corporations (such as NMMC) that modernize how cities interact with their citizens.
                </p>
              </div>

              {/* The Storyteller */}
              <div className="pt-4">
                <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                  <span className="w-8 h-0.5 bg-primary"></span>
                  The Storyteller
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Beyond the code, Om possesses a distinct narrative voice. He is a writer of fiction, poetry, and reflective articles, believing that the best solutions—whether digital or literary—require deep empathy. Unlike typical technical writers, Om explores the nuances of human nature through his stories. This "poetic mindset" allows him to approach IT leadership with a unique perspective: viewing technology not just as infrastructure, but as a tool to improve human lives.
                </p>
              </div>

              {/* The Explorer */}
              <div className="pt-4">
                <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                  <span className="w-8 h-0.5 bg-primary"></span>
                  The Explorer
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Om believes that creativity is fueled by curiosity. When not architecting government frameworks or penning his next story, he can be found on the open road on his motorcycle or capturing the world through miniature photography. A creator at heart, he is constantly seeking the intersection where logic meets imagination.
                </p>
              </div>
            </div>

            {/* Photo Column - Sticky on larger screens */}
            <div className="lg:col-span-2 lg:sticky lg:top-24 order-1 lg:order-2">
              <div className="relative">
                {/* Main Photo */}
                <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-muted shadow-2xl">
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 bg-primary/30 rounded-full mx-auto mb-4 flex items-center justify-center border-4 border-background shadow-lg">
                        <span className="text-5xl font-serif text-primary">OM</span>
                      </div>
                      <p className="text-muted-foreground text-sm">Author Photo</p>
                    </div>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/10 rounded-2xl -z-10" />
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent/20 rounded-full -z-10" />
              </div>
              
              {/* Quick Stats under photo */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-muted/50 rounded-xl">
                  <span className="text-3xl font-bold text-primary">15+</span>
                  <p className="text-xs text-muted-foreground mt-1">Years Experience</p>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-xl">
                  <span className="text-3xl font-bold text-primary">2</span>
                  <p className="text-xs text-muted-foreground mt-1">Books Authored</p>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-serif font-light text-foreground mb-8 tracking-wide">
              ACADEMIC & PROFESSIONAL QUALIFICATIONS
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                <em>B.E. (Bachelor of Engineering) in Computer Science</em>, with focus on software development and systems architecture.
              </p>
              <p className="leading-relaxed">
                <em>15+ years of industry experience</em> in cloud computing, DevOps, and enterprise architecture across Fortune 500 companies and innovative startups.
              </p>
              <p className="leading-relaxed">
                <em>Certified Cloud Architect</em> with expertise in AWS, Azure, and Google Cloud Platform. Multiple professional certifications in cloud infrastructure and DevOps practices.
              </p>
              <p className="leading-relaxed">
                <em>Technical Leadership Roles</em> spanning solution architecture, team leadership, and digital transformation initiatives for global enterprises.
              </p>
              <p className="leading-relaxed">
                Continuing education in emerging technologies including AI/ML, Kubernetes, and modern software development practices.
              </p>
            </div>
          </div>

          {/* Writing Section */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-serif font-light text-foreground mb-8 tracking-wide">
              WRITING
            </h2>
            <div className="space-y-6 text-muted-foreground">
              <p className="leading-relaxed">
                Om is the author of published works that bridge the gap between complex technical concepts and practical implementation. His writing has been praised for its clarity, depth, and real-world applicability.
              </p>
              <p className="leading-relaxed">
                His first book covers cloud architecture and DevOps practices, providing readers with actionable strategies for building scalable, resilient systems. The book has been well-received by both beginners looking to enter the field and experienced practitioners seeking to deepen their knowledge.
              </p>
              <p className="leading-relaxed">
                His upcoming book, currently in final stages before publication, explores the intersection of AI/ML infrastructure and cloud computing. It addresses the challenges organizations face when implementing machine learning systems at scale, offering practical guidance grounded in years of hands-on experience.
              </p>
              <p className="leading-relaxed">
                Beyond books, Om regularly contributes articles and technical content to industry publications, sharing insights on emerging trends, best practices, and lessons learned from real-world implementations.
              </p>
            </div>
          </div>

          {/* Experience Highlights Section */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-serif font-light text-foreground mb-8 tracking-wide">
              EXPERIENCE HIGHLIGHTS
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {experienceHighlights.map((exp, index) => {
                const Icon = exp.icon;
                return (
                  <div 
                    key={index}
                    className="bg-muted/50 border border-border rounded-xl p-6 hover:border-primary/30 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{exp.title}</h3>
                        <p className="text-sm text-primary mb-2">{exp.company}</p>
                        <p className="text-sm text-muted-foreground">{exp.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <Link 
              to="/journey" 
              className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
            >
              View full professional journey
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Current Focus */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-serif font-light text-foreground mb-8 tracking-wide">
              CURRENT FOCUS
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Om is currently focused on completing his next book while continuing to consult with organizations on their digital transformation journeys. He regularly shares insights through articles, podcasts, and speaking engagements, and is always interested in connecting with fellow technologists and aspiring authors.
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
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;

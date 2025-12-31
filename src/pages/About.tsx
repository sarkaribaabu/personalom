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

          {/* Academic & Professional Qualifications */}
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
      </main>
      
      <Footer />
    </div>
  );
};

export default About;

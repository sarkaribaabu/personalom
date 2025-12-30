import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Download, BookOpen, Code, Terminal } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';

const roles = [
  "IT Professional",
  "Published Author",
  "Cloud Architect",
  "Technical Writer",
  "Solution Designer",
  "Storyteller"
];

const HeroSection = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex]);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 -right-32 w-[500px] h-[500px] bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-secondary/30 rounded-full blur-2xl" />
      </div>

      <div className="container-blog relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 order-2 lg:order-1">
            <div className="space-y-2">
              <p className="text-primary font-medium tracking-wider uppercase text-sm">
                Hello, I'm
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                Om Mahajan
              </h1>
              <div className="flex items-center gap-3 text-2xl md:text-3xl text-muted-foreground">
                <span className="h-1 w-8 bg-primary rounded-full" />
                <span className="font-light">
                  {displayText}
                  <span className="animate-pulse text-primary">|</span>
                </span>
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              Bridging the gap between technology and imagination. With <span className="text-foreground font-semibold">15+ years</span> in IT 
              and a passion for storytelling, I craft both digital solutions and captivating narratives.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 py-4">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Years in IT</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">2</div>
                <div className="text-sm text-muted-foreground">Books Written</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2" asChild>
                <a href="/projects">
                  <Code className="w-5 h-5" />
                  View Projects
                </a>
              </Button>
              <Button size="lg" variant="outline" className="gap-2" asChild>
                <a href="/books">
                  <BookOpen className="w-5 h-5" />
                  Explore Books
                </a>
              </Button>
            </div>

            {/* Tech & Writing Tags */}
            <div className="flex flex-wrap gap-2 pt-4">
              {['Cloud Computing', 'DevOps', 'Fiction Writing', 'Technical Blogs'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-full border border-border/50"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative order-1 lg:order-2 flex justify-center">
            {/* Decorative frame */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[350px] h-[350px] md:w-[450px] md:h-[450px] border-2 border-primary/20 rounded-full" />
              <div className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] border border-primary/10 rounded-full animate-spin" style={{ animationDuration: '30s' }} />
            </div>
            
            {/* Profile image */}
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-background shadow-2xl">
              <img
                src={heroImage}
                alt="Om Mahajan - IT Professional and Author"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating badges */}
            <div className="absolute top-8 right-0 md:right-8 bg-background/90 backdrop-blur-sm border border-border rounded-lg p-3 shadow-lg animate-bounce" style={{ animationDuration: '3s' }}>
              <div className="flex items-center gap-2">
                <Terminal className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">IT Expert</span>
              </div>
            </div>
            
            <div className="absolute bottom-8 left-0 md:left-8 bg-background/90 backdrop-blur-sm border border-border rounded-lg p-3 shadow-lg animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}>
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Author</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

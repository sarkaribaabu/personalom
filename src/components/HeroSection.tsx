import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { BookOpen, Code, Terminal } from 'lucide-react';
import heroImage from '@/assets/om-headshot.png';

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
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

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

            <div className="space-y-3 max-w-lg">
              <h2 className="text-xl md:text-2xl font-semibold text-foreground">
                Architecting Digital Systems. Crafting Human Narratives.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Bridging the precision of e-Governance with the empathy of Storytelling. With <span className="text-foreground font-semibold">15+ years</span> in IT 
                and a lifetime of imagination, I build solutions for Smart Cities and write stories for the soul.
              </p>
            </div>

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

          </div>

          {/* Image with Professional Abstract Background */}
          <div className="relative order-1 lg:order-2 flex justify-center items-center min-h-[500px]">
            {/* Clean gradient orbs */}
            <div className="absolute w-[450px] h-[450px] rounded-full bg-gradient-to-br from-primary/20 via-primary/10 to-transparent blur-3xl" />
            <div className="absolute w-[350px] h-[350px] rounded-full bg-gradient-to-tr from-accent/15 to-transparent blur-2xl translate-x-10 translate-y-10" />
            
            {/* Subtle geometric accents */}
            <div className="absolute top-20 right-16 w-20 h-20 border border-primary/20 rounded-full" />
            <div className="absolute bottom-32 left-12 w-14 h-14 border border-primary/15 rounded-full" />
            <div className="absolute top-1/3 right-8 w-3 h-3 bg-primary/40 rounded-full" />
            <div className="absolute bottom-1/3 left-20 w-2 h-2 bg-primary/30 rounded-full" />
            
            {/* Decorative lines */}
            <div className="absolute top-28 left-1/4 w-16 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent rotate-45" />
            <div className="absolute bottom-40 right-1/4 w-20 h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent -rotate-12" />
            
            {/* Profile image container */}
            <div className="relative z-10">
              <div className="relative w-72 h-[420px] md:w-80 md:h-[480px]">
                {/* Clean image presentation */}
                <img
                  src={heroImage}
                  alt="Om Mahajan - IT Professional and Author"
                  className="w-full h-full object-cover object-top rounded-2xl shadow-2xl"
                  style={{
                    maskImage: 'linear-gradient(to bottom, black 90%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 90%, transparent 100%)'
                  }}
                />
                {/* Subtle border glow */}
                <div className="absolute inset-0 rounded-2xl border border-primary/10" />
              </div>
            </div>

            {/* Floating badges - refined */}
            <div className="absolute top-12 right-2 md:right-8 bg-background border border-border/50 rounded-xl p-3 shadow-lg z-20">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Terminal className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <span className="text-xs font-semibold block">IT Expert</span>
                  <span className="text-[10px] text-muted-foreground">15+ Years</span>
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-20 left-2 md:left-8 bg-background border border-border/50 rounded-xl p-3 shadow-lg z-20">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <BookOpen className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <span className="text-xs font-semibold block">Author</span>
                  <span className="text-[10px] text-muted-foreground">2 Books</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

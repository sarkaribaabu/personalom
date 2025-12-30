import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { BookOpen, Code, Terminal } from 'lucide-react';
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

          {/* Image with Abstract Background */}
          <div className="relative order-1 lg:order-2 flex justify-center items-center min-h-[500px]">
            {/* Abstract paint splash / geometric shapes */}
            <svg
              className="absolute w-[600px] h-[600px] -z-0"
              viewBox="0 0 600 600"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Main splash shape */}
              <path
                d="M300 50C380 30 480 80 520 150C560 220 550 300 530 370C510 440 450 500 380 530C310 560 230 550 170 510C110 470 70 400 60 330C50 260 70 180 120 130C170 80 220 70 300 50Z"
                className="fill-primary/20"
              />
              {/* Secondary organic shape */}
              <path
                d="M320 100C390 90 470 140 500 200C530 260 520 330 490 390C460 450 400 490 340 500C280 510 210 490 170 440C130 390 120 320 140 260C160 200 250 110 320 100Z"
                className="fill-primary/30"
              />
              {/* Splatter dots */}
              <circle cx="480" cy="120" r="25" className="fill-primary/40" />
              <circle cx="520" cy="180" r="15" className="fill-primary/30" />
              <circle cx="100" cy="400" r="20" className="fill-primary/25" />
              <circle cx="140" cy="450" r="12" className="fill-primary/35" />
              <circle cx="550" cy="350" r="18" className="fill-primary/20" />
              <circle cx="80" cy="250" r="10" className="fill-primary/40" />
              {/* Accent splashes */}
              <ellipse cx="450" cy="480" rx="30" ry="20" className="fill-accent/30" transform="rotate(-20 450 480)" />
              <ellipse cx="120" cy="150" rx="25" ry="15" className="fill-accent/25" transform="rotate(30 120 150)" />
            </svg>

            {/* Animated floating elements */}
            <div className="absolute top-10 right-10 w-16 h-16 bg-primary/20 rounded-full blur-sm animate-bounce" style={{ animationDuration: '4s' }} />
            <div className="absolute bottom-20 left-10 w-12 h-12 bg-accent/30 rounded-full blur-sm animate-bounce" style={{ animationDuration: '5s', animationDelay: '1s' }} />
            <div className="absolute top-1/3 right-5 w-8 h-8 bg-primary/30 rounded-full animate-pulse" />
            
            {/* Profile image - styled as if it's a PNG cutout */}
            <div className="relative z-10">
              <div className="relative w-80 h-96 md:w-[380px] md:h-[460px]">
                {/* Image with mask for PNG-like effect */}
                <div 
                  className="w-full h-full overflow-hidden"
                  style={{
                    maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)'
                  }}
                >
                  <img
                    src={heroImage}
                    alt="Om Mahajan - IT Professional and Author"
                    className="w-full h-full object-cover object-top drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute top-16 right-4 md:right-0 bg-background/95 backdrop-blur-sm border border-border rounded-xl p-4 shadow-xl z-20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Terminal className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="text-sm font-semibold block">IT Expert</span>
                  <span className="text-xs text-muted-foreground">15+ Years</span>
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-24 left-0 md:-left-4 bg-background/95 backdrop-blur-sm border border-border rounded-xl p-4 shadow-xl z-20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="text-sm font-semibold block">Author</span>
                  <span className="text-xs text-muted-foreground">2 Books</span>
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

import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';
import workLifestyle from '@/assets/work-lifestyle.jpg';

const highlights = [
  "Enterprise Solutions Expert",
  "Published Technical Author",
  "Cloud & DevOps Specialist",
  "Creative Storyteller"
];

const AboutAuthor = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container-blog">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Stats and Text */}
          <div className="space-y-8">
            <div className="flex items-baseline gap-4">
              <span className="text-8xl md:text-9xl font-bold text-primary leading-none">
                15
              </span>
              <div className="space-y-1">
                <span className="text-2xl md:text-3xl font-semibold text-foreground block">
                  Years
                </span>
                <span className="text-lg text-muted-foreground">
                  of professional experience
                </span>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-semibold leading-tight">
              Building innovative IT solutions while crafting compelling narratives
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              A dynamic professional with expertise in project management and product development, 
              Om has a sharp eye for detail and a talent for strategic planning. Known for turning 
              ideas into reality, he delivers successful outcomes through strong relationship-building 
              and seamless teamwork. Beyond his analytical skills, Om has a poetic mindset, allowing 
              for innovative problem-solving. As a fiction author, he blends creativity with a deep 
              understanding of human nature, crafting engaging stories that captivate readers.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>

            <Button asChild className="gap-2">
              <a href="/about">
                Read More
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>

          {/* Right side - Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={heroImage}
                    alt="Om Mahajan working on technology projects"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={workLifestyle}
                    alt="Om Mahajan writing and creating content"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/20 rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAuthor;

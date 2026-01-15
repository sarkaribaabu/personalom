import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';
import workLifestyle from '@/assets/work-lifestyle.jpg';

const professionalSkills = [
  "e-Governance Architect",
  "Digital Transformation",
  "Urban Tech Researcher",
  "Smart City Strategist"
];

const creativeSkills = [
  "Fiction Author",
  "Narrative Designer",
  "Visual Storyteller",
  "Poet & Essayist"
];

const AboutAuthor = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container-blog">
        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Stats and Text */}
          <div className="space-y-6">
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
              Transforming Cities with Technology. Exploring Life through Fiction.
            </h2>

            <div className="text-muted-foreground leading-relaxed space-y-4">
              <p>
                Om Mahajan believes code and prose share a single purpose: solving problems and touching lives. A digital transformation specialist in urban governance, he modernizes city systems through initiatives such as the NMMC Property Tax module and ongoing doctoral research.
              </p>
              <p>
                Beyond technology, he is a storyteller whose fiction and poetry deepen his empathy and leadership. Whether shaping systems or stories, he turns complexity into meaningful experience.
              </p>
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
              <div>
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={heroImage}
                    alt="Om Mahajan working on technology projects"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="pt-8">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
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

        {/* Skills - Full Width Below */}
        <div className="mt-16 pt-12 border-t border-border/50">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {professionalSkills.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-4">
            {creativeSkills.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAuthor;

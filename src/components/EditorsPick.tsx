import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRef } from 'react';
import businessPost from '@/assets/business-post.jpg';
import techPost from '@/assets/tech-post.jpg';
import fashionPost from '@/assets/fashion-post.jpg';
import lifestylePost from '@/assets/lifestyle-post.jpg';
import workLifestyle from '@/assets/work-lifestyle.jpg';
import fashionLifestyle from '@/assets/fashion-lifestyle.jpg';
import vendorManagementCover from '@/assets/vendor-management-cover.jpg';

interface PickItem {
  id: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  image: string;
  slug: string;
}

const EditorsPick = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const picks: PickItem[] = [
    {
      id: '1',
      title: 'Vendor Management: Where Governance Meets Execution',
      category: 'EGOVERNANCE',
      date: 'January 16, 2026',
      excerpt: 'In government, policies are framed internally, but execution often happens through vendors.',
      image: vendorManagementCover,
      slug: 'vendor-management-governance-execution',
    },
    {
      id: '2',
      title: 'Digital Transformation in Urban Governance',
      category: 'TECHNOLOGY',
      date: 'January 10, 2026',
      excerpt: 'Exploring how smart city initiatives are reshaping municipal operations and citizen services.',
      image: techPost,
      slug: 'digital-transformation-urban-governance',
    },
    {
      id: '3',
      title: 'Building Resilient e-Governance Systems',
      category: 'TECHNOLOGY',
      date: 'December 28, 2025',
      excerpt: 'Key considerations for designing government digital infrastructure that scales.',
      image: workLifestyle,
      slug: 'resilient-egovernance-systems',
    },
    {
      id: '4',
      title: 'Smart City Strategies for Developing Nations',
      category: 'TECHNOLOGY',
      date: 'December 15, 2025',
      excerpt: 'Practical approaches to implementing smart city solutions with limited resources.',
      image: lifestylePost,
      slug: 'smart-city-developing-nations',
    },
    {
      id: '5',
      title: 'Property Tax Digitization: Lessons Learned',
      category: 'TECHNOLOGY',
      date: 'December 5, 2025',
      excerpt: 'Insights from implementing digital property tax systems for municipal corporations.',
      image: businessPost,
      slug: 'property-tax-digitization',
    },
    {
      id: '6',
      title: 'User Experience in Government Applications',
      category: 'TECHNOLOGY',
      date: 'November 20, 2025',
      excerpt: 'Why citizen-centric design matters in public sector digital services.',
      image: fashionPost,
      slug: 'ux-government-applications',
    },
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="container-blog py-16">
      <div className="flex items-center justify-between mb-8">
        <h2 id="editors-pick-heading" className="section-title mb-0">Technical Blogs</h2>
        <div className="flex space-x-2" role="group" aria-label="Navigation controls for technical blogs">
          <Button
            variant="outline"
            size="sm"
            onClick={() => scroll('left')}
            className="p-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            aria-label="Scroll to previous articles"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => scroll('right')}
            className="p-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            aria-label="Scroll to next articles"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        role="region"
        aria-label="Technical blogs carousel"
        tabIndex={0}
      >
        {picks.map((pick) => (
          <article
            key={pick.id}
            className="flex-shrink-0 w-80 bg-card rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-200"
          >
            <a
              href={`/blog/${pick.slug}`}
              className="block focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg"
              aria-label={`Read article: ${pick.title}`}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={pick.image}
                  alt={`Editor's pick article: ${pick.title} - A professional image related to ${pick.category.toLowerCase()}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-3">
                  <span className="blog-meta">{pick.category}</span>
                  <span className="text-muted-foreground" aria-hidden="true">—</span>
                  <time className="blog-meta" dateTime="2023-09-10">{pick.date}</time>
                </div>
                
                <h3 className="text-lg font-bold text-foreground leading-tight mb-3 hover:text-primary transition-colors">
                  {pick.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {pick.excerpt}
                </p>
                
                <span className="inline-flex items-center text-sm font-medium text-primary hover:underline">
                  READ MORE →
                </span>
              </div>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default EditorsPick;
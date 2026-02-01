import { useParams, Link } from 'react-router-dom';
import { useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ReadingProgress from '@/components/ReadingProgress';
import BackToTop from '@/components/BackToTop';
import { useHashnodePost } from '@/hooks/useHashnodePost';
import omHeadshot from '@/assets/om-headshot.png';
import techPost from '@/assets/tech-post.jpg';
import businessPost from '@/assets/business-post.jpg';
import lifestylePost from '@/assets/lifestyle-post.jpg';
import workLifestyle from '@/assets/work-lifestyle.jpg';
import fashionLifestyle from '@/assets/fashion-lifestyle.jpg';
import fashionPost from '@/assets/fashion-post.jpg';
import vendorManagementCover from '@/assets/vendor-management-cover.jpg';
import vendorPerformanceDashboard from '@/assets/vendor-performance-dashboard.png';
import { ArrowLeft, ChevronLeft, ChevronRight, Quote, Lightbulb, ArrowRight, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Callout component for highlighted text blocks
const Callout = ({ type, children }: { type: 'quote' | 'insight' | 'key'; children: React.ReactNode }) => {
  const styles = {
    quote: 'border-l-4 border-primary bg-primary/5 pl-6 pr-4 py-4 my-8 italic',
    insight: 'bg-accent/50 border border-accent rounded-xl p-6 my-8',
    key: 'bg-secondary/50 border border-secondary rounded-xl p-6 my-8'
  };
  
  const icons = {
    quote: <Quote className="w-5 h-5 text-primary mb-2" />,
    insight: <Lightbulb className="w-5 h-5 text-primary mb-2" />,
    key: <ArrowRight className="w-5 h-5 text-primary mb-2" />
  };

  return (
    <div className={styles[type]}>
      {icons[type]}
      <div className="text-foreground font-medium">{children}</div>
    </div>
  );
};

// Inline image component
const InlineImage = ({ src, alt, caption }: { src: string; alt: string; caption?: string }) => (
  <figure className="my-10">
    <img 
      src={src} 
      alt={alt} 
      className="w-full rounded-xl object-cover aspect-[16/9]"
    />
    {caption && (
      <figcaption className="text-sm text-muted-foreground text-center mt-3 italic">
        {caption}
      </figcaption>
    )}
  </figure>
);

// Local blog posts data (fallback when not found on Hashnode)
const localBlogPosts: Record<string, {
  title: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  heroImage: string;
  content: string;
  inlineImages?: { src: string; alt: string; caption?: string; afterParagraph: number }[];
  callouts?: { type: 'quote' | 'insight' | 'key'; text: string; afterParagraph: number }[];
}> = {
  "vendor-management-governance-execution": {
    title: "Vendor Management: Where Governance Meets Execution",
    category: "EGOVERNANCE",
    date: "January 16, 2026",
    readTime: "6 min read",
    author: "Dr. Om Mahajan",
    heroImage: vendorManagementCover,
    inlineImages: [
      { src: vendorPerformanceDashboard, alt: "Vendor performance tracking dashboard", caption: "A digital vendor management system enables centralized tracking and evaluation", afterParagraph: 4 }
    ],
    callouts: [
      { type: 'quote', text: "Policy failure is rarely about bad intent or poor drafting. It almost always traces back to weak vendor management.", afterParagraph: 1 },
      { type: 'insight', text: "What vendor management really enables is objectivity at scale. Decisions stop being based on who remembers what, or who managed which vendor last year. Evaluation becomes comparative, traceable, and defensible.", afterParagraph: 5 },
      { type: 'key', text: "Governance is judged not by how well policies are written, but by how reliably they are delivered. Vendor management is the bridge between the two.", afterParagraph: 8 }
    ],
    content: `
      <p class="lead">In government systems, we spend an enormous amount of time getting policies right. Frameworks are debated, approvals are layered, and intent is carefully documented. Yet, once the file moves out of the department, execution largely shifts to vendors. Contractors, system integrators, OEMs, service partners, consultants. This is where governance stops being theoretical and starts being real.</p>
      
      <p>In my experience, policy failure is rarely about bad intent or poor drafting. It almost always traces back to weak vendor management.</p>
      
      <h2>The Symptoms of Weak Vendor Management</h2>
      
      <p>When vendor management is loose or informal, the symptoms are predictable and painfully familiar:</p>
      
      <ul>
        <li>Projects drift without clear explanations.</li>
        <li>Timelines slip, but accountability remains ambiguous.</li>
        <li>Costs escalate, often justified after the fact.</li>
        <li>Quality becomes subjective because there is no agreed baseline.</li>
        <li>Escalations turn into personality-driven negotiations rather than contract-driven discussions.</li>
        <li>And eventually, when things go visibly wrong, the system reacts with penalties or blacklisting, long after the damage has already been done.</li>
      </ul>
      
      <p>This reactive cycle is not governance. It is damage control.</p>
      
      <h2>What Strong Vendor Management Changes</h2>
      
      <p>Strong vendor management changes the equation entirely. It introduces structure where ambiguity usually thrives. It replaces memory with data. It moves decision-making from emotion and urgency to evidence and discipline.</p>
      
      <p>A well-designed digital vendor management system becomes the backbone of this shift:</p>
      
      <ul>
        <li><strong>Centralized onboarding</strong> ensures that credentials, statutory compliance, past experience, and financial standing are verified upfront, not discovered midway through execution.</li>
        <li><strong>Performance tracking</strong> against clearly defined SLAs and milestones ensures that progress is continuously visible, not assessed only during review meetings.</li>
        <li><strong>Payment linkages</strong> tied directly to measurable deliverables bring financial discipline into execution, not just procurement.</li>
        <li><strong>Historical performance records</strong> across projects and departments create institutional memory, preventing the system from repeating the same mistakes with the same vendors under different banners.</li>
      </ul>
      
      <p>What this really enables is objectivity at scale. Decisions stop being based on who remembers what, or who managed which vendor last year. Evaluation becomes comparative, traceable, and defensible.</p>
      
      <h2>The Cultural Shift</h2>
      
      <p>But the most important shift is not technological. It is cultural.</p>
      
      <p>Effective vendor management changes how governance behaves. It moves the system away from reactive firefighting and toward contractual discipline. When vendors know that timelines, quality parameters, compliance obligations, and service levels are being continuously measured, not occasionally reviewed, behavior changes.</p>
      
      <ul>
        <li>Delays reduce because they are visible early.</li>
        <li>Quality improves because benchmarks are explicit.</li>
        <li>Disputes reduce because evidence replaces argument.</li>
        <li>Escalations become structured conversations rather than confrontations.</li>
      </ul>
      
      <h2>Protecting Public Money</h2>
      
      <p>From a governance perspective, this is where public money is actually protected. Not through more clauses in tender documents, but through consistent enforcement during execution.</p>
      
      <p>Vendor management, when done right, is not about control for its own sake. It is not about mistrust. It is about alignment. It ensures that public intent does not get diluted as it passes through contracts, invoices, and milestones. It ensures that outcomes match approvals. It ensures that execution reflects policy, not undermines it.</p>
      
      <p>In the end, governance is judged not by how well policies are written, but by how reliably they are delivered. Vendor management is the bridge between the two.</p>
    `
  },
  "digital-transformation-urban-governance": {
    title: "Digital Transformation in Urban Governance: A Case Study",
    category: "TECHNOLOGY",
    date: "January 10, 2026",
    readTime: "8 min read",
    author: "Dr. Om Mahajan",
    heroImage: techPost,
    inlineImages: [
      { src: workLifestyle, alt: "Smart city infrastructure", caption: "Modern urban infrastructure powered by digital solutions", afterParagraph: 2 }
    ],
    callouts: [
      { type: 'insight', text: "A 40% reduction in processing time was achieved within the first year of digital transformation implementation.", afterParagraph: 4 },
      { type: 'quote', text: "The foundations laid today will determine the smart cities of tomorrow.", afterParagraph: 6 }
    ],
    content: `
      <p class="lead">Digital transformation in urban governance represents a fundamental shift in how cities operate, deliver services, and engage with citizens. This case study explores the journey of implementing smart city initiatives in municipal operations.</p>
      
      <h2>The Challenge of Urban Digitization</h2>
      
      <p>Municipal corporations across developing nations face unique challenges when embarking on digital transformation journeys. Legacy systems, limited technical expertise, and resistance to change often create significant barriers to progress.</p>
      
      <p>The NMMC Property Tax module serves as an excellent example of how thoughtful digital intervention can transform citizen services while improving operational efficiency.</p>
      
      <h2>Key Implementation Strategies</h2>
      
      <p>Successful digital transformation in government requires a multi-pronged approach that addresses technology, process, and people simultaneously.</p>
      
      <ul>
        <li><strong>Stakeholder Engagement:</strong> Building consensus among political leaders, administrators, and citizens</li>
        <li><strong>Phased Implementation:</strong> Breaking down large projects into manageable milestones</li>
        <li><strong>Capacity Building:</strong> Training staff at all levels to embrace new systems</li>
        <li><strong>Citizen-Centric Design:</strong> Prioritizing user experience over technical complexity</li>
      </ul>
      
      <h2>Measuring Success</h2>
      
      <p>The impact of digital transformation can be measured through multiple metrics including processing time reduction, citizen satisfaction scores, and revenue collection efficiency.</p>
      
      <h2>Lessons for Future Projects</h2>
      
      <p>Every digital transformation project offers valuable lessons. The importance of change management, the need for robust testing, and the value of iterative improvement have become clear through practical experience.</p>
    `
  }
};

// Related posts data from local posts
const allLocalPosts = Object.entries(localBlogPosts).map(([slug, post]) => ({
  slug,
  title: post.title,
  category: post.category,
  date: post.date,
  image: post.heroImage,
  excerpt: post.content.replace(/<[^>]+>/g, '').substring(0, 150) + '...'
}));

// Helper to format date from Hashnode format
const formatHashnodeDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
};

const BlogDetail = () => {
  const { slug } = useParams();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  // Fetch from Hashnode first
  const { data: hashnodePost, isLoading: isLoadingHashnode } = useHashnodePost(slug || '');
  
  // Fallback to local content
  const localPost = slug && localBlogPosts[slug] ? localBlogPosts[slug] : null;
  
  // Determine which content to use
  const isUsingHashnode = !!hashnodePost;
  const hasContent = hashnodePost || localPost;
  
  // Get related posts from local
  const relatedPosts = allLocalPosts
    .filter(p => p.slug !== slug)
    .slice(0, 5);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Loading state
  if (isLoadingHashnode) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container-blog py-16 flex items-center justify-center">
          <div className="text-center">
            <Loader2 className="w-8 h-8 animate-spin text-primary mx-auto mb-4" />
            <p className="text-muted-foreground">Loading article...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Not found state
  if (!hasContent) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container-blog py-16 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-primary hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  // Render content based on source
  const title = isUsingHashnode ? hashnodePost.title : localPost!.title;
  const category = isUsingHashnode 
    ? (hashnodePost.tags?.[0]?.name?.toUpperCase() || 'ARTICLE')
    : localPost!.category;
  const date = isUsingHashnode 
    ? formatHashnodeDate(hashnodePost.publishedAt)
    : localPost!.date;
  const readTime = isUsingHashnode 
    ? `${hashnodePost.readTimeInMinutes} min read`
    : localPost!.readTime;
  const author = isUsingHashnode 
    ? hashnodePost.author.name
    : localPost!.author;
  const authorImage = isUsingHashnode 
    ? (hashnodePost.author.profilePicture || omHeadshot)
    : omHeadshot;
  const heroImage = isUsingHashnode 
    ? (hashnodePost.coverImage?.url || techPost)
    : localPost!.heroImage;
  const content = isUsingHashnode 
    ? hashnodePost.content.html
    : localPost!.content;
  const authorBio = isUsingHashnode 
    ? (hashnodePost.author.bio?.text || 'Author & IT Professional')
    : 'Dr. Om Mahajan specializes in digital transformation in urban governance and is also a fiction author.';

  return (
    <div className="min-h-screen bg-background">
      <ReadingProgress />
      <Header />
      
      <main id="main-content" className="py-8 md:py-12">
        {/* Back to Blog Link */}
        <div className="container-blog mb-8">
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>

        {/* Article Header */}
        <header className="container-blog mb-8 max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
              {category}
            </span>
            <span className="text-muted-foreground text-sm">•</span>
            <time className="text-sm text-muted-foreground">{date}</time>
            <span className="text-muted-foreground text-sm">•</span>
            <span className="text-sm text-muted-foreground">{readTime}</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            {title}
          </h1>
          
          <div className="flex items-center gap-4">
            <img 
              src={authorImage} 
              alt={author}
              className="w-12 h-12 rounded-full object-cover border-2 border-border"
            />
            <div>
              <p className="font-medium text-foreground">{author}</p>
              <p className="text-sm text-muted-foreground">Author & IT Professional</p>
            </div>
          </div>
        </header>

        {/* Hero Image - Full Width */}
        <div className="mb-12">
          <div className="max-w-5xl mx-auto px-6">
            <img
              src={heroImage}
              alt={title}
              className="w-full aspect-[21/9] object-cover rounded-2xl"
            />
          </div>
        </div>

        {/* Article Content - 70% width */}
        <article className="max-w-[70%] mx-auto px-6 lg:px-0">
          <div 
            className={`prose prose-lg max-w-none
              prose-headings:text-foreground prose-headings:font-bold prose-headings:mt-14 prose-headings:mb-6
              prose-h2:text-2xl prose-h2:md:text-3xl
              prose-h3:text-xl prose-h3:md:text-2xl
              prose-p:text-muted-foreground prose-p:leading-[1.9] prose-p:mb-8 prose-p:text-lg
              prose-ul:text-muted-foreground prose-ul:mb-8 prose-ul:space-y-3
              prose-ol:text-muted-foreground prose-ol:mb-8 prose-ol:space-y-3
              prose-li:text-muted-foreground prose-li:mb-3 prose-li:text-lg prose-li:leading-relaxed
              prose-strong:text-foreground
              prose-a:text-primary prose-a:hover:underline
              prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-primary/5 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:italic
              prose-code:bg-muted prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm
              prose-pre:bg-muted prose-pre:p-4 prose-pre:rounded-lg prose-pre:overflow-x-auto
              prose-img:rounded-xl prose-img:my-8
              [&_.lead]:text-xl [&_.lead]:md:text-2xl [&_.lead]:text-foreground [&_.lead]:font-normal [&_.lead]:leading-[1.8] [&_.lead]:mb-10
              ${isUsingHashnode ? 'hashnode-content' : ''}`}
            dangerouslySetInnerHTML={{ __html: content }}
          />

          {/* Inline callouts for local posts only */}
          {!isUsingHashnode && localPost?.callouts && localPost.callouts.length > 0 && (
            <div className="mt-12 space-y-8">
              {localPost.callouts.map((callout, index) => (
                <Callout key={index} type={callout.type}>
                  {callout.text}
                </Callout>
              ))}
            </div>
          )}

          {/* Inline images for local posts only */}
          {!isUsingHashnode && localPost?.inlineImages && localPost.inlineImages.length > 0 && (
            <div className="mt-8">
              {localPost.inlineImages.map((img, index) => (
                <InlineImage key={index} src={img.src} alt={img.alt} caption={img.caption} />
              ))}
            </div>
          )}
        </article>

        {/* Author Bio Section */}
        <section className="max-w-[70%] mx-auto px-6 lg:px-0 mt-16 pt-10 border-t border-border">
          <div className="flex flex-col sm:flex-row gap-6 items-start bg-secondary/30 rounded-2xl p-6">
            <img 
              src={authorImage} 
              alt={author}
              className="w-24 h-24 rounded-full object-cover border-4 border-background shadow-lg flex-shrink-0"
            />
            <div>
              <p className="text-sm text-primary font-medium mb-1">Written by</p>
              <h3 className="text-xl font-bold text-foreground mb-3">{author}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {authorBio}
              </p>
            </div>
          </div>
        </section>

        {/* Related Articles Section with Scroller */}
        {relatedPosts.length > 0 && (
          <section className="mt-20 pb-8">
            <div className="max-w-[90%] mx-auto px-6 lg:px-0">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">Related Articles</h2>
                  <p className="text-muted-foreground mt-1">Continue reading with these related posts</p>
                </div>
                <div className="hidden md:flex gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => scroll('left')}
                    className="rounded-full"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => scroll('right')}
                    className="rounded-full"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              {/* Scrollable container */}
              <div 
                ref={scrollContainerRef}
                className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.slug}
                    to={`/blog/${relatedPost.slug}`}
                    className="group flex-shrink-0 w-[280px] md:w-[300px] bg-card rounded-xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl snap-start"
                  >
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-5">
                      <span className="inline-block text-xs font-semibold text-primary mb-2 uppercase tracking-wide">
                        {relatedPost.category}
                      </span>
                      <h3 className="font-bold text-foreground line-clamp-2 group-hover:text-primary transition-colors leading-snug">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-3">{relatedPost.date}</p>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Mobile scroll indicator */}
              <div className="flex justify-center gap-1 mt-4 md:hidden">
                <div className="w-8 h-1 bg-primary rounded-full"></div>
                <div className="w-2 h-1 bg-muted rounded-full"></div>
                <div className="w-2 h-1 bg-muted rounded-full"></div>
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default BlogDetail;

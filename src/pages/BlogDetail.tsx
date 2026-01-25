import { useParams, Link } from 'react-router-dom';
import { useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ReadingProgress from '@/components/ReadingProgress';
import BackToTop from '@/components/BackToTop';
import omHeadshot from '@/assets/om-headshot.png';
import techPost from '@/assets/tech-post.jpg';
import businessPost from '@/assets/business-post.jpg';
import lifestylePost from '@/assets/lifestyle-post.jpg';
import workLifestyle from '@/assets/work-lifestyle.jpg';
import fashionLifestyle from '@/assets/fashion-lifestyle.jpg';
import fashionPost from '@/assets/fashion-post.jpg';
import vendorManagementCover from '@/assets/vendor-management-cover.jpg';
import vendorPerformanceDashboard from '@/assets/vendor-performance-dashboard.png';
import { ArrowLeft, ChevronLeft, ChevronRight, Quote, Lightbulb, ArrowRight } from 'lucide-react';
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

// Blog posts data matching the listing page
const blogPosts: Record<string, {
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
    readTime: "5 min read",
    author: "Dr. Om Mahajan",
    heroImage: vendorManagementCover,
    inlineImages: [
      { src: vendorPerformanceDashboard, alt: "Vendor performance tracking dashboard", caption: "A digital vendor management system enables centralized tracking and evaluation", afterParagraph: 2 }
    ],
    callouts: [
      { type: 'key', text: "Should vendor performance history be shared across departments to prevent repeat failures?", afterParagraph: 3 }
    ],
    content: `
      <p class="lead">In government, policies are framed internally, but execution often happens through vendors - contractors, service providers, system integrators, suppliers. When vendor management is weak, even the best policies fail on the ground.</p>
      
      <p>Common symptoms are familiar:</p>
      
      <ul>
        <li>Delays without clarity.</li>
        <li>Cost overruns without ownership.</li>
        <li>Quality disputes without evidence.</li>
        <li>Blacklisting after damage is already done.</li>
      </ul>
      
      <p>Strong vendor management changes this by bringing structure, transparency, and accountability into every stage of engagement.</p>
      
      <p>A digital vendor management system enables:</p>
      
      <ul>
        <li>Centralized vendor onboarding and credential verification.</li>
        <li>Performance tracking against SLAs and milestones.</li>
        <li>Transparent payment linkage to deliverables.</li>
        <li>Historical performance records across projects and departments.</li>
        <li>Objective evaluation instead of memory-based decisions.</li>
      </ul>
      
      <p>The real shift is cultural. Vendor management moves governance from reactive firefighting to contractual discipline.</p>
      
      <p>When vendors know that timelines, quality, and compliance are continuously measured - not occasionally reviewed - behavior changes. Execution improves. Disputes reduce. Public money is better protected.</p>
      
      <p>Vendor management is not about control for its own sake. It's about ensuring that public intent translates into public outcomes.</p>
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
      
      <p>The NMMC Property Tax module serves as an excellent example of how thoughtful digital intervention can transform citizen services while improving operational efficiency. By understanding the specific pain points faced by citizens and staff alike, we were able to design solutions that addressed real needs rather than imagined requirements.</p>

      <p>The journey began with extensive stakeholder consultations, mapping existing workflows, and identifying bottlenecks that slowed down service delivery. This groundwork proved invaluable in shaping our implementation strategy.</p>
      
      <h2>Key Implementation Strategies</h2>
      
      <p>Successful digital transformation in government requires a multi-pronged approach that addresses technology, process, and people simultaneously. Each of these dimensions requires careful attention and cannot be neglected without risking project failure.</p>
      
      <ul>
        <li><strong>Stakeholder Engagement:</strong> Building consensus among political leaders, administrators, and citizens through regular communication and feedback sessions</li>
        <li><strong>Phased Implementation:</strong> Breaking down large projects into manageable, measurable milestones that demonstrate value incrementally</li>
        <li><strong>Capacity Building:</strong> Training staff at all levels to embrace new systems with hands-on workshops and continuous support</li>
        <li><strong>Citizen-Centric Design:</strong> Prioritizing user experience over technical complexity to ensure adoption</li>
      </ul>
      
      <h2>Measuring Success</h2>
      
      <p>The impact of digital transformation can be measured through multiple metrics including processing time reduction, citizen satisfaction scores, revenue collection efficiency, and employee productivity gains. Establishing clear baselines before implementation is crucial for accurate measurement.</p>
      
      <p>In the case of property tax digitization, we observed significant improvements across all key metrics. The data-driven approach allowed us to identify areas needing further optimization and celebrate wins that motivated the team.</p>

      <p>Beyond quantitative metrics, qualitative feedback from citizens showed improved trust in government services and reduced frustration with bureaucratic processes.</p>
      
      <h2>Lessons for Future Projects</h2>
      
      <p>Every digital transformation project offers valuable lessons. The importance of change management, the need for robust testing, and the value of iterative improvement have become clear through practical experience. Documentation and knowledge transfer ensure these lessons benefit future initiatives.</p>
      
      <p>As cities continue to evolve, the intersection of technology and governance will only grow more critical. The foundations laid today will determine the smart cities of tomorrow. Investment in digital infrastructure is not just a technical decision—it's a commitment to better serving citizens.</p>
    `
  },
  "storytelling-technical-documentation": {
    title: "The Art of Storytelling in Technical Documentation",
    category: "WRITING",
    date: "January 5, 2026",
    readTime: "6 min read",
    author: "Dr. Om Mahajan",
    heroImage: businessPost,
    content: `
      <p class="lead">Technical documentation doesn't have to be dry and uninspiring. By applying narrative techniques, we can create documentation that engages readers and improves comprehension.</p>
      
      <h2>Why Stories Matter in Technical Writing</h2>
      
      <p>Humans are wired for stories. We remember narratives far better than abstract concepts or bulleted lists. This fundamental truth has profound implications for how we approach technical documentation.</p>
      
      <p>When we frame technical concepts within the context of real-world scenarios and user journeys, we create memorable learning experiences that stick with readers long after they've closed the documentation.</p>
      
      <h2>Techniques for Narrative Documentation</h2>
      
      <p>Several storytelling techniques translate well to technical writing:</p>
      
      <ul>
        <li><strong>The Hero's Journey:</strong> Frame the reader as a hero overcoming challenges</li>
        <li><strong>Problem-Solution Structure:</strong> Present pain points before introducing solutions</li>
        <li><strong>Progressive Disclosure:</strong> Reveal complexity gradually, building understanding layer by layer</li>
        <li><strong>Concrete Examples:</strong> Ground abstract concepts in tangible, relatable scenarios</li>
      </ul>
      
      <h2>Balancing Creativity and Clarity</h2>
      
      <p>The goal of narrative documentation isn't to sacrifice precision for entertainment. Rather, it's about finding the sweet spot where clarity and engagement coexist.</p>
      
      <p>Every technical document should ultimately help readers accomplish their goals. Storytelling is a means to this end, not an end in itself.</p>
    `
  },
  "resilient-egovernance-systems": {
    title: "Building Resilient e-Governance Systems",
    category: "TECHNOLOGY",
    date: "December 28, 2025",
    readTime: "7 min read",
    author: "Dr. Om Mahajan",
    heroImage: workLifestyle,
    content: `
      <p class="lead">Government digital infrastructure must be designed for reliability, scalability, and security. This article explores key considerations for building e-governance systems that can withstand the demands of public service.</p>
      
      <h2>The Unique Demands of Government Systems</h2>
      
      <p>Unlike commercial applications that can afford occasional downtime, government systems often handle critical services that citizens depend upon. From property tax collection to utility payments, these systems must maintain high availability.</p>
      
      <h2>Architecture for Resilience</h2>
      
      <p>Building resilient systems requires thoughtful architecture that anticipates failure and designs for graceful degradation:</p>
      
      <ul>
        <li><strong>Redundancy:</strong> Eliminating single points of failure through distributed architecture</li>
        <li><strong>Monitoring:</strong> Implementing comprehensive observability for early problem detection</li>
        <li><strong>Backup Systems:</strong> Ensuring data integrity through robust backup and recovery procedures</li>
        <li><strong>Security:</strong> Protecting citizen data through defense-in-depth strategies</li>
      </ul>
      
      <h2>Scaling for Peak Demand</h2>
      
      <p>Government systems often face predictable peak loads—tax filing deadlines, utility due dates, or examination result announcements. Designing for these peaks while maintaining cost efficiency requires careful capacity planning.</p>
      
      <p>Cloud infrastructure has transformed how we approach scalability, enabling elastic resources that respond to actual demand rather than predicted maximum loads.</p>
    `
  },
  "code-to-prose-journey": {
    title: "From Code to Prose: My Journey as a Technical Author",
    category: "WRITING",
    date: "December 20, 2025",
    readTime: "5 min read",
    author: "Dr. Om Mahajan",
    heroImage: fashionLifestyle,
    content: `
      <p class="lead">The skills that make a good programmer often translate surprisingly well to writing fiction. This personal reflection explores the unexpected connections between coding and creative writing.</p>
      
      <h2>Structural Thinking in Both Domains</h2>
      
      <p>Both programming and fiction writing require structural thinking. A novel has an architecture just as surely as a software system does. Characters, plot threads, and themes must be organized and managed much like modules, functions, and variables.</p>
      
      <h2>The Debugging Mindset</h2>
      
      <p>Editing prose is remarkably similar to debugging code. You read through your work, identify problems, form hypotheses about their causes, and test solutions. The patience required for debugging serves writers well during the revision process.</p>
      
      <h2>Logic and Creativity: Not Opposites</h2>
      
      <p>There's a common misconception that technical and creative work occupy opposite ends of a spectrum. In reality, both require a blend of logical thinking and creative problem-solving. The best code is elegant; the best prose is precise.</p>
      
      <p>My journey from IT professional to published author has shown me that these two identities complement rather than contradict each other. Each discipline enriches the other in unexpected ways.</p>
    `
  },
  "smart-city-developing-nations": {
    title: "Smart City Strategies for Developing Nations",
    category: "TECHNOLOGY",
    date: "December 15, 2025",
    readTime: "8 min read",
    author: "Dr. Om Mahajan",
    heroImage: lifestylePost,
    content: `
      <p class="lead">Smart city initiatives in developing nations face unique constraints and opportunities. This article explores practical strategies for implementing smart city solutions with limited resources.</p>
      
      <h2>Redefining "Smart" for Local Contexts</h2>
      
      <p>The smart city concept originated in developed nations with robust infrastructure and abundant resources. Applying these ideas to developing nations requires reimagining what "smart" means in contexts with different priorities and constraints.</p>
      
      <h2>Prioritizing High-Impact, Low-Cost Solutions</h2>
      
      <p>Resource constraints force us to be strategic about where to invest. The most impactful smart city initiatives in developing nations often focus on:</p>
      
      <ul>
        <li><strong>Digital Payment Systems:</strong> Reducing cash handling and improving transparency</li>
        <li><strong>Citizen Service Portals:</strong> Streamlining interactions between government and citizens</li>
        <li><strong>Basic Infrastructure Monitoring:</strong> Using IoT for water, electricity, and waste management</li>
        <li><strong>Open Data Initiatives:</strong> Enabling civic tech ecosystems with minimal investment</li>
      </ul>
      
      <h2>Building Local Capacity</h2>
      
      <p>Sustainable smart city initiatives require local capacity. Dependence on external vendors and consultants creates fragility. Investing in training and knowledge transfer ensures long-term success.</p>
    `
  },
  "poetry-problem-solving": {
    title: "The Poetry of Problem Solving",
    category: "LIFESTYLE",
    date: "December 10, 2025",
    readTime: "4 min read",
    author: "Dr. Om Mahajan",
    heroImage: fashionPost,
    content: `
      <p class="lead">Finding creative inspiration in the structured world of IT solutions might seem paradoxical, but the parallels between poetry and programming run deeper than you might expect.</p>
      
      <h2>Constraints as Creative Catalysts</h2>
      
      <p>Poetry often operates within strict formal constraints—meter, rhyme, syllable counts. Similarly, programming involves working within the constraints of syntax, performance requirements, and resource limitations.</p>
      
      <p>Far from stifling creativity, these constraints can actually stimulate it. The challenge of expressing complex ideas within limitations pushes us toward more elegant solutions.</p>
      
      <h2>The Aesthetic of Elegant Code</h2>
      
      <p>Programmers speak of "beautiful code" not as mere metaphor but as genuine aesthetic appreciation. There's a poetry in code that achieves maximum effect with minimum complexity, that expresses its intent clearly and gracefully.</p>
      
      <h2>Cross-Pollination of Skills</h2>
      
      <p>Cultivating multiple creative outlets—whether technical or artistic—enriches all of them. The pattern recognition skills honed through programming inform my poetry. The attention to rhythm and flow from writing verse improves my code.</p>
      
      <p>In the end, both poetry and programming are about using symbols to represent and transform ideas. They are different dialects of the same fundamental language of human creativity.</p>
    `
  },
  "property-tax-digitization": {
    title: "Property Tax Digitization: Lessons Learned",
    category: "TECHNOLOGY",
    date: "December 5, 2025",
    readTime: "7 min read",
    author: "Dr. Om Mahajan",
    heroImage: techPost,
    content: `
      <p class="lead">Insights from implementing digital property tax systems for municipal corporations, including practical lessons that can inform future e-governance initiatives.</p>
      
      <h2>Understanding the Legacy Landscape</h2>
      
      <p>Before any digital transformation project, it's essential to deeply understand existing processes, pain points, and stakeholder needs. Property tax collection involves complex interactions between citizens, assessment officers, collection agents, and administrative staff.</p>
      
      <h2>Key Success Factors</h2>
      
      <p>Several factors proved critical to the success of property tax digitization:</p>
      
      <ul>
        <li><strong>Data Quality:</strong> Clean, accurate property data forms the foundation of effective tax administration</li>
        <li><strong>Integration:</strong> Seamless connections with payment gateways, GIS systems, and legacy databases</li>
        <li><strong>User Training:</strong> Comprehensive training programs for staff at all levels</li>
        <li><strong>Citizen Communication:</strong> Clear messaging about new processes and benefits</li>
      </ul>
      
      <h2>Overcoming Resistance</h2>
      
      <p>Change resistance is natural in large organizations. Addressing concerns empathetically while maintaining momentum requires careful stakeholder management. Quick wins help build credibility and support for larger transformations.</p>
    `
  },
  "fiction-while-in-tech": {
    title: "Writing Fiction While Working in Tech",
    category: "WRITING",
    date: "November 28, 2025",
    readTime: "5 min read",
    author: "Dr. Om Mahajan",
    heroImage: businessPost,
    content: `
      <p class="lead">Balancing creative pursuits with a demanding technology career is challenging but rewarding. Here's how I manage to write fiction while maintaining a full-time IT career.</p>
      
      <h2>Time Management Strategies</h2>
      
      <p>Finding time to write requires intentionality. I write during early mornings before work begins, using the quiet hours when distractions are minimal. Even 30 minutes of focused writing daily accumulates significantly over months.</p>
      
      <h2>Using Tech Skills for Writing</h2>
      
      <p>Technical skills transfer surprisingly well to writing. Version control concepts help manage drafts. Project management approaches help plan novels. Data analysis mindset helps understand reader feedback.</p>
      
      <h2>The Mental Switch</h2>
      
      <p>Moving between technical work and creative writing requires a mental transition. I use rituals—a specific playlist, a particular coffee, a change of location—to signal to my brain that it's time to switch modes.</p>
      
      <p>The key is recognizing that both pursuits nourish different aspects of who I am. Neither is a distraction from the other; both are essential expressions of my complete self.</p>
    `
  },
  "ux-government-applications": {
    title: "User Experience in Government Applications",
    category: "TECHNOLOGY",
    date: "November 20, 2025",
    readTime: "6 min read",
    author: "Dr. Om Mahajan",
    heroImage: workLifestyle,
    content: `
      <p class="lead">Why citizen-centric design matters in public sector digital services, and how to apply UX principles in government application development.</p>
      
      <h2>The Unique Context of Government UX</h2>
      
      <p>Government applications serve all citizens, including those with limited digital literacy, disabilities, or access constraints. Unlike commercial applications that can target specific user segments, government services must be universally accessible.</p>
      
      <h2>Principles for Citizen-Centric Design</h2>
      
      <p>Effective government UX is guided by several key principles:</p>
      
      <ul>
        <li><strong>Accessibility First:</strong> Design for the full range of abilities and access methods</li>
        <li><strong>Plain Language:</strong> Avoid jargon and bureaucratic complexity</li>
        <li><strong>Progressive Disclosure:</strong> Start simple and reveal complexity only as needed</li>
        <li><strong>Error Prevention:</strong> Help users avoid mistakes rather than just handling errors</li>
      </ul>
      
      <h2>Research with Real Citizens</h2>
      
      <p>Understanding citizen needs requires going beyond assumptions. User research with diverse citizen groups reveals insights that improve service design. Even small-scale usability testing can identify major issues before launch.</p>
    `
  },
  "technology-storytelling-intersection": {
    title: "The Intersection of Technology and Storytelling",
    category: "LIFESTYLE",
    date: "November 15, 2025",
    readTime: "5 min read",
    author: "Dr. Om Mahajan",
    heroImage: fashionLifestyle,
    content: `
      <p class="lead">How my dual passions for technology and storytelling inform and enrich each other, creating unique perspectives in both domains.</p>
      
      <h2>Technology as Story Subject</h2>
      
      <p>Technology provides rich material for fiction. The human impact of digital transformation, the ethical dilemmas of AI, the social dynamics of online communities—these are the stories of our time, and technical knowledge enables authentic exploration of these themes.</p>
      
      <h2>Storytelling in Technology</h2>
      
      <p>Every successful technology project involves storytelling. We tell stories to stakeholders about what we're building and why. We tell stories to users through our interfaces. We tell stories to ourselves about the problems we're solving.</p>
      
      <h2>A Unified Creative Identity</h2>
      
      <p>I no longer see technology and storytelling as separate pursuits. They're different expressions of the same fundamental drive: the desire to understand the world, solve problems, and connect with other humans.</p>
      
      <p>Whether I'm architecting a database or crafting a narrative, I'm engaged in the same essential act of creation—giving form to ideas and sharing them with others.</p>
    `
  }
};

// Related posts data
const allPosts = Object.entries(blogPosts).map(([slug, post]) => ({
  slug,
  title: post.title,
  category: post.category,
  date: post.date,
  image: post.heroImage,
  excerpt: post.content.replace(/<[^>]+>/g, '').substring(0, 150) + '...'
}));

const BlogDetail = () => {
  const { slug } = useParams();
  const post = slug && blogPosts[slug] ? blogPosts[slug] : null;
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  // Get related posts (same category first, then others, excluding current)
  const relatedPosts = allPosts
    .filter(p => p.slug !== slug)
    .sort((a, b) => {
      if (post) {
        const aMatch = a.category === post.category ? 1 : 0;
        const bMatch = b.category === post.category ? 1 : 0;
        return bMatch - aMatch;
      }
      return 0;
    });

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  if (!post) {
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
              {post.category}
            </span>
            <span className="text-muted-foreground text-sm">•</span>
            <time className="text-sm text-muted-foreground">{post.date}</time>
            <span className="text-muted-foreground text-sm">•</span>
            <span className="text-sm text-muted-foreground">{post.readTime}</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex items-center gap-4">
            <img 
              src={omHeadshot} 
              alt={post.author}
              className="w-12 h-12 rounded-full object-cover border-2 border-border"
            />
            <div>
              <p className="font-medium text-foreground">{post.author}</p>
              <p className="text-sm text-muted-foreground">Author & IT Professional</p>
            </div>
          </div>
        </header>

        {/* Hero Image - Full Width */}
        <div className="mb-12">
          <div className="max-w-5xl mx-auto px-6">
            <img
              src={post.heroImage}
              alt={post.title}
              className="w-full aspect-[21/9] object-cover rounded-2xl"
            />
          </div>
        </div>

        {/* Article Content - 70% width */}
        <article className="max-w-[70%] mx-auto px-6 lg:px-0">
          <div 
            className="prose prose-lg max-w-none
              prose-headings:text-foreground prose-headings:font-bold prose-headings:mt-14 prose-headings:mb-6
              prose-h2:text-2xl prose-h2:md:text-3xl
              prose-p:text-muted-foreground prose-p:leading-[1.9] prose-p:mb-8 prose-p:text-lg
              prose-ul:text-muted-foreground prose-ul:mb-8 prose-ul:space-y-3
              prose-li:text-muted-foreground prose-li:mb-3 prose-li:text-lg prose-li:leading-relaxed
              prose-strong:text-foreground
              [&_.lead]:text-xl [&_.lead]:md:text-2xl [&_.lead]:text-foreground [&_.lead]:font-normal [&_.lead]:leading-[1.8] [&_.lead]:mb-10"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Inline callouts */}
          {post.callouts && post.callouts.length > 0 && (
            <div className="mt-12 space-y-8">
              {post.callouts.map((callout, index) => (
                <Callout key={index} type={callout.type}>
                  {callout.text}
                </Callout>
              ))}
            </div>
          )}

          {/* Inline images */}
          {post.inlineImages && post.inlineImages.length > 0 && (
            <div className="mt-8">
              {post.inlineImages.map((img, index) => (
                <InlineImage key={index} src={img.src} alt={img.alt} caption={img.caption} />
              ))}
            </div>
          )}
        </article>

        {/* Author Bio Section */}
        <section className="max-w-[70%] mx-auto px-6 lg:px-0 mt-16 pt-10 border-t border-border">
          <div className="flex flex-col sm:flex-row gap-6 items-start bg-secondary/30 rounded-2xl p-6">
            <img 
              src={omHeadshot} 
              alt={post.author}
              className="w-24 h-24 rounded-full object-cover border-4 border-background shadow-lg flex-shrink-0"
            />
            <div>
              <p className="text-sm text-primary font-medium mb-1">Written by</p>
              <h3 className="text-xl font-bold text-foreground mb-3">{post.author}</h3>
              <p className="text-muted-foreground leading-relaxed">
                Dr. Om Mahajan specializes in digital transformation in urban governance and is also a fiction author.
                He modernizes city systems through initiatives such as the NMMC Property Tax module and 
                explores life through compelling narratives.
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
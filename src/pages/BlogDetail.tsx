import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ReadingProgress from '@/components/ReadingProgress';
import BackToTop from '@/components/BackToTop';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import omHeadshot from '@/assets/om-headshot.png';
import techPost from '@/assets/tech-post.jpg';
import businessPost from '@/assets/business-post.jpg';
import workLifestyle from '@/assets/work-lifestyle.jpg';
import fashionLifestyle from '@/assets/fashion-lifestyle.jpg';
import lifestylePost from '@/assets/lifestyle-post.jpg';
import fashionPost from '@/assets/fashion-post.jpg';

// Blog posts data - matching the Blog.tsx listing
const blogPosts: Record<string, {
  title: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  excerpt: string;
  heroImage: string;
  content: string;
}> = {
  "digital-transformation-urban-governance": {
    title: "Digital Transformation in Urban Governance: A Case Study",
    category: "TECHNOLOGY",
    date: "January 10, 2026",
    readTime: "8 min read",
    author: "Om Mahajan",
    excerpt: "Exploring how smart city initiatives are reshaping municipal operations and citizen services.",
    heroImage: techPost,
    content: `
      <p class="lead">The intersection of technology and urban governance represents one of the most significant opportunities for improving citizen lives in the 21st century. As cities grow and citizen expectations evolve, digital transformation has become not just desirable but essential.</p>
      
      <p>Having spent over 15 years in IT, with a particular focus on e-Governance solutions, I've witnessed firsthand how technology can bridge the gap between municipal corporations and the citizens they serve. This article explores the key principles, challenges, and lessons learned from implementing digital solutions in urban governance.</p>
      
      <h2>The Foundation of Smart City Initiatives</h2>
      
      <p>Smart city initiatives begin with a fundamental understanding: technology should serve people, not the other way around. Every digital solution must start with the citizen's journey—from discovering a service to completing a transaction and receiving confirmation.</p>
      
      <p>The most successful implementations I've been part of share common characteristics:</p>
      
      <ul>
        <li><strong>Citizen-centric design:</strong> Every interface decision prioritizes ease of use for diverse populations</li>
        <li><strong>Interoperability:</strong> Systems that communicate seamlessly with existing infrastructure</li>
        <li><strong>Scalability:</strong> Solutions designed to grow with increasing demand</li>
        <li><strong>Security:</strong> Robust protection of citizen data and transactions</li>
      </ul>
      
      <h2>Case Study: Property Tax Digitization</h2>
      
      <p>One of the most impactful projects in municipal digital transformation is property tax management. Traditional systems often involved multiple office visits, paper forms, and weeks of processing time. The digital alternative transforms this experience entirely.</p>
      
      <blockquote>
        <p>"The measure of a successful e-Governance implementation isn't the sophistication of the technology—it's the reduction in citizen effort required to access services."</p>
      </blockquote>
      
      <p>Through systematic digitization, we've achieved remarkable improvements: processing times reduced from weeks to minutes, error rates decreased by over 80%, and citizen satisfaction scores significantly improved. More importantly, the transparency inherent in digital systems has built trust between citizens and their municipal corporations.</p>
      
      <h2>Challenges and Considerations</h2>
      
      <p>Digital transformation in governance isn't without its challenges. Key considerations include:</p>
      
      <ul>
        <li><strong>Digital divide:</strong> Ensuring solutions remain accessible to citizens without smartphones or internet access</li>
        <li><strong>Change management:</strong> Training staff accustomed to legacy processes</li>
        <li><strong>Infrastructure:</strong> Reliable connectivity and power in all service locations</li>
        <li><strong>Data migration:</strong> Accurately transferring decades of paper records</li>
      </ul>
      
      <p>Each challenge requires thoughtful solutions that balance innovation with inclusivity. The goal is never to leave any citizen behind in the digital transition.</p>
      
      <h2>The Human Element</h2>
      
      <p>Perhaps the most important lesson from years of implementing e-Governance solutions is that technology is only as effective as the people behind it. Training, support, and ongoing engagement with both staff and citizens determine success far more than the sophistication of the underlying systems.</p>
      
      <p>As we continue to build smarter cities, our focus must remain on the human stories behind every transaction—the family paying property tax to secure their home, the entrepreneur obtaining permits to start a business, the citizen accessing records that matter to their lives.</p>
      
      <h2>Looking Forward</h2>
      
      <p>The future of urban governance lies in continued integration of emerging technologies—AI for predictive services, blockchain for transparent record-keeping, and IoT for real-time city monitoring. But the core principle remains unchanged: technology must serve humanity, making government more accessible, efficient, and trustworthy.</p>
      
      <p>This journey of digital transformation is ongoing, and each implementation teaches us something new about serving citizens better. The work continues, one system at a time, one city at a time.</p>
    `
  },
  "storytelling-technical-documentation": {
    title: "The Art of Storytelling in Technical Documentation",
    category: "WRITING",
    date: "January 5, 2026",
    readTime: "6 min read",
    author: "Om Mahajan",
    excerpt: "Bridging the gap between complex systems and human understanding through narrative.",
    heroImage: businessPost,
    content: `
      <p class="lead">Technical documentation often suffers from a fundamental disconnect: it's written by people who understand the system for people who don't. The result is frequently impenetrable prose that fails to educate or engage.</p>
      
      <p>As someone who writes both fiction and technical documentation, I've discovered that narrative techniques can transform dry specifications into compelling, comprehensible content. Here's how storytelling principles can revolutionize technical writing.</p>
      
      <h2>The Power of User Stories</h2>
      
      <p>Every technical system exists to solve a human problem. Beginning documentation with that human story immediately creates connection and context. Instead of "The system processes input data according to validation rules," try "When Maria enters her application, the system checks each field to ensure she has the best chance of approval."</p>
      
      <p>This approach accomplishes several things:</p>
      
      <ul>
        <li>Creates emotional investment in the outcome</li>
        <li>Provides concrete context for abstract processes</li>
        <li>Makes complex systems relatable and understandable</li>
        <li>Helps readers visualize real-world applications</li>
      </ul>
      
      <h2>Structure as Narrative Arc</h2>
      
      <p>Good stories have beginnings, middles, and ends. Technical documentation benefits from the same structure: establish the problem (beginning), explain the solution (middle), and confirm the outcome (end).</p>
      
      <blockquote>
        <p>"The best technical writing doesn't just inform—it takes readers on a journey from confusion to clarity."</p>
      </blockquote>
      
      <h2>Character Development in Documentation</h2>
      
      <p>In fiction, we develop characters through their actions and decisions. In technical writing, our "characters" are users, administrators, and systems. Giving these entities consistent personalities and motivations helps readers predict and understand behavior.</p>
      
      <p>The key is maintaining consistency and clarity while adding just enough narrative to engage without overwhelming.</p>
      
      <h2>Conclusion</h2>
      
      <p>Technical and creative writing need not be opposing forces. By applying narrative principles thoughtfully, we can create documentation that educates, engages, and empowers users to succeed with complex systems.</p>
    `
  },
  "resilient-egovernance-systems": {
    title: "Building Resilient e-Governance Systems",
    category: "TECHNOLOGY",
    date: "December 28, 2025",
    readTime: "7 min read",
    author: "Om Mahajan",
    excerpt: "Key considerations for designing government digital infrastructure that scales.",
    heroImage: workLifestyle,
    content: `
      <p class="lead">Government digital systems face unique challenges: they must serve millions of users, operate continuously, handle sensitive data, and remain accessible to citizens across diverse technological backgrounds.</p>
      
      <p>Building resilient e-Governance systems requires thinking beyond traditional software development to consider the full ecosystem of users, infrastructure, and societal impact.</p>
      
      <h2>Principles of Resilient Design</h2>
      
      <p>Resilience in e-Governance means more than uptime. It encompasses:</p>
      
      <ul>
        <li><strong>Graceful degradation:</strong> Systems that maintain core functionality even when components fail</li>
        <li><strong>Accessibility:</strong> Solutions that work across devices, connection speeds, and user abilities</li>
        <li><strong>Security:</strong> Protection against both external threats and internal errors</li>
        <li><strong>Scalability:</strong> Capacity to handle peak demands without service degradation</li>
      </ul>
      
      <h2>Learning from Real-World Implementations</h2>
      
      <p>Years of implementing municipal systems have taught valuable lessons about what works—and what doesn't—in the field. The gap between laboratory conditions and real-world deployment is where true resilience is tested.</p>
      
      <blockquote>
        <p>"A system isn't truly resilient until it has survived contact with actual users in actual conditions."</p>
      </blockquote>
      
      <h2>The Road Ahead</h2>
      
      <p>As governments worldwide accelerate digital transformation, the principles of resilient design become ever more critical. The systems we build today will serve citizens for decades—we owe them infrastructure that stands the test of time.</p>
    `
  },
  "code-to-prose-journey": {
    title: "From Code to Prose: My Journey as a Technical Author",
    category: "WRITING",
    date: "December 20, 2025",
    readTime: "5 min read",
    author: "Om Mahajan",
    excerpt: "How programming logic influences my approach to fiction writing.",
    heroImage: fashionLifestyle,
    content: `
      <p class="lead">When people learn that I'm both an IT professional and a fiction author, they often ask how these two worlds connect. The answer has surprised even me: the skills transfer more than you might expect.</p>
      
      <p>Programming teaches you to think in systems—to understand how components interact, how data flows, how small changes cascade through larger structures. These same skills apply directly to crafting narratives.</p>
      
      <h2>Structure and Logic</h2>
      
      <p>A well-architected software system and a well-crafted novel share fundamental properties: clear structure, consistent internal logic, and elegant handling of complexity.</p>
      
      <h2>Debugging and Revision</h2>
      
      <p>The debugging mindset translates beautifully to editing. Both require stepping back from your creation, examining it objectively, and systematically identifying where things go wrong.</p>
      
      <blockquote>
        <p>"Writing fiction has made me a better programmer. Programming has made me a better writer. The synthesis creates something neither could achieve alone."</p>
      </blockquote>
      
      <h2>The Creative Advantage</h2>
      
      <p>In a field increasingly shaped by AI and automation, the ability to think creatively, to craft compelling narratives, to understand human motivation—these become essential differentiators. Technical skills open doors, but creative skills make you irreplaceable.</p>
    `
  },
  "smart-city-developing-nations": {
    title: "Smart City Strategies for Developing Nations",
    category: "TECHNOLOGY",
    date: "December 15, 2025",
    readTime: "9 min read",
    author: "Om Mahajan",
    excerpt: "Practical approaches to implementing smart city solutions with limited resources.",
    heroImage: lifestylePost,
    content: `
      <p class="lead">The smart city conversation often centers on wealthy nations with abundant resources. But the greatest need—and perhaps the greatest opportunity—lies in developing nations where urbanization is fastest and infrastructure challenges most acute.</p>
      
      <p>Having worked on urban governance solutions in India, I've learned that smart city principles can be adapted to work within constraints of limited budgets, variable infrastructure, and diverse citizen needs.</p>
      
      <h2>Prioritizing High-Impact Solutions</h2>
      
      <p>With limited resources, strategic prioritization becomes essential. The key is identifying solutions that deliver maximum citizen impact per rupee invested.</p>
      
      <ul>
        <li><strong>Mobile-first design:</strong> Leveraging widespread smartphone adoption</li>
        <li><strong>Offline capabilities:</strong> Solutions that work with intermittent connectivity</li>
        <li><strong>Shared infrastructure:</strong> Systems that serve multiple purposes</li>
        <li><strong>Open standards:</strong> Avoiding vendor lock-in and enabling local maintenance</li>
      </ul>
      
      <h2>Learning from Constraints</h2>
      
      <p>Constraints breed innovation. Some of the most elegant solutions I've encountered emerged precisely because unlimited resources weren't available. When you can't throw money at a problem, you're forced to think more creatively.</p>
      
      <h2>Building Local Capacity</h2>
      
      <p>Sustainable smart city implementation requires building local technical capacity. External consultants can initiate projects, but long-term success depends on local teams who understand both the technology and the community it serves.</p>
    `
  },
  "poetry-problem-solving": {
    title: "The Poetry of Problem Solving",
    category: "LIFESTYLE",
    date: "December 10, 2025",
    readTime: "4 min read",
    author: "Om Mahajan",
    excerpt: "Finding creative inspiration in the structured world of IT solutions.",
    heroImage: fashionPost,
    content: `
      <p class="lead">There's an unexpected poetry in debugging a complex system at 2 AM, in the moment when a elegant solution finally clicks into place, in the satisfaction of code that works exactly as intended.</p>
      
      <p>Those who view technology and creativity as opposites miss the profound artistic dimension of technical work.</p>
      
      <h2>Elegance in Solutions</h2>
      
      <p>Programmers speak of "elegant" code—solutions that are not just functional but beautiful in their simplicity and efficiency. This aesthetic sense is as real and refined as any artistic judgment.</p>
      
      <h2>The Creative Process</h2>
      
      <p>Both writing poetry and solving technical problems follow similar creative arcs: struggle, experimentation, sudden insight, refinement. The medium differs, but the process is recognizably the same.</p>
      
      <blockquote>
        <p>"Code, like poetry, is language shaped to purpose. Both reward precision, economy, and the courage to delete what doesn't serve the whole."</p>
      </blockquote>
      
      <h2>Finding Balance</h2>
      
      <p>Maintaining creative practices alongside technical work isn't about work-life balance—it's about whole-life integration. Each realm enriches the other, creating a more complete and capable professional.</p>
    `
  },
  "property-tax-digitization": {
    title: "Property Tax Digitization: Lessons Learned",
    category: "TECHNOLOGY",
    date: "December 5, 2025",
    readTime: "6 min read",
    author: "Om Mahajan",
    excerpt: "Insights from implementing digital property tax systems for municipal corporations.",
    heroImage: techPost,
    content: `
      <p class="lead">Property tax collection represents one of the most significant revenue streams for municipal corporations, yet traditional collection processes are often inefficient, opaque, and frustrating for citizens.</p>
      
      <p>Digital transformation of property tax systems offers tremendous opportunity—but also significant challenges. Here are lessons from the front lines of implementation.</p>
      
      <h2>Understanding the Existing System</h2>
      
      <p>Before digitizing, you must deeply understand what you're replacing. Legacy processes often contain hidden logic and edge cases that aren't immediately apparent.</p>
      
      <h2>Managing Change</h2>
      
      <p>Technology implementation is only half the battle. The human side—training staff, communicating with citizens, managing resistance to change—often determines success or failure.</p>
      
      <h2>Measuring Impact</h2>
      
      <p>Clear metrics established before implementation allow you to demonstrate value and identify areas for improvement. What gets measured gets managed.</p>
    `
  },
  "fiction-while-in-tech": {
    title: "Writing Fiction While Working in Tech",
    category: "WRITING",
    date: "November 28, 2025",
    readTime: "5 min read",
    author: "Om Mahajan",
    excerpt: "Balancing creative pursuits with a demanding technology career.",
    heroImage: businessPost,
    content: `
      <p class="lead">The question I receive most often from aspiring writers in technical fields: "How do you find time to write?" The answer is both simple and challenging: you make time, because you must.</p>
      
      <p>Creative work isn't a luxury for those of us who feel compelled to create—it's essential to our well-being and, ultimately, to our professional effectiveness.</p>
      
      <h2>Practical Strategies</h2>
      
      <p>After years of trial and error, certain practices have proven essential:</p>
      
      <ul>
        <li><strong>Protected time:</strong> Early mornings before work begins</li>
        <li><strong>Small goals:</strong> 500 words daily rather than waiting for marathon sessions</li>
        <li><strong>Capture systems:</strong> Recording ideas whenever they strike</li>
        <li><strong>Deadline commitment:</strong> External accountability through writing groups or publishing schedules</li>
      </ul>
      
      <h2>The Synergy Effect</h2>
      
      <p>Counterintuitively, maintaining creative practice improves professional performance. The mental flexibility, communication skills, and problem-solving approaches developed through writing enhance technical work.</p>
    `
  },
  "ux-government-applications": {
    title: "User Experience in Government Applications",
    category: "TECHNOLOGY",
    date: "November 20, 2025",
    readTime: "7 min read",
    author: "Om Mahajan",
    excerpt: "Why citizen-centric design matters in public sector digital services.",
    heroImage: workLifestyle,
    content: `
      <p class="lead">Government applications face a unique UX challenge: users don't choose to use them. When citizens interact with government digital services, it's typically because they must—for licenses, taxes, permits, or compliance.</p>
      
      <p>This mandatory context makes user experience even more critical. Poor UX in government services isn't just frustrating—it can deny citizens access to services they're entitled to receive.</p>
      
      <h2>Designing for Diverse Users</h2>
      
      <p>Government services must work for everyone: tech-savvy youth, seniors unfamiliar with smartphones, citizens with disabilities, speakers of multiple languages. Universal design isn't optional—it's essential.</p>
      
      <h2>Building Trust Through Design</h2>
      
      <p>Government systems handle sensitive personal information. Design choices that prioritize transparency, security, and clarity help build citizen trust in digital services.</p>
      
      <h2>Measuring Success</h2>
      
      <p>Success metrics for government UX extend beyond traditional engagement metrics. Completion rates, error rates, and citizen satisfaction surveys reveal whether services truly serve their intended purpose.</p>
    `
  },
  "technology-storytelling-intersection": {
    title: "The Intersection of Technology and Storytelling",
    category: "LIFESTYLE",
    date: "November 15, 2025",
    readTime: "4 min read",
    author: "Om Mahajan",
    excerpt: "How my dual passions inform and enrich each other.",
    heroImage: fashionLifestyle,
    content: `
      <p class="lead">We live in an age where technology shapes narrative and narrative shapes technology. The intersection of these domains offers unique opportunities for those comfortable in both worlds.</p>
      
      <p>My journey through IT and fiction writing has revealed unexpected connections and synergies between technical and creative work.</p>
      
      <h2>Stories Drive Adoption</h2>
      
      <p>The most successful technology implementations are those that can be explained through compelling stories. Case studies, user testimonials, vision narratives—these storytelling tools drive adoption more effectively than feature lists.</p>
      
      <h2>Technology Enables New Stories</h2>
      
      <p>Digital platforms create new possibilities for narrative—interactive fiction, transmedia storytelling, personalized content experiences. Understanding technology opens creative doors that remain closed to purely traditional writers.</p>
      
      <blockquote>
        <p>"The future belongs to those who can speak both languages: the precise logic of systems and the resonant power of human stories."</p>
      </blockquote>
    `
  }
};

// Related posts data
const allPosts = Object.entries(blogPosts).map(([slug, post]) => ({
  slug,
  title: post.title,
  category: post.category,
  date: post.date,
  readTime: post.readTime,
  image: post.heroImage,
  excerpt: post.excerpt,
}));

const BlogDetail = () => {
  const { slug } = useParams();
  const post = slug && blogPosts[slug] ? blogPosts[slug] : null;

  // Get related posts (same category, excluding current)
  const relatedPosts = allPosts
    .filter(p => p.slug !== slug && p.category === post?.category)
    .slice(0, 3);

  // If no same-category posts, get other posts
  const postsToShow = relatedPosts.length > 0 
    ? relatedPosts 
    : allPosts.filter(p => p.slug !== slug).slice(0, 3);

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container-blog py-16 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist.</p>
          <Link to="/blog" className="text-primary hover:underline">
            ← Back to Blog
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
      
      <main id="main-content">
        {/* Article Header */}
        <article className="max-w-3xl mx-auto px-6">
          {/* Back Link */}
          <div className="pt-8 pb-6">
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </div>

          {/* Category & Meta */}
          <header className="mb-8">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-4">
              {post.category}
            </span>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              {post.title}
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              {post.excerpt}
            </p>

            {/* Author Info */}
            <div className="flex items-center gap-4 pb-8 border-b border-border">
              <img 
                src={omHeadshot} 
                alt={post.author}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-medium text-foreground">{post.author}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </span>
                </div>
              </div>
            </div>
          </header>

          {/* Hero Image */}
          <div className="mb-10 -mx-6 md:mx-0">
            <img
              src={post.heroImage}
              alt={post.title}
              className="w-full aspect-[16/9] object-cover md:rounded-2xl"
            />
          </div>

          {/* Article Content */}
          <div 
            className="prose prose-lg max-w-none
              prose-headings:text-foreground prose-headings:font-bold
              prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
              prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
              prose-p.lead:text-xl prose-p.lead:text-foreground prose-p.lead:font-normal prose-p.lead:leading-relaxed
              prose-ul:text-muted-foreground prose-ul:my-6
              prose-li:text-muted-foreground prose-li:mb-2
              prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-foreground prose-blockquote:my-8
              prose-strong:text-foreground prose-strong:font-semibold
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Author Bio */}
          <div className="mt-16 pt-8 border-t border-border">
            <div className="flex items-start gap-4">
              <img 
                src={omHeadshot} 
                alt={post.author}
                className="w-16 h-16 rounded-full object-cover flex-shrink-0"
              />
              <div>
                <p className="font-bold text-foreground mb-1">Written by {post.author}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  IT professional with 15+ years of experience in e-Governance and digital transformation. 
                  Fiction author exploring the intersection of technology and human stories.
                </p>
              </div>
            </div>
          </div>
        </article>

        {/* Read Next Section */}
        <section className="mt-16 py-12 bg-muted/30">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-foreground mb-8">Read Next</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {postsToShow.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  to={`/blog/${relatedPost.slug}`}
                  className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <span className="inline-block text-xs font-medium text-primary mb-2">
                      {relatedPost.category}
                    </span>
                    <h3 className="font-bold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                      {relatedPost.title}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span>{relatedPost.date}</span>
                      <span>•</span>
                      <span>{relatedPost.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default BlogDetail;

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import businessPost from '@/assets/business-post.jpg';
import fashionPost from '@/assets/fashion-post.jpg';
import techPost from '@/assets/tech-post.jpg';
import lifestylePost from '@/assets/lifestyle-post.jpg';
import fashionLifestyle from '@/assets/fashion-lifestyle.jpg';
import workLifestyle from '@/assets/work-lifestyle.jpg';
import omHeadshot from '@/assets/om-headshot.png';
import vendorManagementCover from '@/assets/vendor-management-cover.jpg';

// Blog posts data
const blogPosts = [
  {
    title: "Vendor Management: Where Governance Meets Execution",
    category: "EGOVERNANCE",
    date: "January 16, 2026",
    excerpt: "In government, policies are framed internally, but execution often happens through vendors - contractors, service providers, system integrators, suppliers.",
    image: vendorManagementCover,
    slug: "vendor-management-governance-execution",
    author: "Om Mahajan"
  },
  {
    title: "Operationalizing Governance through Digital Systems: A Case Study",
    category: "TECHNOLOGY",
    date: "January 10, 2026",
    excerpt: "Exploring how smart city initiatives are reshaping municipal operations and citizen services.",
    image: techPost,
    slug: "digital-transformation-urban-governance",
    author: "Om Mahajan"
  },
  {
    title: "The Art of Storytelling in Technical Documentation",
    category: "WRITING",
    date: "January 5, 2026",
    excerpt: "Bridging the gap between complex systems and human understanding through narrative.",
    image: businessPost,
    slug: "storytelling-technical-documentation",
    author: "Om Mahajan"
  },
  {
    title: "Building Resilient e-Governance Systems",
    category: "TECHNOLOGY",
    date: "December 28, 2025",
    excerpt: "Key considerations for designing government digital infrastructure that scales.",
    image: workLifestyle,
    slug: "resilient-egovernance-systems",
    author: "Om Mahajan"
  },
  {
    title: "From Code to Prose: My Journey as a Technical Author",
    category: "WRITING",
    date: "December 20, 2025",
    excerpt: "How programming logic influences my approach to fiction writing.",
    image: fashionLifestyle,
    slug: "code-to-prose-journey",
    author: "Om Mahajan"
  },
  {
    title: "Smart City Strategies for Developing Nations",
    category: "TECHNOLOGY",
    date: "December 15, 2025",
    excerpt: "Practical approaches to implementing smart city solutions with limited resources.",
    image: lifestylePost,
    slug: "smart-city-developing-nations",
    author: "Om Mahajan"
  },
  {
    title: "The Poetry of Problem Solving",
    category: "LIFESTYLE",
    date: "December 10, 2025",
    excerpt: "Finding creative inspiration in the structured world of IT solutions.",
    image: fashionPost,
    slug: "poetry-problem-solving",
    author: "Om Mahajan"
  },
  {
    title: "Property Tax Digitization: Lessons Learned",
    category: "TECHNOLOGY",
    date: "December 5, 2025",
    excerpt: "Insights from implementing digital property tax systems for municipal corporations.",
    image: techPost,
    slug: "property-tax-digitization",
    author: "Om Mahajan"
  },
  {
    title: "Writing Fiction While Working in Tech",
    category: "WRITING",
    date: "November 28, 2025",
    excerpt: "Balancing creative pursuits with a demanding technology career.",
    image: businessPost,
    slug: "fiction-while-in-tech",
    author: "Om Mahajan"
  },
  {
    title: "User Experience in Government Applications",
    category: "TECHNOLOGY",
    date: "November 20, 2025",
    excerpt: "Why citizen-centric design matters in public sector digital services.",
    image: workLifestyle,
    slug: "ux-government-applications",
    author: "Om Mahajan"
  },
  {
    title: "The Intersection of Technology and Storytelling",
    category: "LIFESTYLE",
    date: "November 15, 2025",
    excerpt: "How my dual passions inform and enrich each other.",
    image: fashionLifestyle,
    slug: "technology-storytelling-intersection",
    author: "Om Mahajan"
  }
];

const categories = [
  { name: "eGovernance", image: vendorManagementCover, slug: "egovernance" },
  { name: "Technology", image: techPost, slug: "technology" },
  { name: "Writing", image: businessPost, slug: "writing" },
  { name: "Lifestyle", image: lifestylePost, slug: "lifestyle" },
  { name: "Projects", image: workLifestyle, slug: "projects" },
];

const Blog = () => {
  const featuredPost = blogPosts[0];
  const gridPosts = blogPosts.slice(1, 5);
  const listPosts = blogPosts.slice(5);

  return (
    <div className="min-h-screen bg-background relative">
      <Header />
      
      {/* Coming Soon Overlay */}
      <div className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm flex items-center justify-center">
        <div className="text-center p-8 max-w-md">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
            <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Coming Soon</h2>
          <p className="text-muted-foreground text-lg mb-6">
            We're working hard to bring you amazing content. Stay tuned for updates!
          </p>
          <a 
            href="/" 
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
          >
            Back to Home
          </a>
        </div>
      </div>
      
      <main id="main-content" className="container-blog py-8 md:py-12">
        {/* Hero Section - Featured + Grid */}
        <section className="mb-12 md:mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Featured Large Post */}
            <Link 
              to={`/blog/${featuredPost.slug}`}
              className="group relative overflow-hidden rounded-2xl bg-card aspect-[4/5] lg:aspect-auto lg:row-span-2"
            >
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full mb-3">
                  {featuredPost.category}
                </span>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 leading-tight">
                  {featuredPost.title}
                </h2>
                <p className="text-white/80 text-sm md:text-base mb-4 line-clamp-2">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-3">
                  <img 
                    src={omHeadshot} 
                    alt={featuredPost.author}
                    className="w-8 h-8 rounded-full object-cover border-2 border-white/30"
                  />
                  <div className="text-white/70 text-sm">
                    <span className="text-white font-medium">{featuredPost.author}</span>
                    <span className="mx-2">•</span>
                    <span>{featuredPost.date}</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* 2x2 Grid Posts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {gridPosts.map((post) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <span className="inline-block text-xs font-medium text-primary mb-2">
                      {post.category}
                    </span>
                    <h3 className="font-bold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <img 
                        src={omHeadshot} 
                        alt={post.author}
                        className="w-5 h-5 rounded-full object-cover"
                      />
                      <span>{post.author}</span>
                      <span>•</span>
                      <span>{post.date}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Read by Category */}
        <section className="mb-12 md:mb-16">
          <h2 className="text-xl md:text-2xl font-bold text-foreground mb-6">
            Read by Category
          </h2>
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {categories.map((category) => (
              <Link
                key={category.slug}
                to={`/blog?category=${category.slug}`}
                className="group flex-shrink-0"
              >
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-2xl overflow-hidden mb-2 ring-2 ring-transparent group-hover:ring-primary transition-all duration-300">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <p className="text-sm font-medium text-center text-foreground group-hover:text-primary transition-colors">
                  {category.name}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* Latest Articles List - 2 column grid */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold text-foreground mb-6">
            Latest Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {listPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group flex gap-4 md:gap-5 p-4 bg-card rounded-xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex-shrink-0 w-28 h-28 md:w-36 md:h-36 rounded-lg overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex-1 min-w-0 flex flex-col justify-center">
                  <span className="inline-block text-xs font-medium text-primary mb-2">
                    {post.category}
                  </span>
                  <h3 className="font-bold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2 hidden sm:block">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <img 
                      src={omHeadshot} 
                      alt={post.author}
                      className="w-5 h-5 rounded-full object-cover"
                    />
                    <span>{post.author}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Load More Button */}
        <div className="flex justify-center mt-12">
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors">
            Load More Articles
          </button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;

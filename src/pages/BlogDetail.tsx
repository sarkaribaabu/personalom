import { useParams, Link } from 'react-router-dom';
import { useMemo, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ReadingProgress from '@/components/ReadingProgress';
import BackToTop from '@/components/BackToTop';
import { useHashnodePost } from '@/hooks/useHashnodePost';
import { useHashnodePosts } from '@/hooks/useHashnodePosts';
import omHeadshot from '@/assets/om-headshot.png';
import techPost from '@/assets/tech-post.jpg';
import { ArrowLeft, ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
  
  const { data: hashnodePost, isLoading: isLoadingHashnode } = useHashnodePost(slug || '');
  const { posts } = useHashnodePosts(20);
  
  const isUsingHashnode = !!hashnodePost;
  const hasContent = !!hashnodePost;
  
  const relatedPosts = posts
    .filter(p => p.slug !== slug)
    .slice(0, 5)
    .map((post) => ({
      slug: post.slug,
      title: post.title,
      category: post.tags?.[0]?.name?.toUpperCase() || 'ARTICLE',
      date: formatHashnodeDate(post.publishedDate),
      image: post.coverImage?.url || techPost,
    }));

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Get raw content (may be undefined during loading)
  const rawContent = hashnodePost?.content?.html ?? '';

  // Normalize DEV.to HTML: only remove layout elements that could break our page design.
  const renderedContent = useMemo(() => {
    if (!rawContent || !isUsingHashnode) return rawContent;
    if (typeof window === 'undefined') return rawContent;

    try {
      const doc = new DOMParser().parseFromString(rawContent, 'text/html');

      // Remove layout elements that might shift our page design.
      doc.querySelectorAll('aside, nav').forEach((el) => el.remove());

      return doc.body.innerHTML;
    } catch {
      return rawContent;
    }
  }, [rawContent, isUsingHashnode]);

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
  const title = hashnodePost.title;
  const category = hashnodePost.tags?.[0]?.name?.toUpperCase() || 'ARTICLE';
  const date = formatHashnodeDate(hashnodePost.publishedDate);
  const readTime = `${hashnodePost.readingTime} min read`;
  const author = hashnodePost.author.name;
  const authorImage = hashnodePost.author.profilePicture || omHeadshot;
  const heroImage = hashnodePost.coverImage?.url || techPost;
  // (renderedContent already computed before early returns)
  const authorBio = hashnodePost.author.bio?.text || 'Author & IT Professional';

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

        {/* Article Content */}
        <article className="w-full max-w-3xl mx-auto px-6 lg:px-0">
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
            dangerouslySetInnerHTML={{ __html: renderedContent }}
          />

        </article>

        {/* Author Bio Section */}
        <section className="w-full max-w-3xl mx-auto px-6 lg:px-0 mt-16 pt-10 border-t border-border">
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

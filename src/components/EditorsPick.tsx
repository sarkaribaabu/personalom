import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRef } from 'react';
import { useHashnodePosts, formatHashnodeDate, getCategoryFromTags } from '@/hooks/useHashnodePosts';
import { Skeleton } from '@/components/ui/skeleton';
import techPost from '@/assets/tech-post.jpg';

const EditorsPick = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { posts, loading, error } = useHashnodePosts(7);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  // Fallback image for posts without cover
  const getImage = (post: typeof posts[0]) => {
    return post.coverImage?.url || techPost;
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
        {loading ? (
          // Loading skeletons
          Array.from({ length: 4 }).map((_, idx) => (
            <div key={idx} className="flex-shrink-0 w-80 bg-card rounded-lg overflow-hidden">
              <Skeleton className="aspect-[4/3] w-full" />
              <div className="p-6 space-y-3">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-20" />
              </div>
            </div>
          ))
        ) : error ? (
          <p className="text-muted-foreground">Failed to load blogs. Please try again later.</p>
        ) : posts.length === 0 ? (
          <p className="text-muted-foreground">No blog posts available.</p>
        ) : (
          posts.map((post) => (
            <article
              key={post.id}
              className="flex-shrink-0 w-80 bg-card rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-200"
            >
              <a
                href={`/blog/${post.slug}`}
                className="block focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg"
                aria-label={`Read article: ${post.title}`}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={getImage(post)}
                    alt={`Article: ${post.title}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-3">
                    <span className="blog-meta">{getCategoryFromTags(post.tags)}</span>
                    <span className="text-muted-foreground" aria-hidden="true">—</span>
                    <time className="blog-meta" dateTime={post.publishedAt}>
                      {formatHashnodeDate(post.publishedAt)}
                    </time>
                  </div>
                  
                  <h3 className="text-lg font-bold text-foreground leading-tight mb-3 hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
                    {post.brief}
                  </p>
                  
                  <span className="inline-flex items-center text-sm font-medium text-primary hover:underline">
                    READ MORE →
                  </span>
                </div>
              </a>
            </article>
          ))
        )}
      </div>
    </section>
  );
};

export default EditorsPick;

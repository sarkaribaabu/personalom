import { useState, useMemo } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { useHashnodePosts, formatHashnodeDate, getCategoryFromTags, HashnodePost } from '@/hooks/useHashnodePosts';
import { Skeleton } from '@/components/ui/skeleton';
import { X } from 'lucide-react';
import omHeadshot from '@/assets/om-headshot.png';

// Fallback images for posts without cover images
import businessPost from '@/assets/business-post.jpg';
import techPost from '@/assets/tech-post.jpg';
import lifestylePost from '@/assets/lifestyle-post.jpg';
import workLifestyle from '@/assets/work-lifestyle.jpg';
import fashionLifestyle from '@/assets/fashion-lifestyle.jpg';

const fallbackImages = [businessPost, techPost, lifestylePost, workLifestyle, fashionLifestyle];

const getFallbackImage = (index: number): string => {
  return fallbackImages[index % fallbackImages.length];
};

// Loading skeleton for featured post
const FeaturedPostSkeleton = () => (
  <div className="relative overflow-hidden rounded-2xl bg-card aspect-[4/5] lg:aspect-auto lg:row-span-2">
    <Skeleton className="absolute inset-0 w-full h-full" />
  </div>
);

// Loading skeleton for grid posts
const GridPostSkeleton = () => (
  <div className="bg-card rounded-xl overflow-hidden border border-border">
    <Skeleton className="aspect-[16/10] w-full" />
    <div className="p-4 space-y-2">
      <Skeleton className="h-4 w-20" />
      <Skeleton className="h-5 w-full" />
      <Skeleton className="h-5 w-3/4" />
      <Skeleton className="h-4 w-32" />
    </div>
  </div>
);

// Loading skeleton for list posts
const ListPostSkeleton = () => (
  <div className="flex gap-4 md:gap-5 p-4 bg-card rounded-xl border border-border">
    <Skeleton className="flex-shrink-0 w-28 h-28 md:w-36 md:h-36 rounded-lg" />
    <div className="flex-1 flex flex-col justify-center space-y-2">
      <Skeleton className="h-4 w-20" />
      <Skeleton className="h-5 w-full" />
      <Skeleton className="h-5 w-3/4" />
      <Skeleton className="h-4 w-32" />
    </div>
  </div>
);

interface PostCardProps {
  post: HashnodePost;
  index: number;
  variant: 'featured' | 'grid' | 'list';
}

const PostCard = ({ post, index, variant }: PostCardProps) => {
  const coverImage = post.coverImage?.url || getFallbackImage(index);
  const category = getCategoryFromTags(post.tags);
  const date = formatHashnodeDate(post.publishedAt);
  const authorImage = post.author?.profilePicture || omHeadshot;
  const authorName = post.author?.name || 'Dr. Om Mahajan';

  if (variant === 'featured') {
    return (
      <Link 
        to={`/blog/${post.slug}`}
        className="group relative overflow-hidden rounded-2xl bg-card min-h-[400px] lg:min-h-[500px]"
      >
        <img
          src={coverImage}
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full mb-3">
            {category}
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 leading-tight">
            {post.title}
          </h2>
          <p className="text-white/80 text-sm md:text-base mb-4 line-clamp-2">
            {post.brief}
          </p>
          <div className="flex items-center gap-3">
            <img 
              src={authorImage} 
              alt={authorName}
              className="w-8 h-8 rounded-full object-cover border-2 border-white/30"
            />
            <div className="text-white/70 text-sm">
              <span className="text-white font-medium">{authorName}</span>
              <span className="mx-2">•</span>
              <span>{date}</span>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  if (variant === 'grid') {
    return (
      <Link
        to={`/blog/${post.slug}`}
        className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
      >
        <div className="aspect-[16/10] overflow-hidden">
          <img
            src={coverImage}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-4">
          <span className="inline-block text-xs font-medium text-primary mb-2">
            {category}
          </span>
          <h3 className="font-bold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {post.title}
          </h3>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <img 
              src={authorImage} 
              alt={authorName}
              className="w-5 h-5 rounded-full object-cover"
            />
            <span>{authorName}</span>
            <span>•</span>
            <span>{date}</span>
          </div>
        </div>
      </Link>
    );
  }

  // List variant
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group flex gap-4 md:gap-5 p-4 bg-card rounded-xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
    >
      <div className="flex-shrink-0 w-28 h-28 md:w-36 md:h-36 rounded-lg overflow-hidden">
        <img
          src={coverImage}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex-1 min-w-0 flex flex-col justify-center">
        <span className="inline-block text-xs font-medium text-primary mb-2">
          {category}
        </span>
        <h3 className="font-bold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {post.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2 hidden sm:block">
          {post.brief}
        </p>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <img 
            src={authorImage} 
            alt={authorName}
            className="w-5 h-5 rounded-full object-cover"
          />
          <span>{authorName}</span>
          <span>•</span>
          <span>{date}</span>
        </div>
      </div>
    </Link>
  );
};

const Blog = () => {
  const { posts, loading, error, hasNextPage, loadMore } = useHashnodePosts(20);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Auto-generate unique categories from Hashnode tags
  const categories = useMemo(() => {
    const categoryMap = new Map<string, { name: string; count: number; image: string }>();
    
    posts.forEach((post, index) => {
      const category = getCategoryFromTags(post.tags);
      const slug = category.toLowerCase().replace(/\s+/g, '-');
      
      if (!categoryMap.has(slug)) {
        categoryMap.set(slug, {
          name: category,
          count: 1,
          image: post.coverImage?.url || getFallbackImage(index)
        });
      } else {
        const existing = categoryMap.get(slug)!;
        existing.count += 1;
      }
    });

    // Sort by count descending
    return Array.from(categoryMap.entries())
      .map(([slug, data]) => ({ slug, ...data }))
      .sort((a, b) => b.count - a.count);
  }, [posts]);

  // Filter posts based on selected category
  const filteredPosts = useMemo(() => {
    if (!selectedCategory) return posts;
    return posts.filter(post => {
      const category = getCategoryFromTags(post.tags).toLowerCase().replace(/\s+/g, '-');
      return category === selectedCategory;
    });
  }, [posts, selectedCategory]);

  const featuredPost = filteredPosts[0];
  const gridPosts = filteredPosts.slice(1, 5);
  const listPosts = filteredPosts.slice(5);

  const handleCategoryClick = (slug: string) => {
    setSelectedCategory(prev => prev === slug ? null : slug);
  };

  const clearFilter = () => {
    setSelectedCategory(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main id="main-content" className="container-blog py-8 md:py-12">
        {/* Active Filter Banner */}
        {selectedCategory && (
          <div className="mb-6 flex items-center gap-3 p-4 bg-primary/10 rounded-xl border border-primary/20">
            <span className="text-sm text-foreground">
              Showing posts in: <strong className="text-primary capitalize">{selectedCategory.replace(/-/g, ' ')}</strong>
            </span>
            <button
              onClick={clearFilter}
              className="ml-auto flex items-center gap-1 px-3 py-1 text-sm font-medium text-primary hover:bg-primary/20 rounded-full transition-colors"
            >
              <X className="w-4 h-4" />
              Clear filter
            </button>
          </div>
        )}

        {/* Hero Section - Featured + Grid */}
        <section className="mb-12 md:mb-16">
          {error && (
            <div className="text-center py-8 text-destructive">
              <p>Failed to load posts. Please try again later.</p>
            </div>
          )}
          
          {loading && posts.length === 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <FeaturedPostSkeleton />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[1, 2, 3, 4].map((i) => (
                  <GridPostSkeleton key={i} />
                ))}
              </div>
            </div>
          ) : filteredPosts.length > 0 ? (
            <>
              {/* Layout adapts based on number of posts */}
              {filteredPosts.length === 1 ? (
                // Single post - full width featured
                <div className="max-w-4xl mx-auto">
                  <PostCard post={featuredPost} index={0} variant="featured" />
                </div>
              ) : filteredPosts.length <= 3 ? (
                // 2-3 posts - featured + remaining as grid
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <PostCard post={featuredPost} index={0} variant="featured" />
                  <div className="grid grid-cols-1 gap-4">
                    {gridPosts.map((post, index) => (
                      <PostCard key={post.id} post={post} index={index + 1} variant="grid" />
                    ))}
                  </div>
                </div>
              ) : (
                // 4+ posts - featured (3 cols) + grid (2 cols)
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                  <div className="lg:col-span-3">
                    <PostCard post={featuredPost} index={0} variant="featured" />
                  </div>
                  <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {gridPosts.map((post, index) => (
                      <PostCard key={post.id} post={post} index={index + 1} variant="grid" />
                    ))}
                  </div>
                </div>
              )}
            </>
          ) : !loading && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                {selectedCategory 
                  ? `No posts found in "${selectedCategory.replace(/-/g, ' ')}". Try another category.`
                  : 'No posts found. Check back soon!'}
              </p>
              {selectedCategory && (
                <button
                  onClick={clearFilter}
                  className="mt-4 px-6 py-2 text-sm font-medium text-primary hover:bg-primary/10 rounded-full transition-colors"
                >
                  View all posts
                </button>
              )}
            </div>
          )}
        </section>

        {/* Read by Category - Auto-generated from Hashnode tags */}
        {categories.length > 0 && (
          <section className="mb-12 md:mb-16">
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-6">
              Read by Category
            </h2>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.slug}
                  onClick={() => handleCategoryClick(category.slug)}
                  className={`group flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 ${
                    selectedCategory === category.slug
                      ? 'bg-primary text-primary-foreground border-primary'
                      : 'bg-card border-border hover:border-primary/50 hover:bg-primary/5'
                  }`}
                >
                  <span className="font-medium text-sm">
                    {category.name}
                  </span>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    selectedCategory === category.slug
                      ? 'bg-primary-foreground/20 text-primary-foreground'
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </section>
        )}

        {/* Latest Articles List - 2 column grid */}
        {listPosts.length > 0 && (
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-6">
              {selectedCategory ? 'More Articles' : 'Latest Articles'}
            </h2>
            {loading && posts.length === 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[1, 2, 3, 4].map((i) => (
                  <ListPostSkeleton key={i} />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {listPosts.map((post, index) => (
                  <PostCard key={post.id} post={post} index={index + 5} variant="list" />
                ))}
              </div>
            )}
          </section>
        )}

        {/* Load More Button */}
        {hasNextPage && !selectedCategory && (
          <div className="flex justify-center mt-12">
            <button 
              onClick={loadMore}
              disabled={loading}
              className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors disabled:opacity-50"
            >
              {loading ? 'Loading...' : 'Load More Articles'}
            </button>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;

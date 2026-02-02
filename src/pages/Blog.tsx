import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { useHashnodePosts, formatHashnodeDate, getCategoryFromTags, HashnodePost } from '@/hooks/useHashnodePosts';
import { Skeleton } from '@/components/ui/skeleton';
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

const categories = [
  { name: "eGovernance", image: businessPost, slug: "e-governance" },
  { name: "Technology", image: techPost, slug: "technology" },
  { name: "Writing", image: lifestylePost, slug: "writing" },
  { name: "Lifestyle", image: workLifestyle, slug: "lifestyle" },
  { name: "Projects", image: fashionLifestyle, slug: "projects" },
];

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
  const { posts, loading, error, hasNextPage, loadMore } = useHashnodePosts(10);

  const featuredPost = posts[0];
  const gridPosts = posts.slice(1, 5);
  const listPosts = posts.slice(5);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main id="main-content" className="container-blog py-8 md:py-12">
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
          ) : posts.length > 0 ? (
            <>
              {/* Layout adapts based on number of posts */}
              {posts.length === 1 ? (
                // Single post - full width featured
                <div className="max-w-4xl mx-auto">
                  <PostCard post={featuredPost} index={0} variant="featured" />
                </div>
              ) : posts.length <= 3 ? (
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
              <p className="text-muted-foreground">No posts found. Check back soon!</p>
            </div>
          )}
        </section>

        {/* Read by Category */}
        <section className="mb-12 md:mb-16">
          <h2 className="text-xl md:text-2xl font-bold text-foreground mb-6">
            Read by Category
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 md:gap-6">
            {categories.map((category) => (
              <Link
                key={category.slug}
                to={`/blog?category=${category.slug}`}
                className="group"
              >
                <div className="aspect-square rounded-2xl overflow-hidden mb-2 ring-2 ring-transparent group-hover:ring-primary transition-all duration-300">
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
        {listPosts.length > 0 && (
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-6">
              Latest Articles
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
        {hasNextPage && (
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

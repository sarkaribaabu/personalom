import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, BookOpen, Calendar, Tag } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const booksData: Record<string, {
  title: string;
  subtitle: string;
  cover: string;
  heroImage: string;
  status: string;
  releaseDate: string;
  category: string;
  quote: string;
  description: string[];
  publisher: string;
  buyLinks: { name: string; url: string }[];
  reviews: { text: string; author: string; source: string }[];
}> = {
  'mastering-cloud-architecture': {
    title: 'Mastering Cloud Architecture',
    subtitle: 'A Practical Guide to Modern Infrastructure',
    cover: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&h=900&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=800&fit=crop',
    status: 'Published',
    releaseDate: 'March 15, 2023',
    category: 'Technology',
    quote: 'The cloud is not just about technology—it\'s about transforming how we think about infrastructure and scalability.',
    description: [
      'In an era where cloud computing has become the backbone of modern enterprises, understanding cloud architecture is no longer optional—it\'s essential. This comprehensive guide takes you through the journey of designing, implementing, and managing cloud infrastructure that scales.',
      'Drawing from over 15 years of hands-on experience in the IT industry, I\'ve compiled practical insights, real-world case studies, and battle-tested strategies that will help you navigate the complexities of cloud architecture.',
      'Whether you\'re a seasoned architect looking to modernize your approach or a developer transitioning into infrastructure roles, this book provides the roadmap you need to succeed in the cloud-native world.',
    ],
    publisher: 'TechPress Publications',
    buyLinks: [
      { name: 'Amazon', url: 'https://amazon.com' },
      { name: 'Barnes & Noble', url: 'https://barnesandnoble.com' },
      { name: 'Book Depository', url: 'https://bookdepository.com' },
    ],
    reviews: [
      {
        text: 'A masterful blend of theory and practice. This book has become my go-to reference for cloud architecture decisions.',
        author: 'Sarah Chen',
        source: 'CTO, TechStartup Inc.',
      },
      {
        text: 'Finally, a cloud architecture book that speaks to real-world challenges. Highly recommended for any IT professional.',
        author: 'Michael Rodriguez',
        source: 'Principal Architect, Enterprise Solutions',
      },
    ],
  },
  'devops-handbook': {
    title: 'The DevOps Handbook',
    subtitle: 'Transforming IT Operations',
    cover: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=600&h=900&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&h=800&fit=crop',
    status: 'Coming Soon',
    releaseDate: 'June 2025',
    category: 'Technology',
    quote: 'DevOps is not just a methodology—it\'s a cultural transformation that bridges the gap between development and operations.',
    description: [
      'The DevOps revolution has fundamentally changed how organizations deliver software. This upcoming book explores the principles, practices, and tools that enable teams to achieve continuous delivery and operational excellence.',
      'Based on years of implementing DevOps practices in various organizations, this handbook provides a structured approach to adopting DevOps culture while avoiding common pitfalls.',
      'From CI/CD pipelines to infrastructure as code, from monitoring strategies to incident response, this book covers the full spectrum of DevOps practices with actionable insights.',
    ],
    publisher: 'TechPress Publications',
    buyLinks: [
      { name: 'Pre-order on Amazon', url: 'https://amazon.com' },
    ],
    reviews: [],
  },
};

const BookDetail = () => {
  const { bookId } = useParams<{ bookId: string }>();
  const book = bookId ? booksData[bookId] : null;

  if (!book) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="py-24 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Book Not Found</h1>
          <Link to="/books" className="text-primary hover:underline">
            ← Back to Books
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-[60vh] flex items-center justify-start"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.4)), url(${book.heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container-blog py-16 md:py-24">
          <Link 
            to="/books" 
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Books
          </Link>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 max-w-3xl">
            {book.title}
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-6">
            {book.subtitle}
          </p>
          
          {book.status === 'Coming Soon' && (
            <div className="inline-block px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-full mb-6">
              Coming {book.releaseDate}
            </div>
          )}
        </div>
      </section>

      <main className="py-16 md:py-24">
        <div className="container-blog">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Book Cover & Buy Links */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="relative aspect-[2/3] mb-6 overflow-hidden rounded-lg shadow-2xl">
                  <img
                    src={book.cover}
                    alt={book.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="space-y-3">
                  {book.buyLinks.map((link) => (
                    <Button
                      key={link.name}
                      variant="outline"
                      className="w-full justify-between"
                      asChild
                    >
                      <a href={link.url} target="_blank" rel="noopener noreferrer">
                        {link.name}
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  ))}
                </div>

                <div className="mt-8 space-y-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-4 w-4" />
                    <span>{book.releaseDate}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <BookOpen className="h-4 w-4" />
                    <span>{book.publisher}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Tag className="h-4 w-4" />
                    <span>{book.category}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Book Content */}
            <div className="lg:col-span-2">
              {/* Quote */}
              <blockquote className="text-xl md:text-2xl italic text-muted-foreground border-l-4 border-primary pl-6 mb-12">
                '{book.quote}'
              </blockquote>

              {/* Description */}
              <div className="prose prose-lg max-w-none mb-12">
                {book.description.map((paragraph, index) => (
                  <p key={index} className="text-foreground/90 leading-relaxed mb-6">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Reviews */}
              {book.reviews.length > 0 && (
                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-8">Reviews</h2>
                  <div className="space-y-8">
                    {book.reviews.map((review, index) => (
                      <div key={index} className="bg-accent/30 rounded-lg p-6">
                        <p className="text-foreground/90 italic mb-4">
                          "{review.text}"
                        </p>
                        <div className="text-sm">
                          <span className="font-semibold text-foreground">{review.author}</span>
                          <span className="text-muted-foreground"> — {review.source}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BookDetail;

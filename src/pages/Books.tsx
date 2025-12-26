import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const books = [
  {
    id: 'mastering-cloud-architecture',
    title: 'Mastering Cloud Architecture',
    subtitle: 'A Practical Guide to Modern Infrastructure',
    cover: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=600&fit=crop',
    status: 'Published',
    year: '2023',
    category: 'Cloud Computing',
    isLatest: true,
  },
  {
    id: 'devops-handbook',
    title: 'The DevOps Handbook',
    subtitle: 'Transforming IT Operations',
    cover: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=600&fit=crop',
    status: 'Coming Soon',
    releaseDate: 'June 2025',
    year: '2025',
    category: 'DevOps',
  },
  {
    id: 'ai-for-developers',
    title: 'AI for Developers',
    subtitle: 'Building Intelligent Applications',
    cover: 'https://images.unsplash.com/photo-1589998059171-988d887df646?w=400&h=600&fit=crop',
    status: 'Coming Soon',
    releaseDate: 'September 2025',
    year: '2025',
    category: 'AI/ML',
  },
  {
    id: 'microservices-patterns',
    title: 'Microservices Patterns',
    subtitle: 'Designing Scalable Systems',
    cover: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=400&h=600&fit=crop',
    status: 'Published',
    year: '2022',
    category: 'Architecture',
  },
  {
    id: 'kubernetes-in-action',
    title: 'Kubernetes in Action',
    subtitle: 'Container Orchestration Mastery',
    cover: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=600&fit=crop',
    status: 'Published',
    year: '2021',
    category: 'Cloud Computing',
  },
];

const categories = ['All', 'Cloud Computing', 'DevOps', 'AI/ML', 'Architecture'];

const Books = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const latestBook = books.find(book => book.isLatest);
  const comingSoonBooks = books.filter(book => book.status === 'Coming Soon');
  const allBooks = selectedCategory === 'All' 
    ? books 
    : books.filter(book => book.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-16 md:py-24">
        <div className="container-blog">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Books
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              With over 15 years in the IT industry, I've distilled my experience and knowledge into books 
              that help professionals navigate the ever-evolving technology landscape. Click on any cover 
              to explore more details, purchase links, and exclusive content.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap gap-4 mb-16">
            <a href="#latest" className="px-6 py-3 border border-border rounded-lg hover:bg-accent transition-colors">
              Latest Release
            </a>
            <a href="#coming-soon" className="px-6 py-3 border border-border rounded-lg hover:bg-accent transition-colors">
              Coming Soon
            </a>
            <a href="#all-books" className="px-6 py-3 border border-border rounded-lg hover:bg-accent transition-colors">
              Browse All Books
            </a>
          </div>

          {/* Latest Release Section */}
          {latestBook && (
            <section id="latest" className="mb-20">
              <div className="flex items-center gap-4 mb-12">
                <div className="h-px flex-1 bg-border" />
                <h2 className="text-xl md:text-2xl font-semibold text-primary">Latest Release</h2>
                <div className="h-px flex-1 bg-border" />
              </div>

              <Link
                to={`/books/${latestBook.id}`}
                className="group grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
              >
                <div className="relative aspect-[2/3] max-w-sm mx-auto md:mx-0 overflow-hidden rounded-lg shadow-2xl">
                  <img
                    src={latestBook.cover}
                    alt={latestBook.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground group-hover:text-primary transition-colors mb-4">
                    {latestBook.title}
                  </h3>
                  <p className="text-xl text-muted-foreground mb-6">{latestBook.subtitle}</p>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded">{latestBook.category}</span>
                    <span className="text-muted-foreground">{latestBook.year}</span>
                  </div>
                  <Button size="lg">Get Your Copy</Button>
                </div>
              </Link>
            </section>
          )}

          {/* Coming Soon Section */}
          {comingSoonBooks.length > 0 && (
            <section id="coming-soon" className="mb-20">
              <div className="flex items-center gap-4 mb-12">
                <div className="h-px flex-1 bg-border" />
                <h2 className="text-xl md:text-2xl font-semibold text-primary">Coming Soon</h2>
                <div className="h-px flex-1 bg-border" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {comingSoonBooks.map((book) => (
                  <Link
                    key={book.id}
                    to={`/books/${book.id}`}
                    className="group block"
                  >
                    <div className="relative aspect-[2/3] mb-4 overflow-hidden rounded-lg shadow-lg">
                      <img
                        src={book.cover}
                        alt={book.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-4 right-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                        Coming Soon
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {book.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">{book.releaseDate}</p>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Browse All Books Section */}
          <section id="all-books">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-border" />
              <h2 className="text-xl md:text-2xl font-semibold text-primary">Browse All Books</h2>
              <div className="h-px flex-1 bg-border" />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2 mb-12">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="transition-all"
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Books Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {allBooks.map((book) => (
                <Link
                  key={book.id}
                  to={`/books/${book.id}`}
                  className="group block"
                >
                  <div className="relative aspect-[2/3] mb-3 overflow-hidden rounded-lg shadow-md">
                    <img
                      src={book.cover}
                      alt={book.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {book.status === 'Coming Soon' && (
                      <div className="absolute top-2 right-2 px-2 py-0.5 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                        Soon
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {book.title}
                  </h3>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Books;

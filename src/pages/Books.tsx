import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import lustfulLoveCover from '@/assets/lustful-love-cover.png';

const books = [
  {
    id: 'lustful-love',
    title: 'Lustful Love',
    subtitle: 'A Sizzling Erotica',
    cover: lustfulLoveCover,
    status: 'Published',
    year: '2020',
    category: 'Erotic Romance',
    isLatest: true,
  },
];

const categories = ['All', 'Erotic Romance'];

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
              With over 15 years in the IT industry, I've also pursued my passion for creative writing. 
              My books explore diverse themes from romance to thrillers. Click on any cover 
              to explore more details, purchase links, and exclusive content.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap gap-4 mb-16">
            <a href="#latest" className="px-6 py-3 border border-border rounded-lg hover:bg-accent transition-colors">
              Latest Release
            </a>
            {comingSoonBooks.length > 0 && (
              <a href="#coming-soon" className="px-6 py-3 border border-border rounded-lg hover:bg-accent transition-colors">
                Coming Soon
              </a>
            )}
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
                    <span className="text-muted-foreground">Published: {latestBook.year}</span>
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
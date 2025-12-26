import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const books = [
  {
    id: 'mastering-cloud-architecture',
    title: 'Mastering Cloud Architecture',
    subtitle: 'A Practical Guide to Modern Infrastructure',
    cover: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=600&fit=crop',
    status: 'Published',
    year: '2023',
    category: 'Technology',
  },
  {
    id: 'devops-handbook',
    title: 'The DevOps Handbook',
    subtitle: 'Transforming IT Operations',
    cover: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=600&fit=crop',
    status: 'Coming Soon',
    year: '2025',
    category: 'Technology',
  },
];

const Books = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-16 md:py-24">
        <div className="container-blog">
          {/* Hero Section */}
          <div className="max-w-4xl mb-16">
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
            <a href="#published" className="px-6 py-3 border border-border rounded-lg hover:bg-accent transition-colors">
              Published Works
            </a>
            <a href="#upcoming" className="px-6 py-3 border border-border rounded-lg hover:bg-accent transition-colors">
              Upcoming Releases
            </a>
          </div>

          {/* Published Section */}
          <section id="published" className="mb-20">
            <div className="flex items-center gap-4 mb-12">
              <div className="h-px flex-1 bg-border" />
              <h2 className="text-xl md:text-2xl font-semibold text-primary">Published Works</h2>
              <div className="h-px flex-1 bg-border" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {books
                .filter(book => book.status === 'Published')
                .map((book) => (
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
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {book.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{book.subtitle}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded">{book.category}</span>
                      <span className="text-xs text-muted-foreground">{book.year}</span>
                    </div>
                  </Link>
                ))}
            </div>
          </section>

          {/* Upcoming Section */}
          <section id="upcoming">
            <div className="flex items-center gap-4 mb-12">
              <div className="h-px flex-1 bg-border" />
              <h2 className="text-xl md:text-2xl font-semibold text-primary">Upcoming Releases</h2>
              <div className="h-px flex-1 bg-border" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {books
                .filter(book => book.status === 'Coming Soon')
                .map((book) => (
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
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {book.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{book.subtitle}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded">{book.category}</span>
                      <span className="text-xs text-muted-foreground">{book.year}</span>
                    </div>
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

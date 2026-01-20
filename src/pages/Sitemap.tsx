import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Home, User, Route, Briefcase, BookOpen, Mail, FileText, Shield } from 'lucide-react';

const Sitemap = () => {
  const mainPages = [
    { title: 'Home', path: '/', icon: Home, description: 'Welcome to my portfolio' },
    { title: 'About', path: '/about', icon: User, description: 'Learn more about me' },
    { title: 'Journey', path: '/journey', icon: Route, description: 'My professional timeline' },
    { title: 'Projects', path: '/projects', icon: Briefcase, description: 'Work and case studies' },
    { title: 'Books', path: '/books', icon: BookOpen, description: 'Published works' },
    { title: 'Contact', path: '/contact', icon: Mail, description: 'Get in touch' },
  ];

  const legalPages = [
    { title: 'Privacy Policy', path: '/privacy', icon: Shield, description: 'How I handle your data' },
    { title: 'Terms of Use', path: '/terms', icon: FileText, description: 'Website usage terms' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main id="main-content" className="container-blog py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Sitemap
          </h1>
          <p className="text-lg text-muted-foreground mb-12">
            Navigate through all pages of my portfolio website.
          </p>
          
          {/* Main Pages */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <Home className="w-5 h-5 text-primary" />
              Main Pages
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {mainPages.map((page) => (
                <Link
                  key={page.path}
                  to={page.path}
                  className="group p-6 rounded-xl border border-border bg-card hover:border-primary/50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <page.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                        {page.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {page.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Legal Pages */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" />
              Legal
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {legalPages.map((page) => (
                <Link
                  key={page.path}
                  to={page.path}
                  className="group p-6 rounded-xl border border-border bg-card hover:border-primary/50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                      <page.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                        {page.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {page.description}
                      </p>
                    </div>
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

export default Sitemap;

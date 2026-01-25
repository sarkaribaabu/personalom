import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Instagram, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT', href: '/about' },
    { name: 'JOURNEY', href: '/journey' },
    { name: 'PROJECTS', href: '/projects' },
    { name: 'BLOG', href: '/blog' },
    { name: 'BOOKS', href: '/books' },
    { name: 'HOBBIES', href: '/hobbies' },
    { name: 'CONTACT', href: '/contact' },
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/om-mahajan/', label: 'LinkedIn' },
    { icon: Facebook, href: 'https://www.facebook.com/mahajan.aum', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/perfectly.planted.brain/', label: 'Instagram' },
  ];

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container-blog">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="block">
              <h1 className="text-2xl font-bold text-foreground">!i Dr. Om i!</h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="nav-link"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Social Links */}
          <div className="hidden lg:flex items-center space-x-2">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a 
                key={label} 
                href={href} 
                aria-label={label}
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border py-4">
            <nav className="flex flex-col space-y-4" role="navigation" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="nav-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            
            <div className="flex space-x-3 items-center">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a 
                  key={label} 
                  href={href} 
                  aria-label={label}
                  className="p-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
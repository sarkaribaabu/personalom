import { Link } from 'react-router-dom';
import { Linkedin, Facebook, Instagram, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border" role="contentinfo">
      <div className="container-blog py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-foreground">Om Mahajan</h2>
            <p className="text-sm text-muted-foreground">
              IT Professional with 15+ years of experience in enterprise solutions, e-governance, and digital transformation. Author and technology enthusiast.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>Mumbai, India</span>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="font-medium text-foreground">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded">Home</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded">About</Link></li>
              <li><Link to="/journey" className="text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded">Journey</Link></li>
              <li><Link to="/projects" className="text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded">Projects</Link></li>
              <li><Link to="/books" className="text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded">Books</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded">Contact</Link></li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-medium text-foreground">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/sitemap" className="text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded">Sitemap</Link></li>
              <li><Link to="/privacy" className="text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded">Terms of Use</Link></li>
            </ul>
          </div>
          
          {/* Connect */}
          <div className="space-y-4">
            <h3 className="font-medium text-foreground">Connect</h3>
            <div className="flex flex-wrap gap-3">
              <a 
                href="https://www.linkedin.com/in/om-mahajan/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-background border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2" 
                aria-label="Connect on LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
                <span className="text-sm">LinkedIn</span>
              </a>
              <a 
                href="https://www.facebook.com/mahajan.aum" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-background border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2" 
                aria-label="Follow on Facebook"
              >
                <Facebook className="w-4 h-4" />
                <span className="text-sm">Facebook</span>
              </a>
              <a 
                href="https://www.instagram.com/perfectly.planted.brain/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-background border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2" 
                aria-label="Follow on Instagram"
              >
                <Instagram className="w-4 h-4" />
                <span className="text-sm">Instagram</span>
              </a>
            </div>
            <a 
              href="mailto:contact@ommahajan.com" 
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>contact@ommahajan.com</span>
            </a>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 Om Mahajan. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            IT Professional • Author • Technology Enthusiast
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
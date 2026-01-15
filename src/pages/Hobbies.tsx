import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Play, Bike, Camera, Mountain, Instagram } from 'lucide-react';
import {
  Dialog,
  DialogContent,
} from '@/components/ui/dialog';

interface Reel {
  id: string;
  embedUrl: string;
  title: string;
  category: string;
}

const Hobbies = () => {
  const [selectedReel, setSelectedReel] = useState<Reel | null>(null);

  // Instagram Reels - Replace with your actual Instagram reel URLs
  const reels: Reel[] = [
    {
      id: '1',
      embedUrl: 'https://www.instagram.com/reel/DTXEEnKiDc2/',
      title: 'RustyRider Journey',
      category: 'rustyrider'
    },
    {
      id: '2',
      embedUrl: 'https://www.instagram.com/reel/EXAMPLE2/',
      title: 'Mountain Trail',
      category: 'adventure'
    },
    {
      id: '3',
      embedUrl: 'https://www.instagram.com/reel/EXAMPLE3/',
      title: 'Miniature Photography',
      category: 'photography'
    },
    {
      id: '4',
      embedUrl: 'https://www.instagram.com/reel/EXAMPLE4/',
      title: 'Weekend Escape',
      category: 'rustyrider'
    },
    {
      id: '5',
      embedUrl: 'https://www.instagram.com/reel/EXAMPLE5/',
      title: 'Creative Shots',
      category: 'photography'
    },
    {
      id: '6',
      embedUrl: 'https://www.instagram.com/reel/EXAMPLE6/',
      title: 'Road Adventures',
      category: 'adventure'
    },
    {
      id: '7',
      embedUrl: 'https://www.instagram.com/reel/EXAMPLE7/',
      title: 'Sunset Ride',
      category: 'rustyrider'
    },
    {
      id: '8',
      embedUrl: 'https://www.instagram.com/reel/EXAMPLE8/',
      title: 'Macro World',
      category: 'photography'
    },
    {
      id: '9',
      embedUrl: 'https://www.instagram.com/reel/EXAMPLE9/',
      title: 'Hill Station Trip',
      category: 'adventure'
    },
  ];

  const categories = [
    { id: 'all', label: 'All', icon: Play },
    { id: 'rustyrider', label: 'RustyRider', icon: Bike },
    { id: 'photography', label: 'Photography', icon: Camera },
    { id: 'adventure', label: 'Adventure', icon: Mountain },
  ];

  const [activeCategory, setActiveCategory] = useState('all');

  const filteredReels = activeCategory === 'all' 
    ? reels 
    : reels.filter(reel => reel.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Creative Page Header */}
      <section className="pt-24 pb-12">
        <div className="container-blog">
          {/* Staggered Typography Header */}
          <div className="relative">
            {/* Background decorative elements */}
            <div className="absolute -top-8 left-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl" />
            <div className="absolute top-0 right-1/4 w-24 h-24 bg-gradient-to-br from-accent/30 to-transparent rounded-full blur-2xl" />
            
            {/* Main Title - Asymmetric Layout */}
            <div className="relative">
              <div className="flex flex-col md:flex-row md:items-end gap-2 md:gap-6">
                <h1 className="text-6xl md:text-8xl font-serif font-light text-foreground tracking-tight">
                  Beyond
                </h1>
                <div className="flex items-center gap-3">
                  <span className="text-6xl md:text-8xl font-serif font-light text-primary">Code</span>
                  <div className="hidden md:flex items-center gap-2">
                    <span className="w-12 h-0.5 bg-primary" />
                    <span className="text-sm text-muted-foreground uppercase tracking-widest">Life in Reels</span>
                  </div>
                </div>
              </div>
              
              {/* Subtitle */}
              <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                When the IDE closes, the road opens. A glimpse into my world of 
                <span className="text-foreground font-medium"> motorcycle journeys</span>, 
                <span className="text-foreground font-medium"> miniature photography</span>, and 
                <span className="text-foreground font-medium"> curious adventures</span>.
              </p>

              {/* Mobile subtext */}
              <div className="flex md:hidden items-center gap-2 mt-4">
                <span className="w-8 h-0.5 bg-primary" />
                <span className="text-xs text-muted-foreground uppercase tracking-widest">Life in Reels</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter Pills */}
      <nav className="sticky top-20 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container-blog py-4">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full transition-all whitespace-nowrap text-sm font-medium ${
                    isActive 
                      ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25' 
                      : 'bg-muted hover:bg-primary/10 text-muted-foreground hover:text-primary'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {category.label}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Instagram Reels Grid - Creative Masonry-like Layout */}
      <main id="main-content" className="container-blog py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {filteredReels.map((reel, index) => {
            // Create varying heights for visual interest
            const isLarge = index % 5 === 0;
            const isMedium = index % 3 === 1;
            
            return (
              <div 
                key={reel.id}
                className={`group relative cursor-pointer rounded-2xl overflow-hidden bg-gradient-to-br from-muted to-muted/50 ${
                  isLarge ? 'row-span-2' : isMedium ? 'row-span-1' : 'row-span-1'
                }`}
                style={{ aspectRatio: isLarge ? '9/16' : '9/12' }}
                onClick={() => setSelectedReel(reel)}
              >
                {/* Placeholder Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-muted" />
                
                {/* Reel Preview Pattern */}
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary-rgb),0.1)_1px,transparent_1px)] bg-[length:20px_20px]" />
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-between p-4">
                  {/* Top - Category Tag */}
                  <div className="flex justify-end">
                    <span className="px-2 py-1 bg-black/40 backdrop-blur-sm text-white text-xs rounded-full capitalize">
                      {reel.category}
                    </span>
                  </div>

                  {/* Bottom - Title & Play */}
                  <div className="space-y-3">
                    <h3 className="text-white font-medium text-sm md:text-base drop-shadow-lg">
                      {reel.title}
                    </h3>
                    
                    {/* Play Button */}
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/40 group-hover:scale-110 transition-all duration-300">
                        <Play className="h-4 w-4 text-white ml-0.5" fill="currentColor" />
                      </div>
                      <span className="text-white/80 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                        Watch Reel
                      </span>
                    </div>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                
                {/* Instagram Icon */}
                <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Instagram className="h-5 w-5 text-white/80" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Instagram CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center gap-4 p-8 bg-gradient-to-br from-muted/50 to-muted/30 rounded-3xl border border-border/50">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center">
              <Instagram className="h-8 w-8 text-white" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-serif font-light text-foreground">
                Follow the Journey
              </h3>
              <p className="text-muted-foreground text-sm max-w-sm">
                More reels, behind-the-scenes moments, and spontaneous adventures on Instagram
              </p>
            </div>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 hover:from-purple-700 hover:via-pink-700 hover:to-orange-600 text-white rounded-xl transition-all font-medium shadow-lg shadow-pink-500/25"
            >
              <Instagram className="h-5 w-5" />
              @ommahajan
            </a>
          </div>
        </div>
      </main>

      {/* Reel Viewer Dialog */}
      <Dialog open={!!selectedReel} onOpenChange={(open) => !open && setSelectedReel(null)}>
        <DialogContent className="max-w-sm p-0 overflow-hidden bg-black border-0">
          <div className="aspect-[9/16] w-full flex items-center justify-center">
            {selectedReel && (
              <div className="text-center text-white/60 p-8">
                <Instagram className="h-12 w-12 mx-auto mb-4 text-white/40" />
                <p className="text-sm mb-4">
                  Replace with actual Instagram embed
                </p>
                <a 
                  href={selectedReel.embedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-sm"
                >
                  <Play className="h-4 w-4" />
                  Open in Instagram
                </a>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
      
      <Footer />
    </div>
  );
};

export default Hobbies;

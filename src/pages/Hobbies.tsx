import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Play, Eye, Bike, Flame, Compass, Route } from 'lucide-react';
import {
  Dialog,
  DialogContent,
} from '@/components/ui/dialog';

interface Short {
  id: string;
  title: string;
  views: string;
  uploadedAt: string;
  description: string;
}

interface Category {
  id: string;
  title: string;
  icon: React.ElementType;
  tagline: string;
  gradient: string;
  shorts: Short[];
}

const Hobbies = () => {
  const [selectedShort, setSelectedShort] = useState<Short | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const hobbyCategories: Category[] = [
    {
      id: 'rustyrider',
      title: 'RustyRider',
      icon: Bike,
      tagline: 'Raw roads, rusted tales',
      gradient: 'from-orange-500 to-amber-600',
      shorts: [
        { id: 'zYkXb1VnLzg', title: 'First Cold Start of the Season', views: '12K', uploadedAt: '2 weeks ago', description: 'Waking up the beast after months.' },
        { id: '9gXvX1JrPnQ', title: 'Rain Ride Therapy', views: '8.5K', uploadedAt: '1 month ago', description: 'When the weather tests your spirit.' },
        { id: 'Kj5TL1l5MFc', title: 'Night City Cruise', views: '15K', uploadedAt: '3 months ago', description: 'Mumbai lights from two wheels.' },
      ]
    },
    {
      id: 'whitewrath',
      title: 'WhiteWrath',
      icon: Flame,
      tagline: 'The G310RR chronicles',
      gradient: 'from-slate-100 to-zinc-300',
      shorts: [
        { id: 'mMwP0Xh5Xzw', title: 'Full Circle Moment', views: '25K', uploadedAt: '1 week ago', description: 'Reclaiming what I once sacrificed.' },
        { id: 'Q5dU6serXkg', title: 'First 1000km Service', views: '18K', uploadedAt: '2 months ago', description: 'Breaking in the new machine.' },
      ]
    },
    {
      id: 'adventure',
      title: 'Adventure',
      icon: Compass,
      tagline: 'Beyond the horizon',
      gradient: 'from-emerald-500 to-teal-600',
      shorts: [
        { id: 'LxYfGtXpRpA', title: 'Sunrise at Lonavala', views: '42K', uploadedAt: '3 days ago', description: 'Chasing the golden hour.' },
        { id: 'qHGXKrPgbZs', title: 'Coastal Highway Run', views: '31K', uploadedAt: '2 weeks ago', description: 'Konkan on two wheels.' },
        { id: 'JXgV1rXk9ns', title: 'Monsoon Madness', views: '22K', uploadedAt: '1 month ago', description: 'When nature shows its fury.' },
        { id: 'R8N3TyQvLsE', title: 'Western Ghats Trail', views: '19K', uploadedAt: '6 weeks ago', description: 'Green valleys and winding roads.' },
      ]
    },
    {
      id: 'rides',
      title: 'Rides',
      icon: Route,
      tagline: 'Journey over destination',
      gradient: 'from-violet-500 to-purple-600',
      shorts: [
        { id: 'VwXpKsL3qhY', title: 'Weekend Breakfast Ride', views: '14K', uploadedAt: '5 days ago', description: 'Coffee, chaos, and comrades.' },
        { id: 'FhTnXkWv1Bc', title: 'Midnight Express', views: '28K', uploadedAt: '3 weeks ago', description: 'When the city sleeps, we ride.' },
      ]
    },
  ];

  const allShorts = hobbyCategories.flatMap(cat => 
    cat.shorts.map(short => ({ ...short, category: cat.id, categoryTitle: cat.title, gradient: cat.gradient }))
  );

  const filteredShorts = activeCategory === 'all' 
    ? allShorts 
    : allShorts.filter(s => s.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Creative Page Header */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        
        <div className="container-blog relative">
          <div className="flex flex-col items-center text-center">
            {/* Decorative Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Bike className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Life on Two Wheels</span>
            </div>
            
            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl font-serif font-light text-foreground tracking-wide mb-4">
              THE RIDER'S
              <span className="block text-primary mt-2">SPIRIT</span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Short stories from the saddle. Quick glimpses of freedom, 
              resilience, and the open road captured in vertical frames.
            </p>

            {/* Stats Row */}
            <div className="flex gap-8 mt-8 pt-8 border-t border-border/50">
              <div className="text-center">
                <span className="block text-3xl font-light text-foreground">{allShorts.length}</span>
                <span className="text-sm text-muted-foreground">Shorts</span>
              </div>
              <div className="text-center">
                <span className="block text-3xl font-light text-foreground">{hobbyCategories.length}</span>
                <span className="text-sm text-muted-foreground">Series</span>
              </div>
              <div className="text-center">
                <span className="block text-3xl font-light text-foreground">BMW</span>
                <span className="text-sm text-muted-foreground">G310RR</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Pills */}
      <nav className="sticky top-20 z-40 bg-background/80 backdrop-blur-md border-y border-border">
        <div className="container-blog py-4">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide justify-center flex-wrap">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === 'all'
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25'
                  : 'bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground'
              }`}
            >
              All Shorts
            </button>
            {hobbyCategories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                    activeCategory === category.id
                      ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25'
                      : 'bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {category.title}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Shorts Grid */}
      <main id="main-content" className="container-blog py-12">
        {/* Category Header (when filtered) */}
        {activeCategory !== 'all' && (
          <div className="text-center mb-12">
            {(() => {
              const cat = hobbyCategories.find(c => c.id === activeCategory);
              if (!cat) return null;
              const Icon = cat.icon;
              return (
                <>
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${cat.gradient} mb-4`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-serif font-light text-foreground mb-2">{cat.title}</h2>
                  <p className="text-muted-foreground italic">{cat.tagline}</p>
                </>
              );
            })()}
          </div>
        )}

        {/* Shorts Grid Container with Overall Overlay */}
        <div className="relative">
          {/* Shorts Grid - Vertical/Portrait Layout */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {filteredShorts.map((short, index) => (
              <div 
                key={`${short.category}-${index}`}
                className="group"
              >
                {/* Short Thumbnail - 9:16 Aspect Ratio */}
                <div className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-muted shadow-lg">
                  <img
                    src={`https://img.youtube.com/vi/${short.id}/maxresdefault.jpg`}
                    alt={short.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                  {/* Category Badge */}
                  <div className={`absolute top-3 left-3 px-2.5 py-1 rounded-full bg-gradient-to-r ${short.gradient} text-white text-[10px] font-semibold uppercase tracking-wider`}>
                    {short.categoryTitle}
                  </div>

                  {/* Shorts Badge */}
                  <div className="absolute top-3 right-3 px-2 py-1 rounded bg-red-600 text-white text-[10px] font-bold flex items-center gap-1">
                    <Play className="w-2.5 h-2.5" fill="currentColor" />
                    SHORTS
                  </div>

                  {/* Bottom Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-medium text-white text-sm leading-tight line-clamp-2 mb-2">
                      {short.title}
                    </h3>
                    
                    <div className="flex items-center gap-2 text-[11px] text-white/70">
                      <div className="flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        <span>{short.views}</span>
                      </div>
                      <span>•</span>
                      <span>{short.uploadedAt}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Full Page Coming Soon Overlay - 60% opacity */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] rounded-3xl flex items-center justify-center">
            <div className="text-center">
              {/* Decorative top line */}
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-16 h-px bg-white/30" />
                <Bike className="w-6 h-6 text-white/50" />
                <div className="w-16 h-px bg-white/30" />
              </div>
              
              {/* Coming Soon Text */}
              <span className="block text-sm uppercase tracking-[0.4em] text-white/60 mb-3">Stay Tuned</span>
              <h2 className="text-4xl md:text-6xl font-serif font-light text-white tracking-wide mb-4">
                Coming Soon
              </h2>
              <p className="text-white/70 max-w-md mx-auto text-lg">
                Exciting motorcycle content is on its way. Subscribe to get notified!
              </p>
              
              {/* Decorative bottom line */}
              <div className="flex items-center justify-center gap-4 mt-8">
                <div className="w-24 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center py-16 bg-gradient-to-br from-muted/50 via-background to-muted/50 rounded-3xl border border-border/50">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600/10 border border-red-600/20 mb-6">
            <Play className="w-4 h-4 text-red-600" fill="currentColor" />
            <span className="text-sm font-medium text-red-600">YouTube Shorts</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-serif font-light text-foreground mb-4">
            More Rides Coming Soon
          </h3>
          <p className="text-muted-foreground max-w-lg mx-auto mb-8">
            Follow along for quick vertical stories from the road, 
            behind-the-scenes moments, and spontaneous adventures.
          </p>
          <a
            href="https://www.youtube.com/@RustyRidersPune"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-full transition-all font-medium shadow-lg shadow-red-600/25 hover:shadow-xl hover:shadow-red-600/30 hover:-translate-y-0.5"
          >
            <Play className="h-5 w-5" fill="currentColor" />
            Subscribe on YouTube
          </a>
        </div>
      </main>

      {/* Short Player Dialog - Vertical Format */}
      <Dialog open={!!selectedShort} onOpenChange={(open) => !open && setSelectedShort(null)}>
        <DialogContent className="max-w-sm p-0 overflow-hidden bg-black border-none">
          <div className="aspect-[9/16] w-full relative">
            {selectedShort && (
              <>
                <iframe
                  src={`https://www.youtube.com/embed/${selectedShort.id}?autoplay=1`}
                  title={selectedShort.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                {/* Overlay Info */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent pointer-events-none">
                  <h3 className="font-medium text-white text-lg mb-2">
                    {selectedShort.title}
                  </h3>
                  <p className="text-sm text-white/80 mb-2">
                    {selectedShort.description}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-white/60">
                    <Eye className="w-3.5 h-3.5" />
                    <span>{selectedShort.views} views</span>
                    <span>•</span>
                    <span>{selectedShort.uploadedAt}</span>
                  </div>
                </div>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
      
      <Footer />
    </div>
  );
};

export default Hobbies;

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Play, Music, Camera, Gamepad2, Utensils, Mountain } from 'lucide-react';

const Hobbies = () => {
  const hobbyCategories = [
    {
      id: 'music',
      title: 'Music & Instruments',
      icon: Music,
      description: 'Exploring melodies and rhythms through various instruments',
      videos: [
        { id: 'dQw4w9WgXcQ', title: 'Guitar Session', duration: '4:32' },
        { id: 'dQw4w9WgXcQ', title: 'Piano Practice', duration: '6:15' },
        { id: 'dQw4w9WgXcQ', title: 'Jam Session', duration: '8:42' },
      ]
    },
    {
      id: 'photography',
      title: 'Photography & Videography',
      icon: Camera,
      description: 'Capturing moments and telling stories through the lens',
      videos: [
        { id: 'dQw4w9WgXcQ', title: 'Landscape Photography Tips', duration: '12:08' },
        { id: 'dQw4w9WgXcQ', title: 'Street Photography Walk', duration: '15:23' },
      ]
    },
    {
      id: 'gaming',
      title: 'Gaming & Esports',
      icon: Gamepad2,
      description: 'From casual gaming to competitive esports adventures',
      videos: [
        { id: 'dQw4w9WgXcQ', title: 'Strategy Game Playthrough', duration: '45:12' },
        { id: 'dQw4w9WgXcQ', title: 'Retro Gaming Night', duration: '28:45' },
        { id: 'dQw4w9WgXcQ', title: 'Game Review', duration: '18:30' },
        { id: 'dQw4w9WgXcQ', title: 'Multiplayer Fun', duration: '32:15' },
      ]
    },
    {
      id: 'cooking',
      title: 'Cooking & Culinary Arts',
      icon: Utensils,
      description: 'Experimenting with flavors and creating delicious dishes',
      videos: [
        { id: 'dQw4w9WgXcQ', title: 'Weekend Cooking Vlog', duration: '10:45' },
        { id: 'dQw4w9WgXcQ', title: 'Traditional Recipe', duration: '14:22' },
      ]
    },
    {
      id: 'outdoor',
      title: 'Outdoor Adventures',
      icon: Mountain,
      description: 'Hiking, trekking, and exploring the great outdoors',
      videos: [
        { id: 'dQw4w9WgXcQ', title: 'Mountain Trek Vlog', duration: '22:18' },
        { id: 'dQw4w9WgXcQ', title: 'Camping Experience', duration: '35:42' },
        { id: 'dQw4w9WgXcQ', title: 'Nature Walk', duration: '16:55' },
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-primary/10 via-primary/5 to-background">
        <div className="container-blog text-center">
          <h1 className="text-5xl md:text-7xl font-serif font-light text-foreground tracking-wide mb-6">
            HOBBIES
          </h1>
          <div className="w-16 h-0.5 bg-primary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Life beyond code. Exploring passions, learning new skills, and sharing 
            the journey through video content.
          </p>
        </div>
      </section>

      {/* Category Navigation */}
      <nav className="sticky top-20 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container-blog py-4">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {hobbyCategories.map((category) => {
              const Icon = category.icon;
              return (
                <a
                  key={category.id}
                  href={`#${category.id}`}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all whitespace-nowrap text-sm font-medium"
                >
                  <Icon className="h-4 w-4" />
                  {category.title}
                </a>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main id="main-content" className="container-blog py-12">
        <div className="space-y-20">
          {hobbyCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <section 
                key={category.id} 
                id={category.id}
                className="scroll-mt-40"
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-serif font-light text-foreground">
                      {category.title}
                    </h2>
                    <p className="text-muted-foreground mt-1">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Videos Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {category.videos.map((video, videoIndex) => (
                    <div 
                      key={videoIndex}
                      className="group cursor-pointer"
                    >
                      {/* Video Thumbnail */}
                      <div className="relative aspect-video rounded-lg overflow-hidden bg-muted mb-3">
                        <img
                          src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                          alt={video.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        {/* Play Overlay */}
                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center">
                            <Play className="h-6 w-6 text-primary-foreground ml-1" fill="currentColor" />
                          </div>
                        </div>
                        {/* Duration Badge */}
                        <span className="absolute bottom-2 right-2 px-2 py-0.5 bg-black/80 text-white text-xs rounded">
                          {video.duration}
                        </span>
                      </div>
                      {/* Video Info */}
                      <h3 className="font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {video.title}
                      </h3>
                    </div>
                  ))}
                </div>

                {/* Section Divider */}
                {categoryIndex < hobbyCategories.length - 1 && (
                  <div className="mt-16 border-b border-border/50" />
                )}
              </section>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center py-12 bg-muted/30 rounded-2xl">
          <h3 className="text-2xl font-serif font-light text-foreground mb-4">
            More Content Coming Soon
          </h3>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Subscribe to my YouTube channel to stay updated with new hobby videos 
            and behind-the-scenes content.
          </p>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors font-medium"
          >
            <Play className="h-5 w-5" fill="currentColor" />
            Subscribe on YouTube
          </a>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Hobbies;

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import vendimanMax from '@/assets/vendiman-max.png';
import mhPolice from '@/assets/mh-police.png';
import mobileGames from '@/assets/mobile-games.png';
import nmmcEgovernance from '@/assets/nmmc-egovernance.png';
import guppaai from '@/assets/guppaai.png';
import nepalPolice from '@/assets/nepal-police.png';
import bmcPothole from '@/assets/bmc-pothole.png';

const categories = ['All', 'Web Apps', 'Mobile Apps', 'AI/ML/CV', 'eGovernance'];

const masonryPosts = [
  {
    title: "Vendiman",
    category: "AI/ML/CV",
    date: "2024",
    excerpt: "Autonomous Retail & Anti-Fraud Intelligence Platform with sensor fusion and real-time fraud prevention.",
    image: vendimanMax,
    height: "tall",
    slug: "vendiman"
  },
  {
    title: "Maharashtra Police - Dial 100",
    category: "eGovernance",
    date: "2019",
    excerpt: "Real-Time Command & Control Platform unifying call handling, dispatch, and field execution.",
    image: mhPolice,
    height: "tall",
    slug: "maharashtra-police-dial-100"
  },
  {
    title: "Mobile Games Development",
    category: "Mobile Apps",
    date: "2020",
    excerpt: "Simulation Games & Game Production Collaboration with Cypher Gamez.",
    image: mobileGames,
    height: "medium",
    slug: "mobile-games-development"
  },
  {
    title: "Guppa.ai",
    category: "AI/ML/CV",
    date: "2025",
    excerpt: "Conversational AI platform with natural language processing capabilities.",
    image: guppaai,
    height: "medium",
    slug: "guppa-ai"
  },
  {
    title: "NMMC Portal",
    category: "Web Apps",
    date: "2024",
    excerpt: "Enterprise ERP platform for Navi Mumbai Municipal Corporation with 21 integrated modules.",
    image: nmmcEgovernance,
    height: "medium",
    slug: "nmmc-portal"
  },
  {
    title: "Nepal Police",
    category: "eGovernance",
    date: "2024",
    excerpt: "International police modernization project with comprehensive digital systems.",
    image: nepalPolice,
    height: "short",
    slug: "nepal-police"
  },
  {
    title: "BMC Pothole",
    category: "Mobile Apps",
    date: "2022",
    excerpt: "Citizen Grievance & Field Operations Platform with GPS-based complaint registration.",
    image: bmcPothole,
    height: "medium",
    slug: "bmc-pothole"
  }
];

const MasonryBlock = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const getHeightClass = (height: string) => {
    switch (height) {
      case 'tall':
        return 'row-span-3';
      case 'medium':
        return 'row-span-2';
      case 'short':
        return 'row-span-1';
      default:
        return 'row-span-2';
    }
  };

  const filteredPosts = selectedCategory === 'All' 
    ? masonryPosts 
    : masonryPosts.filter(post => post.category === selectedCategory);

  // Ensure even number of items
  const displayPosts = filteredPosts.length % 2 === 0 
    ? filteredPosts 
    : filteredPosts.slice(0, -1);

  return (
    <section className="container-blog py-16">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <h2 id="masonry-heading" className="section-title mb-0">Featured Projects</h2>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className="text-xs"
            >
              {category}
            </Button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 auto-rows-[180px]" style={{ gridAutoFlow: 'row dense' }}>
        {displayPosts.map((post, index) => {
          const projectSlug = post.slug || post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
          return (
            <Link
              key={index}
              to={`/projects/${projectSlug}`}
              className={`group cursor-pointer ${getHeightClass(post.height)} transition-all duration-300 hover:scale-[1.02] hover:shadow-lg block`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative w-full h-full rounded-lg overflow-hidden bg-card border border-border">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                  width="294"
                  height={post.height === 'tall' ? '540' : post.height === 'medium' ? '360' : '180'}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 294px"
                  style={{ minHeight: '100%', maxHeight: '100%' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-medium bg-primary/80 px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs opacity-80">{post.date}</span>
                  </div>
                  <h3 className="font-bold text-sm md:text-base mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  {hoveredIndex === index && post.excerpt && (
                    <p className="text-xs opacity-90 line-clamp-2 transition-opacity duration-300">
                      {post.excerpt}
                    </p>
                  )}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      {displayPosts.length === 0 && (
        <p className="text-center text-muted-foreground py-8">No projects found in this category.</p>
      )}
      <div className="text-center mt-8">
        <Link to="/projects">
          <Button variant="outline" size="lg">
            View All Projects
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default MasonryBlock;

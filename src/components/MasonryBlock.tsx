import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import vendimanMax from '@/assets/vendiman-max.png';
import mhPolice from '@/assets/mh-police.png';
import mobileGames from '@/assets/mobile-games.png';
import nmmcEgovernance from '@/assets/nmmc-egovernance.png';
import pcmcEgovernance from '@/assets/pcmc-egovernance.png';
import nepalPolice from '@/assets/nepal-police.png';
import scLandrecords from '@/assets/sc-landrecords.png';
import mhadaApp from '@/assets/mhada-app.png';
import dmsApp from '@/assets/dms-app.png';
import bajajFinserv from '@/assets/bajaj-finserv.png';
import nmmcDashboard from '@/assets/nmmc-dashboard.png';
import lomAi from '@/assets/lom-ai.png';

const categories = ['All', 'Web Apps', 'Mobile Apps', 'AI/ML/CV', 'eGovernance', 'BI Dashboards'];

const masonryPosts = [
  {
    title: "DMS",
    category: "Web Apps",
    date: "2025",
    excerpt: "Unified Sales, Service & Operations Platform for multi-brand distributor with 10% business throughput increase.",
    image: dmsApp,
    height: "tall",
    slug: "dms"
  },
  {
    title: "SC Land Records",
    category: "Web Apps",
    date: "2022",
    excerpt: "Unified Citizen Services Platform providing access to 70+ land record services for Maharashtra citizens.",
    image: scLandrecords,
    height: "tall",
    slug: "sc-land-records"
  },
  {
    title: "MHADA App",
    category: "Mobile Apps",
    date: "2023",
    excerpt: "Digital Housing Lottery & Verification Platform with OCR-based document verification.",
    image: mhadaApp,
    height: "medium",
    slug: "mhada-app"
  },
  {
    title: "PCMC Portal",
    category: "eGovernance",
    date: "2024",
    excerpt: "Enterprise ERP & GIS platform for Pimpri Chinchwad Municipal Corporation under Smart City mission.",
    image: pcmcEgovernance,
    height: "medium",
    slug: "pcmc-portal"
  },
  {
    title: "NMMC Portal",
    category: "eGovernance",
    date: "2024",
    excerpt: "Enterprise ERP platform for Navi Mumbai Municipal Corporation with 21 integrated modules.",
    image: nmmcEgovernance,
    height: "medium",
    slug: "nmmc-portal"
  },
  {
    title: "Nepal Police Dashboard",
    category: "BI Dashboards",
    date: "2024",
    excerpt: "Police analytics and performance monitoring dashboard for Nepal Police modernization.",
    image: nepalPolice,
    height: "medium",
    slug: "nepal-police"
  },
  {
    title: "Bajaj Finserv",
    category: "BI Dashboards",
    date: "2023",
    excerpt: "Financial services analytics dashboard for business intelligence and performance tracking.",
    image: bajajFinserv,
    height: "short",
    slug: "bajaj-finserv"
  },
  {
    title: "NMMC Dashboards",
    category: "BI Dashboards",
    date: "2024",
    excerpt: "Municipal analytics and MIS dashboards for senior leadership decision-making.",
    image: nmmcDashboard,
    height: "medium",
    slug: "nmmc-dashboards"
  },
  {
    title: "Laws of Motion",
    category: "AI/ML/CV",
    date: "2022",
    excerpt: "Interactive physics learning app with simulations and AI-powered tutoring.",
    image: lomAi,
    height: "tall",
    slug: "laws-of-motion"
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

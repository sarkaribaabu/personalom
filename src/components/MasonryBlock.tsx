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
import guppaai from '@/assets/guppaai.png';
import pngBrothers from '@/assets/png-brothers.png';
import csJewellers from '@/assets/cs-jewellers.png';
import smithNephew from '@/assets/smith-nephew.png';

// Categories matching Projects page
const categories = ['All', 'Web Apps', 'Mobile Apps', 'AI/ML/CV', 'eGovernance', 'eCommerce', 'BI Dashboards'];

// Selected projects from each category for home page glimpse
const masonryPosts = [
  // Web Apps (3 projects)
  {
    title: "Smith+Nephew Surgical Planner",
    category: "Web Apps",
    date: "2025",
    excerpt: "AI-powered pre-operative surgical planning platform with interactive visualization and parameter-based simulation.",
    image: smithNephew,
    height: "tall",
    slug: "smith-nephew-surgical-planner"
  },
  {
    title: "Vendiman",
    category: "Web Apps",
    date: "2024",
    excerpt: "Autonomous Retail & Anti-Fraud Intelligence Platform with sensor fusion and real-time fraud prevention.",
    image: vendimanMax,
    height: "medium",
    slug: "vendiman"
  },
  {
    title: "SC Land Records",
    category: "Web Apps",
    date: "2022",
    excerpt: "Unified Citizen Services Platform providing access to 70+ land record services for Maharashtra citizens.",
    image: scLandrecords,
    height: "medium",
    slug: "sc-land-records"
  },

  // Mobile Apps (2 projects)
  {
    title: "MHADA App",
    category: "Mobile Apps",
    date: "2023",
    excerpt: "Digital Housing Lottery & Verification Platform with OCR-based document verification.",
    image: mhadaApp,
    height: "tall",
    slug: "mhada-app"
  },
  {
    title: "Mobile Games Development",
    category: "Mobile Apps",
    date: "2021",
    excerpt: "Simulation Games & Game Production Collaboration with Train Simulator, Rescue Ship, and Offroad simulations.",
    image: mobileGames,
    height: "medium",
    slug: "mobile-games-development"
  },

  // AI/ML/CV (2 projects)
  {
    title: "Laws of Motion",
    category: "AI/ML/CV",
    date: "2022",
    excerpt: "AI-Driven Custom Apparel Platform with 1,260 microsizes and zero-waste on-demand manufacturing.",
    image: lomAi,
    height: "tall",
    slug: "laws-of-motion"
  },
  {
    title: "GuppaAI",
    category: "AI/ML/CV",
    date: "2025",
    excerpt: "Conversational AI Platform enabling intent-driven discovery and decision-making with natural language interaction.",
    image: guppaai,
    height: "medium",
    slug: "guppaai"
  },

  // eGovernance (2 projects)
  {
    title: "Maharashtra Police - Dial 100",
    category: "eGovernance",
    date: "2019",
    excerpt: "Real-Time Command & Control Platform unifying call handling, dispatch, field execution, and post-incident verification.",
    image: mhPolice,
    height: "tall",
    slug: "maharashtra-police-dial-100"
  },
  {
    title: "NMMC eGovernance",
    category: "eGovernance",
    date: "2024",
    excerpt: "Comprehensive ERP solution with 21 modules serving 52+ citizen services for NMMC.",
    image: nmmcEgovernance,
    height: "medium",
    slug: "nmmc-egovernance"
  },

  // eCommerce (2 projects)
  {
    title: "PNG Brothers",
    category: "eCommerce",
    date: "2022",
    excerpt: "Phygital Jewelry Ecommerce Platform combining online convenience with in-store credibility and trust.",
    image: pngBrothers,
    height: "tall",
    slug: "png-brothers"
  },
  {
    title: "CS Jewellers",
    category: "eCommerce",
    date: "2016",
    excerpt: "Phygital Ecommerce & B2B Inventory Platform with dual-layer B2C and B2B capabilities across 36 stores.",
    image: csJewellers,
    height: "medium",
    slug: "cs-jewellers"
  },

  // BI Dashboards (2 projects)
  {
    title: "Nepal Police Dashboard",
    category: "BI Dashboards",
    date: "2024",
    excerpt: "National Policing Analytics Platform with AI-powered predictive insights and crime heatmaps.",
    image: nepalPolice,
    height: "medium",
    slug: "nepal-police-dashboard"
  },
  {
    title: "NMMC Dashboard",
    category: "BI Dashboards",
    date: "2024",
    excerpt: "Commissionerate-Level Decision Intelligence with unified Power BI analytics across 15+ departments.",
    image: nmmcDashboard,
    height: "medium",
    slug: "nmmc-dashboard"
  }
];

const MasonryBlock = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const getHeightClass = (height: string) => {
    switch (height) {
      case 'tall':
        return 'row-span-2';
      case 'medium':
        return 'row-span-1';
      case 'short':
        return 'row-span-1';
      default:
        return 'row-span-1';
    }
  };

  const filteredPosts = selectedCategory === 'All' 
    ? masonryPosts 
    : masonryPosts.filter(post => post.category === selectedCategory);

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
      
      {/* Masonry Grid */}
      <div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        style={{ 
          gridAutoRows: '200px',
          gridAutoFlow: 'dense'
        }}
      >
        {filteredPosts.map((post, index) => {
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
      
      {filteredPosts.length === 0 && (
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

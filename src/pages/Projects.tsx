import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import businessPost from '@/assets/business-post.jpg';
import techPost from '@/assets/tech-post.jpg';
import fashionPost from '@/assets/fashion-post.jpg';
import lifestylePost from '@/assets/lifestyle-post.jpg';
import workLifestyle from '@/assets/work-lifestyle.jpg';
import fashionLifestyle from '@/assets/fashion-lifestyle.jpg';
import nmmcEgovernance from '@/assets/nmmc-egovernance.png';
import pcmcEgovernance from '@/assets/pcmc-egovernance.png';
import nmPoliceBi from '@/assets/nm-police-bi.png';
import scLandrecords from '@/assets/sc-landrecords.png';
import mhadaApp from '@/assets/mhada-app.png';

const categories = ['All', 'Web Apps', 'Mobile Apps', 'AI/ML/CV', 'eGovernance', 'eCommerce', 'BI Dashboards'];

const images = [businessPost, techPost, fashionPost, lifestylePost, workLifestyle, fashionLifestyle];

const projects = [
  // Web Apps (12 projects)
  {
    title: "SC Land Records",
    category: "Web Apps",
    date: "2022",
    excerpt: "Unified Citizen Services Platform providing access to 70+ land record services for Maharashtra citizens.",
    image: scLandrecords,
    height: "tall"
  },
  {
    title: "NMMC Portal",
    category: "Web Apps",
    date: "2024",
    excerpt: "Enterprise ERP platform for Navi Mumbai Municipal Corporation with 21 integrated modules.",
    image: nmmcEgovernance,
    height: "medium"
  },
  {
    title: "PCMC Portal",
    category: "Web Apps",
    date: "2024",
    excerpt: "Enterprise ERP & GIS platform for Pimpri Chinchwad Municipal Corporation under Smart City mission.",
    image: pcmcEgovernance,
    height: "medium"
  },
  {
    title: "MHADA Portal",
    category: "Web Apps",
    date: "2023",
    excerpt: "Maharashtra Housing and Area Development Authority housing management system.",
    image: images[3],
    height: "short"
  },
  {
    title: "DMS",
    category: "Web Apps",
    date: "2025",
    excerpt: "Document Management System with advanced search, versioning, and workflow automation.",
    image: images[4],
    height: "medium"
  },
  {
    title: "Jnana Prabodhini",
    category: "Web Apps",
    date: "2018",
    excerpt: "Educational institution portal with student management and learning resources.",
    image: images[5],
    height: "short"
  },
  {
    title: "L&T Defense",
    category: "Web Apps",
    date: "2020",
    excerpt: "Defense sector application for project management and resource allocation.",
    image: images[0],
    height: "medium"
  },
  {
    title: "Cipla",
    category: "Web Apps",
    date: "2025",
    excerpt: "Pharmaceutical industry web application for operations and compliance management.",
    image: images[1],
    height: "tall"
  },
  {
    title: "Glasban",
    category: "Web Apps",
    date: "2025",
    excerpt: "Enterprise web application for business process automation and management.",
    image: images[2],
    height: "short"
  },
  {
    title: "Smith+Nephew's Portal",
    category: "Web Apps",
    date: "2024",
    excerpt: "Medical devices company portal for inventory and distribution management.",
    image: images[3],
    height: "medium"
  },
  {
    title: "Dr. Reddy's Lab",
    category: "Web Apps",
    date: "2024",
    excerpt: "Pharmaceutical laboratory management system with compliance tracking.",
    image: images[4],
    height: "medium"
  },
  {
    title: "Vendiman",
    category: "Web Apps",
    date: "2024",
    excerpt: "Vendor management platform with onboarding and performance analytics.",
    image: images[5],
    height: "short"
  },

  // Mobile Apps (10 projects)
  {
    title: "eTechSchool",
    category: "Mobile Apps",
    date: "2019",
    excerpt: "Educational mobile app with interactive learning modules and progress tracking.",
    image: images[3],
    height: "tall"
  },
  {
    title: "NMMC App",
    category: "Mobile Apps",
    date: "2024",
    excerpt: "Navi Mumbai Municipal Corporation mobile app for citizen services on-the-go.",
    image: images[4],
    height: "medium"
  },
  {
    title: "PCMC App",
    category: "Mobile Apps",
    date: "2024",
    excerpt: "Pimpri Chinchwad Municipal Corporation mobile application for civic services.",
    image: images[5],
    height: "medium"
  },
  {
    title: "MHADA App",
    category: "Mobile Apps",
    date: "2023",
    excerpt: "Digital Housing Lottery & Verification Platform with OCR-based document verification and Aadhaar-based uniqueness validation.",
    image: mhadaApp,
    height: "tall"
  },
  {
    title: "PWD Pothole",
    category: "Mobile Apps",
    date: "2023",
    excerpt: "Public Works Department pothole reporting and tracking application.",
    image: images[1],
    height: "medium"
  },
  {
    title: "BMC Pothole",
    category: "Mobile Apps",
    date: "2022",
    excerpt: "Brihanmumbai Municipal Corporation pothole complaint and resolution app.",
    image: images[2],
    height: "short"
  },
  {
    title: "Smith+Nephew's App",
    category: "Mobile Apps",
    date: "2025",
    excerpt: "Medical devices field service mobile application for technicians.",
    image: images[3],
    height: "medium"
  },
  {
    title: "Laws Of Motion",
    category: "Mobile Apps",
    date: "2022",
    excerpt: "Interactive physics learning app with simulations and AI-powered tutoring.",
    image: images[4],
    height: "tall"
  },
  {
    title: "BMC Disaster Management",
    category: "Mobile Apps",
    date: "2021",
    excerpt: "Emergency response and disaster management mobile application for BMC.",
    image: images[5],
    height: "medium"
  },
  {
    title: "Mobile Games Development",
    category: "Mobile Apps",
    date: "2021",
    excerpt: "Suite of casual mobile games with engaging gameplay mechanics.",
    image: images[0],
    height: "short"
  },

  // AI/ML/CV (3 projects)
  {
    title: "Laws of Motion AI",
    category: "AI/ML/CV",
    date: "2022",
    excerpt: "AI-powered physics education platform with intelligent tutoring and adaptive learning.",
    image: images[5],
    height: "tall"
  },
  {
    title: "Clairity",
    category: "AI/ML/CV",
    date: "2024",
    excerpt: "Computer vision solution for clarity assessment and image analysis.",
    image: images[0],
    height: "medium"
  },
  {
    title: "Guppa.ai",
    category: "AI/ML/CV",
    date: "2025",
    excerpt: "Conversational AI platform with natural language processing capabilities.",
    image: images[1],
    height: "medium"
  },

  // eGovernance (11 projects)
  {
    title: "NMMC eGovernance",
    category: "eGovernance",
    date: "2024",
    excerpt: "Comprehensive ERP solution with 21 modules serving 52+ citizen services for NMMC.",
    image: nmmcEgovernance,
    height: "tall"
  },
  {
    title: "PCMC eGovernance",
    category: "eGovernance",
    date: "2024",
    excerpt: "Enterprise ERP & GIS platform with integrated modules serving PCMC Smart City initiatives.",
    image: pcmcEgovernance,
    height: "medium"
  },
  {
    title: "BMC eGovernance",
    category: "eGovernance",
    date: "2022",
    excerpt: "Brihanmumbai Municipal Corporation e-governance and citizen services platform.",
    image: images[3],
    height: "medium"
  },
  {
    title: "Thane Police",
    category: "eGovernance",
    date: "2019",
    excerpt: "Police department digitization with case management and citizen portal.",
    image: images[4],
    height: "short"
  },
  {
    title: "Chandrapur Police",
    category: "eGovernance",
    date: "2019",
    excerpt: "Law enforcement digital platform for Chandrapur district police.",
    image: images[5],
    height: "medium"
  },
  {
    title: "Navi Mumbai Police",
    category: "eGovernance",
    date: "2025",
    excerpt: "Integrated Command & Analytics Platform enabling data-driven policing with predictive insights.",
    image: nmPoliceBi,
    height: "tall"
  },
  {
    title: "Ahilyanagar Police",
    category: "eGovernance",
    date: "2019",
    excerpt: "District police digital transformation with integrated systems.",
    image: images[1],
    height: "short"
  },
  {
    title: "Nepal Police",
    category: "eGovernance",
    date: "2024",
    excerpt: "International police modernization project with comprehensive digital systems.",
    image: images[2],
    height: "medium"
  },
  {
    title: "SC Land Records eGov",
    category: "eGovernance",
    date: "2022",
    excerpt: "Unified Citizen Services Platform providing access to 70+ land record services for Maharashtra citizens.",
    image: scLandrecords,
    height: "short"
  },
  {
    title: "Turks & Caicos Island",
    category: "eGovernance",
    date: "2018",
    excerpt: "International e-governance implementation for island territory government.",
    image: images[4],
    height: "medium"
  },
  {
    title: "DRDO",
    category: "eGovernance",
    date: "2020",
    excerpt: "Defense Research and Development Organisation project management system.",
    image: images[5],
    height: "medium"
  },

  // eCommerce (3 projects)
  {
    title: "PNG Brothers",
    category: "eCommerce",
    date: "2022",
    excerpt: "Jewelry eCommerce platform with virtual try-on and certification features.",
    image: images[3],
    height: "tall"
  },
  {
    title: "CS Jewellers",
    category: "eCommerce",
    date: "2016",
    excerpt: "Online jewelry store with catalog management and secure payments.",
    image: images[4],
    height: "medium"
  },
  {
    title: "Mrugrae",
    category: "eCommerce",
    date: "2024",
    excerpt: "Fashion and lifestyle eCommerce platform with modern shopping experience.",
    image: images[5],
    height: "medium"
  },

  // BI Dashboards (6 projects)
  {
    title: "Navi Mumbai Police BI",
    category: "BI Dashboards",
    date: "2025",
    excerpt: "Integrated Command & Analytics Platform enabling data-driven policing with predictive insights.",
    image: nmPoliceBi,
    height: "tall"
  },
  {
    title: "NMMC Dashboard",
    category: "BI Dashboards",
    date: "2024",
    excerpt: "Municipal performance analytics with KPI tracking and citizen metrics.",
    image: images[1],
    height: "medium"
  },
  {
    title: "Nepal Police Dashboard",
    category: "BI Dashboards",
    date: "2024",
    excerpt: "International law enforcement analytics and reporting platform.",
    image: images[2],
    height: "medium"
  },
  {
    title: "Bajaj Finance",
    category: "BI Dashboards",
    date: "2020",
    excerpt: "Financial analytics dashboard with portfolio and risk management insights.",
    image: images[3],
    height: "short"
  },
  {
    title: "Gurukul Schools",
    category: "BI Dashboards",
    date: "2019",
    excerpt: "Educational institution analytics with student performance and enrollment tracking.",
    image: images[4],
    height: "medium"
  }
];

const Projects = () => {
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

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const getCategoryCount = (category: string) => {
    if (category === 'All') return projects.length;
    return projects.filter(p => p.category === category).length;
  };

  return (
    <>
      <Header />
      
      <main id="main-content" className="min-h-screen bg-background">
        {/* Hero Section - Compact */}
        <section className="relative overflow-hidden pt-24 pb-8">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
          <div className="absolute top-10 left-10 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-5 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
          
          <div className="container-blog relative z-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              {/* Left: Title & Subtitle */}
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full text-primary text-xs font-medium mb-3">
                  <span>45+ Projects Delivered</span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                  Projects
                </h1>
                <p className="text-sm text-muted-foreground max-w-lg leading-relaxed mt-2">
                  Enterprise solutions spanning web apps, mobile apps, AI/ML, eGovernance, eCommerce, and BI dashboards.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="container-blog py-16">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <h2 className="section-title mb-0">All Projects</h2>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="text-xs"
                >
                  {category} ({getCategoryCount(category)})
                </Button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 auto-rows-[180px]" style={{ gridAutoFlow: 'row dense' }}>
            {filteredProjects.map((project, index) => {
              const projectSlug = project.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
              return (
                <Link
                  key={index}
                  to={`/projects/${projectSlug}`}
                  className={`group cursor-pointer ${getHeightClass(project.height)} transition-all duration-300 hover:scale-[1.02] hover:shadow-lg block`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="relative w-full h-full rounded-lg overflow-hidden bg-card border border-border">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                      width="294"
                      height={project.height === 'tall' ? '540' : project.height === 'medium' ? '360' : '180'}
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 294px"
                      style={{ minHeight: '100%', maxHeight: '100%' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-medium bg-primary/80 px-2 py-1 rounded-full">
                          {project.category}
                        </span>
                        <span className="text-xs opacity-80">{project.date}</span>
                      </div>
                      <h3 className="font-bold text-sm md:text-base mb-2 line-clamp-2">
                        {project.title}
                      </h3>
                      {hoveredIndex === index && project.excerpt && (
                        <p className="text-xs opacity-90 line-clamp-2 transition-opacity duration-300">
                          {project.excerpt}
                        </p>
                      )}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          
          {filteredProjects.length === 0 && (
            <p className="text-center text-muted-foreground py-8">No projects found in this category.</p>
          )}
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Projects;

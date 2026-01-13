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

const categories = ['All', 'Web Portals', 'Mobile Apps', 'AI/ML', 'eGovernance', 'eCommerce', 'BI Dashboards'];

const images = [businessPost, techPost, fashionPost, lifestylePost, workLifestyle, fashionLifestyle];

const projects = [
  // Web Portals (9 projects)
  {
    title: "Enterprise Resource Planning Portal",
    category: "Web Portals",
    date: "2024",
    excerpt: "Comprehensive ERP solution for manufacturing companies with inventory, HR, and finance modules.",
    image: images[0],
    height: "tall"
  },
  {
    title: "Healthcare Patient Portal",
    category: "Web Portals",
    date: "2024",
    excerpt: "Patient-centric portal for appointment booking, medical records access, and telemedicine.",
    image: images[1],
    height: "medium"
  },
  {
    title: "Learning Management System",
    category: "Web Portals",
    date: "2023",
    excerpt: "Interactive LMS with course management, assessments, and progress tracking features.",
    image: images[2],
    height: "medium"
  },
  {
    title: "Real Estate Listing Platform",
    category: "Web Portals",
    date: "2023",
    excerpt: "Property listing portal with virtual tours, mortgage calculator, and agent management.",
    image: images[3],
    height: "short"
  },
  {
    title: "Corporate Intranet Portal",
    category: "Web Portals",
    date: "2023",
    excerpt: "Internal communication platform with document sharing, news feeds, and employee directory.",
    image: images[4],
    height: "medium"
  },
  {
    title: "Legal Case Management Portal",
    category: "Web Portals",
    date: "2022",
    excerpt: "End-to-end case management system for law firms with document automation.",
    image: images[5],
    height: "short"
  },
  {
    title: "Insurance Claims Portal",
    category: "Web Portals",
    date: "2022",
    excerpt: "Digital claims processing platform with automated workflows and fraud detection.",
    image: images[0],
    height: "medium"
  },
  {
    title: "Vendor Management System",
    category: "Web Portals",
    date: "2021",
    excerpt: "Centralized vendor onboarding, compliance tracking, and performance management.",
    image: images[1],
    height: "tall"
  },
  {
    title: "NGO Donation Portal",
    category: "Web Portals",
    date: "2021",
    excerpt: "Donation management platform with campaign tracking and donor engagement tools.",
    image: images[2],
    height: "short"
  },

  // Mobile Apps (8 projects)
  {
    title: "Food Delivery App",
    category: "Mobile Apps",
    date: "2024",
    excerpt: "On-demand food delivery application with real-time tracking and multi-restaurant support.",
    image: images[3],
    height: "tall"
  },
  {
    title: "Fitness & Wellness Tracker",
    category: "Mobile Apps",
    date: "2024",
    excerpt: "Health monitoring app with workout plans, nutrition tracking, and wearable integration.",
    image: images[4],
    height: "medium"
  },
  {
    title: "Banking & Finance App",
    category: "Mobile Apps",
    date: "2023",
    excerpt: "Secure mobile banking with biometric auth, fund transfers, and investment tracking.",
    image: images[5],
    height: "medium"
  },
  {
    title: "Event Management App",
    category: "Mobile Apps",
    date: "2023",
    excerpt: "Event discovery and booking app with QR ticketing and social features.",
    image: images[0],
    height: "short"
  },
  {
    title: "Field Service Management App",
    category: "Mobile Apps",
    date: "2023",
    excerpt: "Mobile solution for field technicians with job scheduling and offline capabilities.",
    image: images[1],
    height: "medium"
  },
  {
    title: "Travel Companion App",
    category: "Mobile Apps",
    date: "2022",
    excerpt: "All-in-one travel app with itinerary planning, bookings, and local recommendations.",
    image: images[2],
    height: "short"
  },
  {
    title: "Parking Finder App",
    category: "Mobile Apps",
    date: "2022",
    excerpt: "Smart parking solution with real-time availability and digital payment integration.",
    image: images[3],
    height: "medium"
  },
  {
    title: "Mental Health Support App",
    category: "Mobile Apps",
    date: "2021",
    excerpt: "Wellness app with guided meditation, mood tracking, and therapist connection.",
    image: images[4],
    height: "tall"
  },

  // AI/ML (8 projects)
  {
    title: "Predictive Maintenance System",
    category: "AI/ML",
    date: "2024",
    excerpt: "ML-powered system predicting equipment failures before they occur in manufacturing.",
    image: images[5],
    height: "tall"
  },
  {
    title: "Customer Churn Prediction",
    category: "AI/ML",
    date: "2024",
    excerpt: "AI model identifying at-risk customers and recommending retention strategies.",
    image: images[0],
    height: "medium"
  },
  {
    title: "Document Intelligence Platform",
    category: "AI/ML",
    date: "2024",
    excerpt: "OCR and NLP-based document processing with automated data extraction.",
    image: images[1],
    height: "medium"
  },
  {
    title: "Fraud Detection Engine",
    category: "AI/ML",
    date: "2023",
    excerpt: "Real-time fraud detection system for financial transactions using deep learning.",
    image: images[2],
    height: "short"
  },
  {
    title: "Chatbot & Virtual Assistant",
    category: "AI/ML",
    date: "2023",
    excerpt: "Conversational AI for customer support with multi-language capabilities.",
    image: images[3],
    height: "medium"
  },
  {
    title: "Sentiment Analysis Dashboard",
    category: "AI/ML",
    date: "2023",
    excerpt: "Social media sentiment tracking with brand monitoring and trend analysis.",
    image: images[4],
    height: "short"
  },
  {
    title: "Image Recognition System",
    category: "AI/ML",
    date: "2022",
    excerpt: "Computer vision solution for product quality inspection in manufacturing.",
    image: images[5],
    height: "medium"
  },
  {
    title: "Recommendation Engine",
    category: "AI/ML",
    date: "2022",
    excerpt: "Personalized content and product recommendations using collaborative filtering.",
    image: images[0],
    height: "tall"
  },

  // eGovernance (8 projects)
  {
    title: "Citizen Services Portal",
    category: "eGovernance",
    date: "2024",
    excerpt: "One-stop portal for government services including certificates, permits, and payments.",
    image: images[1],
    height: "tall"
  },
  {
    title: "Land Records Management System",
    category: "eGovernance",
    date: "2024",
    excerpt: "Digital land registry with blockchain-based ownership verification.",
    image: images[2],
    height: "medium"
  },
  {
    title: "Public Grievance Redressal",
    category: "eGovernance",
    date: "2023",
    excerpt: "Complaint management system with escalation workflows and resolution tracking.",
    image: images[3],
    height: "medium"
  },
  {
    title: "e-Procurement Platform",
    category: "eGovernance",
    date: "2023",
    excerpt: "Government procurement portal with tender management and vendor evaluation.",
    image: images[4],
    height: "short"
  },
  {
    title: "Election Management System",
    category: "eGovernance",
    date: "2023",
    excerpt: "End-to-end election management with voter registration and result compilation.",
    image: images[5],
    height: "medium"
  },
  {
    title: "Smart City Dashboard",
    category: "eGovernance",
    date: "2022",
    excerpt: "Integrated dashboard for urban services monitoring and citizen engagement.",
    image: images[0],
    height: "short"
  },
  {
    title: "Court Case Information System",
    category: "eGovernance",
    date: "2022",
    excerpt: "Judiciary information system with case tracking and hearing schedules.",
    image: images[1],
    height: "medium"
  },
  {
    title: "Municipality Tax Portal",
    category: "eGovernance",
    date: "2021",
    excerpt: "Property tax assessment and online payment portal for local governments.",
    image: images[2],
    height: "tall"
  },

  // eCommerce (9 projects)
  {
    title: "Multi-Vendor Marketplace",
    category: "eCommerce",
    date: "2024",
    excerpt: "B2C marketplace platform with vendor management and commission tracking.",
    image: images[3],
    height: "tall"
  },
  {
    title: "B2B Wholesale Platform",
    category: "eCommerce",
    date: "2024",
    excerpt: "Wholesale trading platform with bulk ordering and tiered pricing.",
    image: images[4],
    height: "medium"
  },
  {
    title: "Fashion eCommerce Store",
    category: "eCommerce",
    date: "2024",
    excerpt: "Apparel store with size recommendations and virtual try-on features.",
    image: images[5],
    height: "medium"
  },
  {
    title: "Grocery Delivery Platform",
    category: "eCommerce",
    date: "2023",
    excerpt: "Online grocery shopping with slot-based delivery and subscription services.",
    image: images[0],
    height: "short"
  },
  {
    title: "Electronics Marketplace",
    category: "eCommerce",
    date: "2023",
    excerpt: "Consumer electronics store with product comparisons and warranty management.",
    image: images[1],
    height: "medium"
  },
  {
    title: "Subscription Box Platform",
    category: "eCommerce",
    date: "2023",
    excerpt: "Recurring subscription commerce with customizable box curation.",
    image: images[2],
    height: "short"
  },
  {
    title: "Automobile Parts Store",
    category: "eCommerce",
    date: "2022",
    excerpt: "Auto parts ecommerce with vehicle fitment lookup and inventory management.",
    image: images[3],
    height: "medium"
  },
  {
    title: "Jewelry eCommerce Platform",
    category: "eCommerce",
    date: "2022",
    excerpt: "Luxury jewelry store with 360° product views and certification verification.",
    image: images[4],
    height: "tall"
  },
  {
    title: "Organic Products Marketplace",
    category: "eCommerce",
    date: "2021",
    excerpt: "Farm-to-table marketplace connecting organic farmers with consumers.",
    image: images[5],
    height: "short"
  },

  // BI Dashboards (8 projects)
  {
    title: "Sales Performance Dashboard",
    category: "BI Dashboards",
    date: "2024",
    excerpt: "Real-time sales analytics with pipeline tracking and forecasting.",
    image: images[0],
    height: "tall"
  },
  {
    title: "Financial Analytics Platform",
    category: "BI Dashboards",
    date: "2024",
    excerpt: "CFO dashboard with P&L analysis, cash flow monitoring, and budget tracking.",
    image: images[1],
    height: "medium"
  },
  {
    title: "HR Analytics Dashboard",
    category: "BI Dashboards",
    date: "2024",
    excerpt: "Workforce analytics covering attrition, engagement, and recruitment metrics.",
    image: images[2],
    height: "medium"
  },
  {
    title: "Supply Chain Visibility",
    category: "BI Dashboards",
    date: "2023",
    excerpt: "End-to-end supply chain monitoring with inventory and logistics insights.",
    image: images[3],
    height: "short"
  },
  {
    title: "Marketing ROI Dashboard",
    category: "BI Dashboards",
    date: "2023",
    excerpt: "Campaign performance analytics with attribution modeling and conversion tracking.",
    image: images[4],
    height: "medium"
  },
  {
    title: "Operations Efficiency Dashboard",
    category: "BI Dashboards",
    date: "2023",
    excerpt: "Manufacturing operations KPIs with OEE tracking and downtime analysis.",
    image: images[5],
    height: "short"
  },
  {
    title: "Customer 360 Dashboard",
    category: "BI Dashboards",
    date: "2022",
    excerpt: "Unified customer view with lifetime value, segments, and journey analytics.",
    image: images[0],
    height: "medium"
  },
  {
    title: "Executive KPI Dashboard",
    category: "BI Dashboards",
    date: "2022",
    excerpt: "C-suite dashboard with company-wide KPIs and strategic goal tracking.",
    image: images[1],
    height: "tall"
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
        {/* Hero Section */}
        <section className="container-blog py-16 border-b border-border">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Projects</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A portfolio of 50+ enterprise solutions spanning web portals, mobile applications, AI/ML implementations, eGovernance, eCommerce platforms, and BI dashboards.
          </p>
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

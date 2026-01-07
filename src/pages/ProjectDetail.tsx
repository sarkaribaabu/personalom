import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { 
  Building2, 
  Calendar, 
  User, 
  Layers, 
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Target,
  TrendingUp,
  BookOpen,
  ImageIcon
} from 'lucide-react';
import businessPost from '@/assets/business-post.jpg';
import techPost from '@/assets/tech-post.jpg';
import fashionPost from '@/assets/fashion-post.jpg';
import lifestylePost from '@/assets/lifestyle-post.jpg';
import workLifestyle from '@/assets/work-lifestyle.jpg';
import fashionLifestyle from '@/assets/fashion-lifestyle.jpg';

// Project data with full details
const projectsData: Record<string, {
  title: string;
  category: string;
  image: string;
  snapshot: {
    client: string;
    industry: string;
    role: string;
    duration: string;
    techStack: string[];
  };
  brief: {
    problem: string;
    context: string;
    constraints: string[];
  };
  contextAndApproach: {
    environment: string;
    challenges: string[];
    principles: string[];
    decisions: string[];
  };
  challengesThatMattered: {
    title: string;
    description: string;
  }[];
  solutionsSummary: string;
  outcomes: {
    quantitative: string[];
    qualitative: string[];
  };
  learnings: {
    keyLearnings: string[];
    improvements: string[];
    insights: string[];
  };
  gallery: string[];
}> = {
  'featured-story-main-content': {
    title: "Featured Story — Main Content",
    category: "Web Development",
    image: businessPost,
    snapshot: {
      client: "Enterprise Financial Services",
      industry: "Banking & Finance",
      role: "Lead Product Manager",
      duration: "18 months",
      techStack: ["React", "Node.js", "PostgreSQL", "AWS", "Docker"]
    },
    brief: {
      problem: "Legacy core banking system was hindering digital transformation initiatives, causing significant delays in product launches and customer onboarding processes.",
      context: "The organization needed to modernize their customer-facing applications while maintaining regulatory compliance and ensuring zero downtime during the transition.",
      constraints: [
        "Strict regulatory compliance requirements (RBI guidelines)",
        "24/7 availability mandate with 99.99% uptime SLA",
        "Integration with 15+ legacy systems",
        "Phased rollout across 500+ branches"
      ]
    },
    contextAndApproach: {
      environment: "The existing infrastructure comprised decades-old COBOL-based systems with limited API capabilities. Multiple teams operated in silos with varying levels of technical maturity.",
      challenges: [
        "Fragmented data across multiple legacy databases",
        "Resistance to change from traditional banking operations teams",
        "Regulatory audits scheduled during the implementation phase",
        "Limited documentation of existing business logic"
      ],
      principles: [
        "Incremental modernization over big-bang replacement",
        "API-first architecture to enable future flexibility",
        "Security and compliance as foundational requirements",
        "User-centric design with continuous feedback loops"
      ],
      decisions: [
        "Chose strangler fig pattern for gradual legacy replacement",
        "Implemented event-driven architecture for real-time processing",
        "Established cross-functional pods over traditional team structures"
      ]
    },
    challengesThatMattered: [
      {
        title: "Data Migration Without Downtime",
        description: "Migrating 10+ years of transactional data while ensuring zero impact on daily operations required innovative dual-write patterns and careful orchestration."
      },
      {
        title: "Regulatory Compliance During Transition",
        description: "Maintaining audit trails and compliance reporting across both old and new systems during the 18-month transition period required building temporary bridge solutions."
      }
    ],
    solutionsSummary: "To address legacy system limitations, we implemented a Redis-based caching layer with eventual consistency guarantees, reducing response times from 8 seconds to 200ms. For team capability gaps, we established an internal academy with hands-on workshops, achieving 90% cloud-native certification within 6 months.",
    outcomes: {
      quantitative: [
        "60% reduction in customer onboarding time",
        "99.97% system uptime achieved",
        "40% decrease in operational costs",
        "3x improvement in transaction processing speed"
      ],
      qualitative: [
        "Significantly improved developer experience and productivity",
        "Enhanced regulatory confidence with real-time compliance dashboards",
        "Established foundation for future digital banking initiatives"
      ]
    },
    learnings: {
      keyLearnings: [
        "Early stakeholder alignment prevents costly mid-project pivots",
        "Technical debt should be addressed incrementally, not deferred indefinitely"
      ],
      improvements: [
        "Would have invested more in automated testing from day one",
        "Earlier involvement of operations team in design decisions"
      ],
      insights: [
        "Change management is as critical as technical excellence in enterprise transformations"
      ]
    },
    gallery: [businessPost, techPost, fashionPost, lifestylePost, workLifestyle, fashionLifestyle]
  },
  'story-title-content-preview': {
    title: "Story Title — Content Preview",
    category: "AI/ML",
    image: techPost,
    snapshot: {
      client: "Government Department",
      industry: "Public Sector / e-Governance",
      role: "Technical Program Manager",
      duration: "12 months",
      techStack: ["Python", "TensorFlow", "Azure ML", "PostgreSQL", "React"]
    },
    brief: {
      problem: "Manual document processing for citizen services was causing 45-day average turnaround times, leading to citizen dissatisfaction and operational backlogs.",
      context: "The department needed to automate document verification and classification while maintaining accuracy standards required for government records.",
      constraints: [
        "Multilingual document support (12 regional languages)",
        "Strict data privacy and sovereignty requirements",
        "Integration with existing e-governance portals",
        "Budget constraints typical of government projects"
      ]
    },
    contextAndApproach: {
      environment: "Existing workflow involved manual verification by multiple officers across different departments. Document formats varied significantly across districts.",
      challenges: [
        "Inconsistent document quality from rural submission centers",
        "Limited training data for regional language documents",
        "Resistance from staff concerned about automation",
        "Complex approval hierarchies across departments"
      ],
      principles: [
        "Augment human capability, not replace",
        "Build for the lowest common denominator in terms of document quality",
        "Transparency in AI decision-making for audit purposes"
      ],
      decisions: [
        "Hybrid model combining ML classification with human verification for edge cases",
        "Invested in building proprietary training dataset for regional languages",
        "Designed explainable AI outputs for officer review"
      ]
    },
    challengesThatMattered: [
      {
        title: "Regional Language Accuracy",
        description: "Achieving acceptable accuracy for handwritten documents in 12 regional languages required building custom training datasets and models."
      },
      {
        title: "Change Management Across Districts",
        description: "Rolling out AI-assisted processing across 38 districts with varying levels of digital literacy required extensive training and support."
      }
    ],
    solutionsSummary: "We engaged 50+ language specialists for annotation over 3 months to build custom training datasets, achieving 94% accuracy across all supported languages. The 'AI Buddy' program paired officers with the system, resulting in 85% positive feedback from staff after 6 months.",
    outcomes: {
      quantitative: [
        "Reduced average processing time from 45 days to 7 days",
        "85% of documents auto-classified correctly",
        "30% reduction in processing errors",
        "₹2.4 Cr annual savings in operational costs"
      ],
      qualitative: [
        "Improved citizen satisfaction scores by 40%",
        "Staff freed for higher-value citizen interaction",
        "Model for replication across other government departments"
      ]
    },
    learnings: {
      keyLearnings: [
        "Government projects require extensive stakeholder management across hierarchies",
        "AI accuracy must be near-perfect for citizen-facing applications"
      ],
      improvements: [
        "Would have started change management activities earlier",
        "More extensive pilot before full rollout"
      ],
      insights: [
        "Success in government AI projects depends more on adoption than technology"
      ]
    },
    gallery: [techPost, businessPost, fashionPost, lifestylePost, workLifestyle, fashionLifestyle]
  },
  'post-title-summary': {
    title: "Post Title — Summary",
    category: "Mobile Apps",
    image: fashionPost,
    snapshot: {
      client: "Retail Chain (Confidential)",
      industry: "Retail & E-commerce",
      role: "Product Manager",
      duration: "8 months",
      techStack: ["React Native", "Node.js", "MongoDB", "Firebase", "Stripe"]
    },
    brief: {
      problem: "Disconnected offline and online customer experiences were causing cart abandonment and missed upsell opportunities.",
      context: "The retail chain needed a unified mobile experience that worked seamlessly across their 200+ stores while integrating with their existing POS and inventory systems.",
      constraints: [
        "Must work in low-connectivity store environments",
        "Integration with 3 different POS systems across locations",
        "Strict timeline aligned with festive season launch",
        "Limited in-store staff for app promotion"
      ]
    },
    contextAndApproach: {
      environment: "Stores operated on different technology stacks based on when they were set up. Inventory synchronization was batch-based with significant delays.",
      challenges: [
        "Varying network quality across store locations",
        "Multiple POS vendors with different integration capabilities",
        "Staff unfamiliarity with mobile-first customer service"
      ],
      principles: [
        "Offline-first architecture for reliable in-store experience",
        "Progressive feature rollout based on store readiness",
        "Self-service design to minimize staff dependency"
      ],
      decisions: [
        "Built offline sync engine for core functionality",
        "Created abstraction layer for POS integrations",
        "Prioritized store pickup over delivery for initial launch"
      ]
    },
    challengesThatMattered: [
      {
        title: "Real-time Inventory Accuracy",
        description: "Achieving accurate stock visibility when underlying systems had batch updates required building predictive inventory models."
      }
    ],
    solutionsSummary: "We built a predictive stock model using ML that predicted inventory based on sales velocity and batch data, achieving 97% inventory accuracy for in-app display despite underlying systems having 4-6 hour data staleness.",
    outcomes: {
      quantitative: [
        "25% increase in store pickup orders",
        "18% higher average order value for app users",
        "4.6 star rating on app stores",
        "500K+ downloads in first 3 months"
      ],
      qualitative: [
        "Unified brand experience across channels",
        "Foundation for future omnichannel initiatives"
      ]
    },
    learnings: {
      keyLearnings: [
        "Offline-first is essential for retail mobile apps",
        "Integration complexity often exceeds feature development effort"
      ],
      improvements: [
        "Would have pushed harder for real-time inventory APIs from POS vendors"
      ],
      insights: [
        "Retail apps succeed when they add value to both customers and store staff"
      ]
    },
    gallery: [fashionPost, businessPost, techPost, lifestylePost, workLifestyle, fashionLifestyle]
  },
  'article-title-overview': {
    title: "Article Title — Overview",
    category: "Design",
    image: lifestylePost,
    snapshot: {
      client: "Healthcare Startup",
      industry: "Healthcare / MedTech",
      role: "Product Strategy Lead",
      duration: "10 months",
      techStack: ["Figma", "React", "TypeScript", "Node.js", "HL7 FHIR"]
    },
    brief: {
      problem: "Fragmented patient data across multiple healthcare providers was leading to redundant tests, medication errors, and poor care coordination.",
      context: "The startup aimed to create a unified patient health record platform that could aggregate data from multiple sources while maintaining privacy and regulatory compliance.",
      constraints: [
        "HIPAA and Indian healthcare data protection compliance",
        "Integration with 50+ different EMR systems",
        "Patient consent management requirements",
        "Adoption by both tech-savvy and elderly patients"
      ]
    },
    contextAndApproach: {
      environment: "Healthcare providers used different data standards, making interoperability extremely challenging. Many small clinics still used paper records.",
      challenges: [
        "Lack of standardized health data formats across providers",
        "Trust issues around sharing patient data",
        "Varying digital literacy among patient demographics"
      ],
      principles: [
        "Patient as the owner and controller of their data",
        "Universal design for accessibility across age groups",
        "Privacy by design in every feature"
      ],
      decisions: [
        "Adopted FHIR standards for data interoperability",
        "Built consent management as core platform feature",
        "Designed for 'digital proxy' scenarios for elderly patients"
      ]
    },
    challengesThatMattered: [
      {
        title: "Designing for Elderly Users",
        description: "Creating an interface that worked for both tech-savvy millennials and 70+ year old patients with limited smartphone experience."
      }
    ],
    solutionsSummary: "We conducted extensive user research with 200+ patients across age groups, implementing large touch targets, voice-guided navigation, and a 'family caregiver' mode. For interoperability, we built 50+ EMR connectors using FHIR adapters, enabling seamless data aggregation.",
    outcomes: {
      quantitative: [
        "40% reduction in redundant diagnostic tests",
        "30% improvement in medication adherence",
        "85% patient satisfaction score"
      ],
      qualitative: [
        "First platform to achieve both HIPAA and Indian compliance",
        "Partnership with major hospital chains"
      ]
    },
    learnings: {
      keyLearnings: [
        "Healthcare UX requires extensive real-world validation",
        "Compliance should be built-in, not bolted-on"
      ],
      improvements: [
        "Would have engaged regulatory consultants earlier in design"
      ],
      insights: [
        "In healthcare, trust is earned through transparency and control"
      ]
    },
    gallery: [lifestylePost, businessPost, techPost, fashionPost, workLifestyle, fashionLifestyle]
  },
  'featured-content-piece': {
    title: "Featured Content Piece",
    category: "Cloud",
    image: workLifestyle,
    snapshot: {
      client: "Manufacturing Conglomerate",
      industry: "Manufacturing / Industrial",
      role: "Cloud Transformation Lead",
      duration: "24 months",
      techStack: ["AWS", "Kubernetes", "Terraform", "Python", "IoT Hub"]
    },
    brief: {
      problem: "Disparate on-premise systems across 12 manufacturing units were causing visibility gaps, delayed reporting, and inability to implement predictive maintenance.",
      context: "The conglomerate needed a unified cloud platform to connect all manufacturing units while ensuring minimal disruption to 24/7 production operations.",
      constraints: [
        "Zero tolerance for production downtime",
        "Legacy OT systems with limited connectivity options",
        "Compliance with industrial safety standards",
        "Workforce with limited cloud technology exposure"
      ]
    },
    contextAndApproach: {
      environment: "Manufacturing units operated independently with varying levels of automation. Some units had modern PLCs while others relied on decades-old equipment.",
      challenges: [
        "Connecting OT and IT networks securely",
        "Handling intermittent connectivity at remote plant locations",
        "Resistance from plant managers concerned about centralized control"
      ],
      principles: [
        "Edge-first architecture for resilience",
        "Security as non-negotiable foundation",
        "Federated model respecting plant autonomy"
      ],
      decisions: [
        "Deployed edge gateways at each plant for local processing",
        "Implemented zero-trust security model",
        "Created plant-level dashboards before central visibility"
      ]
    },
    challengesThatMattered: [
      {
        title: "OT-IT Convergence",
        description: "Bridging decades-old operational technology with modern cloud infrastructure required custom integration solutions and extensive security considerations."
      }
    ],
    solutionsSummary: "We designed custom edge gateway solutions with local processing capabilities, ensuring plants could operate independently during connectivity issues. A zero-trust security model with network segmentation addressed OT-IT convergence concerns, enabling secure data flow without exposing critical systems.",
    outcomes: {
      quantitative: [
        "23% reduction in unplanned downtime through predictive maintenance",
        "15% improvement in overall equipment effectiveness",
        "₹12 Cr annual savings in operational costs"
      ],
      qualitative: [
        "Real-time visibility across all manufacturing units",
        "Foundation for AI-driven production optimization"
      ]
    },
    learnings: {
      keyLearnings: [
        "Industrial digital transformation requires patience and trust-building",
        "Edge computing is essential for mission-critical OT environments"
      ],
      improvements: [
        "Would have involved plant managers as design partners from day one"
      ],
      insights: [
        "Manufacturing transformation succeeds when it empowers plant teams, not just headquarters"
      ]
    },
    gallery: [workLifestyle, businessPost, techPost, fashionPost, lifestylePost, fashionLifestyle]
  },
  'latest-design-showcase': {
    title: "Latest Design Showcase",
    category: "Design",
    image: fashionLifestyle,
    snapshot: {
      client: "EdTech Platform",
      industry: "Education Technology",
      role: "UX Strategy Lead",
      duration: "6 months",
      techStack: ["Figma", "React", "Next.js", "Tailwind CSS", "Framer Motion"]
    },
    brief: {
      problem: "Low course completion rates and declining user engagement were threatening the platform's growth and learner outcomes.",
      context: "The platform needed a complete UX overhaul to make learning more engaging while maintaining content quality and learning effectiveness.",
      constraints: [
        "Must maintain backward compatibility with existing content",
        "Mobile-first for primary user base",
        "Accessibility requirements for diverse learner base",
        "Limited engineering bandwidth for implementation"
      ]
    },
    contextAndApproach: {
      environment: "Learners accessed the platform on a variety of devices, primarily mobile, often with intermittent connectivity.",
      challenges: [
        "Attention span challenges for long-form content",
        "Limited interactivity in existing course formats",
        "Instructor content creation bottlenecks"
      ],
      principles: [
        "Mobile-first, bite-sized learning",
        "Gamification without gimmicks",
        "Community as a learning accelerator"
      ],
      decisions: [
        "Restructured courses into 10-minute micro-lessons",
        "Implemented peer learning features",
        "Created simplified content authoring tools"
      ]
    },
    challengesThatMattered: [
      {
        title: "Content Migration",
        description: "Converting 500+ hours of existing long-form content into micro-learning format while maintaining coherence."
      }
    ],
    solutionsSummary: "We built an AI-assisted content chunking tool that suggested optimal break points and created summaries, enabling content migration to complete 3x faster than a manual approach. The gamification system focused on learning milestones rather than superficial metrics.",
    outcomes: {
      quantitative: [
        "Course completion rates improved from 12% to 47%",
        "Daily active users increased by 85%",
        "Average session duration increased by 40%"
      ],
      qualitative: [
        "Learner NPS improved from 23 to 61",
        "Platform featured in EdTech industry publications"
      ]
    },
    learnings: {
      keyLearnings: [
        "Engagement features must align with learning outcomes, not distract from them"
      ],
      improvements: [
        "Would have conducted more extensive A/B testing on gamification elements"
      ],
      insights: [
        "EdTech success is about behavior change, not just content delivery"
      ]
    },
    gallery: [fashionLifestyle, businessPost, techPost, fashionPost, lifestylePost, workLifestyle]
  },
  'another-web-project': {
    title: "Another Web Project",
    category: "Web Development",
    image: techPost,
    snapshot: {
      client: "Logistics Company",
      industry: "Supply Chain & Logistics",
      role: "Technical Product Manager",
      duration: "16 months",
      techStack: ["Vue.js", "Python", "PostgreSQL", "Redis", "Google Maps API"]
    },
    brief: {
      problem: "Inefficient route planning and lack of real-time visibility were causing delays and high fuel costs across the fleet.",
      context: "The company needed a modern fleet management platform to optimize operations and provide real-time tracking to customers.",
      constraints: [
        "Integration with 5 different GPS tracking vendors",
        "Multi-tenant architecture for B2B customers",
        "Real-time updates at scale (10,000+ vehicles)"
      ]
    },
    contextAndApproach: {
      environment: "Fleet operated across diverse geographies with varying road conditions and connectivity. Drivers had different levels of smartphone proficiency.",
      challenges: [
        "GPS data quality varied significantly across vendors",
        "Driver adoption of new mobile app",
        "Scaling real-time tracking for thousands of simultaneous vehicles"
      ],
      principles: [
        "Driver experience as critical as operations experience",
        "Graceful degradation for connectivity issues",
        "Data-driven route optimization"
      ],
      decisions: [
        "Built unified GPS abstraction layer",
        "Implemented predictive ETA algorithms",
        "Designed offline-capable driver app"
      ]
    },
    challengesThatMattered: [
      {
        title: "Real-time at Scale",
        description: "Processing and broadcasting location updates for 10,000+ vehicles every 30 seconds required careful architecture."
      }
    ],
    solutionsSummary: "We implemented a geo-partitioned Redis-based pub/sub system that efficiently broadcast updates to thousands of dashboard users, achieving sub-second update latency at 10K vehicle scale. The unified GPS abstraction layer normalized data quality across vendors.",
    outcomes: {
      quantitative: [
        "18% reduction in fuel costs through route optimization",
        "25% improvement in on-time deliveries",
        "Customer complaint reduction of 40%"
      ],
      qualitative: [
        "Transformed company's technology reputation in the industry",
        "Platform became a competitive differentiator"
      ]
    },
    learnings: {
      keyLearnings: [
        "Real-time systems require careful capacity planning from day one"
      ],
      improvements: [
        "Would have invested more in driver training and feedback"
      ],
      insights: [
        "Logistics technology succeeds when it makes drivers' jobs easier"
      ]
    },
    gallery: [techPost, businessPost, fashionPost, lifestylePost, workLifestyle, fashionLifestyle]
  },
  'mobile-app-design': {
    title: "Mobile App Design",
    category: "Mobile Apps",
    image: lifestylePost,
    snapshot: {
      client: "Fintech Startup",
      industry: "Financial Services / Fintech",
      role: "Product Owner",
      duration: "9 months",
      techStack: ["Flutter", "Go", "PostgreSQL", "AWS", "Plaid API"]
    },
    brief: {
      problem: "Traditional expense tracking apps were tedious, leading to incomplete financial pictures and poor money management habits.",
      context: "The startup aimed to create an intelligent expense management app that minimized user effort while providing actionable financial insights.",
      constraints: [
        "Bank-grade security requirements",
        "Integration with major Indian banks",
        "Must work for both salaried and self-employed users"
      ]
    },
    contextAndApproach: {
      environment: "Users had varying financial literacy levels. Bank API availability was inconsistent, and many transactions were still cash-based.",
      challenges: [
        "Incomplete transaction data from bank feeds",
        "Cash transaction categorization",
        "Building user trust for financial data access"
      ],
      principles: [
        "Minimum effort for maximum insight",
        "Trust through transparency",
        "Personalized, not generic advice"
      ],
      decisions: [
        "Built smart categorization with manual override learning",
        "Implemented receipt scanning for cash transactions",
        "Created explainable AI for financial recommendations"
      ]
    },
    challengesThatMattered: [
      {
        title: "Cash Transaction Tracking",
        description: "India's cash-heavy economy meant bank feeds only told part of the story. Making cash tracking effortless was crucial."
      }
    ],
    solutionsSummary: "We built an AI-powered receipt OCR with one-tap logging, increasing cash transaction capture by 300%. Smart categorization learned from user corrections, improving accuracy over time while maintaining transparency about how recommendations were generated.",
    outcomes: {
      quantitative: [
        "User savings rate increased by average 15%",
        "4.7 star rating on app stores",
        "Monthly active user retention of 65%"
      ],
      qualitative: [
        "Featured by Apple in Finance category",
        "Strong word-of-mouth growth"
      ]
    },
    learnings: {
      keyLearnings: [
        "Fintech success depends on reducing friction to near-zero"
      ],
      improvements: [
        "Would have built community features for social accountability earlier"
      ],
      insights: [
        "Financial apps must balance automation with user sense of control"
      ]
    },
    gallery: [lifestylePost, businessPost, techPost, fashionPost, workLifestyle, fashionLifestyle]
  }
};

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projectId ? projectsData[projectId] : null;

  if (!project) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-background flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
            <Link to="/projects" className="text-primary hover:underline">
              ← Back to Projects
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      
      <main id="main-content" className="min-h-screen bg-background">
        {/* Breadcrumb */}
        <div className="container-blog pt-8">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/projects">Projects</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{project.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Title Section */}
        <div className="container-blog py-8">
          <Badge className="mb-4">{project.category}</Badge>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">{project.title}</h1>
        </div>

        <div className="container-blog pb-16">
          {/* 1. Project Snapshot */}
          <section className="mb-12">
            <Card className="bg-muted/30 border-primary/20">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  Project Snapshot
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                  <div className="flex items-start gap-3">
                    <Building2 className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide">Client</p>
                      <p className="font-medium">{project.snapshot.client}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Layers className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide">Industry</p>
                      <p className="font-medium">{project.snapshot.industry}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <User className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide">Role</p>
                      <p className="font-medium">{project.snapshot.role}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide">Duration</p>
                      <p className="font-medium">{project.snapshot.duration}</p>
                    </div>
                  </div>
                  <div className="lg:col-span-1">
                    <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Tech Stack</p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.snapshot.techStack.map((tech, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">{tech}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-12">
              {/* 2. The Brief */}
              <section>
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  The Brief
                </h2>
                <div className="prose prose-neutral dark:prose-invert max-w-none">
                  <p className="text-muted-foreground leading-relaxed mb-4">{project.brief.problem}</p>
                  <p className="text-muted-foreground leading-relaxed mb-4">{project.brief.context}</p>
                  <div className="mt-4">
                    <h4 className="text-sm font-medium mb-2">Key Constraints</h4>
                    <ul className="space-y-1">
                      {project.brief.constraints.map((constraint, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1.5">•</span>
                          {constraint}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              <Separator />

              {/* 3. Context & Approach (Merged) */}
              <section>
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-primary" />
                  Context & Approach
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">{project.contextAndApproach.environment}</p>
                
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 px-4 text-sm font-semibold text-primary bg-muted/50">Challenges Faced</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-primary bg-muted/50">Guiding Principles</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-primary bg-muted/50">Strategic Decisions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Array.from({ length: Math.max(
                        project.contextAndApproach.challenges.length,
                        project.contextAndApproach.principles.length,
                        project.contextAndApproach.decisions.length
                      ) }).map((_, i) => (
                        <tr key={i} className="border-b border-border/50">
                          <td className="py-3 px-4 text-sm text-muted-foreground align-top">
                            {project.contextAndApproach.challenges[i] && (
                              <span className="flex items-start gap-2">
                                <AlertTriangle className="h-4 w-4 text-amber-500 mt-0.5 shrink-0" />
                                {project.contextAndApproach.challenges[i]}
                              </span>
                            )}
                          </td>
                          <td className="py-3 px-4 text-sm text-muted-foreground align-top">
                            {project.contextAndApproach.principles[i] && (
                              <span className="flex items-start gap-2">
                                <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-medium shrink-0">{i + 1}</span>
                                {project.contextAndApproach.principles[i]}
                              </span>
                            )}
                          </td>
                          <td className="py-3 px-4 text-sm text-muted-foreground align-top">
                            {project.contextAndApproach.decisions[i] && (
                              <span className="flex items-start gap-2">
                                <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                                {project.contextAndApproach.decisions[i]}
                              </span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <Separator />

              {/* 4. Challenges That Mattered */}
              <section>
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-primary" />
                  Challenges That Mattered
                </h2>
                <div className="space-y-4">
                  {project.challengesThatMattered.map((challenge, i) => (
                    <Card key={i} className="border-l-4 border-l-amber-500">
                      <CardContent className="p-4">
                        <h4 className="font-medium mb-2">{challenge.title}</h4>
                        <p className="text-sm text-muted-foreground">{challenge.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              <Separator />

              {/* 5. Solutions & Interventions (Simplified) */}
              <section>
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  Solutions & Interventions
                </h2>
                <p className="text-muted-foreground leading-relaxed">{project.solutionsSummary}</p>
              </section>

              <Separator />

              {/* 6. Learnings & Reflections */}
              <section>
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  Learnings & Reflections
                </h2>
                <div className="grid gap-6">
                  <div>
                    <h4 className="text-sm font-medium mb-3">Key Learnings</h4>
                    <ul className="space-y-2">
                      {project.learnings.keyLearnings.map((learning, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <Lightbulb className="h-4 w-4 text-amber-500 mt-0.5 shrink-0" />
                          {learning}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium mb-3">What Could Have Been Different</h4>
                    <ul className="space-y-2">
                      {project.learnings.improvements.map((item, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary">↻</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium mb-3">Forward Insights</h4>
                    <ul className="space-y-2">
                      {project.learnings.insights.map((insight, i) => (
                        <li key={i} className="text-sm italic text-muted-foreground">
                          "{insight}"
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>
            </div>

            {/* Sidebar - Outcomes */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Outcomes & Impact */}
                <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-primary" />
                      Outcomes & Impact
                    </h2>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-sm font-medium mb-3 text-primary">Quantitative Results</h4>
                        <div className="space-y-3">
                          {project.outcomes.quantitative.map((outcome, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                              <span className="text-sm font-medium">{outcome}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <Separator />
                      
                      <div>
                        <h4 className="text-sm font-medium mb-3 text-primary">Qualitative Impact</h4>
                        <ul className="space-y-2">
                          {project.outcomes.qualitative.map((outcome, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="text-primary">•</span>
                              {outcome}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Back to Projects */}
                <Link 
                  to="/projects"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to All Projects
                </Link>
              </div>
            </div>
          </div>

          {/* Project Gallery Carousel */}
          <section className="mt-16">
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <ImageIcon className="h-5 w-5 text-primary" />
              Project Gallery
            </h2>
            <div className="px-12">
              <Carousel opts={{ align: "start", loop: true }}>
                <CarouselContent>
                  {project.gallery.map((image, i) => (
                    <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
                      <div className="p-1">
                        <Card className="overflow-hidden">
                          <CardContent className="p-0">
                            <img 
                              src={image} 
                              alt={`${project.title} - Image ${i + 1}`}
                              className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-300"
                            />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default ProjectDetail;

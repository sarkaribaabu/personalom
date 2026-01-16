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
  ImageIcon,
  Briefcase,
  Clock,
  Cpu,
  Server,
  Database,
  Cloud,
  Smartphone,
  Globe,
  Shield,
  Zap
} from 'lucide-react';
import businessPost from '@/assets/business-post.jpg';
import techPost from '@/assets/tech-post.jpg';
import fashionPost from '@/assets/fashion-post.jpg';
import lifestylePost from '@/assets/lifestyle-post.jpg';
import workLifestyle from '@/assets/work-lifestyle.jpg';
import fashionLifestyle from '@/assets/fashion-lifestyle.jpg';

// Tech stack icon mapping
const techIcons: Record<string, React.ReactNode> = {
  'React': <Globe className="w-4 h-4" />,
  'React Native': <Smartphone className="w-4 h-4" />,
  'Node.js': <Server className="w-4 h-4" />,
  'Python': <Cpu className="w-4 h-4" />,
  'PostgreSQL': <Database className="w-4 h-4" />,
  'MongoDB': <Database className="w-4 h-4" />,
  'AWS': <Cloud className="w-4 h-4" />,
  'Azure': <Cloud className="w-4 h-4" />,
  'Docker': <Layers className="w-4 h-4" />,
  'Kubernetes': <Layers className="w-4 h-4" />,
  'TensorFlow': <Cpu className="w-4 h-4" />,
  'Firebase': <Cloud className="w-4 h-4" />,
  '.NET': <Server className="w-4 h-4" />,
  'SQL Server': <Database className="w-4 h-4" />,
  'Angular': <Globe className="w-4 h-4" />,
  'TypeScript': <Cpu className="w-4 h-4" />,
  'Java': <Server className="w-4 h-4" />,
  'Spring Boot': <Server className="w-4 h-4" />,
  'Flutter': <Smartphone className="w-4 h-4" />,
  'Ionic': <Smartphone className="w-4 h-4" />,
  'Power BI': <TrendingUp className="w-4 h-4" />,
  'Tableau': <TrendingUp className="w-4 h-4" />,
  'Redis': <Zap className="w-4 h-4" />,
  'Elasticsearch': <Database className="w-4 h-4" />,
  'OpenCV': <Cpu className="w-4 h-4" />,
  'Stripe': <Shield className="w-4 h-4" />,
};

// Project data with full details mapped to correct slugs
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
  contextReality: {
    environment: string;
    existingSystems: string[];
    constraints: string[];
  };
  approach: {
    principles: string[];
    strategicDecisions: string[];
    tradeoffs: string[];
  };
  execution: {
    architecture: string;
    keyModules: string[];
    integrations: string[];
    considerations: string[];
  };
  challengesThatMattered: {
    title: string;
    description: string;
    impact: string;
  }[];
  solutions: {
    problem: string;
    decision: string;
    intervention: string;
    result: string;
  }[];
  outcomes: {
    quantitative: string[];
    qualitative: string[];
    impact: string;
  };
  learnings: {
    keyLearnings: string[];
    improvements: string[];
    insights: string[];
  };
  gallery: string[];
}> = {
  'nmmc-portal': {
    title: "NMMC Portal",
    category: "Web Apps",
    image: techPost,
    snapshot: {
      client: "Navi Mumbai Municipal Corporation",
      industry: "Government / e-Governance",
      role: "Technical Project Manager & Solution Architect",
      duration: "18 months",
      techStack: [".NET", "SQL Server", "Angular", "Azure", "Redis"]
    },
    brief: {
      problem: "Citizens faced fragmented access to municipal services across multiple legacy systems, leading to long queues, delayed responses, and poor transparency in service delivery.",
      context: "NMMC serves 1.5+ million citizens and needed a unified digital platform to transform citizen services, improve operational efficiency, and establish transparency in governance.",
      constraints: [
        "Integration with 15+ existing legacy systems",
        "24/7 availability mandate for critical services",
        "Multilingual support (Marathi, Hindi, English)",
        "Strict government security and audit requirements",
        "Phased rollout across all municipal departments"
      ]
    },
    contextReality: {
      environment: "The existing infrastructure comprised multiple standalone applications built over two decades, each with its own database and user management. No single source of truth for citizen data existed.",
      existingSystems: [
        "Legacy property tax system (15+ years old)",
        "Water billing on separate mainframe",
        "Manual grievance tracking through registers",
        "Paper-based building permission workflows"
      ],
      constraints: [
        "Limited IT literacy among senior municipal staff",
        "Political pressure for quick visible results",
        "Budget constraints typical of government projects",
        "Union resistance to process automation"
      ]
    },
    approach: {
      principles: [
        "Citizen-first design with minimal learning curve",
        "Unified login with single-window clearance concept",
        "Mobile-first responsive approach",
        "Transparency through real-time status tracking"
      ],
      strategicDecisions: [
        "Built middleware layer to connect legacy systems rather than replacing them",
        "Implemented workflow engine for configurable approval processes",
        "Chose progressive disclosure over feature-heavy interfaces"
      ],
      tradeoffs: [
        "Accepted slower initial rollout to ensure department buy-in",
        "Prioritized stability over cutting-edge technology",
        "Chose hybrid hosting over full cloud due to data sovereignty concerns"
      ]
    },
    execution: {
      architecture: "Microservices-based architecture with API gateway, supporting gradual migration from monolithic legacy systems. Event-driven integration layer for real-time sync.",
      keyModules: [
        "Unified Citizen Portal with SSO",
        "Property Tax Assessment & Payment",
        "Water & Sewerage Bill Management",
        "Building Permission Workflow",
        "Grievance Management System",
        "Online Payment Gateway Integration"
      ],
      integrations: [
        "HDFC, SBI, ICICI payment gateways",
        "Aadhaar-based eKYC verification",
        "SMS gateway for notifications",
        "Email service integration",
        "GIS mapping for property location"
      ],
      considerations: [
        "99.9% uptime SLA with automatic failover",
        "End-to-end encryption for sensitive data",
        "Role-based access control across 50+ user types",
        "Audit trail for all transactions"
      ]
    },
    challengesThatMattered: [
      {
        title: "Legacy System Integration Without Disruption",
        description: "Connecting 15+ legacy systems with different data formats and protocols while ensuring existing operations continued uninterrupted during the 18-month transition.",
        impact: "Required building custom adapters and implementing eventual consistency patterns to handle data synchronization across systems."
      },
      {
        title: "Change Management Across Departments",
        description: "Overcoming resistance from municipal staff accustomed to manual processes and paper-based workflows. Some departments had used the same processes for 20+ years.",
        impact: "Invested 30% of project timeline in training, handholding, and building department champions to drive adoption."
      },
      {
        title: "Ensuring Adoption Among Diverse Citizen Demographics",
        description: "The platform needed to serve everyone from tech-savvy professionals to senior citizens with limited digital literacy.",
        impact: "Implemented multilingual interface, visual workflow guidance, and hybrid online-offline service model."
      }
    ],
    solutions: [
      {
        problem: "Legacy systems couldn't handle real-time data sync",
        decision: "Implement event-driven architecture with message queuing",
        intervention: "Built custom middleware with Redis-backed queue and retry mechanisms",
        result: "Achieved 99.7% sync accuracy with max 2-minute lag across all integrated systems"
      },
      {
        problem: "Staff resistance to new digital workflows",
        decision: "Create department champions and gamified adoption program",
        intervention: "Identified and trained 50+ power users, implemented performance dashboards with recognition",
        result: "85% voluntary adoption within 6 months, reduced training escalations by 60%"
      },
      {
        problem: "Citizens struggling with complex application processes",
        decision: "Redesign forms with progressive disclosure and contextual help",
        intervention: "Broke 50-field forms into 5-step wizards with validation and save-as-draft",
        result: "Application completion rate improved from 45% to 87%"
      }
    ],
    outcomes: {
      quantitative: [
        "60% reduction in average service delivery time",
        "₹15 Cr+ annual revenue through online property tax collection",
        "85% citizen satisfaction rating (up from 42%)",
        "40% reduction in counter footfall",
        "3 lakh+ registered citizens within first year"
      ],
      qualitative: [
        "Established NMMC as a model for other municipal corporations",
        "Significantly improved transparency with real-time status tracking",
        "Reduced corruption touchpoints through digital workflows",
        "Foundation laid for future smart city initiatives"
      ],
      impact: "The portal transformed NMMC's citizen engagement model and became a reference implementation for other municipal corporations in Maharashtra."
    },
    learnings: {
      keyLearnings: [
        "Government digital transformation requires equal investment in change management and technology",
        "Building trust with bureaucracy takes time but is essential for sustainable adoption"
      ],
      improvements: [
        "Would have started citizen awareness campaigns 3 months before launch",
        "Earlier involvement of front-desk staff in UX design decisions"
      ],
      insights: [
        "Success in e-governance is measured not by features shipped but by citizens served",
        "The best technology is invisible to the end user"
      ]
    },
    gallery: [techPost, businessPost, fashionPost, lifestylePost, workLifestyle, fashionLifestyle]
  },
  'pcmc-portal': {
    title: "PCMC Portal",
    category: "Web Apps",
    image: fashionPost,
    snapshot: {
      client: "Pimpri Chinchwad Municipal Corporation",
      industry: "Government / e-Governance",
      role: "Solution Architect & Technical Lead",
      duration: "14 months",
      techStack: [".NET", "SQL Server", "Angular", "Azure", "Elasticsearch"]
    },
    brief: {
      problem: "PCMC, serving a rapidly growing industrial hub with 2+ million citizens, struggled with citizen service delivery due to disconnected departmental systems and manual processes.",
      context: "As one of the richest municipal corporations in Asia, PCMC needed a world-class digital platform to match its industrial significance and serve its diverse population of industrial workers, businessmen, and residents.",
      constraints: [
        "High transaction volumes due to industrial area",
        "Integration with industrial licensing systems",
        "Bilingual mandatory (Marathi and English)",
        "Strict compliance with Smart City guidelines"
      ]
    },
    contextReality: {
      environment: "PCMC operates in one of India's largest industrial zones with unique requirements around industrial licensing, environmental clearances, and worker welfare.",
      existingSystems: [
        "SAP-based financial management system",
        "Legacy industrial licensing database",
        "Separate property and water tax systems",
        "Manual building permission process"
      ],
      constraints: [
        "Industrial stakeholders demanded fast processing",
        "High volume of commercial transactions",
        "Multiple ward offices with varying IT infrastructure"
      ]
    },
    approach: {
      principles: [
        "Speed and efficiency for industrial stakeholders",
        "Paperless workflow implementation",
        "Mobile-first for field operations"
      ],
      strategicDecisions: [
        "Prioritized industrial services for Phase 1",
        "Built comprehensive search and tracking system",
        "Implemented document management with OCR"
      ],
      tradeoffs: [
        "Chose rapid deployment over comprehensive features",
        "Accepted some manual processes to meet timeline"
      ]
    },
    execution: {
      architecture: "Service-oriented architecture with enterprise service bus for inter-system communication. Elasticsearch for fast document and application search.",
      keyModules: [
        "Industrial Licensing Portal",
        "Trade License Management",
        "Property Tax & Assessment",
        "Building Permission System",
        "Birth & Death Registration",
        "E-Tendering Platform"
      ],
      integrations: [
        "SAP financial system",
        "State pollution control board",
        "RERA compliance system",
        "Multiple payment gateways"
      ],
      considerations: [
        "High availability for industrial services",
        "Bulk processing for large enterprises",
        "API-first for third-party integrations"
      ]
    },
    challengesThatMattered: [
      {
        title: "Managing Industrial Stakeholder Expectations",
        description: "Large industries expected the same service levels as private enterprise platforms, with zero tolerance for delays or downtime.",
        impact: "Required building enterprise-grade SLAs and dedicated support channels."
      },
      {
        title: "Integrating with SAP Financial Systems",
        description: "PCMC's SAP implementation had extensive customizations making standard integrations impossible.",
        impact: "Built custom SAP connectors with thorough testing across all financial workflows."
      }
    ],
    solutions: [
      {
        problem: "Industrial license applications taking 30+ days",
        decision: "Implement parallel processing workflow with automated routing",
        intervention: "Built multi-department concurrent review system with SLA tracking",
        result: "Reduced average processing time to 7 days for standard applications"
      },
      {
        problem: "Document search taking hours in legacy systems",
        decision: "Implement Elasticsearch-based document repository",
        intervention: "Migrated 10+ years of documents with OCR indexing",
        result: "Document retrieval now takes under 3 seconds"
      }
    ],
    outcomes: {
      quantitative: [
        "75% reduction in industrial license processing time",
        "₹50 Cr+ online transactions in first year",
        "90% paperless operations achieved",
        "50,000+ applications processed monthly"
      ],
      qualitative: [
        "Recognized as Smart City best practice",
        "Improved industrial stakeholder relationships",
        "Set benchmark for other industrial city portals"
      ],
      impact: "PCMC portal became a model for industrial city e-governance, demonstrating that government services can match private sector efficiency."
    },
    learnings: {
      keyLearnings: [
        "Industrial stakeholders drive adoption through economic incentives",
        "Document digitization ROI is immediate and substantial"
      ],
      improvements: [
        "Would have invested more in mobile app from day one"
      ],
      insights: [
        "When businesses see time savings, they become the strongest advocates for digital adoption"
      ]
    },
    gallery: [fashionPost, techPost, businessPost, lifestylePost, workLifestyle, fashionLifestyle]
  },
  'sc-land-records': {
    title: "SC Land Records",
    category: "Web Apps",
    image: businessPost,
    snapshot: {
      client: "Supreme Court of India",
      industry: "Judiciary / Legal Tech",
      role: "Technical Program Manager",
      duration: "24 months",
      techStack: [".NET", "SQL Server", "Angular", "Azure", "Docker"]
    },
    brief: {
      problem: "Land dispute cases constitute a significant portion of Supreme Court matters, with judges struggling to access comprehensive land records during hearings, leading to multiple adjournments.",
      context: "The Supreme Court needed a centralized system to access land records from all states during case proceedings, reducing dependency on physical records and state-level queries.",
      constraints: [
        "Constitutional sensitivity of judicial proceedings",
        "Data from 28 states with different formats",
        "Highest security and confidentiality requirements",
        "Integration with existing case management systems"
      ]
    },
    contextReality: {
      environment: "India's land records are maintained by state governments with varying degrees of digitization, different data schemas, and multiple languages.",
      existingSystems: [
        "State-level land record databases (DILRMP, Bhoomi, etc.)",
        "Supreme Court case management system",
        "Paper-based archive of historical records"
      ],
      constraints: [
        "Some states had minimal digital infrastructure",
        "Historical records in vernacular languages",
        "Constitutional limitations on data sharing across states"
      ]
    },
    approach: {
      principles: [
        "Judicial convenience as primary design driver",
        "Federated architecture respecting state autonomy",
        "Highest levels of data security and audit"
      ],
      strategicDecisions: [
        "Built API-based integration with state systems rather than data replication",
        "Implemented role-based access for different judicial officers",
        "Created offline mode for courtroom access"
      ],
      tradeoffs: [
        "Accepted some latency for real-time state queries over data replication",
        "Prioritized major states for Phase 1"
      ]
    },
    execution: {
      architecture: "Hub and spoke model with Supreme Court as central hub, connecting to state land record systems through secure APIs. Local caching for frequently accessed records.",
      keyModules: [
        "Multi-state land record search",
        "Case-linked record management",
        "Historical record digitization",
        "Judicial dashboard for bench access",
        "Secure document sharing"
      ],
      integrations: [
        "State revenue department databases",
        "Supreme Court case management",
        "e-Courts national grid",
        "Digital signature infrastructure"
      ],
      considerations: [
        "Air-gapped networks for sensitive data",
        "Multi-factor authentication for all access",
        "Complete audit trail for compliance"
      ]
    },
    challengesThatMattered: [
      {
        title: "Harmonizing 28 Different Data Formats",
        description: "Each state maintained land records in different formats, languages, and schemas. Some still relied on colonial-era record keeping practices.",
        impact: "Built a semantic layer that could interpret and normalize diverse data formats into a unified view."
      },
      {
        title: "Meeting Supreme Court Security Standards",
        description: "The system handled constitutionally sensitive data with implications for major land disputes. Security could not be compromised.",
        impact: "Implemented defense-in-depth security with multiple audit layers and obtained CERT-In certification."
      }
    ],
    solutions: [
      {
        problem: "Judges couldn't access land records during live hearings",
        decision: "Build offline-capable judicial dashboard with pre-loaded case records",
        intervention: "Created smart caching system that pre-fetches records linked to upcoming cases",
        result: "95% of required records available instantly during hearings"
      },
      {
        problem: "Historical records in regional languages were inaccessible",
        decision: "Implement multi-language OCR with judicial terminology training",
        intervention: "Trained OCR models on legal terminology across 12 languages",
        result: "Successfully digitized 2 lakh+ historical documents with 92% accuracy"
      }
    ],
    outcomes: {
      quantitative: [
        "70% reduction in adjournments due to missing records",
        "Connected to 22 state land record systems",
        "2 lakh+ historical documents digitized",
        "Average record retrieval time under 5 seconds"
      ],
      qualitative: [
        "Significantly improved judicial efficiency for land cases",
        "Set precedent for inter-state judicial data sharing",
        "Reduced pendency in land-related matters"
      ],
      impact: "The system transformed how land dispute cases are handled in the Supreme Court, setting a model for judicial technology adoption."
    },
    learnings: {
      keyLearnings: [
        "Judicial technology requires extreme attention to constitutional and procedural correctness",
        "Federated architectures work better for sovereign data sharing"
      ],
      improvements: [
        "Would have engaged state IT teams earlier in the process"
      ],
      insights: [
        "Technology for judiciary must be invisible—judges should focus on justice, not systems"
      ]
    },
    gallery: [businessPost, techPost, fashionPost, lifestylePost, workLifestyle, fashionLifestyle]
  },
  'navi-mumbai-police': {
    title: "Navi Mumbai Police",
    category: "eGovernance",
    image: businessPost,
    snapshot: {
      client: "Navi Mumbai Police Commissionerate",
      industry: "Law Enforcement / Public Safety",
      role: "Solution Architect & Technical Lead",
      duration: "20 months",
      techStack: [".NET", "SQL Server", "React", "Python", "Power BI", "Azure"]
    },
    brief: {
      problem: "Crime data scattered across multiple stations with no unified view, hindering data-driven policing and resource allocation decisions.",
      context: "Navi Mumbai Police needed a comprehensive digital platform to modernize operations, improve response times, and enable predictive policing using analytics.",
      constraints: [
        "Sensitive law enforcement data requiring highest security",
        "Real-time operations requiring 99.99% uptime",
        "Integration with state and central crime databases",
        "Field deployment challenges in patrol operations"
      ]
    },
    contextReality: {
      environment: "Police stations operated independently with paper-based FIR registration and manual crime tracking. No centralized view of crime patterns existed.",
      existingSystems: [
        "CCTNS (national crime database)",
        "Manual station house registers",
        "Disparate CCTV systems",
        "Paper-based case diaries"
      ],
      constraints: [
        "24/7 operational requirements",
        "Varying digital literacy among police personnel",
        "Budget and procurement constraints"
      ]
    },
    approach: {
      principles: [
        "Officer safety and efficiency as primary drivers",
        "Mobile-first for field operations",
        "Analytics-driven resource deployment"
      ],
      strategicDecisions: [
        "Built unified crime data warehouse for analytics",
        "Implemented mobile app for beat officers",
        "Created real-time dashboards for command center"
      ],
      tradeoffs: [
        "Prioritized core policing workflows over administrative functions",
        "Chose proven technologies over cutting-edge for reliability"
      ]
    },
    execution: {
      architecture: "Hybrid architecture with on-premise data center for sensitive data and cloud for analytics processing. Mobile apps with offline capability for field operations.",
      keyModules: [
        "Crime Records Management System",
        "Case Investigation Tracking",
        "Beat Management & Patrolling",
        "Command Center Dashboard",
        "Crime Analytics & Hotspot Mapping",
        "Citizen Complaint Portal"
      ],
      integrations: [
        "CCTNS national database",
        "State CID systems",
        "CCTV network integration",
        "Vehicle tracking systems"
      ],
      considerations: [
        "Multi-level access control",
        "Encrypted communication",
        "Disaster recovery across zones"
      ]
    },
    challengesThatMattered: [
      {
        title: "Ensuring Data Security for Sensitive Crime Data",
        description: "Crime data is among the most sensitive government data, with potential for misuse if security is compromised.",
        impact: "Implemented defense-in-depth security with audit trails, encryption at rest and transit, and role-based access."
      },
      {
        title: "Driving Adoption Among Field Officers",
        description: "Beat officers were accustomed to paper registers and faced challenges adapting to mobile-first workflows.",
        impact: "Designed intuitive mobile app with voice input and minimal typing, plus extensive field training."
      }
    ],
    solutions: [
      {
        problem: "Crime hotspots identified too late for preventive action",
        decision: "Build real-time analytics with predictive modeling",
        intervention: "Implemented ML-based crime pattern analysis with auto-generated beat patrol recommendations",
        result: "15% reduction in preventable crimes in identified hotspots"
      },
      {
        problem: "FIR registration taking 45+ minutes per case",
        decision: "Streamline registration with templates and voice input",
        intervention: "Built smart FIR wizard with auto-fill for common crimes and voice-to-text",
        result: "Average FIR registration time reduced to 15 minutes"
      }
    ],
    outcomes: {
      quantitative: [
        "40% improvement in case resolution rate",
        "60% reduction in FIR registration time",
        "15% reduction in preventable crimes",
        "Real-time visibility across 100+ beats"
      ],
      qualitative: [
        "Data-driven resource allocation across commissionerate",
        "Improved public trust through faster response",
        "Foundation for smart city integration"
      ],
      impact: "Transformed Navi Mumbai Police into a data-driven modern police force, becoming a model for other police commissionerates."
    },
    learnings: {
      keyLearnings: [
        "Law enforcement technology must be designed with field realities in mind",
        "Analytics value is realized only when insights reach frontline officers"
      ],
      improvements: [
        "Would have invested more in command center infrastructure from start"
      ],
      insights: [
        "Technology adoption in police forces succeeds when officers see it helping their daily work"
      ]
    },
    gallery: [businessPost, techPost, fashionPost, lifestylePost, workLifestyle, fashionLifestyle]
  },
  'vendiman': {
    title: "Vendiman",
    category: "Web Apps",
    image: fashionLifestyle,
    snapshot: {
      client: "Enterprise Manufacturing Client (Confidential)",
      industry: "Manufacturing / Supply Chain",
      role: "Product Manager & Solution Architect",
      duration: "12 months",
      techStack: ["React", "Node.js", "PostgreSQL", "AWS", "Python"]
    },
    brief: {
      problem: "Managing 500+ vendors across multiple categories with no standardized processes led to quality inconsistencies, payment delays, and compliance gaps.",
      context: "The client needed a comprehensive vendor management platform to streamline onboarding, performance tracking, and compliance management across their manufacturing operations.",
      constraints: [
        "Integration with SAP procurement module",
        "Multi-location vendor base across India",
        "Strict quality and compliance requirements",
        "Real-time inventory visibility needs"
      ]
    },
    contextReality: {
      environment: "Vendor management was handled through spreadsheets and emails, with different locations following different processes.",
      existingSystems: [
        "SAP for procurement and payments",
        "Excel-based vendor tracking",
        "Manual quality inspection records",
        "Email-based communication"
      ],
      constraints: [
        "Vendors with varying technical capabilities",
        "Multiple approval hierarchies",
        "Audit and compliance requirements"
      ]
    },
    approach: {
      principles: [
        "Self-service for vendors to reduce administrative burden",
        "Performance transparency to drive vendor improvement",
        "Compliance as a built-in feature"
      ],
      strategicDecisions: [
        "Built vendor portal for self-service onboarding",
        "Implemented automated performance scoring",
        "Created compliance calendar with auto-reminders"
      ],
      tradeoffs: [
        "Prioritized procurement integration over other modules",
        "Accepted phased rollout to manage change"
      ]
    },
    execution: {
      architecture: "Cloud-native microservices architecture on AWS with event-driven integration to SAP. Vendor portal as separate frontend for external users.",
      keyModules: [
        "Vendor Self-Service Portal",
        "Onboarding & Qualification Workflow",
        "Performance Scorecard & Analytics",
        "Contract & Compliance Management",
        "Payment Tracking & Reconciliation",
        "Quality Audit Management"
      ],
      integrations: [
        "SAP procurement and payment modules",
        "Quality management system",
        "Document management system",
        "Email and SMS notifications"
      ],
      considerations: [
        "Secure vendor data handling",
        "Mobile-responsive for vendor access",
        "Multi-language support for regional vendors"
      ]
    },
    challengesThatMattered: [
      {
        title: "Driving Vendor Adoption Across Technology Gaps",
        description: "Vendors ranged from large corporations with IT teams to small-scale units with no computers.",
        impact: "Built mobile-first portal with offline capability and provided training and support for smaller vendors."
      },
      {
        title: "Implementing Objective Performance Metrics",
        description: "Moving from subjective vendor assessments to objective metrics required organizational buy-in.",
        impact: "Worked with procurement team to define fair, measurable KPIs and implemented transparent scoring."
      }
    ],
    solutions: [
      {
        problem: "Vendor onboarding taking 30+ days",
        decision: "Automate document verification and parallel processing",
        intervention: "Built OCR-based document verification with automated compliance checks",
        result: "Average onboarding reduced to 5 days for compliant vendors"
      },
      {
        problem: "Payment disputes causing vendor dissatisfaction",
        decision: "Provide real-time payment visibility to vendors",
        intervention: "Built vendor payment portal with invoice status tracking and SAP sync",
        result: "80% reduction in payment-related queries"
      }
    ],
    outcomes: {
      quantitative: [
        "85% reduction in vendor onboarding time",
        "30% improvement in vendor performance scores",
        "80% reduction in payment queries",
        "100% compliance visibility achieved"
      ],
      qualitative: [
        "Improved vendor relationships through transparency",
        "Standardized processes across all locations",
        "Foundation for strategic vendor partnerships"
      ],
      impact: "Transformed vendor management from administrative overhead to strategic capability, improving supply chain reliability."
    },
    learnings: {
      keyLearnings: [
        "Vendor portals succeed when they solve vendor problems, not just internal problems",
        "Performance metrics must be fair and transparent to drive improvement"
      ],
      improvements: [
        "Would have involved vendor representatives in design earlier"
      ],
      insights: [
        "Supply chain digital transformation requires bringing external partners along"
      ]
    },
    gallery: [fashionLifestyle, businessPost, techPost, lifestylePost, workLifestyle, fashionPost]
  },
  'laws-of-motion': {
    title: "Laws Of Motion",
    category: "Mobile Apps",
    image: lifestylePost,
    snapshot: {
      client: "EdTech Startup",
      industry: "Education Technology",
      role: "Product Lead & Technical Architect",
      duration: "10 months",
      techStack: ["React Native", "Node.js", "MongoDB", "Python", "TensorFlow", "AWS"]
    },
    brief: {
      problem: "Physics education remains abstract for most students, with traditional methods failing to build intuitive understanding of fundamental concepts.",
      context: "The startup wanted to create an interactive mobile learning experience that makes physics concepts tangible through simulations and AI-powered personalized learning.",
      constraints: [
        "Must work on low-end Android devices",
        "Offline functionality for rural students",
        "Curriculum alignment with CBSE and state boards",
        "Engaging enough to compete with entertainment apps"
      ]
    },
    contextReality: {
      environment: "Students access education apps on budget smartphones with limited storage and intermittent connectivity.",
      existingSystems: [
        "Competing apps with video-based content",
        "Traditional physics textbooks and guides",
        "Classroom teaching methods"
      ],
      constraints: [
        "Low device specifications",
        "Limited attention spans",
        "Need for gamification"
      ]
    },
    approach: {
      principles: [
        "Learning through exploration, not instruction",
        "Personalization based on learning patterns",
        "Gamification for sustained engagement"
      ],
      strategicDecisions: [
        "Built physics simulation engine for interactive experiments",
        "Implemented adaptive learning using ML",
        "Created bite-sized lessons for mobile consumption"
      ],
      tradeoffs: [
        "Chose React Native for speed despite performance concerns",
        "Prioritized key physics concepts over comprehensive coverage"
      ]
    },
    execution: {
      architecture: "React Native app with Python-based ML backend. Physics simulations using optimized JavaScript engine. Offline-first architecture with smart sync.",
      keyModules: [
        "Interactive Physics Simulations",
        "AI-Powered Tutoring Assistant",
        "Adaptive Learning Path",
        "Gamified Challenges & Leaderboards",
        "Progress Tracking Dashboard",
        "Offline Learning Mode"
      ],
      integrations: [
        "Payment gateways for subscriptions",
        "Analytics platforms",
        "Push notification services",
        "Cloud sync services"
      ],
      considerations: [
        "Optimized for low-end devices",
        "Battery-efficient simulations",
        "Data-light operation mode"
      ]
    },
    challengesThatMattered: [
      {
        title: "Running Physics Simulations on Budget Phones",
        description: "Interactive physics simulations are computationally intensive, but our target users had phones with 2GB RAM.",
        impact: "Optimized simulation engine to run at 30fps on low-end devices through clever algorithmic shortcuts."
      },
      {
        title: "Making Learning Addictive Without Being Exploitative",
        description: "Gamification can easily become manipulative. We needed engagement without dark patterns.",
        impact: "Designed reward systems around learning achievements rather than time spent or streaks."
      }
    ],
    solutions: [
      {
        problem: "Students dropping off after initial curiosity",
        decision: "Implement personalized learning journeys based on interests",
        intervention: "Built ML model to identify learning style and recommend content accordingly",
        result: "Week-2 retention improved from 25% to 55%"
      },
      {
        problem: "Simulations not running smoothly on target devices",
        decision: "Build custom physics engine optimized for mobile",
        intervention: "Created simplified physics models with pre-computed scenarios for common experiments",
        result: "Smooth 30fps on devices with 2GB RAM"
      }
    ],
    outcomes: {
      quantitative: [
        "200K+ downloads in first 6 months",
        "4.5 star rating on Play Store",
        "55% week-2 retention (vs 25% industry average)",
        "30% improvement in physics scores for active users"
      ],
      qualitative: [
        "Students report 'finally understanding' physics concepts",
        "Recognition from education ministry",
        "Partnership interest from school chains"
      ],
      impact: "Demonstrated that quality educational technology can reach underserved students while maintaining engagement."
    },
    learnings: {
      keyLearnings: [
        "EdTech must design for the lowest common denominator in device capability",
        "Learning outcomes matter more than engagement metrics"
      ],
      improvements: [
        "Would have included more teacher/parent visibility features earlier"
      ],
      insights: [
        "The best educational apps make students feel smart, not entertained"
      ]
    },
    gallery: [lifestylePost, techPost, businessPost, fashionPost, workLifestyle, fashionLifestyle]
  },
  'guppa-ai': {
    title: "Guppa.ai",
    category: "AI/ML/CV",
    image: techPost,
    snapshot: {
      client: "AI Startup",
      industry: "Enterprise AI / Conversational AI",
      role: "Technical Co-founder & Product Lead",
      duration: "Ongoing",
      techStack: ["Python", "React", "Node.js", "PostgreSQL", "OpenAI", "AWS"]
    },
    brief: {
      problem: "Enterprises struggle to adopt conversational AI due to high customization costs, integration complexity, and concerns about accuracy and security.",
      context: "Building a no-code platform that enables enterprises to deploy customized AI assistants without extensive AI expertise or development resources.",
      constraints: [
        "Enterprise-grade security and compliance",
        "No-code/low-code accessibility",
        "Integration with diverse enterprise systems",
        "Accuracy requirements for business use cases"
      ]
    },
    contextReality: {
      environment: "Enterprises have tried chatbots before with mixed results. Skepticism is high, and expectations for accuracy are even higher.",
      existingSystems: [
        "Various CRM and ticketing systems",
        "Knowledge bases in multiple formats",
        "Legacy enterprise applications"
      ],
      constraints: [
        "Data privacy concerns",
        "Need for human oversight",
        "Integration complexity"
      ]
    },
    approach: {
      principles: [
        "Enterprise-grade reliability over experimental features",
        "Human-in-the-loop for critical decisions",
        "Privacy-first architecture"
      ],
      strategicDecisions: [
        "Built on proven LLM foundations with custom fine-tuning",
        "Implemented RAG architecture for knowledge grounding",
        "Created no-code flow builder for customization"
      ],
      tradeoffs: [
        "Chose accuracy over speed in response generation",
        "Prioritized enterprise features over consumer-friendly UI"
      ]
    },
    execution: {
      architecture: "Microservices architecture with RAG-based AI engine, vector database for knowledge retrieval, and modular integration framework.",
      keyModules: [
        "No-Code AI Assistant Builder",
        "Knowledge Base Ingestion Engine",
        "Multi-Channel Deployment",
        "Analytics & Insights Dashboard",
        "Human Handoff Workflows",
        "Enterprise Integration Hub"
      ],
      integrations: [
        "Slack, Teams, Web Chat",
        "Salesforce, Zendesk, Freshdesk",
        "SharePoint, Confluence, Notion",
        "Custom API integrations"
      ],
      considerations: [
        "SOC 2 compliance architecture",
        "Data residency options",
        "Role-based access control"
      ]
    },
    challengesThatMattered: [
      {
        title: "Ensuring Accuracy for Business-Critical Use Cases",
        description: "Unlike consumer chatbots, enterprise AI assistants cannot afford to hallucinate or provide incorrect information.",
        impact: "Implemented multi-stage verification, source attribution, and confidence scoring for all responses."
      },
      {
        title: "Making AI Accessible to Non-Technical Users",
        description: "Business users needed to customize AI behavior without coding or AI expertise.",
        impact: "Built intuitive visual flow builder with natural language prompt refinement."
      }
    ],
    solutions: [
      {
        problem: "AI responses lacking accuracy for domain-specific queries",
        decision: "Implement RAG with source verification",
        intervention: "Built knowledge ingestion pipeline with automatic chunking and relevance scoring",
        result: "95% accuracy on domain-specific queries with source attribution"
      },
      {
        problem: "Enterprises hesitant due to security concerns",
        decision: "Build enterprise-grade security from ground up",
        intervention: "Implemented data isolation, encryption, and audit logging with SOC 2 compliance",
        result: "Successfully onboarded Fortune 500 clients with strict security requirements"
      }
    ],
    outcomes: {
      quantitative: [
        "95% accuracy on domain queries (vs 70% industry average)",
        "60% reduction in support ticket volume for clients",
        "10x faster deployment than custom AI development",
        "Multiple enterprise clients onboarded"
      ],
      qualitative: [
        "Positioned as enterprise-grade alternative to consumer AI tools",
        "Strong product-market fit with mid-enterprise segment",
        "Growing partner ecosystem"
      ],
      impact: "Enabling enterprises to adopt AI at scale without compromising on security, accuracy, or customization."
    },
    learnings: {
      keyLearnings: [
        "Enterprise AI adoption is blocked more by trust than technology",
        "No-code tools must not sacrifice capability for simplicity"
      ],
      improvements: [
        "Would have invested in partner ecosystem earlier"
      ],
      insights: [
        "The AI platform winner will be the one enterprises trust with their data"
      ]
    },
    gallery: [techPost, businessPost, fashionPost, lifestylePost, workLifestyle, fashionLifestyle]
  }
};

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projectId ? projectsData[projectId] : undefined;

  if (!project) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-background pt-24">
          <div className="container-blog py-16">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-foreground mb-4">Project Not Found</h1>
              <p className="text-muted-foreground mb-8">The project you're looking for doesn't have detailed information yet.</p>
              <Link to="/projects" className="inline-flex items-center gap-2 text-primary hover:underline">
                <ArrowLeft className="w-4 h-4" />
                Back to Projects
              </Link>
            </div>
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
        {/* Hero Section */}
        <section className="relative pt-24 pb-12 bg-gradient-to-b from-muted/50 to-background">
          <div className="container-blog">
            {/* Breadcrumb */}
            <Breadcrumb className="mb-6">
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

            {/* Back Link */}
            <Link to="/projects" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6">
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Link>

            {/* Title and Category */}
            <div className="mb-8">
              <Badge variant="secondary" className="mb-4">{project.category}</Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                {project.title}
              </h1>
            </div>

            {/* Project Snapshot - Executive Summary Card */}
            <Card className="bg-card/80 backdrop-blur border-border shadow-lg">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  Project Snapshot
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Building2 className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Client / Organization</p>
                      <p className="font-medium text-foreground">{project.snapshot.client}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Briefcase className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Industry / Domain</p>
                      <p className="font-medium text-foreground">{project.snapshot.industry}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <User className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Role Played</p>
                      <p className="font-medium text-foreground">{project.snapshot.role}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Project Duration</p>
                      <p className="font-medium text-foreground">{project.snapshot.duration}</p>
                    </div>
                  </div>
                </div>
                
                {/* Tech Stack */}
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-3">Technology Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {project.snapshot.techStack.map((tech, index) => (
                      <Badge key={index} variant="outline" className="flex items-center gap-1.5 px-3 py-1">
                        {techIcons[tech] || <Cpu className="w-4 h-4" />}
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Main Content */}
        <section className="container-blog py-12">
          <div className="max-w-4xl mx-auto space-y-16">
            
            {/* The Brief */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                The Brief
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-foreground/90 leading-relaxed mb-4">
                  <strong>The Problem:</strong> {project.brief.problem}
                </p>
                <p className="text-foreground/90 leading-relaxed mb-4">
                  <strong>Context:</strong> {project.brief.context}
                </p>
                <div className="mt-6">
                  <p className="text-sm font-medium text-muted-foreground mb-3">Key Constraints:</p>
                  <ul className="space-y-2">
                    {project.brief.constraints.map((constraint, index) => (
                      <li key={index} className="flex items-start gap-2 text-foreground/80">
                        <AlertTriangle className="w-4 h-4 text-amber-500 mt-1 shrink-0" />
                        {constraint}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <Separator />

            {/* Context & Reality Check */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Layers className="w-5 h-5 text-primary" />
                </div>
                Context & Reality Check
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-foreground/90 leading-relaxed mb-6">
                  {project.contextReality.environment}
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="bg-muted/30">
                    <CardContent className="p-5">
                      <h4 className="font-semibold text-foreground mb-3">Existing Systems</h4>
                      <ul className="space-y-2">
                        {project.contextReality.existingSystems.map((system, index) => (
                          <li key={index} className="text-sm text-foreground/80 flex items-start gap-2">
                            <Server className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" />
                            {system}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                  <Card className="bg-muted/30">
                    <CardContent className="p-5">
                      <h4 className="font-semibold text-foreground mb-3">Real-World Constraints</h4>
                      <ul className="space-y-2">
                        {project.contextReality.constraints.map((constraint, index) => (
                          <li key={index} className="text-sm text-foreground/80 flex items-start gap-2">
                            <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                            {constraint}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            <Separator />

            {/* My Approach */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Lightbulb className="w-5 h-5 text-primary" />
                </div>
                My Approach
              </h2>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Guiding Principles</h4>
                  <ul className="space-y-2">
                    {project.approach.principles.map((principle, index) => (
                      <li key={index} className="flex items-start gap-3 text-foreground/80">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                        {principle}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Strategic Decisions</h4>
                  <ul className="space-y-2">
                    {project.approach.strategicDecisions.map((decision, index) => (
                      <li key={index} className="flex items-start gap-3 text-foreground/80">
                        <Target className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                        {decision}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">Trade-offs Made</h4>
                  <ul className="space-y-2">
                    {project.approach.tradeoffs.map((tradeoff, index) => (
                      <li key={index} className="flex items-start gap-3 text-foreground/80">
                        <Zap className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" />
                        {tradeoff}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <Separator />

            {/* Execution & Architecture */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Cpu className="w-5 h-5 text-primary" />
                </div>
                Execution & Architecture
              </h2>
              <div className="space-y-6">
                <p className="text-foreground/90 leading-relaxed">
                  {project.execution.architecture}
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="bg-muted/30">
                    <CardContent className="p-5">
                      <h4 className="font-semibold text-foreground mb-3">Key Modules</h4>
                      <ul className="space-y-2">
                        {project.execution.keyModules.map((module, index) => (
                          <li key={index} className="text-sm text-foreground/80 flex items-start gap-2">
                            <Layers className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                            {module}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                  <Card className="bg-muted/30">
                    <CardContent className="p-5">
                      <h4 className="font-semibold text-foreground mb-3">Integrations</h4>
                      <ul className="space-y-2">
                        {project.execution.integrations.map((integration, index) => (
                          <li key={index} className="text-sm text-foreground/80 flex items-start gap-2">
                            <Zap className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                            {integration}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">Key Considerations</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.execution.considerations.map((consideration, index) => (
                      <Badge key={index} variant="secondary" className="px-3 py-1">
                        {consideration}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Separator />

            {/* Challenges That Mattered */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-amber-500/10">
                  <AlertTriangle className="w-5 h-5 text-amber-500" />
                </div>
                Challenges That Mattered
              </h2>
              <div className="space-y-6">
                {project.challengesThatMattered.map((challenge, index) => (
                  <Card key={index} className="bg-card border-l-4 border-l-amber-500">
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-foreground text-lg mb-2">{challenge.title}</h4>
                      <p className="text-foreground/80 mb-3">{challenge.description}</p>
                      <p className="text-sm text-muted-foreground italic">{challenge.impact}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <Separator />

            {/* Solutions & Interventions */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-green-500/10">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                </div>
                Solutions & Interventions
              </h2>
              <div className="space-y-6">
                {project.solutions.map((solution, index) => (
                  <Card key={index} className="bg-card">
                    <CardContent className="p-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">Problem</p>
                          <p className="text-foreground/90 font-medium">{solution.problem}</p>
                        </div>
                        <div>
                          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">Decision</p>
                          <p className="text-foreground/90">{solution.decision}</p>
                        </div>
                        <div>
                          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">Intervention</p>
                          <p className="text-foreground/90">{solution.intervention}</p>
                        </div>
                        <div>
                          <p className="text-xs font-medium text-green-600 dark:text-green-400 uppercase tracking-wider mb-1">Result</p>
                          <p className="text-foreground font-medium">{solution.result}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <Separator />

            {/* Outcomes & Impact */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                Outcomes & Impact
              </h2>
              <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                <CardContent className="p-6 md:p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-foreground mb-4">Quantitative Results</h4>
                      <ul className="space-y-3">
                        {project.outcomes.quantitative.map((outcome, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                            <span className="text-foreground font-medium">{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-4">Qualitative Impact</h4>
                      <ul className="space-y-3">
                        {project.outcomes.qualitative.map((outcome, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                            <span className="text-foreground/80">{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-primary/10">
                    <p className="text-foreground/90 italic">{project.outcomes.impact}</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Separator />

            {/* Learnings & Reflections */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <BookOpen className="w-5 h-5 text-primary" />
                </div>
                Learnings & Reflections
              </h2>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Key Learnings</h4>
                  <ul className="space-y-2">
                    {project.learnings.keyLearnings.map((learning, index) => (
                      <li key={index} className="flex items-start gap-3 text-foreground/80">
                        <Lightbulb className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" />
                        {learning}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-3">What Could Have Been Better</h4>
                  <ul className="space-y-2">
                    {project.learnings.improvements.map((improvement, index) => (
                      <li key={index} className="flex items-start gap-3 text-foreground/80">
                        <Target className="w-5 h-5 text-muted-foreground mt-0.5 shrink-0" />
                        {improvement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">Insights for Future Work</h4>
                  <ul className="space-y-2">
                    {project.learnings.insights.map((insight, index) => (
                      <li key={index} className="flex items-start gap-3 text-foreground/80 italic">
                        <BookOpen className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                        "{insight}"
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Project Gallery */}
            {project.gallery && project.gallery.length > 0 && (
              <>
                <Separator />
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <ImageIcon className="w-5 h-5 text-primary" />
                    </div>
                    Project Gallery
                  </h2>
                  <Carousel className="w-full">
                    <CarouselContent>
                      {project.gallery.map((image, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                          <div className="p-1">
                            <Card className="overflow-hidden">
                              <CardContent className="p-0">
                                <img
                                  src={image}
                                  alt={`${project.title} gallery image ${index + 1}`}
                                  className="w-full h-48 object-cover"
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
              </>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ProjectDetail;

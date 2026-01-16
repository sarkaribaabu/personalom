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
import nmmcEgovernance from '@/assets/nmmc-egovernance.png';
import pcmcEgovernance from '@/assets/pcmc-egovernance.png';

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
    title: "NMMC ERP SUIT",
    category: "Enterprise ERP Platform | e-Governance",
    image: nmmcEgovernance,
    snapshot: {
      client: "Navi Mumbai Municipal Corporation (NMMC)",
      industry: "Government | e-Governance",
      role: "Project Manager (Techno-Functional / Business Analyst)",
      duration: "18+ months",
      techStack: ["Java", "Angular", "Flutter", "PostgreSQL", "AI-enabled components"]
    },
    brief: {
      problem: "Citizens and municipal staff were operating across dozens of disconnected systems. Citizens experienced long queues, delayed services, and limited visibility into application status. Internally, NMMC staff had to manage multiple logins, inconsistent workflows, and systems restricted to intranet access within municipal buildings.",
      context: "NMMC required a unified ERP platform that could bring all municipal departments onto a single digital backbone. The goal was not just digitization, but operational unification: one login, standardized workflows, controlled access, and availability beyond physical office boundaries.",
      constraints: [
        "21 functional modules across diverse municipal domains",
        "Legacy applications with overlapping responsibilities",
        "Intranet-bound systems needing controlled internet exposure",
        "Role-based access across hundreds of designations",
        "Government security, audit, and compliance requirements",
        "Continuous operations during migration"
      ]
    },
    contextReality: {
      environment: "Over time, NMMC had implemented multiple department-specific applications, each solving a narrow problem in isolation. These systems evolved independently, leading to fragmented data, duplicated effort, and inconsistent reporting.",
      existingSystems: [
        "Multiple credentials per user across systems",
        "Manual data reconciliation between departments",
        "No consolidated MIS or decision-support view",
        "Limited remote access for officers and field staff",
        "Heavy dependency on physical files despite partial digitization"
      ],
      constraints: [
        "Core Module",
        "Financial Management",
        "HR & Payroll Management",
        "Property Tax Management",
        "Water Tax Management",
        "Grievance Management",
        "Works Management System",
        "Asset Management",
        "Material Management",
        "Solid Waste Management",
        "Land & Estate Management",
        "Municipal Secretary Module",
        "Central Workshop Module",
        "CFC System",
        "Enterprise Workflow Management",
        "Business Intelligence Module",
        "Disaster Management",
        "Survey Database Creation",
        "Content Management System",
        "Online Services (52 citizen services)",
        "Web Portal and Mobile Application"
      ]
    },
    approach: {
      principles: [
        "One system, one login, one source of truth",
        "Minimal disruption to ongoing municipal operations",
        "Strong alignment with existing government processes",
        "Scalability across departments and future services"
      ],
      strategicDecisions: [
        "Designed ERP around a strong core module to enforce consistency",
        "Standardized workflows while allowing department-specific extensions",
        "Enabled controlled internet access instead of full intranet isolation",
        "Prioritized MIS and dashboards for senior leadership adoption"
      ],
      tradeoffs: [
        "Phased rollout instead of big-bang implementation",
        "Conservative technology choices to ensure long-term maintainability",
        "More time invested upfront in role and permission modeling"
      ]
    },
    execution: {
      architecture: "A web-based, cloud-enabled ERP architecture was implemented with a centralized authentication and authorization layer. The platform supported both internal users and citizens through controlled role-based access.",
      keyModules: [
        "Single Sign-On across all modules",
        "Centralized role and permission engine",
        "Web and mobile access for field and supervisory staff",
        "Configurable workflows aligned with government rules",
        "Department-wise data segregation with centralized reporting"
      ],
      integrations: [
        "Payment systems: BillDesk, BBPS, ICICI, IDBI, HDFC, POS",
        "Citizen communication: WhatsApp notifications",
        "Government platforms: Aaple Sarkar, CM Dashboards",
        "Infrastructure systems: SCADA",
        "External and vendor systems: TATA and other service providers"
      ],
      considerations: [
        "Single Sign-On across all modules",
        "Centralized role and permission engine",
        "Configurable workflows aligned with government rules",
        "Department-wise data segregation with centralized reporting"
      ]
    },
    challengesThatMattered: [
      {
        title: "Unifying Disparate Departments Under One ERP",
        description: "Each department functioned with its own processes, data definitions, and reporting expectations.",
        impact: "Conducted detailed AS-IS and TO-BE process mapping. Defined common master data and approval hierarchies. Implemented a configurable workflow engine. Result: Cross-department workflows became traceable, auditable, and measurable."
      },
      {
        title: "Managing Access, Security, and Remote Availability",
        description: "Systems were previously restricted to intranet access, limiting flexibility while still requiring high security.",
        impact: "Role-based access control with fine-grained permissions. Secure internet access with audit trails and logging. Separate access layers for citizens, staff, and administrators. Result: Improved accessibility without compromising compliance or security."
      },
      {
        title: "Change Management at Scale",
        description: "Hundreds of users across departments with varying levels of digital comfort.",
        impact: "Role-specific training programs. Pilot rollouts before full deployment. Continuous feedback loops with department coordinators. Result: Smoother adoption and reduced operational resistance during rollout."
      }
    ],
    solutions: [
      {
        problem: "Unifying Disparate Departments Under One ERP",
        decision: "Conduct detailed AS-IS and TO-BE process mapping",
        intervention: "Defined common master data and approval hierarchies. Implemented a configurable workflow engine.",
        result: "Cross-department workflows became traceable, auditable, and measurable"
      },
      {
        problem: "Managing Access, Security, and Remote Availability",
        decision: "Implement role-based access control with fine-grained permissions",
        intervention: "Secure internet access with audit trails and logging. Separate access layers for citizens, staff, and administrators.",
        result: "Improved accessibility without compromising compliance or security"
      },
      {
        problem: "Change Management at Scale",
        decision: "Role-specific training programs with pilot rollouts",
        intervention: "Continuous feedback loops with department coordinators before full deployment",
        result: "Smoother adoption and reduced operational resistance during rollout"
      }
    ],
    outcomes: {
      quantitative: [
        "Significant reduction in manual file movement",
        "Faster inter-department coordination",
        "Unified MIS for senior officers and leadership",
        "Improved accountability through workflow visibility"
      ],
      qualitative: [
        "Single platform for accessing 52 municipal services",
        "Online payments and status tracking",
        "Reduced dependency on physical visits to offices",
        "Established a long-term digital foundation for NMMC",
        "Enabled future integrations and smart-city initiatives",
        "Shifted municipal operations from department-centric to process-centric"
      ],
      impact: "The ERP platform unified all municipal departments onto a single digital backbone, transforming NMMC's operations from fragmented, department-centric systems to a cohesive, process-centric organization serving 52+ citizen services."
    },
    learnings: {
      keyLearnings: [],
      improvements: [],
      insights: []
    },
    gallery: [nmmcEgovernance]
  },
  'pcmc-portal': {
    title: "PCMC ERP Suite",
    category: "Enterprise ERP & GIS Platform | e-Governance",
    image: pcmcEgovernance,
    snapshot: {
      client: "Pimpri Chinchwad Municipal Corporation (PCMC)",
      industry: "Government | e-Governance | Smart City",
      role: "Business Analyst",
      duration: "18+ months",
      techStack: ["Java", "React", "Flutter", "PostgreSQL", "AI", "GIS"]
    },
    brief: {
      problem: "Citizens interacted with PCMC through multiple disconnected legacy systems, resulting in long queues, delayed service delivery, and limited transparency. Internally, municipal staff operated across several applications with different logins, most of which were accessible only via intranet, restricting mobility and cross-department coordination.",
      context: "PCMC, a rapidly growing urban corporation, required a unified ERP suite that could consolidate departmental operations, integrate spatial intelligence through GIS, and provide a single digital interface for both citizens and officials. The objective was operational efficiency, data-driven governance, and scalable service delivery under the Smart City mission.",
      constraints: [
        "Multiple legacy systems across departments",
        "Intranet-only applications needing secure internet exposure",
        "Role-based access for diverse municipal hierarchies",
        "GIS integration for planning, assets, and infrastructure",
        "High transaction volumes across finance, services, and utilities",
        "Compliance with government security and audit standards"
      ]
    },
    contextReality: {
      environment: "PCMC's digital ecosystem had evolved department by department, leading to fragmented data silos and manual reconciliation. Decision-making lacked real-time insights, especially where geographic context was critical.",
      existingSystems: [
        "No unified view of financial, asset, and service data",
        "Manual and error-prone workflows",
        "Limited analytical and MIS capabilities",
        "Inefficient payment processing and document handling",
        "Restricted accessibility for officers outside municipal buildings"
      ],
      constraints: [
        "Financial Management",
        "HR & Payroll",
        "Asset and Inventory Management",
        "Procurement and Project Management",
        "Property Tax and Water Billing",
        "Grievance Management",
        "Citizen Services Portal",
        "Disaster and Infrastructure Management",
        "Business Intelligence Dashboards"
      ]
    },
    approach: {
      principles: [
        "Process standardization without breaking statutory rules",
        "Data consistency across departments",
        "GIS as a decision-support tool, not just visualization",
        "Ease of use for both citizens and internal users"
      ],
      strategicDecisions: [
        "Designed workflows adaptable to departmental variations",
        "Emphasized SSO and access control early to reduce resistance",
        "Prioritized BI dashboards for leadership adoption"
      ],
      tradeoffs: [
        "Phased rollout for risk mitigation",
        "Balanced feature depth with usability",
        "GIS integration prioritized over some secondary modules"
      ]
    },
    execution: {
      architecture: "A web-based, cloud-enabled ERP architecture was implemented with GIS as a foundational layer rather than an add-on. Business data and spatial data were tightly integrated to support planning, monitoring, and operational decision-making.",
      keyModules: [
        "Single Sign-On across modules",
        "Central authentication with role-based authorization",
        "Modular ERP design with shared services",
        "GIS integration for assets, utilities, and urban planning",
        "Mobile applications for field-level operations",
        "BI layer for dashboards and drill-down reporting"
      ],
      integrations: [
        "Payment gateways: CCAvenue, Bank of Baroda, EaseBuzz, BillDesk, BBPS, HDFC, POS",
        "Citizen communication: WhatsApp notifications",
        "Government platforms: Aaple Sarkar, CM Dashboards",
        "Spatial systems: GIS",
        "External service and infrastructure integrations"
      ],
      considerations: [
        "Scalability for Smart City initiatives",
        "Data security and audit compliance",
        "Accessibility for diverse user groups"
      ]
    },
    challengesThatMattered: [
      {
        title: "Integrating ERP with GIS at Scale",
        description: "Municipal data needed to be analysed alongside spatial information for planning, assets, and disaster response.",
        impact: "Defined common identifiers between ERP and GIS layers. Enabled spatial tagging of assets, properties, and infrastructure. Validated GIS-backed reports and dashboards."
      },
      {
        title: "High Transaction Volumes Across Departments",
        description: "The system had to support millions of transactions annually across finance, citizen services, utilities, and assets.",
        impact: "Streamlined workflows and reduced manual touchpoints. Standardized data structures across modules. Ensured reporting performance through optimized queries and BI tooling."
      },
      {
        title: "Adoption Across Diverse User Groups",
        description: "Users ranged from senior administrators to field staff and citizens with varying digital literacy.",
        impact: "Simplified interfaces and role-specific screens. Structured training and phased rollouts. Feedback-driven refinements during implementation."
      }
    ],
    solutions: [
      {
        problem: "Integrating ERP with GIS at Scale",
        decision: "Define common identifiers between ERP and GIS layers",
        intervention: "Enabled spatial tagging of assets, properties, and infrastructure. Validated GIS-backed reports and dashboards.",
        result: "Improved planning accuracy and faster response during infrastructure and disaster-related scenarios."
      },
      {
        problem: "High Transaction Volumes Across Departments",
        decision: "Streamline workflows and standardize data structures",
        intervention: "Reduced manual touchpoints and ensured reporting performance through optimized queries and BI tooling.",
        result: "More reliable reporting, faster processing cycles, and improved audit readiness."
      },
      {
        problem: "Adoption Across Diverse User Groups",
        decision: "Simplify interfaces with role-specific screens",
        intervention: "Structured training, phased rollouts, and feedback-driven refinements during implementation.",
        result: "Improved adoption and reduced dependency on parallel manual processes."
      }
    ],
    outcomes: {
      quantitative: [
        "Unified digital platform replacing fragmented applications",
        "Improved efficiency in finance, procurement, and asset tracking",
        "GIS-enabled insights for urban planning and infrastructure management",
        "Stronger audit trails and accountability"
      ],
      qualitative: [
        "Single portal for multiple municipal services",
        "Online payments with multiple gateway options",
        "Improved grievance visibility and turnaround times"
      ],
      impact: "Data-driven decision-making through BI dashboards. Foundation for scalable Smart City initiatives. Shift from department-centric systems to an integrated governance platform."
    },
    learnings: {
      keyLearnings: [
        "GIS integration transforms ERP from a transaction system to a decision-support platform",
        "Early focus on SSO and access control accelerates adoption"
      ],
      improvements: [
        "Would have invested more in mobile-first design for field staff from day one"
      ],
      insights: [
        "When spatial context is added to municipal data, decision-making becomes significantly more effective"
      ]
    },
    gallery: [pcmcEgovernance]
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

            {/* Context, Systems & Architecture (Merged) */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Layers className="w-5 h-5 text-primary" />
                </div>
                Context & Technical Landscape
              </h2>
              
              {/* Environment Overview */}
              <p className="text-foreground/90 leading-relaxed mb-8">
                {project.contextReality.environment}
              </p>

              {/* Three Column Grid: Existing Systems, Constraints, Architecture */}
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <Card className="bg-muted/30 border-muted">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-2 mb-4">
                      <Server className="w-5 h-5 text-muted-foreground" />
                      <h4 className="font-semibold text-foreground">Legacy Systems</h4>
                    </div>
                    <ul className="space-y-2">
                      {project.contextReality.existingSystems.map((system, index) => (
                        <li key={index} className="text-sm text-foreground/80 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2 shrink-0" />
                          {system}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-muted/30 border-muted">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-2 mb-4">
                      <AlertTriangle className="w-5 h-5 text-amber-500" />
                      <h4 className="font-semibold text-foreground">Constraints</h4>
                    </div>
                    <ul className="space-y-2">
                      {project.contextReality.constraints.map((constraint, index) => (
                        <li key={index} className="text-sm text-foreground/80 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                          {constraint}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-muted/30 border-muted">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-2 mb-4">
                      <Cpu className="w-5 h-5 text-primary" />
                      <h4 className="font-semibold text-foreground">Key Modules</h4>
                    </div>
                    <ul className="space-y-2">
                      {project.execution.keyModules.slice(0, 5).map((module, index) => (
                        <li key={index} className="text-sm text-foreground/80 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                          {module}
                        </li>
                      ))}
                      {project.execution.keyModules.length > 5 && (
                        <li className="text-sm text-muted-foreground">
                          +{project.execution.keyModules.length - 5} more
                        </li>
                      )}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Architecture Description */}
              <Card className="bg-gradient-to-br from-muted/50 to-muted/20 border-muted">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Globe className="w-4 h-4 text-primary" />
                    Solution Architecture
                  </h4>
                  <p className="text-foreground/80 mb-4">{project.execution.architecture}</p>
                  
                  <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border">
                    <span className="text-xs text-muted-foreground mr-2">Integrations:</span>
                    {project.execution.integrations.map((integration, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {integration}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="text-xs text-muted-foreground mr-2">Considerations:</span>
                    {project.execution.considerations.map((consideration, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {consideration}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
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
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="bg-card">
                  <CardContent className="p-5">
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      Guiding Principles
                    </h4>
                    <ul className="space-y-2">
                      {project.approach.principles.map((principle, index) => (
                        <li key={index} className="text-sm text-foreground/80">
                          {principle}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="bg-card">
                  <CardContent className="p-5">
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Target className="w-4 h-4 text-primary" />
                      Strategic Decisions
                    </h4>
                    <ul className="space-y-2">
                      {project.approach.strategicDecisions.map((decision, index) => (
                        <li key={index} className="text-sm text-foreground/80">
                          {decision}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-card">
                  <CardContent className="p-5">
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-amber-500" />
                      Trade-offs Made
                    </h4>
                    <ul className="space-y-2">
                      {project.approach.tradeoffs.map((tradeoff, index) => (
                        <li key={index} className="text-sm text-foreground/80">
                          {tradeoff}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            <Separator />

            {/* Challenges & Solutions (Merged) */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-gradient-to-br from-amber-500/10 to-green-500/10">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                Challenges & How We Solved Them
              </h2>
              
              <div className="space-y-4">
                {/* Map challenges with their corresponding solutions */}
                {project.challengesThatMattered.map((challenge, index) => {
                  const relatedSolution = project.solutions[index];
                  return (
                    <Card key={index} className="bg-card overflow-hidden">
                      <div className="grid md:grid-cols-2">
                        {/* Challenge Side */}
                        <div className="p-6 bg-amber-500/5 border-r border-border">
                          <div className="flex items-start gap-3 mb-3">
                            <div className="p-1.5 rounded bg-amber-500/20 shrink-0">
                              <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                            </div>
                            <div>
                              <p className="text-xs font-medium text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-1">Challenge</p>
                              <h4 className="font-semibold text-foreground">{challenge.title}</h4>
                            </div>
                          </div>
                          <p className="text-sm text-foreground/80 mb-2">{challenge.description}</p>
                          <p className="text-xs text-muted-foreground italic">{challenge.impact}</p>
                        </div>

                        {/* Solution Side */}
                        {relatedSolution && (
                          <div className="p-6 bg-green-500/5">
                            <div className="flex items-start gap-3 mb-3">
                              <div className="p-1.5 rounded bg-green-500/20 shrink-0">
                                <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400" />
                              </div>
                              <div>
                                <p className="text-xs font-medium text-green-600 dark:text-green-400 uppercase tracking-wider mb-1">Solution</p>
                                <h4 className="font-semibold text-foreground">{relatedSolution.decision}</h4>
                              </div>
                            </div>
                            <p className="text-sm text-foreground/80 mb-3">{relatedSolution.intervention}</p>
                            <div className="flex items-center gap-2 text-sm">
                              <TrendingUp className="w-4 h-4 text-green-600 dark:text-green-400" />
                              <span className="font-medium text-green-700 dark:text-green-300">{relatedSolution.result}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </Card>
                  );
                })}

                {/* Additional solutions without paired challenges */}
                {project.solutions.length > project.challengesThatMattered.length && (
                  <div className="mt-6">
                    <h4 className="text-sm font-medium text-muted-foreground mb-4">Additional Interventions</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {project.solutions.slice(project.challengesThatMattered.length).map((solution, index) => (
                        <Card key={index} className="bg-green-500/5 border-green-500/20">
                          <CardContent className="p-5">
                            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">Problem</p>
                            <p className="text-sm text-foreground/90 font-medium mb-2">{solution.problem}</p>
                            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">Intervention</p>
                            <p className="text-sm text-foreground/80 mb-3">{solution.intervention}</p>
                            <div className="flex items-center gap-2 text-sm pt-2 border-t border-border">
                              <CheckCircle2 className="w-4 h-4 text-green-500" />
                              <span className="font-medium text-foreground">{solution.result}</span>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}
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

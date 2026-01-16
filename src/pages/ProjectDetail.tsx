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
import nmPoliceBi from '@/assets/nm-police-bi.png';
import scLandrecords from '@/assets/sc-landrecords.png';
import mhadaApp from '@/assets/mhada-app.png';
import dmsApp from '@/assets/dms-app.png';
import bmcPothole from '@/assets/bmc-pothole.png';
import pwdPothole from '@/assets/pwd-pothole.png';
import nepalPolice from '@/assets/nepal-police.png';
import nmmcDashboard from '@/assets/nmmc-dashboard.png';
import bajajFinserv from '@/assets/bajaj-finserv.png';
import guppaai from '@/assets/guppaai.png';
import pngBrothers from '@/assets/png-brothers.png';
import csJewellers from '@/assets/cs-jewellers.png';
import lomAi from '@/assets/lom-ai.png';
import bmcDm from '@/assets/bmc-dm.png';
import mobileGames from '@/assets/mobile-games.png';

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
    title: "Settlement Commissioner – Land Records Integrated Portal",
    category: "Unified Citizen Services Platform | Government (Land & Revenue)",
    image: scLandrecords,
    snapshot: {
      client: "Government of Maharashtra – Settlement Commissioner & Director of Land Records",
      industry: "Government | Land Records | Revenue Administration",
      role: "Project Director",
      duration: "24+ months",
      techStack: [".NET CORE", "HTML5", "MySQL"]
    },
    brief: {
      problem: "Land record services were distributed across more than 30 independent web portals. Citizens had no clear understanding of which portal to use for which service, leading to confusion, repeated visits, dependency on intermediaries, and low trust in digital services.",
      context: "The Settlement Commissioner's office delivers some of the most critical citizen services in Maharashtra, including Property Card, 7/12, name transfer, and various land-related certificates. The need was to create a single, authoritative digital entry point that simplified access while retaining departmental autonomy behind the scenes.",
      constraints: [
        "30+ existing portals with different ownership and standards",
        "High public dependency on services",
        "Sensitive land and ownership data",
        "Multiple payment and government integrations",
        "Need for clarity, not complexity, in citizen-facing design"
      ]
    },
    contextReality: {
      environment: "Over time, individual services had been digitized independently, resulting in fragmented user experiences. While services existed online, discoverability and usability were major barriers.",
      existingSystems: [
        "Uncertainty about the correct portal for each service",
        "Repeated form submissions across systems",
        "Increased reliance on agents and middlemen",
        "Poor feedback loop for service delivery quality"
      ],
      constraints: [
        "No consolidated view of service demand or bottlenecks",
        "Limited ability to monitor adoption and performance",
        "Delayed corrective action due to scattered reporting"
      ]
    },
    approach: {
      principles: [
        "One citizen, one portal, many services",
        "Simplicity over feature density",
        "Discoverability before digitization depth",
        "Early feedback loops for continuous improvement"
      ],
      strategicDecisions: [
        "Designed a service orchestration layer",
        "Standardized service discovery and categorization",
        "Maintained backend system autonomy"
      ],
      tradeoffs: [
        "Integration over replacement approach",
        "Citizen experience prioritized over departmental preferences",
        "Phased rollout based on service criticality"
      ]
    },
    execution: {
      architecture: "The solution was implemented as a unified presentation and orchestration layer, integrating existing service systems rather than replacing them.",
      keyModules: [
        "One portal providing access to 70+ services",
        "Citizen-first navigation based on intent, not department",
        "Clear service categorization and guidance",
        "Centralized dashboard for leadership oversight"
      ],
      integrations: [
        "Payment gateways: Bank of Baroda, BillDesk, BillCloud, HDFC",
        "Government platforms: NIC services",
        "Land systems: Bhulekh / Bhumi Abhilekh, e-Peek Pahani, e-Chavadi",
        "Legal and compliance systems: e-QJCourt, e-Hakka",
        "Data ingestion: Excel / CSV imports",
        "Citizen communication: WhatsApp"
      ],
      considerations: [
        "Scalable design to onboard future services",
        "Seamless redirection and data exchange with backend systems",
        "Centralized analytics and reporting"
      ]
    },
    challengesThatMattered: [
      {
        title: "Bringing 30+ Services Under One Roof",
        description: "Each service had its own portal, rules, and technical dependencies.",
        impact: "Designed a service orchestration layer. Standardized service discovery and categorization. Maintained backend system autonomy. Result: A single, coherent citizen experience without disrupting existing systems."
      },
      {
        title: "Designing for Trust and Adoption",
        description: "Land services are high-stakes, and citizens are risk-averse.",
        impact: "Clear language and step-by-step guidance. Transparent service flow and redirections. Feedback collection post-service. Result: Over 100 five-star reviews within the first month of launch."
      },
      {
        title: "Enabling Early Administrative Intervention",
        description: "Leadership lacked real-time visibility into service performance.",
        impact: "Consolidated dashboards showing service demand and usage. Early-warning indicators for spikes and delays. Result: Faster corrective action and improved service reliability."
      }
    ],
    solutions: [
      {
        problem: "Citizens confused about which portal to use for which service",
        decision: "Create unified entry point with intent-based navigation",
        intervention: "Designed citizen-first service categorization and clear guidance",
        result: "Single portal for all major land record services with reduced confusion"
      },
      {
        problem: "High dependency on intermediaries for land services",
        decision: "Focus on trust-building through transparency",
        intervention: "Clear language, step-by-step guidance, transparent service flows",
        result: "Over 100 five-star reviews within first month of launch"
      },
      {
        problem: "Leadership lacked visibility into service performance",
        decision: "Build centralized monitoring and analytics",
        intervention: "Consolidated dashboards with early-warning indicators",
        result: "Faster corrective action and improved service reliability"
      }
    ],
    outcomes: {
      quantitative: [
        "Single portal for all major land record services",
        "Access to 70+ services through unified interface",
        "Over 100 five-star reviews within first month",
        "Unified visibility across all services for leadership"
      ],
      qualitative: [
        "Reduced confusion and dependency on intermediaries",
        "High satisfaction and trust in digital delivery",
        "Data-backed decision-making for leadership",
        "Improved monitoring and governance"
      ],
      impact: "Established a scalable digital foundation for land records. Set a benchmark for citizen-centric government portals. Demonstrated how integration can outperform replacement."
    },
    learnings: {
      keyLearnings: [
        "Integration of existing systems can be more effective than replacement",
        "Citizen-centric design requires simplifying complexity, not hiding it"
      ],
      improvements: [
        "Earlier stakeholder alignment across departments would have accelerated adoption"
      ],
      insights: [
        "Trust in government digital services is built through transparency and simplicity"
      ]
    },
    gallery: [scLandrecords]
  },
  'navi-mumbai-police': {
    title: "Navi Mumbai Police Commissionerate Dashboard",
    category: "Integrated Command & Analytics Platform | Government (Law Enforcement)",
    image: nmPoliceBi,
    snapshot: {
      client: "Maharashtra Government – Navi Mumbai Police Commissionerate",
      industry: "Government | Law Enforcement | Public Safety",
      role: "Project Director",
      duration: "3+ months",
      techStack: ["PHP", "React", "MySQL", "AI-driven analytics"]
    },
    brief: {
      problem: "Senior police leadership faced difficulty accessing consolidated crime, traffic, and administrative intelligence. Data was spread across multiple systems with no unified dashboard, making analysis slow, fragmented, and reactive. This directly impacted the ability to respond effectively to rising crime trends.",
      context: "The Commissioner required a single, authoritative view of policing operations across the city. The objective was to enable fast, data-backed decision-making through real-time visibility, historical analysis, and predictive insights, all aligned to the hierarchical structure of the police force.",
      constraints: [
        "Multiple independent data sources with no common reporting layer",
        "Time-sensitive decision-making requirements",
        "Strict role-based visibility across police ranks",
        "Need for historical trend analysis and predictive insights",
        "Very short delivery timeline"
      ]
    },
    contextReality: {
      environment: "Operational data existed across crime systems, traffic records, administrative reports, and social platforms. Most reviews depended on manual consolidation using spreadsheets, which limited depth of analysis and delayed corrective action.",
      existingSystems: [
        "No single source of truth for leadership reviews",
        "Manual report preparation before review meetings",
        "Limited ability to drill down from city-level to station-level data",
        "Reactive policing due to lack of predictive insights"
      ],
      constraints: [
        "Crime vertical",
        "Traffic vertical",
        "Administration vertical",
        "Special Branch vertical"
      ]
    },
    approach: {
      principles: [
        "One dashboard for leadership, not multiple reports",
        "Insights over raw data",
        "Drill-down capability without losing context",
        "Predictive support for preventive policing"
      ],
      strategicDecisions: [
        "Vision definition and outcome alignment with police leadership",
        "Translating operational policing needs into analytical requirements",
        "Overseeing data consolidation and validation",
        "Designing hierarchy-based access and dashboards",
        "Driving rapid execution within tight timelines"
      ],
      tradeoffs: [
        "Prioritized core analytics over comprehensive feature set",
        "Focused on leadership adoption first",
        "Rapid delivery over extensive customization"
      ]
    },
    execution: {
      architecture: "A centralized dashboard platform was developed with structured data ingestion, analytics, and visualization layers. The solution consolidated three years of historical data and enabled both retrospective and forward-looking analysis.",
      keyModules: [
        "Unified data model across all verticals",
        "Historical data ingestion for three years",
        "AI-assisted trend and pattern identification",
        "Interactive dashboards with drill-down charts and tabular reports",
        "High-performance rendering for leadership review meetings",
        "Role-based intelligence with hierarchy-aware data visibility"
      ],
      integrations: [
        "CCTNS",
        "mPolice",
        "Excel / CSV bulk imports",
        "Social platforms: Facebook, Instagram, WhatsApp",
        "CM Dashboards and other government reporting systems"
      ],
      considerations: [
        "Commissioner of Police (CP) level access",
        "Joint CP, Additional CP, Deputy CP access layers",
        "Assistant CP and Police Inspector visibility",
        "Rank-specific operational scope and accountability"
      ]
    },
    challengesThatMattered: [
      {
        title: "Data Consolidation Across Systems",
        description: "Data existed in different formats, frequencies, and structures across systems.",
        impact: "Designed standardized ingestion pipelines. Cleaned and normalized historical datasets. Validated data with department owners. Result: Reliable, comparable data across all verticals."
      },
      {
        title: "Enabling Predictive and Preventive Analysis",
        description: "Leadership needed more than past data; they needed early signals.",
        impact: "Applied AI models to identify trends, spikes, and repeat patterns. Enabled time-based and geography-based comparisons. Result: Shift from reactive reporting to preventive and predictive decision-making."
      },
      {
        title: "Supporting High-Pressure Review Environments",
        description: "Dashboards had to perform flawlessly during review meetings.",
        impact: "Optimized queries and caching. Simplified navigation with intuitive visual hierarchies. Result: Fast, interruption-free reviews with focused discussions."
      }
    ],
    solutions: [
      {
        problem: "Data Consolidation Across Systems",
        decision: "Design standardized ingestion pipelines",
        intervention: "Cleaned and normalized historical datasets. Validated data with department owners.",
        result: "Reliable, comparable data across all verticals"
      },
      {
        problem: "Enabling Predictive and Preventive Analysis",
        decision: "Apply AI models to identify trends, spikes, and repeat patterns",
        intervention: "Enabled time-based and geography-based comparisons for proactive insights.",
        result: "Shift from reactive reporting to preventive and predictive decision-making"
      },
      {
        problem: "Supporting High-Pressure Review Environments",
        decision: "Optimize queries and caching for performance",
        intervention: "Simplified navigation with intuitive visual hierarchies for leadership use.",
        result: "Fast, interruption-free reviews with focused discussions"
      }
    ],
    outcomes: {
      quantitative: [
        "Single command dashboard for city-wide policing",
        "Faster interpretation of crime and traffic trends",
        "Improved coordination across verticals",
        "Reduced dependence on manual reporting"
      ],
      qualitative: [
        "Enabled preventive policing through predictive insights",
        "Strengthened leadership control and situational awareness",
        "Appreciated by senior police leadership, including the Deputy Director General of Police, Maharashtra",
        "Established a repeatable analytics framework for policing",
        "Created a foundation for future expansion across districts"
      ],
      impact: "The dashboard transformed police leadership's ability to make data-driven decisions, enabling preventive policing and earning recognition from the Deputy Director General of Police, Maharashtra."
    },
    learnings: {
      keyLearnings: [],
      improvements: [],
      insights: []
    },
    gallery: [nmPoliceBi]
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
    title: "Laws of Motion",
    category: "AI-Driven Custom Apparel Platform | Private",
    image: lomAi,
    snapshot: {
      client: "Laws of Motion",
      industry: "Private | Fashion Technology | Sustainable Apparel",
      role: "Business Analyst",
      duration: "3+ years",
      techStack: ["Python", "Computer Vision", "Machine Learning", "MySQL", "WhatsApp"]
    },
    brief: {
      problem: "Standard apparel sizing systems are fundamentally broken. Rigid size charts fail to reflect the diversity of women's body shapes, forcing customers to compromise on fit or spend additional time and money on alterations. This mismatch drives frustration for consumers and inefficiency for brands. At an industry level, poor fit directly fuels massive environmental waste. High return rates, excess inventory, and unsold garments are structural outcomes of producing clothing that does not fit real bodies.",
      context: "Laws of Motion set out to challenge the foundations of traditional fashion manufacturing. The goal was to build a tech-first, on-demand apparel system that solved fit at the individual level while eliminating inventory waste at the supply-chain level. The platform redefined clothing not as standardized SKUs, but as precision-manufactured products tailored to each individual body.",
      constraints: [
        "Standard sizing systems fail women's body diversity",
        "High return rates from poor fit",
        "Environmental waste from deadstock and excess inventory",
        "Traditional bulk production dependency",
        "Customer trust in digital body measurement",
        "On-demand manufacturing workflow requirements"
      ]
    },
    contextReality: {
      environment: "Two principles guided the design: Fit should be mathematically precise, not approximated. Garments should be made only after demand is confirmed. The supply chain was redesigned around made-to-order production with no pre-produced inventory.",
      existingSystems: [
        "Conventional 10-12 apparel sizes",
        "Traditional bulk production models",
        "Pre-produced inventory systems",
        "Standard size charts"
      ],
      constraints: [
        "1,260 microsizes spanning sizes 00-40",
        "AI-driven computer vision for body measurement",
        "Two-photo body scan process",
        "~99% accuracy in microsize matching",
        "Zero-waste on-demand manufacturing",
        "Digital cutting per confirmed microsize",
        "Order-triggered production only"
      ]
    },
    approach: {
      principles: [
        "Accuracy beats speed, especially in fit",
        "Fit problems are data problems",
        "Sustainability must be structural, not cosmetic",
        "Technology should reduce compromise, not shift it elsewhere"
      ],
      strategicDecisions: [
        "Computer vision pipeline for body measurement extraction",
        "ML models for microsize classification",
        "Order-driven production orchestration",
        "Integration with digital cutting and manufacturing systems"
      ],
      tradeoffs: [
        "Precision over speed in body measurement",
        "Made-to-order vs bulk production efficiency",
        "Education investment for new sizing paradigm"
      ]
    },
    execution: {
      architecture: "The platform combined AI, manufacturing logic, and ecommerce into a single workflow. Computer vision pipeline extracts body measurements from just two photos, ML models classify into 1,260 microsizes with ~99% accuracy, and order-driven production orchestration ensures garments are manufactured only after orders are placed.",
      keyModules: [
        "Computer Vision Body Scan",
        "ML Microsize Classification Engine",
        "1,260 Microsize Database",
        "Order-Driven Production System",
        "Digital Cutting Integration",
        "Customer Communication Layer"
      ],
      integrations: [
        "Payments: CCAvenue",
        "Ecommerce: Shopify",
        "AI & OCR services",
        "Communication: Email, SMS, WhatsApp"
      ],
      considerations: [
        "Near-tailor-level accuracy without physical measurement",
        "Zero inventory holding model",
        "Minimal fabric waste through precise cutting",
        "Customer education for new paradigm"
      ]
    },
    challengesThatMattered: [
      {
        title: "Capturing Accurate Measurements Without Physical Trials",
        description: "Replacing in-store fittings with a digital process using just two photos.",
        impact: "Computer vision-based body scan with calibration and validation against real-world fit outcomes. Near-tailor-level accuracy without physical measurement."
      },
      {
        title: "Scaling Manufacturing Without Inventory",
        description: "Traditional apparel supply chains depend on bulk production.",
        impact: "Order-triggered manufacturing workflows with digitally controlled fabric cutting per microsize. Zero inventory holding and minimal fabric waste."
      },
      {
        title: "Educating Users on a New Sizing Paradigm",
        description: "Customers were accustomed to standard size labels.",
        impact: "Fit-focused communication instead of size labels with confidence-building explanations during onboarding. Higher trust and acceptance of microsizing."
      }
    ],
    solutions: [
      {
        problem: "Capturing Accurate Measurements Without Physical Trials",
        decision: "Computer vision-based body scan using just two photos",
        intervention: "Calibration and validation against real-world fit outcomes",
        result: "Near-tailor-level accuracy without physical measurement"
      },
      {
        problem: "Scaling Manufacturing Without Inventory",
        decision: "Order-triggered manufacturing workflows",
        intervention: "Digitally controlled fabric cutting per microsize",
        result: "Zero inventory holding and minimal fabric waste"
      },
      {
        problem: "Educating Users on a New Sizing Paradigm",
        decision: "Fit-focused communication instead of size labels",
        intervention: "Confidence-building explanations during onboarding",
        result: "Higher trust and acceptance of microsizing"
      }
    ],
    outcomes: {
      quantitative: [
        "1,260 microsizes spanning sizes 00-40",
        "~99% accuracy in microsize matching",
        "Near-zero deadstock",
        "Significant reduction in fabric waste",
        "Lower return rates"
      ],
      qualitative: [
        "Consistently better-fitting garments",
        "Reduced need for alterations",
        "Increased confidence in online apparel purchases",
        "Differentiated positioning in fashion-tech",
        "Efficient, demand-driven production",
        "Scalable foundation for expansion across styles and categories"
      ],
      impact: "Laws of Motion successfully created a precision-fit, zero-waste apparel platform that challenges the foundations of traditional fashion manufacturing, proving that AI-driven microsizing can solve fit at the individual level while eliminating inventory waste at the supply-chain level."
    },
    learnings: {
      keyLearnings: [
        "Fit problems are fundamentally data problems solvable with precision AI",
        "Sustainability must be structural, not cosmetic",
        "Technology should reduce compromise for consumers, not shift it"
      ],
      improvements: [],
      insights: [
        "Precision manufacturing combined with AI-driven fit creates sustainable competitive advantage in fashion"
      ]
    },
    gallery: [lomAi]
  },
  'guppaai': {
    title: "GuppaAI",
    category: "Conversational AI Platform | Owned Product",
    image: guppaai,
    snapshot: {
      client: "Guppa.ai (Owned Product)",
      industry: "Conversational AI | Intelligent Interfaces | Product Discovery",
      role: "Researcher",
      duration: "6+ months",
      techStack: ["Python", "FastAPI", "LLM", "REST", "GraphQL", "SaaS"]
    },
    brief: {
      problem: "Most digital products still rely on static interfaces: menus, filters, nested categories, and keyword-based search bars. Users are forced to translate intent into clicks and queries, creating friction and cognitive overload. This leads to 'search fatigue,' where the effort required to find a single item outweighs the motivation to continue, resulting in high abandonment and lost conversions.",
      context: "User expectations have shifted. People now expect instant, personalized responses that understand intent rather than syntax. Guppa.ai was conceived to bridge this gap by replacing static navigation with a natural language, intent-driven conversational layer.",
      constraints: [
        "Intent detection and contextual clarification",
        "Real-time reasoning over structured and unstructured data",
        "Seamless handoff to existing workflows",
        "Designed for impatient users expecting instant relevance",
        "Enterprise- and government-ready security"
      ]
    },
    contextReality: {
      environment: "Businesses remain constrained by rigid UI paradigms that separate user intent from system behavior. Guppa.ai reimagines how users interact with applications—instead of navigating interfaces, users simply express what they want.",
      existingSystems: [
        "Traditional menus, filters, and search bars",
        "Static navigation patterns",
        "Keyword-based discovery systems"
      ],
      constraints: [
        "Natural language interaction replacing menus and filters",
        "Intent detection and contextual clarification",
        "Real-time reasoning over structured and unstructured data",
        "Seamless handoff to existing workflows (search, booking, purchase, support)"
      ]
    },
    approach: {
      principles: [
        "Intent matters more than keywords",
        "Fewer questions, better questions",
        "Conversation should shorten journeys, not extend them",
        "Trust and control are prerequisites for AI adoption"
      ],
      strategicDecisions: [
        "Backend-first, integration-friendly platform design",
        "LLM-driven reasoning layer with strict guardrails",
        "Stateless conversational orchestration",
        "Horizontal scalability based on MAU demand"
      ],
      tradeoffs: [
        "Intent-first design over free-form conversation",
        "Minimal clarification strategy for fast convergence",
        "Guardrail-based reasoning for predictable behavior"
      ]
    },
    execution: {
      architecture: "Guppa.ai was designed as a backend-first, integration-friendly platform with asynchronous microservices-based backend, LLM-driven reasoning layer with strict guardrails, stateless conversational orchestration, REST and GraphQL integration with host applications, and horizontal scalability based on MAU demand.",
      keyModules: [
        "Natural language interaction engine",
        "Intent detection and clarification system",
        "Real-time reasoning layer",
        "Workflow handoff integration",
        "Security and governance framework"
      ],
      integrations: [
        "LLM providers and ML services",
        "Email, SMS, WhatsApp",
        "External systems via REST / GraphQL APIs"
      ],
      considerations: [
        "Backend-only AI key management",
        "Encrypted data exchange end-to-end",
        "Tenant-level isolation",
        "Read-only access by default",
        "No client data used for model training",
        "Compliance-ready architecture",
        "Auditable interaction flows"
      ]
    },
    challengesThatMattered: [
      {
        title: "Preventing 'Chatty' or Aimless Conversations",
        description: "Many conversational systems over-engage without delivering outcomes.",
        impact: "Intent-first design with minimal clarification strategy and fast convergence to results. Conversations stayed purposeful and outcome-driven."
      },
      {
        title: "Balancing AI Flexibility with Enterprise Control",
        description: "Free-form AI responses risk inconsistency and compliance issues.",
        impact: "Guardrail-based reasoning with controlled response scopes and read-only default interactions. Predictable, safe behavior without killing usefulness."
      },
      {
        title: "Making It Deployable Across Environments",
        description: "Different clients required different deployment and data control models.",
        impact: "Modular deployment architecture with tenant isolation and hybrid/on-prem support. Adoption-ready across startups, enterprises, and regulated environments."
      }
    ],
    solutions: [
      {
        problem: "Preventing 'Chatty' or Aimless Conversations",
        decision: "Intent-first design",
        intervention: "Minimal clarification strategy with fast convergence to results",
        result: "Conversations stayed purposeful and outcome-driven"
      },
      {
        problem: "Balancing AI Flexibility with Enterprise Control",
        decision: "Guardrail-based reasoning",
        intervention: "Controlled response scopes with read-only default interactions",
        result: "Predictable, safe behavior without killing usefulness"
      },
      {
        problem: "Making It Deployable Across Environments",
        decision: "Modular deployment architecture",
        intervention: "Tenant isolation and hybrid/on-prem support",
        result: "Adoption-ready across startups, enterprises, and regulated environments"
      }
    ],
    outcomes: {
      quantitative: [
        "Reduced search fatigue for users",
        "Faster discovery and decision-making",
        "More natural interaction with complex systems"
      ],
      qualitative: [
        "Lower drop-off during discovery",
        "Higher engagement with existing platforms",
        "Reduced dependency on heavy UI redesigns",
        "Demonstrated a shift from interface-driven to intent-driven design",
        "Positioned Guppa.ai as a conversational layer, not a replacement system",
        "Created a foundation for AI-native product experiences"
      ],
      impact: "Guppa.ai reimagines how users interact with applications—enabling intent-driven discovery and decision-making that reduces search fatigue and drives higher engagement across digital products."
    },
    learnings: {
      keyLearnings: [
        "Intent matters more than keywords in conversational AI",
        "Fewer, better questions lead to faster user outcomes",
        "Guardrails enable enterprise adoption without sacrificing usefulness"
      ],
      improvements: [
        "Continue expanding deployment models for regulated industries"
      ],
      insights: [
        "The future of product interaction is conversational, not navigational"
      ]
    },
    gallery: [guppaai]
  },
  'mhada-app': {
    title: "MHADA Housing Lottery & Verification Platform",
    category: "Digital Housing Allocation System | Government (Housing & Urban Development)",
    image: mhadaApp,
    snapshot: {
      client: "Government of Maharashtra – Maharashtra Housing and Area Development Authority (MHADA)",
      industry: "Government | Housing | Urban Development",
      role: "Project / Product Manager",
      duration: "10+ months",
      techStack: ["Python", "Java", "Angular", "Oracle", "Ionic", "Flutter"]
    },
    brief: {
      problem: "The MHADA housing lottery process relied on partial online registration followed by physical document submission. Document verification happened only after lottery winners were declared. If ineligible or tampered documents were discovered, the entire lottery process had to be repeated, leaving housing units unallotted and significantly delaying possession.",
      context: "MHADA lotteries attract extremely high citizen participation and public scrutiny. The process needed to be fair, transparent, tamper-proof, and time-bound. The objective was to eliminate post-lottery failures by ensuring complete eligibility and document verification before a citizen even entered the lottery pool.",
      constraints: [
        "Very high applicant volumes",
        "Multiple identity and eligibility documents",
        "Dependence on state and central issuing authorities",
        "Zero tolerance for fraud or duplication",
        "Tight timelines driven by public and political expectations"
      ]
    },
    contextReality: {
      environment: "While application submission was partially digital, the backend process was still document-heavy and manual. Verification bottlenecks surfaced only after lottery completion, creating systemic delays.",
      existingSystems: [
        "Manual scrutiny of documents after lottery",
        "Repeated lotteries due to post-selection disqualifications",
        "Long waiting periods for final allotment",
        "High administrative overhead and citizen dissatisfaction"
      ],
      constraints: [
        "Mobile application for registration and document upload",
        "Acceptance of scanned copies and PDFs instead of physical documents",
        "OCR-based extraction of identification numbers",
        "Cross-verification with issuing authorities",
        "Aadhaar-based uniqueness validation via DigiLocker",
        "End-to-end digital eligibility verification before lottery entry"
      ]
    },
    approach: {
      principles: [
        "Verify before selection, not after",
        "Digital trust over manual scrutiny",
        "Eliminate duplication at source",
        "Design for auditability and fairness"
      ],
      strategicDecisions: [
        "Made document verification mandatory before lottery eligibility",
        "Used Aadhaar as the uniqueness anchor via DigiLocker",
        "Automated rejection for ineligible applicants upfront",
        "Mobile-first approach to maximize reach and ease"
      ],
      tradeoffs: [
        "Upfront verification over traditional post-lottery scrutiny",
        "Strict eligibility enforcement over flexible applicant pool",
        "Digital-only verification over hybrid physical processes"
      ]
    },
    execution: {
      architecture: "The system was built as a verification-led workflow rather than a lottery-led workflow. OCR engine extracts key identifiers from uploaded documents, automated verification calls to issuing authorities, Aadhaar-based uniqueness enforcement, and a scalable backend to handle peak lottery traffic.",
      keyModules: [
        "Mobile application for registration and document upload",
        "OCR engine for identifier extraction",
        "Automated verification workflows",
        "Aadhaar-based uniqueness enforcement",
        "Digital-only applicant lifecycle management",
        "Scalable backend for peak traffic handling"
      ],
      integrations: [
        "Payment gateway: PayU",
        "Identity and document verification: DigiLocker, Signzy",
        "Government authorities: PAN, UIDAI, UDID, MahaIT, RTO",
        "State platforms: Aaple Sarkar",
        "Data ingestion: Excel / CSV imports",
        "Citizen communication: WhatsApp"
      ],
      considerations: [
        "High-throughput verification without manual bottlenecks",
        "Automated eligibility scoring",
        "Parallel verification workflows",
        "OCR-driven data extraction"
      ]
    },
    challengesThatMattered: [
      {
        title: "Preventing Duplicate and Fraudulent Applications",
        description: "Applicants could previously submit multiple or manipulated applications.",
        impact: "Aadhaar-based uniqueness enforcement and cross-verification with issuing authorities eliminated duplicate and fraudulent entries before lottery execution."
      },
      {
        title: "Managing Verification at Scale",
        description: "Thousands of applications with multiple documents each needed to be verified efficiently.",
        impact: "OCR-driven data extraction, parallel verification workflows, and automated eligibility scoring enabled high-throughput verification without manual bottlenecks."
      },
      {
        title: "Reducing End-to-End Allotment Time",
        description: "Allotment previously took 90–120 days post-lottery.",
        impact: "Front-loaded verification and digitized approval workflows reduced end-to-end process to approximately 45 days, from registration to final allotment."
      }
    ],
    solutions: [
      {
        problem: "Preventing Duplicate and Fraudulent Applications",
        decision: "Implement Aadhaar-based uniqueness enforcement",
        intervention: "Cross-verification with issuing authorities to validate all identity documents.",
        result: "Eliminated duplicate and fraudulent entries before lottery execution"
      },
      {
        problem: "Managing Verification at Scale",
        decision: "Build OCR-driven data extraction with parallel verification",
        intervention: "Automated eligibility scoring with parallel verification workflows.",
        result: "High-throughput verification without manual bottlenecks"
      },
      {
        problem: "Reducing End-to-End Allotment Time",
        decision: "Front-load verification before lottery entry",
        intervention: "Digitized approval and allotment workflows to eliminate post-lottery delays.",
        result: "End-to-end process reduced from 90-120 days to approximately 45 days"
      }
    ],
    outcomes: {
      quantitative: [
        "End-to-end process reduced from 90-120 days to ~45 days",
        "Eliminated duplicate and fraudulent applications",
        "No post-lottery verification failures",
        "Significant reduction in rework and legal risk"
      ],
      qualitative: [
        "Fully digital, transparent application process",
        "Faster and predictable allotment timelines",
        "Reduced uncertainty and repeat lotteries",
        "Simplified audit and compliance processes",
        "Established a new benchmark for government lottery systems",
        "Created a scalable foundation for future MHADA housing schemes"
      ],
      impact: "The platform demonstrated how verification-first design improves fairness and speed, establishing a new benchmark for government housing lottery systems and eliminating post-lottery failures entirely."
    },
    learnings: {
      keyLearnings: [],
      improvements: [],
      insights: []
    },
    gallery: [mhadaApp]
  },
  'dms': {
    title: "Dealer Management System",
    category: "Unified Sales, Service & Operations Platform | Web Application",
    image: dmsApp,
    snapshot: {
      client: "Private Enterprise (Multi-Brand Distributor & Franchise Network)",
      industry: "Private | Distribution | Sales & Service Operations",
      role: "Project Director",
      duration: "8+ months",
      techStack: ["PHP", "Laravel", "MySQL"]
    },
    brief: {
      problem: "The client managed sales, installation, servicing, maintenance, and break-fix operations for multiple brands across India. Day-to-day operations were fragmented across Google Sheets, Jira, emails, and calls, with no integration, shared visibility, or process ownership. As scale increased, operational breakdowns became frequent and customer experience suffered.",
      context: "The organization functioned as both distributor and service partner, handling everything from quotations to AMC renewals. The absence of a centralized system made it impossible to track activities end-to-end, manage dealer performance, or produce reliable operational reports.",
      constraints: [
        "Multi-brand, pan-India operations",
        "High volume of service and support activities",
        "No existing ERP or CRM foundation",
        "Dependency on manual coordination",
        "Need for rapid stabilization without disrupting live operations"
      ]
    },
    contextReality: {
      environment: "Operations relied heavily on spreadsheets for tracking and Jira for isolated issue management. Data duplication, version conflicts, and delayed updates were common.",
      existingSystems: [
        "No single view of sales, service, and delivery",
        "Manual follow-ups for installations and breakdowns",
        "Poor visibility into AMC obligations and renewals",
        "Inconsistent dealer and technician accountability",
        "Limited management insight into performance and bottlenecks"
      ],
      constraints: [
        "Sales and Purchase Management",
        "Quotations and Order Processing",
        "Delivery and Installation Tracking",
        "Service, Breakdown, and Ticket Management",
        "Preventive Maintenance and AMC Tracking",
        "Payout and Settlement Management",
        "Role-based dashboards and MIS"
      ]
    },
    approach: {
      principles: [
        "One system for sales, service, and support",
        "Process clarity over tool complexity",
        "Visibility for management, accountability for teams",
        "Design for scale without overengineering"
      ],
      strategicDecisions: [
        "Designed unified data model across sales, service, and finance",
        "Implemented role-based access for management, dealers, service teams, and support staff",
        "Built end-to-end traceability from lead to service closure",
        "Created real-time dashboards for operational and business tracking"
      ],
      tradeoffs: [
        "Gradual migration from spreadsheets to avoid operational disruption",
        "Parallel run during transition period",
        "Familiar interface design to ease adoption"
      ]
    },
    execution: {
      architecture: "The platform was built as a modular web application with centralized data, configurable workflows, and multi-level access control. Unified data model across sales, service, and finance with role-based access for different stakeholder groups.",
      keyModules: [
        "Sales and Purchase Management",
        "Quotations and Order Processing",
        "Delivery and Installation Tracking",
        "Service, Breakdown, and Ticket Management",
        "Preventive Maintenance and AMC Tracking",
        "Payout and Settlement Management",
        "Role-based dashboards and MIS"
      ],
      integrations: [
        "Data ingestion via Excel / CSV imports",
        "Email and SMS notifications",
        "WhatsApp integration for service and status updates"
      ],
      considerations: [
        "End-to-end traceability from lead to service closure",
        "Real-time dashboards for operational and business tracking",
        "Multi-level access control for different stakeholders"
      ]
    },
    challengesThatMattered: [
      {
        title: "Moving Away from Spreadsheet-Driven Operations",
        description: "Teams were deeply dependent on Google Sheets for daily work.",
        impact: "Designed familiar, structured interfaces. Gradual migration of live data. Parallel run during transition. Result: Smooth adoption without operational disruption."
      },
      {
        title: "Managing Complex Service Lifecycles",
        description: "Breakdowns, preventive maintenance, and AMC commitments overlapped across clients and locations.",
        impact: "Unified ticketing and service lifecycle management. AMC tracking with alerts and reminders. Result: Improved service predictability and fewer missed commitments."
      },
      {
        title: "Enabling Management Visibility",
        description: "Leadership lacked real-time insight into operations and performance.",
        impact: "Role-specific dashboards. KPIs for sales, service efficiency, and turnaround times. Result: Data-driven decisions replaced reactive firefighting."
      }
    ],
    solutions: [
      {
        problem: "Moving Away from Spreadsheet-Driven Operations",
        decision: "Design familiar, structured interfaces with gradual migration",
        intervention: "Parallel run during transition with live data migration in phases",
        result: "Smooth adoption without operational disruption"
      },
      {
        problem: "Managing Complex Service Lifecycles",
        decision: "Unify ticketing and service lifecycle management",
        intervention: "AMC tracking with automated alerts and reminders for renewals",
        result: "Improved service predictability and fewer missed commitments"
      },
      {
        problem: "Enabling Management Visibility",
        decision: "Implement role-specific dashboards with real-time KPIs",
        intervention: "KPIs for sales, service efficiency, and turnaround times",
        result: "Data-driven decisions replaced reactive firefighting"
      }
    ],
    outcomes: {
      quantitative: [
        "10% increase in overall business throughput",
        "25% improvement in client satisfaction",
        "Faster response and resolution times",
        "Better control over sales and service pipelines"
      ],
      qualitative: [
        "Improved dealer and technician productivity",
        "Consistent service experience across regions",
        "Transition from ad-hoc coordination to structured operations",
        "Scalable platform supporting future growth",
        "Reduced dependency on individual knowledge holders"
      ],
      impact: "The platform transformed operations from ad-hoc coordination to structured processes, enabling 10% business throughput increase and 25% improvement in client satisfaction across pan-India multi-brand operations."
    },
    learnings: {
      keyLearnings: [],
      improvements: [],
      insights: []
    },
    gallery: [dmsApp]
  },
  'bmc-pothole': {
    title: "BMC Pothole Management System",
    category: "Citizen Grievance & Field Operations Platform | Web & Mobile Application",
    image: bmcPothole,
    snapshot: {
      client: "Municipal Corporation of Greater Mumbai (BMC)",
      industry: "Government | Urban Infrastructure | Civic Services",
      role: "Business Analyst",
      duration: "3+ years",
      techStack: ["Java", "Angular", "PostgreSQL"]
    },
    brief: {
      problem: "Potholes, especially during the monsoon season, were a major safety and public trust issue in Mumbai. Citizens were frustrated due to the lack of a simple reporting mechanism, slow response times, and no visibility into whether reported potholes were actually fixed.",
      context: "BMC required a system that could convert citizen complaints into time-bound, accountable field actions. The objective was to enable easy reporting, ensure engineer-level ownership, create inspection-based validation, and generate long-term insights into road quality and maintenance efficiency.",
      constraints: [
        "Extremely high volume of complaints during monsoon",
        "Field engineers operating across large geographic zones",
        "Need for verifiable proof of repair",
        "Citizen trust and transparency",
        "Long-term analytics for infrastructure planning"
      ]
    },
    contextReality: {
      environment: "Earlier processes were largely manual or semi-digital. Complaints were logged through calls or visits and tracked loosely, making accountability difficult and response times unpredictable.",
      existingSystems: [
        "No standardized way for citizens to report potholes",
        "Manual assignment and follow-ups",
        "Lack of proof for work completion",
        "No performance metrics for engineers or contractors"
      ],
      constraints: [
        "Citizen mobile app to capture pothole photo and submit complaint",
        "Automatic location capture using GPS",
        "Intelligent assignment to the responsible Junior Engineer",
        "Mobile notifications for field engineers",
        "Time-bound resolution tracking",
        "Inspection workflow by Deputy Engineer",
        "Citizen confirmation with before-and-after photos"
      ]
    },
    approach: {
      principles: [
        "Make reporting effortless for citizens",
        "Build accountability into the workflow",
        "Trust, but verify through evidence",
        "Use data to improve infrastructure decisions"
      ],
      strategicDecisions: [
        "GPS and image-based complaint registration",
        "Role-based workflows for Junior Engineers and Deputy Engineers",
        "Photo-based evidence capture at each stage",
        "Centralized data store for historical and analytical use"
      ],
      tradeoffs: [
        "Mobile-first approach for maximum citizen reach",
        "Mandatory photo evidence over text-only complaints",
        "Independent inspection over self-certification"
      ]
    },
    execution: {
      architecture: "The system was designed to ensure traceability from complaint to closure. GPS and image-based complaint registration with Google Maps integration for precise location tagging. Role-based workflows for Junior Engineers and Deputy Engineers with photo-based evidence capture at each stage.",
      keyModules: [
        "Citizen mobile app for complaint registration",
        "GPS-based location capture",
        "Photo evidence collection (before and after)",
        "Intelligent assignment engine",
        "Field engineer mobile app",
        "Inspection and approval workflow",
        "Analytics and reporting dashboard"
      ],
      integrations: [
        "Google Maps for geo-location and visualization",
        "Email and SMS alerts",
        "WhatsApp notifications for status updates"
      ],
      considerations: [
        "Time-bound resolution tracking",
        "Photo-based evidence at each stage",
        "Role-based access for different stakeholders",
        "Geo-tagging for location verification"
      ]
    },
    challengesThatMattered: [
      {
        title: "Handling Monsoon-Time Complaint Surges",
        description: "Complaint volumes spiked dramatically during heavy rains.",
        impact: "Streamlined one-click reporting with automated assignments based on location. Mobile-first workflows for faster turnaround. Result: Reduced backlog and improved response consistency."
      },
      {
        title: "Ensuring Authentic Fixes",
        description: "Verifying whether a pothole was genuinely fixed.",
        impact: "Mandatory before-and-after photos with geo-tagging. Independent inspection by Deputy Engineer. Result: Higher trust and elimination of false closures."
      },
      {
        title: "Measuring Road and Engineer Performance",
        description: "No data existed to assess road durability or field efficiency.",
        impact: "Captured resolution time, recurrence, and inspection outcomes. Built analytical dashboards for trend analysis. Result: Data-backed insights into road quality, contractor performance, and engineer responsiveness."
      }
    ],
    solutions: [
      {
        problem: "Handling Monsoon-Time Complaint Surges",
        decision: "Implement streamlined one-click reporting with automated assignments",
        intervention: "Mobile-first workflows for faster turnaround with location-based engineer assignment",
        result: "Reduced backlog and improved response consistency during peak monsoon season"
      },
      {
        problem: "Ensuring Authentic Fixes",
        decision: "Mandate before-and-after photos with geo-tagging",
        intervention: "Independent inspection workflow by Deputy Engineer for verification",
        result: "Higher trust and elimination of false closures"
      },
      {
        problem: "Measuring Road and Engineer Performance",
        decision: "Capture resolution time, recurrence, and inspection outcomes",
        intervention: "Built analytical dashboards for trend analysis and performance tracking",
        result: "Data-backed insights into road quality, contractor performance, and engineer responsiveness"
      }
    ],
    outcomes: {
      quantitative: [
        "Simple, transparent pothole reporting for citizens",
        "Clear visibility into action taken",
        "Increased trust in municipal response",
        "Faster identification and resolution of potholes"
      ],
      qualitative: [
        "Clear accountability at engineer level",
        "Recognition for timely and effective resolution",
        "Long-term data to evaluate road repair effectiveness",
        "Insights into recurring problem zones",
        "Foundation for proactive road maintenance planning"
      ],
      impact: "The platform transformed pothole management from reactive complaint handling to data-driven infrastructure maintenance, establishing clear accountability and enabling proactive road maintenance planning across Mumbai."
    },
    learnings: {
      keyLearnings: [],
      improvements: [],
      insights: []
    },
    gallery: [bmcPothole]
  },
  'pwd-pothole': {
    title: "PWD Pothole Management System",
    category: "State Highway & Road Maintenance Platform | Web & Mobile Application",
    image: pwdPothole,
    snapshot: {
      client: "Public Works Department (PWD), Government",
      industry: "Government | Roads & Highways | Infrastructure Maintenance",
      role: "Business Analyst",
      duration: "1+ year",
      techStack: ["Java", "Angular", "PostgreSQL"]
    },
    brief: {
      problem: "PWD-managed roads, particularly highways and inter-city corridors, faced recurring pothole issues during monsoon seasons. Citizens had no structured way to report issues, and departments struggled to track complaints, prioritize fixes, and monitor field execution across large geographic spreads.",
      context: "Unlike city roads, PWD roads span long distances, cross jurisdictions, and are maintained by distributed engineering teams. The need was for a system that could translate citizen-reported issues into accountable, time-bound actions while giving leadership visibility across regions.",
      constraints: [
        "Large geographic coverage beyond city limits",
        "Distributed field engineers and contractors",
        "Seasonal spikes in complaints",
        "Requirement for proof-based closure",
        "Need for performance tracking across divisions"
      ]
    },
    contextReality: {
      environment: "Earlier, pothole complaints were routed through calls, letters, or informal escalation channels. Tracking resolution status was manual, and historical data was almost non-existent.",
      existingSystems: [
        "Delayed complaint routing",
        "Lack of ownership clarity at field level",
        "No standardized closure or inspection mechanism",
        "Inability to compare performance across regions"
      ],
      constraints: [
        "Citizen mobile app for quick pothole reporting",
        "Automatic GPS-based location tagging",
        "Division-wise assignment to Junior Engineers",
        "Mobile alerts for field action",
        "SLA-driven resolution timelines",
        "Inspection and validation by Deputy Engineers",
        "Closure communication back to citizens"
      ]
    },
    approach: {
      principles: [
        "Accountability must travel with the complaint",
        "Geography is as important as volume",
        "Proof of work is non-negotiable",
        "Data should help prioritize, not just report"
      ],
      strategicDecisions: [
        "GPS-based auto-routing of complaints",
        "Division and sub-division mapping",
        "Mandatory before-and-after photos",
        "Independent inspection workflow"
      ],
      tradeoffs: [
        "Statewide coverage over city-specific optimization",
        "Division-wise assignment over centralized control",
        "Proof-based closure over quick turnaround"
      ]
    },
    execution: {
      architecture: "The system emphasized geographic intelligence and operational accountability. Geo-tagged complaint lifecycle management with Google Maps integration for highway and route mapping. Role-based workflows across PWD hierarchy with mandatory photographic evidence at reporting and closure stages.",
      keyModules: [
        "Citizen mobile app for complaint registration",
        "GPS-based location tagging",
        "Division-wise assignment engine",
        "Field engineer mobile app",
        "Inspection and validation workflow",
        "Photo evidence collection (before and after)",
        "Cross-division analytics dashboard"
      ],
      integrations: [
        "Google Maps for location capture and visualization",
        "Email and SMS notifications",
        "WhatsApp alerts for faster field communication"
      ],
      considerations: [
        "SLA-driven resolution timelines",
        "Geo-tagged complaint lifecycle management",
        "Role-based workflows across PWD hierarchy",
        "Centralized database for cross-division analysis"
      ]
    },
    challengesThatMattered: [
      {
        title: "Managing Statewide Coverage",
        description: "PWD roads span urban, semi-urban, and rural areas.",
        impact: "GPS-based auto-routing of complaints with division and sub-division mapping. Result: Faster assignment and reduced misrouting."
      },
      {
        title: "Ensuring Field Accountability",
        description: "Lack of verifiable closure led to repeated complaints.",
        impact: "Mandatory before-and-after photos with independent inspection workflow. Result: Higher closure quality and reduced recurrence."
      },
      {
        title: "Creating Comparable Performance Metrics",
        description: "Leadership could not assess which divisions were performing better.",
        impact: "Dashboards comparing resolution time, recurrence, and volume. Region-wise and engineer-wise analytics. Result: Clear visibility into performance gaps and best practices."
      }
    ],
    solutions: [
      {
        problem: "Managing Statewide Coverage",
        decision: "Implement GPS-based auto-routing of complaints",
        intervention: "Division and sub-division mapping for accurate assignment",
        result: "Faster assignment and reduced misrouting across statewide coverage"
      },
      {
        problem: "Ensuring Field Accountability",
        decision: "Mandate before-and-after photos for every complaint",
        intervention: "Independent inspection workflow by Deputy Engineers",
        result: "Higher closure quality and reduced recurrence"
      },
      {
        problem: "Creating Comparable Performance Metrics",
        decision: "Build dashboards comparing resolution time, recurrence, and volume",
        intervention: "Region-wise and engineer-wise analytics for leadership visibility",
        result: "Clear visibility into performance gaps and best practices"
      }
    ],
    outcomes: {
      quantitative: [
        "Simple mechanism to report road issues",
        "Transparent status updates for citizens",
        "Structured complaint handling across divisions",
        "Faster resolution during peak monsoon periods"
      ],
      qualitative: [
        "Improved confidence in PWD responsiveness",
        "Clear ownership at engineer and division level",
        "Data-driven insights into road durability and repair quality",
        "Ability to identify chronic problem stretches",
        "Foundation for preventive maintenance planning"
      ],
      impact: "The platform established structured complaint handling across PWD divisions statewide, enabling data-driven insights into road durability and creating a foundation for preventive maintenance planning across highways and inter-city corridors."
    },
    learnings: {
      keyLearnings: [],
      improvements: [],
      insights: []
    },
    gallery: [pwdPothole]
  },
  'nepal-police': {
    title: "Nepal Police AI / BI Dashboard",
    category: "National Policing Analytics Platform | Government (Law Enforcement)",
    image: nepalPolice,
    snapshot: {
      client: "Nepal Police",
      industry: "Government | Law Enforcement | Public Safety & Intelligence",
      role: "Project Coordinator",
      duration: "11+ months",
      techStack: ["SMARTEN Analytics", "Angular", "Oracle"]
    },
    brief: {
      problem: "Nepal Police lacked centralized, real-time visibility into crime data, personnel records, inventory, and operational performance. Data existed across multiple departmental systems, making it difficult for senior leadership to identify crime trends, hotspots, or emerging risks. Decision-making was largely reactive, with limited predictive or anomaly-detection capabilities.",
      context: "Nepal Police aimed to build a national-level analytics platform that could consolidate crime, HR, inventory, and operational data into intuitive dashboards. The objective was to enable faster interventions, data-driven policing strategies, and proactive crime prevention through AI and predictive analytics.",
      constraints: [
        "Highly sensitive and confidential data",
        "Multiple heterogeneous data sources",
        "Limited analytical maturity among end users",
        "Need for role-based access for senior leadership",
        "Requirement for predictive and anomaly-based insights"
      ]
    },
    contextReality: {
      environment: "Prior to this initiative, reporting relied on manual compilation and static reports. There was no unified analytical layer connecting crime statistics, personnel data, inventory, and regional performance.",
      existingSystems: [
        "No real-time situational awareness for leadership",
        "Difficulty identifying crime patterns across time and geography",
        "Manual HR tracking for training, leave, and disciplinary actions",
        "Limited insight into inventory and weapon distribution",
        "Absence of forecasting or early-warning mechanisms"
      ],
      constraints: [
        "Crime analytics across regions, time periods, and crime types",
        "HR analytics covering personnel, training, awards, punishments, and leave",
        "Inventory and weapons tracking",
        "KPI dashboards for daily and monthly performance",
        "Geographic crime heatmaps",
        "Predictive and anomaly detection analytics"
      ]
    },
    approach: {
      principles: [
        "Insights must be consumable by non-technical leadership",
        "Visualization over raw data",
        "Proactive intelligence over retrospective reporting",
        "Security and confidentiality by design"
      ],
      strategicDecisions: [
        "Data ingestion from multiple police systems",
        "Data transformation and enrichment for analytics readiness",
        "Dashboard authoring and publishing via SMARTEN",
        "Web and mobile access for authorized users",
        "Role-based access control for different leadership levels"
      ],
      tradeoffs: [
        "Layered analytics architecture for separation of concerns",
        "Prioritized leadership adoption over comprehensive coverage",
        "Focused on high-impact KPIs first"
      ]
    },
    execution: {
      architecture: "The solution followed a layered analytics architecture, separating data ingestion, preparation, analytics, and consumption. Business data from multiple police systems was transformed and enriched for analytics readiness.",
      keyModules: [
        "Crime analytics across regions and time periods",
        "HR analytics for personnel management",
        "Inventory and weapons tracking",
        "KPI dashboards for performance monitoring",
        "Geographic crime heatmaps",
        "Predictive and anomaly detection analytics",
        "Snapshot and anomaly detection for crime spikes",
        "Clickless analytics using NLP for plain language queries"
      ],
      integrations: [
        "SMARTEN Analytics platform",
        "AI / BI / ML engines",
        "Google Analytics",
        "Email, SMS, and WhatsApp for alerts and communication"
      ],
      considerations: [
        "Web and mobile access for authorized users",
        "Role-based access control for leadership levels",
        "Data security and confidentiality",
        "Scalability for future analytical use cases"
      ]
    },
    challengesThatMattered: [
      {
        title: "Consolidating Disparate Police Data",
        description: "Crime, HR, and inventory data were stored in separate systems with different formats.",
        impact: "Standardized datasets during data preparation. Defined common dimensions for time, region, and units. Result: A unified analytical view across departments."
      },
      {
        title: "Enabling Predictive and Proactive Policing",
        description: "Leadership needed foresight, not just historical reports.",
        impact: "Implemented predictive models and anomaly alerts. Enabled geo-spatial visualization of crime hotspots. Result: Early warning signals and better-prepared field interventions."
      },
      {
        title: "Making Analytics Accessible to Senior Officers",
        description: "Senior users required intuitive, low-effort interaction with data.",
        impact: "KPI-driven dashboards. NLP-based clickless analytics. Pre-built views for common decision scenarios. Result: Faster interpretation and higher adoption among leadership."
      }
    ],
    solutions: [
      {
        problem: "Consolidating Disparate Police Data",
        decision: "Standardize datasets during data preparation",
        intervention: "Defined common dimensions for time, region, and units across all data sources.",
        result: "A unified analytical view across departments"
      },
      {
        problem: "Enabling Predictive and Proactive Policing",
        decision: "Implement predictive models and anomaly alerts",
        intervention: "Enabled geo-spatial visualization of crime hotspots with early warning capabilities.",
        result: "Early warning signals and better-prepared field interventions"
      },
      {
        problem: "Making Analytics Accessible to Senior Officers",
        decision: "Build KPI-driven dashboards with NLP-based interaction",
        intervention: "Created clickless analytics and pre-built views for common decision scenarios.",
        result: "Faster interpretation and higher adoption among leadership"
      }
    ],
    outcomes: {
      quantitative: [
        "Centralized situational awareness for Nepal Police leadership",
        "Reduced dependence on manual reporting",
        "Faster identification of crime trends and hotspots"
      ],
      qualitative: [
        "Proactive policing enabled through forecasting and anomaly detection",
        "Improved resource allocation based on data-driven insights",
        "Greater transparency across crime, HR, and inventory dimensions",
        "Established a national analytics foundation for policing",
        "Improved confidence in data-backed decisions",
        "Scalable platform supporting future analytical use cases"
      ],
      impact: "The platform established a national analytics foundation for Nepal Police, enabling proactive policing through forecasting and anomaly detection, and transforming decision-making from reactive to data-driven across all operational dimensions."
    },
    learnings: {
      keyLearnings: [],
      improvements: [],
      insights: []
    },
    gallery: [nepalPolice]
  },
  'nepal-police-dashboard': {
    title: "Nepal Police AI / BI Dashboard",
    category: "National Policing Analytics Platform | Government (Law Enforcement)",
    image: nepalPolice,
    snapshot: {
      client: "Nepal Police",
      industry: "Government | Law Enforcement | Public Safety & Intelligence",
      role: "Project Coordinator",
      duration: "11+ months",
      techStack: ["SMARTEN Analytics", "Angular", "Oracle"]
    },
    brief: {
      problem: "Nepal Police lacked centralized, real-time visibility into crime data, personnel records, inventory, and operational performance. Data existed across multiple departmental systems, making it difficult for senior leadership to identify crime trends, hotspots, or emerging risks. Decision-making was largely reactive, with limited predictive or anomaly-detection capabilities.",
      context: "Nepal Police aimed to build a national-level analytics platform that could consolidate crime, HR, inventory, and operational data into intuitive dashboards. The objective was to enable faster interventions, data-driven policing strategies, and proactive crime prevention through AI and predictive analytics.",
      constraints: [
        "Highly sensitive and confidential data",
        "Multiple heterogeneous data sources",
        "Limited analytical maturity among end users",
        "Need for role-based access for senior leadership",
        "Requirement for predictive and anomaly-based insights"
      ]
    },
    contextReality: {
      environment: "Prior to this initiative, reporting relied on manual compilation and static reports. There was no unified analytical layer connecting crime statistics, personnel data, inventory, and regional performance.",
      existingSystems: [
        "No real-time situational awareness for leadership",
        "Difficulty identifying crime patterns across time and geography",
        "Manual HR tracking for training, leave, and disciplinary actions",
        "Limited insight into inventory and weapon distribution",
        "Absence of forecasting or early-warning mechanisms"
      ],
      constraints: [
        "Crime analytics across regions, time periods, and crime types",
        "HR analytics covering personnel, training, awards, punishments, and leave",
        "Inventory and weapons tracking",
        "KPI dashboards for daily and monthly performance",
        "Geographic crime heatmaps",
        "Predictive and anomaly detection analytics"
      ]
    },
    approach: {
      principles: [
        "Insights must be consumable by non-technical leadership",
        "Visualization over raw data",
        "Proactive intelligence over retrospective reporting",
        "Security and confidentiality by design"
      ],
      strategicDecisions: [
        "Data ingestion from multiple police systems",
        "Data transformation and enrichment for analytics readiness",
        "Dashboard authoring and publishing via SMARTEN",
        "Web and mobile access for authorized users",
        "Role-based access control for different leadership levels"
      ],
      tradeoffs: [
        "Layered analytics architecture for separation of concerns",
        "Prioritized leadership adoption over comprehensive coverage",
        "Focused on high-impact KPIs first"
      ]
    },
    execution: {
      architecture: "The solution followed a layered analytics architecture, separating data ingestion, preparation, analytics, and consumption. Business data from multiple police systems was transformed and enriched for analytics readiness.",
      keyModules: [
        "Crime analytics across regions and time periods",
        "HR analytics for personnel management",
        "Inventory and weapons tracking",
        "KPI dashboards for performance monitoring",
        "Geographic crime heatmaps",
        "Predictive and anomaly detection analytics",
        "Snapshot and anomaly detection for crime spikes",
        "Clickless analytics using NLP for plain language queries"
      ],
      integrations: [
        "SMARTEN Analytics platform",
        "AI / BI / ML engines",
        "Google Analytics",
        "Email, SMS, and WhatsApp for alerts and communication"
      ],
      considerations: [
        "Web and mobile access for authorized users",
        "Role-based access control for leadership levels",
        "Data security and confidentiality",
        "Scalability for future analytical use cases"
      ]
    },
    challengesThatMattered: [
      {
        title: "Consolidating Disparate Police Data",
        description: "Crime, HR, and inventory data were stored in separate systems with different formats.",
        impact: "Standardized datasets during data preparation. Defined common dimensions for time, region, and units. Result: A unified analytical view across departments."
      },
      {
        title: "Enabling Predictive and Proactive Policing",
        description: "Leadership needed foresight, not just historical reports.",
        impact: "Implemented predictive models and anomaly alerts. Enabled geo-spatial visualization of crime hotspots. Result: Early warning signals and better-prepared field interventions."
      },
      {
        title: "Making Analytics Accessible to Senior Officers",
        description: "Senior users required intuitive, low-effort interaction with data.",
        impact: "KPI-driven dashboards. NLP-based clickless analytics. Pre-built views for common decision scenarios. Result: Faster interpretation and higher adoption among leadership."
      }
    ],
    solutions: [
      {
        problem: "Consolidating Disparate Police Data",
        decision: "Standardize datasets during data preparation",
        intervention: "Defined common dimensions for time, region, and units across all data sources.",
        result: "A unified analytical view across departments"
      },
      {
        problem: "Enabling Predictive and Proactive Policing",
        decision: "Implement predictive models and anomaly alerts",
        intervention: "Enabled geo-spatial visualization of crime hotspots with early warning capabilities.",
        result: "Early warning signals and better-prepared field interventions"
      },
      {
        problem: "Making Analytics Accessible to Senior Officers",
        decision: "Build KPI-driven dashboards with NLP-based interaction",
        intervention: "Created clickless analytics and pre-built views for common decision scenarios.",
        result: "Faster interpretation and higher adoption among leadership"
      }
    ],
    outcomes: {
      quantitative: [
        "Centralized situational awareness for Nepal Police leadership",
        "Reduced dependence on manual reporting",
        "Faster identification of crime trends and hotspots"
      ],
      qualitative: [
        "Proactive policing enabled through forecasting and anomaly detection",
        "Improved resource allocation based on data-driven insights",
        "Greater transparency across crime, HR, and inventory dimensions",
        "Established a national analytics foundation for policing",
        "Improved confidence in data-backed decisions",
        "Scalable platform supporting future analytical use cases"
      ],
      impact: "The platform established a national analytics foundation for Nepal Police, enabling proactive policing through forecasting and anomaly detection, and transforming decision-making from reactive to data-driven across all operational dimensions."
    },
    learnings: {
      keyLearnings: [],
      improvements: [],
      insights: []
    },
    gallery: [nepalPolice]
  },
  'nmmc-dashboard': {
    title: "NMMC Integrated Dashboards",
    category: "Commissionerate-Level Decision Intelligence | Power BI Analytics Platform",
    image: nmmcDashboard,
    snapshot: {
      client: "Navi Mumbai Municipal Corporation (NMMC)",
      industry: "Government | Urban Governance | Decision Intelligence",
      role: "Project Director",
      duration: "18+ months",
      techStack: ["Power BI", "Java", "Angular", "PostgreSQL"]
    },
    brief: {
      problem: "NMMC operated multiple mission-critical systems delivered by different vendors, each with its own dashboards. For commissionerate-level reviews, leadership had to log into several applications to understand performance, revenue, operations, and compliance. This fragmented view slowed decision-making and limited the ability to take early corrective or preventive action.",
      context: "The Municipal Commissioner required a single, authoritative dashboard that consolidated operational, financial, and administrative intelligence across departments. The objective was to move from isolated, retrospective reporting to progressive, predictive, and preventive governance.",
      constraints: [
        "Multiple vendors and heterogeneous systems",
        "No common data model across departments",
        "High expectations from senior leadership",
        "Requirement for drill-down without losing context",
        "Need for predictive and preventive indicators"
      ]
    },
    contextReality: {
      environment: "Each department had invested in its own application and reporting layer. While dashboards existed, they were siloed and inconsistent in structure and interpretation.",
      existingSystems: [
        "Multiple logins for routine reviews",
        "Manual consolidation before review meetings",
        "No unified view of city-wide performance",
        "Reactive decision-making driven by lagging indicators"
      ],
      constraints: [
        "Water SCADA",
        "Property Tax Revenue",
        "Water Tax Revenue",
        "RTS and Other Municipal Collections",
        "Grievance Management",
        "Vendor Payments and Liabilities",
        "Vehicle Fleet and Utilization",
        "Staff Salary and Attendance",
        "School Attendance and Mid-Day Meal Monitoring",
        "Teacher Attendance",
        "Pension, Retirement, PF, GPF",
        "Home and Vehicle Loans",
        "Solid Waste Management",
        "Sweeper Machine Management",
        "Electric Pole Management",
        "Garden and Asset Management"
      ]
    },
    approach: {
      principles: [
        "One dashboard for leadership, many views underneath",
        "Insights over numbers",
        "Prevention is more valuable than correction",
        "Consistency in interpretation across departments"
      ],
      strategicDecisions: [
        "Centralized data models aligned to commissioner-level KPIs",
        "Power BI dashboards with role-based views",
        "Drill-down from city-level to department-level metrics",
        "Time-series analysis for trend identification",
        "Predictive indicators for early warning scenarios"
      ],
      tradeoffs: [
        "Federated data aggregation from multiple systems",
        "Prioritized leadership adoption over comprehensive coverage",
        "Focused on high-impact KPIs first"
      ]
    },
    execution: {
      architecture: "The solution followed a federated data aggregation model, pulling data from multiple systems into a unified analytics layer. Business data from various departmental systems was consolidated using centralized data models aligned to commissioner-level KPIs.",
      keyModules: [
        "Water SCADA monitoring",
        "Property and Water Tax Revenue tracking",
        "RTS and Municipal Collections",
        "Grievance Management analytics",
        "Vendor Payments and Liabilities",
        "Vehicle Fleet and Utilization",
        "Staff Salary and Attendance",
        "School and Teacher Attendance monitoring",
        "Mid-Day Meal Monitoring",
        "Pension, Retirement, PF, GPF tracking",
        "Solid Waste Management",
        "Electric Pole and Garden Management"
      ],
      integrations: [
        "Source systems across finance, utilities, HR, education, and operations",
        "Power BI analytics engine",
        "AI / BI / ML components for trend and anomaly detection",
        "Email, SMS, and WhatsApp for alerts and summaries"
      ],
      considerations: [
        "Role-based views for different leadership levels",
        "Drill-down capability without losing context",
        "Time-series analysis for trend identification",
        "Predictive indicators for early warning"
      ]
    },
    challengesThatMattered: [
      {
        title: "Consolidating Vendor-Owned Systems",
        description: "Each system exposed data differently, with inconsistent definitions.",
        impact: "Defined a canonical data model. Standardized metrics and reporting periods. Implemented validation checkpoints. Result: Comparable and trustworthy metrics across departments."
      },
      {
        title: "Balancing Depth with Simplicity",
        description: "Leadership needed clarity, not data overload.",
        impact: "Tiered dashboards: overview, drill-down, detail. Visual prioritization of exceptions and trends. Result: Faster comprehension during high-level review meetings."
      },
      {
        title: "Enabling Predictive and Preventive Governance",
        description: "Dashboards were historically backward-looking.",
        impact: "Added trend-based projections. Implemented anomaly and threshold-based indicators. Result: Early signals for revenue slippage, service delays, and operational risks."
      }
    ],
    solutions: [
      {
        problem: "Consolidating Vendor-Owned Systems",
        decision: "Define a canonical data model with standardized metrics",
        intervention: "Standardized metrics and reporting periods across all vendor systems. Implemented validation checkpoints for data quality.",
        result: "Comparable and trustworthy metrics across departments"
      },
      {
        problem: "Balancing Depth with Simplicity",
        decision: "Create tiered dashboards with visual prioritization",
        intervention: "Built overview, drill-down, and detail layers with visual prioritization of exceptions and trends.",
        result: "Faster comprehension during high-level review meetings"
      },
      {
        problem: "Enabling Predictive and Preventive Governance",
        decision: "Add trend-based projections and anomaly detection",
        intervention: "Implemented anomaly and threshold-based indicators for early warning scenarios.",
        result: "Early signals for revenue slippage, service delays, and operational risks"
      }
    ],
    outcomes: {
      quantitative: [
        "Single source of truth for commissionerate reviews",
        "Reduced dependency on manual consolidation",
        "Faster, more confident decision-making"
      ],
      qualitative: [
        "Improved inter-department coordination",
        "Early identification of underperforming areas",
        "Better vendor and resource management",
        "Shift from reactive reporting to preventive governance",
        "Data-driven culture at the top of the organization",
        "Scalable analytics foundation for future initiatives"
      ],
      impact: "The integrated dashboard platform transformed commissionerate-level reviews from fragmented, manual consolidation to a single source of truth, enabling predictive and preventive governance across 15+ municipal departments."
    },
    learnings: {
      keyLearnings: [],
      improvements: [],
      insights: []
    },
    gallery: [nmmcDashboard]
  },
  'bajaj-finserv': {
    title: "Bajaj Finserv – Vendor Operations Dashboards",
    category: "Nationwide Vendor & Service Analytics Platform | BFSI",
    image: bajajFinserv,
    snapshot: {
      client: "Bajaj Finserv",
      industry: "Private | BFSI | Facilities & Vendor Operations",
      role: "Data Analyst",
      duration: "5+ months",
      techStack: ["PHP", "Laravel", "React", "MySQL"]
    },
    brief: {
      problem: "Bajaj Finserv relied on multiple vendors across India for critical office infrastructure and safety services. Data related to purchase, delivery, installation, maintenance, breakdowns, drills, and AMC was spread across vendor-specific systems and spreadsheets. Management lacked a unified view to assess service status, compliance, and vendor performance at a national level.",
      context: "Given the scale of operations and regulatory sensitivity in BFSI, Bajaj Finserv required centralized visibility into vendor-driven services across offices. The objective was to replace fragmented reporting with a single analytical layer that enabled leadership to monitor execution, risks, and service SLAs across the country.",
      constraints: [
        "10+ vendors with independent systems",
        "High geographic spread across India",
        "Diverse service types and SLAs",
        "Strict access controls by office and region",
        "Need for reliable, near-real-time reporting"
      ]
    },
    contextReality: {
      environment: "Vendor data was exchanged through emails, Google Sheets, and periodic reports. Consolidation was manual and time-consuming, making it difficult to spot delays, risks, or non-compliance early.",
      existingSystems: [
        "No centralized view of vendor performance",
        "Inconsistent data formats across vendors",
        "Delayed identification of breakdowns and overdue maintenance",
        "Limited accountability and escalation visibility"
      ],
      constraints: [
        "Purchase and order status",
        "Delivery and installation tracking",
        "Preventive maintenance and AMC coverage",
        "Breakdown and incident handling",
        "Fire drills and safety compliance",
        "Vendor-wise and location-wise SLA performance"
      ]
    },
    approach: {
      principles: [
        "One national view, multiple local lenses",
        "Exceptions matter more than averages",
        "Data consistency before visualization",
        "Access control aligned with organizational structure"
      ],
      strategicDecisions: [
        "Centralized data aggregation from all vendor systems",
        "Normalized data models for consistent reporting",
        "React-based dashboards for interactive analysis",
        "Hierarchical, role-based access control"
      ],
      tradeoffs: [
        "Prioritized data consistency over real-time updates",
        "Focused on exception-based reporting for leadership"
      ]
    },
    execution: {
      architecture: "The solution was designed as a data aggregation and visualization layer on top of vendor systems.",
      keyModules: [
        "Vendor-wise data ingestion pipelines",
        "Normalized data models for consistent reporting",
        "React-based dashboards for interactive analysis",
        "Hierarchical, role-based access control",
        "Office-wise and region-wise drill-down"
      ],
      integrations: [
        "Vendor systems via Google Sheets and structured imports",
        "Email, SMS, and WhatsApp for notifications and alerts"
      ],
      considerations: [
        "Data validation and quality checks during ingestion",
        "Scalable architecture for onboarding new vendors",
        "Secure access patterns aligned with corporate policies"
      ]
    },
    challengesThatMattered: [
      {
        title: "Normalizing Multi-Vendor Data",
        description: "Each vendor used different data structures and reporting formats.",
        impact: "Defined a common data schema. Built transformation logic during ingestion. Result: Comparable and reliable vendor performance metrics."
      },
      {
        title: "Enabling Hierarchical Visibility",
        description: "Different offices required visibility limited to their jurisdiction.",
        impact: "Implemented office- and region-based access controls. Designed dashboards that adjusted automatically by login. Result: Clear accountability without data leakage."
      },
      {
        title: "Driving Management Adoption",
        description: "Leadership needed quick insights, not detailed operational logs.",
        impact: "KPI-focused overview dashboards. Drill-down for exception analysis. Result: Dashboards became the primary review tool for vendor operations."
      }
    ],
    solutions: [
      {
        problem: "Normalizing Multi-Vendor Data",
        decision: "Define a common data schema",
        intervention: "Built transformation logic during ingestion from each vendor system",
        result: "Comparable and reliable vendor performance metrics"
      },
      {
        problem: "Enabling Hierarchical Visibility",
        decision: "Implement office- and region-based access controls",
        intervention: "Designed dashboards that adjusted automatically by login",
        result: "Clear accountability without data leakage"
      },
      {
        problem: "Driving Management Adoption",
        decision: "Create KPI-focused overview dashboards",
        intervention: "Built drill-down for exception analysis",
        result: "Dashboards became the primary review tool for vendor operations"
      }
    ],
    outcomes: {
      quantitative: [
        "Centralized visibility across 10+ vendors nationwide",
        "Faster identification of service gaps and delays",
        "Improved SLA compliance tracking"
      ],
      qualitative: [
        "Single dashboard for nationwide vendor oversight",
        "Reduced manual reporting and follow-ups",
        "Better-informed decisions on vendor performance",
        "Data-driven approach to facilities and safety operations",
        "Scalable framework for onboarding new vendors",
        "Reduced operational risk across offices"
      ],
      impact: "The centralized dashboard platform transformed vendor operations from fragmented, manual tracking to a unified analytical layer providing nationwide visibility and data-driven vendor performance management."
    },
    learnings: {
      keyLearnings: [],
      improvements: [],
      insights: []
    },
    gallery: [bajajFinserv]
  },
  'png-brothers': {
    title: "PNG Brothers",
    category: "Phygital Jewelry Ecommerce Platform | Web Portal",
    image: pngBrothers,
    snapshot: {
      client: "PNG Brothers (Private Jewelry Retailer)",
      industry: "Private | Ecommerce | Jewelry & Retail",
      role: "Project Manager",
      duration: "12+ months",
      techStack: ["PHP", "Laravel", "MySQL", "WhatsApp"]
    },
    brief: {
      problem: "Buying high-value precious jewelry online creates natural anxiety for customers. Concerns around gold purity, diamond authenticity, daily price fluctuations, and making charges make it difficult for buyers to trust purely digital storefronts. The absence of physical interaction further widens the sensory gap, causing hesitation and abandoned purchases.",
      context: "PNG Brothers is a traditional, trust-driven family jeweler. The challenge was not just to sell jewelry online, but to replicate the reassurance, transparency, and confidence of an in-store experience within a digital environment. The objective was to design a phygital ecommerce experience that combined the convenience of online shopping with the credibility of a physical jeweler.",
      constraints: [
        "High-value purchase anxiety",
        "Gold and diamond price volatility",
        "Trust barriers in online jewelry buying",
        "Sensory gap without physical interaction",
        "Need for transparent pricing and authenticity"
      ]
    },
    contextReality: {
      environment: "The platform was designed around trust first, transaction second. Rather than pushing quick conversions, the focus was on educating customers, making pricing transparent, and enabling real-time human assistance at decision points.",
      existingSystems: [
        "Traditional in-store jewelry retail",
        "Manual pricing calculations",
        "Phone-based customer support"
      ],
      constraints: [
        "Real-time gold and diamond rate display",
        "Transparent breakup of metal value, making charges, and taxes",
        "Product authenticity and purity assurance indicators",
        "Assisted buying via WhatsApp and voice support",
        "Store-linked fulfillment for reassurance and accountability"
      ]
    },
    approach: {
      principles: [
        "Transparency builds trust faster than discounts",
        "Human support must be visible, not hidden",
        "Price clarity reduces hesitation",
        "Digital should amplify, not replace, physical credibility"
      ],
      strategicDecisions: [
        "Trust-first, transaction-second design philosophy",
        "Real-time price transparency at every step",
        "Integrated human assistance at decision points",
        "Store-linked fulfillment for accountability"
      ],
      tradeoffs: [
        "Education over quick conversion",
        "Transparency over simplified pricing",
        "Human touch over full automation"
      ]
    },
    execution: {
      architecture: "The ecommerce portal was built as a robust, scalable web platform with strong integration into communication and payment systems. Features include secure product catalog and pricing engine, dynamic price calculation based on live metal rates, order lifecycle management from selection to delivery, and integrated communication layer for assisted commerce.",
      keyModules: [
        "Secure product catalog and pricing engine",
        "Dynamic price calculation based on live metal rates",
        "Order lifecycle management",
        "Integrated communication layer for assisted commerce",
        "Real-time gold and diamond rate display"
      ],
      integrations: [
        "Payment gateways: CCAvenue, ICICI",
        "Communication: WhatsApp, Email, SMS",
        "VoIP systems for assisted customer calls"
      ],
      considerations: [
        "Price transparency at checkout",
        "Authenticity and purity assurance",
        "Store-linked fulfillment",
        "Multi-channel customer support"
      ]
    },
    challengesThatMattered: [
      {
        title: "Overcoming Trust Barriers in High-Value Purchases",
        description: "Customers hesitated to purchase expensive jewelry online.",
        impact: "Clear purity and authenticity disclosures, transparent pricing breakup, and easy access to human assistance. Higher confidence during browsing and checkout."
      },
      {
        title: "Bridging the Sensory Gap",
        description: "Jewelry is traditionally a tactile purchase.",
        impact: "High-quality visuals and detailed descriptions, assisted consultations via WhatsApp and voice, store-backed fulfillment assurances. Digital interactions felt closer to an in-store experience."
      },
      {
        title: "Managing Price Volatility",
        description: "Gold prices fluctuate daily.",
        impact: "Dynamic rate updates with real-time price recalculation at checkout. Pricing credibility and reduced post-order disputes."
      }
    ],
    solutions: [
      {
        problem: "Overcoming Trust Barriers in High-Value Purchases",
        decision: "Clear purity and authenticity disclosures",
        intervention: "Transparent pricing breakup with easy access to human assistance",
        result: "Higher confidence during browsing and checkout"
      },
      {
        problem: "Bridging the Sensory Gap",
        decision: "High-quality visuals and detailed descriptions",
        intervention: "Assisted consultations via WhatsApp and voice with store-backed fulfillment assurances",
        result: "Digital interactions felt closer to an in-store experience"
      },
      {
        problem: "Managing Price Volatility",
        decision: "Dynamic rate updates",
        intervention: "Real-time price recalculation at checkout",
        result: "Pricing credibility and reduced post-order disputes"
      }
    ],
    outcomes: {
      quantitative: [
        "Increased trust in online jewelry purchasing",
        "Clear understanding of pricing and value",
        "Confidence comparable to visiting a physical store"
      ],
      qualitative: [
        "Successful digital extension of a traditional retail brand",
        "Reduced dependency on in-store visits",
        "Strong foundation for omni-channel growth",
        "Demonstrated viability of phygital commerce for high-value goods",
        "Created a repeatable model for traditional retailers entering ecommerce"
      ],
      impact: "PNG Brothers successfully transitioned from a traditional jeweler to a phygital commerce brand, proving that trust-first design can enable high-value purchases online while maintaining the credibility of a family-owned jewelry business."
    },
    learnings: {
      keyLearnings: [
        "Transparency builds trust faster than discounts in high-value purchases",
        "Human support visibility is critical for complex buying decisions",
        "Price clarity at every step reduces hesitation and disputes"
      ],
      improvements: [],
      insights: [
        "Phygital commerce is the future for traditional high-value retailers"
      ]
    },
    gallery: [pngBrothers]
  },
  'cs-jewellers': {
    title: "CS Jewellers",
    category: "Phygital Ecommerce & B2B Inventory Platform | Web Portal",
    image: csJewellers,
    snapshot: {
      client: "CS Jewellers (Private Jewelry Retail Chain)",
      industry: "Private | Ecommerce | Jewelry Retail & Trading",
      role: "Project Director",
      duration: "18+ months",
      techStack: ["PHP", "Laravel", "MySQL", "WhatsApp"]
    },
    brief: {
      problem: "High-value jewelry purchases online inherently trigger trust concerns around purity, authenticity, and pricing transparency. Customers are often unsure whether the displayed price reflects real-time metal rates, accurate making charges, and genuine certification. At the same time, the absence of physical interaction creates a sensory gap that discourages commitment. For CS Jewellers, the challenge was compounded by scale. Beyond B2C ecommerce, the organization also required a B2B trading and inventory movement system to manage stock across 36 stores spread throughout Maharashtra.",
      context: "CS Jewellers is a multi-store retail chain with strong offline credibility. The objective was twofold: Create a consumer-facing ecommerce platform that replicated the confidence of in-store buying, and digitize internal B2B inventory trading to improve stock utilization and operational efficiency across locations.",
      constraints: [
        "Trust barriers in high-value online purchases",
        "36 stores requiring centralized inventory visibility",
        "Dual B2C and B2B platform requirements",
        "Real-time pricing with daily metal rate fluctuations",
        "Role-based access for store managers and head office",
        "Multiple payment gateway integrations"
      ]
    },
    contextReality: {
      environment: "The solution was designed as a dual-layer platform: a trust-centric B2C ecommerce experience for customers and a controlled B2B portal for inter-store inventory visibility and trading. Both layers were anchored around transparency, real-time data, and human-assisted decision making.",
      existingSystems: [
        "Traditional retail operations across 36 stores",
        "Manual stock coordination between locations",
        "Offline trust signals needing digital translation"
      ],
      constraints: [
        "Real-time gold and diamond rate integration",
        "Transparent price breakup (metal, making charges, taxes)",
        "Authenticity and purity assurance indicators",
        "Assisted buying via WhatsApp and voice support",
        "Store-backed order fulfillment",
        "Centralized inventory visibility across 36 stores",
        "Inter-store stock transfer and trading workflows",
        "Role-based access for store managers and head office",
        "Transaction and audit tracking for internal movements"
      ]
    },
    approach: {
      principles: [
        "Trust must be visible at every decision point",
        "Transparency reduces hesitation more than promotions",
        "Digital systems should strengthen physical retail, not compete with it",
        "Internal efficiency is as critical as customer experience"
      ],
      strategicDecisions: [
        "Dual-layer platform supporting both B2C and B2B workflows",
        "Standardized pricing logic and disclosures across all channels",
        "Store-linked fulfillment for accountability",
        "Centralized B2B inventory visibility"
      ],
      tradeoffs: [
        "Clear separation of B2C and B2B experiences",
        "Role-based access and workflows for operational control",
        "Phased rollout across store network"
      ]
    },
    execution: {
      architecture: "The platform was built to support both customer experience and enterprise operations without compromising performance or security. Unified backend supporting B2C and B2B workflows with dynamic pricing engine aligned with daily metal rates and secure role-based access across organizational hierarchy.",
      keyModules: [
        "B2C Ecommerce Portal",
        "B2B Inventory & Trading Portal",
        "Dynamic Pricing Engine",
        "Real-time Rate Integration",
        "Inter-store Stock Transfer System",
        "Role-based Access Control",
        "Assisted Commerce Layer"
      ],
      integrations: [
        "Payment gateways: CCAvenue, ICICI",
        "Communication: WhatsApp, Email, SMS",
        "VoIP systems for assisted sales and support"
      ],
      considerations: [
        "Unified backend for B2C and B2B",
        "Dynamic pricing with daily metal rates",
        "Secure role-based access hierarchy",
        "Communication layer for assisted commerce"
      ]
    },
    challengesThatMattered: [
      {
        title: "Scaling Trust Across a Retail Chain",
        description: "Ensuring consistent trust signals across all stores and online channels.",
        impact: "Standardized pricing logic and disclosures with store-linked fulfillment and accountability. Uniform customer confidence regardless of entry point."
      },
      {
        title: "Managing Inventory Across 36 Stores",
        description: "Stock imbalance and manual coordination between locations.",
        impact: "Centralized B2B inventory visibility with structured inter-store trading workflows. Improved stock utilization and reduced idle inventory."
      },
      {
        title: "Balancing B2C Simplicity with B2B Control",
        description: "Customer flows needed to remain simple while internal operations were complex.",
        impact: "Clear separation of B2C and B2B experiences with role-based access and workflows. Operational control without user experience compromise."
      }
    ],
    solutions: [
      {
        problem: "Scaling Trust Across a Retail Chain",
        decision: "Standardized pricing logic and disclosures",
        intervention: "Store-linked fulfillment and accountability across all channels",
        result: "Uniform customer confidence regardless of entry point"
      },
      {
        problem: "Managing Inventory Across 36 Stores",
        decision: "Centralized B2B inventory visibility",
        intervention: "Structured inter-store trading workflows with audit tracking",
        result: "Improved stock utilization and reduced idle inventory"
      },
      {
        problem: "Balancing B2C Simplicity with B2B Control",
        decision: "Clear separation of B2C and B2B experiences",
        intervention: "Role-based access and workflows for different user types",
        result: "Operational control without user experience compromise"
      }
    ],
    outcomes: {
      quantitative: [
        "Increased confidence in online jewelry purchases",
        "Clear understanding of pricing and authenticity",
        "Assisted buying experience comparable to in-store visits",
        "36 stores with centralized inventory visibility"
      ],
      qualitative: [
        "Successful omni-channel expansion",
        "Better inventory circulation across stores",
        "Reduced dependency on manual coordination",
        "Phygital commerce model scaled across a retail chain",
        "Digital backbone supporting both sales and operations",
        "Future-ready platform for expansion and analytics"
      ],
      impact: "CS Jewellers successfully built a dual-layer phygital commerce platform that serves both customers and internal operations, proving that trust-first design combined with operational efficiency can scale across a 36-store retail chain."
    },
    learnings: {
      keyLearnings: [
        "Trust visibility at every decision point is critical for high-value purchases",
        "Digital systems should strengthen physical retail, not compete with it",
        "Internal efficiency is as critical as customer experience"
      ],
      improvements: [],
      insights: [
        "Phygital commerce with B2B inventory integration creates sustainable competitive advantage for retail chains"
      ]
    },
    gallery: [csJewellers]
  },
  'bmc-disaster-management': {
    title: "BMC Disaster Management System",
    category: "City-Scale Weather Intelligence & Citizen Information Platform | Government",
    image: bmcDm,
    snapshot: {
      client: "Brihanmumbai Municipal Corporation (BMC)",
      industry: "Government | Disaster Management | Urban Resilience",
      role: "Business Analyst",
      duration: "18+ months",
      techStack: ["Java", "Angular", "Ionic", "Oracle"]
    },
    brief: {
      problem: "Mumbai is highly vulnerable to weather-driven disruptions, especially during the monsoon season. While the city had invested in advanced weather infrastructure, citizens lacked easy, localized access to real-time environmental data such as rainfall intensity, wind conditions, and humidity. This information gap limited preparedness and increased panic during extreme weather events.",
      context: "Brihanmumbai Municipal Corporation deployed more than 50 automated weather stations across strategic locations in Mumbai, connected through high-speed dedicated leased lines. The objective was to convert this rich data into a reliable, citizen-facing digital platform that could support awareness, preparedness, and early response.",
      constraints: [
        "Making highly technical data accessible to the general public",
        "Ensuring accuracy and reliability of real-time feeds",
        "Handling city-wide scale and peak usage during extreme events",
        "Delivering timely updates without overwhelming users",
        "High availability during critical weather periods"
      ]
    },
    contextReality: {
      environment: "Although weather data was being collected continuously, its consumption was largely restricted to internal systems or technical stakeholders. There was no intuitive, location-aware interface for citizens to understand conditions affecting their immediate surroundings.",
      existingSystems: [
        "50+ automated weather stations deployed across Mumbai",
        "High-speed dedicated leased line connectivity",
        "Internal weather monitoring systems",
        "Technical dashboards for stakeholders"
      ],
      constraints: [
        "Real-time rainfall data by location",
        "Temperature, humidity, wind speed, and wind direction indicators",
        "Data sourced from 50+ automated weather stations",
        "High availability during critical weather events",
        "Mobile-first access for citizens across the city"
      ]
    },
    approach: {
      principles: [
        "Accuracy builds trust during emergencies",
        "Information must be local, not generic",
        "Simplicity is critical in high-stress situations",
        "Systems must perform when conditions are worst"
      ],
      strategicDecisions: [
        "Continuous data ingestion from automated weather stations",
        "Secure, leased-line connectivity for uninterrupted data flow",
        "Backend processing to normalize and validate sensor readings",
        "Scalable architecture to handle traffic surges during emergencies"
      ],
      tradeoffs: [
        "Simplified indicators over complex meteorological data",
        "Location-specific views over city-wide averages",
        "Mobile-first approach for maximum reach"
      ]
    },
    execution: {
      architecture: "The platform was built to reliably ingest, process, and present sensor data at city scale. Continuous data ingestion from automated weather stations with secure leased-line connectivity, backend processing to normalize and validate sensor readings, and web and mobile applications for citizen access.",
      keyModules: [
        "Real-time Data Ingestion Layer",
        "Sensor Data Normalization Engine",
        "Location-aware Weather Display",
        "Citizen Mobile Application",
        "Web Portal for Weather Information",
        "Alert and Notification System"
      ],
      integrations: [
        "Automated Weather Stations",
        "Rainfall Gauges",
        "Email, SMS, and WhatsApp for alerts and notifications"
      ],
      considerations: [
        "High-availability backend design",
        "Dedicated leased-line connectivity",
        "Scalable for traffic surges",
        "Modular for future enhancements"
      ]
    },
    challengesThatMattered: [
      {
        title: "Translating Sensor Data into Citizen-Friendly Information",
        description: "Raw meteorological data can be difficult for citizens to interpret.",
        impact: "Simplified indicators and visual representations with location-specific views instead of city-wide averages. Citizens could quickly understand conditions relevant to them."
      },
      {
        title: "Ensuring Reliability During Extreme Weather",
        description: "Peak usage coincides with the most challenging network and environmental conditions.",
        impact: "High-availability backend design with dedicated leased-line connectivity from weather stations. Consistent data availability during critical periods."
      },
      {
        title: "Building for Long-Term Evolution",
        description: "Disaster management needs evolve over time.",
        impact: "Modular architecture supporting future enhancements with planned rollout of upgraded application version. A future-ready platform capable of expanding beyond weather data."
      }
    ],
    solutions: [
      {
        problem: "Translating Sensor Data into Citizen-Friendly Information",
        decision: "Simplified indicators and visual representations",
        intervention: "Location-specific views instead of city-wide averages",
        result: "Citizens could quickly understand conditions relevant to them"
      },
      {
        problem: "Ensuring Reliability During Extreme Weather",
        decision: "High-availability backend design",
        intervention: "Dedicated leased-line connectivity from weather stations",
        result: "Consistent data availability during critical periods"
      },
      {
        problem: "Building for Long-Term Evolution",
        decision: "Modular architecture supporting future enhancements",
        intervention: "Planned rollout of upgraded application version",
        result: "A future-ready platform capable of expanding beyond weather data"
      }
    ],
    outcomes: {
      quantitative: [
        "50+ automated weather stations integrated",
        "City-wide coverage for real-time weather data",
        "Reduced uncertainty during heavy rainfall",
        "Improved personal preparedness for citizens"
      ],
      qualitative: [
        "Easy access to accurate, location-specific weather information",
        "Reduced panic during adverse weather conditions",
        "Effective utilization of existing weather infrastructure",
        "Strong foundation for early warning and alert systems",
        "Improved communication between civic authorities and citizens",
        "Strengthened Mumbai's disaster preparedness framework"
      ],
      impact: "BMC Disaster Management System successfully transformed complex weather station data into accessible, citizen-facing information, strengthening Mumbai's urban resilience and disaster preparedness during the critical monsoon season."
    },
    learnings: {
      keyLearnings: [
        "Accuracy builds trust during emergencies",
        "Information must be local and personalized for impact",
        "Systems must be designed to perform under worst conditions"
      ],
      improvements: [],
      insights: [
        "Open, citizen-facing data platforms create value from existing infrastructure investments"
      ]
    },
    gallery: [bmcDm]
  },
  'mobile-games-development': {
    title: "Mobile Games Development",
    category: "Simulation Games & Game Production Collaboration",
    image: mobileGames,
    snapshot: {
      client: "Cypher Gamez (Sister Concern)",
      industry: "Private | Gaming | Mobile Simulation & Entertainment",
      role: "Gamer / Tester (Collaborative Role)",
      duration: "3+ years",
      techStack: ["Unity"]
    },
    brief: {
      problem: "This engagement had two distinct problem spaces, addressed simultaneously through game design, testing, and production collaboration.",
      context: "Cypher Gamez positioned itself as both a B2C game publisher creating niche simulation experiences and a B2B technical execution partner for mobile game production.",
      constraints: [
        "Mobile gamers seeking immersive yet accessible simulation experiences",
        "Lack of culturally relevant simulation content on mobile platforms",
        "Businesses lacking in-house game development capabilities",
        "Need for end-to-end game production services",
        "Cross-device performance optimization requirements"
      ]
    },
    contextReality: {
      environment: "Mobile gamers often seek simulation experiences that let them step into specific real-world roles such as driving an Indian auto-rickshaw, operating a metro train, parking vehicles, or navigating off-road terrains. Most mobile platforms lack variety in niche, culturally relevant simulation content.",
      existingSystems: [
        "Train Simulator – Indian Metro",
        "Rescue Ship Simulator",
        "Offroad 4x4 Simulation",
        "Vehicle Parking and Driving Simulators"
      ],
      constraints: [
        "Game development",
        "Platform porting",
        "Optimization for mobile performance",
        "Publishing and maintenance",
        "End-to-end production services"
      ]
    },
    approach: {
      principles: [
        "Gameplay must feel familiar within seconds",
        "Controls should be forgiving, especially on mobile",
        "Realism should enhance fun, not slow it down",
        "Progression keeps casual players engaged"
      ],
      strategicDecisions: [
        "Focus on niche, culturally relevant simulation titles",
        "Prioritize accessibility and recognizable environments",
        "Implement progression-driven gameplay",
        "Provide end-to-end services for B2B partners"
      ],
      tradeoffs: [
        "Simplified controls over strict realism",
        "Adjustable difficulty for broader accessibility",
        "Stability and performance over feature overload",
        "Cross-device consistency as priority"
      ]
    },
    execution: {
      architecture: "Games were built using Unity engine, optimized for mobile performance across a wide range of Android devices with varying hardware capabilities.",
      keyModules: [
        "Unity-based game development",
        "Mobile-optimized graphics and physics",
        "Cross-device compatibility testing",
        "Performance tuning for varied hardware",
        "Progression and engagement systems"
      ],
      integrations: [
        "Mobile app stores (Google Play, App Store)",
        "Analytics and performance monitoring",
        "In-app purchase systems",
        "Ad networks for monetization"
      ],
      considerations: [
        "Wide variation in mobile hardware performance",
        "User experience across different screen sizes",
        "Battery and resource optimization",
        "Iterative feedback loops for quality"
      ]
    },
    challengesThatMattered: [
      {
        title: "Balancing Realism with Playability",
        description: "Highly realistic simulations can become tedious on mobile.",
        impact: "Simplified controls, adjustable difficulty, and focus on experience over strict realism. Games remained accessible while still feeling authentic."
      },
      {
        title: "Ensuring Stability Across Devices",
        description: "Wide variation in mobile hardware performance.",
        impact: "Extensive testing across devices and performance tuning within Unity. Smoother gameplay and fewer post-release issues."
      },
      {
        title: "Creating Culturally Relevant Content",
        description: "Most simulation games lack local, recognizable environments.",
        impact: "Focus on Indian scenarios like auto-rickshaws, metro trains, and local street environments. Higher player engagement and connection."
      }
    ],
    solutions: [
      {
        problem: "Balancing Realism with Playability",
        decision: "Simplified controls and adjustable difficulty",
        intervention: "Focus on experience over strict realism with forgiving controls",
        result: "Games remained accessible while still feeling authentic"
      },
      {
        problem: "Ensuring Stability Across Devices",
        decision: "Extensive cross-device testing",
        intervention: "Performance tuning within Unity for varied hardware",
        result: "Smoother gameplay and fewer post-release issues"
      },
      {
        problem: "Creating Culturally Relevant Content",
        decision: "Focus on local Indian scenarios",
        intervention: "Auto-rickshaws, metro trains, and recognizable street environments",
        result: "Higher player engagement and emotional connection"
      }
    ],
    outcomes: {
      quantitative: [
        "Multiple simulation titles published",
        "3+ years of continuous collaboration",
        "Wide device compatibility achieved",
        "Reduced post-release issues through testing"
      ],
      qualitative: [
        "Access to niche, culturally relevant simulation experiences",
        "Engaging gameplay without steep learning curves",
        "Variety across simulation genres",
        "Reliable execution partner for mobile game production",
        "Faster go-to-market for game ideas",
        "Reduced technical overhead for collaborators"
      ],
      impact: "The collaboration delivered engaging, culturally relevant simulation games while providing B2B partners with reliable game production services, reducing technical overhead and accelerating time-to-market."
    },
    learnings: {
      keyLearnings: [
        "Deep exposure to game development lifecycles",
        "Strong understanding of player psychology in simulation games",
        "Experience bridging creative intent and technical execution"
      ],
      improvements: [],
      insights: [
        "Culturally relevant content creates stronger player connections",
        "Mobile game success requires balancing realism with accessibility"
      ]
    },
    gallery: [mobileGames]
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

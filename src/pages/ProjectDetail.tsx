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

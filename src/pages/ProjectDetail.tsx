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
  BookOpen
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
  realityCheck: {
    environment: string;
    challenges: string[];
  };
  approach: {
    principles: string[];
    decisions: string[];
  };
  execution: {
    overview: string;
    modules: string[];
    considerations: string[];
  };
  challengesThatMattered: {
    title: string;
    description: string;
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
  };
  learnings: {
    keyLearnings: string[];
    improvements: string[];
    insights: string[];
  };
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
    realityCheck: {
      environment: "The existing infrastructure comprised decades-old COBOL-based systems with limited API capabilities. Multiple teams operated in silos with varying levels of technical maturity.",
      challenges: [
        "Fragmented data across multiple legacy databases",
        "Resistance to change from traditional banking operations teams",
        "Regulatory audits scheduled during the implementation phase",
        "Limited documentation of existing business logic"
      ]
    },
    approach: {
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
    execution: {
      overview: "Designed a microservices-based architecture with an API gateway layer that abstracted legacy system complexities while enabling modern frontend applications.",
      modules: [
        "Customer Identity & Access Management",
        "Real-time Transaction Processing Engine",
        "Regulatory Reporting Dashboard",
        "Branch Operations Portal"
      ],
      considerations: [
        "End-to-end encryption for all data in transit and at rest",
        "Multi-region deployment for disaster recovery",
        "Comprehensive audit logging for compliance"
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
    solutions: [
      {
        problem: "Legacy systems couldn't handle real-time API requests",
        decision: "Implemented an event-driven caching layer",
        intervention: "Built Redis-based cache with eventual consistency guarantees",
        result: "Reduced average response time from 8 seconds to 200ms"
      },
      {
        problem: "Teams lacked experience with modern development practices",
        decision: "Invested in capability building before scaling",
        intervention: "Established internal academy with hands-on workshops",
        result: "90% of team members certified in cloud-native technologies within 6 months"
      }
    ],
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
    }
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
    realityCheck: {
      environment: "Existing workflow involved manual verification by multiple officers across different departments. Document formats varied significantly across districts.",
      challenges: [
        "Inconsistent document quality from rural submission centers",
        "Limited training data for regional language documents",
        "Resistance from staff concerned about automation",
        "Complex approval hierarchies across departments"
      ]
    },
    approach: {
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
    execution: {
      overview: "Developed a document intelligence platform with OCR, classification, and extraction capabilities, integrated into existing workflow management systems.",
      modules: [
        "Multi-language OCR Engine",
        "Document Classification Model",
        "Data Extraction & Validation",
        "Officer Dashboard & Review Queue"
      ],
      considerations: [
        "On-premise deployment to meet data sovereignty requirements",
        "Confidence scoring for automated vs manual routing",
        "Comprehensive audit trails for all AI decisions"
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
    solutions: [
      {
        problem: "Low accuracy on handwritten regional language documents",
        decision: "Built custom training datasets with local language experts",
        intervention: "Engaged 50+ language specialists for annotation over 3 months",
        result: "Achieved 94% accuracy across all supported languages"
      },
      {
        problem: "Staff resistance to automation",
        decision: "Positioned AI as assistant, not replacement",
        intervention: "Created 'AI Buddy' program pairing officers with the system",
        result: "85% positive feedback from staff after 6 months"
      }
    ],
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
    }
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
    realityCheck: {
      environment: "Stores operated on different technology stacks based on when they were set up. Inventory synchronization was batch-based with significant delays.",
      challenges: [
        "Varying network quality across store locations",
        "Multiple POS vendors with different integration capabilities",
        "Staff unfamiliarity with mobile-first customer service"
      ]
    },
    approach: {
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
    execution: {
      overview: "Developed a cross-platform mobile app with offline capabilities, real-time inventory visibility, and seamless integration with store operations.",
      modules: [
        "Product Discovery & Search",
        "In-store Mode with Barcode Scanner",
        "Unified Cart & Checkout",
        "Store Pickup Coordination"
      ],
      considerations: [
        "Local SQLite database for offline product catalog",
        "Background sync for inventory updates",
        "Push notifications for pickup readiness"
      ]
    },
    challengesThatMattered: [
      {
        title: "Real-time Inventory Accuracy",
        description: "Achieving accurate stock visibility when underlying systems had batch updates required building predictive inventory models."
      }
    ],
    solutions: [
      {
        problem: "Inventory data was 4-6 hours stale",
        decision: "Built predictive stock model",
        intervention: "ML model predicting stock based on sales velocity and batch data",
        result: "Achieved 97% inventory accuracy for in-app display"
      }
    ],
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
    }
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
    realityCheck: {
      environment: "Healthcare providers used different data standards, making interoperability extremely challenging. Many small clinics still used paper records.",
      challenges: [
        "Lack of standardized health data formats across providers",
        "Trust issues around sharing patient data",
        "Varying digital literacy among patient demographics"
      ]
    },
    approach: {
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
    execution: {
      overview: "Designed and built a patient-centric health records platform with strong focus on usability, accessibility, and data privacy.",
      modules: [
        "Health Records Aggregation",
        "Consent Management Portal",
        "Family Health Dashboard",
        "Provider Integration Hub"
      ],
      considerations: [
        "End-to-end encryption with patient-held keys",
        "Accessibility compliance (WCAG 2.1 AA)",
        "Multilingual interface"
      ]
    },
    challengesThatMattered: [
      {
        title: "Designing for Elderly Users",
        description: "Creating an interface that worked for both tech-native millennials and elderly patients with limited smartphone experience required extensive user research and testing."
      }
    ],
    solutions: [
      {
        problem: "Elderly users struggled with complex health apps",
        decision: "Created adaptive interface modes",
        intervention: "Developed 'Simple Mode' with larger text, fewer options, and voice guidance",
        result: "NPS of 72 among 60+ age group users"
      }
    ],
    outcomes: {
      quantitative: [
        "85% patient activation rate",
        "40% reduction in redundant diagnostic tests",
        "NPS of 68 across all user segments"
      ],
      qualitative: [
        "Praised for accessibility in industry reviews",
        "Selected for government health platform pilot"
      ]
    },
    learnings: {
      keyLearnings: [
        "Healthcare UX must accommodate extreme user diversity",
        "Trust is the biggest barrier in health data sharing"
      ],
      improvements: [
        "Would have involved caregivers earlier in the design process"
      ],
      insights: [
        "Simple design is harder but essential for inclusive healthcare products"
      ]
    }
  },
  'content-title-description': {
    title: "Content Title — Description",
    category: "Web Development",
    image: workLifestyle,
    snapshot: {
      client: "Manufacturing Conglomerate",
      industry: "Manufacturing / Industry 4.0",
      role: "Digital Transformation Lead",
      duration: "24 months",
      techStack: ["Angular", "Java Spring", "Kafka", "TimescaleDB", "Azure IoT"]
    },
    brief: {
      problem: "Lack of real-time visibility into production metrics across 12 plants was causing inefficiencies, quality issues, and delayed decision-making.",
      context: "The conglomerate needed to implement Industry 4.0 principles across their manufacturing operations while dealing with legacy machinery and varying levels of plant modernization.",
      constraints: [
        "Plants spread across 4 countries with different regulations",
        "Machinery ranging from 2 years to 40 years old",
        "Unionized workforce with concerns about monitoring",
        "24/7 operations with zero tolerance for production stoppage"
      ]
    },
    realityCheck: {
      environment: "Each plant operated as an independent unit with different reporting standards, shift patterns, and operational KPIs.",
      challenges: [
        "Integrating IoT sensors with legacy machinery",
        "Standardizing metrics across diverse manufacturing processes",
        "Addressing workforce concerns about surveillance"
      ]
    },
    approach: {
      principles: [
        "Non-invasive sensor integration for legacy equipment",
        "Transparency in what data is collected and how it's used",
        "Local optimization with global visibility"
      ],
      decisions: [
        "Retrofitting approach over equipment replacement",
        "Edge computing for latency-critical decisions",
        "Plant-level autonomy with corporate dashboards"
      ]
    },
    execution: {
      overview: "Built an end-to-end IoT platform with edge computing capabilities, real-time data pipelines, and role-based dashboards for different stakeholders.",
      modules: [
        "IoT Gateway & Edge Processing",
        "Real-time Production Dashboard",
        "Predictive Maintenance Engine",
        "Quality Analytics Portal"
      ],
      considerations: [
        "Sub-second latency for critical alerts",
        "Offline capability for edge devices",
        "Role-based access across organizational hierarchy"
      ]
    },
    challengesThatMattered: [
      {
        title: "Retrofitting 40-year-old Machinery",
        description: "Many critical machines lacked any digital interfaces, requiring creative sensor placement and signal interpretation."
      },
      {
        title: "Union Negotiations",
        description: "Workforce representatives had legitimate concerns about monitoring that needed to be addressed through transparent dialogue and policy commitments."
      }
    ],
    solutions: [
      {
        problem: "Legacy machines had no digital interfaces",
        decision: "Developed custom IoT adapters",
        intervention: "Created vibration and audio-based monitoring for analog machines",
        result: "100% machine coverage including 40-year-old equipment"
      },
      {
        problem: "Worker concerns about surveillance",
        decision: "Transparent monitoring charter",
        intervention: "Joint committee for data usage policies, worker dashboard access",
        result: "Union endorsement of the program"
      }
    ],
    outcomes: {
      quantitative: [
        "15% improvement in Overall Equipment Effectiveness (OEE)",
        "35% reduction in unplanned downtime",
        "$8M annual savings from predictive maintenance",
        "22% reduction in quality defects"
      ],
      qualitative: [
        "Transformed organizational culture around data-driven decisions",
        "Model for industry recognition and awards"
      ]
    },
    learnings: {
      keyLearnings: [
        "Industrial IoT projects are as much about people as technology",
        "Retrofitting requires creative engineering and patience"
      ],
      improvements: [
        "Would have started union engagement from project inception"
      ],
      insights: [
        "Industry 4.0 success requires balancing efficiency gains with workforce trust"
      ]
    }
  },
  'sample-title-preview': {
    title: "Sample Title — Preview",
    category: "AI/ML",
    image: fashionLifestyle,
    snapshot: {
      client: "Confidential",
      industry: "Insurance",
      role: "Product Manager",
      duration: "14 months",
      techStack: ["Python", "PyTorch", "AWS SageMaker", "PostgreSQL", "React"]
    },
    brief: {
      problem: "Manual claims processing was taking 15-20 days on average, leading to customer dissatisfaction and high operational costs.",
      context: "The insurer needed to automate claims assessment while maintaining accuracy and regulatory compliance.",
      constraints: [
        "IRDAI regulatory compliance",
        "Integration with legacy claims management system",
        "Fraud detection requirements"
      ]
    },
    realityCheck: {
      environment: "Claims involved diverse document types and required cross-referencing with multiple data sources for validation.",
      challenges: [
        "Highly variable claim documentation quality",
        "Complex fraud patterns requiring expert judgment",
        "Regulatory scrutiny on automated decisions"
      ]
    },
    approach: {
      principles: [
        "Human-in-the-loop for high-value claims",
        "Explainable AI for regulatory transparency",
        "Continuous learning from adjuster decisions"
      ],
      decisions: [
        "Tiered automation based on claim complexity",
        "Built confidence scoring for routing decisions"
      ]
    },
    execution: {
      overview: "Developed an AI-powered claims triage and assessment platform with fraud detection and automated settlement for straightforward claims.",
      modules: [
        "Document Intelligence Engine",
        "Claims Triage & Routing",
        "Fraud Detection Model",
        "Automated Settlement Module"
      ],
      considerations: [
        "Model explainability for regulatory audits",
        "Continuous model retraining pipeline"
      ]
    },
    challengesThatMattered: [
      {
        title: "Balancing Speed with Accuracy",
        description: "Pressure to reduce processing time while maintaining high accuracy standards required careful threshold calibration."
      }
    ],
    solutions: [
      {
        problem: "Need for speed vs accuracy trade-off",
        decision: "Dynamic routing based on confidence",
        intervention: "Built confidence-based routing with different SLAs",
        result: "70% of claims auto-settled, maintaining 99.2% accuracy"
      }
    ],
    outcomes: {
      quantitative: [
        "Average claims processing reduced from 17 days to 3 days",
        "70% of straightforward claims auto-settled",
        "40% reduction in claims operations costs"
      ],
      qualitative: [
        "Customer satisfaction scores improved significantly",
        "Adjusters focused on complex, high-value claims"
      ]
    },
    learnings: {
      keyLearnings: [
        "Regulatory acceptance of AI requires extensive explainability investment"
      ],
      improvements: [
        "Would have built model monitoring dashboards earlier"
      ],
      insights: [
        "AI in regulated industries requires patience and transparency"
      ]
    }
  },
  'example-title-summary': {
    title: "Example Title — Summary",
    category: "Design",
    image: businessPost,
    snapshot: {
      client: "EdTech Platform",
      industry: "Education Technology",
      role: "Product Lead",
      duration: "6 months",
      techStack: ["Figma", "React", "Node.js", "PostgreSQL", "WebRTC"]
    },
    brief: {
      problem: "Low student engagement and high dropout rates in online courses were affecting platform growth and learning outcomes.",
      context: "The platform needed to reimagine the online learning experience to improve completion rates and learner satisfaction.",
      constraints: [
        "Must work on low-bandwidth connections",
        "Support for vernacular languages",
        "Accessibility for learners with disabilities"
      ]
    },
    realityCheck: {
      environment: "Learners accessed the platform on a variety of devices, primarily mobile, often with intermittent connectivity.",
      challenges: [
        "Attention span challenges for long-form content",
        "Limited interactivity in existing course formats",
        "Instructor content creation bottlenecks"
      ]
    },
    approach: {
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
    execution: {
      overview: "Redesigned the learning experience with focus on engagement, accessibility, and community features.",
      modules: [
        "Micro-learning Content Player",
        "Interactive Quiz Engine",
        "Peer Discussion Forums",
        "Progress Gamification System"
      ],
      considerations: [
        "Offline content download for low connectivity",
        "Screen reader compatibility",
        "Data-light mode for 2G networks"
      ]
    },
    challengesThatMattered: [
      {
        title: "Content Migration",
        description: "Converting 500+ hours of existing long-form content into micro-learning format while maintaining coherence."
      }
    ],
    solutions: [
      {
        problem: "Massive existing content needed restructuring",
        decision: "AI-assisted content chunking",
        intervention: "Built AI tool to suggest optimal break points and create summaries",
        result: "Content migration completed 3x faster than manual approach"
      }
    ],
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
    }
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
    realityCheck: {
      environment: "Fleet operated across diverse geographies with varying road conditions and connectivity. Drivers had different levels of smartphone proficiency.",
      challenges: [
        "GPS data quality varied significantly across vendors",
        "Driver adoption of new mobile app",
        "Scaling real-time tracking for thousands of simultaneous vehicles"
      ]
    },
    approach: {
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
    execution: {
      overview: "Developed an integrated fleet management platform with route optimization, real-time tracking, and customer visibility portal.",
      modules: [
        "Route Optimization Engine",
        "Real-time Tracking Dashboard",
        "Driver Mobile App",
        "Customer Visibility Portal"
      ],
      considerations: [
        "WebSocket connections for live tracking",
        "Geospatial indexing for efficient queries",
        "Multi-tenant data isolation"
      ]
    },
    challengesThatMattered: [
      {
        title: "Real-time at Scale",
        description: "Processing and broadcasting location updates for 10,000+ vehicles every 30 seconds required careful architecture."
      }
    ],
    solutions: [
      {
        problem: "Broadcasting updates to thousands of dashboard users",
        decision: "Implemented geo-partitioned pub/sub",
        intervention: "Redis-based pub/sub with geographic partitioning",
        result: "Sub-second update latency at 10K vehicle scale"
      }
    ],
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
    }
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
    realityCheck: {
      environment: "Users had varying financial literacy levels. Bank API availability was inconsistent, and many transactions were still cash-based.",
      challenges: [
        "Incomplete transaction data from bank feeds",
        "Cash transaction categorization",
        "Building user trust for financial data access"
      ]
    },
    approach: {
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
    execution: {
      overview: "Designed and built an intelligent personal finance app with automated transaction categorization, spending insights, and personalized recommendations.",
      modules: [
        "Bank Account Aggregation",
        "Smart Categorization Engine",
        "Spending Analytics Dashboard",
        "Goal-based Savings Tracker"
      ],
      considerations: [
        "Biometric authentication",
        "Local data encryption",
        "Data minimization principles"
      ]
    },
    challengesThatMattered: [
      {
        title: "Cash Transaction Tracking",
        description: "India's cash-heavy economy meant bank feeds only told part of the story. Making cash tracking effortless was crucial."
      }
    ],
    solutions: [
      {
        problem: "Users wouldn't manually log cash transactions",
        decision: "Built instant receipt scanning",
        intervention: "AI-powered receipt OCR with one-tap logging",
        result: "Cash transactions captured increased by 300%"
      }
    ],
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
    }
  }
};

// Helper to convert title to slug
const titleToSlug = (title: string) => {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
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

        {/* Hero Image */}
        <div className="container-blog py-8">
          <div className="relative aspect-[21/9] rounded-xl overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <Badge className="mb-3">{project.category}</Badge>
              <h1 className="text-3xl md:text-4xl font-bold text-white">{project.title}</h1>
            </div>
          </div>
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

              {/* 3. Context & Reality Check */}
              <section>
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-primary" />
                  Context & Reality Check
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">{project.realityCheck.environment}</p>
                <div className="grid gap-3">
                  {project.realityCheck.challenges.map((challenge, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-muted/30">
                      <span className="text-amber-500 mt-0.5">⚠</span>
                      <span className="text-sm">{challenge}</span>
                    </div>
                  ))}
                </div>
              </section>

              <Separator />

              {/* 4. My Approach */}
              <section>
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-primary" />
                  My Approach
                </h2>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-medium mb-3">Guiding Principles</h4>
                    <div className="grid gap-2">
                      {project.approach.principles.map((principle, i) => (
                        <div key={i} className="flex items-center gap-3 p-3 rounded-lg border border-border">
                          <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-medium">{i + 1}</span>
                          <span className="text-sm">{principle}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium mb-3">Strategic Decisions</h4>
                    <ul className="space-y-2">
                      {project.approach.decisions.map((decision, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                          {decision}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              <Separator />

              {/* 5. Execution & Architecture */}
              <section>
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Layers className="h-5 w-5 text-primary" />
                  Execution & Architecture
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">{project.execution.overview}</p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-sm font-medium mb-3">Key Modules</h4>
                    <div className="space-y-2">
                      {project.execution.modules.map((module, i) => (
                        <div key={i} className="flex items-center gap-2 p-2 rounded bg-muted/50">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                          <span className="text-sm">{module}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium mb-3">Technical Considerations</h4>
                    <ul className="space-y-2">
                      {project.execution.considerations.map((item, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary">→</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              <Separator />

              {/* 6. Challenges That Mattered */}
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

              {/* 7. Solutions & Interventions */}
              <section>
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  Solutions & Interventions
                </h2>
                <div className="space-y-6">
                  {project.solutions.map((solution, i) => (
                    <div key={i} className="relative pl-6 border-l-2 border-primary/30">
                      <div className="absolute left-0 top-0 w-3 h-3 -translate-x-[7px] rounded-full bg-primary" />
                      <div className="space-y-3">
                        <div>
                          <span className="text-xs text-muted-foreground uppercase tracking-wide">Problem</span>
                          <p className="text-sm font-medium">{solution.problem}</p>
                        </div>
                        <div>
                          <span className="text-xs text-muted-foreground uppercase tracking-wide">Decision</span>
                          <p className="text-sm">{solution.decision}</p>
                        </div>
                        <div>
                          <span className="text-xs text-muted-foreground uppercase tracking-wide">Intervention</span>
                          <p className="text-sm">{solution.intervention}</p>
                        </div>
                        <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                          <span className="text-xs text-green-600 dark:text-green-400 uppercase tracking-wide">Result</span>
                          <p className="text-sm font-medium text-green-700 dark:text-green-300">{solution.result}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <Separator />

              {/* 9. Learnings & Reflections */}
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
                {/* 8. Outcomes & Impact */}
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
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default ProjectDetail;

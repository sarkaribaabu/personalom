import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { GraduationCap, TrendingUp, Compass, Rocket, Users, Briefcase, Building2, Award, Target, Crown, Sparkles, PenTool, Bike } from 'lucide-react';

const journeySteps = [
  {
    icon: GraduationCap,
    year: "2010-2012",
    title: "The Bold Beginning",
    content: [
      "While pursuing Engineering (IT), I made a decision that surprised everyone — I declined an MNC job offer from campus placement. Instead, I chose to pursue an MBA in Marketing, believing that understanding business was as crucial as understanding technology.",
      "My first career step was as a Business Development Executive at an International Forex & Telematic Company through MBA campus placement. But destiny had other plans — I soon transitioned to a Business Development Manager role at a small IT company, a decision that would shape my entire future."
    ],
    align: "right"
  },
  {
    icon: PenTool,
    year: "College Days - Present",
    title: "The Author Within",
    content: [
      "The creative spark ignited during my college days. I started writing poems and small articles — all exploring themes of love, romance, and lust. These weren't just words; they were emotions flowing through ink, capturing the intensity of human connections.",
      "This passion culminated in 2020 when I published my first erotica novel 'Lustful Love' — now available globally on Amazon, Flipkart, iStore, PlayStore Books, Kindle, and Kobo. In early 2025, I completed another suspense erotica murder mystery, ready to captivate readers with its thrilling narrative. The author within continues to evolve."
    ],
    align: "left"
  },
  {
    icon: TrendingUp,
    year: "2012-2014",
    title: "The Learning Ground",
    content: [
      "Working at a small-scale IT company became my MBA in real-world business. I wasn't just doing one job — I was living multiple roles. From finance and accounts to HR, from sales and pre-sales to after-sales, from development and testing to execution and management.",
      "These two years were transformative. While handling diverse responsibilities, I was simultaneously absorbing market trends, understanding IT vertical requirements, and building a vision for what would come next. Every department taught me something invaluable about building and running a business."
    ],
    align: "left"
  },
  {
    icon: Rocket,
    year: "2014-2018",
    title: "The Entrepreneurial Leap",
    content: [
      "Armed with comprehensive experience and market insights, I took the entrepreneurial plunge in 2014 — founding Precise IT Solutions Pvt Ltd. The response was overwhelming — we achieved 300% Year-over-Year growth in the private sector.",
      "In 2018, recognizing the opportunity in the government sector, I partnered with a proven market leader who had been excelling since 2009. This strategic alliance opened doors to the Government sector, expanding our horizons beyond private enterprises."
    ],
    align: "right"
  },
  {
    icon: Bike,
    year: "2012-2026",
    title: "The Rider's Dream",
    content: [
      "Back in 2012, I owned a Honda CBR250RR — a machine that represented freedom, speed, and dreams. But in 2014, when Precise IT Solutions needed financial foundation, I made a difficult choice. The bike was sold, and the dream of riding sports bikes on open roads was put on hold.",
      "Fast forward to 2026 — with the career graph rising strong, it was time to revive that dream. I upgraded to a BMW G310RR, a symbol of perseverance. The dream that was once sacrificed for entrepreneurship is now alive again. Soon, I'll be riding on the roads, living the passion that never faded."
    ],
    align: "left"
  },
  {
    icon: Award,
    year: "2018-2022",
    title: "Government Excellence",
    content: [
      "The next four years were dedicated to delivering turnkey solutions to Maharashtra Government and the Home Department. Our commitment wasn't just about completing projects — it was about exceeding expectations, delivering more than 100% satisfaction on every engagement.",
      "Our dedication was recognized at the highest levels. I was felicitated by Shri Devendra Fadnavis for our due diligence in implementing the Dial 100 system, complete with analytics and proven track records. These weren't just projects; they were contributions to public safety and governance."
    ],
    align: "left"
  },
  {
    icon: Building2,
    year: "2022-2025",
    title: "Scaling New Heights",
    content: [
      "In 2022, I joined Techlead Group as a Partner and Core Team Member, bringing my eGovernance expertise to larger platforms. This role challenged me to handle massive ERP projects for organizations like MHADA, PCMC, and NMMC.",
      "It was more than sales — it tested my core competencies in Project Management and Head Operations (Technical). Managing, implementing, and delivering these complex projects refined my leadership and execution capabilities to new heights."
    ],
    align: "right"
  },
  {
    icon: Crown,
    year: "2025-Present",
    title: "The Next Chapter",
    content: [
      "In 2025, I launched Tantrayu Software Pvt Ltd with a focused mission — to bring digital transformation to small-scale municipal corporations, councils, Zilla Parishads, and Nagar Parishads across India.",
      "In January 2026, I was honored with an Honorary Doctorate by Frankford International University for my contributions toward 'Digital Transformation in Urban Governance.' This recognition fuels my passion to continue driving change and pursuing even greater adventures ahead."
    ],
    align: "left"
  }
];

const professionalExperience = [
  {
    role: "Founder & Director",
    company: "Tantrayu Software Pvt Ltd",
    period: "2025 - Present",
    type: "employer",
    icon: Sparkles,
    highlights: [
      "Focused on digital transformation for municipal corporations, councils & Zilla Parishads",
      "Honorary Doctorate recipient for contributions in Urban Governance digitalization",
      "Building scalable eGovernance solutions for grassroot-level administration"
    ]
  },
  {
    role: "Partner & Core Team Member",
    company: "Techlead Group",
    period: "2022 - Present",
    type: "employee",
    icon: Target,
    highlights: [
      "Leading eGovernance projects for MHADA, PCMC, NMMC",
      "Head of Operations (Technical) managing complex ERP implementations",
      "Project Management for large-scale government digital initiatives"
    ]
  },
  {
    role: "Founder & Director",
    company: "Precise IT Solutions Pvt Ltd",
    period: "2014 - Present",
    type: "employer",
    icon: Rocket,
    highlights: [
      "Achieved 300% YoY growth in private sector",
      "Strategic partnership in 2018 to enter Government sector",
      "Delivered Dial 100 system implementation for MH Police with analytics",
      "Felicitated by Shri Devendra Fadnavis for due diligence & project excellence"
    ]
  },
  {
    role: "Business Development Manager",
    company: "Small Scale IT Company",
    period: "2012 - 2014",
    type: "employee",
    icon: Building2,
    highlights: [
      "Cross-functional experience across all departments",
      "Learned finance, HR, sales, development, testing & management",
      "Gained deep understanding of IT market trends and requirements"
    ]
  },
  {
    role: "Business Development Executive",
    company: "International Forex & Telematic Company",
    period: "2010 - 2012",
    type: "employee",
    icon: Briefcase,
    highlights: [
      "First corporate role via MBA campus placement",
      "International exposure in forex and telematics industry",
      "Foundation for understanding B2B sales dynamics"
    ]
  }
];

const Journey = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main-content">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-24">
          {/* Decorative background elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/10" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
          
          <div className="container-blog text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
              <Compass className="w-4 h-4" />
              <span>15+ Years of Innovation</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              My Journey
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From declining an MNC offer to receiving an Honorary Doctorate — a story of bold decisions, relentless growth, and digital transformation
            </p>
          </div>
        </section>

        {/* Creative Timeline Section */}
        <section className="container-blog py-16 relative">
          {/* Decorative winding path SVG */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-full max-w-4xl hidden lg:block pointer-events-none">
            <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 400 1200" fill="none">
              <path 
                d="M200 0 Q350 100, 200 200 Q50 300, 200 400 Q350 500, 200 600 Q50 700, 200 800 Q350 900, 200 1000 Q50 1100, 200 1200" 
                stroke="hsl(var(--primary) / 0.15)" 
                strokeWidth="3" 
                strokeDasharray="8 8"
                fill="none"
              />
            </svg>
          </div>

          <div className="relative space-y-0">
            {journeySteps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={index} 
                  className={`relative flex flex-col lg:flex-row items-center gap-8 lg:gap-16 py-12 ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Milestone marker - center */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-20 hidden lg:flex flex-col items-center">
                    <div className="relative">
                      {/* Pulsing ring animation */}
                      <div className="absolute inset-0 w-20 h-20 bg-primary/20 rounded-full animate-pulse" />
                      <div className="relative w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center shadow-lg shadow-primary/30">
                        <Icon className="w-8 h-8 text-primary-foreground" />
                      </div>
                      {/* Year badge */}
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full whitespace-nowrap">
                        {step.year}
                      </div>
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`lg:w-5/12 ${isEven ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className="group relative bg-card border border-border rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:border-primary/30 hover:-translate-y-1">
                      {/* Decorative corner accent */}
                      <div className={`absolute top-0 ${isEven ? 'right-0 rounded-tr-2xl rounded-bl-2xl' : 'left-0 rounded-tl-2xl rounded-br-2xl'} w-24 h-24 bg-gradient-to-br from-primary/10 to-transparent -z-10`} />
                      
                      {/* Mobile Icon */}
                      <div className="flex items-center gap-4 mb-6 lg:hidden">
                        <div className="relative">
                          <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-lg">
                            <Icon className="w-7 h-7 text-primary-foreground" />
                          </div>
                        </div>
                        <div>
                          <span className="text-xs font-bold text-primary block mb-1">{step.year}</span>
                          <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                        </div>
                      </div>

                      {/* Desktop Title */}
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6 hidden lg:block group-hover:text-primary transition-colors">
                        {step.title}
                      </h3>

                      <div className="space-y-4">
                        {step.content.map((paragraph, pIndex) => (
                          <p key={pIndex} className={`text-muted-foreground leading-relaxed ${isEven ? 'lg:text-right' : 'lg:text-left'}`}>
                            {paragraph}
                          </p>
                        ))}
                      </div>

                      {/* Decorative quote mark */}
                      <div className={`absolute ${isEven ? '-left-4' : '-right-4'} top-8 text-6xl text-primary/10 font-serif hidden lg:block`}>
                        "
                      </div>
                    </div>
                  </div>

                  {/* Spacer for the other side */}
                  <div className="hidden lg:block lg:w-5/12" />
                </div>
              );
            })}
          </div>

          {/* Journey continues indicator */}
          <div className="text-center pt-8">
            <div className="inline-flex flex-col items-center gap-2 text-muted-foreground">
              <div className="w-0.5 h-12 bg-gradient-to-b from-primary/50 to-transparent" />
              <span className="text-sm italic">The adventure continues...</span>
            </div>
          </div>
        </section>

        {/* Professional Experience Section */}
        <section className="py-16 bg-muted/30">
          <div className="container-blog">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Professional Experience
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A timeline of roles spanning entrepreneurship, government partnerships, and digital transformation
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {professionalExperience.map((exp, index) => {
                const Icon = exp.icon;
                return (
                  <div 
                    key={index}
                    className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/30"
                  >
                    <div className="flex flex-col md:flex-row md:items-start gap-4">
                      {/* Icon */}
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                        exp.type === 'employer' 
                          ? 'bg-gradient-to-br from-primary to-primary/70' 
                          : 'bg-gradient-to-br from-secondary to-secondary/70'
                      }`}>
                        <Icon className="w-6 h-6 text-primary-foreground" />
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                          <div>
                            <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                            <p className="text-primary font-medium">{exp.company}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                              exp.type === 'employer'
                                ? 'bg-primary/10 text-primary'
                                : 'bg-secondary/10 text-secondary-foreground'
                            }`}>
                              {exp.type === 'employer' ? 'Founder' : 'Employee'}
                            </span>
                            <span className="text-sm text-muted-foreground">{exp.period}</span>
                          </div>
                        </div>

                        <ul className="space-y-2">
                          {exp.highlights.map((highlight, hIndex) => (
                            <li key={hIndex} className="flex items-start gap-2 text-muted-foreground">
                              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Recognition callout */}
            <div className="max-w-4xl mx-auto mt-12">
              <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-accent/10 border border-primary/20 rounded-2xl p-8 text-center">
                <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">Recognition & Honors</h3>
                <p className="text-muted-foreground max-w-xl mx-auto">
                  Felicitated by <span className="text-foreground font-medium">Shri Devendra Fadnavis</span> for Dial 100 implementation • 
                  <span className="text-foreground font-medium"> Honorary Doctorate</span> from Frankford International University for Digital Transformation in Urban Governance (2026)
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Journey;

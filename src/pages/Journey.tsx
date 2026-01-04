import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Lightbulb, TrendingUp, Compass, BookOpen, Users, Briefcase, Building2, Rocket, Award } from 'lucide-react';

const journeySteps = [
  {
    icon: Lightbulb,
    title: "Inspiration",
    content: [
      "Om found comfort in the world of words from a young age. The beauty of language and the power of expression sparked his passion for writing and poetry, showing him the limitless possibilities words can create.",
      "While his love for words grew, his academic journey took a different turn. During his SSC to HSC years, carelessness affected his performance, leading to average results. However, it was during this time that Engineering (IT) inspired him and shaped his future path."
    ],
    align: "right"
  },
  {
    icon: TrendingUp,
    title: "Development",
    content: [
      "As Om continued exploring literature, he realized his writing could impact people beyond the pages. He experimented with different genres, improved his skills, and attended workshops to expand his creative reach. This ongoing growth helped him evolve as both an author and a poet.",
      "During his engineering studies, while peers pursued jobs in big IT firms, Om questioned whether that was his true path. After much reflection, he made a bold decision to decline a prestigious job offer, even after being the second selected among 700 candidates. Instead, he chose to pursue an MBA in Marketing to further explore his passions."
    ],
    align: "left"
  },
  {
    icon: Compass,
    title: "Exposition",
    content: [
      "Through his writing, Om embarked on a journey of self-exploration, expressing his emotions and experiences. His work connected with readers on a deep level, inspiring them to embrace their own stories.",
      "Despite landing a high-paying job in a multinational telecommunications company, Om soon realized it wasn't aligned with his true purpose. After six months of self-reflection, he chose to resign and join a smaller IT organization, prioritizing a role that fueled his passion."
    ],
    align: "right"
  },
  {
    icon: BookOpen,
    title: "Storytelling",
    content: [
      "With every piece of prose or poetry, Om discovered the art of storytelling. Through compelling narratives, he captured the essence of human emotions, shining a light on shared experiences and universal truths.",
      "After two years in an IT organization, working across various departments, Om sought more. He founded \"Precise IT Solutions Pvt Ltd,\" focusing on eCommerce portals, mobile app development, and software solutions. Through hard work, the company grew, and he continues to work in the government tendering sector."
    ],
    align: "left"
  },
  {
    icon: Users,
    title: "Leadership and Growth",
    content: [
      "Om's talent and potential were soon noticed, leading him to become an off-paper partner in a company. Despite initially stepping away from IT to pursue a managerial degree, he remained in the IT field for over 12 years.",
      "Now, as the Head of Operations (Technical) at a multinational company, he leads multiple e-governance projects and manages a team of over 45 individuals. His leadership has played a key role in achieving notable successes."
    ],
    align: "right"
  }
];

// Professional Experience Data - Customize with your actual experience
const professionalExperience = [
  {
    role: "Head of Operations (Technical)",
    company: "Current Company Name",
    period: "2020 - Present",
    type: "employee",
    icon: Award,
    highlights: [
      "Leading multiple e-governance projects across various departments",
      "Managing a team of 45+ professionals",
      "Overseeing technical strategy and digital transformation initiatives"
    ]
  },
  {
    role: "Founder & Director",
    company: "Precise IT Solutions Pvt Ltd",
    period: "2015 - Present",
    type: "employer",
    icon: Rocket,
    highlights: [
      "Founded and grew an IT solutions company",
      "Specialized in eCommerce portals and mobile app development",
      "Expanded into government tendering sector"
    ]
  },
  {
    role: "IT Professional",
    company: "Previous IT Organization",
    period: "2013 - 2015",
    type: "employee",
    icon: Building2,
    highlights: [
      "Worked across various departments gaining diverse experience",
      "Developed expertise in software solutions and project management"
    ]
  },
  {
    role: "Telecom Professional",
    company: "Multinational Telecommunications Company",
    period: "2012 - 2013",
    type: "employee",
    icon: Briefcase,
    highlights: [
      "Started career in a high-profile telecommunications role",
      "Gained valuable corporate experience before transitioning"
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
              <span>The Path I've Traveled</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Journey So Far
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From Words to World-Changing Leadership — a story of passion, pivots, and purpose
            </p>
          </div>
        </section>

        {/* Creative Timeline Section */}
        <section className="container-blog py-16 relative">
          {/* Decorative winding path SVG */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-full max-w-4xl hidden lg:block pointer-events-none">
            <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 400 1000" fill="none">
              <path 
                d="M200 0 Q350 100, 200 200 Q50 300, 200 400 Q350 500, 200 600 Q50 700, 200 800 Q350 900, 200 1000" 
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
                      {/* Step number */}
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-background border-2 border-primary rounded-full flex items-center justify-center text-sm font-bold text-primary">
                        {index + 1}
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
                          <div className="absolute -top-1 -right-1 w-6 h-6 bg-background border-2 border-primary rounded-full flex items-center justify-center text-xs font-bold text-primary">
                            {index + 1}
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold text-foreground">{step.title}</h3>
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
              <span className="text-sm italic">The journey continues...</span>
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
                A timeline of roles that shaped my career as both an employee and entrepreneur
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

            {/* Note about customization */}
            <p className="text-center text-sm text-muted-foreground mt-8 italic">
              Update the professionalExperience data in Journey.tsx with your actual roles and achievements
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Journey;

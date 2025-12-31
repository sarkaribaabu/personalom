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
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
          <div className="container-blog text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Journey So Far
            </h1>
            <p className="text-xl text-primary font-medium">
              From Words to World-Changing Leadership
            </p>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="container-blog py-16">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border hidden md:block" />

            {journeySteps.map((step, index) => {
              const Icon = step.icon;
              const isRight = step.align === "right";
              
              return (
                <div key={index} className="relative mb-16 last:mb-0">
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-primary rounded-full flex items-center justify-center z-10 hidden md:flex">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>

                  {/* Content Card */}
                  <div className={`md:w-5/12 ${isRight ? 'md:ml-auto md:pl-8' : 'md:mr-auto md:pr-8'}`}>
                    <div className="bg-card border border-border rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
                      {/* Mobile Icon */}
                      <div className="flex items-center gap-3 mb-4 md:hidden">
                        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                          <Icon className="w-5 h-5 text-primary-foreground" />
                        </div>
                        <h3 className="text-xl font-bold text-primary">{step.title}</h3>
                      </div>

                      {/* Desktop Title */}
                      <h3 className="text-2xl font-bold text-primary mb-4 hidden md:block">
                        {step.title}
                      </h3>

                      <div className="space-y-4">
                        {step.content.map((paragraph, pIndex) => (
                          <p key={pIndex} className="text-muted-foreground leading-relaxed">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Connecting Arrow (Desktop) */}
                  {index < journeySteps.length - 1 && (
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-full">
                      <svg 
                        className="w-8 h-16 text-primary/30" 
                        viewBox="0 0 32 64" 
                        fill="none"
                      >
                        <path 
                          d={isRight ? "M16 0 C16 32, 28 32, 16 64" : "M16 0 C16 32, 4 32, 16 64"} 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeDasharray="4 4"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              );
            })}
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

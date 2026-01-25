import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Mail, Linkedin, Twitter, Briefcase, Building2, ArrowRight } from "lucide-react";
import aboutImage from "@/assets/about.png";

// Experience highlights for About page
const experienceHighlights = [
  {
    icon: Building2,
    title: "Partner & Core Team Member",
    company: "Techlead Group",
    description: "Leading e-governance projects for MHADA, PCMC, NMMC and managing complex ERP implementations",
  },
  {
    icon: Briefcase,
    title: "Founder & Director",
    company: "Precise IT Solutions Pvt Ltd & Tantrayu Software Pvt Ltd",
    description: "Running own IT firms alongside, specializing in eGovernance and digital transformation",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="About Dr. Om Mahajan | Digital Transformation, e-Governance & Storytelling"
        description="Learn about Dr. Om Mahajan's journey across e-Governance, urban digital transformation, and creative writing, where technology meets human narrative."
        keywords={[
          "Dr. Om Mahajan",
          "Digital Governance Expert",
          "Digital Transformation Specialist",
          "IT Professional",
          "e-Governance Specialist",
          "Techlead Group",
          "Digital Transformation Leader India",
          "Government ERP Consultant",
          "Urban Digital Transformation",
        ]}
        url="/about"
        type="profile"
      />
      <Header />

      {/* Main Bio Section - Side by Side Layout */}
      <main id="main-content" className="container-blog py-16">
        <div className="max-w-6xl mx-auto">
          {/* Author Introduction - Creative Side by Side */}
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start mb-20">
            {/* Bio Content Column */}
            <div className="lg:col-span-3 space-y-6 order-2 lg:order-1">
              <div className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-sm text-primary font-medium mb-2">
                Digital Transformation Specialist & Creative Author
              </div>

              <h2 className="text-3xl md:text-4xl font-serif font-light text-foreground leading-tight">
                Architecting Digital Governance. <br className="hidden md:block" />
                <span className="text-primary">Crafting Human Narratives.</span>
              </h2>

              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p className="text-lg text-foreground">
                  Dr. Om Mahajan is a Digital Transformation Specialist and Creative Author. With over 15 years of
                  experience, he bridges the gap between precision-driven e-Governance systems and the art of
                  storytelling, helping organizations build technology that serves the human experience.
                </p>
              </div>

              {/* The Technologist */}
              <div className="pt-4">
                <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                  <span className="w-8 h-0.5 bg-primary"></span>
                  The Technologist
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Om has spent over a decade and a half mastering the architecture of complex systems. While his roots
                  lie in Cloud Computing and DevOps, his passion has evolved into a specialized focus on e-Governance
                  and Urban Digital Transformation. Currently pursuing a Doctorate in Digital Transformation in Urban Governance, Om combines academic rigor with practical execution. He is known for leading high-impact
                  initiatives, including award-nominated projects for municipal corporations (such as NMMC) that
                  modernize how cities interact with their citizens.
                </p>
              </div>

              {/* The Storyteller */}
              <div className="pt-4">
                <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                  <span className="w-8 h-0.5 bg-primary"></span>
                  The Storyteller
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Beyond the code, Om possesses a distinct narrative voice. He is a writer of fiction, poetry, and
                  reflective articles, believing that the best solutions—whether digital or literary—require deep
                  empathy. Unlike typical technical writers, Om explores the nuances of human nature through his
                  stories. This "poetic mindset" allows him to approach IT leadership with a unique perspective: viewing
                  technology not just as infrastructure, but as a tool to improve human lives.
                </p>
              </div>

              {/* The Explorer */}
              <div className="pt-4">
                <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                  <span className="w-8 h-0.5 bg-primary"></span>
                  The Explorer
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Om believes that creativity is fueled by curiosity. When not architecting government frameworks or
                  penning his next story, he can be found on the open road on his motorcycle or capturing the world
                  through miniature photography. A creator at heart, he is constantly seeking the intersection where
                  logic meets imagination.
                </p>
              </div>
            </div>

            {/* Photo Column - Sticky on larger screens */}
            <div className="lg:col-span-2 lg:sticky lg:top-24 order-1 lg:order-2">
              <div className="relative">
                {/* Main Photo */}
                <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-muted shadow-2xl">
                  <img
                    src={aboutImage}
                    alt="Dr. Om Mahajan - Digital Transformation Specialist & Author"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/10 rounded-2xl -z-10" />
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent/20 rounded-full -z-10" />
              </div>

              {/* Quick Stats under photo */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-muted/50 rounded-xl">
                  <span className="text-3xl font-bold text-primary">15+</span>
                  <p className="text-xs text-muted-foreground mt-1">Years Experience</p>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-xl">
                  <span className="text-3xl font-bold text-primary">2+</span>
                  <p className="text-xs text-muted-foreground mt-1">Books Authored</p>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Education & Research */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-serif font-light text-foreground mb-8 tracking-wide">
                EDUCATION & RESEARCH
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  <strong className="text-foreground">2026:</strong> Honorary Doctorate (Hon. Ph.D.) <br />
                  <b>
                    {" "}
                    Digital Transformation in Urban Governance |<em> (Frankford International University)</em>{" "}
                  </b>
                </p>
                <p className="leading-relaxed">
                  <strong className="text-foreground">2012:</strong> Master of Business Administration (MBA) <br />
                  <b>
                    {" "}
                    Marketing |<em> (Indira College Of Institute)</em>{" "}
                  </b>
                </p>
                <p className="leading-relaxed">
                  <strong className="text-foreground">2010:</strong> Bachelor of Engineering (B.E.) <br />
                  <b>
                    {" "}
                    Information Technology |<em> (Sinhgad College of Engineering)</em>{" "}
                  </b>
                </p>
              </div>
            </div>

            {/* Professional Expertise */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-serif font-light text-foreground mb-8 tracking-wide">
                PROFESSIONAL EXPERTISE
              </h2>
              <div className="space-y-6 text-muted-foreground">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Strategic Leadership in e-Governance</h3>
                  <p className="leading-relaxed">
                    Founder of Tantrayu Software Pvt Ltd (2025), focused on driving digital transformation for municipal
                    councils and Zilla Parishads. Parallely a Partner at Techlead Group, where he manages large-scale
                    ERP implementations for major bodies like MHADA, PCMC, and NMMC.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Award-Winning Execution</h3>
                  <p className="leading-relaxed">
                    Renowned for delivering turnkey government solutions with precision. Om was felicitated by Shri
                    Devendra Fadnavis for the successful implementation of the Dial 100 system, a critical public safety
                    initiative backed by advanced analytics.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Enterprise Architecture</h3>
                  <p className="leading-relaxed">
                    Over 15 years of experience spanning the private and public sectors. From achieving 300% growth with
                    Precise IT Solutions to navigating complex government frameworks, Om specializes in bridging the gap
                    between legacy systems and modern, cloud-native infrastructure.
                  </p>
                </div>
              </div>
            </div>

            {/* Literature & Creative */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-serif font-light text-foreground mb-8 tracking-wide">
                LITERATURE & CREATIVE
              </h2>
              <div className="space-y-6 text-muted-foreground">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Published Author</h3>
                  <p className="leading-relaxed mb-3">
                    Om explores the complexities of human relationships and suspense through his fiction.
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0"></span>
                      <span>
                        <strong className="text-foreground">26 October Ki Raat (2026)</strong> – An Erotic Thriller
                        Murder Mystery.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0"></span>
                      <span>
                        <strong className="text-foreground">Lustful Love (2020)</strong> – A Global Debut in Erotica
                        Romance.
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">The Narrative Mindset</h3>
                  <p className="leading-relaxed">
                    A believer that "Code builds the structure, but stories build the soul," Om applies his literary
                    creativity to his technical leadership, ensuring that digital systems remain human-centric.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">The Rider's Spirit</h3>
                  <p className="leading-relaxed">
                    A passionate motorcyclist, Om rides a BMW G310RR—a symbol of resilience and a "full circle" moment,
                    reclaiming a passion he once sacrificed to fund his entrepreneurial dreams.
                  </p>
                </div>
              </div>
            </div>

            {/* Experience Highlights Section */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-serif font-light text-foreground mb-8 tracking-wide">
                EXPERIENCE HIGHLIGHTS
              </h2>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {experienceHighlights.map((exp, index) => {
                  const Icon = exp.icon;
                  return (
                    <div
                      key={index}
                      className="bg-muted/50 border border-border rounded-xl p-6 hover:border-primary/30 transition-colors"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">{exp.title}</h3>
                          <p className="text-sm text-primary mb-2">{exp.company}</p>
                          <p className="text-sm text-muted-foreground">{exp.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <Link to="/journey" className="inline-flex items-center gap-2 text-primary hover:underline font-medium">
                View full professional journey
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* CTA Section */}
            <div className="text-center border-t border-border pt-12">
              <h3 className="text-2xl font-serif font-light text-foreground mb-6">Get in Touch</h3>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Button asChild size="lg">
                  <Link to="/contact">
                    <Mail className="h-4 w-4 mr-2" />
                    Contact
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/books">View Books</Link>
                </Button>
              </div>
              <div className="flex justify-center gap-6">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
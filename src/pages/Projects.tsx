import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import businessPost from '@/assets/business-post.jpg';
import techPost from '@/assets/tech-post.jpg';
import fashionPost from '@/assets/fashion-post.jpg';
import lifestylePost from '@/assets/lifestyle-post.jpg';
import workLifestyle from '@/assets/work-lifestyle.jpg';
import fashionLifestyle from '@/assets/fashion-lifestyle.jpg';

const categories = ['All', 'Web Development', 'Mobile Apps', 'AI/ML', 'Design'];

const projects = [
  {
    title: "Featured Story — Main Content",
    category: "Web Development",
    date: "DATE",
    excerpt: "Featured excerpt — Description of the main story content.",
    image: businessPost,
    height: "tall"
  },
  {
    title: "Story Title — Content Preview",
    category: "AI/ML",
    date: "DATE",
    excerpt: "Story excerpt — Brief preview of the article content.",
    image: techPost,
    height: "medium"
  },
  {
    title: "Post Title — Summary",
    category: "Mobile Apps",
    date: "DATE",
    excerpt: "Post summary — Short description of the content.",
    image: fashionPost,
    height: "short"
  },
  {
    title: "Article Title — Overview",
    category: "Design",
    date: "DATE",
    excerpt: "Article overview — Brief summary of the topic.",
    image: lifestylePost,
    height: "medium"
  },
  {
    title: "Content Title — Description",
    category: "Web Development",
    date: "DATE",
    excerpt: "Content description — Summary of the article topic.",
    image: workLifestyle,
    height: "medium"
  },
  {
    title: "Sample Title — Preview",
    category: "AI/ML",
    date: "DATE",
    excerpt: "Sample preview — Brief content preview text.",
    image: fashionLifestyle,
    height: "short"
  },
  {
    title: "Example Title — Summary",
    category: "Design",
    date: "DATE",
    excerpt: "Example summary — Description of the sample content.",
    image: businessPost,
    height: "medium"
  },
  {
    title: "Another Web Project",
    category: "Web Development",
    date: "DATE",
    excerpt: "Description of another web development project.",
    image: techPost,
    height: "tall"
  },
  {
    title: "Mobile App Design",
    category: "Mobile Apps",
    date: "DATE",
    excerpt: "A mobile app project showcase.",
    image: lifestylePost,
    height: "medium"
  }
];

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const getHeightClass = (height: string) => {
    switch (height) {
      case 'tall':
        return 'row-span-3';
      case 'medium':
        return 'row-span-2';
      case 'short':
        return 'row-span-1';
      default:
        return 'row-span-2';
    }
  };

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <>
      <Header />
      
      <main id="main-content" className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="container-blog py-16 border-b border-border">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Projects</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A collection of my work spanning web development, mobile applications, AI/ML solutions, and design projects.
          </p>
        </section>

        {/* Projects Grid */}
        <section className="container-blog py-16">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <h2 className="section-title mb-0">All Projects</h2>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="text-xs"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 auto-rows-[180px]" style={{ gridAutoFlow: 'row dense' }}>
            {filteredProjects.map((project, index) => {
              const projectSlug = project.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
              return (
                <Link
                  key={index}
                  to={`/projects/${projectSlug}`}
                  className={`group cursor-pointer ${getHeightClass(project.height)} transition-all duration-300 hover:scale-[1.02] hover:shadow-lg block`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="relative w-full h-full rounded-lg overflow-hidden bg-card border border-border">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                      width="294"
                      height={project.height === 'tall' ? '540' : project.height === 'medium' ? '360' : '180'}
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 294px"
                      style={{ minHeight: '100%', maxHeight: '100%' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-medium bg-primary/80 px-2 py-1 rounded-full">
                          {project.category}
                        </span>
                        <span className="text-xs opacity-80">{project.date}</span>
                      </div>
                      <h3 className="font-bold text-sm md:text-base mb-2 line-clamp-2">
                        {project.title}
                      </h3>
                      {hoveredIndex === index && project.excerpt && (
                        <p className="text-xs opacity-90 line-clamp-2 transition-opacity duration-300">
                          {project.excerpt}
                        </p>
                      )}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          
          {filteredProjects.length === 0 && (
            <p className="text-center text-muted-foreground py-8">No projects found in this category.</p>
          )}
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Projects;

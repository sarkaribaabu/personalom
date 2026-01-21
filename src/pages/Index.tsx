import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import AboutAuthor from '@/components/AboutAuthor';
import EditorsPick from '@/components/EditorsPick';
import MasonryBlock from '@/components/MasonryBlock';
import SEO from '@/components/SEO';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Om Mahajan | IT Professional & Author"
        description="Digital Transformation Specialist with 15+ years of experience in e-governance, enterprise solutions, and published author of fiction novels."
        keywords={["Om Mahajan", "IT Professional", "Digital Transformation", "E-Governance", "Author", "Mumbai", "Techlead Group", "Enterprise Solutions"]}
        url="/"
      />
      <Header />
      <main id="main-content">
        <HeroSection />
        <AboutAuthor />
        <section aria-labelledby="editors-pick-heading">
          <EditorsPick />
        </section>
        <section aria-labelledby="masonry-heading">
          <MasonryBlock />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;

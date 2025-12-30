import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import AboutAuthor from '@/components/AboutAuthor';
import EditorsPick from '@/components/EditorsPick';
import MasonryBlock from '@/components/MasonryBlock';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
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

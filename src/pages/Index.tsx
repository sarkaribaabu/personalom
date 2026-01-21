import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import AboutAuthor from "@/components/AboutAuthor";
import EditorsPick from "@/components/EditorsPick";
import MasonryBlock from "@/components/MasonryBlock";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Om Mahajan | Digital Governance Architect, e-Governance Leader & Author"
        description="Om Mahajan is a Digital Transformation Specialist, e-Governance architect, and published author with 15+ years of experience in urban governance, ERP systems, and human-centric technology."
        keywords={[
          "Om Mahajan",
          "Techlead Group",
          "Digital Governance Expert",
          "e-Governance Specialist",
          "Urban Digital Transformation",
          "Government ERP Consultant",
          "Digital Transformation Leader India",
        ]}
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

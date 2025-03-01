
import Hero from "@/components/Hero";
import AboutPreview from "@/components/AboutPreview";
import ProjectsPreview from "@/components/ProjectsPreview";
import LogoSection from "@/components/LogoSection";
import Layout from "@/components/Layout";

const Index = () => {
  return (
    <Layout>
      <div className="min-h-screen">
        <Hero />
        <AboutPreview />
        <ProjectsPreview />
        <LogoSection />
      </div>
    </Layout>
  );
};

export default Index;

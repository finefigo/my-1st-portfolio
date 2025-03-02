
import Hero from "@/components/Hero";
import AboutPreview from "@/components/AboutPreview";
import ProjectsPreview from "@/components/ProjectsPreview";
import LogoSection from "@/components/LogoSection";
import Layout from "@/components/Layout";

const Index = () => {
  return (
    <Layout>
      <div className="w-full bg-gray-50 dark:bg-gray-900 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Welcome to my portfolio! I'm an Android developer passionate about creating intuitive mobile experiences. 
              With expertise in XML, Java, and Kotlin, I build applications that are both functional and user-friendly. 
              I'm currently exploring Kotlin Multiplatform and machine learning to expand my skill set.
            </p>
          </div>
        </div>
      </div>
      
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

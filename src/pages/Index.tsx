
import Hero from "@/components/Hero";
import AboutPreview from "@/components/AboutPreview";
import ProjectsPreview from "@/components/ProjectsPreview";
import LogoSection from "@/components/LogoSection";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";

const Index = () => {
  const sectionVariants = {
    initial: {
      opacity: 0,
      y: 20
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <Layout>
      <div className="bg-white dark:bg-gray-950">
        <Hero />
        
        <motion.div 
          id="about-section"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={sectionVariants}
          className="pt-20 pb-16"
        >
          <AboutPreview />
        </motion.div>
        
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={sectionVariants}
          className="py-16 bg-gray-50 dark:bg-gray-900"
        >
          <ProjectsPreview />
        </motion.div>
        
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={sectionVariants}
          className="py-16"
        >
          <LogoSection />
        </motion.div>
      </div>
    </Layout>
  );
};

export default Index;

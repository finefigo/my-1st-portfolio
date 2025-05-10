
import Hero from "@/components/Hero";
import AboutPreview from "@/components/AboutPreview";
import ProjectsPreview from "@/components/ProjectsPreview";
import LogoSection from "@/components/LogoSection";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";

const Index = () => {
  const pageVariants = {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.3
      }
    }
  };

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
      <motion.div 
        className="min-h-screen"
        initial="initial"
        animate="animate"
        variants={pageVariants}
      >
        <motion.div variants={sectionVariants}>
          <Hero />
        </motion.div>
        
        <motion.div 
          id="about-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          variants={sectionVariants}
        >
          <AboutPreview />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          variants={sectionVariants}
        >
          <ProjectsPreview />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          variants={sectionVariants}
        >
          <LogoSection />
        </motion.div>
        
        {/* Floating animated elements that follow scroll */}
        <motion.div 
          className="fixed top-1/4 left-10 w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-20 blur-xl -z-10 pointer-events-none"
          animate={{
            y: [-20, 20, -20],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div 
          className="fixed top-2/3 right-10 w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 opacity-20 blur-xl -z-10 pointer-events-none"
          animate={{
            y: [20, -20, 20],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </motion.div>
    </Layout>
  );
};

export default Index;

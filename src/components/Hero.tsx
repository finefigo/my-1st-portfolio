
import { ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface HeroProps {
  className?: string;
}

const Hero = ({
  className
}: HeroProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about-section');
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className={cn("relative min-h-screen flex items-center justify-center overflow-hidden", className)}>
      {/* Clean background with subtle gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950"></div>
      
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Professional profile image */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-8 inline-block"
          >
            <div className="relative w-28 h-28 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img 
                src="/lovable-uploads/e9850768-e314-49a4-b6ee-3459f0915cb5.png" 
                alt="Faisal Imtiaz" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          
          {/* Name and title */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Faisal Imtiaz
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mb-6"
          >
            <span className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
              AI/ML Enthusiast & AR Developer
            </span>
          </motion.div>
          
          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto"
          >
            2nd-year engineering student at JIS College of Engineering, passionate about 
            building impactful tech solutions and creating user-focused experiences.
          </motion.p>
          
          {/* CTA buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link 
              to="/projects" 
              className="px-6 py-3 rounded-md bg-blue-600 text-white font-medium flex items-center gap-2 hover:bg-blue-700 transition-colors"
            >
              View Projects
              <ArrowRight size={16} />
            </Link>
            
            <Link 
              to="/about" 
              className="px-6 py-3 rounded-md bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200 font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              About Me
            </Link>
          </motion.div>
          
          {/* Social proof stats */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex flex-wrap gap-8 justify-center mt-16"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-500">10+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-500">4</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Patents</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-500">2</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Tech Fest Wins</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button 
        onClick={scrollToAbout} 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 p-3 rounded-full bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-800 transition-colors shadow-md" 
        aria-label="Scroll to about section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <ChevronDown size={20} className="text-gray-800 dark:text-gray-200" />
      </motion.button>
    </section>
  );
};

export default Hero;


import { ArrowRight, ChevronDown, Star } from "lucide-react";
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section className={cn("relative min-h-[90vh] flex items-center justify-center text-center px-4 overflow-hidden", className)}>
      {/* Colorful gradient background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 dark:from-slate-950 dark:via-slate-900 dark:to-purple-900"></div>
      
      {/* Animated background shapes */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 0.2 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute top-[10%] left-[10%] w-64 h-64 rounded-full bg-purple-300/30 blur-3xl"
        />
        <motion.div 
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 0.2 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="absolute top-[30%] right-[10%] w-48 h-48 rounded-full bg-blue-300/30 blur-3xl"
        />
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 0.2 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute bottom-[20%] left-[20%] w-72 h-72 rounded-full bg-pink-300/30 blur-3xl"
        />
      </div>

      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Text content */}
        <motion.div 
          className="space-y-6 max-w-xl mx-auto text-left order-2 md:order-1"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Badge */}
          <motion.div 
            className="inline-block px-3 py-1 rounded-full bg-indigo-100 text-indigo-600 text-sm font-medium mb-6 dark:bg-indigo-900/50 dark:text-indigo-300"
            variants={itemVariants}
          >
            <div className="flex items-center gap-2">
              <Star size={14} className="animate-pulse-slow" />
              <span>2nd year Engineering Student</span>
            </div>
          </motion.div>
          
          {/* Main heading */}
          <motion.h1 
            className="text-4xl md:text-6xl font-display font-bold leading-tight text-left"
            variants={itemVariants}
          >
            Creating <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-text-gradient">intuitive</span> mobile experiences
          </motion.h1>
          
          {/* Description */}
          <motion.p 
            className="text-xl text-muted-foreground max-w-2xl text-left"
            variants={itemVariants}
          >
            Beginner Android developer specializing in XML, Java, and Kotlin.
            <br className="hidden sm:inline" /> Exploring Kotlin Multiplatform and machine learning.
          </motion.p>
          
          {/* CTA buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row items-start gap-4 pt-6"
            variants={itemVariants}
          >
            <Link 
              to="/projects" 
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-medium flex items-center gap-2 transition-all hover:opacity-90 transform hover:translate-y-[-2px] shadow-md hover:shadow-lg"
            >
              View Projects
              <ArrowRight size={16} />
            </Link>
            
            <Link 
              to="/about" 
              className="px-8 py-3 rounded-lg border border-input bg-background/50 backdrop-blur-sm hover:bg-secondary/50 font-medium transition-all transform hover:translate-y-[-2px]"
            >
              About Me
            </Link>
          </motion.div>
          
          {/* Stats section */}
          <motion.div 
            className="flex flex-wrap gap-8 mt-12"
            variants={itemVariants}
          >
            <div className="text-center p-4 rounded-lg bg-white/50 dark:bg-white/10 backdrop-blur-sm shadow-sm">
              <div className="text-3xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">10+</div>
              <div className="text-sm text-muted-foreground">Projects</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-white/50 dark:bg-white/10 backdrop-blur-sm shadow-sm">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">2</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-white/50 dark:bg-white/10 backdrop-blur-sm shadow-sm">
              <div className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent">3</div>
              <div className="text-sm text-muted-foreground">Technologies</div>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Hero Image */}
        <motion.div 
          className="order-1 md:order-2 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 rounded-full blur-2xl transform scale-110"></div>
            <img 
              src="/lovable-uploads/e9850768-e314-49a4-b6ee-3459f0915cb5.png" 
              alt="Developer Portrait" 
              className="relative z-10 w-80 h-80 object-cover rounded-2xl shadow-xl border-4 border-white/20"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button 
        onClick={scrollToAbout} 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 p-3 rounded-full bg-white/30 dark:bg-white/10 shadow-md backdrop-blur-sm hover:bg-white/50 transition-colors" 
        aria-label="Scroll to about section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        whileHover={{ y: -5 }}
        whileTap={{ scale: 0.95 }}
      >
        <ChevronDown size={24} className="text-foreground/80" />
      </motion.button>
    </section>
  );
};

export default Hero;

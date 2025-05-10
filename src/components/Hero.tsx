
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

  const floatingShapesVariants = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        repeatType: "reverse" as const
      }
    }
  };

  return (
    <section className={cn("relative min-h-[90vh] flex items-center justify-center text-center px-4 overflow-hidden", className)}>
      {/* Enhanced colorful gradient background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-500 via-blue-400 to-pink-500 dark:from-purple-900 dark:via-blue-800 dark:to-pink-900"></div>
      
      {/* Animated floating shapes */}
      <div className="absolute inset-0 -z-5 overflow-hidden">
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 0.7 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute top-[10%] left-[10%] w-64 h-64 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 blur-3xl"
        />
        <motion.div 
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 0.7 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="absolute top-[30%] right-[10%] w-48 h-48 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 blur-3xl"
        />
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 0.7 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute bottom-[20%] left-[20%] w-72 h-72 rounded-full bg-gradient-to-r from-pink-500 to-rose-400 blur-3xl"
        />
        
        {/* Additional floating colored shapes */}
        <motion.div 
          variants={floatingShapesVariants}
          animate="animate"
          className="absolute top-[15%] right-[20%] w-32 h-32 rounded-full bg-gradient-to-r from-yellow-400 to-amber-300 opacity-40 blur-2xl"
        />
        <motion.div 
          variants={floatingShapesVariants}
          animate="animate"
          transition={{ delay: 1 }}
          className="absolute top-[60%] right-[30%] w-24 h-24 rounded-full bg-gradient-to-r from-emerald-400 to-teal-300 opacity-40 blur-2xl"
        />
        <motion.div 
          variants={floatingShapesVariants}
          animate="animate"
          transition={{ delay: 1.5 }}
          className="absolute top-[40%] left-[15%] w-36 h-36 rounded-full bg-gradient-to-r from-red-400 to-orange-300 opacity-40 blur-2xl"
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
            className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-medium mb-6"
            variants={itemVariants}
          >
            <div className="flex items-center gap-2">
              <Star size={14} className="text-yellow-300 animate-pulse" />
              <span>2nd year Engineering Student at JIS College</span>
            </div>
          </motion.div>
          
          {/* Main heading */}
          <motion.h1 
            className="text-4xl md:text-6xl font-display font-bold leading-tight text-left"
            variants={itemVariants}
          >
            Hi, I'm <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-text-gradient font-extrabold">Faisal Imtiaz</span>
          </motion.h1>
          
          {/* Description */}
          <motion.p 
            className="text-xl text-white/90 dark:text-white/80 max-w-2xl text-left"
            variants={itemVariants}
          >
            An AI/ML enthusiast and AR developer passionate about building
            <br className="hidden sm:inline" /> impactful tech solutions and creating user-focused experiences.
          </motion.p>
          
          {/* CTA buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row items-start gap-4 pt-6"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/projects" 
                className="px-8 py-3 rounded-lg bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-medium flex items-center gap-2 transition-all hover:opacity-90 transform hover:translate-y-[-2px] shadow-lg shadow-indigo-500/30"
              >
                View Projects
                <ArrowRight size={16} />
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/about" 
                className="px-8 py-3 rounded-lg border border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20 font-medium transition-all text-white transform hover:translate-y-[-2px]"
              >
                About Me
              </Link>
            </motion.div>
          </motion.div>
          
          {/* Stats section with more colorful design */}
          <motion.div 
            className="flex flex-wrap gap-8 mt-12"
            variants={itemVariants}
          >
            <motion.div 
              whileHover={{ y: -5, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-center p-4 rounded-lg bg-gradient-to-br from-indigo-500/30 to-indigo-800/30 backdrop-blur-md border border-white/20 shadow-xl"
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">10+</div>
              <div className="text-sm text-white/80">Projects</div>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -5, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-center p-4 rounded-lg bg-gradient-to-br from-purple-500/30 to-pink-800/30 backdrop-blur-md border border-white/20 shadow-xl"
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">4</div>
              <div className="text-sm text-white/80">Patents</div>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -5, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-center p-4 rounded-lg bg-gradient-to-br from-pink-500/30 to-red-800/30 backdrop-blur-md border border-white/20 shadow-xl"
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">2</div>
              <div className="text-sm text-white/80">Tech Fest Wins</div>
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Hero Image with enhanced animation */}
        <motion.div 
          className="order-1 md:order-2 flex justify-center"
          initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative">
            <motion.div 
              className="absolute inset-0 bg-gradient-to-tr from-indigo-500/70 to-pink-500/70 rounded-full blur-3xl transform scale-110"
              animate={{
                scale: [1.1, 1.2, 1.1],
                opacity: [0.6, 0.8, 0.6],
              }}
              transition={{ duration: 8, repeat: Infinity }}
            ></motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img 
                src="/lovable-uploads/e9850768-e314-49a4-b6ee-3459f0915cb5.png" 
                alt="Faisal Imtiaz" 
                className="relative z-10 w-80 h-80 object-cover rounded-2xl shadow-2xl border-4 border-white/20"
              />
            </motion.div>
            
            {/* Decorative elements around the image */}
            <motion.div 
              className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 z-20"
              animate={{ 
                y: [0, -10, 0],
                x: [0, 5, 0]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            ></motion.div>
            
            <motion.div 
              className="absolute -bottom-2 -left-4 w-6 h-6 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 z-20"
              animate={{ 
                y: [0, 10, 0],
                x: [0, -5, 0]
              }}
              transition={{ duration: 5, repeat: Infinity }}
            ></motion.div>
          </div>
        </motion.div>
      </div>

      {/* Enhanced scroll indicator */}
      <motion.button 
        onClick={scrollToAbout} 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 p-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 transition-colors shadow-lg" 
        aria-label="Scroll to about section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        whileHover={{ y: -5 }}
        whileTap={{ scale: 0.95 }}
      >
        <ChevronDown size={24} className="text-white animate-bounce" />
      </motion.button>
    </section>
  );
};

export default Hero;

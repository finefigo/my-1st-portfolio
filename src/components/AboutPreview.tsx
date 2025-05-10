
import React, { useEffect, useRef, useState } from 'react';
import { 
  Code, 
  Smartphone, 
  Brain, 
  Award, 
  ArrowRight 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const AboutPreview = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Staggered animation on scroll
  useEffect(() => {
    const items = containerRef.current?.querySelectorAll('.feature-item');
    if (!items) return;
    
    items.forEach((item, index) => {
      const el = item as HTMLElement;
      el.style.transitionDelay = `${index * 100}ms`;
    });
  }, []);

  // Mouse movement effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Apply transform to cards based on mouse position
  useEffect(() => {
    cardsRef.current.forEach((card) => {
      if (!card) return;

      const cardRect = card.getBoundingClientRect();
      const cardCenterX = cardRect.left + cardRect.width / 2;
      const cardCenterY = cardRect.top + cardRect.height / 2;
      
      // Calculate distance from mouse to card center (normalized)
      const distanceX = (mousePosition.x - cardCenterX) / (window.innerWidth / 2);
      const distanceY = (mousePosition.y - cardCenterY) / (window.innerHeight / 2);
      
      // Apply transform with limited rotation (max 5 degrees) and subtle movement
      card.style.transform = `perspective(1000px) rotateX(${distanceY * -3}deg) rotateY(${distanceX * 3}deg) translateX(${distanceX * 5}px) translateY(${distanceY * 5}px)`;
    });
  }, [mousePosition]);

  const cardVariants = {
    offscreen: { 
      y: 50, 
      opacity: 0 
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  return (
    <section id="about-section" className="py-20 px-4 bg-gradient-to-b from-purple-50 to-white dark:from-slate-900 dark:to-slate-950">
      <div className="container mx-auto max-w-6xl relative">
        {/* Animated background elements */}
        <motion.div 
          className="absolute top-10 right-0 w-72 h-72 rounded-full bg-gradient-to-r from-indigo-300/20 to-purple-300/20 blur-3xl -z-10"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-10 left-10 w-64 h-64 rounded-full bg-gradient-to-r from-pink-300/20 to-rose-300/20 blur-3xl -z-10"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 7, repeat: Infinity, delay: 1 }}
        />

        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-display font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            About <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Me</span>
          </motion.h2>
          <motion.p 
            className="text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            A passionate Android developer with a focus on creating intuitive and user-friendly applications
          </motion.p>
        </motion.div>

        <div 
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <motion.div 
            ref={(el) => cardsRef.current[0] = el}
            className="feature-item transition-transform duration-200"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div 
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-purple-500/10 to-indigo-500/10 backdrop-blur-sm p-6 rounded-2xl border border-purple-500/20 shadow-lg h-full"
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, -5, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <Smartphone className="h-10 w-10 mb-4 text-purple-600" />
              </motion.div>
              <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Android Development</h3>
              <p className="text-muted-foreground mb-4">
                Building native Android applications using Java, Kotlin, and XML layouts
              </p>
            </motion.div>
          </motion.div>
          
          <motion.div 
            ref={(el) => cardsRef.current[1] = el}
            className="feature-item transition-transform duration-200"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div 
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm p-6 rounded-2xl border border-blue-500/20 shadow-lg h-full"
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, -5, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <Code className="h-10 w-10 mb-4 text-blue-600" />
              </motion.div>
              <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Kotlin Multiplatform</h3>
              <p className="text-muted-foreground mb-4">
                Transitioning to KMP for cross-platform development efficiency
              </p>
            </motion.div>
          </motion.div>
          
          <motion.div 
            ref={(el) => cardsRef.current[2] = el}
            className="feature-item transition-transform duration-200"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div 
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-amber-500/10 to-yellow-500/10 backdrop-blur-sm p-6 rounded-2xl border border-amber-500/20 shadow-lg h-full"
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, -5, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <Award className="h-10 w-10 mb-4 text-amber-600" />
              </motion.div>
              <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">Patents</h3>
              <p className="text-muted-foreground mb-4">
                Holder of two patents, demonstrating innovation and problem-solving
              </p>
            </motion.div>
          </motion.div>
          
          <motion.div 
            ref={(el) => cardsRef.current[3] = el}
            className="feature-item transition-transform duration-200"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div 
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-pink-500/10 to-rose-500/10 backdrop-blur-sm p-6 rounded-2xl border border-pink-500/20 shadow-lg h-full"
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, -5, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <Brain className="h-10 w-10 mb-4 text-pink-600" />
              </motion.div>
              <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">AI & ML</h3>
              <p className="text-muted-foreground mb-4">
                Exploring machine learning integration with mobile applications
              </p>
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              to="/about"
              className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium hover:shadow-lg transition-all"
            >
              Learn more about me
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPreview;

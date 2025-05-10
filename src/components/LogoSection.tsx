
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const LogoSection = () => {
  const [loaded, setLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [profileImage, setProfileImage] = useState<string | null>(null);

  // Use the user's profile image
  const profileImagePath = "/lovable-uploads/e9850768-e314-49a4-b6ee-3459f0915cb5.png";

  useEffect(() => {
    // Load the image
    const img = new Image();
    img.src = profileImagePath;
    img.onload = () => {
      setProfileImage(profileImagePath);
      setTimeout(() => setLoaded(true), 300);
    };
  }, []);

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-purple-50 to-indigo-50 dark:from-slate-900 dark:to-indigo-950 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-20 left-20 w-96 h-96 rounded-full bg-gradient-to-r from-purple-300/10 to-indigo-300/10 blur-3xl -z-10"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{ duration: 20, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-gradient-to-r from-blue-300/10 to-cyan-300/10 blur-3xl -z-10"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{ duration: 15, repeat: Infinity, delay: 5 }}
      />

      <div className="container mx-auto max-w-6xl">
        <motion.div 
          className="text-center mb-12"
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
            Here's where you can learn more about who I am
          </motion.p>
        </motion.div>
        
        <div ref={containerRef} className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="w-full md:w-2/5 flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Decorative elements with animation */}
              <motion.div 
                className="absolute -top-4 -left-4 w-full h-full border-2 border-gradient-to-r from-indigo-500 to-purple-500 rounded-lg"
                initial={{ rotate: 6 }}
                animate={{ 
                  rotate: [6, 8, 6],
                  borderColor: ["rgba(129,140,248,0.8)", "rgba(168,85,247,0.8)", "rgba(129,140,248,0.8)"]
                }}
                transition={{ duration: 8, repeat: Infinity }}
              ></motion.div>
              
              <motion.div 
                className="absolute -bottom-4 -right-4 w-full h-full border-2 border-gradient-to-r from-purple-500 to-pink-500 rounded-lg"
                initial={{ rotate: -6 }}
                animate={{ 
                  rotate: [-6, -8, -6],
                  borderColor: ["rgba(168,85,247,0.6)", "rgba(236,72,153,0.6)", "rgba(168,85,247,0.6)"]
                }}
                transition={{ duration: 7, repeat: Infinity }}
              ></motion.div>
              
              {/* Image container with fade loading effect */}
              <motion.div 
                className="relative w-full h-full rounded-lg overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Static placeholder */}
                <div 
                  className={cn(
                    "absolute inset-0 bg-gradient-to-r from-indigo-200 to-purple-200 dark:from-indigo-900 dark:to-purple-900 transition-opacity duration-500",
                    loaded ? "opacity-0" : "opacity-100"
                  )}
                ></div>
                
                {/* Actual image */}
                {profileImage && (
                  <img
                    src={profileImage}
                    alt="Profile image"
                    className={cn(
                      "w-full h-full object-cover transition-all duration-700 shadow-2xl",
                      loaded ? "opacity-100 scale-100" : "opacity-0 scale-110"
                    )}
                  />
                )}
                
                {/* Animated overlay */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <motion.p 
                    className="text-white text-sm font-medium px-4 py-2 bg-black/30 backdrop-blur-sm rounded-full"
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    Android Developer
                  </motion.p>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-3/5"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div 
              className="glass-card p-8 rounded-2xl bg-gradient-to-br from-white/60 to-indigo-100/30 dark:from-slate-800/60 dark:to-indigo-950/30 border border-white/30 dark:border-white/10 backdrop-blur-md shadow-xl"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Android Developer & Innovator</h3>
              
              <motion.p 
                className="text-muted-foreground mb-6"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                I'm an Android developer with expertise in XML, Java, and Kotlin. My journey involves 
                transitioning to Kotlin Multiplatform for cross-platform development. With two patents 
                under my belt, I have a proven track record of innovation.
              </motion.p>
              
              <motion.p 
                className="text-muted-foreground mb-6"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                My fascination with AI tools and machine learning drives me to explore the integration 
                of these technologies with mobile applications, creating more intelligent and adaptive 
                user experiences.
              </motion.p>
              
              <motion.p 
                className="text-muted-foreground"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                I'm constantly learning and expanding my skill set to stay at the forefront of mobile 
                development trends and best practices.
              </motion.p>
              
              {/* Add colorful skill dots */}
              <motion.div 
                className="flex flex-wrap gap-2 mt-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <motion.span 
                  className="px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-indigo-600 to-blue-600 text-white"
                  whileHover={{ scale: 1.1 }}
                >
                  Kotlin
                </motion.span>
                <motion.span 
                  className="px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
                  whileHover={{ scale: 1.1 }}
                >
                  Java
                </motion.span>
                <motion.span 
                  className="px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-blue-600 to-cyan-600 text-white"
                  whileHover={{ scale: 1.1 }}
                >
                  XML
                </motion.span>
                <motion.span 
                  className="px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-pink-600 to-rose-600 text-white"
                  whileHover={{ scale: 1.1 }}
                >
                  MVVM
                </motion.span>
                <motion.span 
                  className="px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-amber-600 to-yellow-600 text-white"
                  whileHover={{ scale: 1.1 }}
                >
                  KMP
                </motion.span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LogoSection;

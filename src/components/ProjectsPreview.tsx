
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

// Project types
type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  color: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Indian Sign Language Converter",
    description: "A tool that converts Indian Sign Language to text and speech for better accessibility.",
    tags: ["AI/ML", "Accessibility", "Image Recognition"],
    imageUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    color: "from-purple-500 to-indigo-500"
  },
  {
    id: 2,
    title: "AI Smart Newsletter Tool",
    description: "Platform that automates newsletter creation with AI-powered content suggestions.",
    tags: ["AI", "Content Generation", "Web App"],
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 3,
    title: "Learning Management System",
    description: "A comprehensive LMS app for educational institutions with modern features.",
    tags: ["Education", "Mobile App", "UX/UI"],
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    color: "from-pink-500 to-rose-500"
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <motion.div
        className={cn(
          "group relative rounded-2xl overflow-hidden h-[350px] transition-all duration-700",
          isHovered ? "shadow-xl shadow-indigo-500/20 scale-[1.02]" : "shadow-md"
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ y: -10 }}
      >
        <div 
          className={cn(
            "absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10 transition-opacity duration-300",
            isHovered ? "opacity-90" : "opacity-80"
          )}
        />
        
        {/* Colorful overlay based on project color */}
        <div 
          className={cn(
            `absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 transition-opacity duration-500`,
            isHovered ? "opacity-30" : "opacity-0"
          )}
        />
        
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out"
          style={{
            transform: isHovered ? 'scale(1.1)' : 'scale(1)',
          }}
        />
        
        <div className="absolute inset-0 p-6 flex flex-col justify-end">
          <div className="flex gap-2 flex-wrap mb-3">
            {project.tags.map((tag, i) => (
              <motion.span 
                key={i} 
                className={`px-2 py-1 bg-gradient-to-r ${project.color} bg-opacity-20 backdrop-blur-sm text-xs rounded text-white`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + i * 0.1 }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
          
          <motion.h3 
            className="text-xl font-bold text-white mb-2 group-hover:text-primary-foreground transition-colors"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.2 }}
          >
            {project.title}
          </motion.h3>
          
          <motion.p 
            className="text-white/80 mb-4 line-clamp-2 group-hover:text-white transition-colors"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.3 }}
          >
            {project.description}
          </motion.p>
          
          <motion.div 
            className={cn(
              `w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-r ${project.color} text-white transition-all duration-500`,
              isHovered ? "w-full" : "w-8"
            )}
            whileHover={{ scale: isHovered ? 1 : 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className={cn(
              "flex items-center gap-2 transition-opacity",
              isHovered ? "opacity-100" : "opacity-0"
            )}>
              <span>View project</span>
              <ArrowRight size={16} />
            </span>
            <ArrowRight size={16} className={isHovered ? "hidden" : "block"} />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProjectsPreview = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-purple-100 to-indigo-50 dark:from-slate-900 dark:to-indigo-950 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-20 right-20 w-96 h-96 rounded-full bg-gradient-to-r from-purple-300/20 to-pink-300/20 blur-3xl -z-10"
        animate={{
          x: [0, 30, 0],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{ duration: 15, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-gradient-to-r from-blue-300/20 to-cyan-300/20 blur-3xl -z-10"
        animate={{
          x: [0, -30, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 20, repeat: Infinity, delay: 5 }}
      />

      <div className="container mx-auto max-w-6xl">
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
            Featured <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Projects</span>
          </motion.h2>
          <motion.p 
            className="text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            A selection of my work in AI/ML, AR development, and tech solutions
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
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
              to="/projects"
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-medium flex items-center gap-2 mx-auto w-fit hover:opacity-90 transition-all transform shadow-lg shadow-indigo-500/20"
            >
              View All Projects
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsPreview;

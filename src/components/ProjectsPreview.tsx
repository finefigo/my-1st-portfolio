
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

// Project types
type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "FitTrack",
    description: "A fitness tracking app built with Kotlin that helps users monitor workouts and progress.",
    tags: ["Kotlin", "Room DB", "MVVM"],
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
  },
  {
    id: 2,
    title: "WeatherNow",
    description: "Real-time weather application with location tracking and forecast capabilities.",
    tags: ["Java", "Retrofit", "Google Maps API"],
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  },
  {
    id: 3,
    title: "TaskFlow",
    description: "Productivity app with Kotlin Multiplatform that works across Android and iOS.",
    tags: ["KMP", "Compose", "SQLDelight"],
    imageUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="animate-on-scroll"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div
        className={cn(
          "group relative rounded-2xl overflow-hidden h-[350px] transition-all duration-700",
          isHovered ? "shadow-xl scale-[1.02]" : "shadow-md"
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div 
          className={cn(
            "absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10 transition-opacity duration-300",
            isHovered ? "opacity-90" : "opacity-80"
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
              <span 
                key={i} 
                className="px-2 py-1 bg-primary/20 backdrop-blur-sm text-xs rounded text-white"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-foreground transition-colors">
            {project.title}
          </h3>
          
          <p className="text-white/80 mb-4 line-clamp-2 group-hover:text-white transition-colors">
            {project.description}
          </p>
          
          <div 
            className={cn(
              "w-8 h-8 rounded-full flex items-center justify-center bg-primary text-primary-foreground transition-all duration-500",
              isHovered ? "w-full" : "w-8"
            )}
          >
            <span className={cn(
              "flex items-center gap-2 transition-opacity",
              isHovered ? "opacity-100" : "opacity-0"
            )}>
              <span>View project</span>
              <ArrowRight size={16} />
            </span>
            <ArrowRight size={16} className={isHovered ? "hidden" : "block"} />
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectsPreview = () => {
  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Featured <span className="title-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of my Android development work showcasing different skills and technologies
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        
        <div className="text-center mt-12 animate-on-scroll">
          <Link 
            to="/projects"
            className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-medium flex items-center gap-2 mx-auto w-fit hover:opacity-90 transition-all transform hover:translate-y-[-2px]"
          >
            View All Projects
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPreview;

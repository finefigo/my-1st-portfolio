
import { useEffect, useRef, useState } from 'react';
import Layout from '@/components/Layout';
import { ArrowUpRight, Github, Play, ExternalLink } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
  videoUrl?: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "FitTrack",
    description: "A fitness tracking app built with Kotlin that helps users monitor workouts and progress.",
    longDescription: "FitTrack is a comprehensive fitness tracking application built with Kotlin for Android. It leverages Room Database for local storage, follows MVVM architecture, and includes real-time progress tracking with intuitive visualization. The app features customizable workout plans, achievement badges, and social sharing capabilities.",
    tags: ["Kotlin", "Room DB", "MVVM", "Material Design"],
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    githubUrl: "#",
    videoUrl: "#"
  },
  {
    id: 2,
    title: "WeatherNow",
    description: "Real-time weather application with location tracking and forecast capabilities.",
    longDescription: "WeatherNow delivers accurate weather information with an intuitive interface. Built with Java, it integrates multiple weather APIs through Retrofit, implements location tracking with Google Maps API, and provides hourly and 7-day forecasts. The app includes severe weather alerts and customizable widgets for the home screen.",
    tags: ["Java", "Retrofit", "Google Maps API", "OpenWeather API"],
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    githubUrl: "#",
    liveUrl: "#",
    videoUrl: "#"
  },
  {
    id: 3,
    title: "TaskFlow",
    description: "Productivity app with Kotlin Multiplatform that works across Android and iOS.",
    longDescription: "TaskFlow is a cross-platform productivity application built with Kotlin Multiplatform. It features a clean, minimalist UI with Jetpack Compose for Android and SwiftUI for iOS, shared business logic across platforms, and efficient data synchronization with SQLDelight. The app includes task categorization, priorities, reminders, and detailed analytics.",
    tags: ["KMP", "Compose", "SQLDelight", "Ktor"],
    imageUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    githubUrl: "#",
    videoUrl: "#"
  },
  {
    id: 4,
    title: "MediRemind",
    description: "Medication reminder app with a focus on elderly users and accessibility.",
    longDescription: "MediRemind is designed to help users, particularly seniors, manage their medications effectively. Built with accessibility in mind, it features large text, high contrast UI, voice reminders, and simple navigation. The app includes medication tracking, refill reminders, and an emergency contact system.",
    tags: ["Java", "Accessibility", "Local Notifications", "SQLite"],
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    githubUrl: "#",
    videoUrl: "#"
  },
  {
    id: 5,
    title: "CryptoTracker",
    description: "Real-time cryptocurrency tracking app with price alerts and portfolio management.",
    longDescription: "CryptoTracker allows users to monitor cryptocurrency markets in real-time. Built with Kotlin, it implements MVVM architecture, integrates multiple crypto APIs, and provides detailed market analytics. Features include price alerts, portfolio tracking, transaction history, and predictive indicators.",
    tags: ["Kotlin", "Retrofit", "RxJava", "MPAndroidChart"],
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: 6,
    title: "SmartHome",
    description: "IoT application for controlling smart home devices from your phone.",
    longDescription: "SmartHome provides a centralized control interface for various IoT devices. Built with Kotlin, it implements a modular architecture for easy device integration, features voice commands, scheduled operations, and energy usage tracking. The app includes scene creation, remote access, and a comprehensive dashboard.",
    tags: ["Kotlin", "Bluetooth LE", "MQTT", "Dagger Hilt"],
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    githubUrl: "#",
    videoUrl: "#"
  },
];

const ProjectCard = ({ project }: { project: Project }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="group animate-on-scroll relative h-[275px] rounded-xl overflow-hidden cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img 
        src={project.imageUrl} 
        alt={project.title} 
        className="w-full h-full object-cover transition-transform duration-700"
        style={{ transform: isHovered ? 'scale(1.1)' : 'scale(1)' }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90"></div>
      
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-white/80 mb-4 line-clamp-2">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 3).map((tag, index) => (
            <span 
              key={index} 
              className="px-2 py-1 bg-primary/20 backdrop-blur-sm text-xs rounded-full text-white"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="px-2 py-1 bg-primary/20 backdrop-blur-sm text-xs rounded-full text-white">
              +{project.tags.length - 3}
            </span>
          )}
        </div>
        
        <button 
          className={`group relative overflow-hidden px-4 py-2 rounded-lg bg-white text-black font-medium transition-all duration-300 ${
            isHovered ? 'w-full' : 'w-[120px]'
          }`}
        >
          <div className="relative z-10 flex items-center justify-center gap-1">
            <span>View Details</span>
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>
          <div 
            className="absolute inset-0 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
          ></div>
        </button>
      </div>
    </div>
  );
};

const ProjectModal = ({ 
  project, 
  onClose 
}: { 
  project: Project | null; 
  onClose: () => void 
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
      <div 
        ref={modalRef}
        className="bg-background rounded-xl max-w-3xl max-h-[80vh] overflow-y-auto animate-scale-in"
      >
        <div className="relative h-[300px] overflow-hidden">
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          <div className="absolute top-4 right-4">
            <button 
              onClick={onClose}
              className="p-2 rounded-full bg-black/30 backdrop-blur-md text-white hover:bg-black/50 transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
            </button>
          </div>
          <div className="absolute bottom-0 left-0 p-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{project.title}</h2>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="px-2 py-1 bg-primary/20 backdrop-blur-sm text-xs rounded-full text-white"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-bold mb-4">Project Overview</h3>
          <p className="text-muted-foreground mb-6">{project.longDescription}</p>
          
          {project.videoUrl && (
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-4">Project Demo</h3>
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Play size={48} className="mx-auto mb-2 text-primary" />
                  <p className="text-muted-foreground">Video placeholder - Replace with your actual video</p>
                </div>
              </div>
            </div>
          )}
          
          <div className="flex flex-wrap gap-4 mt-4">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
              >
                <Github size={18} />
                <span>View Code</span>
              </a>
            )}
            
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                <ExternalLink size={18} />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  const filteredProjects = projects.filter(project => {
    // Filter by tag
    const tagMatch = filter === 'all' || project.tags.some(tag => tag.toLowerCase().includes(filter.toLowerCase()));
    
    // Filter by search query
    const searchMatch = 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return tagMatch && searchMatch;
  });
  
  const uniqueTags = Array.from(new Set(projects.flatMap(project => project.tags)));

  return (
    <Layout>
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            My <span className="title-gradient">Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my Android development journey and innovations
          </p>
        </div>
        
        <div className="mb-8 animate-on-scroll">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            <div className="w-full md:w-auto flex overflow-x-auto pb-2 md:pb-0 gap-2">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors ${
                  filter === 'all' ? 'bg-primary text-primary-foreground' : 'bg-secondary hover:bg-secondary/80'
                }`}
              >
                All Projects
              </button>
              
              {['Kotlin', 'Java', 'KMP', 'MVVM'].map(tag => (
                <button
                  key={tag}
                  onClick={() => setFilter(tag)}
                  className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors ${
                    filter === tag ? 'bg-primary text-primary-foreground' : 'bg-secondary hover:bg-secondary/80'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
            
            <div className="w-full md:w-auto mt-4 md:mt-0">
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="px-4 py-2 rounded-lg bg-secondary/50 border border-border focus:outline-none focus:ring-2 focus:ring-primary/30 w-full md:w-auto"
              />
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(project => (
            <div key={project.id} onClick={() => setSelectedProject(project)}>
              <ProjectCard project={project} />
            </div>
          ))}
          
          {filteredProjects.length === 0 && (
            <div className="col-span-full py-12 text-center">
              <p className="text-muted-foreground text-lg">No projects found matching your criteria.</p>
              <button
                onClick={() => {
                  setFilter('all');
                  setSearchQuery('');
                }}
                className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-lg"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
        
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </div>
    </Layout>
  );
};

export default Projects;

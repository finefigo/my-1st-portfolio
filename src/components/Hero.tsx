
import { ArrowRight, ChevronDown, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

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
    <section className={cn("relative min-h-[85vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden", className)}>
      {/* Animated background shapes */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[10%] left-[10%] w-64 h-64 rounded-full bg-primary/5 animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-[50%] right-[10%] w-48 h-48 rounded-full bg-primary/5 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-[20%] left-[20%] w-32 h-32 rounded-full bg-primary/5 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="space-y-6 max-w-3xl mx-auto">
        {/* Badge */}
        <div 
          className={cn(
            "inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6",
            mounted ? "animate-fade-in" : "opacity-0"
          )} 
          style={{ animationDelay: '200ms' }}
        >
          <div className="flex items-center gap-2">
            <Star size={14} className="animate-pulse-slow" />
            <span>2nd year Engineering Student</span>
          </div>
        </div>
        
        {/* Main heading */}
        <h1 
          className={cn(
            "text-4xl md:text-6xl font-display font-bold leading-tight",
            mounted ? "animate-fade-in" : "opacity-0"
          )} 
          style={{ animationDelay: '400ms' }}
        >
          Creating <span className="title-gradient">intuitive</span> mobile <br className="hidden sm:inline" />experiences
        </h1>
        
        {/* Description */}
        <p 
          className={cn(
            "text-xl text-muted-foreground max-w-2xl mx-auto",
            mounted ? "animate-fade-in" : "opacity-0"
          )} 
          style={{ animationDelay: '600ms' }}
        >
          Beginner Android developer specializing in XML, Java, and Kotlin.
          <br className="hidden sm:inline" /> Exploring Kotlin Multiplatform and machine learning.
        </p>
        
        {/* CTA buttons */}
        <div 
          className={cn(
            "flex flex-col items-center justify-center gap-4 pt-6",
            mounted ? "animate-fade-in" : "opacity-0"
          )} 
          style={{ animationDelay: '800ms' }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
            <Link 
              to="/projects" 
              className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-medium flex items-center gap-2 transition-all hover:opacity-90 transform hover:translate-y-[-2px] shadow-md hover:shadow-lg"
            >
              View Projects
              <ArrowRight size={16} />
            </Link>
            
            <Link 
              to="/about" 
              className="px-8 py-3 rounded-lg border border-input bg-background hover:bg-secondary/50 font-medium transition-all transform hover:translate-y-[-2px]"
            >
              About Me
            </Link>
          </div>
          
          {/* Stats section */}
          <div className="flex flex-wrap justify-center gap-8 mt-12 w-full max-w-lg">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">10+</div>
              <div className="text-sm text-muted-foreground">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">2</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">3</div>
              <div className="text-sm text-muted-foreground">Technologies</div>
            </div>
          </div>
          
          <button 
            onClick={scrollToAbout} 
            className="mt-12 animate-bounce p-2 rounded-full bg-secondary/50 hover:bg-secondary transition-colors" 
            aria-label="Scroll to about section"
          >
            <ChevronDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;


import { ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface HeroProps {
  className?: string;
}

const Hero = ({ className }: HeroProps) => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about-section');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className={cn(
        "min-h-[85vh] flex flex-col items-center justify-center text-center px-4",
        className
      )}
    >
      <div className="space-y-6 max-w-3xl mx-auto animate-fade-in">
        <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-in" style={{ animationDelay: '200ms' }}>
          Android Developer
        </div>
        
        <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight animate-fade-in" style={{ animationDelay: '400ms' }}>
          Creating <span className="title-gradient">intuitive</span> mobile experiences
        </h1>
        
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '600ms' }}>
          Beginner Android developer specializing in XML, Java, and Kotlin. 
          Exploring Kotlin Multiplatform and machine learning.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 animate-fade-in" style={{ animationDelay: '800ms' }}>
          <Link
            to="/projects"
            className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-medium flex items-center gap-2 transition-all hover:opacity-90 transform hover:translate-y-[-2px]"
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
      </div>
      
      <button
        onClick={scrollToAbout}
        className="absolute bottom-10 animate-bounce"
        aria-label="Scroll to about section"
      >
        <ChevronDown size={24} />
      </button>
    </section>
  );
};

export default Hero;

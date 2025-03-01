
import React, { useEffect, useRef } from 'react';
import { 
  Code, 
  Smartphone, 
  Brain, 
  Award, 
  ArrowRight 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPreview = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Staggered animation on scroll
  useEffect(() => {
    const items = containerRef.current?.querySelectorAll('.feature-item');
    if (!items) return;
    
    items.forEach((item, index) => {
      const el = item as HTMLElement;
      el.style.transitionDelay = `${index * 100}ms`;
    });
  }, []);

  return (
    <section id="about-section" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            About <span className="title-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A passionate Android developer with a focus on creating intuitive and user-friendly applications
          </p>
        </div>

        <div 
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <div className="feature-item highlight-card glass-card animate-on-scroll">
            <Smartphone className="h-10 w-10 mb-4 text-primary" />
            <h3 className="text-xl font-bold mb-2">Android Development</h3>
            <p className="text-muted-foreground mb-4">
              Building native Android applications using Java, Kotlin, and XML layouts
            </p>
          </div>
          
          <div className="feature-item highlight-card glass-card animate-on-scroll">
            <Code className="h-10 w-10 mb-4 text-primary" />
            <h3 className="text-xl font-bold mb-2">Kotlin Multiplatform</h3>
            <p className="text-muted-foreground mb-4">
              Transitioning to KMP for cross-platform development efficiency
            </p>
          </div>
          
          <div className="feature-item highlight-card glass-card animate-on-scroll">
            <Award className="h-10 w-10 mb-4 text-primary" />
            <h3 className="text-xl font-bold mb-2">Patents</h3>
            <p className="text-muted-foreground mb-4">
              Holder of two patents, demonstrating innovation and problem-solving
            </p>
          </div>
          
          <div className="feature-item highlight-card glass-card animate-on-scroll">
            <Brain className="h-10 w-10 mb-4 text-primary" />
            <h3 className="text-xl font-bold mb-2">AI & ML</h3>
            <p className="text-muted-foreground mb-4">
              Exploring machine learning integration with mobile applications
            </p>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/about"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            Learn more about me
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;


import React, { useEffect, useRef, useState } from 'react';
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
          <div 
            ref={(el) => cardsRef.current[0] = el}
            className="feature-item highlight-card glass-card animate-on-scroll transition-transform duration-200"
          >
            <Smartphone className="h-10 w-10 mb-4 text-primary" />
            <h3 className="text-xl font-bold mb-2">Android Development</h3>
            <p className="text-muted-foreground mb-4">
              Building native Android applications using Java, Kotlin, and XML layouts
            </p>
          </div>
          
          <div 
            ref={(el) => cardsRef.current[1] = el}
            className="feature-item highlight-card glass-card animate-on-scroll transition-transform duration-200"
          >
            <Code className="h-10 w-10 mb-4 text-primary" />
            <h3 className="text-xl font-bold mb-2">Kotlin Multiplatform</h3>
            <p className="text-muted-foreground mb-4">
              Transitioning to KMP for cross-platform development efficiency
            </p>
          </div>
          
          <div 
            ref={(el) => cardsRef.current[2] = el}
            className="feature-item highlight-card glass-card animate-on-scroll transition-transform duration-200"
          >
            <Award className="h-10 w-10 mb-4 text-primary" />
            <h3 className="text-xl font-bold mb-2">Patents</h3>
            <p className="text-muted-foreground mb-4">
              Holder of two patents, demonstrating innovation and problem-solving
            </p>
          </div>
          
          <div 
            ref={(el) => cardsRef.current[3] = el}
            className="feature-item highlight-card glass-card animate-on-scroll transition-transform duration-200"
          >
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

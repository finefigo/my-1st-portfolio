
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const LogoSection = () => {
  const [loaded, setLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [profileImage, setProfileImage] = useState<string | null>(null);

  // This would be replaced with your actual profile image
  const placeholderImage = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b";

  useEffect(() => {
    // Simulate loading the image
    const img = new Image();
    img.src = placeholderImage;
    img.onload = () => {
      setProfileImage(placeholderImage);
      setTimeout(() => setLoaded(true), 300);
    };
  }, []);

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            About <span className="title-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here's where you can learn more about who I am
          </p>
        </div>
        
        <div ref={containerRef} className="flex flex-col md:flex-row items-center gap-12 animate-on-scroll">
          <div className="w-full md:w-2/5 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-primary rounded-lg transform rotate-6"></div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary/60 rounded-lg transform -rotate-6"></div>
              
              {/* Image container with blur loading effect */}
              <div className="relative w-full h-full rounded-lg overflow-hidden">
                {/* Blur placeholder */}
                <div 
                  className={cn(
                    "absolute inset-0 bg-muted animate-pulse transition-opacity duration-500",
                    loaded ? "opacity-0" : "opacity-100"
                  )}
                ></div>
                
                {/* Actual image */}
                {profileImage && (
                  <img
                    src={profileImage}
                    alt="Your profile"
                    className={cn(
                      "w-full h-full object-cover transition-opacity duration-700 filter",
                      loaded ? "opacity-100" : "opacity-0"
                    )}
                  />
                )}
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                  <p className="text-white text-sm font-medium">Your Name</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-3/5 animate-on-scroll" style={{ animationDelay: "200ms" }}>
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">Android Developer & Innovator</h3>
              
              <p className="text-muted-foreground mb-6">
                I'm an Android developer with expertise in XML, Java, and Kotlin. My journey involves 
                transitioning to Kotlin Multiplatform for cross-platform development. With two patents 
                under my belt, I have a proven track record of innovation.
              </p>
              
              <p className="text-muted-foreground mb-6">
                My fascination with AI tools and machine learning drives me to explore the integration 
                of these technologies with mobile applications, creating more intelligent and adaptive 
                user experiences.
              </p>
              
              <p className="text-muted-foreground">
                I'm constantly learning and expanding my skill set to stay at the forefront of mobile 
                development trends and best practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoSection;

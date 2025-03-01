import { useEffect, useRef } from 'react';
import Layout from '@/components/Layout';
import { 
  Code, 
  Database, 
  Layout as LayoutIcon, 
  GitBranch, 
  Server, 
  Wrench, 
  Clock
} from 'lucide-react';

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  skills: {
    name: string;
    level: number;
  }[];
  delay?: number;
}

const SkillCard = ({ icon, title, skills, delay = 0 }: SkillCardProps) => {
  return (
    <div 
      className="glass-card rounded-xl p-6 animate-on-scroll"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-lg bg-primary/10 text-primary">
          {icon}
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm font-medium">{skill.name}</span>
              <span className="text-xs text-muted-foreground">{skill.level}%</span>
            </div>
            <div className="h-2 bg-secondary rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                style={{ width: '0%' }}
                data-width={`${skill.level}%`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  delay?: number;
}

const ProcessStep = ({ number, title, description, delay = 0 }: ProcessStepProps) => {
  return (
    <div 
      className="glass-card rounded-xl p-6 animate-on-scroll"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl">
          {number}
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const Skills = () => {
  useEffect(() => {
    setTimeout(() => {
      const skillBars = document.querySelectorAll('.bg-primary');
      skillBars.forEach(bar => {
        const dataWidth = (bar as HTMLElement).dataset.width;
        if (dataWidth) {
          (bar as HTMLElement).style.width = dataWidth;
        }
      });
    }, 500);
  }, []);

  return (
    <Layout>
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            My <span className="title-gradient">Skills</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to build amazing Android applications
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          <SkillCard 
            icon={<Code size={24} />}
            title="Programming Languages"
            skills={[
              { name: "Java", level: 85 },
              { name: "Kotlin", level: 80 },
              { name: "C++", level: 60 },
              { name: "Python", level: 55 },
            ]}
            delay={0}
          />
          
          <SkillCard 
            icon={<LayoutIcon size={24} />}
            title="UI Development"
            skills={[
              { name: "XML Layouts", level: 90 },
              { name: "Material Design", level: 85 },
              { name: "Jetpack Compose", level: 70 },
              { name: "Animation & Transitions", level: 75 },
            ]}
            delay={100}
          />
          
          <SkillCard 
            icon={<Database size={24} />}
            title="Data Management"
            skills={[
              { name: "Room Database", level: 85 },
              { name: "SQLite", level: 80 },
              { name: "Shared Preferences", level: 90 },
              { name: "DataStore", level: 75 },
            ]}
            delay={200}
          />
          
          <SkillCard 
            icon={<Server size={24} />}
            title="Backend Integration"
            skills={[
              { name: "RESTful APIs", level: 80 },
              { name: "Retrofit", level: 85 },
              { name: "OkHttp", level: 75 },
              { name: "Firebase", level: 70 },
            ]}
            delay={300}
          />
          
          <SkillCard 
            icon={<Wrench size={24} />}
            title="Architecture Patterns"
            skills={[
              { name: "MVVM", level: 85 },
              { name: "MVC", level: 90 },
              { name: "Clean Architecture", level: 75 },
              { name: "Repository Pattern", level: 80 },
            ]}
            delay={400}
          />
          
          <SkillCard 
            icon={<GitBranch size={24} />}
            title="Development Tools"
            skills={[
              { name: "Android Studio", level: 90 },
              { name: "Git & GitHub", level: 85 },
              { name: "Gradle", level: 80 },
              { name: "Debugging Tools", level: 75 },
            ]}
            delay={500}
          />
        </div>
        
        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-8 text-center animate-on-scroll">
            My Development Process
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ProcessStep 
              number={1}
              title="Research & Planning"
              description="Thoroughly research the problem domain and plan the application architecture and features."
              delay={0}
            />
            
            <ProcessStep 
              number={2}
              title="Design & Prototyping"
              description="Create wireframes and interactive prototypes to visualize the user experience."
              delay={100}
            />
            
            <ProcessStep 
              number={3}
              title="Development"
              description="Implement the application with clean, maintainable code following best practices."
              delay={200}
            />
            
            <ProcessStep 
              number={4}
              title="Testing & Refinement"
              description="Thoroughly test the application for bugs and refine the user experience based on feedback."
              delay={300}
            />
          </div>
        </div>
        
        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-8 text-center animate-on-scroll">
            Current Learning Focus
          </h2>
          
          <div className="glass-card rounded-xl p-8 max-w-3xl mx-auto animate-on-scroll">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="p-4 rounded-full bg-primary/10 text-primary">
                <Clock size={32} />
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-2">Expanding My Skill Set</h3>
                <p className="text-muted-foreground mb-4">
                  I'm currently focused on expanding my knowledge in the following areas:
                </p>
                
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Kotlin Multiplatform for cross-platform development</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Machine Learning integration in mobile applications</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Advanced animations and motion design in Android</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Performance optimization techniques for Android apps</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Modern app architectures with Jetpack libraries</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="animate-on-scroll">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold">Let's Build Something Amazing Together</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-2">
              With my skills and your vision, we can create exceptional mobile experiences
            </p>
          </div>
          
          <div className="flex justify-center">
            <a
              href="mailto:your.email@example.com"
              className="px-8 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all transform hover:translate-y-[-2px]"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Skills;


import React, { useEffect } from 'react';
import Layout from '@/components/Layout';
import { 
  Code2, 
  Smartphone, 
  FileCode, 
  Layers, 
  RefreshCw, 
  Brain, 
  Award
} from 'lucide-react';

interface SkillProps {
  name: string;
  level: number;
  description: string;
}

const Skill = ({ name, level, description }: SkillProps) => {
  return (
    <div className="mb-4 animate-on-scroll">
      <div className="flex justify-between items-center mb-1">
        <h4 className="font-medium">{name}</h4>
        <span className="text-sm text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <div 
          className="h-full bg-primary rounded-full transition-all duration-1000"
          style={{ width: `0%`, transitionDelay: '300ms' }}
          data-width={`${level}%`}
        />
      </div>
      <p className="text-sm text-muted-foreground mt-1">{description}</p>
    </div>
  );
};

const ExperienceItem = ({ 
  title, 
  period, 
  description, 
  index 
}: { 
  title: string; 
  period: string; 
  description: string;
  index: number;
}) => {
  return (
    <div 
      className="mb-8 relative pl-8 animate-on-scroll"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-primary"></div>
      
      {/* Timeline line */}
      {index !== 2 && (
        <div className="absolute left-[7.5px] top-6 w-0.5 h-[calc(100%-24px)] bg-muted"></div>
      )}
      
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-sm text-muted-foreground mb-2">{period}</p>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const About = () => {
  // Initialize skill bars animation after mount
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
            About <span className="title-gradient">Me</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Android developer with a passion for innovative mobile solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="animate-on-scroll">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <FileCode className="text-primary" size={24} />
              Skills & Expertise
            </h2>
            
            <Skill 
              name="Android XML Layouts" 
              level={85} 
              description="Creating responsive and accessible UI designs"
            />
            <Skill 
              name="Java" 
              level={80} 
              description="Building robust Android applications and systems"
            />
            <Skill 
              name="Kotlin" 
              level={75} 
              description="Modern, concise code for Android apps"
            />
            <Skill 
              name="Kotlin Multiplatform" 
              level={60} 
              description="Developing cross-platform solutions"
            />
            <Skill 
              name="API Integration" 
              level={70} 
              description="Connecting apps with backend services"
            />
            <Skill 
              name="UI/UX Design" 
              level={65} 
              description="Creating intuitive and engaging user experiences"
            />
          </div>
          
          <div className="animate-on-scroll" style={{ animationDelay: '200ms' }}>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Award className="text-primary" size={24} />
              Career Timeline
            </h2>
            
            <div className="relative">
              <ExperienceItem 
                title="Android Developer Internship"
                period="2022 - Present"
                description="Developed and maintained Android applications, collaborating with a team of experienced developers to create user-friendly interfaces and implement key features."
                index={0}
              />
              <ExperienceItem 
                title="Patent Application"
                period="2021"
                description="Filed patent applications for innovative mobile solutions, demonstrating technical creativity and problem-solving abilities."
                index={1}
              />
              <ExperienceItem 
                title="Computer Science Degree"
                period="2019 - 2023"
                description="Studied computer science with a focus on mobile application development, software engineering principles, and algorithm design."
                index={2}
              />
            </div>
          </div>
        </div>
        
        <div className="mb-20 animate-on-scroll">
          <h2 className="text-2xl font-bold mb-6 text-center">What I Do</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass-card rounded-xl p-6 transition-transform hover:translate-y-[-5px]">
              <Smartphone className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Android Development</h3>
              <p className="text-muted-foreground">
                Creating native Android applications with clean architecture and modern UI patterns.
              </p>
            </div>
            
            <div className="glass-card rounded-xl p-6 transition-transform hover:translate-y-[-5px]">
              <Layers className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Multiplatform Apps</h3>
              <p className="text-muted-foreground">
                Building cross-platform solutions with Kotlin Multiplatform to maximize code reuse.
              </p>
            </div>
            
            <div className="glass-card rounded-xl p-6 transition-transform hover:translate-y-[-5px]">
              <Brain className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">AI Integration</h3>
              <p className="text-muted-foreground">
                Incorporating machine learning models and AI tools to enhance mobile applications.
              </p>
            </div>
            
            <div className="glass-card rounded-xl p-6 transition-transform hover:translate-y-[-5px]">
              <Code2 className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Clean Code</h3>
              <p className="text-muted-foreground">
                Writing maintainable, testable code following best practices and design patterns.
              </p>
            </div>
            
            <div className="glass-card rounded-xl p-6 transition-transform hover:translate-y-[-5px]">
              <Award className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-muted-foreground">
                Creating patentable solutions to common problems in mobile development.
              </p>
            </div>
            
            <div className="glass-card rounded-xl p-6 transition-transform hover:translate-y-[-5px]">
              <RefreshCw className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Continuous Learning</h3>
              <p className="text-muted-foreground">
                Staying updated with the latest technologies and best practices in mobile development.
              </p>
            </div>
          </div>
        </div>
        
        <div className="animate-on-scroll">
          <h2 className="text-2xl font-bold mb-6 text-center">Personal Statement</h2>
          
          <div className="glass-card rounded-xl p-8 max-w-3xl mx-auto">
            <p className="text-center mb-4">
              I am a dedicated Android developer with a passion for creating intuitive, efficient mobile 
              applications. My approach combines technical expertise with creative problem-solving to deliver 
              exceptional user experiences.
            </p>
            <p className="text-center mb-4">
              With a background in Java and Kotlin development, I am now exploring the exciting possibilities 
              of Kotlin Multiplatform to build cross-platform solutions that maintain native performance and feel.
            </p>
            <p className="text-center">
              My journey in technology is driven by curiosity and a desire to create meaningful applications 
              that enhance people's lives. I am particularly interested in the intersection of mobile development 
              and artificial intelligence, where I believe the next generation of transformative apps will emerge.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;

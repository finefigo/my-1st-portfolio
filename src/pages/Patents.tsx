
import Layout from '@/components/Layout';
import { Award, FileText, ArrowUpRight, File, FileSearch, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface Patent {
  id: number;
  title: string;
  number: string;
  filingDate: string;
  issueDate: string;
  abstract: string;
  status: 'Granted' | 'Pending';
  inventors: string[];
  field: string;
  imageUrl?: string;
}

const patents: Patent[] = [
  {
    id: 1,
    title: "Method and System for Intelligent Mobile Application Resource Management",
    number: "US123456789",
    filingDate: "2022-05-15",
    issueDate: "2023-07-20",
    abstract: "A system and method for dynamically managing and optimizing resource allocation in mobile applications based on user behavior patterns and device capabilities. The invention utilizes machine learning algorithms to predict resource needs and adjust application performance in real-time, resulting in improved battery life and performance.",
    status: "Granted",
    inventors: ["Your Name", "Collaborator One"],
    field: "Mobile Computing",
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
  },
  {
    id: 2,
    title: "Adaptive User Interface Generation System for Cross-Platform Applications",
    number: "US987654321",
    filingDate: "2022-10-08",
    issueDate: "Pending",
    abstract: "An innovative system for automatically generating and adapting user interfaces across multiple platforms based on a single codebase. The invention leverages platform-specific capabilities while maintaining UI consistency and accessibility standards, significantly reducing development time and improving user experience across devices.",
    status: "Pending",
    inventors: ["Your Name"],
    field: "User Interface Design",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
  }
];

const PatentCard = ({ patent, onClick }: { patent: Patent; onClick: () => void }) => {
  return (
    <div 
      className="glass-card rounded-xl overflow-hidden cursor-pointer animate-on-scroll"
      onClick={onClick}
    >
      {patent.imageUrl && (
        <div className="h-48 overflow-hidden">
          <img 
            src={patent.imageUrl} 
            alt={patent.title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-bold mb-2 hover:text-primary transition-colors">
            {patent.title}
          </h3>
          <span 
            className={cn(
              "px-2 py-1 text-xs rounded-full",
              patent.status === "Granted" 
                ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400" 
                : "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400"
            )}
          >
            {patent.status}
          </span>
        </div>
        
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <FileText size={14} />
          <span>{patent.number}</span>
        </div>
        
        <p className="text-muted-foreground mb-4 line-clamp-3">
          {patent.abstract}
        </p>
        
        <div className="flex justify-between items-center mt-4">
          <span className="text-sm text-muted-foreground">
            {patent.status === "Granted" ? `Issued: ${patent.issueDate}` : `Filed: ${patent.filingDate}`}
          </span>
          
          <button 
            className="flex items-center gap-1 text-primary hover:underline"
          >
            <span>Details</span>
            <ArrowUpRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

const PatentDetailModal = ({ 
  patent, 
  onClose 
}: { 
  patent: Patent | null; 
  onClose: () => void 
}) => {
  if (!patent) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-background rounded-xl max-w-3xl max-h-[80vh] overflow-y-auto animate-scale-in">
        <div className="relative">
          {patent.imageUrl && (
            <div className="h-64 overflow-hidden">
              <img 
                src={patent.imageUrl} 
                alt={patent.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
            </div>
          )}
          
          <div className="absolute top-4 right-4">
            <button 
              onClick={onClose}
              className="p-2 rounded-full bg-black/30 backdrop-blur-md text-white hover:bg-black/50 transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
            </button>
          </div>
        </div>
        
        <div className="p-6 pt-12">
          <div className="flex items-start justify-between gap-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{patent.title}</h2>
            <span 
              className={cn(
                "px-3 py-1 text-sm rounded-full",
                patent.status === "Granted" 
                  ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400" 
                  : "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400"
              )}
            >
              {patent.status}
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Patent Number</h3>
                <p className="font-mono">{patent.number}</p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Filing Date</h3>
                <p>{patent.filingDate}</p>
              </div>
              
              {patent.status === "Granted" && (
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Issue Date</h3>
                  <p>{patent.issueDate}</p>
                </div>
              )}
              
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Field</h3>
                <p>{patent.field}</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-2">Inventors</h3>
              <ul className="space-y-1">
                {patent.inventors.map((inventor, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    <span>{inventor}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">Abstract</h3>
            <p className="text-muted-foreground">{patent.abstract}</p>
          </div>
          
          <div className="flex justify-end gap-4">
            <button 
              onClick={onClose}
              className="px-4 py-2 rounded-lg border border-input bg-background hover:bg-secondary/50 transition-colors"
            >
              Close
            </button>
            
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors flex items-center gap-2"
            >
              <FileSearch size={18} />
              <span>View Patent</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Patents = () => {
  const [selectedPatent, setSelectedPatent] = useState<Patent | null>(null);

  return (
    <Layout>
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            My <span className="title-gradient">Patents</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions and inventions in the field of mobile technology
          </p>
        </div>
        
        <div className="mb-12 glass-card rounded-xl p-8 animate-on-scroll">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="p-4 rounded-full bg-primary/10 text-primary">
              <Award size={64} />
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-2">Patent Portfolio</h2>
              <p className="text-muted-foreground mb-4">
                My work in mobile development has led to the creation of several 
                innovative solutions, resulting in two patents that address key 
                challenges in the mobile application ecosystem.
              </p>
              <p className="text-muted-foreground">
                These patents demonstrate my ability to identify problems, develop novel solutions, 
                and bring them through the rigorous patent application process. Each invention 
                represents significant advancements in how mobile applications function and interact 
                with users.
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {patents.map(patent => (
            <PatentCard 
              key={patent.id} 
              patent={patent} 
              onClick={() => setSelectedPatent(patent)}
            />
          ))}
        </div>
        
        <div className="glass-card rounded-xl p-8 animate-on-scroll">
          <h2 className="text-2xl font-bold mb-4">Patent Process Insights</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 rounded-lg border border-border bg-secondary/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <File size={20} />
                </div>
                <h3 className="font-bold">Ideation</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Identifying real-world problems in mobile development and conceptualizing novel technical solutions
              </p>
            </div>
            
            <div className="p-4 rounded-lg border border-border bg-secondary/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <FileText size={20} />
                </div>
                <h3 className="font-bold">Documentation</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Thoroughly documenting the innovation with detailed specifications, diagrams, and implementation examples
              </p>
            </div>
            
            <div className="p-4 rounded-lg border border-border bg-secondary/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Award size={20} />
                </div>
                <h3 className="font-bold">Application</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Working with patent attorneys to file applications and navigate the examination process
              </p>
            </div>
          </div>
          
          <div className="mt-6 flex justify-center">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <span>Learn more about the patent process</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
      
      {selectedPatent && (
        <PatentDetailModal 
          patent={selectedPatent} 
          onClose={() => setSelectedPatent(null)} 
        />
      )}
    </Layout>
  );
};

export default Patents;

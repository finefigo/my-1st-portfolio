
import React, { useEffect, useState } from 'react';
import { cn } from "@/lib/utils";
import { 
  Home, 
  User, 
  Code2, 
  FileCode, 
  Award, 
  Brain, 
  Github, 
  Linkedin, 
  Twitter,
  Menu,
  X
} from "lucide-react";
import { Link, useLocation } from 'react-router-dom';

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  isActive: boolean;
}

const NavItem = ({ icon, label, href, isActive }: NavItemProps) => {
  return (
    <Link
      to={href}
      className={cn(
        "nav-item flex items-center gap-2 transition-all duration-300",
        isActive && "active"
      )}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
};

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 text-muted-foreground hover:text-foreground transition-colors"
    >
      {icon}
    </a>
  );
};

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  useEffect(() => {
    // Close mobile menu when route changes
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <header 
        className={cn(
          "fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300",
          scrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
        )}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center overflow-hidden animate-pulse-slow">
              <div className="w-9 h-9 rounded-full bg-background flex items-center justify-center">
                <span className="font-display font-bold text-lg">AD</span>
              </div>
            </div>
            <span className="font-display font-bold text-xl">Portfolio</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <NavItem
              icon={<Home size={18} />}
              label="Home"
              href="/"
              isActive={location.pathname === '/'}
            />
            <NavItem
              icon={<User size={18} />}
              label="About"
              href="/about"
              isActive={location.pathname === '/about'}
            />
            <NavItem
              icon={<Code2 size={18} />}
              label="Projects"
              href="/projects"
              isActive={location.pathname === '/projects'}
            />
            <NavItem
              icon={<FileCode size={18} />}
              label="Skills"
              href="/skills"
              isActive={location.pathname === '/skills'}
            />
            <NavItem
              icon={<Award size={18} />}
              label="Patents"
              href="/patents"
              isActive={location.pathname === '/patents'}
            />
          </nav>

          {/* Social Links */}
          <div className="hidden md:flex items-center gap-2">
            <SocialLink 
              href="https://github.com" 
              icon={<Github size={18} />} 
            />
            <SocialLink 
              href="https://linkedin.com" 
              icon={<Linkedin size={18} />} 
            />
            <SocialLink 
              href="https://twitter.com" 
              icon={<Twitter size={18} />} 
            />
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background pt-20 animate-fade-in">
          <nav className="container mx-auto px-4 flex flex-col gap-4">
            <NavItem
              icon={<Home size={18} />}
              label="Home"
              href="/"
              isActive={location.pathname === '/'}
            />
            <NavItem
              icon={<User size={18} />}
              label="About"
              href="/about"
              isActive={location.pathname === '/about'}
            />
            <NavItem
              icon={<Code2 size={18} />}
              label="Projects"
              href="/projects"
              isActive={location.pathname === '/projects'}
            />
            <NavItem
              icon={<FileCode size={18} />}
              label="Skills"
              href="/skills"
              isActive={location.pathname === '/skills'}
            />
            <NavItem
              icon={<Award size={18} />}
              label="Patents"
              href="/patents"
              isActive={location.pathname === '/patents'}
            />
            
            <div className="mt-6 flex items-center gap-4">
              <SocialLink 
                href="https://github.com" 
                icon={<Github size={20} />} 
              />
              <SocialLink 
                href="https://linkedin.com" 
                icon={<Linkedin size={20} />} 
              />
              <SocialLink 
                href="https://twitter.com" 
                icon={<Twitter size={20} />} 
              />
            </div>
          </nav>
        </div>
      )}

      <main className="flex-1 pt-24">
        {children}
      </main>

      <footer className="py-8 border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">
              &copy; {new Date().getFullYear()} Portfolio. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <SocialLink 
                href="https://github.com" 
                icon={<Github size={18} />} 
              />
              <SocialLink 
                href="https://linkedin.com" 
                icon={<Linkedin size={18} />} 
              />
              <SocialLink 
                href="https://twitter.com" 
                icon={<Twitter size={18} />} 
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

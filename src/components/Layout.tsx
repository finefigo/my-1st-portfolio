
import React, { useEffect, useState } from 'react';
import { cn } from "@/lib/utils";
import { Home, User, Code2, FileCode, Award, Brain, Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { Link, useLocation } from 'react-router-dom';

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  isActive: boolean;
}

const NavItem = ({
  icon,
  label,
  href,
  isActive
}: NavItemProps) => {
  return <Link to={href} className={cn("nav-item flex items-center gap-2 transition-all duration-300", isActive && "active")}>
      {icon}
      <span>{label}</span>
    </Link>;
};

const SocialLink = ({
  href,
  icon,
  label
}: {
  href: string;
  icon: React.ReactNode;
  label?: string;
}) => {
  return <a href={href} target="_blank" rel="noopener noreferrer" className="p-2 flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
      {icon}
      {label && <span className="text-sm">{label}</span>}
    </a>;
};

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({
  children
}: LayoutProps) => {
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
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, {
      threshold: 0.1
    });
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));
    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950">
      <header className={cn("fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300", 
        scrolled ? "bg-white/90 dark:bg-gray-950/90 backdrop-blur-md shadow-sm" : "bg-transparent")}>
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-display font-bold text-xl text-gray-900 dark:text-white">Faisal Imtiaz</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <NavItem icon={<Home size={18} />} label="Home" href="/" isActive={location.pathname === '/'} />
            <NavItem icon={<User size={18} />} label="About" href="/about" isActive={location.pathname === '/about'} />
            <NavItem icon={<Code2 size={18} />} label="Projects" href="/projects" isActive={location.pathname === '/projects'} />
            <NavItem icon={<FileCode size={18} />} label="Skills" href="/skills" isActive={location.pathname === '/skills'} />
            <NavItem icon={<Award size={18} />} label="Patents" href="/patents" isActive={location.pathname === '/patents'} />
          </nav>

          {/* Social Links */}
          <div className="hidden md:flex items-center gap-2">
            <SocialLink href="https://github.com/finefigo" icon={<Github size={18} />} />
            <SocialLink href="https://www.linkedin.com/in/faisal-imtiaz-b77119292" icon={<Linkedin size={18} />} />
            <SocialLink href="mailto:imtiazfaisal2005@gmail.com" icon={<Mail size={18} />} />
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white dark:bg-gray-950 pt-20 animate-fade-in">
          <nav className="container mx-auto px-4 flex flex-col gap-4">
            <NavItem icon={<Home size={18} />} label="Home" href="/" isActive={location.pathname === '/'} />
            <NavItem icon={<User size={18} />} label="About" href="/about" isActive={location.pathname === '/about'} />
            <NavItem icon={<Code2 size={18} />} label="Projects" href="/projects" isActive={location.pathname === '/projects'} />
            <NavItem icon={<FileCode size={18} />} label="Skills" href="/skills" isActive={location.pathname === '/skills'} />
            <NavItem icon={<Award size={18} />} label="Patents" href="/patents" isActive={location.pathname === '/patents'} />
            
            <div className="mt-6 flex flex-col gap-4">
              <SocialLink href="https://github.com/finefigo" icon={<Github size={20} />} label="GitHub" />
              <SocialLink href="https://www.linkedin.com/in/faisal-imtiaz-b77119292" icon={<Linkedin size={20} />} label="LinkedIn" />
              <SocialLink href="mailto:imtiazfaisal2005@gmail.com" icon={<Mail size={20} />} label="imtiazfaisal2005@gmail.com" />
            </div>
          </nav>
        </div>
      )}

      <main className="flex-1 pt-24">
        {children}
      </main>

      <footer className="py-8 border-t bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-muted-foreground text-sm">
                &copy; {new Date().getFullYear()} Faisal Imtiaz. All rights reserved.
              </p>
              <p className="text-muted-foreground/80 text-xs mt-1">
                2nd-year engineering student at JIS College of Engineering
              </p>
            </div>
            <div className="flex items-center gap-4">
              <SocialLink href="https://github.com/finefigo" icon={<Github size={18} />} />
              <SocialLink href="https://www.linkedin.com/in/faisal-imtiaz-b77119292" icon={<Linkedin size={18} />} />
              <SocialLink href="mailto:imtiazfaisal2005@gmail.com" icon={<Mail size={18} />} />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

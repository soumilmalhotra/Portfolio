import React, { useEffect } from 'react';
import Header from '../components/common/Header';
import HeroSection from '../components/hero/HeroSection';
import ProjectsSection from '../components/projects/ProjectsSection';
import SkillsSection from '../components/skills/SkillsSection';
import ContactSection from '../components/contact/ContactSection';

export default function Portfolio() {
  useEffect(() => {
    // Smooth scrolling behavior for the page
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p className="text-slate-400 text-lg mb-4">
              Built with passion using React and modern web technologies
            </p>
            <p className="text-slate-500">
              © 2024 Developer Portfolio. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
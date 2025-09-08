import React, { useEffect } from 'react';
import Header from '../components/common/Header';
import HeroSection from '../components/hero/HeroSection';
import ProjectsSection from '../components/projects/ProjectsSection';
import SkillsSection from '../components/skills/SkillsSection';
import ContactSection from '../components/contact/ContactSection';

export default function Portfolio() {
  useEffect(() => {
    // Smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
   <div className="flex flex-col min-h-screen w-full bg-slate-900 overflow-x-hidden">
  <Header />
  <main className="w-full">
    <HeroSection />
    <ProjectsSection />
    <SkillsSection />
    <ContactSection />
  </main>
  <footer className="w-full bg-slate-900 border-t border-slate-800 py-12">
    <div className="w-full px-6 max-w-7xl mx-auto">
      ...
    </div>
  </footer>
</div>

  );
}

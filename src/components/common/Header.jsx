import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Code2 } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isScrolled && (
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed top-4 left-0 right-0 w-full z-50"
        >
          <div className="bg-slate-800/50 backdrop-blur-lg border border-slate-700/50 rounded-full px-6 py-3 flex items-center justify-between shadow-2xl shadow-black/30 w-[95%] max-w-3xl mx-auto">
            <a href="#" onClick={(e) => scrollToSection(e, '#')} className="flex items-center gap-2">
              <Code2 className="text-blue-400 w-6 h-6" />
              <span className="text-lg font-bold text-white">Developer</span>
            </a>
            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="text-slate-300 hover:text-white transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
            </nav>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="hidden md:inline-block bg-blue-600/80 hover:bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300"
            >
              Get in Touch
            </a>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
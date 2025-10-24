import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
    setMenuOpen(false); // Close menu after navigating
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
          <div className="bg-slate-800/50 backdrop-blur-lg border border-slate-700/50 rounded-full px-6 py-3 flex items-center justify-between shadow-2xl shadow-black/30 w-[95%] max-w-3xl mx-auto relative">
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => scrollToSection(e, '#')}
              className="flex items-center gap-2"
            >
              <Code2 className="text-blue-400 w-6 h-6" />
              <span className="text-lg font-bold text-white">Soumil Malhotra</span>
            </a>

            {/* Desktop Nav */}
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

            {/* Desktop CTA Button */}
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="hidden md:inline-block bg-blue-600/80 hover:bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300"
            >
              Get in Touch
            </a>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-slate-300 hover:text-white transition-colors duration-200"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Mobile Dropdown Menu */}
            <AnimatePresence>
              {menuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="absolute top-14 right-4 bg-slate-800/90 border border-slate-700/50 backdrop-blur-md rounded-2xl shadow-xl flex flex-col w-48 p-4 space-y-3"
                >
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => scrollToSection(e, item.href)}
                      className="text-slate-200 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {item.name}
                    </a>
                  ))}
                  <a
                    href="#contact"
                    onClick={(e) => scrollToSection(e, '#contact')}
                    className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg px-3 py-2 text-center"
                  >
                    Get in Touch
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
}

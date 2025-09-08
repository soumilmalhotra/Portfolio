
import React, { useState, useEffect } from 'react';
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen w-full bg-slate-900 relative overflow-hidden">

      {/* Interactive Background */}
      <div
        className="pointer-events-none absolute -inset-px transition duration-300"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
        }}
      />
      
      <div className="relative z-10 w-full px-6 flex items-center justify-center min-h-screen">

        <div className="text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 px-4 py-2 text-sm font-medium">
                Available for new opportunities
              </Badge>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                AI-Powered
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 block">
                  Developer
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                I craft intelligent mobile apps and modern web experiences using cutting-edge AI technologies and clean, responsive design.
              </p>
            </div>

            {/* Key Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-3 pt-4"
            >
              {['React Native', 'OpenAI', 'Convex', 'Expo', 'JavaScript', 'UI/UX'].map((skill) => (
                <Badge key={skill} variant="outline" className="border-slate-600 text-slate-300 px-3 py-1">
                  {skill}
                </Badge>
              ))}
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
            >
              <Button
                onClick={scrollToProjects}
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-medium shadow-xl shadow-blue-500/25"
              >
                View My Work
                <ArrowDown className="ml-2 h-5 w-5" />
              </Button>
              
              <div className="flex gap-4">
                <Button variant="outline" size="icon" className="border-slate-600 hover:bg-slate-200 text-slate-400 hover:text-slate-900 transition-colors duration-300">
                  <Github className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon" className="border-slate-600 hover:bg-slate-200 text-slate-400 hover:text-slate-900 transition-colors duration-300">
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon" className="border-slate-600 hover:bg-slate-200 text-slate-400 hover:text-slate-900 transition-colors duration-300">
                  <Mail className="h-5 w-5" />
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-1/4 right-10 w-24 h-24 bg-cyan-500/10 rounded-full blur-xl animate-pulse delay-1000" />
    </section>
  );
}

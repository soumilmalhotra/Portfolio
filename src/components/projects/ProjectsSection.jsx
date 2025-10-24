import React from 'react';
import ProjectCard from './ProjectCard';
import { motion } from "framer-motion";

export default function ProjectsSection() {
  const projects = [
    {
      name: "AI Diet Planner",
      description: "A cross-platform mobile application that generates personalized diet plans using AI technology, featuring real-time backend synchronization and an intuitive user interface.",
      features: [
        "AI-powered personalized diet recommendations",
        "Real-time data synchronization across devices", 
        "Clean, intuitive mobile interface",
        "Cross-platform compatibility (iOS & Android)"
      ],
      technologies: ["React Native", "Expo", "Convex", "OpenAI", "JavaScript"],
      type: "Mobile Application",
      color: "bg-gradient-to-r from-green-500 to-emerald-600",
      href: "https://github.com/soumilmalhotra/ai-diet-planner"
    },
    {
      name: "Amazon Clone",
      description: "A comprehensive front-end replica of Amazon's e-commerce platform, showcasing advanced UI components, product management, and shopping cart functionality.",
      features: [
        "Dynamic product listings and categories",
        "Interactive shopping cart interface",
        "Responsive navigation system",
        "Modern e-commerce UI patterns"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      type: "Web Application",
      color: "bg-gradient-to-r from-orange-500 to-yellow-600",
      href: "https://github.com/soumilmalhotra/AmazonProjectNew"
    },
    {
      name: "YouTube Clone",
      description: "A pixel-perfect recreation of YouTube's homepage featuring responsive design, video thumbnails, and modern web development practices.",
      features: [
        "Responsive video grid layout",
        "Interactive sidebar navigation", 
        "Clean, modern UI design",
        "Mobile-optimized interface"
      ],
      technologies: ["HTML5", "CSS3", "Flexbox", "Grid Layout"],
      type: "Frontend Showcase", 
      color: "bg-gradient-to-r from-red-500 to-pink-600",
      href: "https://github.com/soumilmalhotra/AmazonProjectNew"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            A showcase of my latest work in AI-powered applications, modern web development, 
            and responsive user interface design.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} href={project.href} />
          ))}
        </div>
      </div>
    </section>
  );
}
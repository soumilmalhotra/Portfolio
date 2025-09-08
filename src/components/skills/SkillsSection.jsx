import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Smartphone, Code, Palette, Zap } from "lucide-react";
import { motion } from "framer-motion";
import TechScroller from './TechScroller';

export default function SkillsSection() {
  const skillCategories = [
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Building native-quality mobile apps for iOS and Android"
    },
    {
      icon: Zap,
      title: "Backend & AI",
      description: "Integrating AI and real-time backend services"
    },
    {
      icon: Code,
      title: "Frontend Development",
      description: "Creating modern, responsive web interfaces"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Designing intuitive and engaging user experiences"
    }
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-900 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technical Expertise
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            A comprehensive skill set spanning mobile development, AI integration, 
            and modern web technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-white/5 backdrop-blur-sm border-slate-700/50 hover:border-blue-500/30 transition-all duration-300 group hover:shadow-xl">
                <CardHeader className="text-center items-center pb-4">
                  <div className="w-16 h-16 mb-4 rounded-2xl bg-slate-800 p-4 group-hover:scale-110 group-hover:bg-slate-700/50 transition-all duration-300 border border-slate-700">
                    <category.icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <CardTitle className="text-xl font-bold text-white mb-2">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-400 text-center">
                    {category.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Core Technologies</h3>
        </motion.div>
        
        <TechScroller />
      </div>
    </section>
  );
}
import React from 'react';
import { Card, CardContent, CardHeader } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="h-full"
    >
      <Card className="h-full bg-white/5 backdrop-blur-sm border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 group hover:shadow-2xl hover:shadow-blue-500/10">
        <CardHeader className="pb-4">
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                {project.name}
              </h3>
              <p className="text-slate-400 text-base leading-relaxed">
                {project.description}
              </p>
            </div>
            <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
              <Button size="icon" variant="ghost" className="text-slate-400 hover:text-white hover:bg-slate-800">
                <Github className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" className="text-slate-400 hover:text-white hover:bg-slate-800">
                <ExternalLink className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        
        <CardContent>
          <div className="space-y-6">
            {/* Key Features */}
            <div>
              <h4 className="text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wider">
                Key Features
              </h4>
              <ul className="space-y-2">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="text-slate-400 flex items-start">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wider">
                Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <Badge key={idx} className={`${project.color} text-white border-0 px-3 py-1`}>
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Project Type */}
            <div className="pt-4 border-t border-slate-700/50">
              <Badge variant="outline" className="border-slate-600 text-slate-300">
                {project.type}
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
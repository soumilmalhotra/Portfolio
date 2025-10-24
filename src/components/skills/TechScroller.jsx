import React from 'react';
import { motion } from 'framer-motion';

export default function TechScroller() {
  const technologies = [
    { name: 'React Native', logo: '/logos/reactnative.svg' },
    { name: 'Expo', logo: '/logos/expo.svg' },
    { name: 'JavaScript', logo: '/logos/javascript.svg' },
    { name: 'OpenAI', logo: '/logos/openai.svg' },
    { name: 'Convex', logo: '/logos/convex.svg' },
    { name: 'HTML5', logo: '/logos/html5.svg' },
    { name: 'CSS3', logo: '/logos/css3.svg' },
    { name: 'Responsive Design', logo: '/logos/responsive.svg' },
    { name: 'Tailwind CSS', logo: '/logos/tailwind.svg' },
    { name: 'Git', logo: '/logos/git.svg' },
    { name: 'Figma', logo: '/logos/figma.svg' },
    { name: 'VS Code', logo: '/logos/vscode.svg' },
    { name: 'Docker', logo: '/logos/docker.svg' },
    { name: 'Postgresql', logo: '/logos/postgresql.svg' },
    
  ];

  // Offset for last scroller to avoid duplication
  const offsetTechnologies = [...technologies.slice(5), ...technologies.slice(0, 5)];
  const extendedTechnologies = [...technologies, ...technologies];
  const extendedOffsetTechnologies = [...offsetTechnologies, ...offsetTechnologies];

  const Scroller = ({ direction = 'left', techList, speed = 40 }) => (
    <div className="relative w-full overflow-hidden py-4">
      <style jsx>{`
        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes scrollRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .scroll-left {
          animation: scrollLeft ${speed}s linear infinite;
        }
        .scroll-right {
          animation: scrollRight ${speed}s linear infinite;
        }
        .group:hover .scroll-left,
        .group:hover .scroll-right {
          animation-play-state: paused;
        }
      `}</style>

      <motion.div
        className={`flex gap-6 items-center ${
          direction === 'left' ? 'scroll-left' : 'scroll-right'
        }`}
        initial={{ x: 0 }}
      >
        {techList.map((tech, i) => (
          <div
            key={i}
            className="flex items-center gap-2 px-4 py-2 border border-slate-700 rounded-xl 
                       bg-slate-800/60 shadow-md hover:shadow-lg transition-transform hover:scale-105 
                       w-auto whitespace-nowrap"
          >
            <img
              src={tech.logo}
              alt={tech.name}
              className="w-7 h-7 object-contain flex-shrink-0"
            />
            <span className="text-white text-sm font-medium">{tech.name}</span>
          </div>
        ))}
      </motion.div>

      {/* gradient fade on sides */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-900 to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-900 to-transparent z-10"></div>
    </div>
  );

  return (
    <div className="flex flex-col gap-4 mt-16 group">
      <Scroller direction="left" techList={extendedTechnologies} speed={35} />
      <Scroller direction="right" techList={extendedTechnologies} speed={40} />
      <Scroller direction="left" techList={extendedOffsetTechnologies} speed={45} />
    </div>
  );
}

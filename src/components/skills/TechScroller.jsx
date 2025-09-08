import React from 'react';
import { motion } from 'framer-motion';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";
import { 
    Smartphone, Box, FileCode2, Bot, DatabaseZap, FileCode, Palette, Wind, GitBranch, DraftingCompass, TabletSmartphone
} from "lucide-react";

export default function TechScroller() {
    const technologies = [
        { name: 'React Native', Icon: Smartphone, color: "#61DAFB" },
        { name: 'Expo', Icon: Box, color: "#FFFFFF" },
        { name: 'JavaScript', Icon: FileCode2, color: "#F7DF1E" },
        { name: 'OpenAI', Icon: Bot, color: "#41A58F" },
        { name: 'Convex', Icon: DatabaseZap, color: "#A386F1" },
        { name: 'HTML5', Icon: FileCode, color: "#E34F26" },
        { name: 'CSS3', Icon: Palette, color: "#1572B6" },
        { name: 'Responsive Design', Icon: TabletSmartphone, color: "#93c5fd" },
        { name: 'Tailwind CSS', Icon: Wind, color: "#06B6D4" },
        { name: 'Git', Icon: GitBranch, color: "#F05032" },
        { name: 'Figma', Icon: DraftingCompass, color: "#F24E1E" },
    ];

    const extendedTechnologies = [...technologies, ...technologies];

    return (
        <div className="relative w-full overflow-hidden mt-16 group">
            <style jsx>{`
                .animate-scroll {
                    animation: scroll 40s linear infinite;
                }
                @keyframes scroll {
                    from { transform: translateX(0); }
                    to { transform: translateX(-50%); }
                }
                .group:hover .animate-scroll {
                    animation-play-state: paused;
                }
            `}</style>
            <motion.div
                className="flex gap-12 animate-scroll items-center"
                initial={{ x: 0 }}
            >
                {extendedTechnologies.map((tech, index) => (
                    <TooltipProvider key={index} delayDuration={100}>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center transition-transform duration-300 hover:scale-125 cursor-pointer">
                                    <tech.Icon style={{ color: tech.color }} className="w-10 h-10" />
                                </div>
                            </TooltipTrigger>
                            <TooltipContent className="bg-slate-800 text-white border-slate-600">
                                <p>{tech.name}</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                ))}
            </motion.div>
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-900 to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-900 to-transparent z-10"></div>
        </div>
    );
}
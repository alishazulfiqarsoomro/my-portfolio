import React, { useState } from 'react';
import { FaFolder, FaGithub, FaExternalLinkAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Gemini AI Clone',
      desc: "A smart conversational clone application utilizing Google's generative AI context. Features component-based rendering, history logic, and full mobile optimization.",
      tech: ['React.js', 'Tailwind CSS', 'Gemini API'],
      github: 'https://github.com/alishazulfiqarsoomro',
      demo: '', 
    },
    {
      id: 2,
      title: 'Weather Application',
      desc: 'Real-time weather query application. Integrates weather data APIs, dynamically changing UI gradients based on local conditions.',
      tech: ['JavaScript', 'Rest API', 'CSS3 Flexbox'],
      github: 'https://github.com/alishazulfiqarsoomro',
      demo: '', 
    },
    {
      id: 3,
      title: 'Task Management System',
      desc: 'A full-stack MERN application for managing team tasks, deadlines, and project statuses in real-time.',
      tech: ['MongoDB', 'Express', 'React', 'Node.js'],
      github: 'https://github.com/alishazulfiqarsoomro',
      demo: '',
    },
    {
      id: 4,
      title: 'Agency AI Landing Page',
      desc: 'A modern landing page designed with structural React components and fully responsive layout with Tailwind CSS.',
      tech: ['React.js', 'Vite', 'Tailwind CSS'],
      github: 'https://github.com/alishazulfiqarsoomro',
      demo: '',
    }
  ];

  // Shuru mein kitne projects dikhane hain (Default: 2)
  const INITIAL_VISIBLE_COUNT = 2;
  
  // State tracking ke liye ke user ne saare projects dekhne hain ya nahi
  const [showAll, setShowAll] = useState(false);

  // Agar showAll true hai toh saare dikhao, nahi toh sirf shuru ke 2 dikhao
  const visibleProjects = showAll ? projects : projects.slice(0, INITIAL_VISIBLE_COUNT);
  
  // Baki bache hue projects ka number calculate karne ke liye
  const remainingCount = projects.length - INITIAL_VISIBLE_COUNT;

  return (
    // FIXED: py-28 se badal kar py-16 kiya taaki layout spacing compact ho jaye
    <section id="projects" className="py-16 px-6 max-w-6xl mx-auto bg-[#0f172a] text-slate-200 scroll-mt-16 relative overflow-hidden">
      
      {/* Background Subtle Ambient Glow */}
      <div className="absolute -bottom-10 left-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none -z-10"></div>

      {/* FIXED: space-y-16 se space-y-10 kiya taaki component rows ka gap normal ho jaye */}
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* VIP Section Header */}
        <div className="flex items-center gap-4">
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-wide">
            Featured <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="h-[2px] bg-gradient-to-r from-indigo-500/50 to-transparent flex-grow"></div>
        </div>

        {/* Projects Grid Card Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {visibleProjects.map(({ id, title, desc, tech, github, demo }) => (
            <div 
              key={id} 
              className="bg-gradient-to-b from-[#1e293b]/60 to-[#0f172a]/20 border border-slate-800/80 rounded-2xl overflow-hidden flex flex-col hover:border-slate-700/60 hover:-translate-y-1.5 transition-all duration-300 group shadow-xl"
            >
              {/* FIXED: Card padding p-6 ki hai taaki boxes sharp aur clean lagein */}
              <div className="p-6 space-y-4 flex-grow">
                
                {/* Top Row Action Icons */}
                <div className="flex justify-between items-center">
                  <div className="p-2.5 bg-indigo-500/10 rounded-xl text-indigo-400 border border-indigo-500/20 group-hover:scale-105 transition-transform duration-300">
                    <FaFolder className="text-xl" />
                  </div>
                  
                  <div className="flex items-center gap-4 text-slate-400 text-xl">
                    <a 
                      href={github} 
                      target="_blank" 
                      rel="noreferrer" 
                      aria-label="View Code Source"
                      className="hover:text-white hover:scale-110 transition-all duration-200"
                    >
                      <FaGithub />
                    </a>
                    
                    {demo && (
                      <a 
                        href={demo} 
                        target="_blank" 
                        rel="noreferrer" 
                        aria-label="View Live Demo"
                        className="hover:text-cyan-400 hover:scale-110 transition-all duration-200"
                      >
                        <FaExternalLinkAlt className="text-sm" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Information */}
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-indigo-300 transition-colors duration-200">
                    {title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-normal">
                    {desc}
                  </p>
                </div>
              </div>

              {/* Technologies Badge Footprint */}
              <div className="px-6 pb-5 pt-1 flex flex-wrap gap-2">
                {tech.map((t) => (
                  <span 
                    key={t} 
                    className="text-[10px] font-mono font-medium text-indigo-300/90 bg-indigo-500/5 border border-indigo-500/10 px-2 py-0.5 rounded-md"
                  >
                    {t}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* SMART DYNAMIC BUTTON */}
        {projects.length > INITIAL_VISIBLE_COUNT && (
          <div className="flex justify-center pt-2">
            <button
              onClick={() => setShowAll(!showAll)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-indigo-500/20 active:scale-95 transition-all duration-200 border border-indigo-400/20 group"
            >
              {showAll ? (
                <>
                  Show Less
                  <FaChevronUp className="text-xs group-hover:-translate-y-0.5 transition-transform" />
                </>
              ) : (
                <>
                  View More ({remainingCount})
                  <FaChevronDown className="text-xs group-hover:translate-y-0.5 transition-transform" />
                </>
              )}
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default Projects;
import React from 'react';
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaBootstrap, FaGitAlt, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress } from 'react-icons/si';

const Skills = () => {
  // Main Focus: Frontend
  const frontendSkills = [
    { id: 1, icon: <FaReact />, text: 'React.js', color: 'group-hover:text-sky-400' },
    { id: 2, icon: <FaJs />, text: 'JavaScript (ES6+)', color: 'group-hover:text-yellow-400' },
    { id: 3, icon: <SiTailwindcss />, text: 'Tailwind CSS', color: 'group-hover:text-teal-400' },
    { id: 4, icon: <FaHtml5 />, text: 'HTML5', color: 'group-hover:text-orange-500' },
    { id: 5, icon: <FaCss3Alt />, text: 'CSS3', color: 'group-hover:text-blue-500' },
    { id: 6, icon: <FaBootstrap />, text: 'Bootstrap', color: 'group-hover:text-purple-500' },
  ];

  // Secondary Support: Full Stack Exposure
  const complementarySkills = [
    { id: 7, icon: <FaNodeJs />, text: 'Node.js Basics', color: 'group-hover:text-green-500' },
    { id: 8, icon: <SiMongodb />, text: 'MongoDB Architecture', color: 'group-hover:text-emerald-500' },
    { id: 9, icon: <FaGitAlt />, text: 'Git / GitHub', color: 'group-hover:text-orange-600' },
    { id: 10, icon: <SiExpress />, text: 'Express.js', color: 'group-hover:text-white' }
  ];

  return (
    <section id="skills" className="py-28 bg-[#0f172a] px-6 scroll-mt-16 text-slate-200 relative overflow-hidden">
      
      {/* Ambient Radial Background Glow */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* VIP Section Header */}
        <div className="flex items-center gap-4">
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-wide">
            Technical <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="h-[2px] bg-gradient-to-r from-indigo-500/50 to-transparent flex-grow"></div>
        </div>

        {/* PRIMARY: FRONTEND EXPERTISE */}
        <div className="space-y-6">
          <h3 className="text-sm font-bold text-slate-400 font-mono tracking-widest uppercase flex items-center gap-2">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
            Primary Expertise (Frontend)
          </h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {frontendSkills.map(({ id, icon, text, color }) => (
              <div 
                key={id} 
                className="bg-gradient-to-b from-[#1e293b]/50 to-[#0f172a]/20 border border-slate-800/80 p-6 rounded-2xl flex flex-col items-center justify-center text-center gap-4 hover:border-slate-700/60 hover:bg-[#1e293b]/40 hover:-translate-y-1 transition-all duration-300 group shadow-md"
              >
                <div className={`text-4xl text-slate-400 transition-all duration-300 transform group-hover:scale-110 ${color}`}>
                  {icon}
                </div>
                <span className="text-xs font-semibold text-slate-400 group-hover:text-white transition-colors duration-200 tracking-wide">
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* SECONDARY: FULL-STACK AWARENESS */}
        <div className="space-y-6">
          <h3 className="text-sm font-bold text-slate-400 font-mono tracking-widest uppercase flex items-center gap-2">
            <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></span>
            Full-Stack & Workflow Awareness
          </h3>
          
          {/* Changed grid layout columns structure for balanced element distribution */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {complementarySkills.map(({ id, icon, text, color }) => (
              <div 
                key={id} 
                className="bg-gradient-to-b from-[#1e293b]/50 to-[#0f172a]/20 border border-slate-800/80 p-6 rounded-2xl flex flex-col items-center justify-center text-center gap-4 hover:border-slate-700/60 hover:bg-[#1e293b]/40 hover:-translate-y-1 transition-all duration-300 group shadow-md"
              >
                <div className={`text-4xl text-slate-400 transition-all duration-300 transform group-hover:scale-110 ${color}`}>
                  {icon}
                </div>
                <span className="text-xs font-semibold text-slate-400 group-hover:text-white transition-colors duration-200 tracking-wide">
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
import React, { useState } from 'react';
import { FaTimes, FaPlay, FaVideo, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const ProjectGallery = () => {
  // Video Popup Modal open karne aur active tracking ke liye states
  const [isOpen, setIsOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);
  
  // Section expand karne ke liye state (Pehle 6 cards dikhane ke liye)
  const [showAll, setShowAll] = useState(false);

  // 12 Projects Configuration Array - VIP Clean Titles & Technical Descriptions
  const projectGallery = [
    {
      id: 1,
      title: "OneCart E-Commerce",
      category: "Full Stack MERN",
      description: "A premium digital shopping application integrated with Firebase Auth, secure Stripe payment gateway, and a real-time analytics dashboard for dynamic store management.",
      coverImage: "/assets/OneCartSS.GIF", 
      videoUrl: "/assets/OneCartVideo.mp4" 
    },
    {
      id: 2,
      title: "NexusAdmin Dashboard",
      category: "Frontend UI/UX",
      description: "A production-ready glassmorphism administrative interface featuring customizable data charts, smooth Framer Motion animations, and deep dark theme integration.",
      coverImage: "/assets/NexusSS.GIF",
      videoUrl: "/assets/Nexusvideo.mp4"
    },
    {
      id: 3,
      title: "Gemini AI Clone",
      category: "AI Integration",
      description: "An advanced conversational interface powered by Google Gemini API, featuring streaming chat responses, historical context processing, and modular layouts.",
      coverImage: "/assets/GeminiSS.GIF",
      videoUrl: "/assets/GeminiVideo.mp4"
    },
    {
      id: 4,
      title: "Agency.ai",
      category: "Web Application",
      description: "A high-performance SaaS landing page built for AI agents automation pipelines, featuring modern interactive hover states and highly responsive grid designs.",
      coverImage: "/public/assets/agency.GIF", 
      videoUrl: "/assets/angency.ai.mp4"
    },
    {
      id: 5,
      title: "Cara Apparel Store",
      category: "Web Application",
      description: "An elegant fashion retail interface displaying fluid product filtering, custom interactive shopping carts, and pixel-perfect responsiveness across all viewpoints.",
      coverImage: "/assets/CaraSS.GIF",
      videoUrl: "/assets/Cara.mp4"
    },
    {
      id: 6,
      title: "Apex Sports Hub",
      category: "Frontend Architecture",
      description: "A dynamic sports broadcasting portal equipped with sleek match schedules, structured team standings tables, and modern tailwind gradient components.",
      coverImage: "/assets/SportsSS.GIF",
      videoUrl: "/assets/Sports.mp4"
    },
    {
      id: 7,
      title: "KFC Digital Outlet",
      category: "web Application",
      description: "A modern continuous food delivery portal replica showcasing modular menu layouts, persistent cart mechanics, and a customized instant checkout workflow.",
      coverImage: "/assets/KFC.GIF",
      videoUrl: "/assets/KFCV.mp4"
    },
    {
      id: 8,
      title: "Feane Fast Food",
      category: "UI Responsive Design",
      description: "A premium restaurant interface focusing on interactive menu carousels, responsive table reservation forms, and smooth scrolling experiences.",
      coverImage: "/assets/Feane.GIF",
      videoUrl: "/assets/FeaneV.mp4"
    },
    {
      id: 9,
      title: "Elite Dev Portfolio",
      category: "Personal Brand UI",
      description: "My personal engineering portfolio designed with interactive terminal elements, background canvas technical mesh glows, and unified modern tech layouts.",
      coverImage: "/assets/Portfolio.GIF",
      videoUrl: "/assets/portfoilo.mp4"
    },
    {
      id: 10,
      title: "Minimalist Portfolio",
      category: "Creative Presentation",
      description: "A highly intuitive, clean developer showcase focusing on structural typography, accessible performance benchmarks, and streamlined project previews.",
      coverImage: "/assets/Alisha.GIF",
      videoUrl: "/assets/alisha.mp4"
    },
    {
      id: 11,
      title: "The Shoe Company",
      category: "E-Commerce Frontend",
      description: "An immersive footwear storefront prioritizing large fluid image modals, dynamic size selector triggers, and advanced interactive product galleries.",
      coverImage: "/assets/Shoes.GIF",
      videoUrl: "/assets/shoe.mp4"
    },
    {
      id: 12,
      title: "Rubi Luxury Commerce",
      category: "Web Applications",
      description: "A boutique web platform optimized for fast loading benchmarks, integrated with modular custom context state providers for smooth item management.",
      coverImage: "/assets/Rubi.GIF",
      videoUrl: "/assets/rubi.mp4"
    }
  ];

  const openModal = (project) => {
    setCurrentProject(project);
    setIsOpen(true);
  };

  const visibleProjects = showAll ? projectGallery : projectGallery.slice(0, 6);

  return (
    <section id="gallery" className="py-24 bg-[#0f172a] px-4 sm:px-6 scroll-mt-16 text-slate-200 relative overflow-hidden border-b border-slate-900">
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-gradient-to-br from-cyan-500/5 to-indigo-500/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4">
          <p className="text-cyan-400 font-mono tracking-widest text-xs uppercase bg-cyan-500/5 border border-cyan-500/10 px-4 py-1.5 rounded-full inline-block">
            Project Showcase
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Project <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">Gallery</span>
          </h2>
          <div className="h-[2px] w-16 bg-gradient-to-r from-cyan-400 to-indigo-500 mx-auto my-3 rounded-full"></div>
          <p className="max-w-xl mx-auto text-slate-400 text-base font-normal">
            Click on any project card or the video link below to watch the live high-definition walkthrough.
          </p>
        </div>

        {/* 3 Cards Per Row Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500">
          {visibleProjects.map((project) => (
            <div 
              key={project.id} 
              onClick={() => openModal(project)}
              className="group relative rounded-2xl bg-gradient-to-b from-[#1e293b]/60 to-[#151f32]/20 border border-slate-800/60 overflow-hidden shadow-2xl backdrop-blur-sm hover:border-slate-700/80 transition-all duration-300 flex flex-col cursor-pointer"
            >
              {/* Media Preview: Project Pic */}
              <div className="aspect-video w-full overflow-hidden bg-slate-950/80 relative border-b border-slate-800/80 flex items-center justify-center">
                <img 
                  src={project.coverImage} 
                  alt={project.title} 
                  className="w-full h-full object-contain p-2 transform group-hover:scale-102 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/40 transition-colors duration-300 pointer-events-none"></div>
              </div>

              {/* Text Description Box */}
              <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-500/5 border border-cyan-500/10 px-2.5 py-1 rounded">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-white tracking-wide pt-1 line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Premium Action Link */}
                <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs font-mono font-medium text-slate-400 group-hover:text-cyan-400 transition-colors duration-200">
                  <div className="flex items-center gap-1.5">
                    <FaVideo className="text-xs opacity-60 group-hover:text-cyan-400" />
                    <span>Watch Demo</span>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all duration-300">
                    <FaPlay className="ml-0.5 text-[9px]" />
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* View More / Show Less Button Section */}
        <div className="text-center pt-4">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 hover:from-cyan-500/20 hover:to-indigo-500/20 border border-cyan-500/20 hover:border-cyan-500/40 text-sm font-mono font-medium text-cyan-400 hover:text-white transition-all duration-300 shadow-lg shadow-cyan-950/20 active:scale-95"
          >
            <span>{showAll ? "Show Less Projects" : "View More Projects"}</span>
            {showAll ? <FaChevronUp className="text-xs" /> : <FaChevronDown className="text-xs" />}
          </button>
        </div>

      </div>

      {/* ============================================================== */}
      {/* POPUP VIDEO MODAL */}
      {/* ============================================================== */}
      {isOpen && currentProject && (
        <div 
          className="fixed inset-0 bg-slate-950/95 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-6"
          onClick={() => setIsOpen(false)}
        >
          <button 
            className="absolute top-6 right-6 text-slate-400 hover:text-white bg-slate-900 border border-slate-800 p-3 rounded-full transition-all z-50 hover:scale-110"
            onClick={() => setIsOpen(false)}
          >
            <FaTimes size={20} />
          </button>

          <div 
            className="w-full max-w-4xl bg-[#131c2e] border border-slate-800 rounded-2xl overflow-hidden shadow-2xl relative flex flex-col md:flex-row max-h-[90vh] md:max-h-none"
            onClick={(e) => e.stopPropagation()} 
          >
            {/* Left Side: Video Player */}
            <div className="w-full md:w-2/3 bg-slate-950 flex items-center justify-center aspect-video md:aspect-auto md:h-[480px]">
              <video 
                src={currentProject.videoUrl} 
                controls 
                autoPlay 
                className="w-full h-full object-contain"
              >
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Right Side: Info Sidebar */}
            <div className="w-full md:w-1/3 p-6 sm:p-8 flex flex-col justify-between bg-[#131c2e] border-t md:border-t-0 md:border-l border-slate-800">
              <div className="space-y-4">
                <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-500/5 border border-cyan-500/10 px-2.5 py-1 rounded inline-block">
                  {currentProject.category}
                </span>
                <h3 className="text-2xl font-black text-white tracking-wide">
                  {currentProject.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {currentProject.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/60 font-mono text-[11px] text-slate-500">
                <p>💡 Hint: Use player controls to expand video frame sizing configurations.</p>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectGallery;
import React from 'react';
import { FaArrowUp, FaHeart } from 'react-icons/fa';

const Footer = () => {
  // Smooth scroll handler back to top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative bg-[#0f172a] border-t border-slate-800/60 py-12 px-6 overflow-hidden">
      
      {/* Visual Accent Top Line Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent"></div>

      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
        
        {/* Left Side: Modern Copyright Structure */}
        <div className="text-center sm:text-left space-y-1">
          <p className="text-xs sm:text-sm font-semibold text-slate-400 tracking-wide">
            © {new Date().getFullYear()} <span className="text-white font-bold">Alisha Zulfiqar Ali</span>.
          </p>
          <p className="text-[11px] font-mono text-slate-500 flex items-center justify-center sm:justify-start gap-1">
            Built with 
            <span className="text-sky-400 font-medium">React</span> 
            & 
            <span className="text-teal-400 font-medium">Tailwind CSS</span>
            <span className="inline-flex items-center text-red-500/70 mx-0.5 animate-pulse"><FaHeart className="text-[9px]" /></span>
          </p>
        </div>

        {/* Right Side: VIP Interactive Back To Top Action */}
        <div>
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="group inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-900/80 border border-slate-800 hover:border-indigo-500/40 text-slate-400 hover:text-white text-xs font-mono font-medium rounded-xl transition-all duration-300 shadow-md hover:shadow-indigo-500/5 active:scale-95"
          >
            <span>Back to top</span>
            <FaArrowUp className="text-[10px] transform group-hover:-translate-y-1 transition-transform duration-300 ease-out text-indigo-400" />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
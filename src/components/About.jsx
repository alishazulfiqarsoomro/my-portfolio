import React, { useState } from 'react';
import { FaGraduationCap, FaCertificate, FaDownload, FaEye, FaTimes } from 'react-icons/fa';
import MyProfilePic from '../assets/profile.jpg'; 
import MyResume from '../assets/Alisha_Zulfiqar_Resume.pdf'; 

// Certificates ki images
import MernCertImg from '../assets/mern-certificate.jpeg'; 
import JsCertImg from '../assets/javascript-certificate.jpeg'; 

const About = () => {
  // Modal state manage karne ke liye hook
  const [activeCert, setActiveCert] = useState(null);

  // Certificates ka data array
  const certificationData = [
    {
      id: 'mern',
      title: 'MERN Full Stack Developer',
      provider: 'Skills Education | Grade A+',
      imgSrc: MernCertImg,
    },
    {
      id: 'javascript',
      title: 'ITS JavaScript Specialist',
      provider: 'Pearson VUE / Certiport',
      imgSrc: JsCertImg,
    },
  ];

  return (
    // FIX: py-28 ko pt-20 aur pb-10 se replace kiya taake niche ka extra space khatam ho jaye
    <section id="about" className="pt-20 pb-10 px-6 max-w-7xl mx-auto bg-[#0f172a] text-slate-200 scroll-mt-16 overflow-hidden relative">
      
      {/* Background Subtle Ambient Glow */}
      <div className="absolute -bottom-10 left-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none -z-10"></div>

      {/* VIP Section Header */}
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl sm:text-4xl font-black text-white tracking-wide">
          About <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Me</span>
        </h2>
        <div className="h-[2px] bg-gradient-to-r from-indigo-500/50 to-transparent flex-grow"></div>
      </div>

      {/* Main Grid: Clean 12 Columns Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* COLUMN 1: Profile Frame (Clear & Stable) */}
        <div className="lg:col-span-4 flex justify-center w-full relative group lg:sticky lg:top-24">
          <div className="absolute top-4 left-4 w-64 h-64 md:w-72 md:h-72 rounded-2xl border-2 border-indigo-500/20 -z-10 group-hover:translate-x-1.5 group-hover:translate-y-1.5 transition-transform duration-300"></div>
          <div className="absolute -top-4 -left-4 w-64 h-64 md:w-72 md:h-72 rounded-2xl bg-gradient-to-tr from-indigo-500/5 to-cyan-500/5 -z-20 blur-xl"></div>

          <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl transition-all duration-300 group-hover:border-indigo-500/40 shadow-indigo-500/5">
            <img 
              src={MyProfilePic} 
              alt="Alisha Profile" 
              className="w-full h-full object-cover transition-all duration-300 transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/40 via-transparent to-transparent"></div>
          </div>
        </div>

        {/* COLUMN 2: Software Engineering Bio Focus */}
        <div className="lg:col-span-4 space-y-6 flex flex-col justify-between bg-slate-900/50 p-6 sm:p-7 rounded-2xl border border-slate-800/60 backdrop-blur-sm shadow-xl">
          <div className="space-y-4">
            {/* Professional Badges */}
            <div className="flex flex-col gap-2">
              <span className="w-fit text-[11px] font-semibold tracking-wider uppercase px-3 py-1 bg-blue-500/10 text-blue-400 rounded-md border border-blue-500/20">
                BS Software Engineering
              </span>
              <span className="w-fit text-[11px] font-semibold tracking-wider uppercase px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-md border border-emerald-500/20">
                Certified MERN Developer
              </span>
            </div>

            {/* Main Biography */}
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              I am a <span className="text-white font-medium underline decoration-indigo-500 decoration-2 underline-offset-4">Software Engineering</span> student at the University of Sindh. While my academic foundation keeps me close to robust software practices, my core expertise is rooted in building scalable web applications.
            </p>
            
            <p className="text-slate-400 leading-relaxed text-sm">
              I specialize in developing highly responsive interfaces using <span className="text-slate-200 font-medium">React.js</span> and modern styling toolkits like <span className="text-slate-200 font-medium">Tailwind CSS</span>. My goal is to translate clean software engineering concepts into fast, smooth, and beautiful web architectures.
            </p>
          </div>
          
          {/* Availability Tracker */}
          <div className="pt-4 mt-4 border-t border-slate-800/60 flex items-center gap-2 text-xs text-slate-400 font-medium font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Ready for Frontend Internships
          </div>
        </div>

        {/* COLUMN 3: Education & Clean Certifications Card */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Education Mini Card */}
          <div className="bg-gradient-to-r from-slate-900/60 to-slate-900/30 p-4 rounded-xl border border-slate-800/80 flex items-center gap-4 hover:border-slate-700/60 transition-all">
            <div className="p-3 bg-indigo-500/10 rounded-lg text-indigo-400 border border-indigo-500/20">
              <FaGraduationCap className="text-xl" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">BS Software Engineering</h4>
              <p className="text-xs text-slate-400 mt-0.5">University of Sindh (In Progress)</p>
            </div>
          </div>

          {/* Clean Certifications Layout */}
          <div className="bg-slate-900/50 border border-slate-800/80 p-5 rounded-2xl space-y-4 backdrop-blur-sm shadow-xl">
            <div className="flex flex-col space-y-0.5">
              <h3 className="text-md font-bold text-white tracking-wide flex items-center gap-2">
                <span className="w-1 h-3.5 bg-indigo-500 rounded-full"></span>
                Professional Certifications
              </h3>
              <p className="text-[10px] font-mono text-slate-500 pl-3">Click to view certificate image</p>
            </div>
            
            <div className="space-y-3">
              {certificationData.map((cert) => (
                <button
                  key={cert.id}
                  onClick={() => setActiveCert(cert)}
                  className="w-full text-left flex items-start gap-3.5 p-3 rounded-xl bg-slate-950/20 hover:bg-slate-800/40 transition-all duration-200 group/item border border-slate-850 hover:border-slate-700 focus:outline-none"
                >
                  <div className="p-2.5 bg-indigo-500/10 rounded-lg text-indigo-400 mt-0.5 group-hover/item:scale-105 transition-transform border border-indigo-500/5">
                    <FaCertificate className="text-sm" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-semibold text-slate-200 group-hover/item:text-indigo-400 transition-colors">
                      {cert.title}
                    </p>
                    <p className="text-[11px] text-slate-400 mt-0.5">{cert.provider}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* CV Action Buttons */}
          <div className="pt-2 flex gap-3 w-full">
            <a 
              href={MyResume}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 border border-slate-800 bg-slate-900/30 hover:bg-slate-800/60 text-slate-300 hover:text-white text-xs font-semibold rounded-xl transition-all duration-200 w-1/2 group shadow-md"
            >
              <FaEye className="text-xs" />
              View CV
            </a>

            <a 
              href={MyResume} 
              download="Alisha_Zulfiqar_Resume.pdf"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-xl shadow-lg shadow-indigo-600/10 transition-all duration-200 w-1/2 group"
            >
              <FaDownload className="text-xs group-hover:translate-y-0.5 transition-transform" />
              Download CV
            </a>
          </div>

        </div>

      </div>

      {/* FULL SCREEN MODAL POPUP LAYER */}
      {activeCert && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-all duration-300"
          onClick={() => setActiveCert(null)}
        >
          <div 
            className="relative max-w-2xl w-full bg-[#1e293b] border border-slate-800 p-2 rounded-xl shadow-2xl transform transition-transform duration-300"
            onClick={(e) => e.stopPropagation()} 
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-3 py-1.5 border-b border-slate-800/60">
              <h4 className="text-xs font-bold text-slate-300 font-mono tracking-wide">{activeCert.title}</h4>
              <button 
                onClick={() => setActiveCert(null)}
                className="text-slate-400 hover:text-white p-1 rounded-md bg-slate-800/50 hover:bg-slate-700/60 transition-colors"
              >
                <FaTimes className="text-xs" />
              </button>
            </div>

            {/* Certificate Image Frame */}
            <div className="mt-2 rounded-lg overflow-hidden bg-slate-950 flex items-center justify-center max-h-[75vh]">
              <img 
                src={activeCert.imgSrc} 
                alt={`${activeCert.title} Verification`} 
                className="w-full h-full object-contain max-h-[70vh]"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;
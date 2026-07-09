import React, { useState } from 'react';
import { FaGraduationCap, FaCertificate, FaDownload, FaEye, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import MyProfilePic from '../assets/profile.jpeg'; 
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

  // Animation variants for orchestration
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 60 } }
  };

  return (
    <section id="about" className="pt-24 pb-16 px-6 max-w-7xl mx-auto bg-[#0f172a] text-slate-200 scroll-mt-16 overflow-hidden relative">
      
      {/* Background Subtle Ambient Fluid Glow */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-10 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10"
      ></motion.div>

      {/* VIP Section Header with Line Draw Simulation */}
      <div className="flex items-center gap-4 mb-16">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-black text-white tracking-wide"
        >
          About <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">Me</span>
        </motion.h2>
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="h-[1px] bg-gradient-to-r from-slate-800 via-indigo-500/40 to-transparent flex-grow origin-left"
        ></motion.div>
      </div>

      {/* Main Grid: Clean 12 Columns Layout with Staggered Entrance */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
      >
        
        {/* COLUMN 1: Profile Frame (3D Shadow Hover Effect) */}
        <motion.div 
          variants={itemVariants}
          className="lg:col-span-4 flex justify-center w-full relative group lg:sticky lg:top-28"
        >
          <div className="absolute top-4 left-4 w-64 h-64 md:w-72 md:h-72 rounded-2xl border border-cyan-500/10 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
          <div className="absolute -top-4 -left-4 w-64 h-64 md:w-72 md:h-72 rounded-2xl bg-gradient-to-tr from-cyan-500/5 to-indigo-500/5 -z-20 blur-2xl"></div>

          <motion.div 
            whileHover={{ rotateY: -5, rotateX: 5, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 150 }}
            className="relative w-64 h-64 md:w-72 md:h-72 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl shadow-slate-950/50 cursor-grab active:cursor-grabbing"
          >
            <img 
              src={MyProfilePic} 
              alt="Alisha Profile" 
              className="w-full h-full object-cover transition-all duration-500 contrast-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/60 via-transparent to-transparent"></div>
          </motion.div>
        </motion.div>

        {/* COLUMN 2: Software Engineering Bio Focus Card */}
        <motion.div 
          variants={itemVariants}
          className="lg:col-span-4 space-y-6 flex flex-col justify-between bg-gradient-to-b from-[#1e293b]/40 to-[#151f32]/10 p-6 sm:p-7 rounded-2xl border border-slate-800/60 backdrop-blur-md shadow-2xl shadow-slate-950/20"
        >
          <div className="space-y-4">
            {/* Professional Badges */}
            <div className="flex flex-col gap-2">
              <span className="w-fit text-[10px] font-semibold tracking-wider uppercase px-3 py-1 bg-cyan-500/5 text-cyan-400 rounded-md border border-cyan-500/10 font-mono">
                BS Software Engineering
              </span>
              <span className="w-fit text-[10px] font-semibold tracking-wider uppercase px-3 py-1 bg-indigo-500/5 text-indigo-400 rounded-md border border-indigo-500/10 font-mono">
                Certified MERN Developer
              </span>
            </div>

            {/* Main Biography */}
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              I am a <span className="text-white font-medium underline decoration-cyan-400 decoration-2 underline-offset-4 font-mono">Software Engineering</span> student at the University of Sindh. While my academic foundation keeps me close to robust software practices, my core expertise is rooted in building scalable web applications.
            </p>
            
            <p className="text-slate-400 leading-relaxed text-sm">
              I specialize in developing highly responsive interfaces using <span className="text-slate-200 font-medium">React.js</span> and modern styling toolkits like <span className="text-slate-200 font-medium">Tailwind CSS</span>. My goal is to translate clean software engineering concepts into fast, smooth, and beautiful web architectures.
            </p>
          </div>
          
          {/* Availability Tracker Indicator */}
          <div className="pt-4 mt-4 border-t border-slate-800/60 flex items-center gap-2 text-xs text-slate-400 font-medium font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-md shadow-emerald-500/50"></span>
            Ready for Frontend Internships
          </div>
        </motion.div>

        {/* COLUMN 3: Education & Clean Certifications Card */}
        <motion.div variants={itemVariants} className="lg:col-span-4 space-y-6">
          
          {/* Education Mini Card */}
          <motion.div 
            whileHover={{ x: 4 }}
            className="bg-gradient-to-r from-slate-900/60 to-slate-900/30 p-4 rounded-xl border border-slate-800/80 flex items-center gap-4 shadow-lg"
          >
            <div className="p-3 bg-cyan-500/5 rounded-lg text-cyan-400 border border-cyan-500/10">
              <FaGraduationCap className="text-lg" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">BS Software Engineering</h4>
              <p className="text-xs text-slate-400 mt-0.5">University of Sindh (In Progress)</p>
            </div>
          </motion.div>

          {/* Clean Certifications Layout Grid */}
          <div className="bg-[#131c2e]/40 border border-slate-800/80 p-5 rounded-2xl space-y-4 backdrop-blur-md shadow-2xl">
            <div className="flex flex-col space-y-0.5">
              <h3 className="text-sm font-bold text-white tracking-wide flex items-center gap-2">
                <span className="w-1 h-3.5 bg-cyan-400 rounded-full"></span>
                Professional Certifications
              </h3>
              <p className="text-[10px] font-mono text-slate-500 pl-3">Click to view certificate image</p>
            </div>
            
            <div className="space-y-3">
              {certificationData.map((cert) => (
                <motion.button
                  whileHover={{ x: 4, backgroundColor: "rgba(30, 41, 59, 0.4)" }}
                  whileTap={{ scale: 0.99 }}
                  key={cert.id}
                  onClick={() => setActiveCert(cert)}
                  className="w-full text-left flex items-start gap-3.5 p-3 rounded-xl bg-slate-950/20 border border-slate-900 transition-colors focus:outline-none"
                >
                  <div className="p-2.5 bg-indigo-500/5 rounded-lg text-indigo-400 mt-0.5 border border-indigo-500/10">
                    <FaCertificate className="text-xs" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-bold text-slate-200">
                      {cert.title}
                    </p>
                    <p className="text-[11px] text-slate-400 mt-0.5 font-mono">{cert.provider}</p>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* CV Action Buttons with Magnetic Scales */}
          <div className="pt-2 flex gap-3 w-full">
            <motion.a 
              whileHover={{ y: -2, backgroundColor: "rgba(30, 41, 59, 0.6)" }}
              whileTap={{ scale: 0.97 }}
              href={MyResume}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 border border-slate-800 bg-slate-900/30 text-slate-300 hover:text-white text-xs font-mono font-medium rounded-xl transition-colors w-1/2 shadow-md"
            >
              <FaEye className="text-xs" />
              View CV
            </motion.a>

            <motion.a 
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              href={MyResume} 
              download="Alisha_Zulfiqar_Resume.pdf"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white text-xs font-mono font-bold rounded-xl shadow-xl shadow-indigo-950 w-1/2"
            >
              <FaDownload className="text-xs" />
              Download CV
            </motion.a>
          </div>

        </motion.div>

      </motion.div>

      {/* FULL SCREEN MODAL POPUP LAYER WITH ANIMATE PRESENCE */}
      <AnimatePresence>
        {activeCert && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-950/95 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-6"
            onClick={() => setActiveCert(null)}
          >
            <motion.div 
              initial={{ scale: 0.92, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 15 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="relative max-w-2xl w-full bg-[#131c2e] border border-slate-800 p-2 rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()} 
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-3 py-2 border-b border-slate-800/60">
                <h4 className="text-xs font-bold text-slate-300 font-mono tracking-wide">{activeCert.title}</h4>
                <motion.button 
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setActiveCert(null)}
                  className="text-slate-400 hover:text-white p-1.5 rounded-lg bg-slate-900 border border-slate-800 transition-colors"
                >
                  <FaTimes className="text-xs" />
                </motion.button>
              </div>

              {/* Certificate Image Frame */}
              <div className="mt-2 rounded-xl overflow-hidden bg-slate-950 flex items-center justify-center max-h-[70vh]">
                <img 
                  src={activeCert.imgSrc} 
                  alt={`${activeCert.title} Verification`} 
                  className="w-full h-full object-contain max-h-[65vh]"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default About;
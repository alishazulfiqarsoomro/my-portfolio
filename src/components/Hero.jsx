import React from 'react';
import { HiArrowRight } from 'react-icons/hi';
import { motion } from 'framer-motion';
// Apni high-quality professional pic ka path yahan dein
import HeroProfilePic from '../assets/profile.jpeg'; 

const Hero = () => {
  // Staggered Container configuration for items landing sequence
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 70 } }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 pb-12 px-6 bg-[#0f172a] text-slate-200 relative overflow-hidden">
      
      {/* Background Creative Premium Ambient Glows - Animated Fluidity */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15], x: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl -z-10"
      ></motion.div>
      
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1], y: [0, -40, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl -z-10"
      ></motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl text-center space-y-6 z-10"
      >
        
        {/* Intro Subtitle with Subtle Slide Down */}
        <motion.div variants={itemVariants}>
          <p className="text-cyan-400 font-mono tracking-widest text-xs uppercase bg-cyan-500/5 border border-cyan-500/10 px-4 py-1.5 rounded-full inline-block">
            Hi, my name is
          </p>
        </motion.div>
        
        {/* VIP Name + Picture Flex Container */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 my-4"
        >
          {/* VIP Premium Color Gradient Name */}
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight order-2 sm:order-1">
            <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent bg-[length:200%_auto] hover:animate-[shine_3s_linear_infinite] transition-all">
              Alisha Zulfiqar Ali
            </span>
          </h1>
          
          {/* VIP Picture Element with Rotating Mesh Ring */}
          <div className="relative group order-1 sm:order-2 select-none">
            {/* Tech Cyber Ring Animating behind image */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full blur opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:rotate-180 ease-in-out"></div>
            
            {/* Picture Frame */}
            <motion.div 
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full p-[3px] bg-[#0f172a] border border-slate-800 shadow-2xl transition-all"
            >
              <div className="w-full h-full rounded-full overflow-hidden bg-[#1e293b]">
                <img 
                  src={HeroProfilePic} 
                  alt="Alisha Zulfiqar Ali" 
                  className="w-full h-full object-cover contrast-[1.05]"
                />
              </div>
            </motion.div>
            
            {/* Online Status Indicator (VIP Feature) */}
            <span className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-500 border-2 border-[#0f172a] rounded-full shadow-lg shadow-emerald-950"></span>
          </div>
        </motion.div>

        {/* Professional Title with Refined Premium Text Mask */}
        <motion.h2 
          variants={itemVariants}
          className="text-xl sm:text-3xl font-extrabold bg-gradient-to-r from-slate-100 via-slate-400 to-slate-100 bg-clip-text text-transparent tracking-wide font-mono"
        >
          Frontend Developer // MERN Stack Specialist 
        </motion.h2>
        
        {/* Engineering Portfolio Description */}
        <motion.p 
          variants={itemVariants}
          className="max-w-2xl mx-auto text-slate-400 text-sm sm:text-base leading-relaxed font-normal"
        >
          I specialize in building responsive, high-performance, and user-friendly web applications using <span className="text-cyan-400 font-mono">React.js</span>, the <span className="text-indigo-400 font-mono">MERN Stack</span>, and modern interactive system architectures.
        </motion.p>
        
        {/* VIP Action Buttons with Smooth Micro-interactions */}
        <motion.div 
          variants={itemVariants}
          className="pt-6 flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto"
        >
          <motion.a 
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            href="#projects" 
            className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white font-semibold rounded-xl shadow-lg shadow-indigo-950/50 text-center flex items-center justify-center gap-2 group border border-indigo-500/20 text-sm font-mono transition-all"
          >
            View My Work 
            <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
          
          <motion.a 
            whileHover={{ scale: 1.03, y: -2, backgroundColor: "rgba(30, 41, 59, 0.8)" }}
            whileTap={{ scale: 0.98 }}
            href="#contact" 
            className="w-full sm:w-auto px-8 py-3.5 border border-slate-800 bg-slate-900/40 text-slate-300 hover:text-white font-semibold rounded-xl text-center text-sm font-mono transition-all"
          >
            Let's Connect
          </motion.a>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Hero;
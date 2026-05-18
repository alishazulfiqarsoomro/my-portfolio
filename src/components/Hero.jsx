import { HiArrowRight } from 'react-icons/hi';
// Apni high-quality professional pic ka path yahan dein
import HeroProfilePic from '../assets/profile.jpg'; 

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 pb-12 px-6 bg-[#0f172a] text-slate-200 relative overflow-hidden">
      
      {/* Background Creative Premium Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10 delay-1000 animate-pulse"></div>

      <div className="max-w-5xl text-center space-y-6 z-10">
        
        {/* Intro Subtitle */}
        <p className="text-indigo-400 font-mono tracking-widest text-sm uppercase bg-indigo-500/5 border border-indigo-500/10 px-4 py-1.5 rounded-full inline-block">
          Hi, my name is
        </p>
        
        {/* VIP Name + Picture Flex Container */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 my-4">
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight ordering-2 sm:order-1">
            Alisha Zulfiqar Ali
          </h1>
          
          {/* VIP Picture Element (Name ke Aage/Sath) */}
          <div className="relative group order-1 sm:order-2 select-none">
            {/* Tech Cyber Ring Animating behind image */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full blur opacity-40 group-hover:opacity-100 group-hover:rotate-180 transition duration-1000 ease-in-out"></div>
            
            {/* Picture Frame */}
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full p-[3px] bg-[#0f172a] border border-slate-800 shadow-xl group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full rounded-full overflow-hidden bg-[#1e293b]">
                <img 
                  src={HeroProfilePic} 
                  alt="Alisha Zulfiqar Ali" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 contrast-[1.05]"
                />
              </div>
            </div>
            
            {/* Online Status Indicator (VIP Feature) */}
            <span className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-500 border-2 border-[#0f172a] rounded-full animate-bounce"></span>
          </div>
        </div>

        {/* Professional Title with Gradient */}
        <h2 className="text-2xl sm:text-4xl font-extrabold bg-gradient-to-r from-slate-200 via-slate-400 to-slate-200 bg-clip-text text-transparent tracking-wide">
          Frontend Developer | MERN Stack Specialist 
        </h2>
        
        {/* Description Description */}
        <p className="max-w-2xl mx-auto text-slate-400 text-base sm:text-lg leading-relaxed font-normal">
          I specialize in building responsive, high-performance, and user-friendly web applications using <span className="text-indigo-400 font-medium">React.js</span>, the <span className="text-cyan-400 font-medium">MERN Stack</span>, and modern styling architectures.
        </p>
        
        {/* VIP Action Buttons with Micro-interactions */}
        <div className="pt-6 flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto">
          <a 
            href="#projects" 
            className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white font-semibold rounded-xl shadow-lg shadow-indigo-600/20 hover:shadow-indigo-500/30 hover:-translate-y-0.5 transition-all duration-200 text-center flex items-center justify-center gap-2 group"
          >
            View My Work 
            <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a 
            href="#contact" 
            className="w-full sm:w-auto px-8 py-3.5 border border-slate-800 bg-slate-900/40 hover:bg-slate-800/60 hover:border-slate-700 text-slate-300 hover:text-white font-semibold rounded-xl transition-all duration-200 text-center"
          >
            Let's Connect
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;
import { FaEnvelope, FaGithub, FaLinkedin, FaArrowRight } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-[#0f172a] px-6 scroll-mt-16 text-slate-200 relative overflow-hidden">
      
      {/* Background Tech Mesh/Aura Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/10 to-cyan-500/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="max-w-3xl mx-auto text-center space-y-12 relative z-10">
        
        {/* Header Section */}
        <div className="space-y-4">
          <p className="text-indigo-400 font-mono tracking-widest text-xs uppercase bg-indigo-500/5 border border-indigo-500/10 px-4 py-1.5 rounded-full inline-block">
            What's Next?
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Get In <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="h-[2px] w-16 bg-gradient-to-r from-indigo-500 to-cyan-400 mx-auto my-3 rounded-full"></div>
          <p className="max-w-xl mx-auto text-slate-400 text-base sm:text-lg leading-relaxed font-normal">
            I am currently actively seeking <span className="text-white font-medium">Frontend & MERN Stack Internship</span> opportunities to add value to engineering teams. Drop a message if you have an opening or just want to discuss code!
          </p>
        </div>

        {/* VIP Main Interactive Contact Card */}
        <div className="max-w-xl mx-auto bg-gradient-to-b from-[#1e293b]/80 to-[#151f32]/40 border border-slate-800/80 p-8 sm:p-10 rounded-2xl backdrop-blur-md shadow-2xl space-y-8 hover:border-slate-700/60 transition-all duration-300">
          
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-slate-200 tracking-wide">Let's build something amazing together</h3>
            <p className="text-xs text-slate-500 font-mono">Response time: Usually within a few hours</p>
          </div>

          {/* Core Call To Action (Mailto Button) */}
          <div>
            <a 
              href="mailto:alishazulfiqarsoomro@gmail.com" 
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white font-bold rounded-xl shadow-lg shadow-indigo-600/20 hover:shadow-indigo-500/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 w-full sm:w-auto border border-indigo-500/20 group"
            >
              <FaEnvelope className="text-base group-hover:rotate-12 transition-transform" /> 
              <span>Say Hello</span>
              <FaArrowRight className="text-xs opacity-60 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="flex items-center justify-center gap-4 my-2">
            <span className="h-[1px] bg-slate-800 flex-grow"></span>
            <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">Or via Socials</span>
            <span className="h-[1px] bg-slate-800 flex-grow"></span>
          </div>

          {/* Premium Social Links Configuration */}
          <div className="flex justify-center gap-5">
            {/* GitHub Button */}
            <a 
              href="https://github.com/alishazulfiqarsoomro" 
              target="_blank" 
              rel="noreferrer" 
              aria-label="GitHub Profile"
              className="flex items-center justify-center w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 hover:border-slate-600 hover:-translate-y-1 transition-all duration-300 shadow-md group"
            >
              <FaGithub className="text-xl group-hover:scale-110 transition-transform" />
            </a>
            
            {/* LinkedIn Button */}
            <a 
              href="https://linkedin.com/in/alisha-soomro-761b00339" 
              target="_blank" 
              rel="noreferrer" 
              aria-label="LinkedIn Profile"
              className="flex items-center justify-center w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-[#0077b5] hover:bg-slate-800 hover:border-slate-600 hover:-translate-y-1 transition-all duration-300 shadow-md group"
            >
              <FaLinkedin className="text-xl group-hover:scale-110 transition-transform" />
            </a>
          </div>

        </div>

        {/* Footer Minimal Copyright (VIP Finish) */}
        <div className="pt-8 text-xs font-mono text-slate-600">
          <p>© {new Date().getFullYear()} — Designed & Built by Alisha Zulfiqar</p>
        </div>

      </div>
    </section>
  );
};

export default Contact;
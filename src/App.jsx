import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ProjectGallery from './components/ProjectGallery'; // <-- 1. Is line ko add kiya
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-[#0f172a] min-h-screen text-slate-200 antialiased selection:bg-indigo-500 selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <ProjectGallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
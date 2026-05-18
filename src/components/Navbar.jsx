import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
// Apni chhoti passport-size ya round avatar image ka path yahan dein
import NavbarProfilePic from "../assets/profile.jpg";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { id: 1, name: "home", url: "#home" },
    { id: 2, name: "about", url: "#about" },
    { id: 3, name: "skills", url: "#skills" },
    { id: 4, name: "projects", url: "#projects" },
    { id: 5, name: "contact", url: "#contact" },
  ];

  // 1. Navbar background opacity change on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 2. Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (nav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [nav]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full h-16 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0f172a]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex justify-between items-center">
        {/* VIP Logo Group: Picture + Name */}
        <a href="#home" className="flex items-center gap-3 group select-none">
          {/* VIP Image Container with Premium Double Border Glow */}
          <div className="relative w-9 h-9 rounded-full p-[2px] bg-gradient-to-tr from-indigo-500 to-cyan-400 shadow-md shadow-indigo-500/20 transition-transform duration-500 group-hover:rotate-[360deg]">
            <div className="w-full h-full rounded-full bg-[#0f172a] p-[1px]">
              <img
                src={NavbarProfilePic}
                alt="Alisha Dev"
                className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            {/* Subtle pulse glow effect behind the image */}
            <span className="absolute inset-0 rounded-full bg-indigo-400/30 blur-sm -z-10 animate-pulse"></span>
          </div>

          {/* Logo Text */}
          <span className="text-xl font-black tracking-widest bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent group-hover:opacity-90 transition-opacity">
            ALISHA.DEV
          </span>
        </a>

        {/* Desktop Links with Animated Underline Effect */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium capitalize text-slate-300">
          {links.map(({ id, name, url }) => (
            <li key={id} className="relative group py-2">
              <a
                href={url}
                className="hover:text-white transition-colors duration-200 ease-in-out"
              >
                {name}
              </a>
              {/* Premium Underline Animation */}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-indigo-400 transition-all duration-300 group-hover:w-full" />
            </li>
          ))}
        </ul>

        {/* Hamburger Menu Icon */}
        <button
          onClick={() => setNav(!nav)}
          aria-label="Toggle Menu"
          className="md:hidden cursor-pointer text-slate-400 hover:text-white z-50 focus:outline-none p-2 rounded-lg hover:bg-slate-800/50 transition-colors"
        >
          {nav ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Premium Mobile Slide-in Menu */}
      <div
        className={`fixed top-0 right-0 w-full md:w-[300px] h-screen bg-[#0f172a]/98 backdrop-blur-lg border-l border-slate-800/50 p-10 flex flex-col justify-start transform transition-transform duration-300 ease-in-out z-40 md:hidden ${
          nav ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col space-y-6 text-lg font-medium capitalize text-slate-300 mt-20">
          {links.map(({ id, name, url }) => (
            <li key={id} className="border-b border-slate-800/50 pb-4">
              <a
                onClick={() => setNav(false)}
                href={url}
                className="hover:text-indigo-400 block w-full transition-colors"
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

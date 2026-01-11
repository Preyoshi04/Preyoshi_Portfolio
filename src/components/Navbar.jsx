import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/20 backdrop-blur-xl border-b border-white/30 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-6 py-4 text-slate-800">
        <img
          src="/public/logo/logo.png"
          className="h-20 w-20 brightness-110"
          alt="logo"
        />

        <div className="hidden text-xl md:flex gap-8 font-bold font-serif">
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="hover:text-purple-600 text-slate-700 transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-500 transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        <div className="md:hidden">
          {open ? (
            <FiX
              className="text-2xl cursor-pointer text-pink-600"
              onClick={() => setOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-2xl cursor-pointer text-purple-600"
              onClick={() => setOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white/80 backdrop-blur-2xl flex flex-col items-center py-8 gap-6 shadow-2xl border-b border-white/40">
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-lg font-bold text-slate-800 hover:text-purple-600"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

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
    <nav className="fixed w-full z-50 bg-[#0a192f]/90 backdrop-blur-md shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-6 py-4 text-[#f5f3c6]">
        <img src="/favicon-32x32.png" className="h-10 w-10"></img>
        <div className="hidden md:flex gap-8">
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="hover:text-yellow-400 transition"
            >
              {link.name}
            </a>
          ))}
        </div>
        <div className="md:hidden">
          {open ? (
            <FiX
              className="text-2xl cursor-pointer"
              onClick={() => setOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-2xl cursor-pointer"
              onClick={() => setOpen(true)}
            />
          )}
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-[#0a192f] flex flex-col items-center py-6 gap-6">
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="hover:text-yellow-400 transition"
              onClick={() => setOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

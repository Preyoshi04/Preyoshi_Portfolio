import { FaGithub, FaLinkedin, FaHackerrank } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-950 via-black to-blue-950 text-yellow-100 py-10 mt-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
        
        {/* Branding */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-yellow-400">Preyoshi</h2>
          <p className="mt-2 text-sm text-yellow-200">
            Frontend Developer | Java Enthusiast | DSA Learner
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex justify-center space-x-6">
          <a href="#about" className="hover:text-yellow-400 transition">
            About
          </a>
          <a href="#education" className="hover:text-yellow-400 transition">
            Education
          </a>
          <a href="#skills" className="hover:text-yellow-400 transition">
            Skills
          </a>
          <a href="#projects" className="hover:text-yellow-400 transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-yellow-400 transition">
            Contact
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center md:justify-end space-x-5 text-2xl">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://leetcode.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition"
          >
            <SiLeetcode />
          </a>
          <a
            href="https://www.hackerrank.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition"
          >
            <FaHackerrank />
          </a>
          <a
            href="https://auth.geeksforgeeks.org/user/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition"
          >
            <SiGeeksforgeeks />
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-yellow-700 mt-8 pt-4 text-center text-sm text-yellow-300">
        © {new Date().getFullYear()} Preyoshi. All rights reserved.
      </div>
    </footer>
  );
}

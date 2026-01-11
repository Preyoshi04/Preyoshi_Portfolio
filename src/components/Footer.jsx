import { FaGithub, FaLinkedin, FaHackerrank } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="backdrop-blur-xl bg-white/10 border-t border-white/20 text-slate-700 py-12 mt-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 items-center text-center md:text-left">
        <div>
          <h2 className="text-3xl font-black bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Preyoshi</h2>
          <p className="mt-2 text-sm font-semibold text-slate-500">Frontend Developer | Java Enthusiast</p>
        </div>

        <div className="flex justify-center space-x-6 font-bold text-sm">
          {["About", "Education", "Skills", "Projects", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-purple-600 transition-colors uppercase tracking-widest">{item}</a>
          ))}
        </div>

        <div className="flex justify-center md:justify-end space-x-5 text-2xl text-purple-600">
          <a href="https://github.com/Preyoshi04" className="hover:text-pink-500 transition-transform hover:scale-110"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/preyoshi-mondal-901a21263/" className="hover:text-pink-500 transition-transform hover:scale-110"><FaLinkedin /></a>
          <a href="https://leetcode.com/u/Preyoshi/" className="hover:text-pink-500 transition-transform hover:scale-110"><SiLeetcode /></a>
        </div>
      </div>
      <div className="mt-8 text-center text-xs font-bold text-slate-400 uppercase tracking-widest">
        © {new Date().getFullYear()} Preyoshi. Built with Glass & Love.
      </div>
    </footer>
  );
}
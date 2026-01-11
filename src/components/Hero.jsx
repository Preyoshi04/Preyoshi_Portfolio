import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen flex flex-col justify-center items-center text-center px-6 bg-transparent"
    >
      {/* Refined Glass Container */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="backdrop-blur-2xl bg-white/10 border border-white/30 p-10 md:p-16 rounded-[2.5rem] shadow-2xl shadow-purple-500/20"
      >
        {/* Name + Title */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-extrabold mb-4 text-slate-900"
        >
          Hi, I’m <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent font-serif font-bold">Preyoshi</span>
        </motion.h1>

        {/* Role Intro */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-xl md:text-2xl font-semibold text-pink-600 mb-6 tracking-wide"
        >
          Frontend Developer | Java Enthusiast
        </motion.h2>

        {/* Bio Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="max-w-2xl text-slate-700 text-lg leading-relaxed mb-10 font-medium"
        >
          I'm passionate about crafting beautiful and responsive user interfaces,
          exploring advanced Java concepts, and sharpening my skills in
          <span className="text-purple-600 font-bold font-serif"> DSA</span>.  
          Always curious, always learning, and always building.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center"
        >
          <a
            href="#projects"
            className="bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold px-8 py-4 rounded-2xl shadow-lg hover:shadow-pink-500/40 hover:scale-105 transition-all"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="border-2 border-purple-500 text-purple-600 px-8 py-4 rounded-2xl font-bold backdrop-blur-md bg-white/20 hover:bg-purple-50 transition-all"
          >
            Contact Me
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Down Arrow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 text-pink-500 text-2xl animate-bounce"
      >
        <FaArrowDown />
      </motion.div>
    </section>
  );
}
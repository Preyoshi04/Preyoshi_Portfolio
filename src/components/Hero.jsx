import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="hero"
      className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-blue-950 via-black to-blue-950 text-yellow-100 px-6"
    >
      {/* Name + Title */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-extrabold mb-4"
      >
        Hi, I’m <span className="text-yellow-400">Preyoshi</span>
      </motion.h1>

      {/* Role Intro */}
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-2xl md:text-3xl font-semibold text-yellow-200 mb-6"
      >
        Frontend Developer | Java Enthusiast | Problem Solver
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="max-w-2xl text-lg text-yellow-100 leading-relaxed mb-8"
      >
        Passionate about crafting beautiful and responsive user interfaces,
        exploring advanced Java concepts, and sharpening my skills in
        <span className="text-yellow-300 font-medium"> DSA</span>.  
        Always curious, always learning, and always building.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="flex space-x-4"
      >
        <a
          href="#projects"
          className="bg-yellow-400 text-blue-950 font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-yellow-300 transition"
        >
          View My Work
        </a>
        <a
          href="#contact"
          className="border-2 border-yellow-400 text-yellow-400 px-6 py-3 rounded-xl font-semibold hover:bg-yellow-400 hover:text-blue-950 transition"
        >
          Contact Me
        </a>
      </motion.div>

      {/* Scroll Down */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, delay: 2, repeat: Infinity }}
        className="mt-10"
      >
        <FaArrowDown className="text-yellow-400 text-3xl animate-bounce" />
      </motion.div>
    </section>
  );
}

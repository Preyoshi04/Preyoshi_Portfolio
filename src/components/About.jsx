import { motion } from "framer-motion";
import { FaHackerrank, FaWaveSquare } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

const About = () => {
  return (
    <section id="about" className="py-20 bg-transparent text-slate-800">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">
        {/* Profile Image with Glass Border */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-shrink-0 p-3 backdrop-blur-md bg-white/20 border border-white/40 rounded-3xl shadow-2xl"
        >
          <img
            src="/about.png"
            alt="Profile"
            className="w-full h-full rounded-2xl object-cover hover:scale-105 transition-transform duration-300 shadow-lg"
          />
        </motion.div>

        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-black mb-6 bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent font-serif uppercase">
            About Me
          </h2>
          <p className="text-xl text-slate-700 leading-relaxed mb-6">
            I’m a{" "}
            <span className="text-purple-700 font-serif font-bold">
              Computer Science Engineer,{" "}
            </span>
            mainly passionate about{" "}
            <span className="text-pink-600 font-serif font-bold">
              {" "}
              Frontend Development{" "}
            </span>
            and exploring the depth of{" "}
            <span className="text-purple-700 font-serif font-bold">
              {" "}
              Advanced Java{" "}
            </span>
            . I enjoy creating interactive, user-friendly applications and
            writing efficient backend logic to support them.
          </p>

          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Currently, I’m consistently coding on various platforms like
            <span className="text-purple-700 font-serif font-bold">
              {" "}
              LeetCode, HackerRank, and GeeksforGeeks
            </span>
            , where I strengthen my problem-solving abilities. My main focus is
            on deepening my knowledge of
            <span className="text-pink-600 font-serif font-bold">
              {" "}
              Data Structures and Algorithms in Java
            </span>
            , while also building real-world projects to sharpen my development
            skills.
          </p>

          {/* Competitive Programming Profiles - Themed Icons */}
          <div className="flex gap-6 mt-6 text-3xl">
            <motion.a
              href="https://leetcode.com/u/Preyoshi/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="text-purple-600 hover:text-pink-500 transition-colors"
            >
              <SiLeetcode />
            </motion.a>

            <motion.a
              href="https://www.hackerrank.com/profile/preyoshimondal"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="text-pink-500 hover:text-purple-600 transition-colors"
            >
              <FaHackerrank />
            </motion.a>

            <motion.a
              href="https://www.geeksforgeeks.org/user/preyoshik4hs/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="text-purple-500 hover:text-pink-600 transition-colors"
            >
              <SiGeeksforgeeks />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

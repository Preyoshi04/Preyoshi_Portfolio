import { motion } from "framer-motion";
import { FaHackerrank } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-r from-blue-950 via-black to-blue-900 text-yellow-100"
    >
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-shrink-0"
        >
          <img
            src="/about.png"
            alt="Profile"
            className="w-full h-full rounded-2xl object-cover border-2 border-yellow-400 shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </motion.div>

        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:w-2/3"
        >
          <h2 className="text-4xl font-bold mb-4">👋 About Me</h2>
          <p className="text-lg text-yellow-100 leading-relaxed mb-6">
            I’m a{" "}
            <span className="text-yellow-300 font-semibold">
              Computer Science Engineer,{" "}
            </span>
             mainly passionate about{" "}
            <span className="text-yellow-300"> Frontend Development </span>
            and exploring the depth of{" "}
            <span className="text-yellow-300"> Advanced Java </span>. I enjoy
            creating interactive, user-friendly applications and writing
            efficient backend logic to support them.
          </p>

          <p className="text-lg text-yellow-100 leading-relaxed mb-6">
            Currently, I’m consistently coding on various platforms like
            <span className="text-yellow-300">
              {" "}
              LeetCode, HackerRank, and GeeksforGeeks
            </span>
            , where I strengthen my problem-solving abilities. My main focus is
            on deepening my knowledge of
            <span className="text-yellow-300">
              {" "}
              Data Structures and Algorithms in Java
            </span>
            , while also building real-world projects to sharpen my development
            skills.
          </p>

          {/* Competitive Programming Profiles */}
          <div className="flex gap-6 mt-6 text-3xl">
            <motion.a
              href="https://leetcode.com/u/Preyoshi/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="text-yellow-300 hover:text-yellow-400 transition-colors"
            >
              <SiLeetcode />
            </motion.a>

            <motion.a
              href="https://www.hackerrank.com/profile/preyoshimondal" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="text-green-400 hover:text-green-500 transition-colors"
            >
              <FaHackerrank />
            </motion.a>

            <motion.a
              href="https://www.geeksforgeeks.org/user/preyoshik4hs/" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="text-green-500 hover:text-green-400 transition-colors"
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

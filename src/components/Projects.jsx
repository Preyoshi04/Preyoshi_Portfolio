import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiGithub,
} from "react-icons/si";
import { MdStorage } from "react-icons/md";

// 🔹 Reusable Project Card
const ProjectCard = ({ title, description, link, github, images, techStack }) => {
  const [index, setIndex] = useState(0);

  // Auto-change image every 3s
  useEffect(() => {
    if (!images || images.length === 0) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images]);

  return (
    <motion.div
      className="bg-gradient-to-br from-blue-900 to-black p-6 rounded-2xl shadow-lg text-yellow-100 hover:scale-105 transition-transform duration-300"
      whileHover={{ y: -10 }}
    >
      <h3 className="text-2xl font-bold mb-3 text-yellow-200">{title}</h3>

      {/* Auto Image Slider for Web Projects */}
      {images && images.length > 0 && (
        <div className="mb-4 relative w-full h-100 overflow-hidden rounded-lg">
          <AnimatePresence mode="wait">
            <motion.img
              key={index}
              src={images[index]}
              alt={`${title} screenshot`}
              className="absolute w-auto h-auto object-contain rounded-lg"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6 }}
            />
          </AnimatePresence>
        </div>
      )}

      <p className="mb-4 text-sm">{description}</p>

      {/* Tech Stack Section */}
      {techStack && techStack.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech, idx) => (
            <div
              key={idx}
              className="flex items-center gap-1 bg-gray-600 text-white px-2 py-1 rounded-lg shadow-sm hover:shadow-md transition text-sm font-medium"
            >
              {tech.icon}
              {tech.name}
            </div>
          ))}
        </div>
      )}

      <div className="flex gap-4">
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition-all duration-300"
          >
            <FaExternalLinkAlt /> Live
          </a>
        )}
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-yellow-400 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 hover:text-black transition-all duration-300"
          >
            <FaGithub /> Code
          </a>
        )}
      </div>
    </motion.div>
  );
};

// 🔹 Projects Section
const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-b from-black via-blue-950 to-black text-yellow-100 px-6 py-20"
    >
      <motion.h2
        className="text-4xl font-bold text-center mb-14 text-yellow-200"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        🌐Projects
      </motion.h2>
      
      <div className="mb-16">
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectCard
            title="TaskNest: Task Manager"
            description="A React-based Task Manager that lets users add and delete tasks with date and time, while using local storage to persist data across sessions."
            link="https://tasknest-six.vercel.app/"
            github="https://github.com/Preyoshi04/Task-Manager-React"
            images={[
              "/projects/task1.png",
              "/projects/task2.png",
            ]}
            techStack={[
              { name: "React", icon: <SiReact className="text-blue-400" /> },
              { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
              { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
              { name: "CSS3", icon: <SiCss3 className="text-blue-500" /> },
              { name: "LocalStorage", icon: <MdStorage className="text-green-400" /> },
            ]}
          />
          <ProjectCard
            title="Textify: Text Modifier Website"
            description="A React-based tool to modify text (uppercase, lowercase, find & replace) with options to download results as .txt or .pdf. Built with React Router DOM for smooth navigation and a clean, responsive UI."
            github="https://github.com/Preyoshi04/TEXTIFY-Text-Utility-"
           images={[
              "/projects/text1.png",
              "/projects/text2.png",
              "/projects/text3.png",
              "/projects/text4.png",
            ]}
            techStack={[
              { name: "React", icon: <SiReact className="text-blue-400" /> },
              { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
              { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
              { name: "CSS3", icon: <SiCss3 className="text-blue-500" /> },
            ]}
          />
          <ProjectCard
            title="Rock Paper Scissors Game"
            description="A simple Rock-Paper-Scissors game where the user competes against the computer, with random computer choices and instant result display."
            link="https://rock-paper-scissors-game-psi-two.vercel.app/"
            github="https://github.com/Preyoshi04/Rock-Paper-Scissors-Game"
            images={[
              "/projects/rps1.png",
              "/projects/rps2.png",
              "/projects/rps3.png",
              "/projects/rps4.png",
            ]}
            techStack={[
              { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
              { name: "CSS3", icon: <SiCss3 className="text-blue-500" /> },
              { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
            ]}
          />
          <p>More projects coming soon....</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;

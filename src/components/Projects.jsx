import { motion } from "framer-motion";
import { useState } from "react";
import { FaExternalLinkAlt, FaGithub, FaRobot } from "react-icons/fa";
import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
  SiNextdotjs,
  SiPostgresql,
} from "react-icons/si";
import { MdApi, MdStorage } from "react-icons/md";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { DiFirebase } from "react-icons/di";

// 🔹 Image Slider
const ImageSlider = ({ images, title }) => {
  const [index, setIndex] = useState(0);

  const handleNext = () => setIndex((prev) => (prev + 1) % images.length);
  const handlePrev = () =>
    setIndex((prev) => (prev - 1 + images.length) % images.length);

  if (!images || images.length === 0) return null;

  return (
    <div className="relative w-full h-60 overflow-hidden rounded-xl mb-4 shadow-inner bg-white/10">
      <img
        src={images[index]}
        alt={`${title} screenshot`}
        className="w-full h-full object-contain rounded-xl transition-all duration-300"
      />

      {/* Left Button */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/30 backdrop-blur-md hover:bg-white/50 text-slate-800 p-2 rounded-full transition-all border border-white/40"
      >
        <div className="text-purple-600"><BiLeftArrow size={18} /></div>
      </button>

      {/* Right Button */}
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/30 backdrop-blur-md hover:bg-white/50 text-slate-800 p-2 rounded-full transition-all border border-white/40"
      >
        <div className="text-purple-600"><BiRightArrow size={18} /></div>
      </button>
    </div>
  );
};

// 🔹 Reusable Project Card
const ProjectCard = ({
  title,
  description,
  link,
  github,
  images,
  techStack,
}) => {
  return (
    <motion.div
      className="backdrop-blur-xl bg-white/30 border border-pink-300/50 p-6 cursor-pointer rounded-3xl shadow-xl shadow-purple-100/20 text-slate-700 hover:shadow-2xl hover:shadow-purple-200/40 transition-all duration-300"
      whileHover={{ y: -8 }}
    >
      <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent">{title}</h3>

      {/* Image Slider Section */}
      {images && images.length > 0 && (
        <ImageSlider images={images} title={title} />
      )}

      <p className="mb-4 text-sm text-slate-600 leading-relaxed font-medium font-serif">{description}</p>

      {/* Tech Stack Section */}
      {techStack && techStack.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6">
          {techStack.map((tech, idx) => (
            <div
              key={idx}
              className="flex items-center gap-1.5 bg-white/40 border border-white/60 text-slate-700 px-3 py-1 rounded-full shadow-sm hover:bg-white/60 transition text-xs font-semibold"
            >
              <span className="text-sm">{tech.icon}</span>
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
            className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4 py-2.5 rounded-xl font-bold text-sm shadow-md hover:opacity-90 transition-opacity"
          >
            <FaExternalLinkAlt size={12} /> Live
          </a>
        )}
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 bg-white/50 border border-purple-200 text-purple-700 px-4 py-2.5 rounded-xl font-bold text-sm hover:bg-white/80 transition-all"
          >
            <FaGithub size={14} /> Code
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
      className="min-h-screen bg-transparent text-slate-800 px-6 py-24"
    >
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-center mb-16"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent uppercase font-serif">Projects</span>
      </motion.h2>

      <div className="mb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 gap-8 max-w-7xl mx-auto">
          <ProjectCard
            title="MockWise: AI-Powered Mock Interview Platform"
            description="A full-stack application that leverages AI to conduct mock interviews, providing users with real-time feedback and performance analytics to enhance their interview skills."
            link="https://mock-wise-one.vercel.app/"
            github="https://github.com/Preyoshi04/MockWise"
            images={[
              "/projects/mockwise (1).png",
              "/projects/mockwise (2).png",
              "/projects/mockwise (3).png",
              "/projects/mockwise (4).png",
              "/projects/mockwise (5).png",
            ]}
            techStack={[
              {
                name: "Next Js",
                icon: <SiNextdotjs className="text-black" />,
              },
              {
                name: "PostgreSQL",
                icon: <SiPostgresql className="text-blue-500" />,
              },
              { name: "Vapi", icon: <FaRobot className="text-red-400" /> },
              {
                name: "Node Js",
                icon: <SiNodedotjs className="text-green-600" />,
              },
              {
                name: "Gemini API",
                icon: <MdApi className="text-indigo-500" />,
              },
              {
                name: "Firebase",
                icon: <DiFirebase className="text-orange-500" />,
              },
            ]}
          />

          <ProjectCard
            title="SyncLy: Online Notes Keeping Platform"
            description="A full-stack MERN notes platform that lets users create, edit, organize, and securely store their notes in real time."
            link="https://syncly-9sfq.onrender.com/"
            github="https://github.com/Preyoshi04/Syncly"
            images={[
              "/projects/notes (1).png",
              "/projects/notes (2).png",
              "/projects/notes (3).png",
              "/projects/notes (4).png",
              "/projects/notes (5).png",
            ]}
            techStack={[
              {
                name: "MongoDB",
                icon: <SiMongodb className="text-green-500" />,
              },
              {
                name: "Express Js",
                icon: <SiExpress className="text-slate-700" />,
              },
              { name: "React", icon: <SiReact className="text-blue-400" /> },
              {
                name: "Node Js",
                icon: <SiNodedotjs className="text-green-600" />,
              },
            ]}
          />

          <ProjectCard
            title="QuizMaster: Online quiz platform with multiple categories"
            description="A MERN-based quiz app that lets users choose category, difficulty, and number of questions to take personalized quizzes with instant results."
            link="https://quizmaster-frontend-uxch.onrender.com/login"
            github="https://github.com/Preyoshi04/QuizMaster"
            images={[
              "/projects/quiz (1).png",
              "/projects/quiz (2).png",
              "/projects/quiz (3).png",
              "/projects/quiz (4).png",
              "/projects/quiz (5).png",
              "/projects/quiz (6).png",
            ]}
            techStack={[
              {
                name: "MongoDB",
                icon: <SiMongodb className="text-green-500" />,
              },
              {
                name: "Express Js",
                icon: <SiExpress className="text-slate-700" />,
              },
              { name: "React", icon: <SiReact className="text-blue-400" /> },
              {
                name: "Node Js",
                icon: <SiNodedotjs className="text-green-600" />,
              },
            ]}
          />
          <ProjectCard
            title="ReachDesk : MERN Based Contact Management System"
            description="A MERN stack contact management system that allows users to add, view, edit, and delete contacts with a user-friendly interface and robust backend."
            link="https://reachdesk-frontend-szoj.onrender.com/"
            github="https://github.com/Preyoshi04/ReachDesk"
            images={[
              "/projects/reachdesk (1).png",
              "/projects/reachdesk (2).png",
              "/projects/reachdesk (3).png",
              "/projects/reachdesk (4).png",
            ]}
            techStack={[
              {
                name: "MongoDB",
                icon: <SiMongodb className="text-green-500" />,
              },
              {
                name: "Express Js",
                icon: <SiExpress className="text-slate-700" />,
              },
              { name: "React", icon: <SiReact className="text-blue-400" /> },
              {
                name: "Node Js",
                icon: <SiNodedotjs className="text-green-600" />,
              },
            ]}
          />
          <ProjectCard
            title="TaskNest: Task Manager"
            description="A React-based Task Manager that lets users add and delete tasks with date and time, while using local storage to persist data across sessions."
            link="https://tasknest-six.vercel.app/"
            github="https://github.com/Preyoshi04/Task-Manager-React"
            images={["/projects/task.png"]}
            techStack={[
              { name: "React", icon: <SiReact className="text-blue-400" /> },
              {
                name: "JavaScript",
                icon: <SiJavascript className="text-yellow-500" />,
              },
              { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
              { name: "CSS3", icon: <SiCss3 className="text-blue-500" /> },
              {
                name: "LocalStorage",
                icon: <MdStorage className="text-green-400" />,
              },
            ]}
          />

          <ProjectCard
            title="Textify: Text Modifier Website"
            description="A React-based tool to modify text (uppercase, lowercase, find & replace) with options to download results as .txt or .pdf. Built with React Router DOM for smooth navigation and a clean, responsive UI."
            link="https://textify-text-utility-five.vercel.app/"
            github="https://github.com/Preyoshi04/TEXTIFY-Text-Utility-"
            images={[
              "/projects/text (1).png",
              "/projects/text (2).png",
              "/projects/text (3).png",
            ]}
            techStack={[
              { name: "React", icon: <SiReact className="text-blue-400" /> },
              {
                name: "JavaScript",
                icon: <SiJavascript className="text-yellow-500" />,
              },
              { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
              { name: "CSS3", icon: <SiCss3 className="text-blue-500" /> },
            ]}
          />

          <p className="text-slate-500 font-medium animate-pulse">More projects coming soon....</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import { LucideSquareAsterisk } from "lucide-react";

const skillsData = [
  {
    category: "Programming Languages",
    items: ["Java", "Python", "JavaScript"],
  },
  {
    category: "Development",
    items: ["HTML", "CSS", "React", "Node js", "Express.js", "MongoDB", "Next Js"],
  },
  {
    category: "Databases",
    items: ["MySQL", "MongoDB", "Firebase"],
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "GitHub", "VS Code", "Vercel", "Netlify", "Render"],
  },
  {
    category: "Graphics Designing",
    items: ["Adobe Photoshop", "Canva"],
  },
];

const Skills = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="skills"
      className="py-24 bg-transparent text-slate-800"
    >
      <div className="container mx-auto px-6 md:px-12">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-black mb-16 text-center bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent uppercase tracking-tighter font-serif"
        >
          skills
        </motion.h2>

        <div className="max-w-4xl mx-auto space-y-6">
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="backdrop-blur-xl bg-white/30 border border-white/50 rounded-3xl shadow-xl overflow-hidden hover:shadow-purple-500/10 transition-shadow"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between px-8 py-6 text-left transition-all hover:bg-white/20"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl text-white shadow-lg">
                    <LucideSquareAsterisk size={24} />
                  </div>
                  <span className="text-xl font-bold text-slate-700 tracking-tight">
                    {skill.category}
                  </span>
                </div>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  className="text-purple-600"
                >
                  <FaChevronDown size={20} />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="px-8 pb-8 pt-2 flex flex-wrap gap-3"
                  >
                    {skill.items.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3, delay: i * 0.05 }}
                        whileHover={{
                          scale: 1.1,
                          backgroundColor: "rgba(255, 255, 255, 0.8)",
                          borderColor: "#db2777" // Pink-600
                        }}
                        className="bg-white/50 border border-white/80 px-5 py-2 rounded-2xl shadow-sm text-purple-700 font-bold text-sm cursor-default transition-all duration-300"
                      >
                        {item}
                      </motion.li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
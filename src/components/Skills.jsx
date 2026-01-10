import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const skillsData = [
  {
    category: "Programming Languages",
    items: ["Java", "Python", "JavaScript"],
  },
  {
    category: "Development",
    items: ["HTML", "CSS", "React", "Node js", "Express.js" ,"MongoDB", "Next Js" ],
  },
  {
    category: "Databases",
    items: ["MySQL", "MongoDB", "Firebase"],
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "GitHub", "VS Code", "Vercel", "Netlify" , "Render" ],
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
      className="py-20 bg-gradient-to-r from-blue-950 via-black to-blue-900 text-yellow-100"
    >
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-bold mb-12 text-center">⚡ Skills</h2>

        <div className="max-w-3xl mx-auto space-y-5">
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-blue-900 bg-opacity-70 border border-blue-700 rounded-2xl shadow-lg overflow-hidden backdrop-blur-sm"
            >
              {/* Category Header */}
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left font-semibold text-lg hover:bg-blue-800/80 transition-all duration-300"
              >
                <span className="tracking-wide">{skill.category}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-yellow-300"
                >
                  <FaChevronDown />
                </motion.div>
              </button>

              {/* Dropdown */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="px-6 pb-4 space-y-3"
                  >
                    {skill.items.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: i * 0.05 }}
                        whileHover={{
                          scale: 1.05,
                          backgroundColor: "rgba(255, 255, 255, 0.1)",
                        }}
                        className="bg-blue-950/80 px-4 py-2 rounded-lg shadow-md cursor-pointer transition-transform duration-300"
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

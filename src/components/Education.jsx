import { motion } from "framer-motion";

const Education = () => {
  const glassCard = "backdrop-blur-xl bg-white/30 border border-white/50 shadow-xl shadow-purple-100/20 hover:shadow-2xl hover:shadow-purple-200/40 transition-all duration-300";

  return (
    <section
      id="education"
      className="py-20 bg-transparent text-slate-800"
    >
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-extrabold mb-12 text-center bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent uppercase tracking-tight font-serif">
          EDUCATION
        </h2>

        {/* College Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`flex flex-col md:flex-row items-center rounded-3xl overflow-hidden mb-12 hover:scale-[1.02] ${glassCard}`}
        >
          {/* College Image */}
          <img
            src="/college.png" 
            alt="College"
            className="h-60 object-cover"
          />
          {/* College Info */}
          <div className="p-8 md:w-2/3">
            <h3 className="text-2xl font-bold mb-2 text-purple-800 font-serif">
              FUTURE INSTITUTE OF ENGINEERING AND MANAGEMENT
            </h3>
            <p className="text-pink-600 font-bold mb-1">B.Tech in Computer Science</p>
            <p className="text-sm text-slate-500 font-semibold">2022 - 2026</p>
            <p className="mt-3 text-slate-700 font-medium leading-relaxed">
              CGPA: 8.41 (till 7th Sem)
            </p>
          </div>
        </motion.div>

        {/* School Section */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Higher Secondary */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`flex flex-col md:flex-row items-center rounded-3xl overflow-hidden hover:scale-[1.02] ${glassCard}`}
          >
            <img
              src="/school.png" 
              alt="Higher Secondary"
              className="w-full md:w-1/3 h-56 object-cover"
            />
            <div className="p-6 md:w-2/3">
              <h3 className="text-xl font-bold mb-2 text-purple-800 font-serif">NAVA NALANDA HIGH SCHOOL</h3>
              <p className="text-pink-600 font-bold mb-1">Higher Secondary</p>
              <p className="text-sm text-slate-500 font-semibold">2021 - 2022</p>
              <p className="mt-3 text-slate-700 text-sm font-medium leading-relaxed">
                (89%)
                Specialization in Science (PCMC) with strong focus on Mathematics and Computer Science.
              </p>
            </div>
          </motion.div>

          {/* Secondary */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`flex flex-col md:flex-row items-center rounded-3xl overflow-hidden hover:scale-[1.02] ${glassCard}`}
          >
            <img
              src="/school.png" 
              alt="Secondary"
              className="w-full md:w-1/3 h-56 object-cover"
            />
            <div className="p-6 md:w-2/3">
              <h3 className="text-xl font-bold mb-2 text-purple-800 font-serif">NAVA NALANDA HIGH SCHOOL</h3>
              <p className="text-pink-600 font-bold mb-1">Secondary</p>
              <p className="text-sm text-slate-500 font-semibold">2019 - 2020</p>
              <p className="mt-3 text-slate-700 text-sm font-medium leading-relaxed">
                (89%)
                Achieved excellent academic record and participated in various 
                competitions, science fairs, and extracurricular activities.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
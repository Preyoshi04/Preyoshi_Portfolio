import { motion } from "framer-motion";

const Education = () => {
  return (
    <section
      id="education"
      className="py-20 bg-gradient-to-r from-blue-950 via-black to-blue-900 text-yellow-100"
    >
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-bold mb-12 text-center">🎓 EDUCATION</h2>

        {/* College Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center  bg-opacity-70 border border-blue-700 rounded-2xl shadow-lg overflow-hidden mb-12 hover:scale-[1.02] transition-transform duration-300"
        >
          {/* College Image */}
          <img
            src="/college.png" 
            alt="College"
            className="h-60 object-cover"
          />
          {/* College Info */}
          <div className="p-6 md:w-2/3">
            <h3 className="text-2xl font-semibold mb-2">
              FUTURE INSTITUTE OF ENGINEERING AND MANAGEMENT
            </h3>
            <p className="text-yellow-300 mb-1">B.Tech in Computer Science</p>
            <p className="text-sm text-yellow-200">2022 - 2026</p>
            <p className="mt-3 text-yellow-100 leading-relaxed">
              CGPA: 8.31(till 6th Sem)
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
            className="flex flex-col md:flex-row items-center bg-opacity-70 border border-blue-700 rounded-2xl shadow-lg overflow-hidden hover:scale-[1.02] transition-transform duration-300"
          >
            <img
              src="/school.png" 
              alt="Higher Secondary"
              className="w-full md:w-1/3 h-56 object-cover"
            />
            <div className="p-6 md:w-2/3">
              <h3 className="text-xl font-semibold mb-2">NAVA NALANDA HIGH SCHOOL</h3>
              <p className="text-yellow-300 mb-1">Higher Secondary</p>
              <p className="text-sm text-yellow-200">2021 - 2022</p>
              <p className="mt-3 text-yellow-100 leading-relaxed">
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
            className="flex flex-col md:flex-row items-center bg-opacity-70 border border-blue-700 rounded-2xl shadow-lg overflow-hidden hover:scale-[1.02] transition-transform duration-300"
          >
            <img
              src="/school.png" 
              alt="Secondary"
              className="w-full md:w-1/3 h-56 object-cover"
            />
            <div className="p-6 md:w-2/3">
              <h3 className="text-xl font-semibold mb-2">NAVA NALANDA HIGH SCHOOL</h3>
              <p className="text-yellow-300 mb-1">Secondary</p>
              <p className="text-sm text-yellow-200">2019 - 2020</p>
              <p className="mt-3 text-yellow-100 leading-relaxed">
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

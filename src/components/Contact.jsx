import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaPhone, FaMailBulk } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center bg-transparent text-slate-800 px-6 py-16"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12">
        
        {/* CV Preview - Left */}
        <motion.div
          className="backdrop-blur-xl bg-white/30 border border-white/50 rounded-2xl shadow-xl p-6 flex flex-col items-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-serif mb-3 font-bold bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent uppercase">
            MY RESUME
          </h2>
          {/* Container to ensure visibility on mobile */}
          <div className="w-full h-[500px] md:h-140 rounded-xl overflow-hidden border border-purple-200">
            <iframe
              src="/cv.pdf#view=FitH"
              title="My CV"
              className="w-full h-full rounded-xl"
            ></iframe>
          </div>
          
          <a
            href="/cv.pdf"
            download
            className="mt-6 inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:scale-105 transition-all duration-300"
          >
            <FaDownload /> Download CV
          </a>
        </motion.div>

        {/* Contact Info - Right */}
        <motion.div
          className="flex flex-col justify-center items-start gap-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-serif font-bold bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent uppercase">
            Contact Me
          </h2>
          
          <h3 className="text-2xl font-bold text-purple-800 -mt-2">
            Get In Touch
          </h3>
          
          <p className="text-lg text-slate-600 font-medium">
            Feel free to reach out via email or connect with me on my socials.
          </p>

          <div className="flex flex-col gap-4 w-full">
            {/* Email */}
            <div className="flex items-center gap-4 group">
              <div className="p-3 bg-white/50 rounded-lg text-purple-600 shadow-sm group-hover:bg-purple-600 group-hover:text-white transition-all">
                <FaMailBulk size={20} />
              </div>
              <a
                href="mailto:preyoshimondal@gmail.com"
                className="text-lg font-semibold text-slate-700 hover:text-pink-600 transition-colors duration-300"
              >
                preyoshimondal@gmail.com
              </a>
            </div>

            {/* Phone Numbers */}
            <div className="flex items-center gap-4 group">
              <div className="p-3 bg-white/50 rounded-lg text-purple-600 shadow-sm group-hover:bg-purple-600 group-hover:text-white transition-all">
                <FaPhone size={20} />
              </div>
              <div className="flex flex-col">
                <a
                  href="tel:+919007014436"
                  className="text-lg font-semibold text-slate-700 hover:text-pink-600 transition-colors duration-300"
                >
                  +91 9007014436
                </a>
                <a
                  href="tel:+918584982004"
                  className="text-lg font-semibold text-slate-700 hover:text-pink-600 transition-colors duration-300"
                >
                  +91 8584982004
                </a>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 mt-4">
            <motion.a
              whileHover={{ y: -5 }}
              href="https://github.com/Preyoshi04"
              className="p-4 bg-white/50 border border-white/80 rounded-2xl text-slate-800 hover:text-purple-600 hover:shadow-lg transition-all"
            >
              <FaGithub size={28} />
            </motion.a>
            <motion.a
              whileHover={{ y: -5 }}
              href="https://www.linkedin.com/in/preyoshi-mondal-901a21263/"
              className="p-4 bg-white/50 border border-white/80 rounded-2xl text-slate-800 hover:text-blue-600 hover:shadow-lg transition-all"
            >
              <FaLinkedin size={28} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
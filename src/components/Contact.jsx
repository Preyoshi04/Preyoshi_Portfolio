import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaPhone, FaMailBulk } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-blue-950 to-black text-yellow-100 px-6 py-16"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12">
        {/* CV Preview - Left */}
        <motion.div
          className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <iframe
            src="/cv.pdf"
            title="My CV"
            className="w-full h-[500px] rounded-xl"
          ></iframe>
          <a
            href="/cv.pdf"
            download
            className="mt-4 inline-flex items-center gap-2 bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold hover:bg-yellow-300 transition-all duration-300"
          >
            <FaDownload /> Download CV
          </a>
        </motion.div>

        {/* Contact Info - Right */}
        <motion.div
          className="flex flex-col justify-center items-start gap-8"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-yellow-200 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg">
            Feel free to reach out via email or connect with me on my socials.
          </p>

          <div className="flex flex-col gap-2">
            {/* Email */}
             <FaMailBulk />
            <a
              href="mailto:preyoshimondal@gmail.com"
              className="hover:text-yellow-400 transition-colors duration-300"
            >
              preyoshimondal@gmail.com
            </a>

            {/* Phone 1 */}
             <FaPhone />
            <a
              href="tel:+91900701436"
              className="hover:text-yellow-400 transition-colors duration-300"
            >
              +91 900701436
            </a>

            {/* Phone 2 */}
            <a
              href="tel:+918584982004"
              className="hover:text-yellow-400 transition-colors duration-300"
            >
             +91 8584982004
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 text-3xl mt-6">
            <a
              href="https://github.com/Preyoshi04"
              className="hover:text-yellow-400 transition-colors duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/preyoshi-mondal-901a21263/"
              className="hover:text-yellow-400 transition-colors duration-300"
            >
              <FaLinkedin />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

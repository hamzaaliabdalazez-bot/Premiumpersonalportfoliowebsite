import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import {
  FiMail,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { SiKhanacademy } from "react-icons/si";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactMethods = [
    {
      name: "Email",
      value: "hamzaaliabdalazez@gmail.com",
      icon: <FiMail size={28} />,
      link: "mailto:hamzaaliabdalazez@gmail.com",
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "WhatsApp",
      value: "01023531656",
      icon: <FaWhatsapp size={28} />,
      link: "https://wa.me/01023531656",
      color: "from-green-500 to-green-600",
    },
    {
      name: "GitHub",
      value: "hamzaaliabdalazez-bot",
      icon: <FiGithub size={28} />,
      link: "https://github.com/hamzaaliabdalazez-bot",
      color: "from-gray-600 to-gray-700",
    },
    {
      name: "LinkedIn",
      value: "Hamza Ali",
      icon: <FiLinkedin size={28} />,
      link: "https://www.linkedin.com/in/hamza-ali-794375380/",
      color: "from-blue-600 to-blue-700",
    },
    {
      name: "Khamsat",
      value: "hamza_ali_abd_alazez",
      icon: <SiKhanacademy size={28} />,
      link: "https://khamsat.com/user/hamza_ali_abd_alazez",
      color: "from-teal-500 to-teal-600",
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-red-500 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="text-red-500">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full" />
          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out through any of these channels
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.name}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="group relative"
            >
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 shadow-xl hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-300 h-full">
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`p-4 rounded-xl bg-gradient-to-br ${method.color} text-white`}
                  >
                    {method.icon}
                  </motion.div>
                </div>

                {/* Method name */}
                <h3 className="text-xl font-bold text-white text-center mb-2">
                  {method.name}
                </h3>

                {/* Value */}
                <p className="text-gray-400 text-center text-sm break-all">
                  {method.value}
                </p>

                {/* Hover effect line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Additional CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gray-700/50 max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Let's Build Something Amazing Together
            </h3>
            <p className="text-gray-400 text-lg mb-6">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <motion.a
              href="mailto:hamzaaliabdalazez@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg shadow-lg shadow-red-500/50 hover:shadow-red-500/80 transition-all"
            >
              <FiMail size={20} />
              Send an Email
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

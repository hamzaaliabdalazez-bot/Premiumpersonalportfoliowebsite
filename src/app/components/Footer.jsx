import { motion } from "motion/react";
import { FiGithub, FiLinkedin, FiMail, FiHeart } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      icon: <FiGithub size={20} />,
      link: "https://github.com/hamzaaliabdalazez-bot",
    },
    {
      name: "LinkedIn",
      icon: <FiLinkedin size={20} />,
      link: "https://www.linkedin.com/in/hamza-ali-794375380/",
    },
    {
      name: "WhatsApp",
      icon: <FaWhatsapp size={20} />,
      link: "https://wa.me/01023531656",
    },
    {
      name: "Email",
      icon: <FiMail size={20} />,
      link: "mailto:hamzaaliabdalazez@gmail.com",
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-black via-gray-900 to-black border-t border-gray-800/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-600 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent mb-3"
            >
              Hamza Ali
            </motion.h3>
            <p className="text-gray-400 text-sm">
              Front-End Developer passionate about creating beautiful and functional web experiences
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-white font-semibold mb-4"
            >
              Quick Links
            </motion.h4>
            <ul className="space-y-2">
              {["Home", "About", "Skills", "Projects", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-gray-400 hover:text-red-500 transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-white font-semibold mb-4"
            >
              Connect With Me
            </motion.h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-gray-800/50 hover:bg-gradient-to-br hover:from-red-500 hover:to-red-600 text-gray-400 hover:text-white rounded-lg transition-all border border-gray-700/50"
                  title={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Hamza Ali. All rights reserved.
            </p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm flex items-center gap-2"
            >
              Made with <FiHeart className="text-red-500" /> using React & Tailwind CSS
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

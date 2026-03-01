import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-red-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-600 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-red-500">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gray-700/50 shadow-2xl shadow-red-500/10">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I'm a passionate <span className="text-red-500 font-semibold">Front-End Developer</span> with a keen eye for design and a commitment to creating exceptional user experiences. I specialize in building modern, responsive web applications using cutting-edge technologies.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              My journey in web development started with a curiosity about how websites work, and it has evolved into a professional career where I continuously learn and adapt to new technologies. I take pride in writing clean, maintainable code and following best practices.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              When I'm not coding, I enjoy exploring new web technologies, contributing to open-source projects, and staying up-to-date with the latest industry trends. I'm always eager to take on new challenges and collaborate on exciting projects.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

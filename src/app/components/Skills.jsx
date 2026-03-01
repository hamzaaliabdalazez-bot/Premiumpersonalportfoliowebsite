import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
} from "react-icons/fa";
import { SiJavascript, SiVite, SiNextdotjs, SiFramer, SiTailwindcss } from "react-icons/si";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    {
      name: "HTML5",
      icon: <FaHtml5 size={48} />,
      color: "from-orange-500 to-orange-600",
      description: "Semantic markup",
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt size={48} />,
      color: "from-blue-500 to-blue-600",
      description: "Modern styling",
    },
    {
      name: "JavaScript ES6",
      icon: <SiJavascript size={48} />,
      color: "from-yellow-400 to-yellow-500",
      description: "Advanced features",
    },
    {
      name: "React 19",
      icon: <FaReact size={48} />,
      color: "from-cyan-400 to-cyan-500",
      description: "Component-based UI",
    },
    {
      name: "Vite",
      icon: <SiVite size={48} />,
      color: "from-purple-500 to-purple-600",
      description: "Fast build tool",
    },
    {
      name: "Next.js 13",
      icon: <SiNextdotjs size={48} />,
      color: "from-gray-700 to-gray-800",
      description: "Full-stack framework",
    },
    {
      name: "Motion",
      icon: <SiFramer size={48} />,
      color: "from-pink-500 to-pink-600",
      description: "Smooth animations",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss size={48} />,
      color: "from-teal-400 to-teal-500",
      description: "Utility-first CSS",
    },
  ];

  return (
    <section
      id="skills"
      ref={ref}
      className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500 rounded-full blur-3xl"
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
            My <span className="text-red-500">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full" />
          <p className="text-gray-400 mt-6 text-lg">
            Technologies I work with to build amazing web experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="group relative"
            >
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 shadow-xl hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-300 h-full">
                {/* Icon with gradient background */}
                <div className="flex justify-center mb-6">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`p-4 rounded-xl bg-gradient-to-br ${skill.color} text-white`}
                  >
                    {skill.icon}
                  </motion.div>
                </div>

                {/* Skill name */}
                <h3 className="text-xl font-bold text-white text-center mb-2">
                  {skill.name}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-center text-sm">
                  {skill.description}
                </p>

                {/* Hover effect line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

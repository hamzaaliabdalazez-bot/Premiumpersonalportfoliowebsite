import { motion } from "motion/react";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const ProjectCard = ({ project, deployedProjects }) => {
  // Check if this project is deployed on Netlify
  const isDeployed = deployedProjects?.some(
    (deployed) =>
      deployed.name.toLowerCase() === project.name.toLowerCase() ||
      deployed.name.toLowerCase().replace(/-/g, "") ===
        project.name.toLowerCase().replace(/-/g, "")
  );

  const liveUrl = isDeployed
    ? deployedProjects.find(
        (deployed) =>
          deployed.name.toLowerCase() === project.name.toLowerCase() ||
          deployed.name.toLowerCase().replace(/-/g, "") ===
            project.name.toLowerCase().replace(/-/g, "")
      )?.url
    : null;

  // Language color mapping
  const languageColors = {
    JavaScript: "from-yellow-400 to-yellow-600",
    TypeScript: "from-blue-400 to-blue-600",
    HTML: "from-orange-400 to-orange-600",
    CSS: "from-blue-300 to-blue-500",
    Python: "from-green-400 to-green-600",
    Java: "from-red-400 to-red-600",
    default: "from-gray-400 to-gray-600",
  };

  const gradientColor =
    languageColors[project.language] || languageColors.default;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="group relative h-full"
    >
      <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 shadow-xl hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-300 h-full flex flex-col">
        {/* Language Badge */}
        {project.language && (
          <div className="mb-4">
            <span
              className={`inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${gradientColor} text-white`}
            >
              {project.language}
            </span>
          </div>
        )}

        {/* Project Name */}
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-500 transition-colors">
          {project.name}
        </h3>

        {/* Description */}
        <p className="text-gray-400 mb-6 flex-grow line-clamp-3">
          {project.description || "No description available"}
        </p>

        {/* Links */}
        <div className="flex gap-3">
          <motion.a
            href={project.html_url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-700/50 hover:bg-gray-700 text-white rounded-lg transition-colors border border-gray-600"
          >
            <FiGithub size={18} />
            <span className="text-sm">GitHub</span>
          </motion.a>

          {liveUrl && (
            <motion.a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg shadow-lg shadow-red-500/50 hover:shadow-red-500/80 transition-all"
            >
              <FiExternalLink size={18} />
              <span className="text-sm">Live Demo</span>
            </motion.a>
          )}
        </div>

        {/* Hover effect line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl" />
      </div>
    </motion.div>
  );
};

export default ProjectCard;

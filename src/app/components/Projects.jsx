import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router";
import ProjectCard from "./ProjectCard";
import { getDeployedProjects } from "../utils/netlifyProjects";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [projects, setProjects] = useState([]);
  const [deployedProjects, setDeployedProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        
        // Fetch GitHub repositories
        const githubResponse = await fetch(
          "https://api.github.com/users/hamzaaliabdalazez-bot/repos?sort=updated&per_page=100"
        );
        
        if (!githubResponse.ok) {
          throw new Error("Failed to fetch repositories");
        }
        
        const githubData = await githubResponse.json();
        
        // Filter out forks and sort by updated date
        const filteredProjects = githubData
          .filter((repo) => !repo.fork)
          .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
          .slice(0, 6); // Get top 6 for home page
        
        setProjects(filteredProjects);

        // Get deployed projects from centralized mapping
        setDeployedProjects(getDeployedProjects());
        setLoading(false);
      } catch (err) {
        console.error("Error fetching projects:", err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section
      id="projects"
      ref={ref}
      className="py-24 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-red-500 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-red-500">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full" />
          <p className="text-gray-400 mt-6 text-lg">
            Check out my latest work from GitHub
          </p>
        </motion.div>

        {/* Loading State */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 h-64 animate-pulse"
              >
                <div className="h-6 bg-gray-700 rounded w-1/3 mb-4" />
                <div className="h-8 bg-gray-700 rounded w-3/4 mb-3" />
                <div className="h-4 bg-gray-700 rounded w-full mb-2" />
                <div className="h-4 bg-gray-700 rounded w-2/3" />
              </div>
            ))}
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="text-center py-12">
            <div className="bg-red-500/10 border border-red-500/50 rounded-xl p-8 max-w-md mx-auto">
              <p className="text-red-500 text-lg mb-2">Failed to load projects</p>
              <p className="text-gray-400">{error}</p>
            </div>
          </div>
        )}

        {/* Projects Grid */}
        {!loading && !error && projects.length > 0 && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  deployedProjects={deployedProjects}
                />
              ))}
            </div>

            {/* View All Projects Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center"
            >
              <Link to="/projects">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg shadow-lg shadow-red-500/50 hover:shadow-red-500/80 transition-all"
                >
                  View All Projects
                  <FiArrowRight size={20} />
                </motion.button>
              </Link>
            </motion.div>
          </>
        )}

        {/* No Projects State */}
        {!loading && !error && projects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No projects found</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
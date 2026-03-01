import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import { FiArrowLeft, FiSearch } from "react-icons/fi";
import ProjectCard from "../components/ProjectCard";
import { getDeployedProjects } from "../utils/netlifyProjects";

const AllProjects = () => {
  const [projects, setProjects] = useState([]);
  const [deployedProjects, setDeployedProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("All");

  useEffect(() => {
    const fetchAllProjects = async () => {
      try {
        setLoading(true);

        // Fetch all GitHub repositories
        const githubResponse = await fetch(
          "https://api.github.com/users/hamzaaliabdalazez-bot/repos?sort=updated&per_page=100"
        );

        if (!githubResponse.ok) {
          throw new Error("Failed to fetch repositories");
        }

        const githubData = await githubResponse.json();

        // Filter out forks and sort by updated date
        const filteredData = githubData
          .filter((repo) => !repo.fork)
          .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

        setProjects(filteredData);
        setFilteredProjects(filteredData);

        // Get deployed projects from centralized mapping
        setDeployedProjects(getDeployedProjects());
        setLoading(false);
      } catch (err) {
        console.error("Error fetching projects:", err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchAllProjects();
  }, []);

  // Get unique languages
  const languages = [
    "All",
    ...new Set(projects.map((p) => p.language).filter(Boolean)),
  ];

  // Filter projects based on search and language
  useEffect(() => {
    let filtered = projects;

    // Filter by language
    if (selectedLanguage !== "All") {
      filtered = filtered.filter((p) => p.language === selectedLanguage);
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.description?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredProjects(filtered);
  }, [searchQuery, selectedLanguage, projects]);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-xl shadow-lg shadow-red-500/10 border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between mb-6">
            <Link to="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 text-gray-300 hover:text-red-500 transition-colors"
              >
                <FiArrowLeft size={20} />
                Back to Home
              </motion.button>
            </Link>
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl md:text-3xl font-bold"
            >
              All <span className="text-red-500">Projects</span>
            </motion.h1>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors"
              />
            </div>

            {/* Language Filter */}
            <div className="md:w-64">
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white focus:outline-none focus:border-red-500 transition-colors cursor-pointer"
              >
                {languages.map((lang) => (
                  <option key={lang} value={lang}>
                    {lang === "All" ? "All Languages" : lang}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Results count */}
          {!loading && !error && (
            <p className="text-gray-400 text-sm mt-4">
              Showing {filteredProjects.length} of {projects.length} projects
            </p>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Loading State */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(9)].map((_, index) => (
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
              <p className="text-red-500 text-lg mb-2">
                Failed to load projects
              </p>
              <p className="text-gray-400">{error}</p>
            </div>
          </div>
        )}

        {/* Projects Grid */}
        {!loading && !error && filteredProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                deployedProjects={deployedProjects}
              />
            ))}
          </motion.div>
        )}

        {/* No Results */}
        {!loading && !error && filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <div className="bg-gray-800/30 border border-gray-700/50 rounded-xl p-8 max-w-md mx-auto">
              <p className="text-gray-400 text-lg mb-2">No projects found</p>
              <p className="text-gray-500 text-sm">
                Try adjusting your search or filter criteria
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllProjects;
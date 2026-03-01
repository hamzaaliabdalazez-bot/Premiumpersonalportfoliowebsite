// Manual Netlify live demo links mapping
// Add your Netlify project URLs here to connect them to GitHub repositories

export const netlifyProjects = {
  "hamza-ali-portfolio-zoma": "https://hamza-ali-portfolio-zoma.netlify.app",
  "car-store-zoma": "https://car-store-zoma.netlify.app",
  "my-portofolio-zoma": "https://my-portofolio-zoma.netlify.app",
  "gym-pro0by-zoma": "https://gym-pro0by-zoma.netlify.app",
  "coder-coffe-by-nextjs-by-zoma": "https://coder-coffe-by-nextjs-by-zoma.netlify.app",
};

// Helper function to get deployed projects array
export const getDeployedProjects = () => {
  return Object.keys(netlifyProjects).map((projectName) => ({
    name: projectName,
    url: netlifyProjects[projectName],
  }));
};

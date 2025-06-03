import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Fullstack e-commerce site with React, Node.js, and MongoDB with payment integration.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      liveDemo: "#",
      image: "/project1.jpg" // Place in public folder
    },
    {
      title: "Portfolio Website",
      description: "Modern portfolio built with React and Tailwind CSS (this website).",
      tags: ["React", "Tailwind CSS", "Responsive"],
      github: "#",
      liveDemo: "#",
      image: "/project2.jpg"
    },
    {
      title: "Task Management App",
      description: "Kanban-style task manager with drag-and-drop functionality.",
      tags: ["React", "Django", "REST API"],
      github: "#",
      liveDemo: "#",
      image: "/project3.jpg"
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather application using OpenWeather API.",
      tags: ["JavaScript", "API", "CSS3"],
      github: "#",
      liveDemo: "#",
      image: "/project4.jpg"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900/90">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-4">
          Mes <span className="text-purple-400">Projets</span>
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Une sélection de mes projets récents couvrant différents domaines du développement web.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-purple-500/50 transition-all duration-300 group"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-gray-700/50 text-purple-100 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-400 hover:text-white transition"
                  >
                    <FaGithub className="mr-2" /> Code
                  </a>
                  <a 
                    href={project.liveDemo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-400 hover:text-white transition"
                  >
                    <FaExternalLinkAlt className="mr-2" /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://github.com/OmgbakeviN" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-purple-500 text-purple-400 rounded-lg font-medium hover:bg-purple-900/30 transition"
          >
            Voir plus sur GitHub
            <FaGithub className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
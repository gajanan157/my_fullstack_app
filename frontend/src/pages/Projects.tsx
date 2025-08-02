interface Project {
  title: string;
  description: string;
  techStack: string[];
  demoUrl?: string;
  codeUrl?: string;
}

const projects: Project[] = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio built using React, Tailwind CSS, and deployed on AWS. Features responsive design and smooth animations.",
    techStack: ["React", "Tailwind CSS", "AWS"],
    demoUrl: "https://your-portfolio-link.com",
    codeUrl: "https://github.com/yourname/portfolio",
  },
  {
    title: "Task Management App",
    description:
      "A full-stack task management system with user authentication and CRUD functionality.",
    techStack: ["Vue", "Spring Boot", "MySQL"],
    demoUrl: "https://demo-task-app.com",
    codeUrl: "https://github.com/yourname/task-app",
  },
  {
    title: "E-commerce Backend API",
    description:
      "RESTful API for e-commerce platform with features like product management, user roles, and JWT authentication.",
    techStack: ["Java", "Spring Boot", "MySQL"],
    codeUrl: "https://github.com/yourname/ecommerce-api",
  },
];

const Projects = () => {
  return (
    <section className="min-h-screen px-6 py-12 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Projects</h2>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-gray-200 dark:border-gray-700 p-6 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="text-sm bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-white px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Live Demo
                  </a>
                )}
                {project.codeUrl && (
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    View Code
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

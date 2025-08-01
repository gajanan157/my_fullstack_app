import React from "react";
import { useParams } from "react-router-dom";

const projectData = [
  {
    id: "1",
    title: "Portfolio Website",
    description: "A personal portfolio site built using React and Tailwind CSS.",
    fullDescription:
      "This portfolio showcases my skills and projects using a modern responsive layout, dark mode, and smooth animations. Hosted on AWS S3 and uses GitHub Actions for CI/CD.",
    techStack: ["React", "Tailwind CSS", "AWS S3"],
    demoUrl: "https://your-portfolio.com",
    codeUrl: "https://github.com/yourname/portfolio",
  },
  {
    id: "2",
    title: "Task Management App",
    description: "A full-stack task manager with authentication.",
    fullDescription:
      "Users can register, log in, create, update, and delete tasks. Built with Vue on frontend, Spring Boot REST API, and MySQL database.",
    techStack: ["Vue", "Spring Boot", "MySQL"],
    demoUrl: "https://task-demo.com",
    codeUrl: "https://github.com/yourname/task-app",
  },
];

const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  const project = projectData.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center">
        <h1 className="text-2xl font-semibold">Project not found.</h1>
      </div>
    );
  }

  return (
    <section className="min-h-screen px-6 py-12 bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
        <p className="mb-6 text-gray-600 dark:text-gray-300">{project.fullDescription}</p>

        <h4 className="font-semibold mb-2">Tech Stack:</h4>
        <ul className="flex gap-2 flex-wrap mb-6">
          {project.techStack.map((tech, index) => (
            <li
              key={index}
              className="text-sm bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-white px-2 py-1 rounded"
            >
              {tech}
            </li>
          ))}
        </ul>

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
              Source Code
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;

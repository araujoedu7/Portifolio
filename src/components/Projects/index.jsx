import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projectsData = [
  {
    title: "LandingPages",
    description: "",
    technologies: ["React Js"],
    githubLink: "https://github.com/araujoedu7/BibliotecaFilmes",
    demoLink: "#",
  },
  {
    title: "Sistemas com PHP",
    description: "Um projeto para gerenciamento de projetos.",
    technologies: ["JavaScript", "BootStrap", "HTML", "PHP", "MySql"],
    githubLink: "https://github.com/araujoedu7/sistemaGerenciamento.git",
    demoLink: "#",
  },
  {
    title: "Formulários e Cruds",
    description: "Gere forumlários e CRUDs para sua empresa.",
    technologies: ["React", "Tailwind"],
    githubLink: "https://github.com/araujoedu7/loginForm.git",
    demoLink: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Meus Projetos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap mb-4">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 text-blue-600 text-sm font-medium mr-2 mb-2 px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-800 transition duration-300"
                >
                  <FaGithub className="text-2xl" />
                </a>
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-800 transition duration-300"
                >
                  <FaExternalLinkAlt className="text-2xl" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

import React, { useEffect, useState } from "react";
import "./styles.css";
import projectsData from "../../Assets/Data/projectsData.json";

const ProjectsPage = () => {
  const [projets, setProjets] = useState(projectsData);

  useEffect(() => {
    setProjets(projectsData);
  }, []);

  return (
    <div className="container" id="projects">
      <h1>ProjectsPage</h1>
      <div className="card-list">
        {projets.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="image-container">
              <img
                src={project.url}
                className="project-image"
                alt={project.title}
              />
              <div className="button-overlay">
                <a
                  href={project.liveSite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-button"
                >
                  Live Server
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-button"
                >
                  Repositório
                </a>
              </div>
            </div>
            <div className="project-content-intro">
              <p className="project-title">{project.title}</p>
              <p className="project-description">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
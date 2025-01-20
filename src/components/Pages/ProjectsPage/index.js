import React, { useEffect, useState } from "react";

import "./styles.css";
//import Carousel from "react-elastic-carousel";
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
            <img src={project.url} className="project-image" alt={project.title}/>
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

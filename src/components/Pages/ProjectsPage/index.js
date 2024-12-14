import React, { useRef, useState } from "react";

import "./styles.css";
//import Carousel from "react-elastic-carousel";
import projectsData from "../../Assets/Data/projectsData.json";

const ProjectsPage = () => {
  const [projets, setProjets] = useState(projectsData);

  return (
    <div className="container__projectspage" id="projects">
      <h1 className="project__title">ProjectsPage</h1>
      <div className="card__list">
        <div className="project__card"></div>
        <div className="project__card"></div>
        <div className="project__card"></div>
      </div>
    </div>
  );
};

export default ProjectsPage;

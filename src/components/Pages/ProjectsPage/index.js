import React, { useRef, useState } from "react";

import "./styles.css";
//import Carousel from "react-elastic-carousel";
import projectsData from '../../Assets/Data/projectsData.json'

const ProjectsPage = () => {
  const itemsPerPage = 1;
  const items = [];
  const ref = useRef(null);
  const totalPages = Math.ceil(items.length / itemsPerPage);
  let resetTimeout;

  const [projets, setProjets] = useState(projectsData)



  return (
    

    <div className="container__projectspage">
      <h1>ProjectsPage</h1>

      <div className="project__card"></div>
    </div>
  );
};

export default ProjectsPage;

import React, {useRef} from "react";

import './styles.css'
import Carousel from "react-elastic-carousel";


const ProjectsPage = () => {
    const itemsPerPage = 1
    const items = [];
    const ref = useRef(null);
    const totalPages = Math.ceil(items.length / itemsPerPage)
    let resetTimeout;

    return (
        <div className="container__projectspage">
            <h1>ProjectsPage</h1>

            <Carousel 
          ref={ref}
          enableAutoPlay
          autoPlaySpeed={5000}
          onNextEnd={({ index }) => {
                clearTimeout(resetTimeout)
                if (index + 1 === totalPages) {
                   resetTimeout = setTimeout(() => {
                      ref.current.goTo(0)
                  }, 5000)
                }
           }} 
           sitemsToShow={itemsPerPage}></Carousel>
        </div>
    )
}

export default ProjectsPage;
import React, { useEffect, useState } from "react";
import "./styles.css";

import  SkillData  from "../../Assets/Data/skillData.json";

const SkillsPage = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    setSkills(SkillData);
  });

  return (
    <div className="container-skills" id="skills">
      <h1 className="skills-title">Skills</h1>
      <div className="skills-list">
        {skills.map((skill) => (
            <div className="skills-item" key={skill.id}>
              <span className="skills-item-name">{skill.title}</span>
            </div>
          ))}
        <a
          href="https://www.linkedin.com/in/rhaneyko-honorio-73657819b/details/certifications/"
          className="skills-certifications"
        >
          Ver certificações
        </a>
      </div>
    </div>
  );
};

export default SkillsPage;

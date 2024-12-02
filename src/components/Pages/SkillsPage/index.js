import React from "react";

import CssImg from "../../Assets/Images/css.png";
import JsImg from "../../Assets/Images/JavaScript.png";
import ReactImg from "../../Assets/Images/React.png";

import "./styles.css";

const SkillsPage = () => {
  return (
    <div className="container__skills">
      <h1 className="skills__title">Skills</h1>
      <div className="skills__list">
        <div className="skills__item">HTML</div>
        <div className="skills__item">
          <img src={CssImg}  className="skills__item__img"/>
          CSS
        </div>
        <div className="skills__item">
          <img src={JsImg} className="skills__item__img"/>
          JAVASCRIPT
        </div>
        <div className="skills__item">
          <img src={ReactImg} className="skills__item__img"/>
          REACT
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;

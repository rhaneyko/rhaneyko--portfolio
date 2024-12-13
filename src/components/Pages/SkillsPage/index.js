import React from "react";

import HtmlImg from "../../Assets/Images/html.png";
import CssImg from "../../Assets/Images/css.png";
import JsImg from "../../Assets/Images/JavaScript.png";
import ReactImg from "../../Assets/Images/React.png";

import "./styles.css";

const SkillsPage = () => {
  return (
    <div className="container__skills" id="skills">
      <h1 className="skills__title">Skills</h1>
      <div className="skills__list">
        <div className="skills__item">
          <img src={HtmlImg} className="skills__item__img" alt="HTML Icon" />
          <span className="skills__item__name">HTML</span>
        </div>
        <div className="skills__item">
          <img src={CssImg} className="skills__item__img" alt="CSS Icon" />
          <span className="skills__item__name">CSS</span>
        </div>
        <div className="skills__item">
          <img src={JsImg} className="skills__item__img" alt="JavaScript Icon" />
          <span className="skills__item__name">JAVASCRIPT</span>
        </div>
        <div className="skills__item">
          <img src={ReactImg} className="skills__item__img" alt="React Icon" />
          <span className="skills__item__name">REACT</span>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;

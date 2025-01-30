import React from "react";

import "./styles.css";
import cvRhaneyko from "../../Assets/Documents/cvRhaneyko.pdf";
import ProfileImage from "../../Assets/Images/profile__image.jpg";

import { FaLinkedin, FaGithub } from "react-icons/fa";


const HomePage = () => {
  const openLinkedin = () => {
    window.open("https://www.linkedin.com/in/rhaneyko");
  };

  const openGithub = () => {
    window.open("https://github.com/rhaneyko");
  };
  return (
    <div className="container__homepage" id="home">
      <div className="greetings">
        <span className="greetings__text">Olá,</span>
        <span className="greetings__text">Me chamo Gabriel Franco.</span>
        <span className="greetings__role">Desenvolvedor Frontend</span>

        <div className="buttons">
          <a href={cvRhaneyko} download="cvRhaneyko" className="buttons__cv">
            Download CV
          </a>

          <FaLinkedin className="linkedin__icon" onClick={openLinkedin} />
          <FaGithub className="github__icon" onClick={openGithub} />
        </div>
      </div>

      <div className="profile">
        <img
          className="profile__image"
          src={ProfileImage}
          alt="Foto de perfil"
        />
      </div>
    </div>
  );
};

export default HomePage;

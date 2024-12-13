import React from "react";

import "./styles.css";
import cvRhaneyko from "../../Assets/Documents/cvRhaneyko.pdf";
import ProfileImage from "../../Assets/Images/profile__image.jpg";

const HomePage = () => {
  const openLinkedin = () => {
    window.open("https://www.linkedin.com/in/rhaneyko-honorio-73657819b/");
  };
  return (
    <div className="container__homepage" id="home">
      <div className="greetings">
        <span className="greetings__text">Olá,</span>
        <span className="greetings__text">Me chamo Rhaneyko.</span>
        <span className="greetings__role">Desenvolvedor Frontend</span>

        <div className="buttons">
          <a href={cvRhaneyko} download="cvRhaneyko" className="buttons__cv">
            Download CV
          </a>

          <button className="buttons__linkedin" onClick={openLinkedin}>
            LinkedIn
          </button>
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

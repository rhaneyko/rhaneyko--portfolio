import React from "react";

import "./styles.css";
import ProfileImage from "../../Assets/Images/profile__image.jpg";

const HomePage = () => {
  return (
    <div className="container">

      <div className="greetings">
        <span className="greetings__text">Olá,</span>
        <span className="greetings__text">Me chamo Rhaneyko.</span>
        <span className="greetings__role">Desenvolvedor Frontend</span>
      
      <div className="buttons">
        <button className="buttons__cv">Download CV</button>
        <button className="buttons__linkedin">LinkedIn</button>
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

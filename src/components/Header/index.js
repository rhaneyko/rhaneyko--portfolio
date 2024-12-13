import React from "react";

import { BrowserRouter as Router } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

import "./styles.css";

const Header = () => {
  return (
    <header className="header">
      <Router>
        <div className="nav-links">

        <div className="logo" smooth to="#home">
          <p>logo</p>
        </div>
          <ul>
            <NavHashLink smooth to="#home">
              HOME
            </NavHashLink>
            <NavHashLink smooth to="#skills">
              SKILLS
            </NavHashLink>
            <NavHashLink smooth to="#projects" >
              PROJETOS
            </NavHashLink>
            <NavHashLink smooth to="#contact">
              CONTATOS
            </NavHashLink>
          </ul>
        <button className="contact-button">Contato</button>
        </div>
      </Router>
    </header>
  );
};

export default Header;

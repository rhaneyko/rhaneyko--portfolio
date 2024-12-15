import React from "react";

import { BrowserRouter as Router } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

import "./styles.css";

const scrollWithOffset = (el) => {
  const yOffset = -70;
  const yCoordinate =
    el.getBoundingClientRect().top + window.scrollY + yOffset;
  window.scrollTo({ top: yCoordinate, behavior: "smooth" });
};

const Header = () => {
  return (
    <header className="header">
      <Router>
        <div className="nav-links">
          
          <ul>
            <NavHashLink smooth to="#home" scroll={scrollWithOffset}>
              HOME
            </NavHashLink>
            <NavHashLink smooth to="#skills" scroll={scrollWithOffset}>
              SKILLS
            </NavHashLink>
            <NavHashLink smooth to="#projects" scroll={scrollWithOffset}>
              PROJETOS
            </NavHashLink>
            <NavHashLink smooth to="#contact" scroll={scrollWithOffset}>
              CONTATOS
            </NavHashLink>
          </ul>
        </div>
          <NavHashLink className="contact-button" smooth to="#contact">Contato</NavHashLink>
      </Router>
    </header>
  );
};

export default Header;

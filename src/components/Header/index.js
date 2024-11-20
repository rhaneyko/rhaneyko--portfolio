import React from "react";

import "./styles.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <p>logo</p>
      </div>
      <nav>
        <ul className="nav-links">
          <li>
            <a href="#home">HOME</a>
          </li>
          <li>
            <a href="#skills">SKILLS</a>
          </li>
          <li>
            <a href="#projects">PROJETOS</a>
          </li>
        </ul>
      </nav>
      <button className="contact-button">Contato</button>
    </header>
  );
};

export default Header;

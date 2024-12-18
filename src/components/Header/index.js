import React, { useState } from 'react';
import { NavHashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from 'react-router-dom';

import './styles.css'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <Router>
        <div className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <ul onClick={closeMenu}>
            <li>
              <NavHashLink smooth to="#home">HOME</NavHashLink>
            </li>
            <li>
              <NavHashLink smooth to="#skills">SKILLS</NavHashLink>
            </li>
            <li>
              <NavHashLink smooth to="#projects">PROJETOS</NavHashLink>
            </li>
            <li>
              <NavHashLink smooth to="#contact">CONTATOS</NavHashLink>
            </li>
          </ul>
          <NavHashLink className="contact-button" smooth to="#contact" onClick={closeMenu}>
            Contato
          </NavHashLink>
        </nav>
      </Router>
    </header>
  );
}

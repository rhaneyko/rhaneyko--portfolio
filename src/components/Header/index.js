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


        <div className="logo">
          <NavHashLink smooth to="#home">Rhaneyko</NavHashLink>
        </div>
        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <ul onClick={closeMenu}>
            <li>
              <NavHashLink smooth to="#home">Início</NavHashLink>
            </li>
            <li>
              <NavHashLink smooth to="#skills">Habilidades</NavHashLink>
            </li>
            <li>
              <NavHashLink smooth to="#projects">Projetos</NavHashLink>
            </li>
            <li>
              <NavHashLink smooth to="#contact">Contatos</NavHashLink>
            </li>
          </ul>
        </nav>
      </Router>
    </header>
  );
}

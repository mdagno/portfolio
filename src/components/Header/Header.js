import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  const renderNavLinks = () => {
    return (
      <ul className="navLinks">
        <Link to="/">
          <li>About</li>
        </Link>
        <Link to="/projects">
          <li>Portfolio</li>
        </Link>
        <Link to="/contactme">
          <li>Contact Me</li>
        </Link>
      </ul>
    )
  }
  return (
    <header>
      <h1 id="name">Marlon Agno</h1>
      <h2>Full Stack Web Developer</h2>
      {renderNavLinks()}
    </header>
  )
}

export default Header;
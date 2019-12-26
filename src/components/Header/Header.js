import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { CSSTransiton } from 'react-transition-group';

function Header() {
  return (
    <header>
      <h1 id="name">Marlon Agno</h1>
      <h2>Full Stack Web Developer</h2>
    </header>
  )
}

export default Header;
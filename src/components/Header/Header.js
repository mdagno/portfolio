import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { CSSTransiton } from 'react-transition-group';
import NavBar from '../NavBar/NavBar';

function Header(props) {
  return (
    <header>
      <Link to="/">
      <h1 id="name">Marlon Agno</h1>
      <h2>Full Stack Developer</h2>
      </Link>
      <NavBar location={props.location}/>
    </header>
  )
}

export default Header;
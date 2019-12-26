import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import ProjectNav from '../ProjectNav/ProjectNav';
import {Transition }from 'react-transition-group';

export default class NavBar extends React.Component {
  renderNavLinks = () => {
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
    navBarHeight = () => {
      return {
        height: window.innerHeight
      }
    }
  render() {
  
    return (
      <nav className='navbar' style={this.navBarHeight()}>
        {this.renderNavLinks()}
        {this.props.location.location === "/projects" ? <ProjectNav /> : null}
      </nav>
    )
  }
}
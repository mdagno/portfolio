import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import ProjectNav from '../ProjectNav/ProjectNav';
import {Transition }from 'react-transition-group';
import gitHubIcon from '../../logos/github-icon-1.svg';
import linkedInIcon from '../../logos/linkedin-icon-2.svg';
import gmailIcon from '../../logos/gmail-icon.svg'

export default class NavBar extends React.Component {
  renderNavLinks = () => {
    return (
      <ul className="navLinks">
        <Link to="/">
          <li>About</li>
        </Link>
        <Link to="/contactme">
          <li>Contact Me</li>
        </Link>
        <Link to="/projects">
          <li styles={this.props.location.location==='/projects' ? 'font-size: 200px;' : null}>Projects</li>
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
    console.log(this.props.location.location)
    return (
      <nav className="navbar" style={this.navBarHeight()}>
        <div className="icon-links">
          <a href="mailto:mdj.agno@gmail.com">
          <img src={gmailIcon} alt="Logo for gmail" />
          </a>
          <a href="https://github.com/mdagno/" target="_blank" rel="noopener noreferrer">
          <img src={gitHubIcon} alt='Logo for GitHub'/>
          </a>
          <a href="https://www.linkedin.com/in/marlon-agno-75a858108/" target="_blank" rel="noopener noreferrer">
          <img src={linkedInIcon} alt='Logo for LinkedIn'/>
          </a>
        </div>
        {this.renderNavLinks()}
        {this.props.location.location === "/projects" ? <ProjectNav /> : null}
      </nav>
    )
  }
}
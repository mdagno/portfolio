import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import ProjectNav from '../ProjectNav/ProjectNav';
import {Transition }from 'react-transition-group';
import gitHubIcon from '../../logos/github-icon-1.svg';
import linkedInIcon from '../../logos/linkedin-icon-2.svg';
import gmailIcon from '../../logos/gmail-icon.svg'

export default class NavBar extends React.Component {
  state = {
    windowHeight: null,
    projects: false,
  }

  componentDidMount() {
    this.setState({windowHeight: window.innerHeight})
    window.addEventListener('resize', this.handleResize)
  }

  handleResize = () => {
    if(Math.abs(this.state.windowHeight - window.innerHeight) > 25) {
      this.setState({windowHeight: window.innerHeight})
    }
  }

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
          <li>Projects</li>
        </Link>
      </ul>
    )
    }
  navBarHeight = () => {
    return {
      height: this.state.windowHeight
    }
  }
  render() {
    return (
      <nav className="navbar" style={window.innerWidth > 1024 ? this.navBarHeight() : null}>
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
        {this.props.location === "/projects" ? <ProjectNav /> : null}
      </nav>
    )
  }
}
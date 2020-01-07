import React from 'react';
import * as Scroll from 'react-scroll';
import { Link as ScrollLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import './ProjectNav.css'
import { CSSTransition } from 'react-transition-group';

export default class ProjectNav extends React.Component {
  state = {
    appear: false,
  }

  componentDidMount() {
    this.setState({appear: true})
  }

  renderProjectLinks = () => {
    const projects = ['Poker WinRate', 'Spaced Repetition', 'Now Playing']
    console.log(window.innerWidth < 768)
    return projects.map((project, index) => {
      return (
        <li key={index}>
        <ScrollLink activeClass="active" to={project.toLowerCase().replace(" ", "-")} spy={true} smooth={true} offset={(window.innerWidth < 768) ? -175 : -80} duration={500}>{project}</ScrollLink>
        </li>
      )
    })
  }

  render() {
    const {appear} = this.state;
    return (
      <CSSTransition
      in={appear}
      appear={true}
      timeout={200}
      classNames="my-node"
      >
      <ul className="project-links">
        <h4>Projects</h4>
        {this.renderProjectLinks()}
      </ul>
      </CSSTransition>
    )
  }
}
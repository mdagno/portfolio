import React from 'react';
import './Bio.css'
import { CSSTransition } from 'react-transition-group';
import chaiIcon from '../../assets/logos/chai.svg';
import cssIcon from '../../assets/logos/css3.svg';
import htmlIcon from '../../assets/logos/html5.svg';
import javascriptIcon from '../../assets/logos/javascript.svg';
import jestIcon from '../../assets/logos/jest-0.svg';
import jqueryIcon from '../../assets/logos/jquery-1.svg';
import mochaIcon from '../../assets/logos/mocha-1.svg';
import nodejsIcon from '../../assets/logos/nodejs-icon.svg';
import postgresIcon from '../../assets/logos/postgresql.svg';
import reactIcon from '../../assets/logos/react.svg';

class Bio extends React.Component {
  state =  {
    appear: false
  }

  componentDidMount() {
    this.setState({appear: true})
  }

  renderLogos = () => {
    const logos = [ reactIcon, chaiIcon, cssIcon, htmlIcon, javascriptIcon, jestIcon, mochaIcon, nodejsIcon, postgresIcon];
    return logos.map((icon, index) => {
      return (
        <img key={index} className="stack-logos" src={icon} alt={`${icon.replace('Icon','')} logo`}/>
      )
    })
  }

  renderTechnologiesList = () => {
    const techStack = ['JavaScript', 'React', 'HTML', 'Node', 'Express', 'Chai', 'Mocha', 'Jest', 'Enzyme', 'jQuery' ]
    return techStack.map((tech, index) => {
      return (
      <li className="tech-list-element" key={index}>{tech}</li>
      )
    })
  }

  render() {
    return (
      <CSSTransition
      in={this.state.appear}
      appear={true}
      timeout={200}
      classNames="my-node"
      >
      <div id="about-me" style={this.props.windowWidth >= 1024 ? this.props.margin : null}>
        <h3 className="section-header">ABOUT ME</h3>
        <p>My name is Marlon Agno and I am a full stack web developer. As a scientist and engineer, I aspire to cultivate a genuine curiosity of the world around me.  After graduating with a degree in engineering and working as a research engineer, I found myself looking to learn more about one of the pillar technologies that the world is built on today, software. I chose to become a full-stack developer to achieve a deeper understanding of technology, as well as be in a field that is conducive to challenging myself and continually learning. </p>
        <h4>Technologies/Skills</h4>
        <ul id='technologies-list'>
         {this.renderTechnologiesList()}
        </ul>
        <div className="logos">
          {this.renderLogos()}
        </div>
      </div>
      </CSSTransition>
    )
  }
}

export default Bio;
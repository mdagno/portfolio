import React from 'react';
import './Bio.css'
import { CSSTransition } from 'react-transition-group';
import chaiIcon from '../../logos/chai.svg';
import cssIcon from '../../logos/css3.svg';
import htmlIcon from '../../logos/html5.svg';
import javascriptIcon from '../../logos/javascript.svg';
import jestIcon from '../../logos/jest-0.svg';
import jqueryIcon from '../../logos/jquery-1.svg';
import mochaIcon from '../../logos/mocha-1.svg';
import nodejsIcon from '../../logos/nodejs-icon.svg';
import postgresIcon from '../../logos/postgresql.svg';
import reactIcon from '../../logos/react.svg';

class Bio extends React.Component {
  state =  {
    appear: false
  }

  componentDidMount() {
    this.setState({appear: true})
  }

  renderLogos = () => {
    const logos = [ reactIcon, chaiIcon, cssIcon, htmlIcon, javascriptIcon, jestIcon, mochaIcon, nodejsIcon, postgresIcon];
    return logos.map(icon => {
      return (
        <img className="stack-logos" src={icon} alt={`${icon.replace('Icon','')} logo`}/>
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
      <div id="about-me" style={this.props.windowWidth > 768 ? this.props.margine : null}>
        <h3 className="section-header">About me</h3>
        <p>My name is Marlon Agno and I am a full stack web developer. As a scientist and engineer, I aspire to cultivate a genuine curiosity of the world around me.  After graduating with a degree in engineering and working as a research engineer, I still saw a big gap in my personal understanding of one of the pillar technologies that the world is built on today, software. I chose to become a full-stack developer to achieve a deeper understanding of technology, as well as be in a field that is conducive to challenging myself and continually learning. </p>
        <div className="logos">
          {this.renderLogos()}
        </div>
      </div>
      </CSSTransition>
    )
  }
}

export default Bio;
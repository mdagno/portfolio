import React from 'react';
import './Bio.css'
import { CSSTransition } from 'react-transition-group';

class Bio extends React.Component {
  state =  {
    appear: false
  }

  componentDidMount() {
    this.setState({appear: true})
  }
  render() {
    return (
      <CSSTransition
      in={this.state.appear}
      appear={true}
      timeout={200}
      classNames="my-node"
      >
      <div id="about-me">
        <h3 className="section-header">About me</h3>
        <p>My name is Marlon Agno and I am a full stack web developer. As a scientist and engineer, I aspire to cultivate a genuine curiosity of the world around me.  After graduating with a degree in engineering and working as a research engineer, I still saw a big gap in my personal understanding of one of the pillar technologies that the world is built on today, software. I chose to become a full-stack developer to achieve a deeper understanding of technology, as well as be in a field that is conducive to challenging myself and continually learning. </p>
      </div>
      </CSSTransition>
    )
  }
}

export default Bio;
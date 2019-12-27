import React from 'react';
import { CSSTransition } from 'react-transition-group';
import resume from '../../logos/Marlon Agno Resume.pdf'
export default class Resume extends React.Component {
  render() {
    return (
      <div id="resume">
        {<img src={resume}></img>}
      </div>
    )
  }
}
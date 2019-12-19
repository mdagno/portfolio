import React from 'react';
import './Portfolio.css'
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

export default class Portfolio extends React.Component {
  handleScrollLeft = () => {
    scroll.scrollMore(100);
  }

  handleScrollRight = () => {

  }

  render() {
    return (
      <div id="portfolio">
        <h3>Projects</h3>
        <ul>
          <li>Poker WinRate</li>
          <li>Spaced Repetition</li>
          <li>Now Playing</li>
        </ul>
        <div id="projects">
        <i class="fas fa-chevron-left" onClick={() => this.handleScrollLeft()}/>
        <i class="fas fa-chevron-right" onClick={() => this.handleScrollLeft()}/>
          <ul>
            <li className="block-one"></li>
            <li className="block-two"></li>
            <li className="block-three"></li>
          </ul>
        </div>
      </div>
    )
  }
}
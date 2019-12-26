import React from 'react';
import './Portfolio.css'
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import { CSSTransition } from 'react-transition-group';

export default class Portfolio extends React.Component {
  state = {
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
      timeout={300}
      classNames="my-node"
      >
      <div id="portfolio">
        <h3 className="section-header">Portfolio</h3>
        <ul>
          <li id="poker-winrate">
            <Element name="poker-winrate">
              <h4 className="project-title">Poker WinRate</h4> 
              <p className="project-description">
              Poker WinRate is an interactive web application that allows users to track results after each poker session to determine their win rate over time.  As much as poker is a game of skill, luck is a huge element of the game and it is important to track results to determine a player’s edge over a long period of time.  This application allows users to input their sessions indicating the game type, buy-in amount, and how much they cashed out.  The results are then compiled and sorted, and users are provided a data visualization in the analytics section.
              </p>
            </Element>
          </li>
          <li id="spaced-repetition">  
            <Element name="spaced-repetition">
            <h4 className="project-title">Spaced Repetition</h4> 
            </Element>
          </li>
          <li id="now-playing">
            <Element name="now-playing">
            <h4 className="project-title">Now Playing</h4> 
            </Element>  
          </li>
        </ul>
      </div>
      </CSSTransition>
    )
  }
}
import React from 'react';
import './Portfolio.css'
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import { CSSTransition } from 'react-transition-group';
import nowPlayingOne from '../../app-screenshots/now-playing-1.PNG';
import nowPlayingTwo from '../../app-screenshots/now-playing-2.PNG';
import nowPlayingThree from '../../app-screenshots/now-playing-3.PNG';
import pokerOne from '../../app-screenshots/poker-winrate-1.PNG';
import pokerTwo from '../../app-screenshots/poker-winrate-2.PNG';
import pokerThree from '../../app-screenshots/poker-winrate-3.PNG';


export default class Portfolio extends React.Component {
  state = {
    appear: false,
    pokerWinRateMain: pokerOne,
    spacedRepetitionMain: "",
    nowPlayingMain: nowPlayingOne,
    nowPlayingMainCaption: "",
    pokerWinRateMainCaption: "",
    spacedRepetitionMainCaption: "",
  }

  componentDidMount() {
    this.setState({appear: true})
  }

  renderProjectButtons = (liveLink, clientLink, serverLink) => {
    return (
      <div className="project-buttons">
        <a href={liveLink} target="_blank" rel="noopener noreferrer">
        <button>Live App</button>
        </a>
        <a href={clientLink} target="_blank" rel="noopener noreferrer">
        <button>Client Code</button>
        </a>
        <a href={serverLink} target="_blank" rel="noopener noreferrer">
        <button>Server Code</button>
        </a>
      </div>
    )
  }
  
  handleImageClick = (field, e) => {
    const caption = field + 'Caption'
    this.setState({
      [field]: e.target.src,
      [caption]: e.target.alt
    })
    console.log(caption)
  }

  renderNowPlayingCarousel = () => {
    return (
      <div className="image-carousel">
        <div className="thumbnail-images">
          <img name="nowPlayingOne" className="thumbnail-image" src={nowPlayingOne} alt="Screen shot of Now Playing home page" onClick={e => this.handleImageClick('nowPlayingMain', e)}/>
          <img name="nowPlayingTwo" className="thumbnail-image" src={nowPlayingTwo} alt="Screen shot of comment page on Now Playing" onClick={e => this.handleImageClick('nowPlayingMain', e)} />
          <img name="nowPlayingThree" className="thumbnail-image" src={nowPlayingThree} alt="Screen shot of comment page on Now Playing" onClick={e => this.handleImageClick('nowPlayingMain', e)} />
        </div>
        <img name="nowPlayingMain" className="main-image" src={this.state.nowPlayingMain} alt="Screen shot of Now Playing home page"/>
      </div>

    )
  }

  renderPokerWinrateCarousel = () => {
    return (
      <div className="image-carousel">
        <div className="thumbnail-images">
          <img name="pokerOne" className="thumbnail-image" src={pokerOne} alt="Screen shot of Now Playing home page" onClick={e => this.handleImageClick('pokerWinRateMain', e)}/>
          <img name="pokerTwo" className="thumbnail-image" src={pokerTwo} alt="Screen shot of comment page on Now Playing" onClick={e => this.handleImageClick('pokerWinRateMain', e)} />
          <img name="pokerThree" className="thumbnail-image" src={pokerThree} alt="Screen shot of comment page on Now Playing" onClick={e => this.handleImageClick('pokerWinRateMain', e)} />
        </div>
        <img name="pokerWinRateMain" className="main-image" src={this.state.pokerWinRateMain} alt="Screen shot of Now Playing home page"/>
      </div>

    )
  }


  render() {
    return (
      <CSSTransition
      in={this.state.appear}
      appear={true}
      timeout={300}
      classNames="my-node"
      >
      <div id="portfolio" style={this.props.windowWidth >= 1024 ? this.props.margin : null}>
        <h3 className="section-header">PROJECTS</h3>
        <ul>
          <li id="poker-winrate">
            <Element name="poker-winrate">
              <h4 className="project-title">Poker WinRate</h4> 
              <p className="project-description">
              Poker WinRate is an interactive web application that allows users to track results after each poker session to determine their win rate over time.  As much as poker is a game of skill, luck is a huge element of the game and it is important to track results to determine a player’s edge over a long period of time.  This application allows users to input their sessions indicating the game type, buy-in amount, and how much they cashed out.  The results are then compiled and sorted, and users are provided a data visualization in the analytics section.
              </p>
              {this.renderPokerWinrateCarousel()}
              <p className="main-image-caption">{this.state.pokerWinRateMainCaption}</p>
            </Element>
            {this.renderProjectButtons("", "https://github.com/thinkful-ei-gecko/marlon-poker-winrate-client", "https://github.com/thinkful-ei-gecko/marlon-poker-winrate-server")}
          </li>
          <li id="now-playing">
            <Element name="now-playing">
            <h4 className="project-title">Now Playing</h4>
              <p className="project-description">
              Now Playing introduces a new layer of social interaction for your media viewing experience.  In an age where everything is interconnected, a user may seek community or reactions during a viewing a particular media to and see how others reacted at exact times during the playback.  Now Playing is used by running the application concurrently with a movie to enrich the viewer’s experience by displaying a feed a comments rendered to the matching timestamp of the movie.  At anytime during a user’s viewing session, they are provided with a chatbox to input a comment or reaction and index it at that timestamp so that other users will see their comment at that time.
              </p>
              <p className="project-description">
              To simplify thread creation, a search engine was implemented using the TMDB API to pull data for existing movies and populate information for created threads including the time, poster, and trailer.  A live update of ongoing “happenings” is also featured on the home page of the application.
              </p>
              {this.renderNowPlayingCarousel()}
              <p className="main-image-caption">{this.state.nowPlayingMainCaption}</p>
            </Element>  
            {this.renderProjectButtons("https://playing-phi-ten.now.sh/", "https://github.com/thinkful-ei-gecko/NowPlaying-Client", "https://github.com/thinkful-ei-gecko/NowPlaying-Server")}
          </li>
          <li id="spaced-repetition">  
            <Element name="spaced-repetition">
              <h4 className="project-title">Spaced Repetition</h4> 
              <p className="project-description">
              Spaced repetition is a learning technique that is typically used with flash cards.  By displaying information that users have more trouble memorizing, the rate of learning is increased. 

              By implementing an algorithm on the server to correctly space cards that a user guesses correctly and incorrectly, the Spaced Repetition application can help a user memorize a language more effectively.  Currently, the supported language in Spaced Repetition is Morse.
              </p>
              {this.renderNowPlayingCarousel()}
              <p className="main-image-caption">{this.state.spacedRepetitionMainCaption}</p>
            </Element>
            {this.renderProjectButtons("", "https://github.com/thinkful-ei-gecko/shawn-marlon-spaced-rep", "https://github.com/thinkful-ei-gecko/shawn-marlon-spaced-rep-api")}
          </li>
        </ul>
      </div>
      </CSSTransition>
    )
  }
}






import React from 'react';
import './Portfolio.css'
import { Element, animateScroll as scroll } from 'react-scroll';
import { CSSTransition } from 'react-transition-group';
import nowPlayingOne from '../../assets/app-screenshots/now-playing-1.PNG'
import nowPlayingTwo from '../../assets/app-screenshots/now-playing-2.PNG';
import nowPlayingThree from '../../assets/app-screenshots/now-playing-3.PNG';
import pokerOne from '../../assets/app-screenshots/poker-winrate-1.PNG';
import pokerTwo from '../../assets/app-screenshots/poker-winrate-2.PNG';
import pokerThree from '../../assets/app-screenshots/poker-winrate-3.PNG';
import spacedRepetitionOne from '../../assets/app-screenshots/sr-one.PNG';
import spacedRepetitionTwo from '../../assets/app-screenshots/sr-two.PNG';
import spacedRepetitionThree from '../../assets/app-screenshots/sr-three.PNG';


export default class Portfolio extends React.Component {
  state = {
    appear: false,
    pokerWinRateMain: pokerOne,
    spacedRepetitionMain: spacedRepetitionOne,
    nowPlayingMain: nowPlayingOne,
    nowPlayingMainCaption: `Now Playing home page displaying "happenings" feature with latest website activity`,
    pokerWinRateMainCaption: "Poker sessions displayed as cards in a condensed view filtered by most recent",
    spacedRepetitionMainCaption: "Spaced Repetion home page and sign up",
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
  }
  
  renderImageCarousel = (name, imgArray) => {
    let thumbNails = imgArray.map(img => {
      return (
        <img key={img.key} className="thumbnail-image" src={img.img} alt={img.alt}  onClick={e => this.handleImageClick(name, e)}/>
      )
    })
    return (
      <div className="image-carousel">
        <div className="thumbnail-images">
          {thumbNails}
        </div>
        <img name={name} className="main-image" src={this.state[name]} alt={this.state[name + 'Caption'] } />
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
          <section id="poker-winrate">
            <Element name="poker-winrate">
              <h4 className="project-title">Poker WinRate</h4> 
              <p className="project-description">
              Poker WinRate is an interactive web application that allows users to track results after each poker session to determine their win rate over time.  As much as poker is a game of skill, luck is a huge element of the game and it is important to track results to determine a player’s edge over a long period of time.  This application allows users to input their sessions indicating the game type, buy-in amount, and how much they cashed out.  The results are then compiled and sorted, and users are provided a data visualization in the analytics section.
              </p>
              <div className="project-technologies">
              <h5>Technologies: </h5>
              <p>JavaScript, React, HTML5, CSS3, Jest, Enzyme, Node.js, Express, Mocha, Chai, PostgreSQL, Victory API</p>
              </div>
              {this.renderImageCarousel(
                'pokerWinRateMain', 
                [
                  {img: pokerOne, alt: 'Poker sessions displayed as cards in a condensed view filtered by most recent', key: 1}, 
                  {img: pokerTwo, alt: 'Data visualization of all sessions by game type', key: 2}, 
                  {img: pokerThree, alt: 'Information summary of all sessions stored by the user', key: 3}
                ])
              }
              {window.innerWidth >= 768 ? <p className="main-image-caption">{this.state.pokerWinRateMainCaption}</p> : null}
            </Element>
            {this.renderProjectButtons("https://poker-winrate.mdagno.now.sh/", "https://github.com/thinkful-ei-gecko/marlon-poker-winrate-client", "https://github.com/thinkful-ei-gecko/marlon-poker-winrate-server")}
          </section>
          <section id="now-playing">
            <Element name="now-playing">
            <h4 className="project-title">Now Playing</h4>
              <p className="project-description">
              Now Playing introduces a new layer of social interaction for your media viewing experience.  In an age where everything is interconnected, users may seek a sense of community while viewing a particular media and see how others have reacted at exact times during the playback.  Now Playing is used by running the application concurrently with a movie to enrich the viewer’s experience by displaying a feed of comments rendered to the matching timestamp of the movie.  At anytime during a user’s viewing session, they are provided with a chatbox to input a comment or reaction and index it at that timestamp so that other users will see their comment at that time.
              </p>
              <p className="project-description">
              To simplify thread creation, a search engine was implemented using the TMDb API to pull data for existing movies and populate information for created threads including the time, poster, and trailer.  A live update of ongoing “happenings” is also featured on the home page of the application.
              </p>
              <div className="project-technologies">
              <h5>Technologies: </h5>
              <p>JavaScript, React, HTML5, CSS3, Jest, Enzyme, Node.js, Express, Mocha, Chai, PostgreSQL</p>
              </div>
              {this.renderImageCarousel(
                'nowPlayingMain', 
                [
                  {img: nowPlayingOne, alt: 'Now Playing home page displaying "happenings" with latest website activity', key: 4}, 
                  {img: nowPlayingTwo, alt: 'Thread page containing the scrub bar, movie information, and comments', key: 5}, 
                  {img: nowPlayingThree, alt: 'Thread creation page featuring TMBD API to generate search values', key: 6}
                ])
              }
              {window.innerWidth >= 768 ? <p className="main-image-caption">{this.state.nowPlayingMainCaption}</p> : null}
            </Element>  
            {this.renderProjectButtons("https://whatsplaying.now.sh/", "https://github.com/thinkful-ei-gecko/NowPlaying-Client", "https://github.com/thinkful-ei-gecko/NowPlaying-Server")}
          </section>
          <section id="spaced-repetition">  
            <Element name="spaced-repetition">
              <h4 className="project-title">Spaced Repetition</h4> 
              <p className="project-description">
              Spaced repetition is a learning technique that is typically used with flash cards.  By displaying information that users have more trouble memorizing, the rate of learning is increased. 

              An algorithm on the server was implemented to correctly space cards that a user guesses correctly and incorrectly, in turn helping users memorize a language more effectively.  Currently, the supported language in Spaced Repetition is Morse Code.
              </p>
              <div className="project-technologies">
              <h5>Technologies: </h5>
              <p>JavaScript, React, HTML5, CSS3, Cypress, Node.js, Express, Mocha, Chai, PostgreSQL</p>
              </div>
              {this.renderImageCarousel(
                'spacedRepetitionMain', 
                [
                  {img: spacedRepetitionOne, alt: 'Spaced Repetion home page and sign up', key: 7},
                   {img: spacedRepetitionTwo, alt: 'Spaced Repetition dashboard displaying languages, progress, and morse alphabet', key: 8}, 
                   {img: spacedRepetitionThree, alt: 'Learning component to practice a language using spaced repetition', key: 9}
                  ])
              }
              {window.innerWidth >= 768 ? <p className="main-image-caption">{this.state.spacedRepetitionMainCaption}</p> : null}
            </Element>
            {this.renderProjectButtons("https://spaced-morse.now.sh/", "https://github.com/thinkful-ei-gecko/shawn-marlon-spaced-rep", "https://github.com/thinkful-ei-gecko/shawn-marlon-spaced-rep-api")}
          </section>
      </div>
      </CSSTransition>
    )
  }
}






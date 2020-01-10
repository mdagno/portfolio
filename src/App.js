import React from 'react';
import './App.css';
import {Switch, Route, withRouter} from 'react-router-dom';
import Header from './components/Header/Header';
import Bio from './components/Bio/Bio';
import Contact from './components/Contact/Contact';
import Portfolio from './components/Portfolio/Portfolio';
import Resume from './components/Resume/Resume';
import NavBar from './components/NavBar/NavBar';
import * as Scroll from 'react-scroll';
import { animateScroll as scroll } from 'react-scroll'
import { CSSTransition } from 'react-transition-group';


class App extends React.Component {
  state = {
    location: "",
    appear: false,
    windowWidth: null
  }

  componentDidUpdate() {
    if(this.state.location !== this.props.location.pathname) {
      this.setState({location: this.props.location.pathname})
      scroll.scrollToTop({
        duration: 300,
        delay: 0,
        smooth: true,
      })
    }
  }
  
  componentDidMount() {
    window.addEventListener('resize', this.handleResizeWidth)
    this.setState({
      location: this.props.location.pathname,
      appear: true,
      windowWidth: window.innerWidth
    })
  }

  handleResizeWidth = () => {
    this.setState({
      windowWidth: window.innerWidth
    })
  }

  determineMargin = () => {
    let marginD = (this.state.windowWidth - 202 - this.state.windowWidth * 0.70) / 2 + 200;
    return {
      margin: marginD,
    };
  }

  render() {
    const { appear } = this.state
    return (
      <CSSTransition
      in={appear}
      appear={true}
      timeout={300}
      classNames="my-node"
      >
      <div className="App">
        <Header location={this.state.location}/>
        <Switch>
          <Route exact path="/" render={(props) => <Bio {...props} windowWidth={this.state.windowWidth}  margin={this.determineMargin()}/>}/>
          <Route path="/projects" render={(props) => <Portfolio {...props} windowWidth={this.state.windowWidth}  margin={this.determineMargin()}/>}/>
          <Route path="/contactme" render={(props) => <Contact {...props} windowWidth={this.state.windowWidth}  margin={this.determineMargin()}/>}/>
          <Route path="/resume" component={Resume} />
        </Switch>
      </div>
      </CSSTransition>
    );
  }

}

export default withRouter(App)

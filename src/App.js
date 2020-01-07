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
    this.setState({
      location: this.props.location.pathname,
      appear: true,
    })
  }


  render() {
    const { appear } = this.state
    console.log(this.state)
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
          <Route exact path="/" component={Bio} />
          <Route path="/projects" component={Portfolio} />
          <Route path="/contactme" component={Contact} />
          <Route path="/resume" component={Resume} />
        </Switch>
      </div>
      </CSSTransition>
    );
  }

}

export default withRouter(App)

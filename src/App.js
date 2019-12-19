import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Bio from './components/Bio/Bio';
import Contact from './components/Contact/Contact';
import Portfolio from './components/Portfolio/Portfolio';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Bio} />
          <Route path="/projects" component={Portfolio} />
          <Route path="/contactme" component={Contact} />
        </Switch>
      </div>
    );
  }

}


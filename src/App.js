import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

import Game from './components/Game/Game'
import Rules from './components/Rules/Rules'
import About from './components/About/About'

import './App.css';

class App extends Component {
  render() {
    return (
      <Router basename='/mov.is/'>
        <div className="ct">
          <div className="movTop">
              <h1>Mov.is</h1>
              <div className="movTopNav">
                  <NavLink exact to="/">Game</NavLink>
                  <NavLink exact to="/rules">Rules</NavLink>
                  <NavLink exact to="/about">About</NavLink>
              </div>
          </div>
          <Switch>
            <Route exact path="/" component={Game} />
            <Route exact path="/rules" component={Rules} />
            <Route exact path="/about" component={About} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;

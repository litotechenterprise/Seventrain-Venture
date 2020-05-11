import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import '../css/index.css'
import Home from './Home';
import Team from './Team';


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Team" component={Team} />
        </Switch>
      </Router>   
    );
  }
}

export default App;
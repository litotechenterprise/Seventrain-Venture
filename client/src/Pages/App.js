import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import '../css/index.css'
// import Home from './Home';
// import HomePage from './HomePage'
// import SignUp from './SignUp';
import SplashPage from './SlashPage';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={SplashPage} />
          {/* <Route exact path="/" component={Home} />
          <Route exact path="/SignUp" component={SignUp} />
          <Route exact path="/HomePage" component={HomePage} /> */}
        </Switch>
      </Router>   
    );
  }
}

export default App;
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './Home';


class App extends Component {

  render() {
    return (
      <div className="App-Container">
        <BrowserRouter>
          <div style={{}}>
            <Route exact path="/" component={Home} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
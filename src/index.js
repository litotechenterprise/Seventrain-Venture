import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Contact from './pages/Contact'


ReactDOM.render(
  <React.StrictMode>
    <Home />
    <Contact />
  </React.StrictMode>,
  document.getElementById('root')
);


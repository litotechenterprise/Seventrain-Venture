import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './Pages/App'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './images/7VenturePics/Logo.png'
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap'
import Footer from './component/Footer'
import './css/index.css'


window.axios = axios;

ReactDOM.render(
  <React.StrictMode>
     
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="/">
                <img
                    alt=""
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                  />{' '}
                  <text id="Bar" style={{marginLeft: 10}} >SevenTrain Ventures</text>
              </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
              <Nav className="justify-content-end" style={{ width: "90%" }}>
                <NavDropdown title="Menu" id="collasible-nav-dropdown" className="super-colors">
                  <NavDropdown.Item href="/#About">About Us</NavDropdown.Item>
                  <NavDropdown.Item href="/#Method">Our Method</NavDropdown.Item>
                  <NavDropdown.Item href="/#Terms">Terms</NavDropdown.Item>
                  <NavDropdown.Item href="/#Press">Press</NavDropdown.Item>
                  <NavDropdown.Item href="/Team">Team</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/#Contact">Contact Us</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
            </Container>
          </Navbar>
       
        <div style={{flex:1}}>
          <App />
        </div>
        <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

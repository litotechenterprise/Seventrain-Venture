import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './Pages/App'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './images/7VenturePics/Logo.png'
import {Navbar, Carousel, Nav} from 'react-bootstrap'
import Photo1 from './images/Carousel_images/Photo1.jpg'
import Photo2 from './images/Carousel_images/Photo2.jpg'
import Photo5 from './images/Carousel_images/Photo5.jpg'
import Photo7 from './images/Carousel_images/Photo7.jpg'
import Footer from './component/Footer'
import './css/index.css'

window.axios = axios;

ReactDOM.render(
  <React.StrictMode>
       <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="/">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{'          '}
            SevenTrain Venture
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="justify-content-end" style={{ width: "90%" }}>
              <Nav.Item>
                <Nav.Link href="#About">About</Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link href="#Method">Method</Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link href="#Terms">Terms</Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link href="#Team">Team</Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link href="#Contact">Contact</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Carousel id='Carousel'>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Photo5}
                    alt="First slide"
                    />
                </Carousel.Item>
                 
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Photo7}
                    alt="Second slide"
                    />
                </Carousel.Item>  

                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Photo1}
                    alt="Third slide"
                    />
                    
                </Carousel.Item> 
            </Carousel>
           
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

import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './Pages/App'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './images/7VenturePics/Logo.png'
import {Navbar, Carousel} from 'react-bootstrap'
import Photo1 from './images/Carousel_images/Photo1.jpg'
import Photo2 from './images/Carousel_images/Photo2.jpg'
import Photo3 from './images/Carousel_images/Photo3.jpg'
import Footer from './component/Footer'
import './css/index.css'

window.axios = axios;

ReactDOM.render(
  <React.StrictMode>
       <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{'      '}
            SevenTrain Venture
          </Navbar.Brand>
        </Navbar>

        <Carousel id='Carousel'>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Photo1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                 
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Photo2}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>  

                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Photo3}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
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

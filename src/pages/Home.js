import React from 'react';
import {Nav, Carousel} from 'react-bootstrap';
import '../css/home.css';
import Photo1 from '../images/Photo1.jpg'
import Photo2 from '../images/Photo2.jpg'
import Photo3 from '../images/Photo3.jpg'

const Home = () => {
    return (
       <div>
           <div id="Header"style={{display:"flex", justifyContent:'space-around', backgroundColor: 'rgba(52, 52, 52, aplpha)'}}>
                     <h2 style={{color:"white"}}>Seventrain Venture</h2>
                     <Nav className="justify-content-end">
                        <Nav.Item>
                            <Nav.Link href="/home" style={{color:"white"}}>About</Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link eventKey="link-1"style={{color:"white"}}>Venture</Nav.Link>
                         </Nav.Item>

                         <Nav.Item>
                             <Nav.Link eventKey="link-2"style={{color:"white"}}>Team</Nav.Link>
                         </Nav.Item>

                         <Nav.Item>
                             <Nav.Link eventKey="disabled"style={{color:"white"}}>Investments</Nav.Link>
                         </Nav.Item>
                     </Nav>
            </div>
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


            <text>Home whats the wave</text>
       </div>
    )
}



export default Home;
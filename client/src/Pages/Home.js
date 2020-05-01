import React from 'react';
import OurMethod from './OurMethod'
import AboutUS from './AboutUs'
import Team from './Team'
import Industries from './Industries'
import Contact from './Contact'
import Geo from './Geographic_Focus'
import Terms from './Term'
import {Navbar, Container} from 'react-bootstrap'
import logo from '../images/7VenturePics/Logo.png'


const Home = () => {
    return (
        <div style={{backgroundColor:'#556f8a'}}>
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
      
        <Container style={{flex:1, backgroundColor:'lightgray'}}>
          <AboutUS />
          <OurMethod />
          <Team />
          <Terms />
          <Industries />
          <Geo />
          <Contact />
        </Container>
      </div>
    )
}



export default Home;
import React from 'react';
import OurMethod from './OurMethod'
import AboutUS from './AboutUs'
import Press from './Press'
import Industries from './Industries'
import Contact from './Contact'
import Geo from './Geographic_Focus'
import Terms from './Term'
import Early from './Early'
import Photo from '../images/backgrounds/Background9.jpg'
import Photo8 from '../images/Carousel_images/Photo8.jpeg'
import Photo9 from '../images/Carousel_images/Photo9.jpeg'
import '../css/index.css'

import { Container, Carousel, Image} from 'react-bootstrap'



const Home = () => {
    return (
      <div>
        <Carousel id='Carousel'>
          <Carousel.Item>
              <img
              id="first"
              className="d-block w-100 h-50"
              src={Photo}
              alt="First slide"
              position="relative"
              z-index="-1"
              />
          <Carousel.Caption id='first'>
            <h1 id='Header'>Global Venture Developers of High Quality Early Stage Ventures</h1>
          </Carousel.Caption>
              
          </Carousel.Item>  
          <Carousel.Item>
              <img
              className="d-block w-100 h-50"
              src={Photo8}
              width="100%"
              height='30%'
              alt="Second slide"
              />
          </Carousel.Item>  

          <Carousel.Item>
              <img
              className="d-block w-100 h-50"
              src={Photo9}
              width="100%"
              height='30%'
              alt="Third slide"
              />
          </Carousel.Item>
         
        </Carousel>

        <div>
          <h2 style={{textAlign:'center', fontSize:50, marginTop:20}}>For Investors By Investors <br></br> For Entrepreneurs By Entrepreneurs</h2>
        </div>

        <div className='App-Container'>
          <Container className="HomePage" style={{flex:1, }}>
            <AboutUS />
            <Early />
            <OurMethod />
            <Terms />
            <Industries />
            <Geo />
            <Press />
            <Contact />
          </Container>
        </div>
      
      </div>
    )
}



export default Home;
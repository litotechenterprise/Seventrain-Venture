import React from 'react';
import OurMethod from './OurMethod'
import AboutUS from './AboutUs'
import Press from './Press'
import Industries from './Industries'
import Contact from './Contact'
import Geo from './Geographic_Focus'
import Terms from './Term'
import Photo8 from '../images/Carousel_images/Photo8.jpeg'

import Photo5 from '../images/Carousel_images/Photo5.jpg'
import Photo7 from '../images/Carousel_images/Photo7.jpg'
import '../css/index.css'

import { Container, Carousel} from 'react-bootstrap'



const Home = () => {
    return (
      <div>
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
              src={Photo8}
              alt="Third slide"
              />
              
          </Carousel.Item>
         
        </Carousel>
        <div className='App-Container'>
          <Container className="HomePage" style={{flex:1}}>
            <AboutUS />
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
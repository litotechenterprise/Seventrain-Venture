import React from 'react';
import {Image, Container} from 'react-bootstrap';
import offer from '../images/7VenturePics/offer.png'


const AboutUs = () => {
    return(
        <div>
            <a name="About"></a>
            <div style={{padding:"3%"}}>
                <h1><u>About Us</u></h1>
                <h2>Seventrain Ventures, the next generation venture model</h2>
                <h4>A modern approach to venture captial investing</h4>
                <Container style={{backgroundColor:'white', padding:40, borderRadius:100}}>
                    <Image src={offer} fluid  />
                </Container>
            </div>
        </div>
  
    )
}



export default AboutUs;
import React from 'react';
import {Image, Container} from 'react-bootstrap';
import offer from '../images/7VenturePics/offer.png'


const AboutUs = () => {
    return(
        <div style={{padding:"3%"}}>
            <h2><u>About Us: Seventrain Ventures, the next generation venture model</u></h2>
            <text>A modern approach to venture captial investing</text>
            <Container style={{backgroundColor:'white', padding:40, borderRadius:100}}>
                <Image src={offer} fluid  />
            </Container>
        </div>
  
    )
}



export default AboutUs;
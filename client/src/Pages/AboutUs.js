import React from 'react';
import {Image, Container} from 'react-bootstrap';
import offer from '../images/7VenturePics/offer.png'


const AboutUs = () => {
    return(
        <div>
            <a name="About"></a>
            <div style={{padding:"3%"}}>
                <h1 style={{textAlign:'center'}}><u>About Us</u></h1>
                <h4 style={{textAlign:'center'}}>A team of professionals seeking to help startups grow through coaching, mentoring, investments and network introductions</h4>
                <Container style={{ padding:40, borderRadius:100}}>
                    <Image src={offer} fluid  />
                </Container>
            </div>
        </div>
  
    )
}



export default AboutUs;
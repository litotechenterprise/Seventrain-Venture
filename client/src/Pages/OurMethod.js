import React from 'react';

import {Image, Container} from 'react-bootstrap';
import Stage from '../images/7VenturePics/stage_investment.png'

const OurMethod = () => {
    return(
        <div>
            <h2><u>Our Method: </u></h2>
            <text>A modern approach to venture captial investing</text>
            <Container style={{backgroundColor:'white', padding:100, borderRadius:100}}>
                <Image src={Stage} fluid  />
             </Container>

        </div>
       
    )
}



export default OurMethod;
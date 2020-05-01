import React from 'react';

import {Image, Container} from 'react-bootstrap';
import Stage from '../images/7VenturePics/stage_investment.png'

const OurMethod = () => {
    return(
        <div style={{padding:"3%"}}>
            <a name="Method"></a>
            <h1><u>Our Method: </u></h1>
            <h4>A modern approach to venture captial investing</h4>
            <Container style={{backgroundColor:'white', padding:100, borderRadius:100}}>
                <Image src={Stage} fluid  />
             </Container>

        </div>
       
    )
}



export default OurMethod;
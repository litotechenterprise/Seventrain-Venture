import React from 'react';

import {Image, Container} from 'react-bootstrap';
import Target from '../images/7VenturePics/Target_segments.png'

const Industries = () => {
    return(
        <div style={{padding:"5%"}}>
            <h2><u>Industries</u></h2>
            <text>A modern approach to venture captial investing</text>
            <Container style={{backgroundColor:'white', padding:100, borderRadius:100}}>
            <Image src={Target} fluid  />
            </Container>

        </div>
       
    )
}



export default Industries;
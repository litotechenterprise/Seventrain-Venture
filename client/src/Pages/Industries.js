import React from 'react';

import {Image, Container} from 'react-bootstrap';
import Target from '../images/7VenturePics/Target_segments.png'

const Industries = () => {
    return(
        <div style={{padding:"3%"}}>
            <a name="Industries"></a>
            <h1><u>Industries</u></h1>
            <h4>A modern approach to venture captial investing</h4>
            <Container style={{backgroundColor:'white', padding:30, borderRadius:100}}>
            <Image src={Target} fluid  />
            </Container>

        </div>
       
    )
}



export default Industries;
import React from 'react';

import {Image, Container} from 'react-bootstrap';
import Grography from '../images/7VenturePics/Geography.png'

const Geographic_Focus = () => {
    return(
        <div >
            <h2><u>Geographic Focus</u></h2>
            <Container style={{backgroundColor:'white', padding:100, borderRadius:100}}>
                <text>A modern approach to venture captial investing</text>
                <Image src={Grography} fluid  />
            </Container>
        </div>
       
    )
}



export default Geographic_Focus;
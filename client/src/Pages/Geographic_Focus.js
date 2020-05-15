import React from 'react';

import {Image, Container} from 'react-bootstrap';
import Grography from '../images/7VenturePics/Geography.png'

const Geographic_Focus = () => {
    return(
        <div style={{padding:"3%"}}>
            <a name="Geo"></a>
            <h1><u>Geographic Focus</u></h1>
            <h4>Seventrain focus on high-growth markets with large opportunities</h4>
            <Container style={{ padding:40, borderRadius:100}}>
                <Image src={Grography} fluid  />
            </Container>
        </div>
       
    )
}



export default Geographic_Focus;
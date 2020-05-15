import React from 'react';

import {Image, Container} from 'react-bootstrap';
import Target from '../images/7VenturePics/Target_segments.png'

const Industries = () => {
    return(
        <div style={{padding:"3%"}}>
            <a name="Industries"></a>
            <h1><u>Industries</u></h1>
            <h4>Seventrain Ventures focus on it's investments on high return Industries and growing technologies</h4>
            <Container style={{ padding:30, borderRadius:100}}>
            <Image src={Target} fluid  />
            </Container>

        </div>
       
    )
}



export default Industries;
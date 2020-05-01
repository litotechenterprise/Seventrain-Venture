import React from 'react';

import {Image, Container} from 'react-bootstrap';
import Fund from '../images/7VenturePics/Fund.png'

const Terms = () => {
    return(
        <div>
            <h2><u>SevenVentire terms of inventments </u></h2>
            <text>Summary of terms</text>
            <Container style={{backgroundColor:'white', padding:100, borderRadius:100}}>
                <Image src={Fund} fluid />
            </Container>
        </div>
         
    )
}



export default Terms;
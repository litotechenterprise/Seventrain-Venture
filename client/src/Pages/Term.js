import React from 'react';

import {Image, Container} from 'react-bootstrap';
import Fund from '../images/7VenturePics/Fund.png'

const Terms = () => {
    return(
        <div style={{padding:"3%"}}>
            <h2><u>SevenVentire terms of inventments </u></h2>
            <text>Summary of terms</text>
            <Container style={{backgroundColor:'white', alignItems:'center',justifyContent:'center', padding:50, borderRadius:100}}>
                <Image src={Fund} fluid />
            </Container>
        </div>
         
    )
}



export default Terms;
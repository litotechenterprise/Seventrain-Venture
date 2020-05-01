import React from 'react';

import {Image, Container} from 'react-bootstrap';
import Fund from '../images/7VenturePics/Fund.png'

const Terms = () => {
    return(
        <div style={{padding:"3%"}}>
            <a name="Terms"></a>
            <h1><u>SevenTrain terms of inventments </u></h1>
            <h4>Summary of terms</h4>
            <Container style={{backgroundColor:'white', alignItems:'center',justifyContent:'center', padding:50, borderRadius:100}}>
                <Image src={Fund} fluid />
            </Container>
        </div>
         
    )
}



export default Terms;
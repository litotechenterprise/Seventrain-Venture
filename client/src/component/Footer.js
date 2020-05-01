import React from 'react';
import {Image, Container, Row, Col, } from 'react-bootstrap'
import LOGO from '../images/7VenturePics/Logo.png'


const Footer = () => {
    return(
        <div className="Footing" style={{backgroundColor:'#484c5e'}}>
            <Container style={{borderBottomColor:'white', borderBottomWidth:3}}>
                <Row style={{alignItems:'center', justifyContent:'center'}}>
                    <Image
                        width="50"
                        height="50"
                        src={LOGO}
                    />
                </Row>
                <Row style={{alignItems:'center', justifyContent:'center'}}>
                    <text>SevenTrain Venture</text>
                </Row>
                <hr></hr>
                <Row>
                    <Col>
                        <p>&copy;Copyright SevenTrain Venture. All rights reserved.</p>
                    </Col>

                    <Col>

                    </Col>

                    <Col>
                        <p>200 Park Ave South. New York, NY 10003</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )

};

export default Footer;
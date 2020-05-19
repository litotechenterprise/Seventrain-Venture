import React from 'react';
import {Image, Container, Row, Col, } from 'react-bootstrap'
import LOGO from '../images/7VenturePics/Logo.png'
import '../css/index.css'

const Footer = () => {
    return(
        <div className="Footing" style={{backgroundColor:'#333a40'}}>
            <Container style={{borderBottomColor:'white', borderBottomWidth:3}}>
                <Row style={{alignItems:'center', justifyContent:'center'}}>
                    <Image
                        width="50"
                        height="50"
                        src={LOGO}
                    />
                </Row>
                {/* Row */}
                <Row style={{alignItems:'center', justifyContent:'center', marginTop:10}}>
                    <text id='footer'>SevenTrain Venture</text>
                </Row>
                <hr style={{background:'black'}}></hr>
                <Row>
                    <Col>
                        <h6 className='footer'>&copy;Copyright SevenTrain Venture. All rights reserved.</h6>
                    </Col>

                    <Col>

                    </Col>

                    <Col>
                        <h6 className="right">200 Park Ave South. New York, NY 10003 </h6>
                    </Col>
                </Row>
            </Container>
        </div>
    )

};

export default Footer;
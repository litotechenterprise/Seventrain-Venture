import React from 'react';
import {Carousel, Image, Container, Row, Col} from 'react-bootstrap'
import Photo1 from '../images/backgrounds/Photo1.jpg'
import Photo2 from '../images/backgrounds/Photo2.jpeg'
import Photo3 from '../images/backgrounds/Photo3.jpg'
import Photo7 from '../images/backgrounds/Photo7.jpg'
import Photo5 from '../images/backgrounds/Photo5.jpg'
import Photo9 from '../images/backgrounds/Photo9.png'
import Logo from '../images/Company/Logo.png'
import '../css/index.css'

const SplashPage = () => {
    return(
        <div>
            <Carousel >
                <Carousel.Item >
                    <div style={{backgroundColor:'#275090'}}>
                        <Container>
                            <Row>
                                <Col style={{marginTop: 10}}>
                                    <text style={{fontSize: 20}}>SevenTrain Venture</text>
                                </Col>
                                <Col>
                                    <img  
                                    width="50"
                                    height="50"
                                    src={Logo}
                                    className='center'
                                    />
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    <Image
                    className='Carousel'
                    src={Photo5}
                    alt="First slide"
                    />
                    <Carousel.Caption id="first">
                        <div style={{borderTop:50, borderBlockColor:'white'}}>
                            <hr style={{height:"10px"}} color='white'></hr>
                            <h1 style={{fontSize:50, borderTop:50, borderBlockColor:'white'}}>A global independent venture group providing <br/>
                                <span style={{color:'#cf7821'}}>confidential</span>, unconflicted, strategic advice to <br/>
                                founders and investors</h1>
                        </div>
                    </Carousel.Caption>

                    <Carousel.Caption id="first-One">
                        <div style={{backgroundColor:'#333a40'}}>
                            <text>For Entrepreneurs by Entrepreneurs<br/>
                            For Investors by Investors</text>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>  

                <Carousel.Item >
                    <div style={{backgroundColor:'#275090'}}>
                            <Container>
                                <Row>
                                    <Col style={{marginTop: 8}}>
                                        <text style={{fontSize: 20}}>Global Connectivity</text>
                                    </Col>
                                    <Col>
                                        <img  
                                        width="50"
                                        height="50"
                                        src={Logo}
                                        className='center'
                                        />     
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    <Image
                    className='Carousel'
                    src={Photo1}
                    alt="Second slide"
                    position="relative"
                    z-index="-1"
                    />
                       <Carousel.Caption id="second">
                        <div style={{backgroundColor:'#4f5e69', height:775}}>
                           <h2>Since inception, we have advised clients across a wide variety of industries and
                                leveraged our extensive global network to deliver the best solutions to our clients.</h2>
                            <Row>
                                <Col sm={2}>
                                    <h6>DECORATED FOUNDERS <br />
                                        ANGEL INVESTORS <br />
                                        VC & CORP. VC<br />
                                        GLOBAL BANKERS<br />
                                        FORMER CXOs OF<br />
                                        PUBLICLY TRADED<br />
                                        COMPANIES
                                    </h6>
                                    <hr style={{height:"1px"}} color='#b08f2e'></hr>
                                    <h6>FINTECH<br />
                                        INSURETECH<br />
                                        ECOMMERCE<br />
                                        MEDTECH<br />
                                        DIGITAL HEALTH<br />
                                        PROPTECH<br />
                                        ECOMMERCE</h6>
                                    <hr style={{height:"1px"}} color='#b08f2e'></hr>
                                    <h6>CLOUD COMPUTING,<br />
                                        AI, CYBERSECURITY<br />
                                        CRM, BLOCKCHAIN,<br />
                                        DATA & ANALYTICS</h6>
                                </Col>
                                <Col sm={4}>
                                    <img 
                                        src={Photo9}
                                        width="800"
                                        height="90%"
                                    />
                                </Col>
                            </Row>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>  

                <Carousel.Item >
                    <div style={{backgroundColor:'#275090'}}>
                            <Container>
                                <Row>
                                    <Col style={{marginTop: 8}}>
                                        <text style={{fontSize: 20}}>Our Business</text>
                                    </Col>
                                    <Col>
                                        <img  
                                        width="50"
                                        height="50"
                                        src={Logo}
                                        className='center'
                                        />     
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    <Image
                    className='Carousel'
                    src={Photo3}
                    alt="Second slide"
                    position="relative"
                    z-index="-1"
                    />
                     <Carousel.Caption id="second">
                        <div style={{backgroundColor:'#4f5e69'}}>
                           <h2>We advice and execute aggressive mandates on behalf of our clients -- Founders and Investors --
                                as Co-CEO, -CFO, -CRO, -CMO using our proprietary CSuite-as-a-Service (CSaaS) framework. We
                                measure our performance not by derisking the next investment round, but by the longer-term
                                success of our clients.</h2>
                        </div>

                        <div style={{paddingTop:'30%'}}>
                            <Row>
                                <Col style={{backgroundColor:'#4f5e69'}}>SALES, STRATEGY & PARTNERSHIPS</Col>
                                <Col></Col>
                            </Row>
                            <Row>
                                <Col></Col>
                                <Col style={{backgroundColor:'#4f5e69'}}>OPTIMIZE COMPANY FOR PATH-TO-PROFITABILITY, CASH
                                    MANAGEMENT STRATEGIES FINANCE, DUE-DILIGENCE</Col>
                            </Row>
                            <Row>
                                <Col style={{backgroundColor:'#4f5e69'}}>SALE ENABLEMENT, LEAD GENERATION,
                                    MAGIC QUADRANT SUCCESS</Col>
                                <Col></Col>
                            </Row>
                            <Row>
                                <Col></Col>
                                <Col style={{backgroundColor:'#4f5e69'}}>THOUGHT-LEADERSHIP BRANDING EFFECTIVE PRODUCT MARKETING, PANEL & JOURNALIST CIRCUITS</Col>
                            </Row>

                        </div>


                    </Carousel.Caption> 
                </Carousel.Item>  
            </Carousel>
        </div>

    )
}


export default SplashPage;
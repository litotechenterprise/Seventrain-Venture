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
        <div id="container">
            <Carousel >
                <Carousel.Item  style={{flex:1}}>
                    <div style={{backgroundColor:'#275090'}}>
                        <Container>
                            <Row>
                                <Col style={{marginTop: 10}}>
                                    <text className="Title">SevenTrainVentures</text>
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
                        <div>
                            <hr id="Bar"style={{height:"8px"}} color='white'></hr>
                            <h1 id="header1">A global independent venture group providing
                                <span style={{color:'#cf7821'}}>  confidential</span>, unconflicted, strategic advice to <br/>
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

                <Carousel.Item style={{flex:1}}>
                    <div style={{backgroundColor:'#275090'}}>
                            <Container>
                                <Row>
                                    <Col style={{marginTop: 8}}>
                                        <text className="Title">Global Connectivity</text>
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
                        <Container style={{backgroundColor:'#4f5e69'}}>
                           <h2 id='header3'>Since inception, we have advised clients across a wide variety of industries and
                                leveraged our extensive global network to deliver the best solutions to our clients.</h2>

                            <Container>
                                <Row>
                                    <Col sm={2} style={{paddingLeft:"2%"}}>
                                        <h6 className="LeftSlide2">DECORATED FOUNDERS 
                                            ANGEL INVESTORS
                                            VC & CORP. VC
                                            GLOBAL BANKERS
                                            FORMER CXOs OF
                                            PUBLICLY TRADED
                                            COMPANIES
                                        </h6>
                                        <hr style={{height:"1px"}} color='#b08f2e'></hr>
                                        <h6 className="LeftSlide2">FINTECH<br />
                                            INSURETECH
                                            ECOMMERCE
                                            MEDTECH
                                            DIGITAL HEALTH
                                            PROPTECH
                                            ECOMMERCE</h6>
                                        <hr style={{height:"1px"}} color='#b08f2e'></hr>
                                        <h6 className="LeftSlide2">CLOUD COMPUTING,
                                            AI, CYBERSECURITY
                                            CRM, BLOCKCHAIN,
                                            DATA & ANALYTICS</h6>
                                    </Col>
                                    <Col sm={6}>
                                        <img 
                                            id="Map"
                                            src={Photo9}
                                        />
                                    </Col>
                                </Row>
                            </Container>

                        </Container>
                    </Carousel.Caption>
                </Carousel.Item>  

                <Carousel.Item style={{flex:1}}>
                    <div style={{backgroundColor:'#275090'}}>
                            <Container>
                                <Row>
                                    <Col style={{marginTop: 8}}>
                                        <text className="Title">Our Business</text>
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
                     <Carousel.Caption id="third">
                        <div style={{backgroundColor:'#4f5e69'}}>
                           <h2 id='header2'>We advice and execute aggressive mandates on behalf of our clients -- Founders and Investors --
                                as Co-CEO, -CFO, -CRO, -CMO using our proprietary CSuite-as-a-Service (CSaaS) framework. We
                                measure our performance not by derisking the next investment round, but by the longer-term
                                success of our clients.</h2>
                        </div>

                        <div style={{paddingTop:'10%'}}>
                            <Row>
                                <Col style={{backgroundColor:'#4f5e69'}}><h6 className="info">SALES, STRATEGY & PARTNERSHIPS</h6></Col>
                                <Col></Col>
                            </Row>
                            <Row>
                                <Col></Col>
                                <Col style={{backgroundColor:'#4f5e69'}}><h6 className="info">OPTIMIZE COMPANY FOR PATH-TO-PROFITABILITY, CASH
                                    MANAGEMENT STRATEGIES FINANCE, DUE-DILIGENCE</h6></Col>
                            </Row>
                            <Row>
                                <Col style={{backgroundColor:'#4f5e69'}}><h6 className="info">SALE ENABLEMENT, LEAD GENERATION,
                                    MAGIC QUADRANT SUCCESS</h6></Col>
                                <Col></Col>
                            </Row>
                            <Row>
                                <Col></Col>
                                <Col style={{backgroundColor:'#4f5e69'}}><h6 className="info">THOUGHT-LEADERSHIP BRANDING EFFECTIVE PRODUCT MARKETING, PANEL & JOURNALIST CIRCUITS</h6></Col>
                            </Row>

                        </div>


                    </Carousel.Caption> 
                </Carousel.Item>  
            </Carousel>
            
             <div className="Footing" style={{backgroundColor:'#333a40', padding:10}}>
                <Container style={{borderBottomColor:'white', borderBottomWidth:3}}>
                    <Row style={{alignItems:'center', justifyContent:'center'}}>
                        <img
                            width="50"
                            height="50"
                            src={Logo}
                            className='logo'
                        />
                    </Row>
                    {/* Row */}
                    <Row style={{alignItems:'center', justifyContent:'center', marginTop:"2%"}}>
                        <text id='foot'>SevenTrainVentures</text>
                    </Row>
                    <hr style={{background:'black'}}></hr>
                    <Row>
                        <Col>
                            <h6 className='footer'>&copy; Copyrights SevenTrainVentures. All rights reserved.</h6>
                        </Col>

                        <Col>

                        </Col>

                        <Col>
                            <h6 className="right">200 Park Ave South. New York, NY 10003 </h6>
                        </Col>
                    </Row>
                </Container>
            </div> 
        </div>

    )
}


export default SplashPage;
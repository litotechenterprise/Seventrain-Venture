import React from 'react';
import '../css/index.css'
import Logo from '../images/7VenturePics/Logo.png'

import { Container, Image, Button, Col, Row} from 'react-bootstrap'



const Home = () => {

    return (
      <div style={{margin:50, paddingBottom: 200}}>
        <Container style={{justifyContent:'center', alignItems:'center', marginTop:20, marginBottom:20}}>
          <Container>
            <Row>
              <Col></Col>
              <Col>
                <Image src={Logo} fluid class="center-block"/>
              </Col>
              <Col></Col>
            </Row>

          
          </Container>
            <h1 style={{textAlign:'center', paddingBottom:30}}>SevenTrain Ventures</h1>
            <h1 style={{color:'green', textAlign:'center'}}>Logged In</h1>
            <Row >
                <Col style={{textAlign:'center'}}>
                <Button variant="danger" type="submit" href='/' block>
                    Log Out
                </Button>
                </Col>
            </Row>
        </Container>
      </div>
    )
}



export default Home;
import React from 'react';
import {Image, Container, Row, Col} from 'react-bootstrap';
import Org_Struct from '../images/7VenturePics/Org_structure.png'
import Vikal from '../images/7VenturePics/Vikal.png'
import Xavi from '../images/7VenturePics/Xavi.png'
import Fed from '../images/7VenturePics/Fed.png'
import Serge from '../images/7VenturePics/Serge.png'


const Team = () => {
    return(
        <div>       
            <h1>Team</h1>
            <h2><u>An effective combination of venture investing exprtise and knowledge</u></h2>
            <div style={{backgroundColor:'white', padding:100, borderRadius:100}}>
                <Container>
                    
                </Container>
                <Container>
                    
                    <text>SevenTrain Venture organisational chart</text>
                    <Image src={Org_Struct} fluid  />
                </Container>
            
                <Container>
                    <h2><u>Strong management team with soild experise in venture captial</u></h2>
                    <text>SevenTrain gobal team is able to leverage its goabl manament into venture captial investing</text>
                    <Row>
                        <Col><Image src={Vikal} fluid /></Col>
                        <Col><Image src={Xavi} fluid /></Col>
                    </Row>
                </Container>

                <Container>
                    <h2><u>SevenTrain Venture extensive Operating Partner and network</u></h2>
                    <text>a high-quality ecosystem that aims to achieve a lower risk / high return ratio</text>
                    <Row>
                        <Col><Image src={Fed} fluid /></Col>
                        <Col><Image src={Serge} fluid /></Col>
                    </Row>
                </Container>

                <Container>
                    <Row>
                        <Col></Col>
                        <Col></Col>
                    </Row>
                
                </Container>
            </div>
        </div>
    )
}



export default Team;
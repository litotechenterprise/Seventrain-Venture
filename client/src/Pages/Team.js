import React from 'react';
import {Image, Container, Row, Col} from 'react-bootstrap';
import Org_Struct from '../images/7VenturePics/Org_structure.png'
import Vikal from '../images/7VenturePics/Vikal.png'
import Xavi from '../images/7VenturePics/Xavi.png'
import Fed from '../images/7VenturePics/Fed.png'



const Team = () => {
    return(
        <div style={{padding:"3%"}}>
            <a name="Team"></a>       
            <h1>Team</h1>
            <h2><u>An effective combination of venture investing exprtise and knowledge</u></h2>
            <div style={{backgroundColor:'white', padding:40, borderRadius:100}}>
                <Container>
                    
                </Container>
                <Container>
                    
                    <h4>SevenTrain Venture organisational chart</h4>
                    <Image src={Org_Struct} fluid  />
                </Container>
            
                <Container>
                    <h2><u>Strong management team with soild experise in venture captial</u></h2>
                    <h4>SevenTrain gobal team is able to leverage its goabl manament into venture captial investing</h4>
                    <Row>
                        <Col><Image src={Vikal} fluid /></Col>
                        <Col><Image src={Xavi} fluid /></Col>
                    </Row>
                </Container>

                <Container>
                    <h2><u>SevenTrain Venture extensive Operating Partner and network</u></h2>
                    <h4>a high-quality ecosystem that aims to achieve a lower risk / high return ratio</h4>
                    <Row>
                        <Col><Image src={Fed} fluid /></Col>
                        <Col></Col>
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
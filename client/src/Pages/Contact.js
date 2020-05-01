import React from 'react';

import { Container, Row, Col, Card} from 'react-bootstrap';

const Contact = () => {
    return(
        <div style={{padding:"3%"}}>
            <Container>
                <h1><u>Contact us</u></h1>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Vikal Kapoor</Card.Title>
                                    <Card.Subtitle>General Partner</Card.Subtitle>
                                    <Card.Link>
                                        <a href="mailto:v@Seventrainventure.com">v@Seventrainventure.com</a>
                                    </Card.Link>
                                    <Card.Text>(609) 937-8854</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    
                        <Col style={{}}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Xavi Flores</Card.Title>
                                    <Card.Subtitle>General Partner</Card.Subtitle>
                                    <Card.Link>
                                        <a href="mailto:xavi@Seventrainventure.com">xavi@Seventrainventure.com</a> 
                                    </Card.Link>
                                    <Card.Text>(305) 937-8854</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                    </Row>
            </Container>
        </div>
    )
}



export default Contact;
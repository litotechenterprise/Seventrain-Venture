import React from 'react';

import { Container, Row, Col, Card} from 'react-bootstrap';

const Contact = () => {
    return(
        <div style={{padding:"3%"}}>
            <a name="Contact"></a>
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
                                    <Card.Title>(609) 937-8854</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    
                        <Col style={{}}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Xavi Flores</Card.Title>
                                    <Card.Subtitle>General Partner</Card.Subtitle>
                                    <Card.Link><a href="mailto:xavi@Seventrainventure.com">xavi@Seventrainventure.com</a></Card.Link>
                                    <Card.Title>(305) 937-8854</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>

                    </Row>
            </Container>
        </div>
    )
}



export default Contact;
import React, {useState} from 'react';
import Logo from '../images/7VenturePics/Logo.png'
import { Container, Image, Button, Form, Col, Row} from 'react-bootstrap'

const Home = () => {
    const [LogInKeys, setLogInKeys] = useState({
        username:"",
        password:""
    })

    const handleChange = (event) => {
      const { value, name } = event.target;

      setLogInKeys(prevValue => {
        if(name === 'username'){
          return {
            username: value,
            password: prevValue.password
          }
        } else if (name === 'password') {
          return {
            username: prevValue.username,
            password: value
          }
        }
      })
    }
  
    const handleSubmit = (event) => {
      try{
        fetch('http://localhost:8080/api/user/login', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: LogInKeys,
          mode:'no-cors'
        }).then((response) => console.log(response))
        .catch((error) => {
          console.error(error)
        })
      } catch(e){
        alert('Invalid Login Credentials')
      }

      event.preventDefault();
    }
        return (
          <div style={{flex:1}}>
            <Container style={{justifyContent:'center', alignItems:'center', marginTop:20, marginBottom:20}}>
              <Container>
                <Row>
                  <Col></Col>
                  <Col>
                    <Image src={Logo} fluid className="center-block"/>
                  </Col>
                  <Col></Col>
                </Row>
              </Container>


              <h1 style={{textAlign:'center'}}>SevenTrain Ventures</h1>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Username</Form.Label>
                  <Form.Control placeholder="Username" type='text' name='username' value={LogInKeys.username} onChange={handleChange}/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" name='password' value={LogInKeys.password} onChange={handleChange}/>
                </Form.Group>

                <Row >
                  <Col style={{textAlign:'center'}}>
                    <Button variant="success" type="submit" value="Submit">
                    Login
                    </Button>
                  </Col>

                  <Col style={{textAlign:'center'}}>
                    <Button variant="secondary" href='/SignUp'>
                    Sign Up
                    </Button>
                  </Col>
                </Row>
                
              </Form>
            </Container>
          </div>
        )
}



export default Home;
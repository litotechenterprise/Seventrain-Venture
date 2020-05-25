import React, {useState} from 'react'
import {Container, Form, Row, Col, Button} from 'react-bootstrap'


const SignUp = () => {

    const[SignUpKeys, setSignUPKeys] = useState({
        username:'',
        email:'',
        password:''
    })
    const[confirm, setConfirm] = useState('')

    const handleChange = (event) => {
        const { value, name } = event.target;

        if(name === 'retypePassword'){
            setConfirm(value)
        } else {
            setSignUPKeys(prevValue => {
                if(name === 'username'){
                    return {
                        username: value,
                        email: prevValue.email,
                        password: prevValue.password
                    }
                } else if (name === 'email'){
                    return {
                        username: prevValue.username,
                        email: value,
                        password: prevValue.password
                      }

                } else if (name === 'password') {
                    return {
                        username: prevValue.username,
                        email: prevValue.email,
                        password: value
                      }
                }
            })
        }
      }
    
      const handleSubmit = (event) => {
        if(SignUpKeys.password === confirm){
            console.log(SignUpKeys.username,SignUpKeys.email,SignUpKeys.password)
        } else {
            alert('Password do not match!')
        }
        event.preventDefault();
      }

    return(
        <div style={{margin:50, paddingBottom: 200}}>
            <Container style={{}}>
                <h1>Please Complete the Form</h1>
                <Form onSubmit={handleSubmit} >
                    <Form.Group controlId="form-Username">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" name='username' value={SignUpKeys.username} placeholder=" Enter Username" onChange={handleChange} />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name='email' value={SignUpKeys.email} placeholder=" Enter Email" onChange={handleChange} />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' value={SignUpKeys.password} placeholder=" Enter Password" onChange={handleChange} />
                    </Form.Group>

                    <Form.Group controlId="formBasicRetypePassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" name='retypePassword' value={confirm} placeholder="Re-enter Password"  onChange={handleChange}/>
                    </Form.Group>

                    <Row >
                    <Col></Col>
                    <Col style={{textAlign:'center'}}>
                        <Button variant="success" type="submit" block >
                        Sign Up
                        </Button>
                    </Col>
                    <Col></Col>
                    </Row>
                </Form>
            </Container>
        </div>
    )

}

export default SignUp;
import React from 'react'
import { Card, Col, Container, Row, Form, Button } from 'react-bootstrap'


function Login(){
    return(
        <Container>
            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <Form>
                                <Form.Group>
                                    <Form.Label>
                                        Email
                                    </Form.Label>
                                    <Form.Control type="email" name="email" placeholder='your@Email.com'>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>
                                        Password
                                    </Form.Label>
                                    <Form.Control type="password" name="password" placeholder='Your password'>
                                    </Form.Control>
                                </Form.Group>
                                <br></br>
                                <Button>Login </Button>
                            </Form>
                        </Card.Body>      

                    </Card>
                </Col>
            </Row>
        </Container>
    )
} 

export default Login
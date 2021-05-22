import React, { Component } from 'react'
import { Form, Button, Container, Tabs, Tab } from 'react-bootstrap';

export default class LoginPage extends Component {
    render() {
        return (
            <div>
                <Container>
                <Tabs defaultActiveKey="signup">
                <Tab eventKey="signup" title="Sign Up">
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                </Tab>
                
                <Tab eventKey="login" title="Login">
                    <Sonnet />
                </Tab>
                </Tabs>
                </Container>
            </div>
        )
    }
}

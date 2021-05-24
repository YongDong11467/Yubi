import React, { useState } from 'react'
import { Form, Button, Container, Tabs, Tab } from 'react-bootstrap';
import { useAuth0 } from "@auth0/auth0-react";

async function loginUser(credentials) {
    return fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
}

export default function LoginPage() {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    // const handleSubmit = async e => {
    //     e.preventDefault();
    //     const token = await loginUser({
    //       username,
    //       password
    //     });
    //     setToken(token);
    // }

    const { loginWithRedirect } = useAuth0();

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
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={e => setUserName(e.target.value)}/>
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={() => loginWithRedirect()}>
                        Submit
                    </Button>
                </Form>
            </Tab>
            </Tabs>
            <Button onClick={() => loginWithRedirect()}>Log In</Button>
            </Container>
        </div>
    )
}

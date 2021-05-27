import React from "react";
import { Navbar, Nav, Form, FormControl, Button, Badge, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";

import LoginButton from "../LoginButton";
import LogoutButton from "../LogoutButton";

import './customnavbar.css'

function CustomNavBar() {

  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">YUBI</Navbar.Brand>
          <Nav className="mr-auto">
            {/* <Nav.Link><Link to='/'>Home</Link></Nav.Link>
            <Nav.Link><Link to='/algorithms'>Algorithms</Link></Nav.Link>
            <Nav.Link><Link to='/'>About</Link></Nav.Link> */}

            <Nav.Link as={ Link } to='/'>Home</Nav.Link>
            <Nav.Link as={ Link } to='/algorithms'>Algorithms</Nav.Link>
            <Nav.Link as={ Link } to='/'>About</Nav.Link>
          </Nav>
            {!isAuthenticated ? 
                (
                  <Form inline>
                   <LoginButton />
                  </Form>
                )
              : 
                (
                  <Form inline>
                    <Image src={user.picture} height="40" width="40" roundedCircle />
                    <Badge variant="primary">{user.email}</Badge>
                    <LogoutButton />
                  </Form>
                )
            }
        </Navbar>
    </div>
  );
}

export default CustomNavBar;
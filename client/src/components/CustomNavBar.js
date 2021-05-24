import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";

import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

function CustomNavBar() {

  const { user, isAuthenticated, isLoading } = useAuth0();

  // if (isLoading) {
  //   return <div>Loading ...</div>;
  // }

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
          <Form inline>
            {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button> */}
            {!isAuthenticated ? <LoginButton /> : <LogoutButton />}
          </Form>
        </Navbar>
    </div>
  );
}

export default CustomNavBar;
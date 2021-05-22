import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'

function CustomNavBar() {
  return (
    <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">YUBI</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link><Link to='/'>Home</Link></Nav.Link>
            <Nav.Link><Link to='/algorithms'>Algorithms</Link></Nav.Link>
            <Nav.Link><Link to='/'>About</Link></Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>
    </div>
  );
}

export default CustomNavBar;
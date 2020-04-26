import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap';

export default function GenerateEmbedCode() {
  return (
    <Navbar expand="sm" variant="light" bg="light" className="mb-4">
      <LinkContainer to="/">
        <Navbar.Brand>Zonal Maps</Navbar.Brand>
      </LinkContainer>
      <Nav className="mr-auto">
        <LinkContainer exact to="/">
          <Nav.Link>Home</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/embed">
          <Nav.Link>Embed code</Nav.Link>
        </LinkContainer>
        <NavDropdown title="Examples" id="basic-nav-dropdown">
          <LinkContainer to="/example/1">
            <NavDropdown.Item>Example 1</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/example/2">
            <NavDropdown.Item>Example 2</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/example/3">
            <NavDropdown.Item>Example 3</NavDropdown.Item>
          </LinkContainer>
        </NavDropdown>
      </Nav>
      <Nav>
        <Nav.Link href="https://github.com/evaldasstu/zonalmaps">GitHub</Nav.Link>
      </Nav>
    </Navbar>
  );
}

import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './App.css';

function App() {
  return (
    <Container>
      <Navbar expand="lg" variant="light" bg="light" className="mt-4">
        <Navbar.Brand href="#home">Zonal Maps</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <NavDropdown title="Examples" id="basic-nav-dropdown">
            <NavDropdown.Item href="#examples/1">Example 1</NavDropdown.Item>
            <NavDropdown.Item href="#examples/2">Example 2</NavDropdown.Item>
            <NavDropdown.Item href="#examples/3">Example 3</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="https://github.com/evaldasstu/zonalmaps" className="justify-content-end">GitHub</Nav.Link>
        </Nav>
      </Navbar>
      {/* <div className="App">
      </div> */}
    </Container>
  );
}

export default App;

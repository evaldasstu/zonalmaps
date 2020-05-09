import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeEurope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './Menu.scss';

const Menu = () => (
  <Navbar variant="dark" bg="dark" className="rounded mb-4 flex-column flex-md-row">
    <LinkContainer to="/">
      <Navbar.Brand className="align-self-start">
        <FontAwesomeIcon icon={faGlobeEurope} size="lg" className="mr-2" />
        Zonal Maps
      </Navbar.Brand>
    </LinkContainer>
    <Nav className="mr-auto flex-column flex-md-row">
      <LinkContainer exact to="/">
        <Nav.Link>How to use</Nav.Link>
      </LinkContainer>
      <NavDropdown title="Examples" id="basic-nav-dropdown">
        <LinkContainer to="/example/1">
          <NavDropdown.Item>Example Map 1</NavDropdown.Item>
        </LinkContainer>
        <LinkContainer to="/example/2">
          <NavDropdown.Item>Example Map 2</NavDropdown.Item>
        </LinkContainer>
        <LinkContainer to="/example/3">
          <NavDropdown.Item>Example Map 3</NavDropdown.Item>
        </LinkContainer>
      </NavDropdown>
      <LinkContainer to="/embed">
        {/* https://github.com/react-bootstrap/react-router-bootstrap/issues/242#issuecomment-480330910 */}
        <Nav.Link active={false}>Get embed code</Nav.Link>
      </LinkContainer>
    </Nav>
    <Nav className="align-self-start">
      <Nav.Link href="https://github.com/evaldasstu/zonalmaps">
        <FontAwesomeIcon icon={faGithub} className="mr-1" />
        GitHub
      </Nav.Link>
    </Nav>
  </Navbar>
);

export default Menu;

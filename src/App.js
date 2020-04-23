import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import { LinkContainer } from 'react-router-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function App() {
  return (
    <Router>
      <Container>

        <Navbar expand="lg" variant="light" bg="light" className="my-4">
          <LinkContainer to="/">
            <Navbar.Brand>Zonal Maps</Navbar.Brand>
          </LinkContainer>
          <Nav className="mr-auto">
            <LinkContainer exact to="/">
              <Nav.Link>Home</Nav.Link>
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

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/example">
            <Examples />
          </Route>
        </Switch>

      </Container>
    </Router>
  );
}

function Home() {
  return (
    <h2>Zonal Maps</h2>
  );
}

function Examples() {
  let { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}/:exampleId`}>
        <Example />
      </Route>
    </Switch>
  );
}

function Example() {
  let { exampleId } = useParams();
  return (
    <h2>Example {exampleId}</h2>
  );
}

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  useRouteMatch
} from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ReactMarkdown from 'react-markdown';
import ReadMe from '../README.md';

export default function App() {

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Container>

        <Switch>
          <Route path='/embed' />
          <Route path='/'>
            <Navbar expand='sm' variant='light' bg='light' className='my-4'>
              <LinkContainer to='/'>
                <Navbar.Brand>Zonal Maps</Navbar.Brand>
              </LinkContainer>
              <Nav className='mr-auto'>
                <LinkContainer exact to='/'>
                  <Nav.Link>Home</Nav.Link>
                </LinkContainer>
                <NavDropdown title='Examples' id='basic-nav-dropdown'>
                  <LinkContainer to='/example/1'>
                    <NavDropdown.Item>Example 1</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/example/2'>
                    <NavDropdown.Item>Example 2</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/example/3'>
                    <NavDropdown.Item>Example 3</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              </Nav>
              <Nav>
                <Nav.Link href='https://github.com/evaldasstu/zonalmaps'>GitHub</Nav.Link>
              </Nav>
            </Navbar>
          </Route>
        </Switch>

        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/example'>
            <Examples />
          </Route>
        </Switch>

      </Container>

      <Switch>
        <Route path='/embed'>
          <Embed />
        </Route>
      </Switch>
    </Router>
  );
}

function Home() {
  return (
    <ReactMarkdown source={ReadMe} />
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

function Embed() {
  return (
    <h2>Embed</h2>
  );
}

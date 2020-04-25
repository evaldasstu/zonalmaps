import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
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
          <Route path='/embed/:embedParams' />
          <Route path='/' children={<Menu />} /> {/* All other routes */}
        </Switch>
        <Switch>
          <Route exact path='/' children={<Home />} />
          <Route path="/example/:exampleNo" children={<Example />} />
          <Route exact path='/embed' children={<GenerateEmbedCode />} />
        </Switch>
      </Container>
      <Switch>
        <Route path="/embed/:embedParams" children={<Embed />} />
      </Switch>
    </Router>
  );
}

function Menu() {
  return (
    <Navbar expand='sm' variant='light' bg='light' className='my-4'>
    <LinkContainer to='/'>
      <Navbar.Brand>Zonal Maps</Navbar.Brand>
    </LinkContainer>
    <Nav className='mr-auto'>
      <LinkContainer exact to='/'>
        <Nav.Link>Home</Nav.Link>
      </LinkContainer>
      <LinkContainer to='/embed'>
        <Nav.Link>Embed code</Nav.Link>
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
  );
}

function Home() {
  return (
    <ReactMarkdown source={ReadMe} />
  );
}

function Example() {
  let { exampleNo } = useParams();
  return (
    <h2>Example {exampleNo}</h2>
  );
}

function GenerateEmbedCode() {
  return (
    <h2>Generate embed code</h2>
  );
}

function Embed() {
  let { embedParams } = useParams();
  return (
    <span>Embed params: {embedParams}</span>
  );
}

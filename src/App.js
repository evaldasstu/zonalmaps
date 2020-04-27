import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Container, Card } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import ReadMe from '../README.md';
import Menu from './components/Menu';
import GetEmbedCode from './components/GetEmbedCode';
import Embed from './components/Embed';
import Example from './components/Example';

export default function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/embed/:embedParams">
          <Embed />
        </Route>
        <Route path="/">
          {/* All other routes */}
          <Container className="my-4">
            <Menu />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/example/:exampleNo">
                <Example />
              </Route>
              <Route exact path="/embed">
                <GetEmbedCode />
              </Route>
            </Switch>
          </Container>
        </Route>
      </Switch>
    </Router>
  );
}

function Home() {
  return (
    <Card>
      <Card.Body>
        <ReactMarkdown source={ReadMe} />
      </Card.Body>
    </Card>
  );
}

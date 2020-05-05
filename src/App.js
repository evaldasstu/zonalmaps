import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Container, Card } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import ReadMe from '../README.md';
import Menu from './components/Menu/Menu';
import GetEmbedCode from './components/GetEmbedCode/GetEmbedCode';
import Embed from './components/Embed/Embed';
import Example from './components/Example/Example';

const Home = () => (
  <>
    <h1 className="zm-page-title">How to use</h1>
    <Card>
      <Card.Body>
        <ReactMarkdown source={ReadMe} />
      </Card.Body>
    </Card>
  </>
);

const App = () => (
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

export default App;

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import ReactMarkdown from 'react-markdown';
import ReadMe from '../README.md';
import Menu from './components/Menu';
import GenerateEmbedCode from './components/GenerateEmbedCode';
import Embed from './components/Embed';
import Example from './components/Example';

export default function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Container>
        <Switch>
          <Route path="/embed/:embedParams" />
          <Route path="/">
            {/* All other routes */}
            <Menu />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/example/:exampleNo">
            <Example />
          </Route>
          <Route exact path="/embed">
            <GenerateEmbedCode />
          </Route>
        </Switch>
      </Container>
      <Switch>
        <Route path="/embed/:embedParams">
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

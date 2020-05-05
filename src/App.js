import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Menu from './components/Menu/Menu';
import HowTo from './pages/HowTo/HowTo';
import GetEmbedCode from './pages/GetEmbedCode/GetEmbedCode';
import Embed from './components/Embed/Embed';
import Example from './pages/Example/Example';

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
              <HowTo />
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

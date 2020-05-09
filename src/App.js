import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Menu from './components/Menu/Menu';
import HowToUse from './pages/HowToUse/HowToUse';
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
          <Row className="justify-content-center">
            <Col xl={10}>
              <Menu />
              <Switch>
                <Route exact path="/">
                  <HowToUse />
                </Route>
                <Route path="/example/:exampleNo">
                  <Example />
                </Route>
                <Route exact path="/embed">
                  <GetEmbedCode />
                </Route>
              </Switch>
            </Col>
          </Row>
        </Container>
      </Route>
    </Switch>
  </Router>
);

export default App;

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import HowToUse from '../../pages/HowToUse/HowToUse';
import GetEmbedCode from '../../pages/GetEmbedCode/GetEmbedCode';
import Embed from '../Embed/Embed';
import Example from '../../pages/Example/Example';

import usePageView from '../../utils/analytics';

const App = () => {
  usePageView();
  return (
    <Switch>
      <Route path="/embed/:spreadsheetId">
        <Embed />
      </Route>
      {/* All other routes except /embed/:spreadsheetId */}
      <Route path="/">
        <Container className="my-4">
          <Row className="justify-content-center">
            <Col xl={10}>
              <Header />
              <Switch>
                <Route exact path="/">
                  <HowToUse />
                </Route>
                <Route path="/example/:exampleNo">
                  <Example />
                  <Footer />
                </Route>
                <Route exact path="/embed">
                  <GetEmbedCode />
                  <Footer />
                </Route>
              </Switch>
            </Col>
          </Row>
        </Container>
      </Route>
    </Switch>
  );
};

export default App;

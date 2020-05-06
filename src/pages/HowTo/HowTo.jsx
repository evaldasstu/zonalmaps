import React from 'react';
import { Card } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import ReadMe from '../../../README.md';

const HowTo = () => (
  <>
    <h1>How to</h1>
    <Card>
      <Card.Body>
        <ReactMarkdown source={ReadMe} />
      </Card.Body>
    </Card>
  </>
);

export default HowTo;

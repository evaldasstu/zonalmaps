import React, { Children, createElement } from 'react';
import { Card } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import ReadMe from '../../../README.md';
import './HowToUse.scss';

function flatten(text, child) {
  return typeof child === 'string'
    ? text + child
    : React.Children.toArray(child.props.children).reduce(flatten, text)
}

// Render anchors for section links
function HeadingRenderer(props) {
  const children = Children.toArray(props.children)
  const text = children.reduce(flatten, '')
  const slug = text.toLowerCase().replace(/\W/g, '-')
  return createElement('h' + props.level, {id: slug}, props.children)
}

const HowToUse = () => (
  <>
    <h1>How to use</h1>
    <Card>
      <Card.Body>
        <ReactMarkdown source={ReadMe} renderers={{ heading: HeadingRenderer }} />
      </Card.Body>
    </Card>
  </>
);

export default HowToUse;

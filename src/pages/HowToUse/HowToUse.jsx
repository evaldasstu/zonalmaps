import React, { Children, createElement } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import ReadMe from '../../../README.md';
import './HowToUse.scss';

function flatten(text, child) {
  return typeof child === 'string'
    ? text + child
    : Children.toArray(child.props.children).reduce(flatten, text);
}

// Render anchors for section links
function HeadingRenderer(props) {
  const { level } = props;
  const { children } = props;
  const slug = Children.toArray(children).reduce(flatten, '').toLowerCase().replace(/\W/g, '-');
  return createElement(`h${level}`, { id: slug }, children);
}
HeadingRenderer.propTypes = {
  level: PropTypes.number.isRequired,
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};

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

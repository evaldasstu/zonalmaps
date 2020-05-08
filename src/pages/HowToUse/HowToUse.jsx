import React, { Children, createElement } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import ReadMe from '../../../README.md';
import './HowToUse.scss';

// Render heading anchors for section links

function flatten(text, child) {
  return typeof child === 'string'
    ? text + child
    : Children.toArray(child.props.children).reduce(flatten, text);
}

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

// Remove 'public/' from image paths

function ImageRenderer(props) {
  const { value } = props;
  const parsedHtml = new DOMParser().parseFromString(value, 'text/html');
  const src = parsedHtml.images[0].src.replace('public/', '');
  const { width } = parsedHtml.images[0];

  return createElement('img', { src, width, className: 'img-fluid mb-4' });
}

ImageRenderer.propTypes = {
  value: PropTypes.string.isRequired,
};

const HowToUse = () => (
  <>
    <h1>How to use</h1>
    <Card className="how-to-use">
      <Card.Body>
        <ReactMarkdown
          source={ReadMe}
          renderers={{ heading: HeadingRenderer, html: ImageRenderer }}
        />
      </Card.Body>
    </Card>
  </>
);

export default HowToUse;

import React, { useState, createRef } from 'react';
import PropTypes from 'prop-types';
import { LinkContainer } from 'react-router-bootstrap';
import { Card, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-regular-svg-icons';
import AnimatedContainer from '../AnimatedContainer/AnimatedContainer';
import { SelfDestructiveMessage } from '../Message/Message';
import './TextArea.scss';

const TextArea = ({ value }) => {
  const [copySuccess, setCopySuccess] = useState(false);
  let textArea = createRef();

  const copyToClipboard = () => {
    textArea.select();
    document.execCommand('copy');
    setCopySuccess(true);
  };

  return (
    <>
      { copySuccess && (
        <AnimatedContainer isExpanded={copySuccess}>
          <SelfDestructiveMessage
            type="success"
            text="Embed code copied to clipboard."
            dismiss={() => setCopySuccess(false)}
          />
        </AnimatedContainer>
      ) }

      <code>
        <Form.Control
          as="textarea"
          value={value}
          rows="5"
          readOnly
          ref={(element) => { textArea = element; }}
        />
      </code>

      <LinkContainer to="#">
        <Card.Link onClick={copyToClipboard} className="d-block mt-4">
          Copy to clipboard
          <FontAwesomeIcon icon={faCopy} size="xs" />
        </Card.Link>
      </LinkContainer>
    </>
  );
};

TextArea.propTypes = {
  value: PropTypes.string,
};

TextArea.defaultProps = {
  value: '',
};

export default TextArea;
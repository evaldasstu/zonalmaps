import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Card, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-regular-svg-icons';
import AnimatedContainer from '../AnimatedContainer/AnimatedContainer';
import Message from '../Message/Message';
import './TextArea.scss';

const TextArea = ({ embedCode }) => {
  const [copySuccess, setCopySuccess] = useState(false);
  let textArea = useRef();

  const copyToClipboard = () => {
    textArea.select();
    document.execCommand('copy');
    setCopySuccess(true);
  };

  return (
    <>
      {/* Successfully copied to clipboard */}
      {copySuccess && (
        <AnimatedContainer isExpanded={copySuccess}>
          <Message
            type="success"
            text="Embed code copied to clipboard."
            dismiss={() => setCopySuccess(false)}
            dismissible
            selfDestructive
          />
        </AnimatedContainer>
      )}

      <code>
        <Form.Label htmlFor="embedCode" srOnly="true">
          Embed code
        </Form.Label>
        <Form.Control
          id="embedCode"
          as="textarea"
          value={embedCode || 'Waiting for a Google Sheets link...'}
          className={
            !embedCode || embedCode.length < 200 ? 'zm-text-area-low' : 'zm-text-area-high'
          }
          readOnly
          ref={(element) => {
            textArea = element;
          }}
        />
      </code>

      {embedCode ? (
        // Enabled copy button
        <Card.Link onClick={copyToClipboard} className="d-inline-block mt-4">
          Copy to clipboard
          <FontAwesomeIcon icon={faCopy} size="xs" />
        </Card.Link>
      ) : (
        // Disabled copy button
        <Card.Link className="d-inline-block mt-4 zm-card-link-disabled">
          Copy to clipboard
          <FontAwesomeIcon icon={faCopy} size="xs" />
        </Card.Link>
      )}
    </>
  );
};

TextArea.propTypes = {
  embedCode: PropTypes.string,
};

TextArea.defaultProps = {
  embedCode: '',
};

export default TextArea;

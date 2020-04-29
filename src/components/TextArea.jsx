import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { LinkContainer } from 'react-router-bootstrap';
import { Card, Form, Alert } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-regular-svg-icons';
import './TextArea.scss';

export default function TextArea(props) {
  const [copySuccess, setCopySuccess] = useState(false);
  let textArea = React.createRef();

  const { value } = props;

  const copyToClipboard = () => {
    textArea.select();
    document.execCommand('copy');
    setCopySuccess(true);
  };

  return (
    <>
      <Alert variant="success" show={copySuccess} onClose={() => setCopySuccess(false)} dismissible>
        Embed code copied to clipboard.
      </Alert>
      <code>
        <Form.Group>
          <Form.Control
            as="textarea"
            value={value}
            rows="5"
            readOnly
            ref={(element) => { textArea = element; }}
          />
        </Form.Group>
      </code>
      <LinkContainer to="#">
        <Card.Link onClick={copyToClipboard}>
          Copy to clipboard
          <FontAwesomeIcon icon={faCopy} size="xs" />
        </Card.Link>
      </LinkContainer>
    </>
  );
}

TextArea.propTypes = {
  value: PropTypes.string,
};

TextArea.defaultProps = {
  value: '',
};

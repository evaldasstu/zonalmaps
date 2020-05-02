import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import {
  Card, Form, Col, Row,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import AnimatedContainer from './AnimatedContainer';
import Message from './Message';
import TextArea from './TextArea';

const messages = {
  invalidUrl: {
    type: 'danger',
    text: 'Input does not seem to be a valid Google Sheets URL.',
  },
  progress: {
    type: 'info',
    text: 'Connecting to Google Sheets...',
  },
  warning: {
    type: 'warning',
    text: 'Input does not seem to be a valid Google Sheets URL.',
  },
  success: {
    type: 'success',
    text: 'Spreadsheet data received succesfully.',
  },
};

export default function GetEmbedCode() {
  const [spreadsheetUrl, setSpreadsheetUrl] = useState('');
  const [message, setMessage] = useState('');
  const [customizeIsActive, setCustomizeIsActive] = useState(false);
  const [displayPropertyTable, setDisplayPropertyTable] = useState(true);

  const handleSpreadsheetUrlChange = (event) => {
    setSpreadsheetUrl(event.target.value);
    const extractedSpreadsheetId = RegExp('/spreadsheets/d/([a-zA-Z0-9-_]+)')
      .exec(event.target.value);
    if (event.target.value && extractedSpreadsheetId) {
      // Connect call placeholder
      setMessage('progress');
    } else if (event.target.value && !extractedSpreadsheetId) {
      setMessage('invalidUrl');
    } else {
      setMessage(null);
    }
  };

  return (
    <>
      <h1 className="zm-page-title">Get embed code</h1>

      <Card>
        <Card.Header>
          <strong>Step 1:</strong> Prepare a spreadsheet
        </Card.Header>
        <Card.Body>
          <Card.Text>
            Create a Google Sheets spreadsheet and fill it with data according to the{' '}
            <Link to="/#specs">specification</Link>.
          </Card.Text>
          <Card.Text>
            Choose <strong>File</strong> &gt; <strong>Share</strong> and select{' '}
            <strong>Get shareable link</strong> in Google Sheets to allow the spreadsheet{' '}
            to be publicly readable.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="mt-3">
        <Card.Header>
          <strong>Step 2:</strong> Access your data
        </Card.Header>
        <Card.Body>

          <AnimatedContainer isExpanded={Boolean(message)}>{
            message
              ? <Message type={messages[message].type} text={messages[message].text} />
              : null
          }
          </AnimatedContainer>

          <Form>
            <Form.Group controlId="spreadsheetUrl">
              <Form.Label>
                Paste a public spreadsheet link here:
              </Form.Label>
              <Form.Control
                value={spreadsheetUrl}
                onChange={handleSpreadsheetUrlChange}
                type="text"
                placeholder="Enter URL"
              />
            </Form.Group>
          </Form>

          <AnimatedContainer isExpanded={customizeIsActive}>
            <Form id="collapse-customize">
              <Row className="mb-2">
                <Col sm={6} md={4} lg={3} className="my-auto">
                  <Form.Label htmlFor="displayPropertyTable" className="mt-2 mb-3">
                    Property table visibility:
                  </Form.Label>
                </Col>
                <Col sm={6} md={8} lg={4} className="my-auto">
                  <Form.Check
                    id="displayPropertyTable"
                    type="checkbox"
                    label="Display table"
                    checked={displayPropertyTable}
                    onChange={() => { setDisplayPropertyTable(!displayPropertyTable); }}
                    className="mt-2 mb-3"
                  />
                </Col>
                <Col sm={6} md={4} lg={2} className="my-auto">
                  <Form.Label htmlFor="language" className="mt-2 mb-3">
                    Language:
                  </Form.Label>
                </Col>
                <Col sm={6} md={8} lg={3}>
                  <Form.Control id="language" as="select">
                    <option value="en">English</option>
                    <option value="lt">Lithuanian</option>
                  </Form.Control>
                </Col>
              </Row>
            </Form>
          </AnimatedContainer>

          <LinkContainer to="#">
            <Card.Link
              aria-controls="collapse-customize"
              aria-expanded={customizeIsActive}
              onClick={() => setCustomizeIsActive(!customizeIsActive)}
            >
              Customize embed
              <FontAwesomeIcon
                icon={customizeIsActive ? faChevronUp : faChevronDown}
                size="xs"
              />
            </Card.Link>
          </LinkContainer>

        </Card.Body>
      </Card>

      <Card className="mt-3">
        <Card.Header><strong>Step 3:</strong> Copy generated code</Card.Header>
        <Card.Body>
          <TextArea value={spreadsheetUrl} />
        </Card.Body>
      </Card>
    </>
  );
}

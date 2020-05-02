import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import {
  Card, Form, Col, Row, Alert,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronUp,
  faChevronDown,
  faExclamationCircle,
  faExclamationTriangle,
  faCheckCircle,
  faFan,
} from '@fortawesome/free-solid-svg-icons';
import AnimatedContainer from './AnimatedContainer';
import TextArea from './TextArea';

function InvalidUrlMessage() {
  return (
    <Alert variant="danger" className="d-flex">
      <FontAwesomeIcon icon={faExclamationCircle} />
      Input does not seem to be a valid Google Sheets URL.
    </Alert>
  );
}

function ProgressMessage() {
  return (
    <Alert variant="info" className="d-flex">
      <FontAwesomeIcon icon={faFan} spin />
      Connecting to Google Sheets...
    </Alert>
  );
}

function WarningMessage() {
  return (
    <Alert variant="warning" className="d-flex">
      <FontAwesomeIcon icon={faExclamationTriangle} />
      Google Sheets API error placeholder.<br />
      Generated embed code will produce correct output once all issues are resolved.
    </Alert>
  );
}

function SuccessMessage() {
  return (
    <Alert variant="success" className="d-flex">
      <FontAwesomeIcon icon={faCheckCircle} />
      Spreadsheet data received succesfully.
    </Alert>
  );
}

export default function GetEmbedCode() {
  const [spreadsheetUrl, setSpreadsheetUrl] = useState('');
  const [message, setMessage] = useState('');
  const [customizeIsOpen, setCustomizeIsOpen] = useState(false);
  const [displayPropertyTable, setDisplayPropertyTable] = useState(true);

  const handleSpreadsheetUrlChange = (event) => {
    setSpreadsheetUrl(event.target.value);
    const extractedSpreadsheetId = RegExp('/spreadsheets/d/([a-zA-Z0-9-_]+)').exec(event.target.value);
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

          <AnimatedContainer isOpen={Boolean(message)}>
            <div>
              {message === 'invalidUrl' && <InvalidUrlMessage />}
              {message === 'progress' && <ProgressMessage />}
              {message === 'warning' && <WarningMessage />}
              {message === 'success' && <SuccessMessage />}
            </div>
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

          <AnimatedContainer isOpen={customizeIsOpen}>
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
              aria-expanded={customizeIsOpen}
              onClick={() => setCustomizeIsOpen(!customizeIsOpen)}
            >
              Customize embed
              <FontAwesomeIcon
                icon={customizeIsOpen ? faChevronUp : faChevronDown}
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

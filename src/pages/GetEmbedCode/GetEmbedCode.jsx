import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import {
  Card, Form, Col, Row,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import AnimatedContainer from '../../components/AnimatedContainer/AnimatedContainer';
import { Message } from '../../components/Message/Message';
import TextArea from '../../components/TextArea/TextArea';
import generateEmbedCode from '../../utils/generateEmbedCode';

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

const GetEmbedCode = () => {
  const [spreadsheetUrl, setSpreadsheetUrl] = useState('');
  const [spreadsheetId, setSpreadsheetId] = useState('');
  const [setupMessage, setSetupMessage] = useState('');
  const [customizeIsActive, setCustomizeIsActive] = useState(false);
  const [method, setMethod] = useState('iframe');
  const [language, setLanguage] = useState('en');
  const [displayPropertyTable, setDisplayPropertyTable] = useState(true);

  const handleSpreadsheetUrlChange = (event) => {
    setSpreadsheetUrl(event.target.value);
    let extractedSpreadsheetId = RegExp('/spreadsheets/d/([a-zA-Z0-9-_]+)')
      .exec(event.target.value);
    extractedSpreadsheetId = extractedSpreadsheetId ? extractedSpreadsheetId[1] : null;
    if (event.target.value && extractedSpreadsheetId) {
      // Connect call placeholder
      setSetupMessage('progress');
    } else if (event.target.value && !spreadsheetId) {
      setSetupMessage('invalidUrl');
    } else {
      setSetupMessage(null);
    }
    setSpreadsheetId(extractedSpreadsheetId);
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
            Choose <strong>File</strong> &gt; <strong>Share</strong>, select{' '}
            <strong>Copy link</strong> and change <strong>Restricted</strong> to{' '}
            <strong>Anyone with the link</strong> in Google Sheets to allow the spreadsheet{' '}
            to be publicly readable.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="mt-3">
        <Card.Header>
          <strong>Step 2:</strong> Setup embed
        </Card.Header>
        <Card.Body>

          <AnimatedContainer isExpanded={Boolean(setupMessage)}>
            {setupMessage
              ? <Message type={messages[setupMessage].type} text={messages[setupMessage].text} />
              : null}
          </AnimatedContainer>

          <Form>
            <Form.Label htmlFor="spreadsheetUrl">
              Paste a public spreadsheet link here:
            </Form.Label>
            <Form.Control
              id="spreadsheetUrl"
              value={spreadsheetUrl}
              onChange={handleSpreadsheetUrlChange}
              type="text"
              placeholder="Enter URL"
            />
          </Form>

          <AnimatedContainer isExpanded={customizeIsActive}>
            <Card bg="light border-0 mt-3">
              <Card.Body>
                <Form>
                  <Row>
                    <Col xs={4} lg="auto" className="my-auto">
                      <Form.Label htmlFor="method" className="mb-0">
                        Method:
                      </Form.Label>
                    </Col>

                    <Col xs={8} lg={3}>
                      <Form.Control
                        id="method"
                        as="select"
                        onChange={(event) => setMethod(event.target.value)}
                      >
                        <option value="iframe">iframe</option>
                        <option value="oembed">oEmbed</option>
                      </Form.Control>
                    </Col>

                    {/* Fluid spacer column for horizontal layout */}
                    <Col lg />

                    {/* Spacer row for vertical layout */}
                    <Col xs={12} className="d-lg-none my-1" />

                    <Col xs={4} lg="auto" className="my-auto">
                      <Form.Label htmlFor="language" className="mb-0">
                        Language:
                      </Form.Label>
                    </Col>

                    <Col xs={8} lg={3}>
                      <Form.Control
                        id="language"
                        as="select"
                        onChange={(event) => setLanguage(event.target.value)}
                      >
                        <option value="en">English</option>
                        <option value="lt">Lithuanian</option>
                      </Form.Control>
                    </Col>

                    {/* Fluid spacer column for horizontal layout */}
                    <Col lg />

                    {/* Spacer row for vertical layout */}
                    <Col xs={12} className="d-lg-none my-1" />

                    <Col xs={4} className="my-auto d-lg-none py-2">
                      <Form.Label htmlFor="displayPropertyTable" className="mb-0">
                        Table:
                      </Form.Label>
                    </Col>

                    <Col xs={8} lg="auto" className="my-auto py-2">
                      <Form.Check
                        id="displayPropertyTable"
                        type="checkbox"
                        label="Display property table"
                        checked={displayPropertyTable}
                        onChange={() => { setDisplayPropertyTable(!displayPropertyTable); }}
                      />
                    </Col>
                  </Row>
                </Form>
              </Card.Body>
            </Card>
          </AnimatedContainer>

          <LinkContainer to="#">
            <Card.Link
              onClick={() => setCustomizeIsActive(!customizeIsActive)}
              className="d-block mt-4"
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
          <TextArea embedCode={generateEmbedCode({
            spreadsheetId,
            method,
            language,
            // displayPropertyTable,
          })}
          />
        </Card.Body>
      </Card>
    </>
  );
};

export default GetEmbedCode;

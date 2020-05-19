import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Card, Form, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

import AnimatedContainer from '../../components/AnimatedContainer/AnimatedContainer';
import Message from '../../components/Message/Message';
import TextArea from '../../components/TextArea/TextArea';
import InfoPopover from '../../components/InfoPopover/InfoPopover';
import generateEmbedCode from '../../utils/generateEmbedCode';
import './GetEmbedCode.scss';

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
    text: 'Spreadsheet data received successfully.',
    dismissible: true,
    selfDestructive: true,
  },
};

const GetEmbedCode = () => {
  const [spreadsheetUrl, setSpreadsheetUrl] = useState('');
  const [spreadsheetId, setSpreadsheetId] = useState(null);
  const [setupMessage, setSetupMessage] = useState(null);
  const [customizeIsActive, setCustomizeIsActive] = useState(false);
  const [language, setLanguage] = useState('en');
  const [displayTable, setDisplayTable] = useState(true);
  const [displayEmbed, setDisplayEmbed] = useState(false);

  const handleSuccessfulConnection = () => {
    setSetupMessage('success');
    setDisplayEmbed(true);
  };

  const connectGoogleSheetsApi = () => {
    // Connect call placeholder
    handleSuccessfulConnection();
  };

  // Extract spreadsheet ID from URL
  const handleSpreadsheetUrlChange = (event) => {
    setSpreadsheetUrl(event.target.value);
    let extractedSpreadsheetId = RegExp('/spreadsheets/d/([a-zA-Z0-9-_]+)').exec(
      event.target.value,
    );
    extractedSpreadsheetId = extractedSpreadsheetId ? extractedSpreadsheetId[1] : null;
    if (event.target.value && extractedSpreadsheetId) {
      setSetupMessage('progress');
      connectGoogleSheetsApi();
    } else if (event.target.value && !spreadsheetId) {
      setSetupMessage('invalidUrl');
      setDisplayEmbed(false);
    } else {
      // On clearing input field
      setSetupMessage(null);
      setDisplayEmbed(false);
    }
    setSpreadsheetId(extractedSpreadsheetId);
  };

  return (
    <>
      <h1>Get embed code</h1>

      <Card>
        <Card.Header>
          <strong>Step 1:</strong> Prepare a spreadsheet
        </Card.Header>
        <Card.Body>
          <Card.Text>
            Create a Google Sheets spreadsheet and fill it with data according to the{' '}
            <Link to="/#spreadsheet-specification">specification</Link>.
          </Card.Text>
          <Card.Text>
            Choose <strong>File</strong> &gt; <strong>Share</strong>, select{' '}
            <strong>Copy link</strong> and change <strong>Restricted</strong> to{' '}
            <strong>Anyone with the link</strong> in Google Sheets to allow the spreadsheet to be
            publicly readable.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="mt-3">
        <Card.Header>
          <strong>Step 2:</strong> Generate embed code
        </Card.Header>
        <Card.Body>
          <AnimatedContainer isExpanded={Boolean(setupMessage)}>
            {setupMessage ? (
              <Message
                type={messages[setupMessage].type}
                text={messages[setupMessage].text}
                dismissible={messages[setupMessage].dismissible}
                selfDestructive={messages[setupMessage].selfDestructive}
                dismiss={() => setSetupMessage(null)}
              />
            ) : null}
          </AnimatedContainer>

          {/* Prevent form submission on Enter */}
          <Form
            onSubmit={(event) => {
              event.preventDefault();
            }}
          >
            <Form.Label htmlFor="spreadsheetUrl">Paste a public spreadsheet link here:</Form.Label>
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
                    <Col xs={4} className="my-auto d-lg-none py-2">
                      <Form.Label htmlFor="displayTable" className="mb-0">
                        Table
                      </Form.Label>
                    </Col>

                    <Col xs={8} lg="auto" className="my-auto py-2">
                      <Form.Check
                        id="displayTable"
                        type="checkbox"
                        label="Display location table"
                        checked={displayTable}
                        onChange={() => {
                          setDisplayTable(!displayTable);
                        }}
                      />
                    </Col>

                    {/* Fluid spacer column for horizontal layout */}
                    <Col lg />

                    {/* Spacer row for vertical layout */}
                    <Col xs={12} className="d-lg-none my-1" />

                    <Col xs={4} lg="auto" className="my-auto">
                      <Form.Label htmlFor="language" className="mb-0">
                        Language
                      </Form.Label>
                    </Col>

                    <Col xs={8} lg={3} className="d-flex align-items-center">
                      <Form.Control
                        id="language"
                        as="select"
                        disabled
                        onChange={(event) => setLanguage(event.target.value)}
                      >
                        <option value="en">English</option>
                      </Form.Control>
                      <InfoPopover>
                        <span>
                          How to use: <Link to="/#multilingual-embeds">Multilingual embeds</Link>
                        </span>
                      </InfoPopover>
                    </Col>
                  </Row>
                </Form>
              </Card.Body>
            </Card>
          </AnimatedContainer>

          <Card.Link
            onClick={() => setCustomizeIsActive(!customizeIsActive)}
            className="d-inline-block mt-4"
          >
            Customize embed
            <FontAwesomeIcon icon={customizeIsActive ? faChevronUp : faChevronDown} size="xs" />
          </Card.Link>
        </Card.Body>
      </Card>

      <Card className={spreadsheetId ? 'mt-3' : 'mt-3 zm-muted'}>
        <Card.Header>
          <strong>Step 3:</strong> Copy generated code
        </Card.Header>
        <Card.Body>
          <TextArea
            embedCode={generateEmbedCode({
              spreadsheetId,
              language,
              displayTable,
            })}
          />
        </Card.Body>
      </Card>

      <h2 className={displayEmbed ? 'zm-embed-title' : 'zm-embed-title zm-muted'}>Embed output</h2>
      {!displayEmbed ? (
        <p className="zm-waiting-label zm-muted">Embed preview will load here...</p>
      ) : (
        <div
          dangerouslySetInnerHTML={{
            __html: generateEmbedCode({ spreadsheetId, language, displayTable }),
          }}
        />
      )}
    </>
  );
};

export default GetEmbedCode;

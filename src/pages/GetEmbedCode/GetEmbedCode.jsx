import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { LinkContainer } from 'react-router-bootstrap';
import { Card, Form, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

import AnimatedContainer from '../../components/AnimatedContainer/AnimatedContainer';
import { Message } from '../../components/Message/Message';
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
  },
};

const GetEmbedCode = () => {
  const [spreadsheetUrl, setSpreadsheetUrl] = useState('');
  const [spreadsheetId, setSpreadsheetId] = useState('');
  const [setupMessage, setSetupMessage] = useState('');
  const [customizeIsActive, setCustomizeIsActive] = useState(false);
  const [format, setFormat] = useState('iframe');
  const [language, setLanguage] = useState('en');
  const [displayList, setDisplayList] = useState(true);

  // Extract spreadsheet ID from URL
  const handleSpreadsheetUrlChange = (event) => {
    setSpreadsheetUrl(event.target.value);
    let extractedSpreadsheetId = RegExp('/spreadsheets/d/([a-zA-Z0-9-_]+)').exec(
      event.target.value,
    );
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
              <Message type={messages[setupMessage].type} text={messages[setupMessage].text} />
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
                    <Col xs={4} lg="auto" className="my-auto">
                      <Form.Label htmlFor="format" className="mb-0">
                        Format
                      </Form.Label>
                    </Col>

                    <Col xs={8} lg={3} className="d-flex align-items-center">
                      <Form.Control
                        id="format"
                        as="select"
                        onChange={(event) => setFormat(event.target.value)}
                      >
                        <option value="iframe">iframe</option>
                        <option value="oembed">oEmbed</option>
                      </Form.Control>
                      <InfoPopover>
                        How to use: <Link to="/#embed-format">Embed format</Link>
                      </InfoPopover>
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
                        How to use: <Link to="/#multilingual-embeds">Multilingual embeds</Link>
                      </InfoPopover>
                    </Col>

                    {/* Fluid spacer column for horizontal layout */}
                    <Col lg />

                    {/* Spacer row for vertical layout */}
                    <Col xs={12} className="d-lg-none my-1" />

                    <Col xs={4} className="my-auto d-lg-none py-2">
                      <Form.Label htmlFor="displayList" className="mb-0">
                        List
                      </Form.Label>
                    </Col>

                    <Col xs={8} lg="auto" className="my-auto py-2">
                      <Form.Check
                        id="displayList"
                        type="checkbox"
                        label="Display location list"
                        checked={displayList}
                        onChange={() => {
                          setDisplayList(!displayList);
                        }}
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
              className="d-inline-block mt-4"
            >
              Customize embed
              <FontAwesomeIcon icon={customizeIsActive ? faChevronUp : faChevronDown} size="xs" />
            </Card.Link>
          </LinkContainer>
        </Card.Body>
      </Card>

      <Card className={spreadsheetId ? 'mt-3' : 'mt-3 zm-card-muted'}>
        <Card.Header>
          <strong>Step 3:</strong> Copy generated code
        </Card.Header>
        <Card.Body>
          <TextArea
            embedCode={generateEmbedCode({
              spreadsheetId,
              format,
              language,
              displayList,
            })}
          />
        </Card.Body>
      </Card>
    </>
  );
};

export default GetEmbedCode;

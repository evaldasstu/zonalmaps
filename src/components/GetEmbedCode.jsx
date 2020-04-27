import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import {
  Card, Form, Collapse, Col, Row,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import EmbedCodeTextArea from './EmbedCodeTextArea';

export default function GetEmbedCode() {
  const [openCustomize, setOpenCustomize] = useState(false);
  const [displayTable, setDisplayTable] = useState(true);
  const handleDisplayTableClick = () => setDisplayTable(!displayTable);

  return (
    <>
      <h2>Get embed code</h2>

      {/* <h3><strong>Step 1:</strong> Prepare the spreadsheet</h3> */}
      <Card className="mb-3">
        <Card.Header>
          <strong>Step 1:</strong> Prepare spreadsheet
        </Card.Header>
        <Card.Body>
          <Card.Text>
            Create a Google Sheets spreadsheet and fill it with data according to the{' '}
            <Link to="/#specs">specification</Link>.
          </Card.Text>
          <Card.Text>
            Choose <strong>File</strong> &gt; <strong>Publish to the web</strong>{' '}
            in Google Sheets to allow the spreadsheet to be publicly readable and copy the link.
          </Card.Text>
        </Card.Body>
      </Card>

      {/* <h3><strong>Step 2:</strong> Generate embed code</h3> */}
      <Card className="mb-3">
        <Card.Header>
          {/* <strong>Step 2:</strong> Generate embed code */}
          <strong>Step 2:</strong> Setup data source
        </Card.Header>
        <Card.Body>
          <Form>
            <Form.Group controlId="spreadsheetUrl">
              <Form.Label>
                Paste public spreadsheet link from{' '}
                <strong>File</strong> &gt; <strong>Publish to the web</strong>{' '}
                dialog in Google Sheets here:
              </Form.Label>
              <Form.Control type="url" placeholder="Enter URL" />
            </Form.Group>

            <Collapse in={openCustomize}>
              <div id="collapse-customize">
                <Row className="mb-2">
                  <Col sm={6} md={4} lg={3} className="my-auto">
                    <Form.Label htmlFor="displayTable" className="mt-2 mb-3">
                      Property table visibility:
                    </Form.Label>
                  </Col>
                  <Col sm={6} md={8} lg={4} className="my-auto">
                    <Form.Check
                      id="displayTable"
                      type="checkbox"
                      label="Display table"
                      checked={displayTable}
                      onClick={handleDisplayTableClick}
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
              </div>
            </Collapse>

            <LinkContainer to="#">
              <Card.Link
                aria-controls="collapse-customize"
                aria-expanded={openCustomize}
                onClick={() => setOpenCustomize(!openCustomize)}
              >
                Customize embed{' '}
                <FontAwesomeIcon
                  icon={openCustomize ? faChevronUp : faChevronDown}
                  size="xs"
                />
              </Card.Link>
            </LinkContainer>
          </Form>
        </Card.Body>
      </Card>

      {/* <h3><strong>Step 3:</strong>Copy embed code</h3> */}
      <Card className="mb-3">
        <Card.Header><strong>Step 3:</strong> Copy generated code</Card.Header>
        <Card.Body>
          <EmbedCodeTextArea />
        </Card.Body>
      </Card>
    </>
  );
}
import React from 'react';
import { useParams } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import TextArea from '../../components/TextArea/TextArea';
import generateEmbedCode from '../../utils/generateEmbedCode';
import './Example.scss';

const Example = () => {
  // title: temp
  // spreadsheetPublishUrl: possibly also temp
  const examples = [
    {
      title: 'Example 1 Title',
      spreadsheetId: '1hEG0yonVRlBs50UNzGc2uiv6pBJyzY1mQczfINHwnEM',
      spreadsheetPublishUrl:
        'https://docs.google.com/spreadsheets/d/e/2PACX-1vTQhSNDZHmt2bCca8hpeSe_bLtFSkqLttRO06RJk_JpDpk0jb0uW0co5acE_toHzHFZxZsPXGFHYXsg/pubhtml',
    },
    {
      title: 'Example 2 Title',
      spreadsheetId: '1hEG0yonVRlBs50UNzGc2uiv6pBJyzY1mQczfINHwnEM',
      spreadsheetPublishUrl:
        'https://docs.google.com/spreadsheets/d/e/2PACX-1vTQhSNDZHmt2bCca8hpeSe_bLtFSkqLttRO06RJk_JpDpk0jb0uW0co5acE_toHzHFZxZsPXGFHYXsg/pubhtml',
    },
    {
      title: 'Example 3 Title',
      spreadsheetId: '1hEG0yonVRlBs50UNzGc2uiv6pBJyzY1mQczfINHwnEM',
      spreadsheetPublishUrl:
        'https://docs.google.com/spreadsheets/d/e/2PACX-1vTQhSNDZHmt2bCca8hpeSe_bLtFSkqLttRO06RJk_JpDpk0jb0uW0co5acE_toHzHFZxZsPXGFHYXsg/pubhtml',
    },
  ];

  // Select example data by URL parameter
  const { exampleNo } = useParams();
  const example = examples[exampleNo - 1];

  return (
    <>
      <h1>
        Example {exampleNo}
        <br />
        <small className="text-muted">{example.title}</small>
      </h1>
      <div
        dangerouslySetInnerHTML={{
          __html: generateEmbedCode({ spreadsheetId: example.spreadsheetId }),
        }}
      />

      <Card className="mt-4">
        <Card.Header>Embed code</Card.Header>
        <Card.Body>
          <TextArea
            embedCode={generateEmbedCode({
              spreadsheetId: example.spreadsheetId,
            })}
          />
        </Card.Body>
      </Card>

      <Card className="mt-4">
        <Card.Header>Source spreadsheet</Card.Header>
        <Card.Body>
          <div className="spreadsheetEmbed">
            <iframe title="Source data" src={example.spreadsheetPublishUrl} />
          </div>
          <Card.Link href="#" className="d-block mt-4">
            Open in Google Sheets
            <FontAwesomeIcon icon={faExternalLinkAlt} size="xs" />
          </Card.Link>
        </Card.Body>
      </Card>
    </>
  );
};

export default Example;

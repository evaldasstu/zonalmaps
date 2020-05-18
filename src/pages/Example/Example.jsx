import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { gapi } from 'gapi-script';
import TextArea from '../../components/TextArea/TextArea';
import generateEmbedCode from '../../utils/generateEmbedCode';
import './Example.scss';

const examples = [
  {
    spreadsheetId: '1hEG0yonVRlBs50UNzGc2uiv6pBJyzY1mQczfINHwnEM',
    spreadsheetEmbedUrl:
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vTQhSNDZHmt2bCca8hpeSe_bLtFSkqLttRO06RJk_JpDpk0jb0uW0co5acE_toHzHFZxZsPXGFHYXsg/pubhtml',
  },
  {
    spreadsheetId: '1hEG0yonVRlBs50UNzGc2uiv6pBJyzY1mQczfINHwnEM',
    spreadsheetEmbedUrl:
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vTQhSNDZHmt2bCca8hpeSe_bLtFSkqLttRO06RJk_JpDpk0jb0uW0co5acE_toHzHFZxZsPXGFHYXsg/pubhtml',
  },
  {
    spreadsheetId: '1hEG0yonVRlBs50UNzGc2uiv6pBJyzY1mQczfINHwnEM',
    spreadsheetEmbedUrl:
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vTQhSNDZHmt2bCca8hpeSe_bLtFSkqLttRO06RJk_JpDpk0jb0uW0co5acE_toHzHFZxZsPXGFHYXsg/pubhtml',
  },
];

const Example = () => {
  const [spreadsheetTitle, setSpreadsheetTitle] = useState('');
  const [spreadsheetUrl, setSpreadsheetUrl] = useState('');
  const [spreadsheetEmbedUrl, setSpreadsheetEmbedUrl] = useState('');

  const { exampleNo } = useParams();
  const example = examples[exampleNo - 1];
  const { spreadsheetId } = example;

  const fetchSpreadsheetMetadata = (id) => {
    gapi.load('client', () => {
      gapi.client
        .init({
          apiKey: process.env.REACT_APP_GOOGLE_SHEETS_API_KEY,
        })
        .then(() => {
          return gapi.client.request({
            path: `https://sheets.googleapis.com/v4/spreadsheets/${id}`,
          });
        })
        .then((response) => {
          setSpreadsheetTitle(response.result.properties.title);
          setSpreadsheetUrl(response.result.spreadsheetUrl);
        });
    });
  };

  useEffect(() => {
    fetchSpreadsheetMetadata(spreadsheetId);
    setSpreadsheetEmbedUrl(example.spreadsheetEmbedUrl);
  }, [example, spreadsheetId]);

  return (
    <>
      <h1>
        Example {exampleNo}
        <br />
        <small className="text-muted">{spreadsheetTitle}</small>
      </h1>
      <div
        dangerouslySetInnerHTML={{
          __html: generateEmbedCode({ spreadsheetId }),
        }}
      />

      <Card className="mt-4">
        <Card.Header>Embed code</Card.Header>
        <Card.Body>
          <TextArea embedCode={generateEmbedCode({ spreadsheetId })} />
        </Card.Body>
      </Card>

      {/* Google Sheets iframe */}
      <Card className="mt-4">
        <Card.Header>Source spreadsheet</Card.Header>
        <Card.Body>
          <div className="spreadsheetEmbed">
            <iframe title="Source data" src={spreadsheetEmbedUrl} />
          </div>
          <Card.Link href={spreadsheetUrl} className="d-block mt-4">
            Open in Google Sheets
            <FontAwesomeIcon icon={faExternalLinkAlt} size="xs" />
          </Card.Link>
        </Card.Body>
      </Card>
    </>
  );
};

export default Example;

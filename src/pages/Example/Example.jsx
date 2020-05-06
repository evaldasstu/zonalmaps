import React from 'react';
import { useParams } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import TextArea from '../../components/TextArea/TextArea';
import './Example.scss';

const Example = () => {
  const examples = [
    {
      title: 'Responsive Embed 2x3',
      spreadsheetId: '2PACX-1vTQhSNDZHmt2bCca8hpeSe_bLtFSkqLttRO06RJk_JpDpk0jb0uW0co5acE_toHzHFZxZsPXGFHYXsg',
      embedCode: '<div class="zm"><iframe src="https://evaldasstu.github.io/zonalmaps/embed/2PACX-1vTQhSNDZHmt2bCca8hpeSe_bLtFSkqLttRO06RJk_JpDpk0jb0uW0co5acE_toHzHFZxZsPXGFHYXsg" frameborder="0"></iframe><style>.zm {position: relative; padding-bottom: 150%; height: 0; overflow: hidden; max-width: 100%} .zm iframe {position: absolute; top: 0; left: 0; width: 100%; height: 100%}</style></div>',
    },
    {
      title: 'Fixed-size Embed 640x480',
      spreadsheetId: '2PACX-1vTQhSNDZHmt2bCca8hpeSe_bLtFSkqLttRO06RJk_JpDpk0jb0uW0co5acE_toHzHFZxZsPXGFHYXsg',
      embedCode: '<iframe width="640" height="480" src="https://evaldasstu.github.io/zonalmaps/embed/2PACX-1vTQhSNDZHmt2bCca8hpeSe_bLtFSkqLttRO06RJk_JpDpk0jb0uW0co5acE_toHzHFZxZsPXGFHYXsg" frameborder="0"></iframe>',
    },
    {
      title: 'Fixed-size Embed 640x960',
      spreadsheetId: '2PACX-1vTQhSNDZHmt2bCca8hpeSe_bLtFSkqLttRO06RJk_JpDpk0jb0uW0co5acE_toHzHFZxZsPXGFHYXsg',
      embedCode: '<iframe width="640" height="960" src="https://evaldasstu.github.io/zonalmaps/embed/2PACX-1vTQhSNDZHmt2bCca8hpeSe_bLtFSkqLttRO06RJk_JpDpk0jb0uW0co5acE_toHzHFZxZsPXGFHYXsg" frameborder="0"></iframe>',
    },
  ];

  const { exampleNo } = useParams();
  const example = examples[exampleNo - 1];
  const spreadsheetEmbedCodePrefix = 'https://docs.google.com/spreadsheets/d/e/';
  const spreadsheetEmbedCodeSuffix = '/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false';
  const spreadsheetEmbedCode = spreadsheetEmbedCodePrefix + example.spreadsheetId
    + spreadsheetEmbedCodeSuffix;

  return (
    <>
      <h1>
        Example {exampleNo}<br />
        <small className="text-muted">{example.title}</small>
      </h1>
      <div dangerouslySetInnerHTML={{ __html: example.embedCode }} />

      <Card className="mt-4">
        <Card.Header>Embed code</Card.Header>
        <Card.Body>
          <TextArea embedCode={example.embedCode} />
        </Card.Body>
      </Card>

      <Card className="mt-4">
        <Card.Header>Source spreadsheet</Card.Header>
        <Card.Body>
          <div className="spreadsheetEmbed mb-3">
            <iframe title="Source data" src={spreadsheetEmbedCode} />
          </div>
          <Card.Link href="#">
            Open in Google Sheets
            <FontAwesomeIcon icon={faExternalLinkAlt} size="xs" />
          </Card.Link>
        </Card.Body>
      </Card>
    </>
  );
};

export default Example;

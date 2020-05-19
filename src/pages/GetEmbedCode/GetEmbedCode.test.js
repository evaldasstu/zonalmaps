import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import GetEmbedCode from './GetEmbedCode';

const envUrl = window.location.origin + process.env.PUBLIC_URL;

const setup = async () => {
  const getEmbedCode = render(
    <Router>
      <GetEmbedCode />
    </Router>,
  );
  const spreadsheetUrl = getEmbedCode.getByLabelText(/spreadsheet link/i);
  const output = getEmbedCode.getByLabelText(/embed code/i);
  await userEvent.type(
    spreadsheetUrl,
    'https://docs.google.com/spreadsheets/d/1hEG0yonVRlBs50UNzGc2uiv6pBJyzY1mQczfINHwnEM/edit#gid=0',
  );
  return { getEmbedCode, output };
};

test('displays embed code after valid URL entry', async () => {
  const { output } = await setup();
  const expectedOutput = `<div class="zm"><iframe src="${envUrl}/embed/1hEG0yonVRlBs50UNzGc2uiv6pBJyzY1mQczfINHwnEM" frameborder="0"></iframe><style>.zm {position: relative; padding-bottom: 150%; height: 0; overflow: hidden; max-width: 100%} .zm iframe {position: absolute; top: 0; left: 0; width: 100%; height: 100%}</style></div>`;
  expect(output).toHaveValue(expectedOutput);
});

test('displays map only embed code after valid URL entry and table display uncheck', async () => {
  const { getEmbedCode, output } = await setup();
  userEvent.click(getEmbedCode.getByLabelText(/table/i));
  const expectedOutput = `<div class="zm"><iframe src="${envUrl}/embed/1hEG0yonVRlBs50UNzGc2uiv6pBJyzY1mQczfINHwnEM?table=0" frameborder="0"></iframe><style>.zm {position: relative; padding-bottom: 150%; height: 0; overflow: hidden; max-width: 100%} .zm iframe {position: absolute; top: 0; left: 0; width: 100%; height: 100%}</style></div>`;
  expect(output).toHaveValue(expectedOutput);
});

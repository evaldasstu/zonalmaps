import React from 'react';
import { useParams } from 'react-router-dom';
import EmbedCodeTextArea from './EmbedCodeTextArea';

export default function Example() {
  const examples = [
    {
      title: 'Responsive Embed 2x3',
      embedCode: '<div class="zm"><iframe src="https://evaldasstu.github.io/zonalmaps/embed/2PACX-1vTQhSNDZHmt2bCca8hpeSe_bLtFSkqLttRO06RJk_JpDpk0jb0uW0co5acE_toHzHFZxZsPXGFHYXsg" frameborder="0"></iframe><style>.zm {position: relative; padding-bottom: 150%; height: 0; overflow: hidden; max-width: 100%} .zm iframe {position: absolute; top: 0; left: 0; width: 100%; height: 100%}</style></div>',
    },
    {
      title: 'Fixed-size Embed 640x480',
      embedCode: '<iframe width="640" height="480" src="https://evaldasstu.github.io/zonalmaps/embed/2PACX-1vTQhSNDZHmt2bCca8hpeSe_bLtFSkqLttRO06RJk_JpDpk0jb0uW0co5acE_toHzHFZxZsPXGFHYXsg" frameborder="0"></iframe>',
    },
    {
      title: 'Fixed-size Embed 640x960',
      embedCode: '<iframe width="640" height="960" src="https://evaldasstu.github.io/zonalmaps/embed/2PACX-1vTQhSNDZHmt2bCca8hpeSe_bLtFSkqLttRO06RJk_JpDpk0jb0uW0co5acE_toHzHFZxZsPXGFHYXsg" frameborder="0"></iframe>',
    },
  ];
  const { exampleNo } = useParams();
  const example = examples[exampleNo - 1];
  return (
    <>
      <h2>
        Example
        {' '}
        {exampleNo}
        <br />
        <small className="text-muted">{example.title}</small>
      </h2>
      <h3 className="mt-4">Embed code</h3>
      <EmbedCodeTextArea value={example.embedCode} />
      <h3 className="mt-4">Result</h3>
      <div dangerouslySetInnerHTML={{ __html: example.embedCode }} />
    </>
  );
}

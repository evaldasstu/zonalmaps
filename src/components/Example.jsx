import React from 'react';
import { useParams } from 'react-router-dom';

export default function Embed() {
  const { exampleNo } = useParams();
  return (
    <h2>
      Example
      {exampleNo}
    </h2>
  );
}

import React from 'react';
import { useParams } from 'react-router-dom';

export default function Embed() {
  const { embedParams } = useParams();
  return (
    <span>
      Embed params:
      {embedParams}
    </span>
  );
}

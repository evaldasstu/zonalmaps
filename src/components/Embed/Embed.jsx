import React from 'react';
import { useParams } from 'react-router-dom';

export default function Embed() {
  const { embedParams } = useParams();
  return (
    <div className="temp-border">
      Embed params:
      {embedParams}
    </div>
  );
}

import React from 'react';
import { useParams } from 'react-router-dom';

const Embed = () => {
  const { embedParams } = useParams();
  return (
    <div className="temp-border">
      Embed params:
      {embedParams}
    </div>
  );
};

export default Embed;

import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import queryString from 'query-string'; // keep at v^5 for legacy browser support

const Embed = () => {
  const { spreadsheetId } = useParams();
  // Display list unless URL contains ?list=0
  const displayList = !(queryString.parse(useLocation().search).list === '0') && true;
  return (
    <>
      <div className="border">
        Spreadsheet ID: {spreadsheetId}
        <br />
        Map placeholder
      </div>
      {displayList && <div className="border mt-4">List placeholder</div>}
    </>
  );
};

export default Embed;

import React, { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import queryString from 'query-string'; // keeping at v^5 for legacy browser support
import Data from '../Data/Data';
import Table from '../Table/Table';

const Embed = () => {
  const [data, setData] = useState(null);
  const [headers, setHeaders] = useState(null);
  const { spreadsheetId } = useParams();

  // Display table unless URL contains ?table=0
  const displayTable = !(queryString.parse(useLocation().search).table === '0') && true;

  return (
    <>
      {/* Renderless data component */}
      <Data
        spreadsheetId={spreadsheetId}
        onLoad={({ headerLoad, dataLoad }) => {
          if (headerLoad && dataLoad) {
            setHeaders(headerLoad);
            setData(dataLoad);
          }
        }}
      />

      <div className="border">
        Spreadsheet ID: {spreadsheetId}
        <br />
        Map placeholder
      </div>

      {/* Location table */}
      {displayTable && (
        <div className="mt-4">
          <Table headers={headers} data={data} />
        </div>
      )}
    </>
  );
};

export default Embed;

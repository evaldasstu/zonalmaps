import { useState, useEffect, useCallback } from 'react';
import { gapi } from 'gapi-script';
import toCamelCase from '../../utils/toCamelCase';

const Data = ({ spreadsheetId, onLoad }) => {
  const [data, setData] = useState(null);
  const [headers, setHeaders] = useState(null);

  // Main data loader
  const fetchData = useCallback((id) => {
    // Setup header label and name pairs
    const prepareHeaders = (firstRow) => {
      // Add number column
      const prepared = [{ field: 'no', header: '#' }];

      firstRow.forEach((col) => {
        prepared.push({ field: toCamelCase(col), header: col });
      });
      setHeaders(prepared);
    };

    // Convert spreadsheet array output to object
    const prepareData = (gridData) => {
      const objectData = [];
      // Iterate starting with row 2
      for (let rowIndex = 1; rowIndex < gridData.length; rowIndex += 1) {
        // Add number column
        objectData.push({ no: rowIndex });

        gridData[rowIndex].forEach((value, colIndex) => {
          objectData[rowIndex - 1][toCamelCase(gridData[0][colIndex])] = value;
        });
      }

      setData(objectData);
    };

    gapi.load('client', () => {
      gapi.client
        .init({
          apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
        })
        .then(() => {
          return gapi.client.request({
            path: `https://sheets.googleapis.com/v4/spreadsheets/${id}/values/Data`,
          });
        })
        .then((response) => {
          prepareHeaders(response.result.values[0]);
          prepareData(response.result.values);
        });
    });
  }, []);

  useEffect(() => {
    fetchData(spreadsheetId);
  }, [spreadsheetId, fetchData]);

  useEffect(() => {
    if (headers && data) {
      onLoad({ headerLoad: headers, dataLoad: data });
    }
  }, [headers, data, onLoad]);

  // Renderless component
  return null;
};

export default Data;

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import './Table.scss';

// Special hidden colums
// const hiddenColumns = ['coordinates', 'zone'];

const Table = ({ headers, data }) => {
  const [cols, setCols] = useState(null);

  // Construct table header
  const prepareCols = (headerArray) => {
    const headerComponents = headerArray.map((col) => {
      return (
        <Column
          header={col.header}
          key={col.field}
          field={col.field}
          className={col.field}
          sortable
        />
      );
    });
    setCols(headerComponents);
  };

  useEffect(() => {
    if (headers && data) {
      prepareCols(headers);
    }
  }, [headers, data]);

  return (
    <small>
      <DataTable value={data} autoLayout sortField="no" sortOrder={1} className="table table-hover">
        {cols}
      </DataTable>
    </small>
  );
};

export default Table;

Table.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.object),
  data: PropTypes.arrayOf(PropTypes.object),
};

Table.defaultProps = {
  headers: null,
  data: null,
};

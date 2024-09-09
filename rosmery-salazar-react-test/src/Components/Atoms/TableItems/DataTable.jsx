import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

export const DataTable = ({ paginatedRows=[], columns, pageSize }) => {
  
  return (
    <div style={{ height: 400, width: '100%' }}>
      
        <DataGrid
          rows={paginatedRows}
          columns={columns}
          pageSize={pageSize}
          rowsPerPageOptions={[5]}
          pagination
          disableSelectionOnClick
          getRowId={(row) =>row.id }
         
        />
   
    </div>
  );
};

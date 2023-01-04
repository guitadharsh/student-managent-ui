import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
   { feld: 'id', headerName: 'Id', width: 70},
   { field: 'date', headerName: 'Date', width: 130 },
   { field: 'batch', headerName: 'Batch', width: 70 },
   { field: 'title', headerName: 'Title', width: 130 },
];

const rows = [
   { id: 1, batch: 'A', title: 'Science', date: '03-02-2023' },
   { id: 2, batch: 'B', title: 'Maths', date: '04 - 02 - 2023' },
   { id: 3, batch: 'E', title: 'Chemistry', date: '04 - 02 - 2023' },
   { id: 4, batch: 'D', title: 'Physics', date: '01 - 02 - 2023' },
   { id: 5, batch: 'A', title: 'Science', date: '02 - 02 - 2023' },
   { id: 6, batch: 'C', title: 'Maths', date: '15 - 02 - 2023' },
   { id: 7, batch: 'A', title: 'Physics', date: '04 - 02 - 2023' },
   { id: 8, batch: 'E', title: 'Maths', date: '03 - 02 - 2023' },
   { id: 9, batch: 'C', title: 'Science', date: '06 - 02 - 2023 '},
];

export default function DataTable() {
   return (
      <div style={{ height: 400, width: '100%' }}>
         <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
         />
      </div>
   ); 
}
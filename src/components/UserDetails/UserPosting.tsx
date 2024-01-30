import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Button, Typography } from '@mui/material';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'date_start',
    headerName: 'Date',
    width: 150,
    editable: true,
  },
  {
    field: 'nights',
    headerName: 'Nights',
    type: 'number',
    width: 150,
    editable: true,
  },
  {
    field: 'price',
    headerName: 'Price',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'sleep',
    headerName: 'sleeps',
    type: 'number',
    width: 150,
    editable: false,
  },
  {
    field: 'room_view',
    headerName: 'View',
    type: 'number',
    width: 150,
    editable: true,
  },
  {
    field: 'Action',
    headerName: 'Action',
    width: 200,
    type: 'number',
    renderCell: (params) => {
      const handleButtonClick = () => {
        // Xử lý sự kiện khi nút được nhấp
        console.log('Button clicked for row with ID:', params.id);
      };

      return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Button variant="contained" onClick={handleButtonClick}>
            View
          </Button>
        </div>
      );
    },
  },
];

const rows = [
  {
    id: 1,
    price: '2000$',
    room_view: 'High',
    date_start: '02/09/24-02/16/24',
    nights: '7',
    sleep:'5'
  },
  {
    id: 2,
    price: '2000$',
    room_view: 'High',
    date_start: '02/09/24-02/16/24',
    nights: '7',
    sleep:'5'
  },{
    id: 3,
    price: '2000$',
    room_view: 'High',
    date_start: '02/09/24-02/16/24',
    nights: '7',
    sleep:'5'
  },{
    id: 4,
    price: '2000$',
    room_view: 'High',
    date_start: '02/09/24-02/16/24',
    nights: '7',
    sleep:'5'
  },{
    id: 5,
    price: '2000$',
    room_view: 'High',
    date_start: '02/09/24-02/16/24',
    nights: '7',
    sleep:'5'
  },{
    id: 6,
    price: '2000$',
    room_view: 'High',
    date_start: '02/09/24-02/16/24',
    nights: '7',
    sleep:'5'
  },{
    id: 1,
    price: '2000$',
    room_view: 'High',
    date_start: '02/09/24-02/16/24',
    nights: '7',
    sleep:'5'
  },
];

export default function UserPosting() {
  return (
    <Box sx={{ height: 500, width: '100%',backgroundColor:'white' ,padding:'25px'}}>
      <Box>
      <Typography sx={{fontSize:'50px'}}>My Posting</Typography>
      <DataGrid
      
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
      </Box>
    </Box>
  );
}
import { Box, IconButton, Stack, Tooltip, Typography } from "@mui/material";
import React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";

type Props = {};

export default function ManagePlanPage({}: Props) {
  const navigate = useNavigate();

  const columns: GridColDef[] = [
    { field: "id", headerName: "Type", width: 90 },
    {
      field: "name",
      headerName: "Name",
      width: 150,
      editable: true,
    },
    {
      field: "price",
      headerName: "Price",
      width: 150,
      editable: true,
    },
    {
      field: "action",
      headerName: "Tác vụ",
      flex: 1,
      renderCell: (param) => {
        return (
          <Stack direction="row" spacing={1}>
            <Tooltip title="Cập nhật">
              <IconButton aria-label="update block" onClick={() => {}}>
                <EditIcon />
              </IconButton>
            </Tooltip>
          </Stack>
        );
      },
    },
  ];

  const rows = [
    { id: 1, name: "Standard", price: 4.99 },
    { id: 2, name: "Vip", price: 19.99 },
  ];

  return (
    <Box display={"flex"} flexDirection={"column"} flex={1}>
      <Typography variant="h4" marginY={1}>
        Plan List
      </Typography>

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
        disableRowSelectionOnClick
      />
    </Box>
  );
}

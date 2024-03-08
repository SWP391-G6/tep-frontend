import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import {
  Button,
  IconButton,
  Modal,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import ViewIcon from "@mui/icons-material/Visibility";
import { useNavigate } from "react-router";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import { MyBookingResponse } from "../../interfaces/booking/bookingResponse";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 550,
  bgcolor: "background.paper",
  boxShadow: 4,
  p: 4,
};

const StyledGridOverlay = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  "& .ant-empty-img-1": {
    fill: theme.palette.mode === "light" ? "#aeb8c2" : "#262626",
  },
  "& .ant-empty-img-2": {
    fill: theme.palette.mode === "light" ? "#f5f5f7" : "#595959",
  },
  "& .ant-empty-img-3": {
    fill: theme.palette.mode === "light" ? "#dce0e6" : "#434343",
  },
  "& .ant-empty-img-4": {
    fill: theme.palette.mode === "light" ? "#fff" : "#1c1c1c",
  },
  "& .ant-empty-img-5": {
    fillOpacity: theme.palette.mode === "light" ? "0.8" : "0.08",
    fill: theme.palette.mode === "light" ? "#f5f5f5" : "#fff",
  },
}));
const BookingHistoryDataGrid = () => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleOpen = (bookingId: any) => {
    setSelectedBookingId(bookingId);
    setOpen(true);
  };

  const columns: GridColDef[] = [
    { field: "index", headerName: "ID", width: 150 },
    { field: "booking_id", headerName: "bookingid", width: 150 },
    {
      field: "fullname",
      headerName: "Fullname",
      width: 190,
      flex: 1,
    },
    {
      field: "dateStart",
      headerName: "Start Date",
      width: 150,
      valueGetter: (params) => params.row.timeshare_id.dateStart,
      editable: true,
    },
    {
      field: "dateEnd",
      headerName: "End Date",
      width: 150,
      valueGetter: (params) => params.row.timeshare_id.dateEnd,
      editable: true,
    },
    {
      field: "postal_code",
      headerName: "Postal Code",
      width: 100,
    },
    {
      field: "total",
      headerName: "Total(VNĐ)",
      type: "number",
      width: 100,
    },
    {
      field: "success_date",
      headerName: "Success Date",
      type: "string",
      editable: false,
    },
    {
      field: "Action",
      headerName: "Action",
      width: 100,
      type: "number",
      renderCell: (params) => {
        const handleButtonClick = () => {
          console.log("Button clicked for row with ID:", params.id);
          window.location.href = `/user/booking_history/${params.id}?param=9b9b21e5-43f4-4d2e-b059-6db982563d4a`;
        };

        return (
          <Stack direction="row" spacing={1}>
            <Tooltip title="View detail timeshare">
              <IconButton aria-label="view detail" onClick={handleButtonClick}>
                <ViewIcon sx={{ color: "#00acb3" }} />
              </IconButton>
            </Tooltip>
          </Stack>
        );
      },
    },
  ];
  const [bookingDetail, setBookingDetail] = React.useState(null);
  const handleClose = () => setOpen(false);
  const columnIndex = columns.findIndex(
    (column) => column.field === "booking_id"
  );
  if (columnIndex !== -1) {
    columns.splice(columnIndex, 1);
  }
  const [bookings, setBookings] = React.useState<MyBookingResponse[]>([]);
  const [selectedBookingId, setSelectedBookingId] = React.useState(null);
  const selectedBooking = bookings.find(
    (booking) => booking.booking_id === selectedBookingId
  );

  const bookingsWithIds = bookings.map((booking, index) => {
    return {
      ...booking,
      index: index + 1,
    };
  });

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "white",
        padding: "30px",
        border: "solid 1px ",
        borderColor: "rgba(0, 0, 0, 0.2)",
      }}
    >
      <Box>
        <Typography variant="h5" fontWeight={700}>
          My Booking History
        </Typography>
        <DataGrid
          rows={bookingsWithIds}
          columns={columns}
          getRowId={(row) => row.booking_id}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          slots={{ toolbar: GridToolbar }}
          pageSizeOptions={[10, 20, 50, 100]}
          disableRowSelectionOnClick
        />
      </Box>
    </Box>
  );
};

export default BookingHistoryDataGrid;

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
import myBookingAPI from "../../services/timeshare/myBookingAPI";
import { MyBookingResponse } from "../../interfaces/mybooking/myBookingResponse";

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

function CustomNoRowsOverlay() {
  return (
    <StyledGridOverlay>
      <svg
        width="120"
        height="100"
        viewBox="0 0 184 152"
        aria-hidden
        focusable="false"
      >
        <g fill="none" fillRule="evenodd">
          <g transform="translate(24 31.67)">
            <ellipse
              className="ant-empty-img-5"
              cx="67.797"
              cy="106.89"
              rx="67.797"
              ry="12.668"
            />
            <path
              className="ant-empty-img-1"
              d="M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z"
            />
            <path
              className="ant-empty-img-2"
              d="M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"
            />
            <path
              className="ant-empty-img-3"
              d="M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z"
            />
          </g>
          <path
            className="ant-empty-img-3"
            d="M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z"
          />
          <g className="ant-empty-img-4" transform="translate(149.65 15.383)">
            <ellipse cx="20.654" cy="3.167" rx="2.849" ry="2.815" />
            <path d="M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z" />
          </g>
        </g>
      </svg>
      <Box sx={{ mt: 1 }}>No request yet!</Box>
    </StyledGridOverlay>
  );
}

const BookingHistoryList = () => {
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

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response: any = await myBookingAPI.getBookingByUserId(
          "9b9b21e5-43f4-4d2e-b059-6db982563d4a"
        );
        if (response && response.length > 0) {
          setBookings(response);
        }
        console.log(bookings, "booking");
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };

    const initUseEffect = async () => {
      await fetchData();
    };
    initUseEffect();
  }, []);

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

export default BookingHistoryList;

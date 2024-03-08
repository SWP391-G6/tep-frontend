import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Grid,
  IconButton,
  Modal,
  Paper,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import ViewIcon from "@mui/icons-material/Visibility";
import { useNavigate } from "react-router";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import EventIcon from "@mui/icons-material/Event";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PersonIcon from "@mui/icons-material/Person";
import CloseIcon from "@mui/icons-material/Close";
import { MyRequestResponse } from "../../interfaces/request/myRequestResponse";
import myRequestAPI from "../../services/timeshare/myRequestAPI";
import timeshareAPI from "../../services/timeshare/timeshareAPI";
import DomainIcon from "@mui/icons-material/Domain";
import BedIcon from "@mui/icons-material/Bed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import KitchenIcon from "@mui/icons-material/Kitchen";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import AirlineSeatIndividualSuiteIcon from "@mui/icons-material/AirlineSeatIndividualSuite";
import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";
import { useEffect, useState } from "react";
import { GetExchangeRequestResponse } from "../../interfaces/request/getExchangeRequestResponse";
import requestAPI from "../../services/request/requestAPI";
import { USER_ID_KEY } from "../../constant";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  width: 850,
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
      <Box sx={{ mt: 1 }}>No Request Yet!</Box>
    </StyledGridOverlay>
  );
}

const RequestExchangeList = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [requestList, setRequestList] = useState<GetExchangeRequestResponse[]>(
    []
  );

  const userID = JSON.parse(localStorage.getItem(USER_ID_KEY)!);
  const handleOpen = (bookingId: any) => {
    setSelectedRequestId(bookingId);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const [selectedRequestId, setSelectedRequestId] = useState(null);

  const columns: GridColDef[] = [
    { field: "no", headerName: "No", width: 90 },
    {
      field: "timeshareName",
      headerName: "Timeshare Name",
      flex: 1,
      renderCell: (param) => {
        return (
          <Typography noWrap>
            {param.row.timeshare_response_id.timeshareName}
          </Typography>
        );
      },
    },
    {
      field: "create_date",
      headerName: "Create Date",
      flex: 1,
    },
    {
      field: "request_by",
      headerName: "Request By",
      flex: 1,
      renderCell: (param) => {
        return <Typography noWrap>{param.row.request_by.fullname}</Typography>;
      },
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
      renderCell: (param) => {
        return (
          <Typography>
            {param.row.status === 0
              ? "Waiting"
              : param.row.status === 1
              ? "Accepted"
              : param.row.status === 3
              ? "Rejected"
              : param.row.status}
          </Typography>
        );
      },
    },
    {
      field: "message",
      headerName: "Message",
      flex: 1,
    },

    {
      field: "action",
      headerName: "Action",
      sortable: false,
      flex: 1,
      renderCell: (param) => {
        return (
          <Stack direction="row" spacing={1}>
            <Tooltip title="View Detail">
              <IconButton
                aria-label="view detail"
                onClick={handleOpen}
              >
                <ViewIcon />
              </IconButton>
            </Tooltip>
          </Stack>
        );
      },
    },
  ];
  const columnIndex = columns.findIndex(
    (column) => column.field === "request_id"
  );
  if (columnIndex !== -1) {
    columns.splice(columnIndex, 1);
  }
  const [request, setRequest] = useState<MyRequestResponse[]>([]);
  const selectedRequest = request.find(
    (requesting) => requesting.request_id === selectedRequestId
  );
  const [timeshare, setTimeshare] = useState<Record<string, any>>({});
  useEffect(() => {
    const getRequestListByUserID = async () => {
      const data: any = await requestAPI.getRequestByUserID(userID);
      if (data && data.length > 0) {
        setRequestList(data);
      }
    };

    const initUseEffect = async () => {
      await getRequestListByUserID();
    };
    initUseEffect();
  }, []);

  const requestWithIds = request.map((request, index) => {
    return {
      ...request,
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
          My Exchange Request
        </Typography>
        {requestList.length == 0 ? (
          <DataGrid
            sx={{ height: "550px", marginTop: "10px" }}
            columns={columns}
            slots={{
              noRowsOverlay: CustomNoRowsOverlay,
            }}
            rows={[]}
          />
        ) : (
          <DataGrid
            rows={requestList.map((item, index) => {
              return { no: index + 1, ...item };
            })}
            getRowId={(row) => row.request_id}
            style={{ height: "550px", marginTop: "10px" }}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 10,
                },
              },
            }}
            slots={{ toolbar: GridToolbar }}
            pageSizeOptions={[10, 25]}
            disableRowSelectionOnClick
          />
        )}
      </Box>

      {selectedRequest && (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Card sx={style}>
            <CardContent>
              <Grid container gap={3}>
                <Grid2 xs={2}>
                  <Paper elevation={5} sx={{ padding: "10px", width: "300px" }}>
                    {timeshare && (
                      <img
                        src={timeshare.image_url}
                        alt="timeshare"
                        width="100%"
                        height={160}
                      />
                    )}
                  </Paper>
                </Grid2>

                <Grid2 xs={10}>
                  <Typography variant="h4" component="h2" color={"#00acb3"}>
                    {selectedRequest.timeshare_id.timeshareName}
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{ mt: 1, fontWeight: "bold" }}
                  >
                    <EventIcon
                      sx={{ mr: 1, verticalAlign: "middle", color: "#00acb3" }}
                    />
                    Check-in: {selectedRequest.timeshare_id.dateStart}
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{ mt: 1, fontWeight: "bold" }}
                  >
                    <EventIcon
                      sx={{ mr: 1, verticalAlign: "middle", color: "#00acb3" }}
                    />
                    Check-out: {selectedRequest.timeshare_id.dateEnd}
                  </Typography>

                  <Typography variant="body1" sx={{ mt: 1 }}>
                    <span style={{ fontWeight: "bold", marginRight: "0.5em" }}>
                      <LocationOnIcon
                        sx={{
                          mr: 1,
                          verticalAlign: "middle",
                          color: "#00acb3",
                        }}
                      />
                      Destination:
                    </span>
                    {selectedRequest.timeshare_id.destinationModel.desName}
                  </Typography>

                  <Button
                    variant="text"
                    startIcon={<ViewIcon sx={{ ml: 0.6, color: "#fff" }} />}
                    onClick={() =>
                      navigate(
                        `/view_timeshare_detail/${selectedRequest.timeshare_id.timeshareId}`
                      )
                    }
                    sx={{
                      mt: 1,
                      backgroundColor: "#00acb3",
                      textTransform: "none",
                      color: "#fff",
                      "&:hover": {
                        backgroundColor: "#08b7bd",
                      },
                    }}
                  >
                    View detail
                  </Button>
                </Grid2>
              </Grid>
              {timeshare?.room && (
                <Box mt={4}>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Typography variant="body1" sx={{ mt: 2 }}>
                        <span
                          style={{ fontWeight: "bold", marginRight: "0.5em" }}
                        >
                          <AirlineSeatIndividualSuiteIcon
                            sx={{
                              mr: 1,
                              verticalAlign: "middle",
                              color: "#00acb3",
                            }}
                          />
                          Sleep:
                        </span>
                        {timeshare.room.sleeps}
                      </Typography>

                      <Typography variant="body1" sx={{ mt: 2 }}>
                        <span
                          style={{ fontWeight: "bold", marginRight: "0.5em" }}
                        >
                          <BedIcon
                            sx={{
                              mr: 1,
                              verticalAlign: "middle",
                              color: "#00acb3",
                            }}
                          />
                          Bedroom:
                        </span>
                        {timeshare.room.bed}
                      </Typography>

                      <Typography variant="body1" sx={{ mt: 2 }}>
                        <span
                          style={{ fontWeight: "bold", marginRight: "0.5em" }}
                        >
                          <BathtubIcon
                            sx={{
                              mr: 1,
                              verticalAlign: "middle",
                              color: "#00acb3",
                            }}
                          />
                          Bath:
                        </span>
                        {timeshare.room.bath}
                      </Typography>
                    </Grid>

                    <Grid item xs={6}>
                      <Typography variant="body1" sx={{ mt: 2 }}>
                        <span
                          style={{ fontWeight: "bold", marginRight: "0.5em" }}
                        >
                          <PhotoSizeSelectActualIcon
                            sx={{
                              mr: 1,
                              verticalAlign: "middle",
                              color: "#00acb3",
                            }}
                          />
                          View:
                        </span>
                        {timeshare.room.roomview}
                      </Typography>

                      <Typography variant="body1" sx={{ mt: 2 }}>
                        <span
                          style={{ fontWeight: "bold", marginRight: "0.5em" }}
                        >
                          <DomainIcon
                            sx={{
                              mr: 1,
                              verticalAlign: "middle",
                              color: "#00acb3",
                            }}
                          />
                          Room Type:
                        </span>
                        {timeshare.room.name}
                      </Typography>

                      <Typography variant="body1" sx={{ mt: 2 }}>
                        <span
                          style={{ fontWeight: "bold", marginRight: "0.5em" }}
                        >
                          <KitchenIcon
                            sx={{
                              mr: 1,
                              verticalAlign: "middle",
                              color: "#00acb3",
                            }}
                          />
                          Kitchen:
                        </span>
                        {timeshare.room.kitchen}
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              )}
              <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{ position: "absolute", top: 5, right: 5 }}
              >
                <CloseIcon />
              </IconButton>
            </CardContent>
            <Divider />

            <Grid container spacing={2}>
              <Grid item xs={6}>
                <CardActions sx={{ justifyContent: "flex-start", mt: 2 }}>
                  <Typography variant="body1" fontSize={20} fontWeight={"40px"}>
                    <span style={{ fontWeight: "bold", marginRight: "0.5em" }}>
                      <PersonIcon
                        sx={{
                          mr: 2,
                          verticalAlign: "middle",
                          color: "#fff",
                          fontSize: "30px",
                          backgroundColor: "#00acb3",
                          borderRadius: "5px",
                        }}
                      />
                      Requested by:
                    </span>
                    {selectedRequest.request_by.fullname}
                  </Typography>
                </CardActions>
              </Grid>
              <Grid item xs={6}>
                <CardActions sx={{ justifyContent: "flex-end", mt: 2 }}>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#00acb3",
                      color: "#fff",
                      "&:hover": {
                        backgroundColor: "#08b7bd",
                      },
                    }}
                  >
                    Accept
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{
                      ml: 2,
                      color: "#00acb3",
                      "&:hover": {
                        borderColor: "#08b7bd",
                      },
                    }}
                  >
                    Reject
                  </Button>
                </CardActions>
              </Grid>
            </Grid>
          </Card>
        </Modal>
      )}
    </Box>
  );
};

export default RequestExchangeList;

import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import {
  Button,
  Card,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  IconButton,
  Paper,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import ViewIcon from "@mui/icons-material/Visibility";
import { useNavigate } from "react-router";
import { useEffect, useRef, useState } from "react";
import { GetExchangeRequestResponse } from "../../interfaces/request/getExchangeRequestResponse";
import { USER_ID_KEY } from "../../constant";
import requestAPI from "../../services/request/requestAPI";
import dayjs from "dayjs";
import { green, red, orange } from "@mui/material/colors";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import { formatNumber } from "../../helpers/numberHelpers";
import CloseIcon from "@mui/icons-material/Close";
import Textarea from "@mui/joy/Textarea";
import { ToastContainer, toast } from "react-toastify";

var customParseFormat = require("dayjs/plugin/customParseFormat");
dayjs.extend(customParseFormat);
dayjs.locale("en");

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

const ExchangeRequestDataGrid = () => {
  const navigate = useNavigate();
  let timeoutRef = useRef<any>();
  const [requestList, setRequestList] = useState<GetExchangeRequestResponse[]>(
    []
  );
  const [requestDetail, setRequestDetail] =
    useState<GetExchangeRequestResponse>({
      create_date: new Date(),
      status: 0,
      request_id: "",
      response_by: {
        user_id: "",
        user_name: "",
        password: "",
        fullname: "",
        email: "",
        phone: "",
        dob: new Date(),
        gender: false,
        status: false,
        role: "",
      },
      request_by: {
        user_id: "",
        user_name: "",
        password: "",
        fullname: "",
        email: "",
        phone: "",
        dob: new Date(),
        gender: false,
        status: false,
        role: "",
      },
      timeshare_request_id: {
        timeshareId: "",
        timeshareName: "",
        description: "",
        status: false,
        price: 0,
        nights: 0,
        postBy: {
          user_id: "",
          user_name: "",
          password: "",
          fullname: "",
          email: "",
          phone: "",
          dob: new Date(),
          gender: false,
          status: false,
          role: "",
        },
        destinationModel: {
          destinationId: "",
          address: "",
          branch: "",
          city: "",
          country: "",
          description: "",
          desName: "",
        },
        dateStart: new Date(),
        dateEnd: new Date(),
        exchange: false,
        city: "",
        image_url: "",
      },
      timeshare_response_id: {
        timeshareId: "",
        timeshareName: "",
        description: "",
        status: false,
        price: 0,
        nights: 0,
        postBy: {
          user_id: "",
          user_name: "",
          password: "",
          fullname: "",
          email: "",
          phone: "",
          dob: new Date(),
          gender: false,
          status: false,
          role: "",
        },
        destinationModel: {
          destinationId: "",
          address: "",
          branch: "",
          city: "",
          country: "",
          description: "",
          desName: "",
        },
        dateStart: new Date(),
        dateEnd: new Date(),
        exchange: false,
        city: "",
        image_url: "",
      },
      message: "",
    });

  const [openConfirmAcceptRequest, setOpenConfirmAcceptRequest] =
    useState(false);
  const [openConfirmRejectRequest, setOpenConfirmRejectRequest] =
    useState(false);
  const userID = JSON.parse(localStorage.getItem(USER_ID_KEY)!);
  const [openViewRequestDetail, setOpenViewRequestDetail] = useState(false);

  const handleClickOpenViewRequestDetail = (
    requestDetail: GetExchangeRequestResponse
  ) => {
    setRequestDetail(requestDetail);
    setOpenViewRequestDetail(true);
  };

  const handleCloseViewRequestDetail = () => {
    setOpenViewRequestDetail(false);
  };

  // Accept
  const handleClickOpenConfirmAcceptDialog = () => {
    setOpenConfirmAcceptRequest(true);
  };

  const handleClickCloseConfirmAcceptDialog = () => {
    setOpenConfirmAcceptRequest(false);
  };

  // Reject
  const handleClickOpenConfirmRejectDialog = () => {
    setOpenConfirmRejectRequest(true);
  };

  const handleClickCloseConfirmRejectDialog = () => {
    setOpenConfirmRejectRequest(false);
  };

  const handleRequest = async (requestID: string, status: number) => {
    try {
      const response: any = await requestAPI.handleRequest(requestID, status);
      if (response && response === "Exchange timeshare successfully") {
        setOpenConfirmRejectRequest(false);
        setOpenViewRequestDetail(false);
        toast.success("Exchange Timeshare Successfully!", {
          position: "top-center",
        });
        timeoutRef.current = setTimeout(() => {
          navigate(0);
        }, 1700);
        return;
      } else if (
        response &&
        response === "You have rejected to exchange timeshare"
      ) {
        setOpenConfirmRejectRequest(false);
        setOpenViewRequestDetail(false);
        toast.success("Reject Exchange Timeshare Successful!!", {
          position: "top-center",
        });
        timeoutRef.current = setTimeout(() => {
          navigate(0);
        }, 1700);
      } else {
        toast.error("Exchange Timeshare Failed!!", {
          position: "top-center",
        });
      }
    } catch (error) {
      console.log("Error at handleRequest()", error);
    }
  };

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
      renderCell: (param) => {
        return (
          <Typography>
            {dayjs(param.row.create_date).format("DD MMM YYYY").toString()}
          </Typography>
        );
      },
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
        if (param.row.status === 1) {
          return <Typography color={green[500]}>Accepted</Typography>;
        } else if (param.row.status === 2) {
          return <Typography color={red[500]}>Rejected</Typography>;
        } else if (param.row.status === 0) {
          return <Typography color={orange[500]}>Processing</Typography>;
        } else return <Typography>param.row.status</Typography>;
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
            <Tooltip title="View Request Detail">
              <IconButton
                sx={{ color: "#00acb3" }}
                onClick={() => {
                  handleClickOpenViewRequestDetail(param.row);
                }}
              >
                <ViewIcon />
              </IconButton>
            </Tooltip>
          </Stack>
        );
      },
    },
  ];

  useEffect(() => {
    const getRequestListByUserID = async (userID: string) => {
      const data: any = await requestAPI.getRequestByUserID(userID);
      if (data && data.length > 0) {
        setRequestList(data);
      }
    };

    const initUseEffect = async () => {
      if (userID) await getRequestListByUserID(userID);
    };
    initUseEffect();
  }, []);

  const titleStyle = {
    fontSize: "18px",
    fontWeight: "bold",
  };

  const textBodyStyle = {
    fontSize: "18px",
    color: "#00acb3",
  };

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
      <Dialog
        open={openViewRequestDetail}
        onClose={handleCloseViewRequestDetail}
        maxWidth="md"
      >
        <DialogTitle
          sx={{ color: "#00acb3", fontSize: "22px", fontWeight: 900 }}
          id="alert-dialog-title"
        >
          {"Request Detail"}
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleCloseViewRequestDetail}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <Divider sx={{ width: "100%" }} />
        <DialogContent>
          <Grid2
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            width={800}
          >
            <Grid2 xs={12} flexDirection={"row"} p={2}>
              <Grid2 style={{ display: "flex", alignItems: "center" }}>
                <Typography
                  style={{
                    fontWeight: "bold",
                    fontSize: "18px",
                  }}
                  variant="subtitle2"
                >
                  Code:
                </Typography>
                <Typography
                  style={{
                    fontWeight: "bolder",
                    fontSize: "18px",
                    color: "#00acb3",
                  }}
                  variant="subtitle2"
                  ml={1}
                >
                  RQ123456
                </Typography>
              </Grid2>
              <Card
                variant="outlined"
                sx={{ marginTop: "5px", backgroundColor: "#f6f8fa" }}
              >
                <Grid2 container p={2}>
                  <Typography width="100%" variant="overline" color={"#00acb3"}>
                    Information
                  </Typography>
                  <Grid2 xs={6} style={{ display: "flex" }}>
                    <Typography style={titleStyle}>Create Date: </Typography>
                    <Typography ml={1} style={textBodyStyle}>
                      {dayjs(requestDetail.create_date)
                        .format("DD MMM YYYY")
                        .toString()}
                    </Typography>
                  </Grid2>
                  <Grid2 xs={6} style={{ display: "flex" }}>
                    <Typography style={titleStyle}>Status: </Typography>
                    {requestDetail.status === 0 ? (
                      <Typography fontSize={18} ml={1} color={orange[500]}>
                        Processing
                      </Typography>
                    ) : requestDetail.status === 1 ? (
                      <Typography fontSize={18} ml={1} color={green[500]}>
                        Accepted
                      </Typography>
                    ) : requestDetail.status === 2 ? (
                      <Typography fontSize={18} ml={1} color={red[500]}>
                        Rejected
                      </Typography>
                    ) : (
                      requestDetail.status
                    )}
                  </Grid2>
                </Grid2>
                <Divider />
                <Grid2 container p={2}>
                  <Typography width="100%" variant="overline" color={"#00acb3"}>
                    Message
                  </Typography>
                  <Grid2 xs={12} style={{ display: "flex" }}>
                    <Textarea
                      sx={{ marginBottom: "15px", width: "100%" }}
                      color="primary"
                      disabled={false}
                      minRows={2}
                      size="lg"
                      variant="soft"
                      value={requestDetail.message}
                    />
                  </Grid2>
                </Grid2>
              </Card>
            </Grid2>
            <Grid2 xs={12} p={2} height="50px">
              <Divider sx={{ width: "100%" }} />
              <Typography width="100%" variant="overline" color={"#00acb3"}>
                Exchange Information
              </Typography>
            </Grid2>
            <Grid2 xs={12} height={300} p={2}>
              <Paper
                elevation={10}
                sx={{ width: "100%", height: "100%", padding: "10px" }}
              >
                <Typography
                  sx={{ color: "#00acb3", fontWeight: 500 }}
                  fontSize={16}
                  variant="overline"
                >
                  Your Timeshare - #R130305111695
                </Typography>
                <Grid2 container>
                  <Grid2 xs={4}>
                    <Card sx={{ height: "150px", width: "240px" }}>
                      <img
                        src={requestDetail.timeshare_response_id.image_url}
                        style={{ width: "100%", height: "100%" }}
                      />
                    </Card>
                    <Typography mt={1.5}>
                      <strong>Owner: </strong>{" "}
                      <span style={{ color: "#00acb3", fontWeight: 500 }}>
                        {requestDetail.timeshare_response_id.postBy.fullname}
                      </span>
                    </Typography>
                  </Grid2>
                  <Grid2 xs={6}>
                    <Typography variant="h5" fontWeight={900}>
                      {requestDetail.timeshare_response_id.timeshareName}
                    </Typography>
                    <Typography mt={0.5} variant="subtitle2" fontWeight={300}>
                      {requestDetail.timeshare_response_id.city}
                    </Typography>
                    <Typography mt={1} color="#00acb3">
                      {dayjs(requestDetail.timeshare_response_id.dateStart)
                        .format("DD MMM YYYY")
                        .toString()}{" "}
                      -{" "}
                      {dayjs(requestDetail.timeshare_response_id.dateEnd)
                        .format("DD MMM YYYY")
                        .toString()}
                    </Typography>
                    <Typography mt={0.5} fontWeight={500}>
                      {requestDetail.timeshare_response_id.nights} nights
                    </Typography>
                    <Typography mt={0.5} fontWeight={500}>
                      {formatNumber(requestDetail.timeshare_response_id.price)}{" "}
                      VNĐ
                    </Typography>
                  </Grid2>
                </Grid2>
                <Grid2 container justifyContent="flex-end">
                  <Grid2>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => {
                        navigate(
                          `/member/view_timeshare_detail/${requestDetail.timeshare_response_id.timeshareId}`
                        );
                      }}
                      sx={{
                        background: "#00acb3",
                        "&:hover": {
                          backgroundColor: "#08b7bd",
                        },
                      }}
                    >
                      View Detail
                    </Button>
                  </Grid2>
                </Grid2>
              </Paper>
            </Grid2>
            <Grid2
              sx={{ position: "relative", margin: "15px 0", padding: "0 18px" }}
              xs={12}
            >
              <SwapVertIcon
                sx={{
                  position: "absolute",
                  zIndex: 2,
                  top: 0,
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "50px",
                  height: "50px",
                  color: "#00acb3",
                }}
              />
              <Divider sx={{ width: "100%", zIndex: 1 }} />
            </Grid2>
            <Grid2 xs={12} height={300} p={2}>
              <Paper
                elevation={10}
                sx={{ width: "100%", height: "100%", padding: "10px" }}
              >
                <Typography
                  sx={{ color: "#00acb3", fontWeight: 500 }}
                  fontSize={16}
                  variant="overline"
                >
                  Request's Timeshare - #R130305111688
                </Typography>
                <Grid2 container>
                  <Grid2 xs={4}>
                    <Card sx={{ height: "150px", width: "240px" }}>
                      <img
                        src={requestDetail.timeshare_request_id.image_url}
                        style={{ width: "100%", height: "100%" }}
                      />
                    </Card>
                    <Typography mt={1.5}>
                      <strong>Owner: </strong>{" "}
                      <span style={{ color: "#00acb3", fontWeight: 500 }}>
                        {requestDetail.timeshare_request_id.postBy.fullname}
                      </span>
                    </Typography>
                  </Grid2>
                  <Grid2 xs={6}>
                    <Typography variant="h5" fontWeight={900}>
                      {requestDetail.timeshare_request_id.timeshareName}
                    </Typography>
                    <Typography mt={0.5} variant="subtitle2" fontWeight={300}>
                      {requestDetail.timeshare_request_id.city}
                    </Typography>
                    <Typography mt={1} color="#00acb3">
                      {dayjs(requestDetail.timeshare_request_id.dateStart)
                        .format("DD MMM YYYY")
                        .toString()}{" "}
                      -{" "}
                      {dayjs(requestDetail.timeshare_request_id.dateEnd)
                        .format("DD MMM YYYY")
                        .toString()}
                    </Typography>
                    <Typography mt={0.5} fontWeight={500}>
                      {requestDetail.timeshare_request_id.nights} nights
                    </Typography>
                    <Typography mt={0.5} fontWeight={500}>
                      {formatNumber(requestDetail.timeshare_request_id.price)}{" "}
                      VNĐ
                    </Typography>
                  </Grid2>
                </Grid2>
                <Grid2 container justifyContent="flex-end">
                  <Grid2>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => {
                        navigate(
                          `/member/view_timeshare_detail/${requestDetail.timeshare_request_id.timeshareId}`
                        );
                      }}
                      sx={{
                        background: "#00acb3",
                        "&:hover": {
                          backgroundColor: "#08b7bd",
                        },
                      }}
                    >
                      View Detail
                    </Button>
                  </Grid2>
                </Grid2>
              </Paper>
            </Grid2>
          </Grid2>
        </DialogContent>
        <DialogActions sx={{ backgroundColor: "#ecf0f1" }}>
          {requestDetail.status === 0 ? (
            <>
              {" "}
              <Button
                sx={{
                  background: "#00acb3",
                  "&:hover": {
                    backgroundColor: "#08b7bd",
                  },
                }}
                variant="contained"
                onClick={handleClickOpenConfirmAcceptDialog}
              >
                Accept
              </Button>
              <Button
                sx={{
                  background: "#00acb3",
                  "&:hover": {
                    backgroundColor: "#08b7bd",
                  },
                }}
                variant="contained"
                onClick={handleClickOpenConfirmRejectDialog}
                autoFocus
              >
                Reject
              </Button>
            </>
          ) : (
            <>
              <Button
                disabled
                sx={{
                  background: "#00acb3",
                  "&:hover": {
                    backgroundColor: "#08b7bd",
                  },
                }}
                variant="contained"
                onClick={handleClickOpenConfirmAcceptDialog}
              >
                Accept
              </Button>
              <Button
                disabled
                sx={{
                  background: "#00acb3",
                  "&:hover": {
                    backgroundColor: "#08b7bd",
                  },
                }}
                variant="contained"
                onClick={handleClickOpenConfirmRejectDialog}
                autoFocus
              >
                Reject
              </Button>
            </>
          )}

          <Button
            sx={{
              color: "#00acb3",
              borderColor: "#00acb3",
              "&:hover": {
                borderColor: "#08b7bd",
              },
            }}
            variant="outlined"
            onClick={handleCloseViewRequestDetail}
            autoFocus
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>

      {/* Accept */}
      <Dialog
        open={openConfirmAcceptRequest}
        onClose={handleClickCloseConfirmAcceptDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Confirm To Accept Exchange Request!"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Do you want to accept exchange this timeshare?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            sx={{
              my: 2,
              color: "#ffffff",
              backgroundColor: "#00acb3",
              display: "block",
              marginLeft: "10px",
              "&:hover": {
                backgroundColor: "#08b7bd",
              },
            }}
            variant="contained"
            onClick={() => {
              handleRequest(requestDetail.request_id, 1);
              handleClickCloseConfirmAcceptDialog();
            }}
            autoFocus
          >
            Yes
          </Button>
          <Button
            sx={{
              my: 2,
              color: "#00acb3",
              display: "block",
              marginLeft: "10px",
              "&:hover": {
                borderColor: "#08b7bd",
              },
            }}
            variant="outlined"
            onClick={handleClickCloseConfirmRejectDialog}
          >
            No
          </Button>
        </DialogActions>
      </Dialog>

      {/* Reject */}

      <Dialog
        open={openConfirmRejectRequest}
        onClose={handleClickCloseConfirmRejectDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Confirm To Reject Exchange Request!"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Do you want to reject exchange this timeshare?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            sx={{
              my: 2,
              color: "#ffffff",
              backgroundColor: "#00acb3",
              display: "block",
              marginLeft: "10px",
              "&:hover": {
                backgroundColor: "#08b7bd",
              },
            }}
            variant="contained"
            onClick={() => {
              handleClickCloseConfirmRejectDialog();
              handleRequest(requestDetail.request_id, 2);
            }}
          >
            Yes
          </Button>
          <Button
            sx={{
              my: 2,
              color: "#00acb3",
              display: "block",
              marginLeft: "10px",
              "&:hover": {
                borderColor: "#08b7bd",
              },
            }}
            variant="outlined"
            onClick={handleClickCloseConfirmRejectDialog}
          >
            No
          </Button>
        </DialogActions>
      </Dialog>

      <ToastContainer
        autoClose={2000}
        style={{ marginTop: "50px", width: "400px" }}
      />
    </Box>
  );
};

export default ExchangeRequestDataGrid;

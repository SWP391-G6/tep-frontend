import {
  Avatar,
  Box,
  Card,
  CardContent,
  Container,
  Typography,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { formatNumber } from "../../helpers/numberHelpers";
import { useTheme } from "@emotion/react";
import TotalIcon from "@mui/icons-material/Leaderboard";
import UnPaymentIcon from "@mui/icons-material/Payment";
import PaymentIcon from "@mui/icons-material/CreditScore";
import { blue, green, orange } from "@mui/material/colors";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useEffect, useState } from "react";
import adminAPI from "../../services/admin/adminAPI";
import { isEmpty } from "lodash";

const titleStyle = {
  fontSize: "1rem",
  fontWeight: "bolder",
};

const valueStyle = {
  fontSize: "1.5rem",
  fontWeight: "bolder",
};

const AdminDashboard = () => {
  const [accountList, setAccountList] = useState(0);
  const [timeshareList, setTimeshareList] = useState(0);
  const [totalBooking, setTotalBooking] = useState(0);
  const [totalTransaction, setTotalTransaction] = useState(0);

  useEffect(() => {
    const getTotalPriceOnMonth = async () => {
      const data: any = await adminAPI.getTotalPriceOnMonth();
      console.log("Data price: ", data)
      if (data) {
        setTotalBooking(data);
      }
    };

    const getTotalTransactionOnMonth = async () => {
      const data: any = await adminAPI.getTotalTransactionOnMonth();
      console.log("Data total: ", data)
      if (data) {
        setTotalTransaction(data);
      }
    };
    const getCreatedAccountOnMonth = async () => {
      const data: any = await adminAPI.getCreatedAccountOnMonth();
      if (data.length > 0) {
        setAccountList(data.length);
      }
    };
    const getCreatedTimeshareOnMonth = async () => {
      const data: any = await adminAPI.getCreatedTimeshareOnMonth();
      if (data.length > 0) {
        setTimeshareList(data.length);
      }
    };

    const initUseEffect = async () => {
      await Promise.all([
        getTotalPriceOnMonth(),
        getTotalTransactionOnMonth(),
        getCreatedAccountOnMonth(),
        getCreatedTimeshareOnMonth(),
      ]);
    };
    initUseEffect();
  }, []);
  return (
    <Container
      disableGutters
      style={{ paddingBottom: "55px", height: "650px" }}
    >
      <Typography
        align="center"
        sx={{
          fontSize: "2rem",
          fontWeight: "bold ",
          marginTop: "3rem",
          color: "#00acb3",
        }}
      >
        Dashboard
      </Typography>
      <Box sx={{ marginTop: "3rem" }}>
        <Grid2
          container
          spacing={2}
          width="100%"
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid2 xs={5.8}>
            <Card style={{ width: "90%" }}>
              <CardContent sx={{ display: "flex" }}>
                <Avatar
                  sx={{
                    marginTop: "auto",
                    marginBottom: "auto",
                    bgcolor: blue[500],
                    width: "50px",
                    height: "50px",
                  }}
                >
                  <TotalIcon />
                </Avatar>
                <Box ml={1}>
                  <Typography style={titleStyle}>
                    Timeshares created this month
                  </Typography>
                  <Typography style={valueStyle} color={blue[500]}>
                    {timeshareList} Timeshares
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid2>

          <Grid2 xs={5.8}>
            <Card style={{ width: "90%" }}>
              <CardContent sx={{ display: "flex" }}>
                <Avatar
                  sx={{
                    marginTop: "auto",
                    marginBottom: "auto",
                    bgcolor: green[500],
                    width: "50px",
                    height: "50px",
                  }}
                >
                  <AccountCircleIcon />
                </Avatar>
                <Box ml={1}>
                  <Typography style={titleStyle}>
                    Account created this month
                  </Typography>
                  <Typography style={valueStyle} color={green[500]}>
                    {accountList} Accounts
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid2>
        </Grid2>

        <Grid2
          container
          spacing={2}
          width="100%"
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          mt={5}
        >
          <Grid2 xs={5.8}>
            <Card style={{ width: "90%" }}>
              <CardContent sx={{ display: "flex" }}>
                <Avatar
                  sx={{
                    marginTop: "auto",
                    marginBottom: "auto",
                    bgcolor: "#00acb3",
                    width: "50px",
                    height: "50px",
                  }}
                >
                  <UnPaymentIcon />
                </Avatar>
                <Box ml={1}>
                  <Typography style={titleStyle}>
                    Total Booking Timeshare This Month
                  </Typography>
                  <Typography style={valueStyle} color={"#00acb3"}>
                    {formatNumber(totalBooking)}₫
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid2>

          <Grid2 xs={5.8}>
            <Card style={{ width: "90%" }}>
              <CardContent sx={{ display: "flex" }}>
                <Avatar
                  sx={{
                    marginTop: "auto",
                    marginBottom: "auto",
                    bgcolor: orange[500],
                    width: "50px",
                    height: "50px",
                  }}
                >
                  <PaymentIcon />
                </Avatar>
                <Box ml={1}>
                  <Typography style={titleStyle}>
                    Total Transaction History This Month
                  </Typography>
                  <Typography style={valueStyle} color={orange[500]}>
                    {formatNumber(totalTransaction)}₫
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid2>
        </Grid2>
      </Box>
    </Container>
  );
};

export default AdminDashboard;

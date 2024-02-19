import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { green, red } from "@mui/material/colors";
import { useEffect } from "react";
import vnpayAPI from "../../services/payment/vnpayAPI";
import { useNavigate } from "react-router";

const PaymentSummaryComponent = () => {
  const navigate = useNavigate();
  var d = new Date(2024, 2, 19);

  const handleCheckOut = async () => {
    try {
      const data: any = await vnpayAPI.checkout({
        adults: "1",
        children: "1",
        city: "1",
        country: "1",
        create_date: d,
        payment_status: 1,
        postal_code: "1",
        state: "1",
        status: 1,
        street: "1",
        telephone: "0979121340",
        total: 700000,
        fullname: "DoPhu",
        payment_method: "1",
        user_id: 1,
        timeshare_id: 1,
      });
      navigate(
        "https://sandbox.vnpayment.vn/paymentv2/Transaction/PaymentMethod.html?token=f1c0bac1e56e4c56a5a77145c1872a02"
      );
    } catch (error) {
      console.log("Error at Handle Checkout");
    }
  };

  return (
    <Box>
      <Grid2 container>
        <Grid2 xs={12}>
          <Typography
            variant="subtitle1"
            fontSize={22}
            fontWeight={900}
            color="#00acb3"
          >
            Payment Summary
          </Typography>
        </Grid2>
        <Grid2 xs={12} container>
          <Grid2 xs={6}>
            <Typography variant="subtitle1" fontWeight={900}>
              Rental Booking
            </Typography>
            <Typography variant="subtitle1" fontWeight={900}>
              Service Fee
            </Typography>
            <Typography variant="subtitle1" fontWeight={900}>
              TEP Membership
            </Typography>
          </Grid2>
          <Grid2 xs={6} textAlign="right">
            <Typography fontWeight={300}>700.000 ₫</Typography>
            <Typography fontWeight={300}>20.000 ₫</Typography>
            <Typography fontWeight={300} color={red[500]}>
              -20.000 ₫
            </Typography>
          </Grid2>
          <Divider sx={{ width: "100%", margin: "15px 0" }} />
        </Grid2>
        <Grid2 xs={12} container>
          <Grid2 xs={3}>
            <Typography fontSize={26} fontWeight={900}>
              Total
            </Typography>
          </Grid2>
          <Grid2 xs={9} textAlign="right">
            <Typography fontSize={26} fontWeight={300}>
              700.000 ₫
            </Typography>
            <Button
              variant="contained"
              sx={{ marginTop: "10px", width: "150px" }}
              onClick={handleCheckOut}
            >
              Check Out
            </Button>
            <Typography fontSize={14} mt={1} fontWeight={300}>
              Your card will be charged 700.000 ₫ once the owner accepts your
              booking request
            </Typography>
          </Grid2>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default PaymentSummaryComponent;

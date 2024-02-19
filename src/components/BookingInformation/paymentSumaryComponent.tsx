import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { green } from "@mui/material/colors";

const PaymentSumaryComponent = () => {
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
            <Typography fontWeight={300} color={green[500]}>
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

export default PaymentSumaryComponent;

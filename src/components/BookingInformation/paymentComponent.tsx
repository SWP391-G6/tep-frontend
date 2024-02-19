import { Box, Paper, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

const PaymentComponent = () => {
  return (
    <Box>
      <Grid2 container>
        <Grid2 xs={5}>
          <Typography
            variant="subtitle1"
            fontSize={22}
            fontWeight={900}
            color="#00acb3"
          >
            Payment
          </Typography>
          <Paper
            elevation={5}
            sx={{
              border: "1px solid",
              cursor: "pointer",
              width: "270px",
              height: "250px",
              marginTop: "10px",
            }}
          >
            <img
              src="https://i.ibb.co/KD5nzLV/VNPay-Logo.png"
              alt="Jade Hill Resort"
              width={270}
              height={250}
            />
          </Paper>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default PaymentComponent;

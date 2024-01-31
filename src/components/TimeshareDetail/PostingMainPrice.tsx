import { Box, Button, Container, Grid, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
import { redirect } from 'react-router-dom';


type Props = {};

const PostingMainPrice = (props: Props) => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        boxShadow: "2px 2px 2px 2px rgba(0, 0, 0, 0.2)",
        height: "510px",
        width: "427px",
      }}
    >
      <Container disableGutters sx={{ textAlign: "center", height: "410px" }}>
        <Typography variant="h4" sx={{ paddingTop: "40px" }}>
          <img
            src="https://cdn6.redweek.com/img/icons/icon.rental-self.svg?VFH2mcZBc6obiDgIQBmSaw"
            alt="mainprice"
            height={"39px"}
          />

          <strong>700.000₫ (100.000₫/night)</strong>
        </Typography>
        <div>
          <Typography variant="h5" sx={{ marginTop: "20px" }}>
            <strong>7-night stay</strong>
          </Typography>
          <Typography variant="h6">
            Check-in:
            <strong>Sat, Dec 14, 2024</strong>
          </Typography>
          <Typography variant="h6">
            Check-out:
            <strong>Sat, Dec 21, 2024</strong>
          </Typography>

          <Typography variant="h6">
            Cancellation policy:
            <strong>Strict ?</strong>
          </Typography>
        </div>

        <Button
          variant="contained"
          sx={{
            width: "90%",
            height: "70px",
            fontSize: "25px",
            marginTop: "20px",
          }}
          onClick={() => {
            navigate("https://sandbox.vnpayment.vn/paymentv2/Ncb/Transaction/Index.html?token=c8a9b0f39d6943c99cae8725ea560295");
          }}
        >
          REQUEST TO BOOK
        </Button>

        <Box marginTop={"9px"}>
          <img
            src="https://fininme.vn/wp-content/uploads/2022/11/logo-vi-vnpay.png"
            alt="postedby"
            height={"50"}
            width={"80"}
            style={{ borderRadius: "10px" }}
          />
        </Box>
      </Container>

      <Container
        sx={{
          boxShadow: "0px -1px 0px 0px rgba(0, 0, 0, 0.2)",
          width: "80%",
          marginTop: "-20px",
          paddingTop: "20px",
        }}
      >
        <Grid container alignItems={"center"}>
          <Grid item xs={3} textAlign={"center"}>
            <AccountCircleIcon style={{ fontSize: "50px" }} />
          </Grid>
          <Grid item xs={9}>
            <Typography variant="h6">Posted by Lorraine B.</Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default PostingMainPrice;

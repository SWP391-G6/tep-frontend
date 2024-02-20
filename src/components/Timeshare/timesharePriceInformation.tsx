import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";

const TimesharePriceInformation = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <Container disableGutters sx={{ textAlign: "center" }}>
        <Box
          display={"flex"}
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
        >
          <img
            src="https://cdn6.redweek.com/img/icons/icon.rental-self.svg?VFH2mcZBc6obiDgIQBmSaw"
            alt="Icon Rental"
            height={"30px"}
          />
          <Typography
            ml="10px"
            fontWeight={900}
            fontSize={18}
            lineHeight="30px"
          >
            700,000 VNĐ (100,000 VNĐ/night)
          </Typography>
        </Box>
        <div>
          <Typography variant="h6" sx={{ marginTop: "10px" }} fontWeight={700}>
            7-night stay
          </Typography>
          <Typography variant="h6">
            Check-in:
            <strong> Tue, Feb 20, 2024</strong>
          </Typography>
          <Typography variant="h6">
            Check-out:
            <strong> Mon, Feb 26, 2024</strong>
          </Typography>

          <Typography variant="h6">
            Cancellation policy:
            <strong> Strict</strong>
          </Typography>
        </div>
        <Box marginTop={"9px"}>
          <img
            src="https://fininme.vn/wp-content/uploads/2022/11/logo-vi-vnpay.png"
            alt="postedby"
            height={"45 "}
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
            <AccountCircleIcon style={{ fontSize: "40px", color: "#00acb3" }} />
          </Grid>
          <Grid item xs={9}>
            <Typography variant="h6" color="#00acb3">
              Posted by Lorraine B.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              onClick={() => {
                navigate("/booking_information");
              }}
              sx={{
                width: "100%",
                height: "50px",
                fontSize: "16px",
                marginTop: "20px",
                background: "#00acb3",
                "&:hover": {
                  backgroundColor: "#08b7bd",
                },
              }}
            >
              REQUEST TO BOOK
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="outlined"
              sx={{
                width: "100%",
                height: "50px",
                fontSize: "16px",
                marginTop: "20px",
                color: "#00acb3",
                "&:hover": {
                  borderColor: "#08b7bd",
                },
              }}
              onClick={() => {
                // navigate("/user/exchange_request");
              }}
            >
              Request to exchange
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default TimesharePriceInformation;
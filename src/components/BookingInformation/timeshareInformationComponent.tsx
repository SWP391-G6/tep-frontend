import { Box, Divider, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

const TimeshareInformationComponent = () => {
  const rightContent = {
    fontWeight: 900,
    fontSize: 18,
    color: "#00acb3",
  };

  const leftContent = {
    fontWeight: 400,
    fontSize: 18,
  };

  return (
    <Box>
      <Grid2 container>
        <img
          src="https://i.ibb.co/VpBzSSn/jadehillsapa.jpg"
          width="100%"
          height={220}
        />
        <Typography variant="h5" fontWeight="bolder" mt={1} color="#00acb3">
          Sapa Jade Hill Resort
        </Typography>
        <Grid2
          xs={12}
          container
          justifyContent="space-between"
          alignItems="center"
        >
          <>
            <Grid2 xs={6}>
              <Typography fontWeight={400} fontSize={20}>
                Sapa, Lao Cai
              </Typography>
            </Grid2>
            <Grid2 xs={6} sx={{ textAlign: "right" }}>
              <Typography fontWeight={300} fontSize={14}>
                #R20240201
              </Typography>
            </Grid2>
            <Divider sx={{ width: "100%", margin: "10px 0" }} />
          </>
          <>
            <Grid2 xs={3}>
              <Typography style={leftContent}>Size:</Typography>
            </Grid2>
            <Grid2 xs={9} sx={{ textAlign: "right" }}>
              <Typography style={rightContent}>
                3 Bedrooms / Sleeps 12
              </Typography>
            </Grid2>
          </>
          <>
            <Grid2 xs={3}>
              <Typography style={leftContent}>Stay:</Typography>
            </Grid2>
            <Grid2 xs={9} sx={{ textAlign: "right" }}>
              <Typography style={rightContent}>7-nights</Typography>
            </Grid2>
          </>
          <>
            <Grid2 xs={3}>
              <Typography style={leftContent}>Check-in:</Typography>
            </Grid2>
            <Grid2 xs={9} sx={{ textAlign: "right" }}>
              <Typography style={rightContent}>Tue, Feb 20, 2024</Typography>
            </Grid2>
          </>
          <>
            <Grid2 xs={3}>
              <Typography style={leftContent}>Check-out:</Typography>
            </Grid2>
            <Grid2 xs={9} sx={{ textAlign: "right" }}>
              <Typography style={rightContent}>Mon, Feb 26, 2024</Typography>
            </Grid2>
          </>
          <Divider sx={{ width: "100%", margin: "10px 0" }} />
          <>
            <Grid2 xs={7}>
              <Typography style={leftContent}>100.000 ₫ / night</Typography>
            </Grid2>
            <Grid2 xs={5} sx={{ textAlign: "right" }}>
              <Typography style={rightContent}>700.000 ₫</Typography>
            </Grid2>
          </>
          <>
            <Grid2 xs={7}>
              <Typography style={leftContent}>Service Fee</Typography>
            </Grid2>
            <Grid2 xs={5} sx={{ textAlign: "right" }}>
              <Typography style={rightContent}>20.000 ₫</Typography>
            </Grid2>
          </>
          <>
            <Grid2 xs={7}>
              <Typography style={leftContent}>Total</Typography>
            </Grid2>
            <Grid2 xs={5} sx={{ textAlign: "right" }}>
              <Typography style={rightContent}>700.000 ₫</Typography>
            </Grid2>
          </>
          <Divider sx={{ width: "100%", margin: "10px 0" }} />
        </Grid2>
        <Grid2 xs={12} container justifyContent="center" alignItems="center">
          <img
            src={require("../../assets/logo.png")}
            width="50px"
            height="50px"
            alt=""
          />
          <Typography ml={1} style={rightContent}>
            Manage By TEP
          </Typography>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default TimeshareInformationComponent;

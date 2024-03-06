import { Box, Grid } from "@mui/material";

const LoginBanner = () => {
  const boxStyle = {
    width: 450,
    height: 500,
    margin: "0 auto",
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      direction="column"
      style={{
        height: 800,
        width: "50%",
        backgroundColor: "#00acb3",
        paddingTop: "50px",
      }}
    >
      <Box style={boxStyle}>
        <Grid
          container
          justifyContent="center"
          alignItems="centers"
          style={{ height: 250, width: "100%" }}
        >
          <img
            src={"https://i.ibb.co/995RZ07/logo.png"}
            width="250px"
            height="250px"
            alt="logo"
          />
        </Grid>
        <Grid
          style={{
            height: 250,
            width: "100%",
          }}
        >
          <Grid container justifyContent="center">
            <h2 style={{ color: "#2d2d44", marginTop: 10 }}>
              Timeshare Exchange Platform
            </h2>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};

export default LoginBanner;

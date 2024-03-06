import { Box, Grid } from "@mui/material";

const LoginBanner = () => {
  const boxStyle = {
    width: 450,
    height: 600,
    margin: "0 auto",
  };

  return (
    <Grid
    container
    direction="row"
    justifyContent="center"
    alignItems="center"
      style={{
        height: 600,
        width: "50%",
        backgroundColor: "#00acb3",
        paddingTop: "100px",
      }}
    >
      <Grid style={boxStyle}>
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
      </Grid>
    </Grid>
  );
};

export default LoginBanner;

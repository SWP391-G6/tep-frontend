import { Box, Grid, Paper } from "@mui/material";
import LoginBanner from "../../components/LoginComponent/loginBanner";
import LoginForm from "../../components/LoginComponent/loginForm";

const paperStyle = {
  width: 1100,
  height: 800,
  margin: "0 auto",
};

const LoginPage = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      direction="column"
      style={{ minHeight: "100vh" }}
    >
      <Paper elevation={20} style={paperStyle}>
        <Box display="flex" flexDirection="row">
            <LoginBanner />
            <LoginForm />
        </Box>
      </Paper>
    </Grid>
  );
};

export default LoginPage;

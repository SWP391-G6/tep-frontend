import { Box, Container, Grid, Paper } from "@mui/material";
import RegisterForm from "./RegisterForm";
import BackButton from "../../components/Button/backButton";

const paperStyle = {
  width: 700,
  height: "100%",
  margin: "0 auto",
};

const containerBg = {
  minHeight: "100vh",
  // Thêm background image vào paper
  backgroundImage: `url(https://cdn.vietnambiz.vn/2019/11/2/shutterstock375559645-15726764025911097232735.jpg)`,
  // Đảm bảo hình ảnh nền kích thước bao phủ hoàn toàn
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const RegisterPage = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      direction="column"
      style={containerBg}
      padding={"25px 0"}
    >
      <Paper elevation={20} style={paperStyle}>
        <Box display="flex" flexDirection="column">
          <BackButton />
          <RegisterForm />
        </Box>
      </Paper>
    </Grid>
  );
};

export default RegisterPage;

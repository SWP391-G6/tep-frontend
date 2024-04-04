import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import { Box } from "@mui/material";
import { Outlet, useNavigate } from "react-router";
import { USER_ROLE_KEY, USER_TOKEN_KEY } from "../../constant";

const HomePage = () => {
  return (
    <Box sx={{ backgroundColor: "#f6f8fa" }}>
      <Header />
      <Outlet />
      <Footer />
    </Box>
  );
};

export default HomePage;

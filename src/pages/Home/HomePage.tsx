import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import { Box } from "@mui/material";
import { Outlet } from "react-router";

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

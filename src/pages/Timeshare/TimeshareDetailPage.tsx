import { Box, Container } from "@mui/material";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import { Outlet } from "react-router";

const TimeshareDetailPage = () => {
  return (
    <Box bgcolor="#f6f8fa">
      <Header />
      <Outlet />
      <Footer />
    </Box>
  );
};

export default TimeshareDetailPage;

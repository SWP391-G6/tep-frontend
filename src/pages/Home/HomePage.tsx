import { Box } from "@mui/material";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";

const HomePage = () => {
  return (
    <Box>
      <Header />
      <Box component="main" sx={{ marginTop: "70px" }}>
        lorem2000
      </Box>
      <Footer />
    </Box>
  );
};

export default HomePage;

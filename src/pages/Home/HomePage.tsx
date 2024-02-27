import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Paper,
  TextField,
  Typography,
  Alert,
} from "@mui/material";
import { useEffect, useState } from "react";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import SearchIcon from "@mui/icons-material/Search";
import Carousel from "../../components/Carousel/carousel";
import TopDestinationCarousel from "../../components/Carousel/topDestinationCarousel";
import ShowTimeshareGrid from "../../components/Grids/showTimeshareGrid";
import "react-toastify/dist/ReactToastify.css";
import {  ToastContainer, toast } from 'react-toastify';
import "../Home/HomePage.css";

const HomePage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showWelcomeAlert, setShowWelcomeAlert] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
      const showWelcomeAlertValue = localStorage.getItem("showWelcomeAlert");
      if (showWelcomeAlertValue !== "false") {
        localStorage.setItem("showWelcomeAlert", "false");
        setTimeout(() => {
          toast.success("Welcome to our website !", {
            position: "top-center",
            autoClose: 3000,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          className: 'custom-toast',

          });
        }, 0);
      }
    }
  }, []);
  
  const handleAlertClose = () => {
    setShowWelcomeAlert(false);
    localStorage.setItem("showWelcomeAlert", "false");
  };

  

  return (
    <Box sx={{ backgroundColor: "#f6f8fa" }}>
      <Header />
      <Box component="main" sx={{ height: "100%" }}>
        <Carousel />
        <Container disableGutters>
          <Box
            mt={4}
            sx={{
              textAlign: "center",
            }}
          >
            <Typography variant="h2" fontWeight={900}>
              Where do you want to go?
            </Typography>
            <TextField
              placeholder="Search by location or timeshare"
              variant="outlined"
              fullWidth
              InputProps={{
                endAdornment: (
                  <>
                    <Divider orientation="vertical" flexItem variant="middle" />
                    <Box ml={1}>
                      <Button
                        type="submit"
                        aria-label="search"
                        sx={{ color: "#00acb3" }}
                      >
                        <SearchIcon />
                      </Button>
                    </Box>
                  </>
                ),
              }}
              sx={{ marginTop: "20px" }}
            />
          </Box>

          <Box mt={4} sx={{ position: "relative", height: "100%" }}>
            <Typography variant="h5" fontWeight={700}>
              Vietnamese's Favorite Destinations
            </Typography>
            <Paper
              sx={{ height: "100%", padding: "20px", marginTop: "10px" }}
              elevation={3}
            >
              <TopDestinationCarousel />
            </Paper>
          </Box>
          <Box mt={4} mb={3}>
            <Typography variant="h5" fontWeight={700}>
              Recommended Timeshare
            </Typography>
            <Paper
              sx={{ height: "100%", padding: "10px 20px", marginTop: "10px" }}
              elevation={3}
            >
              <ShowTimeshareGrid />
            </Paper>
          </Box>
        </Container>
      </Box>
      <ToastContainer />
      <Footer />
    </Box>
  );
};

export default HomePage;
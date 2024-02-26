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

const HomePage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showWelcomeAlert, setShowWelcomeAlert] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
      const showWelcomeAlertValue = localStorage.getItem("showWelcomeAlert");
      if (showWelcomeAlertValue !== "false") {
        setShowWelcomeAlert(true);
        localStorage.setItem("showWelcomeAlert", "false");
        setTimeout(() => {
          setShowWelcomeAlert(false);
        }, 3000); 
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
      <Footer />

      {showWelcomeAlert && (
        <Alert
          variant="filled"
          
          onClose={handleAlertClose}
          sx={{
            position: "fixed",
            zIndex: 3,
            top:"20%",
            left: "50%",
            transform: "translateX(-50%)",
            maxWidth: "400px",
          }}
        >
          Welcome to our website !
        </Alert>
      )}
    </Box>
  );
};

export default HomePage;
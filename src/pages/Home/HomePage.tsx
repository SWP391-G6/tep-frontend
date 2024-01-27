import {
  Box,
  Button,
  Container,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import SearchIcon from "@mui/icons-material/Search";
import Carousel from "../../components/Carousel/carousel";

const HomePage = () => {
  return (
    <Box>
      <Header />
      <Box component="main" sx={{ marginTop: "70px", height: "500px" }}>
        <Container disableGutters>
          <Carousel />
          <Box
            mt={15}
            sx={{
              textAlign: "center",
            }}
          >
            <Typography variant="h3" fontWeight={900}>
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

          <Box mt={4}>
            <Typography variant="h5" fontWeight={700}>
              Vietnamese's Favorite Destinations
            </Typography>
          </Box>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
};

export default HomePage;

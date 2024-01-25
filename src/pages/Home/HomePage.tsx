import { Box, Container, TextField } from "@mui/material";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const HomePage = () => {
  return (
    <Box>
      <Header />
      <Box component="main" sx={{ marginTop: "70px", height: "500px" }}>
        <Container disableGutters>
          <TextField
            label="Search"
            variant="outlined"
            fullWidth
            InputProps={{
              startAdornment: (
                <IconButton type="submit" aria-label="search">
                  <SearchIcon />
                </IconButton>
              ),
            }}
          />
        </Container>
      </Box>
      <Footer />
    </Box>
  );
};

export default HomePage;

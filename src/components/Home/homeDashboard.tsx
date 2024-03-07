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
import Carousel from "../Carousel/carousel";
import SearchIcon from "@mui/icons-material/Search";
import TopDestinationCarousel from "../Carousel/topDestinationCarousel";
import ShowTimeshareGrid from "../Grids/showTimeshareGrid";


type Props = {}

const HomeDashboard = (props: Props) => {
  return (
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
  )
}

export default HomeDashboard
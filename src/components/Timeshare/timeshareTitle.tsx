import { Box, Paper, Typography } from "@mui/material";
import LocalHotelIcon from "@mui/icons-material/LocalHotel";
import ApartmentIcon from "@mui/icons-material/Apartment";
import BathtubIcon from "@mui/icons-material/Bathtub";
import RamenDiningIcon from "@mui/icons-material/RamenDining";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  tiltedImage: {
    transform: "rotate(-3deg)",
  },
});

const TimeshareTitle = () => {
  const classes = useStyles();
  return (
    <Box sx={{ height: "500px" }}>
      <Grid2 container gap={3}>
        <Grid2 xs={3.7}>
          <Paper
            elevation={5}
            sx={{ padding: "10px" }}
            className={classes.tiltedImage}
          >
            <img
              src="https://i.ibb.co/VpBzSSn/jadehillsapa.jpg"
              alt="Jade Hill Resort"
              width={220}
              height={150}
            />
          </Paper>
        </Grid2>
        <Grid2 xs={6} mt={2}>
          <Typography fontSize={20} fontWeight={500} lineHeight={2}>Rental R20240201</Typography>
          <Typography variant="h4" fontWeight={900} color="#00acb3" lineHeight={1}>Sapa Jade Hill Resort</Typography>
          <Typography fontSize={18} fontWeight={500} lineHeight={2}>Sapa, Lao Cai</Typography>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default TimeshareTitle;

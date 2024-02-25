import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import BathtubIcon from "@mui/icons-material/Bathtub";
import KitchenIcon from "@mui/icons-material/Kitchen";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { makeStyles } from "@mui/styles";
import BedIcon from "@mui/icons-material/Bed";
import ApartmentIcon from "@mui/icons-material/Apartment";

const useStyles = makeStyles({
  tiltedImage: {
    transform: "rotate(-3deg)",
  },
});

const TimeshareTitle = () => {
  const classes = useStyles();
  return (
    <Box>
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
              width="100%"
              height={150}
            />
          </Paper>
        </Grid2>
        <Grid2 xs={6} mt={2}>
          <Typography fontSize={20} fontWeight={500} lineHeight={2}>
            Rental R20240201
          </Typography>
          <Typography
            variant="h4"
            fontWeight={900}
            color="#00acb3"
            lineHeight={1}
          >
            Sapa Jade Hill Resort
          </Typography>
          <Typography fontSize={18} fontWeight={500} lineHeight={2}>
            Sapa, Lao Cai
          </Typography>
        </Grid2>
        <Grid2 xs={12} mt={2} sx={{ height: "200px", padding: "10px" }}>
          <Box display="flex" flexDirection="row" gap={10}>
            <Box display="flex" width="300px">
              <Avatar sx={{ backgroundColor: "#00acb3" }}>
                <BedIcon />
              </Avatar>
              <List sx={{ marginLeft: "20px", gap: "10px" }} disablePadding>
                <ListItem disablePadding>
                  <ListItemText
                    primary={
                      <Typography variant="subtitle1" fontWeight={500}>
                        2 Bedrooms
                      </Typography>
                    }
                  />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemText
                    primary={
                      <Typography variant="subtitle1" fontWeight={500}>
                        Sleeps 8
                      </Typography>
                    }
                  />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemText
                    primary={
                      <Typography variant="subtitle1" fontWeight={500}>
                        Beds1 King, 2 Queen, 1 Sofa bed
                      </Typography>
                    }
                  />
                </ListItem>
              </List>
            </Box>
            <Box display="flex" width="300px">
              <Avatar sx={{ backgroundColor: "#00acb3" }}>
                <ApartmentIcon />
              </Avatar>
              <List sx={{ marginLeft: "20px", gap: "10px" }} disablePadding>
                <ListItem disablePadding>
                  <ListItemText
                    primary={
                      <Typography variant="subtitle1" fontWeight={500}>
                        Building/Unit: Unassigned
                      </Typography>
                    }
                  />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemText
                    primary={
                      <Typography variant="subtitle1" fontWeight={500}>
                        View: Varies
                      </Typography>
                    }
                  />
                </ListItem>
              </List>
            </Box>
          </Box>
          <Box display="flex" flexDirection="row" gap={10} mt={4}>
            <Box display="flex" width="300px">
              <Avatar sx={{ backgroundColor: "#00acb3" }}>
                <BathtubIcon />
              </Avatar>
              <List sx={{ marginLeft: "20px", gap: "10px" }} disablePadding>
                <ListItem disablePadding>
                  <ListItemText
                    primary={
                      <Typography variant="subtitle1" fontWeight={500}>
                        2 Bathrooms
                      </Typography>
                    }
                  />
                </ListItem>
              </List>
            </Box>
            <Box display="flex">
              <Avatar sx={{ backgroundColor: "#00acb3" }}>
                <KitchenIcon />
              </Avatar>
              <List sx={{ marginLeft: "20px", gap: "10px" }} disablePadding>
                <ListItem disablePadding>
                  <ListItemText
                    primary={
                      <Typography variant="subtitle1" fontWeight={500}>
                        Full kitchen
                      </Typography>
                    }
                  />
                </ListItem>
              </List>
            </Box>
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default TimeshareTitle;

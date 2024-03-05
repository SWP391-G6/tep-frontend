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
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import timeshareAPI from "../../services/timeshare/timeshareAPI";

const useStyles = makeStyles({
  tiltedImage: {
    transform: "rotate(-3deg)",
  },
});

const TimeshareTitle = () => {
  const classes = useStyles();

  const [timeshare, setTimeshare] = useState<Record<string, any>>({});
  const { timeshareId } = useParams();
  console.log(timeshareId)
  useEffect(() => {
    const fetchTimeshareDetail = async () => {
      try {
        if (timeshareId) {
          const response = await timeshareAPI.getTimeshareById(timeshareId);
          console.log(response, 'okkk');
          setTimeshare(response);
        }
      } catch (error) {
        console.error("Error fetching timeshare:", error);
      }
    };

    const initUseEffect = async () => {
      await fetchTimeshareDetail();
    };
    initUseEffect();
  }, [timeshareId]);


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
          <Typography
            variant="h4"
            fontWeight={900}
            fontSize={50}
            color="#00acb3"
            lineHeight={1}
          >
           {timeshare.name}
          </Typography>
          <Typography fontSize={25} fontWeight={500} lineHeight={2} color={'gray'}>
            {timeshare.city}
          </Typography>
        </Grid2>
        <Grid2 xs={12} mt={4} sx={{ height: "200px", padding: "10px" }}>
          <Box display="flex" flexDirection="row" gap={15}>
            <Box display="flex" width="300px">
              <Avatar sx={{ backgroundColor: "#00acb3" }}>
                <BedIcon />
              </Avatar>
              <List sx={{ marginLeft: "20px", gap: "10px" }} disablePadding>
                <ListItem disablePadding>
                {timeshare?.room && (
                  <ListItemText
                    primary={
                      <Typography variant="subtitle1" fontWeight={500}>
                        {timeshare.room.bed} Bedrooms
                      </Typography>
                    }
                  />
                )}
                </ListItem>
                <ListItem disablePadding>
                {timeshare?.room && (
                  <ListItemText
                    primary={
                      <Typography variant="subtitle1" fontWeight={500}>
                        Sleeps {timeshare?.room.sleeps}
                      </Typography>
                    }
                  />
                )}
                </ListItem>
                
              </List>
            </Box>
            
            <Box display="flex" width="300px">
              <Avatar sx={{ backgroundColor: "#00acb3" }}>
                <ApartmentIcon />
              </Avatar>
              <List sx={{ marginLeft: "20px", gap: "10px" }} disablePadding>
                
              {timeshare?.room && (
                  <ListItemText
                    primary={
                      <Typography variant="subtitle1" fontWeight={500}>
                        Room: {timeshare?.room.name}
                      </Typography>
                    }
                  />
                )}

                <ListItem disablePadding>
                {timeshare?.room && (
                  <ListItemText
                    primary={
                      <Typography variant="subtitle1" fontWeight={500}>
                        View: {timeshare?.room.roomview}
                      </Typography>
                    }
                  />
                )}
                </ListItem>
              </List>
            </Box>
          </Box>
          <Box display="flex" flexDirection="row" gap={15} mt={4}>
            <Box display="flex" width="300px">
              <Avatar sx={{ backgroundColor: "#00acb3" }}>
                <BathtubIcon />
              </Avatar>
              <List sx={{ marginLeft: "20px", gap: "10px" }} disablePadding>
                <ListItem disablePadding>
                {timeshare?.room && (
                  <ListItemText
                    primary={
                      <Typography variant="subtitle1" fontWeight={500}>
                        {timeshare?.room.bath} Bathrooms
                      </Typography>
                    }
                  />
                )}
                </ListItem>
              </List>
            </Box>
            <Box display="flex">
              <Avatar sx={{ backgroundColor: "#00acb3" }}>
                <KitchenIcon />
              </Avatar>
              <List sx={{ marginLeft: "20px", gap: "10px" }} disablePadding>
                <ListItem disablePadding>
                {timeshare?.room && (
                  <ListItemText
                    primary={
                      <Typography variant="subtitle1" fontWeight={500}>
                        {timeshare.room.kitchen} 
                      </Typography>
                    }
                  />
                )}
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



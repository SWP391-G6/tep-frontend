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
import { TimeshareDetailResponse } from "../../interfaces/timeshare/timeshareDetailResponse";
import { RoomTypeResponse } from "../../interfaces/roomtype/roomTypeResponse";

const useStyles = makeStyles({
  tiltedImage: {
    transform: "rotate(-3deg)",
  },
});

type Props = { timeshare: TimeshareDetailResponse; roomType: RoomTypeResponse };

const TimeshareTitle = (props: Props) => {
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
              src={props.timeshare.image_url}
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
            fontSize={30}
            color="#00acb3"
            lineHeight={1}
          >
            {props.timeshare.timeshareName}
          </Typography>
          <Typography
            fontSize={20}
            fontWeight={500}
            lineHeight={2}
            color={"gray"}
          >
            {props.timeshare.city}
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
                  <ListItemText
                    primary={
                      <Typography variant="subtitle1" fontWeight={500}>
                        Bedrooms{" "}
                        <span style={{ color: "#00acb3" }}>
                          {props.roomType.bed}
                        </span>
                      </Typography>
                    }
                  />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemText
                    primary={
                      <Typography variant="subtitle1" fontWeight={500}>
                        Sleeps{" "}
                        <span style={{ color: "#00acb3" }}>
                          {props.roomType.sleeps}
                        </span>
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
                <ListItemText
                  primary={
                    <Typography variant="subtitle1" fontWeight={500}>
                      Room:{" "}
                      <span style={{ color: "#00acb3" }}>
                        {props.roomType.name}
                      </span>
                    </Typography>
                  }
                />

                <ListItem disablePadding>
                  <ListItemText
                    primary={
                      <Typography variant="subtitle1" fontWeight={500}>
                        View:{" "}
                        <span style={{ color: "#00acb3" }}>
                          {props.roomType.roomview}
                        </span>
                      </Typography>
                    }
                  />
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
                  <ListItemText
                    primary={
                      <Typography variant="subtitle1" fontWeight={500}>
                        Bathrooms{" "}
                        <span style={{ color: "#00acb3" }}>
                          {props.roomType.bath}
                        </span>
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
                        Kitchen{" "}
                        <span style={{ color: "#00acb3" }}>
                          {props.roomType.kitchen}
                        </span>
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

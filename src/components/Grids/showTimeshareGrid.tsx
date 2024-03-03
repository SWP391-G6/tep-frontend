import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import { makeStyles } from "@mui/styles";
import { useEffect, useState } from "react";
import { TimeshareResponse } from "../../interfaces/timeshare/timeshareResponse";
import timeshareAPI from "../../services/timeshare/timeshareAPI";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
require("dayjs/locale/vi");
var customParseFormat = require("dayjs/plugin/customParseFormat");
dayjs.extend(customParseFormat);
dayjs.locale("vi");

const useStyles: any = makeStyles({
  hoverContainer: {
    cursor: "pointer",
    overflow: "hidden",
    position: "relative",

    "&::before": {
      content: '""',
      position: "absolute",
      bottom: 0,
      left: "-100%",
      width: "100%",
      height: "5px",
      backgroundColor: "#00acb3",
      transition: "transform 0.5s ease-in-out",
      zIndex: 1,
      // borderRadius: "8px",
    },
    "&:hover::before": {
      transform: "translateX(100%)",
    },
  },
});

const ShowTimeshareGrid = () => {
  const [timeshareList, setTimeShareList] = useState<TimeshareResponse[]>([]);
  const classes = useStyles();
  const navigate = useNavigate();

  useEffect(() => {
    const getTimeshareList = async () => {
      const data: any = await timeshareAPI.getAllTimeshare();
      console.log("Timeshare List", data);
      if (data && data.length > 0) {
        setTimeShareList(data);
      }
    };

    const initUseEffect = async () => {
      await getTimeshareList();
    };
    initUseEffect();
  }, []);

  return (
    <Grid2 container direction="row" justifyContent="space-between" rowGap={2}>
      {timeshareList.map((timeshare) => {
        return (
          <Grid2
            onClick={() => {
              window.location.href =`/view_timeshare_detail/${timeshare.timeshare_id}`;
            }}
            key={timeshare.timeshare_id}
            xs={3.75}
            height={350}
          >
            <Card className={classes.hoverContainer} elevation={3}>
              <CardMedia
                component="img"
                image={`${timeshare.image_url}`}
                width="320px"
                height="200px"
                alt="Sapa Jade Hill Resort"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  noWrap
                  component="div"
                ></Typography>
                <Stack
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                  spacing={1}
                >
                  <LocationOnIcon sx={{ color: "#00acb3" }} />
                  <Typography fontSize="16px" fontWeight={500}>
                    {timeshare.name}
                  </Typography>
                </Stack>
                <List>
                  <ListItem disablePadding>
                    <ListItemAvatar>
                      <Avatar sx={{ backgroundColor: "#00acb3" }}>
                        <VpnKeyIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <Typography fontWeight={700}>
                          ${timeshare.price} ( $
                          {timeshare.price / timeshare.nights}/night)
                        </Typography>
                      }
                      secondary={
                        <Box>
                          {/* <Typography color="#83b3b5" fontWeight={500}>
                            {timeshare.date_start} - {timeshare.date_end}
                          </Typography> */}
                          <Typography color="#83b3b5" fontWeight={500}>
                            {timeshare.date_start.toString()} -{" "}
                            {timeshare.date_end.toString()}
                          </Typography>
                        </Box>
                      }
                    />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid2>
        );
      })}
      <Grid2
        onClick={() => {
          navigate(`/view_timeshare_detail/1`);
        }}
        xs={3.75}
        height={350}
      >
        <Card className={classes.hoverContainer} elevation={3}>
          <CardMedia
            component="img"
            image={"https://i.ibb.co/VpBzSSn/jadehillsapa.jpg"}
            width="320px"
            height="200px"
            alt="Sapa Jade Hill Resort"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              noWrap
              component="div"
            ></Typography>
            <Stack
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              spacing={1}
            >
              <LocationOnIcon sx={{ color: "#00acb3" }} />
              <Typography fontSize="16px" fontWeight={500}>
                Lao Cai - Sapa
              </Typography>
            </Stack>
            <List>
              <ListItem disablePadding>
                <ListItemAvatar>
                  <Avatar sx={{ backgroundColor: "#00acb3" }}>
                    <VpnKeyIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography fontWeight={700}>
                      700.000₫ (100.000₫/night)
                    </Typography>
                  }
                  secondary={
                    <Box>
                      <Typography color="#83b3b5" fontWeight={500}>
                        20/02/2024 - 26/02/2024
                      </Typography>
                    </Box>
                  }
                />
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </Grid2>
    </Grid2>
  );
};

export default ShowTimeshareGrid;

import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardMedia,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import { useEffect, useState } from "react";
import { AllTimeshare } from "../../interfaces/timeshare/timeshareResponse";
import timeshareAPI from "../../services/timeshare/timeshareAPI";
import { useNavigate } from "react-router-dom";
import { formatNumber } from "../../helpers/numberHelpers";
import dayjs from "dayjs";
import { TimeshareResponse } from "../../interfaces/timeshare/timeshare";
import bookingHistoryAPI from "../../services/bookinghistory/bookingHistoryAPI";
require("dayjs/locale/vi");
var customParseFormat = require("dayjs/plugin/customParseFormat");
dayjs.extend(customParseFormat);
dayjs.locale("en");

const useStyles = makeStyles((theme: Theme) => ({
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
    },
    "&:hover::before": {
      transform: "translateX(100%)",
    },
  },
  newItem: {
    position: "relative",
  },
  newTag: {
    position: "absolute",
    top: "8px",
    left: "8px",
    backgroundColor: "#00acb3",
    fontWeight: 900,
    color: "#fff",
    padding: "4px 14px",
    borderRadius: "4px",
  },
}));

const ShowTimeshareGrid = () => {
  const [timeshareList, setTimeShareList] = useState<TimeshareResponse[]>([]);
  const [listTemp, setListTemp] = useState<AllTimeshare[]>([]);
  const classes = useStyles();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const timeshareData: any = await timeshareAPI.getAllTimeshare();
        if (timeshareData && timeshareData.length > 0) {
          const promises = timeshareData.map(async (item: any) => {
            const transactionResponse: any =
              await bookingHistoryAPI.getBookingHistoryListByUserID(
                item.postBy.user_id
              );
            if (transactionResponse.length > 0) {
              return { ...item, isNew: true };
            } else {
              return { ...item, isNew: false };
            }
          });
          const updatedTimeshareList = await Promise.all(promises);
          updatedTimeshareList.sort((a, b) =>
            a.isNew === b.isNew ? 0 : a.isNew ? -1 : 1
          );
          setListTemp(updatedTimeshareList);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  console.log("Length: ", listTemp);

  return (
    <Grid2 container direction="row" justifyContent="space-between" rowGap={2}>
      {listTemp.map((timeshare, index) => {
        return (
          <Grid2
            onClick={() => {
              navigate(`view_timeshare_detail/${timeshare.timeshareId}`);
            }}
            key={timeshare.timeshareId}
            xs={3.75}
            height="100%"
            className={timeshare.isNew ? classes.newItem : ""}
          >
            <Card
              className={`${classes.hoverContainer} ${
                timeshare.isNew ? classes.newItem : ""
              }`}
              elevation={3}
              sx={{ borderRadius: 0 }}
            >
              {timeshare.isNew && <span className={classes.newTag}>New</span>}
              <CardMedia
                component="img"
                image={`${timeshare.image_url}`}
                width="320px"
                height="200px"
                alt={timeshare.timeshareName}
              />
              <CardContent>
                <Stack
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                  spacing={1}
                  height="40px"
                >
                  <LocationOnIcon sx={{ color: "#00acb3" }} />
                  <Typography fontSize="16px" fontWeight={900}>
                    {timeshare.timeshareName},{" "}
                    <span style={{ fontWeight: 500, color: "#00acb3" }}>
                      {timeshare.city}
                    </span>
                  </Typography>
                </Stack>
                <List>
                  <ListItem disablePadding>
                    <ListItemAvatar>
                      <Avatar sx={{ backgroundColor: "#00acb3" }}>
                        <VpnKeyIcon sx={{ fontSize: "15px" }} />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <Typography fontWeight={700}>
                          {formatNumber(timeshare.price)} VNĐ (
                          {formatNumber(timeshare.price / timeshare.nights)}
                          /night)
                        </Typography>
                      }
                      secondary={
                        <Box>
                          <Typography color="#00acb3" fontWeight={500}>
                            {dayjs(timeshare.dateStart)
                              .format("DD MMM YYYY")
                              .toString()}{" "}
                            -{" "}
                            {dayjs(timeshare.dateEnd)
                              .format("DD MMM YYYY")
                              .toString()}
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
    </Grid2>
  );
};

export default ShowTimeshareGrid;

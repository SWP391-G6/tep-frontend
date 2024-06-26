import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useEffect, useState } from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import CheckIcon from "@mui/icons-material/Check";
import timeshareAPI from "../../services/timeshare/timeshareAPI";
import { AllTimeshare } from "../../interfaces/timeshare/timeshareResponse";
import { useParams } from "react-router";

import React from "react";
import { TimeshareDetailResponse } from "../../interfaces/timeshare/timeshareDetailResponse";
import roomTypeAPI from "../../services/roomtype/roomtypeAPI";
import { RoomTypeResponse } from "../../interfaces/roomtype/roomTypeResponse";
import { isEmpty } from "lodash";

const useStyles = makeStyles((theme) => ({
  listItem: {
    listStyleType: "inherit",
  },
  tabs: {
    "& .MuiTabs-indicator": {
      backgroundColor: "#00acb3",
      color: "#00acb3 ",
    },
    "& .MuiTab-root.Mui-selected": {
      color: "#00acb3",
    },
  },
}));

type Props = { timeshare: TimeshareDetailResponse; roomType: RoomTypeResponse };

const TimeshareDetail = (props: Props) => {
  const classes = useStyles();
  const [value, setValue] = useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const splitString = (str: string): string[] => {
    const substrings: string[] = [];
    if (str && !isEmpty(str)) {
      while (str.includes(", ")) {
        const index = str.indexOf(", ");
        substrings.push(str.substring(0, index));
        str = str.substring(index + 2);
      }

      substrings.push(str);
    }

    return substrings;
  };

  const inputPolicies: string = props.roomType.policies;
  const inputKitchen: string = props.roomType.kitchen;
  const inputEntertainment: string = props.roomType.entertaiment;
  const inputFeature: string = props.roomType.feature;
  const policies: string[] = splitString(inputPolicies);
  const kitchen: string[] = splitString(inputKitchen);
  const entertainment: string[] = splitString(inputEntertainment);
  const features: string[] = splitString(inputFeature);
  return (
    <TabContext value={value}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <TabList
          onChange={handleChange}
          aria-label="lab API tabs example"
          TabIndicatorProps={{
            style: {
              backgroundColor: "#00acb3",
              color: "#00acb3",
            },
          }}
          sx={{
            "& .Mui-selected": {
              color: "#00acb3",
            },
            "& .MuiTab-indicator": {
              backgroundColor: "#00acb3",
              color: "#00acb3",
            },
            "& .MuiTab-textColorInherit": {
              color: "#00acb3",
            },
            "& .MuiButtonBase-root-MuiTab-root.Mui-selected": {
              color: "#00acb3",
            },
          }}
        >
          <Tab className={classes.tabs} label="Timeshare Detail" value="1" />
          <Tab label="About the resort" value="2" />
          <Tab label="Images" value="3" />
        </TabList>
      </Box>
      <TabPanel value="1">
        <Grid container>
          <>
            <Grid xs={12}>
              <Typography fontWeight={900} color="#00acb3">
                Kitchen
              </Typography>
            </Grid>

            {kitchen.map((item, index) => {
              return (
                <Grid xs={4} key={index}>
                  <ListItem disableGutters>
                    <ListItemText
                      primary={
                        <Typography fontWeight={400}>• {item}</Typography>
                      }
                    />
                  </ListItem>
                </Grid>
              );
            })}
          </>
          <Divider sx={{ width: "100%" }} />
          <>
            <Grid xs={12} mt={2}>
              <Typography fontWeight={900} color="#00acb3">
                Entertainment
              </Typography>
            </Grid>

            {entertainment ? (
              entertainment.map((item, index) => {
                return (
                  <Grid xs={4} key={index}>
                    <ListItem disableGutters>
                      <ListItemText
                        primary={
                          <Typography fontWeight={400}>• {item}</Typography>
                        }
                      />
                    </ListItem>
                  </Grid>
                );
              })
            ) : (
              <Grid xs={4}>
                <ListItem disableGutters>
                  <ListItemText
                    primary={<Typography fontWeight={400}></Typography>}
                  />
                </ListItem>
              </Grid>
            )}
          </>
          <Divider sx={{ width: "100%" }} />
          <>
            <Grid xs={12} mt={2}>
              <Typography fontWeight={900} color="#00acb3">
                Features
              </Typography>
            </Grid>

            {features.map((item, index) => {
              return (
                <Grid xs={4} key={index}>
                  <ListItem disableGutters>
                    <ListItemText
                      primary={
                        <Typography fontWeight={400}>• {item}</Typography>
                      }
                    />
                  </ListItem>
                </Grid>
              );
            })}
          </>
          <Divider sx={{ width: "100%" }} />
          <>
            <Grid xs={12} mt={2}>
              <Typography fontWeight={900} color="#00acb3">
                Policies
              </Typography>
            </Grid>
            {policies.map((item, index) => {
              return (
                <Grid xs={4} key={index}>
                  <ListItem disableGutters>
                    <ListItemText
                      primary={
                        <Typography fontWeight={400}>• {item}</Typography>
                      }
                    />
                  </ListItem>
                </Grid>
              );
            })}
          </>
        </Grid>
      </TabPanel>
      <TabPanel value="2">Item Two</TabPanel>
      {/* <TabPanel value="3">Item Three</TabPanel> */}
    </TabContext>
  );
};

export default TimeshareDetail;

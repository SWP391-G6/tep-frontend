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
import { TimeshareResponse } from "../../interfaces/timeshare/timeshareResponse";
import { useParams } from "react-router";

import React from "react";
import { TimeshareDetailResponse } from "../../interfaces/timeshare/timeshareDetailResponse";


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

const TimeshareDetail = () => {
  const classes = useStyles();
  const [value, setValue] = useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const [timeshare, setTimeshare] = useState<Record<string, any>>({});
  const { timeshareId } = useParams();
  useEffect(() => {
    const fetchTimeshareDetail = async () => {
      try {
        if (timeshareId) {
          const response = await timeshareAPI.getTimeshareByUserID(timeshareId);

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
            "& .MuiTab-root": {
              color: "#00acb3",
            },
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

            {timeshare?.room && (
              <Grid xs={4}>
                <ListItem disableGutters>
                  <ListItemText
                    primary={
                      <Typography fontWeight={400}>
                        • {timeshare.room.kitchen}
                      </Typography>
                    }
                  />
                </ListItem>
              </Grid>
            )}
          </>
          <Divider sx={{ width: "100%" }} />
          <>
            <Grid xs={12} mt={2}>
              <Typography fontWeight={900} color="#00acb3">
                Entertainment
              </Typography>
            </Grid>
            {timeshare?.room && (
              <Grid xs={4}>
                <ListItem disableGutters>
                  <ListItemText
                    primary={
                      <Typography fontWeight={400}>
                        • {timeshare.room.entertaiment}
                      </Typography>
                    }
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
            {timeshare?.room && (
              <Grid xs={4}>
                <ListItem disableGutters>
                  <ListItemText
                    primary={
                      <Typography fontWeight={400}>
                        • {timeshare.room.feature}
                      </Typography>
                    }
                  />
                </ListItem>
              </Grid>
            )}
          </>
          <Divider sx={{ width: "100%" }} />
          <>
            <Grid xs={12} mt={2}>
              <Typography fontWeight={900} color="#00acb3">
                Policies
              </Typography>
            </Grid>
            {timeshare?.room && (
              <Grid xs={4}>
                <ListItem disableGutters>
                  <ListItemText
                    primary={
                      <Typography fontWeight={400}>
                        • {timeshare.room.policies}
                      </Typography>
                    }
                  />
                </ListItem>
              </Grid>
            )}
          </>
        </Grid>
      </TabPanel>
      <TabPanel value="2">Item Two</TabPanel>
      {/* <TabPanel value="3">Item Three</TabPanel> */}
    </TabContext>
  );
};

export default TimeshareDetail;

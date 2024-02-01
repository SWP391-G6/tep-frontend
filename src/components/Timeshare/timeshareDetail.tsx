import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useState } from "react";
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

const useStyles = makeStyles((theme) => ({
  listItem: {
    listStyleType: "inherit",
  },
}));

const TimeshareDetail = () => {
  const classes = useStyles();
  const [value, setValue] = useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <TabContext value={value}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <TabList onChange={handleChange} aria-label="lab API tabs example">
          <Tab label="Timeshare Detail" value="1" />
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
            <Grid xs={4}>
              <ListItem disableGutters>
                <ListItemText
                  primary={
                    <Typography fontWeight={400}>• Coffee maker</Typography>
                  }
                />
              </ListItem>
            </Grid>
            <Grid xs={4}>
              <ListItem disableGutters>
                <ListItemText
                  primary={
                    <Typography fontWeight={400}>• Microwave</Typography>
                  }
                />
              </ListItem>
            </Grid>
            <Grid xs={4}>
              <ListItem disableGutters>
                <ListItemText
                  primary={
                    <Typography fontWeight={400}>
                      • Refrigerator (full-size)
                    </Typography>
                  }
                />
              </ListItem>
            </Grid>
            <Grid xs={4}>
              <ListItem disableGutters>
                <ListItemText
                  primary={
                    <Typography fontWeight={400}>• Dishwasher</Typography>
                  }
                />
              </ListItem>
            </Grid>
            <Grid xs={4}>
              <ListItem disableGutters>
                <ListItemText
                  primary={<Typography fontWeight={400}>• Oven</Typography>}
                />
              </ListItem>
            </Grid>
          </>
          <Divider sx={{ width: "100%" }} />
          <>
            <Grid xs={12} mt={2}>
              <Typography fontWeight={900} color="#00acb3">
                Entertainment
              </Typography>
            </Grid>
            <Grid xs={4}>
              <ListItem disableGutters>
                <ListItemText
                  primary={
                    <Typography fontWeight={400}>• Internet access</Typography>
                  }
                />
              </ListItem>
            </Grid>
            <Grid xs={4}>
              <ListItem disableGutters>
                <ListItemText
                  primary={<Typography fontWeight={400}>• Smart TV</Typography>}
                />
              </ListItem>
            </Grid>
            <Grid xs={4}>
              <ListItem disableGutters>
                <ListItemText
                  primary={
                    <Typography fontWeight={400}>• Telephone</Typography>
                  }
                />
              </ListItem>
            </Grid>
            <Grid xs={4}>
              <ListItem disableGutters>
                <ListItemText
                  primary={<Typography fontWeight={400}>• Netflix</Typography>}
                />
              </ListItem>
            </Grid>
          </>
          <Divider sx={{ width: "100%" }} />
          <>
            <Grid xs={12} mt={2}>
              <Typography fontWeight={900} color="#00acb3">
                Features
              </Typography>
            </Grid>
            <Grid xs={4}>
              <ListItem disableGutters>
                <ListItemText
                  primary={
                    <Typography fontWeight={400}>• Air conditioning</Typography>
                  }
                />
              </ListItem>
            </Grid>
            <Grid xs={4}>
              <ListItem disableGutters>
                <ListItemText
                  primary={
                    <Typography fontWeight={400}>• Patio or balcony</Typography>
                  }
                />
              </ListItem>
            </Grid>
          </>
          <Divider sx={{ width: "100%" }} />
          <>
            <Grid xs={12} mt={2}>
              <Typography fontWeight={900} color="#00acb3">
                Policies
              </Typography>
            </Grid>
            <Grid xs={4}>
              <ListItem disableGutters>
                <ListItemText
                  primary={<Typography fontWeight={400}>• No pets</Typography>}
                />
              </ListItem>
            </Grid>
            <Grid xs={4}>
              <ListItem disableGutters>
                <ListItemText
                  primary={
                    <Typography fontWeight={400}>• No smoking</Typography>
                  }
                />
              </ListItem>
            </Grid>
          </>
        </Grid>
      </TabPanel>
      <TabPanel value="2">Item Two</TabPanel>
      <TabPanel value="3">Item Three</TabPanel>
    </TabContext>
  );
};

export default TimeshareDetail;

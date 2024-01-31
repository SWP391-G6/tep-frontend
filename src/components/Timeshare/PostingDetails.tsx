import { Box, Container, Grid, Paper, Tab, Typography } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import React from "react";
import CircleIcon from "@mui/icons-material/Circle";

const PostingDetail = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.2)",
      }}
    >
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            sx={{
              "& .MuiTab-root": {
                fontSize: "18px",
                padding: "16px",
              },
            }}
          >
            <Tab label="POSTING DETAILS" value="1" />
            <Tab label="ABOUT THE RESORT" value="2" />
            <Tab label="REVIEWS" value="3" />
          </TabList>
        </Box>

        {/* TAB1 */}
        <TabPanel value="1" sx={{ paddingLeft: "30px" }}>
          {/* KITCHEN */}
          <Typography variant="h5" fontWeight={"bold"}>
            Kitchen
          </Typography>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            sx={{
              marginTop: "8px",
              marginBottom: "40px",
              paddingLeft: "15px",
            }}
          >
            <Grid item xs={4}>
              <Typography variant="h5">
                <CircleIcon
                  sx={{
                    fontSize: "10px",
                    marginRight: "10px",
                  }}
                />
                Coffee maker
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h5">
                <CircleIcon
                  sx={{
                    fontSize: "10px",
                    marginRight: "10px",
                  }}
                />
                Microwave
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h5">
                <CircleIcon
                  sx={{
                    fontSize: "10px",
                    marginRight: "10px",
                  }}
                />
                Refrigerator (full-size)
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h5">
                <CircleIcon
                  sx={{
                    fontSize: "10px",
                    marginRight: "10px",
                  }}
                />
                Dishwasher
              </Typography>
            </Grid>
          </Grid>

          {/* ENTERTAIMENT */}
          <Typography variant="h5" fontWeight={"bold"}>
            Entertainment
          </Typography>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            sx={{
              marginTop: "8px",
              marginBottom: "40px",
              paddingLeft: "15px",
            }}
          >
            <Grid item xs={4}>
              <Typography variant="h5">
                <CircleIcon
                  sx={{
                    fontSize: "10px",
                    marginRight: "10px",
                  }}
                />
                DVD player
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h5">
                <CircleIcon
                  sx={{
                    fontSize: "10px",
                    marginRight: "10px",
                  }}
                />
                Radio or music player
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h5">
                <CircleIcon
                  sx={{
                    fontSize: "10px",
                    marginRight: "10px",
                  }}
                />
                Internet access
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h5">
                <CircleIcon
                  sx={{
                    fontSize: "10px",
                    marginRight: "10px",
                  }}
                />
                TV
              </Typography>
            </Grid>
          </Grid>

          {/* FEATURE */}
          <Typography variant="h5" fontWeight={"bold"}>
            {" "}
            Features
          </Typography>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            sx={{
              marginTop: "8px",
              marginBottom: "40px",
              paddingLeft: "15px",
            }}
          >
            <Grid item xs={4}>
              <Typography variant="h5">
                <CircleIcon
                  sx={{
                    fontSize: "10px",
                    marginRight: "10px",
                  }}
                />
                Air conditioning
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h5">
                <CircleIcon
                  sx={{
                    fontSize: "10px",
                    marginRight: "10px",
                  }}
                />
                Patio or balcony
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h5">
                <CircleIcon
                  sx={{
                    fontSize: "10px",
                    marginRight: "10px",
                  }}
                />
                Washer and dryer (in-unit)
              </Typography>
            </Grid>
          </Grid>

          {/* POLICIES */}
          <Typography variant="h5" fontWeight={"bold"}>
            Policies
          </Typography>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            sx={{
              marginTop: "8px",
              marginBottom: "40px",
              paddingLeft: "15px",
            }}
          >
            <Grid item xs={4}>
              <Typography variant="h5">
                <CircleIcon
                  sx={{
                    fontSize: "10px",
                    marginRight: "10px",
                  }}
                />
                No pets
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h5">
                <CircleIcon
                  sx={{
                    fontSize: "10px",
                    marginRight: "10px",
                  }}
                />
                No smoking
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h5">
                <CircleIcon
                  sx={{
                    fontSize: "10px",
                    marginRight: "10px",
                  }}
                />
                Minimum check-in age: 18
              </Typography>
            </Grid>
          </Grid>
        </TabPanel>

        <TabPanel value="2">
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              height: "400px",
              gap: "20px",
            }}
          >
            <img
              src="https://onetouchmedia.vn/wp-content/uploads/2019/10/N.NT-31.jpg"
              alt="Image"
              style={{
                width: "250px",
                height: "210px",
                marginLeft: "20px",
              }}
            />
            <Box>
              <Typography variant="h2">
                The Westin Kaanapali Ocean Resort Villas{" "}
              </Typography>
              <Typography variant="h6">Lahaina, Hawaii </Typography>
              <Typography>
                Perched on twenty-six lush acres with breathtaking views of the
                Pacific Ocean and the islands of Lana'i and Moloka'i, Westin
                Kaanapali Ocean Resort Villas (commonly referred to as WKORV)
                provides the ultimate in pampering and relaxation. Enjoy an
                afternoon unwinding beside any of the several lagoon style pools
                while your children are encouraged to open their minds to new
                worlds of culture, crafts, and fun at The Westin Discovery
                Center and pirate ship pool. Experience the luxurious 10,000
                square-foot Spa Helani by Westin Heavenly Spa, dedicated to your
                sense of wellness. Obtain optimal fitness at one of the fully
                equipped Westin Workout facilities on property. Discover what’s
                cooking at any one of the three restaurants on property or enjoy
                indulging gourmet options at either one of the fresh markets.
              </Typography>
            </Box>
          </Box>
        </TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </Box>
  );
};

export default PostingDetail;

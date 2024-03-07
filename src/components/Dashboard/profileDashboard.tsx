import { Avatar, Box, Divider, Grid, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import SettingsIcon from "@mui/icons-material/Settings";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";

const ProfileDashboard = () => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        border: "solid 1px ",
        borderColor: "rgba(0, 0, 0, 0.2)",
        padding: "30px",
      }}
    >
      <Grid>
        <Typography variant="h5" fontWeight={700}>
          Account Details
        </Typography>
        <Stack mt={2}>
          <Link
            to="/member/profile/my_profile"
            style={{ textDecoration: "none" }}
          >
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
            >
              <Avatar
                variant="square"
                sx={{ width: 30, height: 30, backgroundColor: "#00acb3" }}
              >
                <SettingsIcon />
              </Avatar>
              <Typography
                variant="caption"
                color="#00acb3"
                ml={1}
                fontSize={14}
                fontWeight={500}
              >
                PROFILE & PASSWORD
              </Typography>
            </Grid>
          </Link>
          <Link to="#" style={{ textDecoration: "none", marginTop: "10px" }}>
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
            >
              <Avatar
                variant="square"
                sx={{ width: 30, height: 30, backgroundColor: "#00acb3" }}
              >
                <QuestionMarkIcon />
              </Avatar>
              <Typography
                variant="caption"
                color="#00acb3"
                ml={1}
                fontSize={14}
                fontWeight={500}
              >
                ACCOUNT HELP
              </Typography>
            </Grid>
          </Link>
        </Stack>
      </Grid>
      <Divider sx={{ width: "100%", marginTop: "15px" }} />
      <Grid mt={1} height={300}>
        <Typography variant="h5" fontWeight={700}>
          Trip
        </Typography>
        <Typography variant="body1">You don't have any trips yet.</Typography>
      </Grid>
      <Divider sx={{ width: "100%", marginTop: "15px" }} />
      <Grid mt={1} height={300}>
        <Typography variant="h5" fontWeight={700}>
          My timeshares
        </Typography>
        <Typography variant="body1">
          You don't have any timeshare yet.
        </Typography>
      </Grid>
      <Divider sx={{ width: "100%", marginTop: "15px" }} />
      <Grid mt={1} height={300}>
        <Typography variant="h5" fontWeight={700}>
          My Booking history
        </Typography>
        <Typography variant="body1">
          You don't have any booking history yet.
        </Typography>
      </Grid>
      <Divider sx={{ width: "100%", marginTop: "15px" }} />
      <Grid mt={1} height={300}>
        <Typography variant="h5" fontWeight={700}>
          My Exchange Request
        </Typography>
        <Typography variant="body1">
          You don't have any exchange request yet.
        </Typography>
      </Grid>
    </Box>
  );
};

export default ProfileDashboard;

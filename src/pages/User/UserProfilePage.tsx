import { Box, Container, Grid } from "@mui/material";

import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import UserActivityTab from "../../components/User/UserActivityTab";
import UserCard from "../../components/User/UserCard";
import TimeshareList from "../../components/User/timeshareList";
import BackButton from "../../components/Button/backButton";

const UserProfilePage = () => {
  return (
    <Box sx={{ backgroundColor: "#d6dbdb51" }}>
      <Header />
      <Box component="main" sx={{ paddingTop: "10px", marginBottom: "50px" }}>
        <BackButton />
        <Container disableGutters maxWidth="xl">
          <Grid container spacing={3}>
            <Grid item xs={3.3}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <UserCard />
                </Grid>
                <Grid item xs={12} style={{ marginTop: "15px" }}>
                  <UserActivityTab />
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={8.7}>
              <Box>
                <TimeshareList />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
};

export default UserProfilePage;

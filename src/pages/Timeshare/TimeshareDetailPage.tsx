import { Box, Container, Grid } from "@mui/material";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import BackButton from "../../components/Button/backButton";
import TimeshareTitle from "../../components/Timeshare/timeshareTitle";
import TimesharePriceInformation from "../../components/Timeshare/timesharePriceInformation";
import TimeshareDetail from "../../components/Timeshare/timeshareDetail";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

const TimeshareDetailPage = () => {
  return (
    <Box sx={{ backgroundColor: "#f6f8fa" }}>
      <Header />
      <Container
        disableGutters
        maxWidth="xl"
        sx={{ height: "100%", zIndex: 1 }}
      >
        <Grid2 container gap={2} padding="10px 50px">
          <Grid2 xs={12}>
            <BackButton />
          </Grid2>
          <Grid2
            xs={7}
            sx={{
              padding: "30px",
              boxShadow: "1px 1px 2px 2px rgba(0, 0, 0, 0.2)",
              backgroundColor: "#ffffff",
            }}
          >
            <TimeshareTitle />
          </Grid2>
          <Grid2
            xs={4}
            sx={{
              height: "500px",
              position: "sticky",
              top: "10px",
              zIndex: 2,
              boxShadow: "1px 1px 2px 2px rgba(0, 0, 0, 0.2)",
              padding: "20px",
              backgroundColor: "#ffffff",
            }}
          >
            <TimesharePriceInformation />
          </Grid2>
          <Grid2
            xs={7}
            sx={{
              boxShadow: "1px 1px 2px 2px rgba(0, 0, 0, 0.2)",
              backgroundColor: "#ffffff",
            }}
          >
            <TimeshareDetail />
          </Grid2>
        </Grid2>
      </Container>
      <Footer />
    </Box>
  );
};

export default TimeshareDetailPage;

import { Box, Container, Divider, Typography } from "@mui/material";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import BackButton from "../../components/Button/backButton";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import PersonalInformationComponent from "../../components/BookingInformation/personalInformationComponent";
import PaymentComponent from "../../components/BookingInformation/paymentComponent";
import TimeshareInformationComponent from "../../components/BookingInformation/timeshareInformationComponent";
import PaymentSummaryComponent from "../../components/BookingInformation/paymentSummaryComponent";

const BookingInformationPage = () => {
  console.log("Booking Information!");
  return (
    <Container disableGutters maxWidth="xl" sx={{ height: "100%", zIndex: 1 }}>
      <Grid2 container gap={2} padding="10px 50px 20px 50px">
        <Grid2 xs={12}>
          <BackButton />
          <Typography variant="subtitle1" fontSize={26} fontWeight={900}>
            Booking Request
          </Typography>
        </Grid2>
        <Grid2
          xs={8}
          sx={{
            padding: "30px",
            boxShadow: "1px 1px 2px 2px rgba(0, 0, 0, 0.2)",
            backgroundColor: "#ffffff",
          }}
        >
          <PersonalInformationComponent />
        </Grid2>
        <Grid2
          xs={3.5}
          sx={{
            height: "100%",
            position: "sticky",
            top: "10px",
            zIndex: 2,
            boxShadow: "1px 1px 2px 2px rgba(0, 0, 0, 0.2)",
            padding: "20px",
            backgroundColor: "#ffffff",
          }}
        >
          <TimeshareInformationComponent />
        </Grid2>
        <Grid2
          xs={8}
          sx={{
            boxShadow: "1px 1px 2px 2px rgba(0, 0, 0, 0.2)",
            backgroundColor: "#ffffff",
            padding: "30px",
          }}
        >
          <PaymentComponent />
        </Grid2>
        <Grid2
          xs={8}
          sx={{
            boxShadow: "1px 1px 2px 2px rgba(0, 0, 0, 0.2)",
            backgroundColor: "#ffffff",
            padding: "30px",
          }}
        >
          <PaymentSummaryComponent />
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default BookingInformationPage;

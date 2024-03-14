import { Card, Container, Typography } from "@mui/material";
import BackButton from "../../../components/Button/backButton";
import BookedTimeshareDataGrid from "../../../components/DataGrid/admin/timeshare/bookedTimeshareDataGrid";

const ManageBookedTimesharePage = () => {
  return (
    <Container
      disableGutters={true}
      maxWidth={false}
      style={{ padding: "0 40px 17px 40px" }}
    >
      <BackButton />
      <Container>
        <Typography
          align="center"
          sx={{
            fontSize: "2rem",
            fontWeight: "bold ",
            color: "#00acb3",
          }}
        >
          Booked Timeshare List
        </Typography>
        <Card sx={{ marginTop: "20px" }}>
          <BookedTimeshareDataGrid />
        </Card>
      </Container>
    </Container>
  );
};

export default ManageBookedTimesharePage;

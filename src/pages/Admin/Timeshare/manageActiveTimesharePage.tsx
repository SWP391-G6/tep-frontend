import { Card, Container, Typography } from "@mui/material";
import BackButton from "../../../components/Button/backButton";
import ActiveTimeshareDataGrid from "../../../components/DataGrid/admin/timeshare/activeTimeshareDataGrid";

const ManageActiveTimesharePage = () => {
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
          Active Timeshare List
        </Typography>
        <Card sx={{ marginTop: "20px" }}>
          <ActiveTimeshareDataGrid />
        </Card>
      </Container>
    </Container>
  );
};

export default ManageActiveTimesharePage;

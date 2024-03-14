import { Card, Container, Typography } from "@mui/material";
import BackButton from "../../../components/Button/backButton";
import AccountDataGrid from "../../../components/DataGrid/admin/account/accountDataGrid";

const ManageAccountPage = () => {
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
          Account List
        </Typography>
        <Card sx={{ marginTop: "20px" }}>
          <AccountDataGrid />
        </Card>
      </Container>
    </Container>
  );
};

export default ManageAccountPage;

import { Card, Container, Typography } from "@mui/material";
import BackButton from "../../../components/Button/backButton";
import ServicePackDataGrid from "../../../components/DataGrid/admin/servicepack/servicePackDataGrid";


const ManageServicePackPage = () => {
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
         Service Pack List
        </Typography>
        <Card sx={{ marginTop: "20px" }}>
          <ServicePackDataGrid />
        </Card>
      </Container>
    </Container>
  )
}

export default ManageServicePackPage
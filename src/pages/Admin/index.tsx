import {
  Box,
  Container,
} from "@mui/material";
import AdminHeader from "../../components/Header/admin";
import AdminSideBar from "../../components/SideBar";
import { Outlet } from "react-router";

function AdminDashboard() {
  return (
    <Container
      maxWidth={false}
      disableGutters={true}
    >
      <AdminHeader />
      <AdminSideBar />
      <Box
        sx={{
          flexGrow: 1,
          backgroundColor: "#f6f8fa",
          paddingBottom: "30px",
          width: { sm: `calc(100% - 300px)` },
          position: "absolute",
          zIndex: -1,
          top: 64,
          left: 300,
          height: "100vh"
        }}
      >
        <Outlet />
      </Box>
    </Container>
  );
}

export default AdminDashboard;

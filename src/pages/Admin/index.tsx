import AccountCircle from "@mui/icons-material/AccountCircle";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import {
  Box,
  Container,
  Divider,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Stack,
  Typography,
} from "@mui/material";
import AdminHeader from "../../components/Header/admin";
import ManageAccountPage from "./ManageAccountPage";
import ManagePlanPage from "./ManagePlanPage";

type Props = {};

function AdminDasboard({}: Props) {
  return (
    <Box>
      <AdminHeader />

      <Stack direction={"row"}>
        <Box
          minHeight={"100vh"}
          minWidth={"15vw"}
          borderRight={"0.25px solid black"}
        >
          <Stack direction={"column"}>
            <MenuList>
              <MenuItem>
                <ListItemIcon>
                  <AccountCircle />
                </ListItemIcon>

                <ListItemText>Manage Account</ListItemText>
              </MenuItem>

              <Divider />

              <MenuItem>
                <ListItemIcon>
                  <ShoppingBagIcon />
                </ListItemIcon>

                <ListItemText>Manage Plan</ListItemText>
              </MenuItem>
            </MenuList>
          </Stack>
        </Box>

        <Box flex={1}>
          <Container>
            <ManagePlanPage />
          </Container>
        </Box>
      </Stack>
    </Box>
  );
}

export default AdminDasboard;

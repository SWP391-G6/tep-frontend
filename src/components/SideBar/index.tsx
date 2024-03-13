import {
  Drawer,
  Divider,
  List,
  Box,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  // useTheme,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import ListIcon from "@mui/icons-material/List";
import { NavLink } from "react-router-dom";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DateRangeIcon from "@mui/icons-material/DateRange";
import * as colorPalette from "@mui/material/colors";

const drawerWidth = 300;
const linkStyle = {
  textDecoration: "none",
  color: "inherit",
};
const buttonStyle = {
  width: "300px",
};

const childButtonStyle = {
  width: "300px",
  paddingLeft: "36px",
  justifyContent: "center",
  alignItems: "center",
};

const AdminSideBar = () => {
  const drawer = (
    <Box>
      <Divider />
      <List>
        <ListItem disablePadding divider>
          <NavLink
            style={({ isActive }) => {
              return {
                ...linkStyle,
                background: isActive ? colorPalette.blue[100] : "",
              };
            }}
            to=""
            end
          >
            <ListItemButton style={buttonStyle}>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText
                primary="Dashboard"
                primaryTypographyProps={{ fontWeight: "700" }}
              />
            </ListItemButton>
          </NavLink>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton
            style={{ backgroundColor: "transparent", width: "300px" }}
            disableRipple
          >
            <ListItemIcon>
              <DateRangeIcon />
            </ListItemIcon>
            <ListItemText
              primary="Manage Timeshare"
              primaryTypographyProps={{ fontWeight: "700" }}
            />
          </ListItemButton>
        </ListItem>

        {/* <ListItem disablePadding>
          <NavLink
            style={({ isActive }) => {
              return {
                ...linkStyle,
                background: isActive ? colorPalette.blue[100] : "",
              };
            }}
            to="/accountant/manage_bill/create_bill"
            end
          >
            <ListItemButton style={childButtonStyle}>
              <ListItemIcon>
                <AddCircleOutlineIcon />
              </ListItemIcon>
              <ListItemText
                primary="Tạo hóa đơn"
                primaryTypographyProps={{ fontSize: "15px" }}
              />
            </ListItemButton>
          </NavLink>
        </ListItem> */}

        <ListItem disablePadding>
          <NavLink
            style={({ isActive }) => {
              return {
                ...linkStyle,
                background: isActive ? colorPalette.blue[100] : "",
              };
            }}
            to="/accountant/manage_bill"
            end
          >
            <ListItemButton style={childButtonStyle}>
              <ListItemIcon>
                <ListIcon />
              </ListItemIcon>
              <ListItemText
                primary="Timeshare List"
                primaryTypographyProps={{ fontSize: "15px" }}
              />
            </ListItemButton>
          </NavLink>
        </ListItem>

        <ListItem disablePadding>
          <NavLink
            style={({ isActive }) => {
              return {
                ...linkStyle,
                background: isActive ? colorPalette.blue[100] : "",
              };
            }}
            to="/accountant/manage_new_bill"
            end
          >
            <ListItemButton style={childButtonStyle}>
              <ListItemIcon>
                <ListIcon />
              </ListItemIcon>
              <ListItemText
                primary="Booked Timeshare List"
                primaryTypographyProps={{ fontSize: "15px" }}
              />
            </ListItemButton>
          </NavLink>
        </ListItem>

        <ListItem disablePadding>
          <NavLink
            style={({ isActive }) => {
              return {
                ...linkStyle,
                background: isActive ? colorPalette.blue[100] : "",
              };
            }}
            to="/accountant/manage_approved_bill"
            end
          >
            <ListItemButton style={childButtonStyle}>
              <ListItemIcon>
                <ListIcon />
              </ListItemIcon>
              <ListItemText
                primary="Active Timeshare List"
                primaryTypographyProps={{ fontSize: "15px" }}
              />
            </ListItemButton>
          </NavLink>
        </ListItem>
      </List>
    </Box>
  );
  return (
    <Box
      sx={{
        maxWidth: 300,
        margin: 0,
      }}
    >
      <Drawer
        sx={{
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            borderWidth: 0,
            backgroundColor: "#ffffff",
            top: 64,
            left: 0,
            zIndex: "-1",
            height: `calc(100vh - 64px)`,
          },
        }}
        variant="permanent"
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default AdminSideBar;

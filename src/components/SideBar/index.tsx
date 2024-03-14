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
import ListIcon from "@mui/icons-material/List";
import { NavLink } from "react-router-dom";
import DateRangeIcon from "@mui/icons-material/DateRange";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";

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
                background: isActive ? "#00acb3" : "",
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

        <ListItem disablePadding>
          <NavLink
            style={({ isActive }) => {
              return {
                ...linkStyle,
                background: isActive ? "#00acb3" : "",
              };
            }}
            to="/admin/manage_timeshare"
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
                background: isActive ? "#00acb3" : "",
              };
            }}
            to="/admin/manage_timeshare/booked_timeshare_list"
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
                background: isActive ? "#00acb3" : "",
              };
            }}
            to="/admin/manage_timeshare/active_timeshare_list"
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

        <ListItem disablePadding divider>
          <NavLink
            style={({ isActive }) => {
              return {
                ...linkStyle,
                background: isActive ? "#00acb3" : "",
              };
            }}
            to="/admin/manage_timeshare/expired_timeshare_list"
            end
          >
            <ListItemButton style={childButtonStyle}>
              <ListItemIcon>
                <ListIcon />
              </ListItemIcon>
              <ListItemText
                primary="Expired Timeshare List"
                primaryTypographyProps={{ fontSize: "15px" }}
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
              <AccountCircleRoundedIcon />
            </ListItemIcon>
            <ListItemText
              primary="Manage Account"
              primaryTypographyProps={{ fontWeight: "700" }}
            />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <NavLink
            style={({ isActive }) => {
              return {
                ...linkStyle,
                background: isActive ? "#00acb3" : "",
              };
            }}
            to="/admin/manage_account"
            end
          >
            <ListItemButton style={childButtonStyle}>
              <ListItemIcon>
                <ListIcon />
              </ListItemIcon>
              <ListItemText
                primary="Account List"
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
                background: isActive ? "#00acb3" : "",
              };
            }}
            to="/admin/manage_account/active_account_list"
            end
          >
            <ListItemButton style={childButtonStyle}>
              <ListItemIcon>
                <ListIcon />
              </ListItemIcon>
              <ListItemText
                primary="Active Account List"
                primaryTypographyProps={{ fontSize: "15px" }}
              />
            </ListItemButton>
          </NavLink>
        </ListItem>

        <ListItem disablePadding divider>
          <NavLink
            style={({ isActive }) => {
              return {
                ...linkStyle,
                background: isActive ? "#00acb3" : "",
              };
            }}
            to="/admin/manage_account/inactive_account_list"
            end
          >
            <ListItemButton style={childButtonStyle}>
              <ListItemIcon>
                <ListIcon />
              </ListItemIcon>
              <ListItemText
                primary="InActive Account List"
                primaryTypographyProps={{ fontSize: "15px" }}
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
              <AppRegistrationIcon />
            </ListItemIcon>
            <ListItemText
              primary="Manage Service Pack"
              primaryTypographyProps={{ fontWeight: "700" }}
            />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <NavLink
            style={({ isActive }) => {
              return {
                ...linkStyle,
                background: isActive ? "#00acb3" : "",
              };
            }}
            to="/admin/manage_service_pack"
            end
          >
            <ListItemButton style={childButtonStyle}>
              <ListItemIcon>
                <ListIcon />
              </ListItemIcon>
              <ListItemText
                primary="Service Pack List"
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

import React, { useState } from "react";
import { Divider, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import DisplaySettingsIcon from "@mui/icons-material/DisplaySettings";
import ContactsIcon from "@mui/icons-material/Contacts";
import ApartmentIcon from "@mui/icons-material/Apartment";

const UserActivityTab = () => {
  const location = useLocation();
  const [selectedTab, setSelectedTab] = useState("posting");

  React.useEffect(() => {
    const pathname = location.pathname;
    switch (pathname) {
      case "/user/posting":
        setSelectedTab("posting");
        break;
      case "/user/profile":
        setSelectedTab("profile");
        break;
      case "/user/exchange_request":
        setSelectedTab("exchange_request");
        break;
      default:
        setSelectedTab("posting");
        break;
    }
  }, [location]);

  return (
    <List
      component="nav"
      aria-label="main mailbox folders"
      sx={{
        width: "100%",
        backgroundColor: "white",
        border: 'solid 1px ',
        borderColor: 'rgba(0, 0, 0, 0.2)',
      }}
    >
      {/* USER POSTING */}
      <Link to="/user/posting" style={{ textDecoration: "none", color: "black" }}>
        <ListItemButton
          sx={{ width: "100%" }}
          selected={selectedTab === "posting"}
          onClick={() => setSelectedTab("posting")}
        >
          <ListItemIcon sx={{ fontSize: 24 }}>
            <ContactsIcon fontSize="small" sx={{ color: "black" }} />
          </ListItemIcon>
          <ListItemText primaryTypographyProps={{ variant: "subtitle1" }} primary="My Timeshare" />
        </ListItemButton>
      </Link>

      {/* USER PROFILE */}
      <Divider />
      <Link to="/user/profile" style={{ textDecoration: "none", color: "black" }}>
        <ListItemButton
          selected={selectedTab === "profile"}
          onClick={() => setSelectedTab("profile")}
        >
          <ListItemIcon sx={{ fontSize: 24 }}>
            <ApartmentIcon fontSize="small" sx={{ color: "black" }} />
          </ListItemIcon>
          <ListItemText primaryTypographyProps={{ variant: "subtitle1" }} primary="My Profile" />
        </ListItemButton>
      </Link>

      {/* USER REQUEST */}
      <Divider />
      <Link
        to="/user/exchange_request"
        style={{ textDecoration: "none", color: "black" }}
      >
        <ListItemButton
          selected={selectedTab === "exchange_request"}
          onClick={() => setSelectedTab("exchange_request")}
        >
          <ListItemIcon sx={{ fontSize: 24 }}>
            <DisplaySettingsIcon fontSize="small" sx={{ color: "black" }} />
          </ListItemIcon>
          <ListItemText
            primaryTypographyProps={{ variant: "subtitle1" }}
            primary="My Exchange Request"
          />
        </ListItemButton>
      </Link>
    </List>
  );
};

export default UserActivityTab;
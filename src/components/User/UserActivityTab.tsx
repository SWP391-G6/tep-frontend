import React, { useState } from "react";
import { Divider, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import DisplaySettingsIcon from "@mui/icons-material/DisplaySettings";
import ContactsIcon from "@mui/icons-material/Contacts";
import ApartmentIcon from "@mui/icons-material/Apartment";

const UserActivityTab = () => {
  const location = useLocation();
  const [selectedIndex, setSelectedIndex] = useState(0);

  React.useEffect(() => {
    // Xác định chỉ số được chọn dựa trên đường dẫn hiện tại
    const pathname = location.pathname;
    switch (pathname) {
      case "/user/posting":
        setSelectedIndex(0);
        break;
      case "/user/profile":
        setSelectedIndex(1);
        break;
      case "/user/exchange_request":
        setSelectedIndex(2);
        break;
      default:
        setSelectedIndex(0);
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
          selected={selectedIndex === 0}
          onClick={() => setSelectedIndex(0)}
        >
          <ListItemIcon sx={{ fontSize: 24 }}>
            <ContactsIcon fontSize="small" sx={{ color: "black" }} />
          </ListItemIcon>
          <ListItemText primaryTypographyProps={{ variant: "subtitle1" }} primary="My Posting" />
        </ListItemButton>
      </Link>

      {/* USER PROFILE */}
      <Divider />
      <Link to="/user/profile" style={{ textDecoration: "none", color: "black" }}>
        <ListItemButton
          selected={selectedIndex === 1}
          onClick={() => setSelectedIndex(1)}
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
          selected={selectedIndex === 2}
          onClick={() => setSelectedIndex(2)}
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
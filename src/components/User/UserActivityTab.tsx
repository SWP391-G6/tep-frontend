import React, { useState } from "react";
import {
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";
import DisplaySettingsIcon from "@mui/icons-material/DisplaySettings";
import ContactsIcon from "@mui/icons-material/Contacts";
import ApartmentIcon from "@mui/icons-material/Apartment";

const UserActivityTab = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
  ) => {
    setSelectedIndex(index);
  };

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
      <Link
        to="/user/posting"
        style={{ textDecoration: "none", color: "black" }}
      >
        <ListItemButton
          sx={{ width: "100%" }}
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}
        >
          <ListItemIcon sx={{ fontSize: 24 }}>
            <ContactsIcon fontSize="small" sx={{ color: "black" }} />
          </ListItemIcon>
          <ListItemText
            primaryTypographyProps={{ variant: "subtitle1" }}
            primary="My Posting"
          />
        </ListItemButton>
      </Link>


      {/* USER PROFILE */}
      <Divider />
      <Link
        to="/user/profile"
        style={{ textDecoration: "none", color: "black" }}
      >
        <ListItemButton
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
        >
          <ListItemIcon sx={{ fontSize: 24 }}>
            <ApartmentIcon fontSize="small" sx={{ color: "black" }} />
          </ListItemIcon>
          <ListItemText
            primaryTypographyProps={{ variant: "subtitle1" }}
            primary="My Profile"
          />
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
          onClick={(event) => handleListItemClick(event, 2)}
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

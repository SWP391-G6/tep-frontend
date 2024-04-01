import React, { useState } from "react";
import {
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import DisplaySettingsIcon from "@mui/icons-material/DisplaySettings";
import ContactsIcon from "@mui/icons-material/Contacts";
import ApartmentIcon from "@mui/icons-material/Apartment";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import DashboardIcon from "@mui/icons-material/Dashboard";

const UserActivityTab = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState("");

  React.useEffect(() => {
    const pathname = location.pathname;
    switch (pathname) {
      case "/member/profile":
        setSelectedTab("dashboard");
        break;

      case "/member/profile/my_timeshare":
        setSelectedTab("posting");
        break;

      case "/member/profile/my_profile":
        setSelectedTab("profile");
        break;

      case "/member/profile/my_exchange_request":
        setSelectedTab("exchange_request");
        break;

      case "/member/profile/my_booking_history":
        setSelectedTab("booking_history");
        break;

      case "member/profile/my_exchange_request_sent":
        navigate(0);
        setSelectedTab("exchange_request_sent");
        break;

      default:
        console.log("Default");
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
        border: "solid 1px ",
        borderColor: "rgba(0, 0, 0, 0.2)",
      }}
    >
      <Link
        to="/member/profile"
        style={{ textDecoration: "none", color: "black" }}
      >
        <ListItemButton
          selected={selectedTab === "dashboard"}
          onClick={() => setSelectedTab("dashboard")}
        >
          <ListItemIcon sx={{ fontSize: 24 }}>
            <DashboardIcon fontSize="small" sx={{ color: "black" }} />
          </ListItemIcon>
          <ListItemText
            primaryTypographyProps={{ variant: "subtitle1" }}
            primary="Dashboard"
          />
        </ListItemButton>
      </Link>
      <Divider />

      {/* MY PROFILE */}
      <Link
        to="/member/profile/my_profile"
        style={{ textDecoration: "none", color: "black" }}
      >
        <ListItemButton
          selected={selectedTab === "profile"}
          onClick={() => setSelectedTab("profile")}
        >
          <ListItemIcon sx={{ fontSize: 24 }}>
            <ContactsIcon fontSize="small" sx={{ color: "black" }} />
          </ListItemIcon>
          <ListItemText
            primaryTypographyProps={{ variant: "subtitle1" }}
            primary="My Profile"
          />
        </ListItemButton>
      </Link>
      <Divider />

      {/* MY TIMESHARE */}
      <Link
        to="/member/profile/my_timeshare"
        style={{ textDecoration: "none", color: "black" }}
      >
        <ListItemButton
          sx={{ width: "100%" }}
          selected={selectedTab === "posting"}
          onClick={() => setSelectedTab("posting")}
        >
          <ListItemIcon sx={{ fontSize: 24 }}>
            <ApartmentIcon fontSize="small" sx={{ color: "black" }} />
          </ListItemIcon>
          <ListItemText
            primaryTypographyProps={{ variant: "subtitle1" }}
            primary="My Timeshare"
          />
        </ListItemButton>
      </Link>

      {/* MY EXCHANGE REQUEST */}
      <Divider />
      <Link
        to="/member/profile/my_exchange_request"
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

      {/* MY EXCHANGE REQUEST SENT */}
      <Divider />
      <Link
        to="/member/profile/my_exchange_request_sent"
        style={{ textDecoration: "none", color: "black" }}
      >
        <ListItemButton
          selected={selectedTab === "exchange_request_sent"}
          onClick={() => setSelectedTab("exchange_request_sent")}
        >
          <ListItemIcon sx={{ fontSize: 24 }}>
            <DisplaySettingsIcon fontSize="small" sx={{ color: "black" }} />
          </ListItemIcon>
          <ListItemText
            primaryTypographyProps={{ variant: "subtitle1" }}
            primary="My Exchange Request Sent"
          />
        </ListItemButton>
      </Link>

      {/* MY HISTORY BOOKING  */}
      <Divider />
      <Link
        to="/member/profile/my_booking_history"
        style={{ textDecoration: "none", color: "black" }}
      >
        <ListItemButton
          selected={selectedTab === "booking_history"}
          onClick={() => setSelectedTab("booking_history")}
        >
          <ListItemIcon sx={{ fontSize: 24 }}>
            <WorkHistoryIcon fontSize="small" sx={{ color: "black" }} />
          </ListItemIcon>
          <ListItemText
            primaryTypographyProps={{ variant: "subtitle1" }}
            primary="My Booking History"
          />
        </ListItemButton>
      </Link>
    </List>
  );
};

export default UserActivityTab;

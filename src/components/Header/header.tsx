import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
} from "@mui/material";
import { useState } from "react";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { useNavigate } from "react-router";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        width: "100%",
        top: 0,
        zIndex: 1000,
      }}
    >
      <AppBar position="static" sx={{ backgroundColor: "#ffffff" }}>
        <Container maxWidth={false}>
          <Toolbar disableGutters>
            <img
              src={require("../../assets/logo.png")}
              width="50px"
              height="50px"
              alt=""
            />
            <img
              src={require("../../assets/logo-name.png")}
              width="220px"
              height="50px"
              style={{ marginLeft: "5px" }}
              alt=""
            />

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex", marginLeft: "10px" },
              }}
            >
              <Button
                sx={{
                  my: 2,
                  color: "#00acb3",
                  display: "block",
                  marginLeft: "10px",
                }}
              >
                Book a trip
              </Button>
              <Button
                sx={{
                  my: 2,
                  color: "#00acb3",
                  display: "block",
                  marginLeft: "10px",
                }}
              >
                Post Your timeshare
              </Button>
              <Button
                sx={{
                  my: 2,
                  color: "#00acb3",
                  display: "block",
                  marginLeft: "10px",
                }}
              >
                About
              </Button>
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex", marginLeft: "10px" },
                justifyContent: "right",
              }}
            >
              {/* <Tooltip title="Account Profile">
                <IconButton
                  onClick={handleClick}
                  size="small"
                  sx={{ ml: 2 }}
                  aria-controls={open ? "account-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                >
                  <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                </IconButton>
              </Tooltip>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&::before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <MenuItem
                  onClick={() => {
                    navigate("/user/exchange_request");
                    handleClose();
                  }}
                >
                  <Avatar /> My Account
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu> */}

              <Button
                sx={{
                  my: 2,
                  color: "#ffffff",
                  backgroundColor: "#00acb3",
                  display: "block",
                  marginLeft: "10px",
                  "&:hover": {
                    backgroundColor: "#08b7bd",
                  },
                }}
                variant="contained"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Sign In
              </Button>
              <Button
                sx={{
                  my: 2,
                  color: "#00acb3",
                  display: "block",
                  marginLeft: "10px",
                  "&:hover": {
                    borderColor: "#08b7bd",
                  },
                }}
                variant="outlined"
              >
                Sign Up
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Header;

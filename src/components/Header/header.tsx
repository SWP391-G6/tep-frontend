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
  Stack,
  Toolbar,
  Tooltip,
} from "@mui/material";
import { useState } from "react";
import Logout from "@mui/icons-material/Logout";
import { useNavigate } from "react-router";
import { USER_ID_KEY, USER_ROLE_KEY, USER_TOKEN_KEY } from "../../constant";
import { Link } from "react-router-dom";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const token = JSON.parse(localStorage.getItem(USER_TOKEN_KEY)!);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem(USER_ID_KEY);
    localStorage.removeItem(USER_TOKEN_KEY);
    localStorage.removeItem(USER_ROLE_KEY);
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
            <Link to={token ? "/member" : "/"}>
              <img
                src={"https://i.ibb.co/995RZ07/logo.png"}
                width="50px"
                height="50px"
                alt=""
              />
              <img
                src={"https://i.ibb.co/mJCJ7Jt/logo-name.png"}
                width="220px"
                height="50px"
                style={{ marginLeft: "5px" }}
                alt=""
              />
            </Link>

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
              {token ? (
                <Tooltip title="Account Profile">
                  <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                  >
                    <Avatar sx={{ width: 32, height: 32 }}></Avatar>
                  </IconButton>
                </Tooltip>
              ) : (
                <Stack direction={"row"}>
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
                </Stack>
              )}

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
                    navigate("profile");
                    handleClose();
                  }}
                >
                  <Avatar /> My Profile
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleLogout}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Log out
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Header;

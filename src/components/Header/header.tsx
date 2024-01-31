import { AppBar, Box, Button, Container, Toolbar } from "@mui/material";

const Header = () => {
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
              {/* <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
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

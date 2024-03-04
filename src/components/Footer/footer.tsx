import {
  Box,
  Container,
  IconButton,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import PinterestIcon from "@mui/icons-material/Pinterest";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#0264677c",
        width: "100%",
        bottom: 0,
        padding: "20px 0",
      }}
    >
      <Container disableGutters={true}>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
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
          </Grid>

          <Stack direction="row" spacing={1}>
            <IconButton
              aria-label="facebook"
              color="default"
              sx={{
                "&:hover": {
                  color: "#0866ff",
                },
              }}
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              aria-label="instagram"
              color="default"
              sx={{
                "&:hover": {
                  color: "#E4405F",
                },
              }}
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              aria-label="x"
              color="default"
              sx={{
                "&:hover": {
                  color: "black",
                },
              }}
            >
              <XIcon />
            </IconButton>
            <IconButton
              aria-label="pinterest"
              color="default"
              sx={{
                "&:hover": {
                  color: "#BD081C",
                },
              }}
            >
              <PinterestIcon />
            </IconButton>
          </Stack>
        </Grid>
        <Grid sx={{ paddingTop: "30px" }} container>
          <Grid xs={3}>
            <Stack direction="column" spacing={1}>
              <Typography fontWeight={900}>ABOUT</Typography>
              <Link
                href="#"
                underline="none"
                sx={{ textDecoration: "none", color: "inherit" }}
              >
                About us
              </Link>
              <Link
                href="#"
                underline="none"
                sx={{ textDecoration: "none", color: "inherit" }}
              >
                Contact us
              </Link>
            </Stack>
          </Grid>
          <Grid xs={3}>
            <Stack direction="column" spacing={1}>
              <Typography fontWeight={900}>RESOURCES</Typography>
              <Link
                href="#"
                underline="none"
                sx={{ textDecoration: "none", color: "inherit" }}
              >
                Travel Guides & Tips
              </Link>
              <Link
                href="#"
                underline="none"
                sx={{ textDecoration: "none", color: "inherit" }}
              >
                Help Resources & Articles
              </Link>
            </Stack>
          </Grid>
          <Grid xs={3}>
            <Stack direction="column" spacing={1}>
              <Typography fontWeight={900}>TIMESHARE RENTALS</Typography>
              <Link
                href="#"
                underline="none"
                sx={{ textDecoration: "none", color: "inherit" }}
              >
                Find a Timeshare to Rent
              </Link>
              <Link
                href="#"
                underline="none"
                sx={{ textDecoration: "none", color: "inherit" }}
              >
                Rent My Timeshare
              </Link>
            </Stack>
          </Grid>
          <Grid xs={3}>
            <Stack direction="column" spacing={1}>
              <Typography fontWeight={900}>FAQs</Typography>
              <Link
                href="#"
                underline="none"
                sx={{ textDecoration: "none", color: "inherit" }}
              >
                FAQ
              </Link>
            </Stack>
          </Grid>
        </Grid>
        <Grid sx={{ paddingTop: "20px" }} container>
          <Grid xs={8}>
            <Typography fontSize={13}>
              © 2024 TEP.com.{" "}
              <b style={{ color: "blue" }}>
                {" "}
                · Terms of Service · Privacy Policy{" "}
              </b>
            </Typography>
            <Typography fontSize={10}>
              TEP, Inc. is a Registered Seller of Travel in the following city:
            </Typography>
            <Typography fontSize={10}>
              Ho Chi Minh City: Postal code 700000
            </Typography>
          </Grid>
          <Grid xs={4}>
            <Typography fontSize={13}>
              All prices in Viet Nam Dong or U.S. dollars unless otherwise
              stated.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;

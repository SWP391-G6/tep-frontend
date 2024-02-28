import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { makeStyles } from "@mui/styles";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import VpnKeyIcon from "@mui/icons-material/VpnKey";

const useStyles: any = makeStyles({
  hoverContainer: {
    cursor: "pointer",
    overflow: "hidden",
    position: "relative",

    "&::before": {
      content: '""',
      position: "absolute",
      bottom: 0,
      left: "-100%",
      width: "100%",
      height: "5px",
      backgroundColor: "#00acb3",
      transition: "transform 0.5s ease-in-out",
      zIndex: 1,
      // borderRadius: "8px",
    },
    "&:hover::before": {
      transform: "translateX(100%)",
    },
  },
});
const TimesharePriceInformation = () => {
  const navigate = useNavigate();
  const classes = useStyles();

  const [openSelectTimeshareDialog, setOpenSelectTimeshareDialog] =
    useState(false);

  const handleClickOpenSelectTimeshareDialog = () => {
    setOpenSelectTimeshareDialog(true);
  };

  const handleCloseSelectTimeshareDialog = () => {
    setOpenSelectTimeshareDialog(false);
  };

  return (
    <Box>
      <Container disableGutters sx={{ textAlign: "center" }}>
        <Box
          display={"flex"}
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
        >
          <img
            src="https://cdn6.redweek.com/img/icons/icon.rental-self.svg?VFH2mcZBc6obiDgIQBmSaw"
            alt="Icon Rental"
            height={"30px"}
          />
          <Typography
            ml="10px"
            fontWeight={900}
            fontSize={18}
            lineHeight="30px"
          >
            700,000 VNĐ (100,000 VNĐ/night)
          </Typography>
        </Box>
        <Grid
          container
          flexDirection="row"
          justifyContent="center"
          alignItems="left"
        >
          <Typography
            variant="caption"
            width="100%"
            fontSize={18}
            fontWeight={700}
            color="#00acb3"
          >
            7-night stay
          </Typography>
          <Typography variant="caption" fontSize={18}>
            Check-in:
            <strong style={{ color: "#00acb3" }}> Tue, Feb 20, 2024</strong>
          </Typography>
          <Typography variant="caption" fontSize={18}>
            Check-out:
            <strong style={{ color: "#00acb3" }}> Mon, Feb 26, 2024</strong>
          </Typography>

          <Typography variant="caption" fontSize={18}>
            Cancellation policy:
            <strong style={{ color: "#00acb3" }}> Strict</strong>
          </Typography>
        </Grid>
        <Box marginTop={"9px"}>
          <img
            src="https://fininme.vn/wp-content/uploads/2022/11/logo-vi-vnpay.png"
            alt="postedby"
            height={"45 "}
            width={"80"}
            style={{ borderRadius: "10px" }}
          />
        </Box>
      </Container>

      <Container
        sx={{
          boxShadow: "0px -1px 0px 0px rgba(0, 0, 0, 0.2)",
          width: "80%",
          marginTop: "-20px",
          paddingTop: "20px",
        }}
      >
        <Grid container alignItems={"center"}>
          <Grid item xs={3} textAlign={"center"}>
            <AccountCircleIcon style={{ fontSize: "35px", color: "#00acb3" }} />
          </Grid>
          <Grid item xs={9}>
            <Typography
              variant="poster"
              color="#00acb3"
              fontSize={18}
              fontWeight={900}
            >
              Posted by Lorraine B.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              onClick={() => {
                navigate("/booking_information");
              }}
              sx={{
                width: "100%",
                height: "50px",
                marginTop: "20px",
                background: "#00acb3",
                "&:hover": {
                  backgroundColor: "#08b7bd",
                },
              }}
            >
              Request to book
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="outlined"
              sx={{
                width: "100%",
                height: "50px",
                marginTop: "20px",
                color: "#00acb3",
                "&:hover": {
                  borderColor: "#08b7bd",
                },
              }}
              onClick={handleClickOpenSelectTimeshareDialog}
            >
              Request to exchange
            </Button>
          </Grid>
        </Grid>

        <Dialog
          open={openSelectTimeshareDialog}
          onClose={handleCloseSelectTimeshareDialog}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          maxWidth="md"
          fullWidth
        >
          <DialogTitle
            sx={{ m: 0, p: 2, color: "#00acb3", fontWeight: 900 }}
            id="customized-dialog-title"
          >
            Request to exchange
          </DialogTitle>
          <IconButton
            aria-label="close"
            onClick={handleCloseSelectTimeshareDialog}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
          <DialogContent dividers>
            <Typography
              variant="caption"
              fontSize={18}
              fontWeight={500}
              gutterBottom
            >
              Select your timeshare to exchange
            </Typography>

            <Paper
              sx={{ width: "100%", padding: "10px 20px", marginTop: "10px" }}
              elevation={3}
            >
              <Grid2
                container
                direction="row"
                justifyContent="space-between"
                rowGap={2}
              >
                <Grid2
                  onClick={() => {
                    navigate(`/view_timeshare_detail/1`);
                  }}
                  xs={3.75}
                  height={350}
                >
                  <Card className={classes.hoverContainer} elevation={3}>
                    <CardMedia
                      component="img"
                      image={"https://i.ibb.co/VpBzSSn/jadehillsapa.jpg"}
                      width="320px"
                      height="100%"
                      alt="Sapa Jade Hill Resort"
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        noWrap
                        component="div"
                      ></Typography>
                      <Stack
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="center"
                        spacing={1}
                      >
                        <LocationOnIcon sx={{ color: "#00acb3" }} />
                        <Typography fontSize="16px" fontWeight={500}>
                          Lao Cai, Sapa
                        </Typography>
                      </Stack>
                      <List>
                        <ListItem disablePadding>
                          <ListItemAvatar>
                            <Avatar sx={{ backgroundColor: "#00acb3" }}>
                              <VpnKeyIcon />
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText
                            primary={
                              <Typography fontWeight={700}>
                                700.000₫ (100.000₫/night)
                              </Typography>
                            }
                            secondary={
                              <Box>
                                <Typography color="#83b3b5" fontWeight={500}>
                                  20/02/2024 - 26/02/2024
                                </Typography>
                              </Box>
                            }
                          />
                        </ListItem>
                      </List>
                    </CardContent>
                  </Card>
                </Grid2>
              </Grid2>
            </Paper>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseSelectTimeshareDialog}>Disagree</Button>
            <Button onClick={handleCloseSelectTimeshareDialog} autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </Box>
  );
};

export default TimesharePriceInformation;

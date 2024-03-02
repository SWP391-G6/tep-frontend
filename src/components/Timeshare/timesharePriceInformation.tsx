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
import { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { makeStyles } from "@mui/styles";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import timeshareAPI from "../../services/timeshare/timeshareAPI";
import Textarea from "@mui/joy/Textarea";
import { TimeshareByOwnerResponse } from "../../interfaces/timeshare/timeshareByOwnerResponse";
import dayjs from "dayjs";
import { TimeshareResponse } from "../../interfaces/timeshare/timeshareResponse";
var customParseFormat = require("dayjs/plugin/customParseFormat");
dayjs.extend(customParseFormat);
dayjs.locale("vi");
type Props = { timeshareID: any };

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
const TimesharePriceInformation = (props: Props) => {
  const navigate = useNavigate();
  const classes = useStyles();
  const [timeshareList, setTimeshareList] = useState<
    TimeshareByOwnerResponse[]
  >([]);
  const [timeshare, settimeshare] = useState<TimeshareResponse>();
  const [selectedItems, setSelectedItems] = useState(false);

  const [openSelectTimeshareDialog, setOpenSelectTimeshareDialog] =
    useState(false);
  const [openConfirmDialog, setOpenConfirmDialog] = useState(false);

  const handleClickOpenSelectTimeshareDialog = () => {
    setOpenSelectTimeshareDialog(true);
  };

  const handleCloseSelectTimeshareDialog = () => {
    setOpenSelectTimeshareDialog(false);
  };

  const handleCreateExchangeRequest = () => {};

  const handleClickOpenConfirmDialog = (timeshare: TimeshareResponse) => {
    console.log("Timeshare: ", timeshare);
    setOpenConfirmDialog(true);
  };

  const handleClickCloseConfirmDialog = () => {
    setOpenConfirmDialog(false);
  };

  useEffect(() => {
    const getTimeshareByOwner = async () => {
      let temp = [];
      const data: any = await timeshareAPI.getTimeshareByUserID(
        "6d21c5dc-56a5-4da0-98d5-4b09c31911a7"
      );
      if (data.length > 0) {
        temp = data.map((item: any) => ({ ...item, isSelected: false }));
        setTimeshareList(temp);
      }
    };
    const initUseEffect = async () => {
      await getTimeshareByOwner();
    };
    initUseEffect();
  }, []);

  const handleClick = (index: any) => {
    const newSelectedItems = timeshareList.map((item, idx) => {
      if (idx === index) {
        console.log("Item: ", item);
        return { ...item, isSelected: !item.isSelected };
      }
      return { ...item, isSelected: false };
    });
    setTimeshareList(newSelectedItems);
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
              mt={1}
            >
              Message
            </Typography>
            <Textarea
              sx={{ marginBottom: "15px" }}
              color="primary"
              disabled={false}
              minRows={2}
              placeholder="Type the message...."
              size="lg"
              variant="soft"
            />
            <Typography
              variant="caption"
              fontSize={18}
              fontWeight={500}
              gutterBottom
            >
              Select your timeshare to exchange
            </Typography>

            <Paper
              sx={{
                width: "100%",
                padding: "10px 20px",
                marginTop: "5px",
                maxHeight: "300px",
                overflowY: "auto",
              }}
              elevation={3}
            >
              <Grid2
                container
                direction="row"
                justifyContent="space-between"
                rowGap={2}
              >
                {timeshareList.map((timeshare: any, index) => {
                  return (
                    <Grid2
                      onClick={() => handleClick(index)}
                      xs={3.75}
                      height={350}
                      key={timeshare.timeshareId}

                    >
                      <Card
                        className={classes.hoverContainer}
                        elevation={timeshare.isSelected ? 7 : 1}
                      >
                        <CardMedia
                          component="img"
                          image={"https://i.ibb.co/VpBzSSn/jadehillsapa.jpg"}
                          width="320px"
                          height="100%"
                          alt={`${timeshare.timeshareName}`}
                        />
                        <CardContent>
                          <Stack
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="center"
                            spacing={1}
                            height="40px"
                          >
                            <LocationOnIcon
                              sx={{ color: "#00acb3", fontSize: "15px" }}
                            />
                            <Typography
                              fontSize="16px"
                              fontWeight={900}
                              color="#00acb3"
                            >
                              {timeshare.timeshareName}
                            </Typography>
                          </Stack>
                          <Stack
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="center"
                            spacing={1}
                            mt={1}
                          >
                            <AttachMoneyIcon
                              sx={{ color: "#00acb3", fontSize: "15px" }}
                            />
                            <Typography fontSize="16px" fontWeight={300}>
                              {timeshare.price} - ({timeshare.nights} nights)
                            </Typography>
                          </Stack>
                          <Stack
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="center"
                            spacing={1}
                            mt={1}
                          >
                            <AccessTimeIcon
                              sx={{ color: "#00acb3", fontSize: "15px" }}
                            />
                            <Typography fontSize="16px" fontWeight={300}>
                              {dayjs(timeshare.dateStart)
                                .format("DD-MM-YYYY")
                                .toString()}{" "}
                              -{" "}
                              {dayjs(timeshare.dateEnd)
                                .format("DD-MM-YYYY")
                                .toString()}
                            </Typography>
                          </Stack>
                        </CardContent>
                      </Card>
                    </Grid2>
                  );
                })}
              </Grid2>
            </Paper>
          </DialogContent>
          <DialogActions>
            <Button
              sx={{ color: "#00acb3" }}
              onClick={handleCloseSelectTimeshareDialog}
            >
              Exchange
            </Button>
            <Button
              sx={{ color: "#00acb3" }}
              onClick={handleCloseSelectTimeshareDialog}
            >
              Cancel
            </Button>
          </DialogActions>
        </Dialog>

        <Dialog
          open={openConfirmDialog}
          onClose={handleClickCloseConfirmDialog}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Confirm to exchange!"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Do you want to exchange this timeshare?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
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
                handleCreateExchangeRequest();
                handleClickCloseConfirmDialog();
              }}
              autoFocus
            >
              Yes
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
              onClick={handleClickCloseConfirmDialog}
            >
              No
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </Box>
  );
};

export default TimesharePriceInformation;

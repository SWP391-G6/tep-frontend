import { Controller, SubmitHandler, useForm } from "react-hook-form";
import ErrorMessage from "../Error/errorMessage";
import {
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
  Paper,
  Stack,
  Theme,
  Typography,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate, useParams } from "react-router-dom";
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
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { TimeshareResponse } from "../../interfaces/timeshare/timeshareResponse";
import { CreateExchangeRequest } from "../../interfaces/request/createExchangeRequest";
import { isEmpty } from "lodash";
import InstructMessage from "../Instruct/instructMessage";
import requestAPI from "../../services/request/requestAPI";
import { ToastContainer, toast } from "react-toastify";
import moment from "moment";
import { TimeshareDetailResponse } from "../../interfaces/timeshare/timeshareDetailResponse";
import { formatNumber } from "../../helpers/numberHelpers";
import { USER_ID_KEY, USER_TOKEN_KEY } from "../../constant";

var customParseFormat = require("dayjs/plugin/customParseFormat");

dayjs.extend(customParseFormat);
dayjs.locale("en");
type Props = { timeshareID: any; timeshare: TimeshareDetailResponse };

const useStyles: any = makeStyles((theme: Theme) => ({
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
  selectedItem: {
    borderRadius: "5px solid #00acb3",
  },
}));

const validationSchema = yup.object({
  message: yup.string().required("Message can't be empty!"),
});

const TimesharePriceInformation = (props: Props) => {
  const userID = JSON.parse(localStorage.getItem(USER_ID_KEY)!);
  const [timeshareID, setTimeshareID] = useState("");
  const navigate = useNavigate();
  const classes = useStyles();
  const token = JSON.parse(localStorage.getItem(USER_TOKEN_KEY)!);
  const [timeshareList, setTimeshareList] = useState<
    TimeshareByOwnerResponse[]
  >([]);
  const [openSelectTimeshareDialog, setOpenSelectTimeshareDialog] =
    useState(false);
  const [openConfirmDialog, setOpenConfirmDialog] = useState(false);

  const handleClickOpenSelectTimeshareDialog = () => {
    setOpenSelectTimeshareDialog(true);
  };

  const handleCloseSelectTimeshareDialog = () => {
    setOpenSelectTimeshareDialog(false);
  };

  const handleClickOpenConfirmDialog = () => {
    setOpenConfirmDialog(true);
  };

  const handleClickCloseConfirmDialog = () => {
    setOpenConfirmDialog(false);
  };

  useEffect(() => {
    const getTimeshareByOwner = async () => {
      let temp = [];
      const data: any = await timeshareAPI.getTimeshareByUserID(userID);
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

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data: CreateExchangeRequest) => {
    try {
      const response: any = await requestAPI.createExchangeRequest({
        request_by: userID,
        timeshare_request_id: timeshareID,
        timeshare_response_id: props.timeshareID,
        message: data.message,
      });
      if (response) {
        toast.success("New request will be sent to the owner!", {
          position: "top-center",
        });
        return;
      }
      toast.error("Exchange failed!", {
        position: "top-center",
      });
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const handleClick = (index: any) => {
    const newSelectedItems = timeshareList.map((item, idx) => {
      if (idx === index) {
        setTimeshareID(item.timeshareId);
        return { ...item, isSelected: !item.isSelected };
      }
      return { ...item, isSelected: false };
    });
    setTimeshareList(newSelectedItems);
  };

  return (
    <Box>
      <Container disableGutters sx={{ textAlign: "center", mt: 3 }}>
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
            fontSize={20}
            lineHeight="30px"
          >
            {formatNumber(props.timeshare.price)} VNĐ ({props.timeshare.nights}{" "}
            nights)
          </Typography>
        </Box>
        <Grid
          container
          flexDirection="row"
          justifyContent="center"
          alignItems="left"
          columnGap={2}
        >
          <Typography
            variant="caption"
            width="100%"
            fontSize={16}
            fontWeight={700}
            color="#00acb3"
          >
            {formatNumber(props.timeshare.price / props.timeshare.nights)}{" "}
            VNĐ/night
          </Typography>
          <Typography variant="caption" fontSize={18} width="100%">
            Check-in:{" "}
            <strong>
              {dayjs(props.timeshare.dateStart)
                .format("DD MMM YYYY")
                .toString()}
            </strong>
          </Typography>
          <Typography variant="caption" fontSize={18} width="100%">
            Check-out:{" "}
            <strong>
              {dayjs(props.timeshare.dateEnd).format("DD MMM YYYY").toString()}
            </strong>
          </Typography>
        </Grid>
        <Box marginTop={"20px"}>
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
            <AccountCircleIcon style={{ fontSize: "30px", color: "#00acb3" }} />
          </Grid>
          <Grid item xs={9}>
            <Typography
              variant="poster"
              color="#00acb3"
              fontSize={16}
              fontWeight={900}
            >
              Posted by {props.timeshare.postBy.fullname}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              onClick={() => {
                {
                  token ? navigate("booking_information") : navigate("/login");
                }
              }}
              sx={{
                width: "100%",
                height: "50px",
                marginTop: "20px",
                background: "#00acb3",
                border: "#00acb3",
                "&:hover": {
                  backgroundColor: "#08b7bd",
                },
              }}
            >
              Request to book
            </Button>
          </Grid>
          <Grid item xs={12}>
            {timeshareList.length >= 0 && isEmpty(timeshareList) ? (
              <Button
                disabled
                variant="outlined"
                sx={{
                  width: "100%",
                  height: "50px",
                  marginTop: "20px",
                  color: "#00acb3",
                  borderColor: "#00acb3",
                  "&:hover": {
                    borderColor: "#08b7bd",
                  },
                }}
              >
                Request to exchange
              </Button>
            ) : (
              <Button
                variant="outlined"
                sx={{
                  width: "100%",
                  height: "50px",
                  marginTop: "20px",
                  color: "#00acb3",
                  borderColor: "#00acb3",
                  "&:hover": {
                    borderColor: "#08b7bd",
                  },
                }}
                onClick={handleClickOpenSelectTimeshareDialog}
              >
                Request to exchange
              </Button>
            )}
          </Grid>
        </Grid>
        <form onSubmit={handleSubmit(handleClickOpenConfirmDialog)}>
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
                {...register("message")}
              />
              {errors["message"]?.message ? (
                <ErrorMessage message={errors["message"].message} />
              ) : null}
              <Typography
                variant="caption"
                fontSize={18}
                fontWeight={500}
                gutterBottom
              >
                Select your timeshare to exchange
              </Typography>
              {!timeshareID && isEmpty(timeshareID) ? (
                <InstructMessage
                  message={"Please select your timeshare you want to exchange!"}
                />
              ) : null}
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
                          className={
                            timeshare.isSelected
                              ? classes.selectedItem
                              : classes.hoverContainer
                          }
                          elevation={timeshare.isSelected ? 7 : 1}
                        >
                          <CardMedia
                            component="img"
                            image={timeshare.image_url}
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
                onClick={() => {
                  handleClickOpenConfirmDialog();
                }}
                type="submit"
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
                  handleClickCloseConfirmDialog();
                  handleCloseSelectTimeshareDialog();
                  let formValue = getValues();
                  if (formValue || !isEmpty(formValue)) {
                    onSubmit(formValue);
                  }
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
        </form>
      </Container>
      <ToastContainer
        autoClose={2000}
        style={{ marginTop: "50px", width: "400px" }}
      />
    </Box>
  );
};

export default TimesharePriceInformation;

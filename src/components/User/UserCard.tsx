import * as React from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  IconButton,
  Paper,
  Slide,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { UserResponse } from "../../interfaces/user/userResponse";
import userAPI from "../../services/user/userAPI";
import { USER_ID_KEY } from "../../constant";
import { isEmpty } from "lodash";
import { Link, useNavigate } from "react-router-dom";
import { TransitionProps } from "@mui/material/transitions";
import CloseIcon from "@mui/icons-material/Close";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import CheckIcon from "@mui/icons-material/Check";
import { purple, yellow } from "@mui/material/colors";
import { formatNumber } from "../../helpers/numberHelpers";
import { ServicePackResponse } from "../../interfaces/servicepack/ServivePackResponse";
import servicePackAPI from "../../services/servicepack/servicePackAPI";
import { ToastContainer, toast } from "react-toastify";
import transactionHistoryAPI from "../../services/transactionHistory/transactionHistoryAPI";
import { isTransactionValid } from "../../helpers/dateHelpers";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const UserCard = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const userID = JSON.parse(localStorage.getItem(USER_ID_KEY)!);
  const [servicePack, setServicePack] = useState<ServicePackResponse>({
    service_id: "",
    ad_duration: 0,
    allow_post: false,
    flag: false,
    name: "",
    priority: false,
    service_code: "",
    service_price: 0,
  });
  const [basicPack, setBasicPack] = useState<ServicePackResponse>({
    service_id: "",
    ad_duration: 0,
    allow_post: false,
    flag: false,
    name: "",
    priority: false,
    service_code: "",
    service_price: 0,
  });
  const [premiumPack, setPremiumPack] = useState<ServicePackResponse>({
    service_id: "",
    ad_duration: 0,
    allow_post: false,
    flag: false,
    name: "",
    priority: false,
    service_code: "",
    service_price: 0,
  });

  const [userProfile, setUserProfile] = useState<UserResponse>({
    user_id: "",
    user_name: "",
    password: "",
    fullname: "",
    email: "",
    phone: "",
    dob: new Date(),
    gender: false,
    status: false,
    role: "",
  });

  useEffect(() => {
    const getUserByUserID = async () => {
      const data: any = await userAPI.getUserByID(userID);
      if (data && !isEmpty(data)) {
        setUserProfile(data);
      }
    };
    const getTransactionHistoryByUserID = async () => {
      const data: any =
        await transactionHistoryAPI.getTransactionHistoryByUserID(userID);
      if (data.length > 0) {
        if (isTransactionValid(data[0].expireDate))
          setServicePack(data[0].service_id);
      }
    };
    const getAllServicePack = async () => {
      const data: any = await servicePackAPI.getAllServicePack();
      if (data && data.length > 0) {
        data.map((item: ServicePackResponse) => {
          if (item.service_code === "00") {
            setBasicPack(item);
          }
          if (item.service_code === "01") {
            setPremiumPack(item);
          }
        });
      }
    };

    const initUseEffect = async () => {
      Promise.all([
        getUserByUserID(),
        getAllServicePack(),
        getTransactionHistoryByUserID(),
      ]);
    };
    initUseEffect();
  }, []);

  const handleRegisterPack = async (pack_id: string, price: number) => {
    try {
      const response: any = await servicePackAPI.checkOutServicePack({
        service_id: pack_id,
        transaction_fee: price,
        user_id: userID,
      });
      if (response && response.code === "00") {
        toast.success("Register Pack Successful!", {
          position: "top-center",
        });
        window.open(`${response.data}`);
      } else {
        toast.error("Register Pack!", {
          position: "top-center",
        });
      }
    } catch (error) {
      console.log("Error at handleRegisterPack() ", error);
    }
  };
  return (
    <CardContent
      sx={{
        backgroundColor: "white",
        border: "solid 1px ",
        borderColor: "rgba(0, 0, 0, 0.2)",
      }}
    >
      <CardContent
        style={{
          display: "contents",
          alignItems: "center",
          height: "300px",
        }}
      >
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Avatar
            sx={{ backgroundColor: "#00acb3", width: "50px", height: "50px" }}
          />
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          gap={1}
        >
          <Grid>
            <Typography
              variant="h5"
              fontWeight={"bold"}
              marginTop={"15px"}
              sx={{ height: "32px", width: "100%" }}
            >
              {userProfile.fullname}
            </Typography>
          </Grid>
          <Typography
            variant="subtitle2"
            align="center"
            sx={{ width: "100%", fontSize: "16px", color: "#00acb3" }}
          >
            {userProfile.role === "member" ? "Member" : userProfile.role}
          </Typography>
          <Grid>
            <Link
              style={{
                color: "#00acb3",
                width: "100%",
                textDecoration: "NONE",
              }}
              to="/member/profile/my_profile"
            >
              Edit my profile
            </Link>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          {servicePack.service_code === "01" ? (
            <Paper
              elevation={10}
              sx={{
                p: 2,
                border: "2px solid #00acb3",
                textAlign: "center",
              }}
            >
              <Typography fontWeight={900} fontSize={16} color={"#00acb3"}>
                {servicePack.name}
              </Typography>
            </Paper>
          ) : servicePack.service_code === "02" ? (
            <Paper
              elevation={10}
              sx={{
                p: 2,
                border: "2px solid #00acb3",
                textAlign: "center",
              }}
            >
              <Typography fontWeight={900} fontSize={16} color={"#00acb3"}>
                {servicePack.name}
              </Typography>
            </Paper>
          ) : (
            <Button
              sx={{
                width: "90%",
                height: "47px",
                backgroundColor: "#00acb3",
                "&:hover": {
                  backgroundColor: "#08b7bd",
                },
              }}
              color="primary"
              variant="contained"
              onClick={handleClickOpen}
            >
              Register Pack
            </Button>
          )}
        </Grid>
      </CardActions>

      <Dialog
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        keepMounted
        maxWidth="md"
      >
        <DialogTitle
          sx={{ color: "#00acb3", fontSize: "22px", fontWeight: 900 }}
          id="alert-dialog-title"
        >
          {"Register Your Pack"}
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <Divider sx={{ width: "100%" }} />
        <DialogContent>
          <Grid2
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            columns={12}
            width={800}
            gap={5}
          >
            <Grid2 xs={5}>
              <Card
                sx={{
                  height: 300,
                  width: "100%",
                  padding: "5px",
                  border: "2px solid",
                  borderColor: purple[500],
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
                elevation={10}
              >
                <Grid2
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  p={1}
                  bgcolor={purple[500]}
                >
                  <Stack direction={"row"}>
                    <AppRegistrationIcon sx={{ color: "white" }} />
                    <Typography
                      ml={0.5}
                      fontSize={16}
                      fontWeight={900}
                      color={"white"}
                    >
                      {basicPack.name}
                    </Typography>
                  </Stack>
                </Grid2>
                <Box p={1} mt={1} height={"100%"}>
                  <Typography
                    textAlign="center"
                    fontSize={18}
                    fontWeight={900}
                    color={purple[500]}
                  >
                    {formatNumber(basicPack.service_price)} VNĐ
                  </Typography>
                  <Stack direction={"row"} mt={2.5}>
                    <CheckIcon sx={{ color: purple[500] }} />
                    <Typography ml={1}>
                      Duration {basicPack.ad_duration} days
                    </Typography>
                  </Stack>
                  <Stack direction={"row"} mt={1}>
                    <CheckIcon sx={{ color: purple[500] }} />
                    <Typography ml={1}>Post Timeshare for rent</Typography>
                  </Stack>
                </Box>
                <Button
                  variant="contained"
                  fullWidth
                  onClick={() => {
                    handleRegisterPack(
                      basicPack.service_id,
                      basicPack.service_price
                    );
                    handleClose();
                  }}
                  sx={{
                    bgcolor: purple[500],
                    "&:hover": {
                      backgroundColor: purple[600],
                    },
                  }}
                >
                  Register
                </Button>
              </Card>
            </Grid2>

            <Grid2 xs={5}>
              <Card
                sx={{
                  height: 300,
                  width: "100%",
                  padding: "5px",
                  border: "2px solid",
                  borderColor: yellow[500],
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
                elevation={10}
              >
                <Grid2
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  p={1}
                  bgcolor={yellow[600]}
                >
                  <Stack direction={"row"}>
                    <AppRegistrationIcon sx={{ color: "white" }} />
                    <Typography
                      ml={0.5}
                      fontSize={16}
                      fontWeight={900}
                      color={"white"}
                    >
                      {premiumPack.name}
                    </Typography>
                  </Stack>
                </Grid2>
                <Box p={1} mt={1} height={"100%"}>
                  <Typography
                    textAlign="center"
                    fontSize={18}
                    fontWeight={900}
                    color={yellow[600]}
                  >
                    {formatNumber(premiumPack.service_price)} VNĐ
                  </Typography>
                  <Stack direction={"row"} mt={2.5}>
                    <CheckIcon sx={{ color: yellow[600] }} />
                    <Typography ml={1}>
                      Duration {premiumPack.ad_duration} days
                    </Typography>
                  </Stack>
                  <Stack direction={"row"} mt={1}>
                    <CheckIcon sx={{ color: yellow[600] }} />
                    <Typography ml={1}>Post Timeshare for rent</Typography>
                  </Stack>
                  <Stack direction={"row"} mt={1}>
                    <CheckIcon sx={{ color: yellow[600] }} />
                    <Typography ml={1}>"New" flag enable </Typography>
                  </Stack>
                  <Stack direction={"row"} mt={1}>
                    <CheckIcon sx={{ color: yellow[600] }} />
                    <Typography ml={1}>Priority timeshare showing</Typography>
                  </Stack>
                </Box>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    bgcolor: yellow[600],
                    "&:hover": {
                      backgroundColor: yellow[700],
                    },
                  }}
                  onClick={() => {
                    handleRegisterPack(
                      premiumPack.service_id,
                      premiumPack.service_price
                    );
                    handleClose();
                  }}
                >
                  Register
                </Button>
              </Card>
            </Grid2>
          </Grid2>
        </DialogContent>
      </Dialog>
      <ToastContainer
        autoClose={2000}
        style={{ marginTop: "50px", width: "350px" }}
      />
    </CardContent>
  );
};

export default UserCard;

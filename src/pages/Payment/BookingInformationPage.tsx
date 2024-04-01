import {
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import BackButton from "../../components/Button/backButton";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import TimeshareInformationComponent from "../../components/BookingInformation/timeshareInformationComponent";
import { useLocation, useNavigate } from "react-router";
import * as yup from "yup";
import { styled } from "@mui/system";
import { makeStyles } from "@mui/styles";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useRef, useState } from "react";
import ErrorMessage from "../../components/Error/errorMessage";
import { USER_ID_KEY } from "../../constant";
import { formatNumber } from "../../helpers/numberHelpers";
import { VNPAYInputFormRequest } from "../../interfaces/booking/vnpayInputFormRequest";
import { isEmpty } from "lodash";
import dayjs from "dayjs";
import vnpayAPI from "../../services/payment/vnpayAPI";
import { ToastContainer, toast } from "react-toastify";
import { cityList } from "../../utils/cities";
import InstructMessage from "../../components/Instruct/instructMessage";
var customParseFormat = require("dayjs/plugin/customParseFormat");
dayjs.extend(customParseFormat);
dayjs.locale("en");

const CustomBorderTextField = styled(TextField)`
  & label.Mui-focused {
    color: #00acb3;
  }
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: #00acb3;
    }
  }
`;

const useStyles: any = makeStyles({
  select: {
    "&:before": {
      borderColor: "#00acb3",
    },
    "&:after": {
      borderColor: "#00acb3",
    },
    "&:not(.Mui-disabled):hover::before": {
      borderColor: "#00acb3",
    },
  },
  icon: {
    fill: "#00acb3",
  },
  root: {
    color: "#00acb3",
  },
});

type Inputs = {
  postal_code: string;
  state: string;
  street: string;
  telephone: string;
  full_name: string;
};

const phoneRegExp = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
const validationSchema = yup.object({
  postal_code: yup.string().trim().required("Postal code can't be blank!"),
  state: yup.string().trim().required("Status can't be blank!"),
  street: yup.string().trim().required("Street can't be blank!"),
  telephone: yup
    .string()
    .trim()
    .required("Phone number can't be blank!")
    .matches(phoneRegExp, "Phone number contain 10 number!"),
  full_name: yup.string().trim().required("Full name can't be blank!"),
});

const BookingInformationPage = () => {
  let timeoutRef = useRef<any>();
  const navigate = useNavigate()
  const { state } = useLocation();
  const [adults, setAdults] = useState("");
  const [children, setChildren] = useState("");
  const [openConfirmDialog, setOpenConfirmDialog] = useState(false);
  const classes = useStyles();
  const [citySelectError, setCitySelectError] = useState(true);
  const [city, setCity] = useState("");
  const userID = JSON.parse(localStorage.getItem(USER_ID_KEY)!);
  var currentDay = dayjs();
  let createDay = currentDay.toDate();

  const handleSelectNumberAdults = (event: SelectChangeEvent) => {
    setAdults(event.target.value as string);
    setChildren("");
    setCity("");
    reset();
  };

  const handleSelectNumberChildren = (event: SelectChangeEvent) => {
    setChildren(event.target.value as string);
    setCity("");
    reset();
  };

  const handleClickOpenConfirmDialog = () => {
    setOpenConfirmDialog(true);
  };

  const handleClickCloseConfirmDialog = () => {
    setOpenConfirmDialog(false);
  };

  const handleChange = (event: SelectChangeEvent) => {
    setCitySelectError(false);
    setCity(event.target.value as string);
  };

  const lengthOfArray = state.roomType.sleeps;
  const sleeps = [];

  // Tạo mảng số từ 1 đến độ dài mảng
  for (let i = 1; i <= lengthOfArray; i++) {
    sleeps.push(i);
  }

  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    mode: "onTouched",
    resolver: yupResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log("1234");
    try {
      const response: any = await vnpayAPI.checkout({
        adults: adults,
        children: children,
        city: city,
        country: "Việt Nam",
        create_date: createDay,
        payment_status: true,
        postal_code: data.postal_code,
        state: data.state,
        status: true,
        street: data.street,
        telephone: data.telephone,
        total: state.timeshare.price,
        full_name: data.full_name,
        payment_method: "1",
        user_id: userID,
        timeshare_id: state.timeshare.timeshareId,
      });
      if (response && response.code === "00") {
        toast.success("Checkout Successful!", {
          position: "top-center",
        });
        timeoutRef.current = setTimeout(() => {
          navigate("/member/profile//my_booking_history");
        }, 1700);
        window.open(`${response.data}`);
      } else {
        toast.error("Checkout Failed!", {
          position: "top-center",
        });
      }
    } catch (error) {
      console.log("Error at onSubmit function: ", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(() => {
        if (citySelectError === true) {
          return;
        }

        if (errors && isEmpty(errors)) {
          handleClickOpenConfirmDialog();
        }
      })}
    >
      <Container
        disableGutters
        maxWidth="xl"
        sx={{ height: "100%", zIndex: 1 }}
      >
        <Grid2 container gap={2} padding="10px 50px 20px 50px">
          <Grid2 xs={12}>
            <BackButton />
            <Typography variant="subtitle1" fontSize={26} fontWeight={900}>
              Booking Request
            </Typography>
          </Grid2>

          <Grid2
            xs={8}
            sx={{
              padding: "30px",
              boxShadow: "1px 1px 2px 2px rgba(0, 0, 0, 0.2)",
              backgroundColor: "#ffffff",
            }}
          >
            <Box>
              <Grid2 container>
                <Grid2 xs={12}>
                  <Typography>
                    This contact information will be shared with the owner in
                    order to complete your reservation.
                  </Typography>
                </Grid2>
                <Grid2 xs={12} mt={2}>
                  <FormControl sx={{ width: "220px" }}>
                    <InputLabel id="select-adults-label">Adults</InputLabel>
                    <Select
                      labelId="select-adults-label"
                      id="select-adults"
                      className={classes.select}
                      value={adults}
                      label="Adults"
                      onChange={handleSelectNumberAdults}
                    >
                      <MenuItem value="">Select</MenuItem>
                      {sleeps.map((item, idx) => {
                        return (
                          <MenuItem key={idx} value={idx + 1}>
                            {idx + 1} Person
                          </MenuItem>
                        );
                      })}
                    </Select>
                    <FormHelperText sx={{ color: "#00acb3" }}>
                      Number of adults!
                    </FormHelperText>
                  </FormControl>

                  {adults ? (
                    <FormControl
                      sx={{
                        width: "220px",
                        marginLeft: "20px",
                        borderBottomColor: "#00acb3",
                        borderColor: "#00acb3",
                      }}
                    >
                      <InputLabel id="select-children-label">
                        Children
                      </InputLabel>
                      <Select
                        labelId="select-children-label"
                        id="select-children"
                        value={children}
                        label="Children"
                        sx={{ borderColor: "#00acb3" }}
                        onChange={handleSelectNumberChildren}
                      >
                        <MenuItem value="">Select</MenuItem>
                        <MenuItem value={1}>1 kid</MenuItem>
                        <MenuItem value={2}>2 kids</MenuItem>
                      </Select>
                      <FormHelperText sx={{ color: "#00acb3" }}>
                        Number of children (Under 18)!
                      </FormHelperText>
                    </FormControl>
                  ) : (
                    <FormControl
                      sx={{
                        width: "220px",
                        marginLeft: "20px",
                        borderBottomColor: "#00acb3",
                        borderColor: "#00acb3",
                      }}
                      disabled
                    >
                      <InputLabel id="select-children-label">
                        Children
                      </InputLabel>
                      <Select
                        labelId="select-children-label"
                        id="select-children"
                        value={children}
                        label="Children"
                        sx={{ borderColor: "#00acb3" }}
                        onChange={handleSelectNumberChildren}
                      >
                        <MenuItem value="">Select</MenuItem>
                        <MenuItem value={1}>1 kid</MenuItem>
                        <MenuItem value={2}>2 kids</MenuItem>
                      </Select>
                      <FormHelperText sx={{ color: "#00acb3" }}>
                        Number of children (Under 18)!
                      </FormHelperText>
                    </FormControl>
                  )}

                  <Divider sx={{ width: "100%", marginTop: "20px" }} />
                </Grid2>

                {adults && children ? (
                  <Grid2 xs={12} mt={1}>
                    <Typography
                      variant="subtitle1"
                      fontSize={22}
                      fontWeight={900}
                      color="#00acb3"
                    >
                      Primary Guest
                    </Typography>
                    <Grid2 mt={1}>
                      <CustomBorderTextField
                        label="Full Name"
                        variant="outlined"
                        sx={{ width: "100%" }}
                        {...register("full_name")}
                      />
                      {errors["full_name"]?.message ? (
                        <ErrorMessage message={errors["full_name"].message} />
                      ) : null}
                      <Typography
                        sx={{ marginTop: "10px" }}
                        fontSize="0.75rem"
                        color="#00acb3"
                      >
                        The name you would like the reservation placed under.
                        Guest must be at least 18 years old.
                      </Typography>
                    </Grid2>
                    <Grid2 direction="row" xs={12} mt={3}>
                      <CustomBorderTextField
                        variant="outlined"
                        sx={{ width: "288px" }}
                        label="Phone"
                        {...register("telephone")}
                        InputProps={{
                          startAdornment: (
                            <>
                              <img
                                src={
                                  "https://i.ibb.co/xGsBjkY/vietnamflag-removebg-preview.png"
                                }
                                alt="Việt Nam Flag"
                                width={30}
                                height={30}
                              />
                              <Typography
                                fontSize={14}
                                sx={{ marginLeft: "2px", marginRight: "6px" }}
                              >
                                (+84)
                              </Typography>
                              <Divider
                                orientation="vertical"
                                flexItem
                                variant="middle"
                                sx={{ marginRight: "7px" }}
                              />
                            </>
                          ),
                        }}
                      />
                      {errors["telephone"]?.message ? (
                        <ErrorMessage message={errors["telephone"].message} />
                      ) : null}
                      <CustomBorderTextField
                        disabled
                        variant="outlined"
                        label="Country"
                        value="Việt Nam"
                        sx={{ width: "100%", marginTop: "24px" }}
                      />
                    </Grid2>
                    <Grid2 xs={12} mt={3}>
                      <CustomBorderTextField
                        variant="outlined"
                        label="Street"
                        sx={{ width: "100%" }}
                        {...register("street")}
                      />
                      {errors["street"]?.message ? (
                        <ErrorMessage message={errors["street"].message} />
                      ) : null}
                    </Grid2>
                    <Grid2 container xs={12} gap={2} sx={{ height: "90px" }}>
                      <Grid2 xs={5} mt={3} width={280}>
                        <FormControl fullWidth>
                          <InputLabel id="cities-select-label">City</InputLabel>
                          <Select
                            labelId="cities-select-label"
                            id="cities-select"
                            value={city}
                            label="City"
                            onChange={handleChange}
                            MenuProps={{
                              PaperProps: { sx: { maxHeight: 250 } },
                            }}
                          >
                            {cityList.map((city) => {
                              return (
                                <MenuItem key={city.code} value={city.name}>
                                  {city.name}
                                </MenuItem>
                              );
                            })}
                          </Select>
                        </FormControl>
                        {citySelectError === true ? (
                          <React.Fragment>
                            <InstructMessage
                              message={"Please select the city!"}
                            />
                          </React.Fragment>
                        ) : null}
                      </Grid2>
                      <Grid2 xs={3} mt={3} width={280}>
                        <CustomBorderTextField
                          variant="outlined"
                          label="State/Province"
                          fullWidth
                          {...register("state")}
                        />
                        {errors["state"]?.message ? (
                          <ErrorMessage message={errors["state"].message} />
                        ) : null}
                      </Grid2>
                      <Grid2 xs={3} mt={3} width={305}>
                        <CustomBorderTextField
                          variant="outlined"
                          label="Zip/Postal code"
                          fullWidth
                          {...register("postal_code")}
                        />
                        {errors["postal_code"]?.message ? (
                          <ErrorMessage
                            message={errors["postal_code"].message}
                          />
                        ) : null}
                      </Grid2>
                    </Grid2>
                  </Grid2>
                ) : (
                  //Check Disable
                  <Grid2 xs={12} mt={1}>
                    <Typography
                      variant="subtitle1"
                      fontSize={22}
                      fontWeight={900}
                      color="#00acb3"
                    >
                      Primary Guest
                    </Typography>
                    <Grid2 mt={1}>
                      <CustomBorderTextField
                        disabled
                        label="Full Name"
                        variant="outlined"
                        sx={{ width: "100%" }}
                        {...register("full_name")}
                      />
                      {errors["full_name"]?.message ? (
                        <ErrorMessage message={errors["full_name"].message} />
                      ) : null}
                      <Typography
                        sx={{ marginTop: "10px" }}
                        fontSize="0.75rem"
                        color="#00acb3"
                      >
                        The name you would like the reservation placed under.
                        Guest must be at least 18 years old.
                      </Typography>
                    </Grid2>
                    <Grid2 direction="row" xs={12} mt={3}>
                      <CustomBorderTextField
                        disabled
                        variant="outlined"
                        sx={{ width: "288px" }}
                        label="Phone"
                        {...register("telephone")}
                        InputProps={{
                          startAdornment: (
                            <>
                              <img
                                src={
                                  "https://i.ibb.co/xGsBjkY/vietnamflag-removebg-preview.png"
                                }
                                alt="Việt Nam Flag"
                                width={30}
                                height={30}
                              />
                              <Typography
                                fontSize={14}
                                sx={{ marginLeft: "2px", marginRight: "6px" }}
                              >
                                (+84)
                              </Typography>
                              <Divider
                                orientation="vertical"
                                flexItem
                                variant="middle"
                                sx={{ marginRight: "7px" }}
                              />
                            </>
                          ),
                        }}
                      />
                      {errors["telephone"]?.message ? (
                        <ErrorMessage message={errors["telephone"].message} />
                      ) : null}
                      <CustomBorderTextField
                        disabled
                        variant="outlined"
                        label="Country"
                        value="Việt Nam"
                        sx={{ width: "100%", marginTop: "24px" }}
                      />
                    </Grid2>
                    {/* <Grid2 xs={12} mt={3}>
                <CustomBorderTextField
                  variant="outlined"
                  label="Country"
                  value="Viet Nam"
                  sx={{
                    width: "300px",
                  }}
                />
              </Grid2> */}
                    <Grid2 xs={12} mt={3}>
                      <CustomBorderTextField
                        disabled
                        variant="outlined"
                        label="Street"
                        sx={{ width: "100%" }}
                        {...register("street")}
                      />
                      {errors["street"]?.message ? (
                        <ErrorMessage message={errors["street"].message} />
                      ) : null}
                    </Grid2>
                    <Grid2 container xs={12} gap={2} sx={{ height: "90px" }}>
                      <Grid2 xs={5} mt={3} width={280}>
                        <FormControl fullWidth>
                          <InputLabel id="cities-select-label">City</InputLabel>
                          <Select
                            disabled
                            labelId="cities-select-label"
                            id="cities-select"
                            value={city}
                            label="City"
                            onChange={handleChange}
                            MenuProps={{
                              PaperProps: { sx: { maxHeight: 250 } },
                            }}
                          >
                            {cityList.map((city) => {
                              return (
                                <MenuItem key={city.code} value={city.name}>
                                  {city.name}
                                </MenuItem>
                              );
                            })}
                          </Select>
                        </FormControl>
                        {citySelectError === true ? (
                          <React.Fragment>
                            <InstructMessage
                              message={"Please select the city!"}
                            />
                          </React.Fragment>
                        ) : null}
                      </Grid2>
                      <Grid2 xs={3} mt={3} width={280}>
                        <CustomBorderTextField
                          disabled
                          variant="outlined"
                          label="State/Province"
                          fullWidth
                          {...register("state")}
                        />
                        {errors["state"]?.message ? (
                          <ErrorMessage message={errors["state"].message} />
                        ) : null}
                      </Grid2>
                      <Grid2 xs={3} mt={3} width={305}>
                        <CustomBorderTextField
                          disabled
                          variant="outlined"
                          label="Zip/Postal code"
                          fullWidth
                          {...register("postal_code")}
                        />
                        {errors["postal_code"]?.message ? (
                          <ErrorMessage
                            message={errors["postal_code"].message}
                          />
                        ) : null}
                      </Grid2>
                    </Grid2>
                  </Grid2>
                )}
              </Grid2>
            </Box>
          </Grid2>
          <Grid2
            xs={3.5}
            sx={{
              height: "100%",
              position: "sticky",
              top: "10px",
              zIndex: 2,
              boxShadow: "1px 1px 2px 2px rgba(0, 0, 0, 0.2)",
              padding: "20px",
              backgroundColor: "#ffffff",
            }}
          >
            <TimeshareInformationComponent
              timeshare={state.timeshare}
              roomType={state.roomType}
            />
          </Grid2>
          <Grid2
            xs={8}
            sx={{
              boxShadow: "1px 1px 2px 2px rgba(0, 0, 0, 0.2)",
              backgroundColor: "#ffffff",
              padding: "30px",
            }}
          >
            <Box>
              <Grid2 container>
                <Grid2 xs={5}>
                  <Typography
                    variant="subtitle1"
                    fontSize={22}
                    fontWeight={900}
                    color="#00acb3"
                  >
                    Payment
                  </Typography>
                  <Paper
                    elevation={5}
                    sx={{
                      border: "1px solid",
                      cursor: "pointer",
                      width: "270px",
                      height: "250px",
                      marginTop: "10px",
                    }}
                  >
                    <img
                      src="https://i.ibb.co/KD5nzLV/VNPay-Logo.png"
                      alt="Jade Hill Resort"
                      width={270}
                      height={250}
                    />
                  </Paper>
                </Grid2>
              </Grid2>
            </Box>
          </Grid2>

          <Grid2
            xs={8}
            sx={{
              boxShadow: "1px 1px 2px 2px rgba(0, 0, 0, 0.2)",
              backgroundColor: "#ffffff",
              padding: "30px",
            }}
          >
            <Box>
              <Grid2 container>
                <Grid2 xs={12}>
                  <Typography
                    variant="subtitle1"
                    fontSize={22}
                    fontWeight={900}
                    color="#00acb3"
                  >
                    Payment Summary
                  </Typography>
                </Grid2>
                <Grid2 xs={12} container>
                  <Grid2 xs={6}>
                    <Typography variant="subtitle1" fontWeight={900}>
                      Rental Booking
                    </Typography>
                    {/* <Typography variant="subtitle1" fontWeight={900}>
              Service Fee
            </Typography> */}
                    {/* <Typography variant="subtitle1" fontWeight={900}>
              TEP Membership
            </Typography> */}
                  </Grid2>
                  <Grid2 xs={6} textAlign="right">
                    <Typography fontWeight={300}>
                      {formatNumber(state.timeshare.price)} VNĐ
                    </Typography>
                    {/* <Typography fontWeight={300}>20.000 ₫</Typography> */}
                    {/* <Typography fontWeight={300} color={red[500]}>
                -20.000 ₫
              </Typography> */}
                  </Grid2>
                  <Divider sx={{ width: "100%", margin: "15px 0" }} />
                </Grid2>
                <Grid2 xs={12} container>
                  <Grid2 xs={3}>
                    <Typography fontSize={26} fontWeight={900}>
                      Total
                    </Typography>
                  </Grid2>
                  <Grid2 xs={9} textAlign="right">
                    <Typography fontSize={26} fontWeight={300}>
                      {formatNumber(state.timeshare.price)} VNĐ
                    </Typography>
                    {adults && children ? (
                      <Button
                        type="submit"
                        variant="contained"
                        sx={{
                          marginTop: "10px",
                          width: "150px",
                          background: "#00acb3",
                          "&:hover": {
                            backgroundColor: "#08b7bd",
                          },
                        }}
                      >
                        Check Out
                      </Button>
                    ) : (
                      <Button
                        type="submit"
                        variant="contained"
                        disabled
                        sx={{
                          marginTop: "10px",
                          width: "150px",
                          background: "#00acb3",
                          "&:hover": {
                            backgroundColor: "#08b7bd",
                          },
                        }}
                      >
                        Check Out
                      </Button>
                    )}
                    <Typography fontSize={14} mt={1} fontWeight={300}>
                      Your card will be charged{" "}
                      {formatNumber(state.timeshare.price)} VNĐ once the owner
                      accepts your booking request
                    </Typography>
                  </Grid2>
                </Grid2>
              </Grid2>
            </Box>
          </Grid2>
        </Grid2>
        <Dialog
          open={openConfirmDialog}
          onClose={handleClickCloseConfirmDialog}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Confirm to checkout!"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Check the information carefully before booking! Do you want to
              check out?
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
        <ToastContainer
          autoClose={2000}
          style={{ marginTop: "50px", width: "350px" }}
        />
      </Container>
    </form>
  );
};

export default BookingInformationPage;

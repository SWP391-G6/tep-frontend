import {
  Box,
  Button,
  Container,
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
import PaymentSummaryComponent from "../../components/BookingInformation/paymentSummaryComponent";
import { useLocation } from "react-router";
import { RoomTypeResponse } from "../../interfaces/roomtype/roomTypeResponse";
import * as yup from "yup";
import { styled } from "@mui/system";
import { makeStyles } from "@mui/styles";
import { VnpayBookingTimeshareRequest } from "../../interfaces/booking/vnpayBookingTimeshareRequest";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import ErrorMessage from "../../components/Error/errorMessage";
import vnpayAPI from "../../services/payment/vnpayAPI";
import { USER_ID_KEY } from "../../constant";
import { formatNumber } from "../../helpers/numberHelpers";

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

const phoneRegExp = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
const validationSchema = yup.object({
  adult: yup.string().trim().required("Please choose the quantity!"),
  children: yup.string().trim().required("Please choose the quantity!"),
  city: yup.string().trim().required("City can't be blank!"),
  country: yup.string().trim().required("Country can't be blank!"),
  payment_status: yup.boolean().required("Payment method can't be blank!"),
  postal_code: yup.string().trim().required("Postal code can't be blank!"),
  state: yup.string().trim().required("Status can't be blank!"),
  status: yup.boolean().required("Status can't be blank!"),
  street: yup.string().trim().required("Street can't be blank!"),
  telephone: yup
    .string()
    .trim()
    .required("Phone number can't be blank!")
    .matches(phoneRegExp, "Phone number is not valid!"),
  total: yup
    .number()
    .integer("Total must be integer!")
    .min(0)
    .required("Total can't be blank!"),
  fullname: yup.string().trim().required("Full name can't be blank!"),
});

const BookingInformationPage = () => {
  const { state } = useLocation();
  const [adults, setAdults] = useState("");
  const [children, setChildren] = useState("");
  const [title, setTitle] = useState("");
  const classes = useStyles();
  const userID = JSON.parse(localStorage.getItem(USER_ID_KEY)!);
  const handleSelectNumberAdults = (event: SelectChangeEvent) => {
    setAdults(event.target.value as string);
  };

  const handleSelectNumberChildren = (event: SelectChangeEvent) => {
    setChildren(event.target.value as string);
  };

  const handleSelectTitle = (event: SelectChangeEvent) => {
    setTitle(event.target.value as string);
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
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  var d = new Date(2024, 2, 19);

  const onSubmit = async (data: VnpayBookingTimeshareRequest) => {
    try {
      console.log("Data: ", data);
      // const data: any = await vnpayAPI.checkout({
      //   adults: "1",
      //   children: "1",
      //   city: "Ho Chi Minh",
      //   country: "Việt Nam",
      //   create_date: d,
      //   payment_status: 1,
      //   postal_code: "70000",
      //   state: "Thu Duc",
      //   status: 1,
      //   street: "Duong D2",
      //   telephone: "0979121340",
      //   total: state.timeshare.price,
      //   fullname: "Minh Duy",
      //   payment_method: "1",
      //   user_id: userID,
      //   timeshare_id: state.timeshare.timeshareId,
      // });
    } catch (error) {
      console.log("Error at onSubmit function: ", error);
    }
  };

  return (
    <Container disableGutters maxWidth="xl" sx={{ height: "100%", zIndex: 1 }}>
      <form onSubmit={handleSubmit(onSubmit)}>
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

                  <FormControl
                    sx={{
                      width: "220px",
                      marginLeft: "20px",
                      borderBottomColor: "#00acb3",
                      borderColor: "#00acb3",
                    }}
                  >
                    <InputLabel id="select-children-label">Children</InputLabel>
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
                  <Divider sx={{ width: "100%", marginTop: "20px" }} />
                </Grid2>

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
                      {...register("fullname")}
                    />
                    {errors["fullname"]?.message ? (
                      <ErrorMessage message={errors["fullname"].message} />
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
                  <Grid2 xs={12} mt={3}>
                    <CustomBorderTextField
                      variant="outlined"
                      sx={{ width: "300px" }}
                      label="Phone"
                      {...register("telephone")}
                      InputProps={{
                        startAdornment: (
                          <>
                            <img
                              src={
                                "https://i.ibb.co/xGsBjkY/vietnamflag-removebg-preview.png"
                              }
                              width={30}
                              height={30}
                            />
                            <Typography
                              fontSize={14}
                              sx={{ marginLeft: "2px", marginRight: "6px" }}
                            >
                              (84+)
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
                      variant="outlined"
                      label="Country"
                      value="Viet Nam"
                      sx={{ marginLeft: "20px", width: "577px" }}
                      {...register("country")}
                    />
                    {errors["country"]?.message ? (
                      <ErrorMessage message={errors["country"].message} />
                    ) : null}
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
                      variant="outlined"
                      label="Street"
                      sx={{ width: "100%" }}
                      {...register("street")}
                    />
                    {errors["street"]?.message ? (
                      <ErrorMessage message={errors["street"].message} />
                    ) : null}
                  </Grid2>
                  <Grid2 container xs={12} gap={2}>
                    <Grid2 xs={5} mt={3} width={288}>
                      <CustomBorderTextField
                        variant="outlined"
                        label="City"
                        fullWidth
                        {...register("city")}
                      />
                      {errors["city"]?.message ? (
                        <ErrorMessage message={errors["city"].message} />
                      ) : null}
                    </Grid2>
                    <Grid2 xs={3} mt={3} width={288}>
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
                    <Grid2 xs={3} mt={3} width={289}>
                      <CustomBorderTextField
                        variant="outlined"
                        label="Zip/Postal code"
                        fullWidth
                        {...register("postal_code")}
                      />
                      {errors["postal_code"]?.message ? (
                        <ErrorMessage message={errors["postal_code"].message} />
                      ) : null}
                    </Grid2>
                  </Grid2>
                </Grid2>
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
                    <Button
                      variant="contained"
                      sx={{
                        marginTop: "10px",
                        width: "150px",
                        background: "#00acb3",
                        "&:hover": {
                          backgroundColor: "#08b7bd",
                        },
                      }}
                      // onClick={handleCheckOut}
                    >
                      Check Out
                    </Button>
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
      </form>
    </Container>
  );
};

export default BookingInformationPage;

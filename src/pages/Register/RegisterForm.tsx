import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import PersonIcon from "@mui/icons-material/Person";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PasswordIcon from "@mui/icons-material/Password";
import LockIcon from "@mui/icons-material/Lock";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import { DatePicker } from "@mui/x-date-pickers";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { isEmpty } from "lodash";
import dayjs from "dayjs";
import InstructMessage from "../../components/Instruct/instructMessage";
import ErrorMessage from "../../components/Error/errorMessage";
import { ToastContainer, toast } from "react-toastify";
import { isOver18 } from "../../helpers/dateHelpers";
import userAPI from "../../services/user/userAPI";
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

const pStyle = {
  fontSize: 32,
  fontWeight: "bold",
  textAlign: "center",
  color: "#00acb3",
};

const boxStyle = {
  width: 500,
  height: 400,
  margin: "0 auto",
};

type Inputs = {
  user_name: string;
  password: string;
  confirm_password: string;
  full_name: string;
  email: string;
  phone: string;
};

const phoneRegExp = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
const passwordRegExp =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/g;
const emailReqExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

const validationSchema = yup.object({
  user_name: yup.string().trim().required("Username can't be blank!"),
  password: yup
    .string()
    .required("Password can't be blank!")
    .matches(
      passwordRegExp,
      "Password have at least 8 word, an uppercase, a lowercase, a digit and a special word!"
    ),
  confirm_password: yup
    .string()
    .required("Confirm password can't be blank!")
    .oneOf([yup.ref("password")], "Confirm password must match!"),
  phone: yup
    .string()
    .trim()
    .required("Phone number can't be blank!")
    .matches(phoneRegExp, "Phone number contain 10 number!"),
  full_name: yup.string().trim().required("Full name can't be blank!"),
  email: yup
    .string()
    .required("Email can't be blank")
    .matches(emailReqExp, "Email invalid!"),
});

const RegisterForm = () => {
  let timeoutRef = useRef<any>();
  const navigate = useNavigate();
  const [selectDob, setSelectDob] = useState<Date>();
  const [gender, setGender] = useState("");
  const [dobError, setDobError] = useState(true);
  const [genderSelectError, setGenderSelectError] = useState(true);
  const [openConfirmDialog, setOpenConfirmDialog] = useState(false);

  const handleClickOpenConfirmDialog = () => {
    setOpenConfirmDialog(true);
  };

  const handleClickCloseConfirmDialog = () => {
    setOpenConfirmDialog(false);
  };

  const handleChange = (event: SelectChangeEvent) => {
    setGenderSelectError(false);
    setGender(event.target.value as string);
  };

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(validationSchema),
    mode: "onTouched",
  });

  const onSubmit = async (data: Inputs) => {
    try {
      const day = dayjs(selectDob).format("YYYY-MM-DD").toString();
      const signUpResponse: any = await userAPI.register({
        user_name: data.user_name,
        password: data.password,
        fullname: data.full_name,
        email: data.email,
        phone: data.phone,
        dob: day,
        gender: parseInt(gender),
      });
      if (signUpResponse === "user added to system ") {
        toast.success("Sign Up Successfully!", {
          position: "top-center",
        });
        timeoutRef.current = setTimeout(() => {
          navigate("/login");
        }, 1700);
      } else {
        toast.error("Sign Up Failed!", {
          position: "top-center",
        });
      }
    } catch (error) {
      console.log("Error at OnSubmit - RegisterForm.tsx", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(() => {
        if (dobError === true || genderSelectError === true) {
          return;
        }
        if (errors && isEmpty(errors)) {
          handleClickOpenConfirmDialog();
        }
      })}
    >
      <Grid2
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        width={"100%"}
        height={"100%"}
        textAlign={"center"}
      >
        <Grid2 xs={12} mt={2} height={"870px"}>
          <Typography sx={pStyle}>Sign Up</Typography>
          <Box style={boxStyle}>
            <Grid2 container style={{ marginTop: 30 }} justifyContent="center">
              <CustomBorderTextField
                sx={{ width: "100%" }}
                label="Username"
                {...register("user_name")}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <AccountCircleIcon />
                    </InputAdornment>
                  ),
                }}
              />
              {errors["user_name"]?.message ? (
                <ErrorMessage message={errors["user_name"].message} />
              ) : null}

              <CustomBorderTextField
                sx={{ width: "100%", marginTop: "20px" }}
                label="Full Name"
                {...register("full_name")}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <PersonIcon />
                    </InputAdornment>
                  ),
                }}
              />
              {errors["full_name"]?.message ? (
                <ErrorMessage message={errors["full_name"].message} />
              ) : null}
              <CustomBorderTextField
                sx={{ width: "100%", marginTop: "20px" }}
                label="Password"
                type="password"
                {...register("password")}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <LockIcon />
                    </InputAdornment>
                  ),
                }}
              />
              {errors["password"]?.message ? (
                <ErrorMessage message={errors["password"].message} />
              ) : null}
              <CustomBorderTextField
                sx={{ width: "100%", marginTop: "20px" }}
                label="Confirm Password"
                type="password"
                {...register("confirm_password")}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <PasswordIcon />
                    </InputAdornment>
                  ),
                }}
              />
              {errors["confirm_password"]?.message ? (
                <ErrorMessage message={errors["confirm_password"].message} />
              ) : null}
              <CustomBorderTextField
                sx={{ width: "100%", marginTop: "20px" }}
                label="Email"
                {...register("email")}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <MailIcon />
                    </InputAdornment>
                  ),
                }}
              />
              {errors["email"]?.message ? (
                <ErrorMessage message={errors["email"].message} />
              ) : null}
              <CustomBorderTextField
                sx={{ width: "100%", marginTop: "20px" }}
                label="Phone"
                {...register("phone")}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <PhoneIcon />
                    </InputAdornment>
                  ),
                }}
              />
              {errors["phone"]?.message ? (
                <ErrorMessage message={errors["phone"].message} />
              ) : null}

              <Grid2 xs={5.75} mt={2}>
                <DatePicker
                  sx={{ width: "100%" }}
                  views={["day", "month", "year"]}
                  disableFuture
                  format="DD/MM/YYYY"
                  onChange={(dob: any) => {
                    if (isOver18(dob)) {
                      setDobError(false);
                      setSelectDob(dob);
                    } else {
                      setDobError(true);
                    }
                  }}
                />
                {dobError === true ? (
                  <React.Fragment>
                    <Box sx={{ height: "5px" }} />
                    <InstructMessage message={"Confirm you are over 18!"} />
                  </React.Fragment>
                ) : null}
              </Grid2>
              <Grid2 xs={0.5}></Grid2>
              <Grid2 xs={5.75} mt={2}>
                <FormControl fullWidth>
                  <InputLabel id="select-gender-label">Gender</InputLabel>
                  <Select
                    labelId="select-gender-label"
                    id="select-gender"
                    value={gender}
                    label="Gender"
                    onChange={handleChange}
                  >
                    <MenuItem value={0}>Female</MenuItem>
                    <MenuItem value={1}>Male</MenuItem>
                  </Select>
                </FormControl>
                {genderSelectError === true ? (
                  <React.Fragment>
                    <Box sx={{ height: "5px" }} />
                    <InstructMessage message={"Select your gender!  "} />
                  </React.Fragment>
                ) : null}
              </Grid2>

              <Grid2 xs={6}>
                <Button
                  variant="contained"
                  type="submit"
                  sx={{
                    color: "#fff",
                    mt: 2,
                    width: "150px ",
                    backgroundColor: "#00acb3",
                    "&:hover": {
                      backgroundColor: "#08b7bd",
                    },
                  }}
                >
                  Sign Up
                </Button>
              </Grid2>
              <Stack direction={"row"} mt={1}>
                <Typography variant="overline" fontSize={14} fontWeight={400}>
                  Already have an account?
                </Typography>
                <Typography
                  variant="overline"
                  fontSize={14}
                  fontWeight={900}
                  sx={{
                    cursor: "pointer",
                    marginLeft: "7px",
                    color: "#00acb3",
                    "&:hover": {
                      color: "#08b7bd",
                    },
                  }}
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Sign In
                </Typography>
              </Stack>
            </Grid2>
          </Box>
        </Grid2>
        <Dialog
          open={openConfirmDialog}
          onClose={handleClickCloseConfirmDialog}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Confirm to create account!"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Please check information carefully before save!
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
          style={{ marginTop: "50px", width: "400px" }}
        />
      </Grid2>
    </form>
  );
};

export default RegisterForm;

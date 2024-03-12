import {  useState } from "react";
import { useForm } from "react-hook-form";
import {
  Grid,
  Typography,
  Box,
  Button,
  InputAdornment,
  IconButton,
  TextField,
  Stack,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import PersonIcon from "@mui/icons-material/Person";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import ErrorMessage from "../Error/errorMessage";
import { LoginRequest } from "../../interfaces/login/loginRequest";
import loginAPI from "../../services/login/loginAPI";
import { USER_ID_KEY, USER_ROLE_KEY, USER_TOKEN_KEY } from "../../constant";
import { isEmpty } from "lodash";

const boxStyle = {
  width: 450,
  height: 400,
  margin: "0 auto",
};

const pStyle = {
  fontSize: 32,
  fontWeight: "bold",
  textAlign: "center",
  color: "#00acb3",
};

const validationSchema = yup.object({
  username: yup.string().trim().required("Username can't be blank!"),
  password: yup.string().trim().required("Password can't be blank!"),
});

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

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data: LoginRequest) => {
    try {
      const response: any = await loginAPI.login({
        username: data.username,
        password: data.password,
      });
      if (response && !isEmpty(response)) {
        localStorage.setItem(USER_TOKEN_KEY, JSON.stringify(response.token));
        localStorage.setItem(USER_ID_KEY, JSON.stringify(response.user.userid));
        localStorage.setItem(USER_ROLE_KEY, JSON.stringify(response.user.role));
        switch (response.user.role) {
          case "member":
            navigate("/member");
            break;

          case "admin":
            navigate("/admin");
            break;

          default:
            console.log("Lỗi Role: ", response.user.role);
        }
      }
      toast.error("Login Failed!", {
        position: "top-center",
      });
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handlePassword = (e: any) => {
    setPassword(e.target.value);
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      direction="column"
      style={{ height: "800", width: "50%" }}
    >
      <Box style={boxStyle}>
        <Typography sx={pStyle}>Sign In</Typography>
        <Grid container style={{ marginTop: 30 }} justifyContent="center">
          <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
            <CustomBorderTextField
              sx={{ width: "100%" }}
              label="Username"
              {...register("username")}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <PersonIcon />
                  </InputAdornment>
                ),
              }}
            />
            {errors["username"]?.message ? (
              <ErrorMessage message={errors["username"].message} />
            ) : null}

            <CustomBorderTextField
              sx={{
                width: "100%",
                marginTop: "20px",
              }}
              {...register("password")}
              label="Password"
              type={showPassword ? "text" : "password"}
              onChange={handlePassword}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            {errors["password"]?.message ? (
              <ErrorMessage message={errors["password"].message} />
            ) : null}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                marginTop: "20px",
                color: "#ffffff",
                backgroundColor: "#00acb3",
                "&:hover": {
                  backgroundColor: "#08b7bd",
                },
              }}
            >
              Sign In
            </Button>
          </form>
          <Stack direction={"row"} mt={1}>
            <Typography variant="overline" fontSize={14} fontWeight={400}>
              Don't have an account yet?
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
                navigate("/register");
              }}
            >
              Sign Up
            </Typography>
          </Stack>
          <Stack direction={"row"}>
            <Typography
              variant="overline"
              fontSize={14}
              fontWeight={400}
              lineHeight={2}
            >
              Find new timeshare?
            </Typography>
            <Typography
              variant="overline"
              fontSize={14}
              fontWeight={900}
              lineHeight={2}
              sx={{
                cursor: "pointer",
                marginLeft: "7px",
                color: "#00acb3",
                "&:hover": {
                  color: "#08b7bd",
                },
              }}
              onClick={() => {
                navigate("/");
              }}
            >
              Go Home
            </Typography>
          </Stack>
        </Grid>
      </Box>
      <ToastContainer autoClose={2000} style={{ marginTop: "10px" }} />
    </Grid>
  );
};

export default LoginForm;

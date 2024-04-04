import { Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

const RegisterForm = () => {
  return (
    <Grid2
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      width={"100%"}
      textAlign={"center"}
    >
      <Grid2 xs={6}>
        <Typography variant="h4" fontWeight={"900"} color={"#00acb3"}>
          Sign Up
        </Typography>
      </Grid2>
    </Grid2>
  );
};

export default RegisterForm;

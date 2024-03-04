import { Box, Typography } from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";

type Props = { message: string };

const ErrorMessage = (props: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "7px",
        // mt: "4px",
        ml: "5px",
      }}
    >
      <ErrorIcon color="error" sx={{ width: "20px" }} />
      <Typography color="error.main" fontSize="14px">
        {props.message!}
      </Typography>
    </Box>
  );
};
export default ErrorMessage;

import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { green } from "@mui/material/colors";

const BootstrapButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  padding: "6px 12px",
  border: "1px solid",
  lineHeight: 1.5,
  width: "200px",
  height: "40px",
  backgroundColor: "#00acb3",
  borderColor: "#00acb3",
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&:hover": {
    backgroundColor: "#02c0c7",
    borderColor: "#02c0c7",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#02c0c7",
    borderColor: "#02c0c7",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});
const SuccessfulPaymentComponent = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Typography variant="h2" fontWeight={900} color={green[700]}>
        Payment Success!
      </Typography>
      <BootstrapButton
        onClick={handleClick}
        size="large"
        variant="contained"
        disableRipple
        sx={{ marginTop: "10px" }}
      >
        Back to home
      </BootstrapButton>
    </Box>
  );
};

export default SuccessfulPaymentComponent;

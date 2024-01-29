import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { red } from "@mui/material/colors";

const BootstrapButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  padding: "6px 12px",
  border: "1px solid",
  lineHeight: 1.5,
  backgroundColor: "#0063cc",
  borderColor: "#0063cc",
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
    backgroundColor: "#0069d9",
    borderColor: "#0062cc",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#0062cc",
    borderColor: "#005cbf",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});

const NotFoundComponent = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    localStorage.removeItem("persist:root");
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
      <Typography variant="h2" fontWeight={900} color={red[700]}>404 Not Found!</Typography>
      <BootstrapButton
        onClick={handleClick}
        size="large"
        variant="contained"
        disableRipple
        sx={{marginTop: "10px"}}
      >
        Trở Về Trang Chủ
      </BootstrapButton>
    </Box>
  );
};

export default NotFoundComponent;

import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, Button } from "@mui/material";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <Button
        onClick={() => navigate(-1)}
        size="large"
        sx={{ color: "#00acb3" }}
        startIcon={<ArrowBackIcon />}
      >
        Back
      </Button>
    </Box>
  );
};

export default BackButton;

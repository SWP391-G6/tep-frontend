import { Box, Typography } from "@mui/material";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
type Props = { message: string };

const InstructMessage = (props: Props) => {
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
      <ArrowCircleDownIcon sx={{ width: "20px", color: "#00acb3" }} />
      <Typography color="#00acb3" fontSize="14px">
        {props.message!}
      </Typography>
    </Box>
  );
};

export default InstructMessage;

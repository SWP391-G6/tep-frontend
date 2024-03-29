import { Box, Typography } from "@mui/material";
import InputIcon from '@mui/icons-material/Input';
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
      <InputIcon sx={{ width: "20px", color: "#00acb3" }} />
      <Typography color="#00acb3" fontSize="14px">
        {props.message!}
      </Typography>
    </Box>
  );
};

export default InstructMessage;

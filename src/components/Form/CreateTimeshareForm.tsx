import { Card, TextField, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { styled } from "@mui/system";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
var now = dayjs();
const currenttDate = dayjs(now, "DD-MM-YYYY", "vn");

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

const CreateTimeshareForm = () => {
  return (
    <Card sx={{ width: "100%", height: "800px", padding: 3 }} elevation={10}>
      <Grid2 container xs={8}>
        <Grid2 xs={12}>
          <Typography
            variant="subtitle1"
            fontSize={22}
            fontWeight={900}
            color="#00acb3"
          >
            Timeshare Information
          </Typography>
        </Grid2>
        <Grid2 mt={1.5} sx={{ width: "100%" }}>
          <CustomBorderTextField
            label="Timeshare Name"
            variant="outlined"
            sx={{ width: "100%" }}
          />
        </Grid2>
        <Grid2 mt={1.5}>
          <DatePicker
          views={["day"]}
            value={currenttDate}
            disablePast
            format="DD/MM/YYYY"
          />
        </Grid2>

        <Grid2 mt={1.5}>
          <DatePicker
            value={currenttDate}
            disablePast
            format="DD/MM/YYYY"
          />
        </Grid2>
      </Grid2>
    </Card>
  );
};

export default CreateTimeshareForm;

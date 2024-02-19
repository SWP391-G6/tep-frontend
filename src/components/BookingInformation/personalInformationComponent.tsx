import {
  Box,
  Divider,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import { useState } from "react";

const PersonalInformationComponent = () => {
  const [adults, setAdults] = useState("");
  const [children, setChildren] = useState("");
  const [title, setTitle] = useState("");

  const handleSelectNumberAdults = (event: SelectChangeEvent) => {
    setAdults(event.target.value as string);
  };

  const handleSelectNumberChildren = (event: SelectChangeEvent) => {
    setChildren(event.target.value as string);
  };

  const handleSelectTitle = (event: SelectChangeEvent) => {
    setTitle(event.target.value as string);
  };

  return (
    <Box>
      <Grid2 container>
        <Grid2 xs={12}>
          <Typography>
            This contact information will be shared with the owner in order to
            complete your reservation.
          </Typography>
        </Grid2>
        <Grid2 xs={12} mt={2}>
          <FormControl sx={{ width: "220px" }}>
            <InputLabel id="select-adults-label">Adults</InputLabel>
            <Select
              labelId="select-adults-label"
              id="select-adults"
              value={adults}
              label="Adults"
              onChange={handleSelectNumberAdults}
            >
              <MenuItem value="">Select</MenuItem>
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
            </Select>
            <FormHelperText sx={{ color: "#00acb3" }}>
              Number of adults!
            </FormHelperText>
          </FormControl>

          <FormControl sx={{ width: "220px", marginLeft: "20px" }}>
            <InputLabel id="select-children-label">Children</InputLabel>
            <Select
              labelId="select-children-label"
              id="select-children"
              value={children}
              label="Children"
              onChange={handleSelectNumberChildren}
            >
              <MenuItem value="">Select</MenuItem>
              <MenuItem value={0}>0</MenuItem>
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
            </Select>
            <FormHelperText sx={{ color: "#00acb3" }}>
              Number of children (Under 18)!
            </FormHelperText>
          </FormControl>
          <Divider sx={{ width: "100%", marginTop: "20px" }} />
        </Grid2>
        <Grid2 xs={12} mt={1}>
          <Typography
            variant="subtitle1"
            fontSize={22}
            fontWeight={900}
            color="#00acb3"
          >
            Primary Guest
          </Typography>
          <Grid2 mt={1}>
            <FormControl sx={{ width: "200px" }}>
              <InputLabel id="select-title-label">Title</InputLabel>
              <Select
                labelId="select-title-label"
                id="select-title"
                value={title}
                label="Title"
                onChange={handleSelectTitle}
              >
                <MenuItem value="">Select</MenuItem>
                <MenuItem value={1}>Dr.</MenuItem>
                <MenuItem value={2}>Miss</MenuItem>
                <MenuItem value={3}>Mr.</MenuItem>
                <MenuItem value={4}>Mrs.</MenuItem>
                <MenuItem value={5}>Ms.</MenuItem>
              </Select>
            </FormControl>
            <TextField
              label="Full Name"
              variant="outlined"
              sx={{ width: "677px", marginLeft: "20px" }}
            />
            <Typography
              sx={{ marginTop: "10px" }}
              fontSize="0.75rem"
              color="#00acb3"
            >
              The name you would like the reservation placed under. Guest must
              be at least 18 years old.
            </Typography>
          </Grid2>
          <Grid2 xs={12} mt={3}>
            <TextField
              variant="outlined"
              sx={{ width: "300px" }}
              label="Phone"
              InputProps={{
                startAdornment: (
                  <>
                    <img
                      src={
                        "https://i.ibb.co/xGsBjkY/vietnamflag-removebg-preview.png"
                      }
                      width={30}
                      height={30}
                    />
                    <Typography
                      fontSize={14}
                      sx={{ marginLeft: "2px", marginRight: "6px" }}
                    >
                      (84+)
                    </Typography>
                    <Divider
                      orientation="vertical"
                      flexItem
                      variant="middle"
                      sx={{ marginRight: "7px" }}
                    />
                  </>
                ),
              }}
            />
            <TextField
              variant="outlined"
              label="Email"
              sx={{ marginLeft: "20px", width: "577px" }}
            />
          </Grid2>
          <Grid2 xs={12} mt={3}>
            <TextField
              variant="outlined"
              label="Country"
              value="Viet Nam"
              sx={{ width: "300px" }}
            />
          </Grid2>
          <Grid2 xs={12} mt={3}>
            <TextField
              variant="outlined"
              label="Street"
              sx={{ width: "100%" }}
            />
          </Grid2>
          <Grid2 container xs={12} gap={2}>
            <Grid2 xs={5} mt={3} width={288}>
              <TextField variant="outlined" label="City" fullWidth />
            </Grid2>
            <Grid2 xs={3} mt={3} width={288}>
              <TextField variant="outlined" label="State/Province" fullWidth />
            </Grid2>
            <Grid2 xs={3} mt={3} width={289}>
              <TextField variant="outlined" label="Zip/Postal code" fullWidth />
            </Grid2>
          </Grid2>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default PersonalInformationComponent;

import {
  Box,
  Button,
  CardContent,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
const ProfileDashboard = () => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        border: "solid 1px ",
        borderColor: "rgba(0, 0, 0, 0.2)",
        padding: "60px",
      }}
    >
      {/* TITLE */}
      <Typography variant="h4">My Profile</Typography>
    </Box>
  );
};

export default ProfileDashboard;

import {
  Box,
  Button,
  CardContent,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { MuiTelInput } from 'mui-tel-input'



const UserProfile = () => {
  const [value, setValue] = React.useState('')
  const [userData, setUserData] = useState({
    fullname: '',
    user_name: '',
    dob: '',
    phone: '',
    email: ''
  });

  const handleChange = (s: React.SetStateAction<string>) => {
    setValue(s)
  }

  return (
    <Box
      sx={{
        backgroundColor: "white",
        border: 'solid 1px ',
        borderColor: 'rgba(0, 0, 0, 0.2)',
        padding: "60px"
      }}
    >

      {/* TITLE */}
      <Typography variant="h4">
        My Profile
      </Typography>

      <Grid container spacing={3} sx={{ marginTop: '1px' }}>

        {/* LEFT CONTENT */}
        <Grid item xs={7}>
          <Box>
            <Typography variant="subtitle1" >Full Name *</Typography>
            <TextField variant="outlined" fullWidth size="small" value={userData.fullname}/>
            <Typography variant="subtitle1" marginTop={'10px'}>User Name *</Typography>
            <TextField variant="outlined" fullWidth size="small" value={userData.user_name}/>
            <Typography variant="subtitle1" marginTop={'10px'}>Date of Birth</Typography>
            <TextField variant="outlined" fullWidth size="small" value={userData.dob}/>
            <Typography variant="subtitle1" marginTop={'10px'}>Phone number</Typography>
            <TextField variant="outlined" fullWidth size="small" value={userData.phone}/>
          </Box>

          <Box>
            <Typography variant="subtitle1" marginTop={'10px'}>Gender</Typography>
            <RadioGroup style={{ display: 'flex', flexDirection: 'row' }}>
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
          </Box>

          <Button
            variant="contained"
            sx={{
              backgroundColor: '#00acb3',
              width: '40%',
              height: '55px',
              marginTop: '40px',
              "&:hover": {
                backgroundColor: "#08b7bd",
              }
            }}>
            <Typography variant="subtitle1">
              SAVE CHANGES
            </Typography>
          </Button>
        </Grid>

        {/* RIGHT CONTENT */}
        <Grid item xs={5}>

          <Grid container >
            <Grid item xs={12} sx={{
              backgroundColor: 'rgb(250,250,249)'
            }}>

              {/* PASSWORD */}
            </Grid>
            <Grid item xs={12} style={{ marginTop: "25px", backgroundColor: 'rgb(250,250,249)' }}>
              <CardContent
                sx={{
                  border: 'solid 1px',
                  borderColor: 'lightgray'
                }}>
                <Typography variant="h6" fontWeight={'bold'}>My Password:</Typography>
                <CardContent
                  style={{
                    display: 'contents',
                    alignItems: 'center',
                  }}>
                  <Typography variant="subtitle1" fontWeight={'bold'}>*******</Typography>
                </CardContent>
                <Button variant="contained" sx={{
                  backgroundColor: '#00acb3', "&:hover": {
                    backgroundColor: "#08b7bd",
                  },
                }} >
                  <Typography variant="caption">
                    Change
                  </Typography>
                </Button>
              </CardContent>
            </Grid>
            {/* EMAIL */}
            <Grid item xs={12} style={{ marginTop: "25px", backgroundColor: 'rgb(250,250,249)' }}>
              <CardContent
                sx={{
                  border: 'solid 1px',
                  borderColor: 'lightgray'
                }}>
                <Typography variant="h6" fontWeight={'bold'}>My Email</Typography>
                <CardContent
                  style={{
                    display: 'contents',
                    alignItems: 'center',
                  }}>
                  <Typography variant="subtitle1" >{userData.email}</Typography>
                </CardContent>
                <Button variant="contained" sx={{
                  backgroundColor: '#00acb3', "&:hover": {
                    backgroundColor: "#08b7bd",
                  },
                }}>
                  <Typography variant="caption">
                    Change
                  </Typography>
                </Button>

              </CardContent>
            </Grid>
          </Grid>
        </Grid>


      </Grid>

    </Box>
  );
};

export default UserProfile;

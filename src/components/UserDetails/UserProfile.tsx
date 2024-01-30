import {
  Box,
  Button,
  CardActions,
  CardContent,
  Container,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography
} from "@mui/material";
import React from "react";
import { MuiTelInput } from 'mui-tel-input'



const UserProfile = () => {
  const [value, setValue] = React.useState('')

  const handleChange = (s: React.SetStateAction<string>) => {
    setValue(s)
  }

  return (
    <Box
      sx={{
        backgroundColor: "white",
        border: 'solid 1px ',
        borderColor: 'rgba(0, 0, 0, 0.2)',
      }}
    >
      <Container sx={{ padding: "30px" }}>
        {/* TITLE */}
        <Typography sx={{ fontSize: '50px' }}>
          My Profile
        </Typography>

        <Grid container spacing={5} sx={{ marginTop: '1px' }}>

          {/* LEFT CONTENT */}
          <Grid item xs={7}>
            <Box>
              <Typography variant="h5" >Full Name *</Typography>
              <TextField variant="outlined" fullWidth />
              <Typography variant="h5" marginTop={'20px'}>User Name *</Typography>
              <TextField variant="outlined" fullWidth />
              <Typography variant="h5" marginTop={'20px'}>Date of Birth</Typography>
              <TextField variant="outlined" fullWidth />
              <Typography variant="h5" marginTop={'20px'}>Phone number</Typography>
              <MuiTelInput value={value} onChange={handleChange} />
            </Box>

            <Box>
              <Typography variant="h5" marginTop={'20px'}>Gender</Typography>
              <RadioGroup style={{ display: 'flex', flexDirection: 'row' }}>
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
              </RadioGroup>
            </Box>

            <Button variant="contained" sx={{ backgroundColor: '#00acb3', width: '40%', height: '55px', marginTop: '40px' }}>
              <Typography variant="h6">
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

                {/* AVATAR */}
                <CardContent
                  sx={{
                    border: 'solid 1px',
                    borderColor: 'lightgray'
                  }}>
                  <Typography variant="h5">My Picture</Typography>
                  <CardContent
                    style={{
                      display: 'contents',
                      alignItems: 'center',
                    }}>
                    <img
                      src="https://pbs.twimg.com/profile_images/1555090739679203333/rveDNnWp_400x400.jpg"
                      alt="profile"
                      style={{
                        borderRadius: '50%',
                        width: '150px',
                        height: '150px',
                        display: 'block',
                        margin: 'auto'
                      }}
                    />
                  </CardContent>
                </CardContent>

                {/* PASSWORD */}
              </Grid>
              <Grid item xs={12} style={{ marginTop: "30px" ,backgroundColor: 'rgb(250,250,249)'}}>
                <CardContent
                  sx={{
                    border: 'solid 1px',
                    borderColor: 'lightgray'
                  }}>
                  <Typography variant="h5" fontWeight={'bold'}>My Password</Typography>
                  <CardContent
                    style={{
                      display: 'contents',
                      alignItems: 'center',
                    }}>
                    <Typography variant="h5" fontWeight={'bold'}>*******</Typography>
                  </CardContent>
                  <CardActions>
                    <Button variant="contained" sx={{ backgroundColor: '#00acb3' }}>Change</Button>
                  </CardActions>
                </CardContent>
              </Grid>
              {/* EMAIL */}
              <Grid item xs={12} style={{ marginTop: "30px",backgroundColor:'rgb(250,250,249)' }}>
                <CardContent
                  sx={{
                    border: 'solid 1px',
                    borderColor: 'lightgray'
                  }}>
                  <Typography variant="h5" fontWeight={'bold'}>My Email</Typography>
                  <CardContent
                    style={{
                      display: 'contents',
                      alignItems: 'center',
                    }}>
                    <Typography variant="h6" >minhduy@gmail.com</Typography>
                  </CardContent>
                  <CardActions>
                    <Button variant="contained" sx={{ backgroundColor: '#00acb3' }}>Change</Button>
                  </CardActions>
                </CardContent>
              </Grid>
            </Grid>
          </Grid>


        </Grid>

      </Container>
    </Box>
  );
};

export default UserProfile;

import { Box, Button, CardActions, CardContent, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const UserCard = () => {

const [fullname,setFullname]= useState('');
useEffect(() => {
  const token = localStorage.getItem('token');
  if (token) {
    try {
      const parsedToken = JSON.parse(token);
      setFullname(parsedToken.token.fullname || '');
    } catch (error) {
      console.error('Error parsing token:', error);
    }
  } else {
    console.log('Token not found in local storage');
  }
}, []);


  return (
    <CardContent
      sx={{
        backgroundColor: "white",
        border: 'solid 1px ',
        borderColor: 'rgba(0, 0, 0, 0.2)',
      }}>
      <CardContent
        style={{
          display: 'contents',
          alignItems: 'center',
        }}>
        

        <Box>
          <Typography variant="h5" align="center" fontWeight={'bold'} marginTop={'15px'} sx={{height:'32px'}}>
          {fullname}
          </Typography>
          <Typography variant="h6" align="center">
            Guest
          </Typography>
          <Typography fontSize={'14px'} align="center" color="blue" >
            Edit Your Profile
          </Typography>

        </Box>
      </CardContent>
      <CardActions >
        <Button
          sx={{
            width: '100%',
            height: '55px',
            backgroundColor: '#00acb3',
            '&:hover': {
              backgroundColor: '#08b7bd',
            },
          }}
          color="primary"
          variant="contained"
        >
          <Typography variant="subtitle1">
            BECOME A MEMBER
          </Typography>
        </Button>
      </CardActions>
    </CardContent>
  );
};

export default UserCard;

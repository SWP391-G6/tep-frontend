import { Box, Button, CardActions, CardContent, Typography } from "@mui/material";

const UserCard = () => {
  return (
    <CardContent
      sx={{
        backgroundColor: "white",
        boxShadow: '1px 1px 2px 2px rgba(0, 0, 0, 0.2)'
      }}>
      <CardContent
        style={{
          display: 'contents',
          alignItems: 'center',
        }}>
        <img
          src="https://pbs.twimg.com/profile_images/1555090739679203333/rveDNnWp_400x400.jpg"
          alt="usercard"
          style={{
            borderRadius: '50%',
            width: '80px',
            height: '80px',
            display: 'block',
            margin: 'auto'
          }}
        />

        <Box>
          <Typography variant="h4" align="center" fontWeight={'bold'} marginTop={'20px'}>
            Minh Duy
          </Typography>
          <Typography variant="h5" align="center">
            Guest
          </Typography>
          <Typography fontSize={'17px'} align="center" color="blue" paddingTop={'10px'}>
            Edit Your Profile
          </Typography>

        </Box>
      </CardContent>
      <CardActions >
        <Button sx={{  width: '100%', height:'55px',backgroundColor:'#00acb3', marginTop:'15px' }} color="primary" variant="contained">
          <Typography variant="h5">
          BECOME A MEMBER
          </Typography>
        </Button>
      </CardActions>
    </CardContent>
  );
};

export default UserCard;

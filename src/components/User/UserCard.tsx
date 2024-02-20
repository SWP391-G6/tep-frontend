import { Box, Button, CardActions, CardContent, Typography } from "@mui/material";

const UserCard = () => {
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
        <img
          src="https://pbs.twimg.com/profile_images/1555090739679203333/rveDNnWp_400x400.jpg"
          alt="usercard"
          style={{
            borderRadius: '50%',
            width: '52px',
            height: '52px',
            display: 'block',
            margin: 'auto'
          }}
        />

        <Box>
          <Typography variant="h5" align="center" fontWeight={'bold'} marginTop={'15px'}>
            Minh Duy
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
        <Button sx={{  width: '100%', height:'55px',backgroundColor:'#00acb3' }} color="primary" variant="contained">
          <Typography variant="subtitle1">
          BECOME A MEMBER
          </Typography>
        </Button>
      </CardActions>
    </CardContent>
  );
};

export default UserCard;

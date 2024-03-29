import { Box, Grid, Typography, } from '@mui/material';
import RegisterForm from '../../components/Form/RegisterForm';
import { ToastContainer } from 'react-toastify';

function RegisterPage() {
  return (

    <Box sx={{ alignItems: 'center', height: '100vh' }}>

      <Box sx={{ width: '100%', height: '100%' }}>
        <img
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
            maxHeight: '100%',
            maxWidth: '100%'
          }}
          src="https://cdn.vietnambiz.vn/2019/11/2/shutterstock375559645-15726764025911097232735.jpg"
          alt=""
        />

        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '1050px',
          backgroundColor: 'rgba(255, 255, 255, 1)',
          borderRadius: '10px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)'
        }}>

          <Grid container spacing={0}>

            <Grid item xs={6}>
              <Box sx={{ alignItems: 'center', height: '70vh' }}>
                <Box sx={{ width: '100%', height: '100%', backgroundColor: '#00acb6', borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px' }}>
                  <Box textAlign={'center'}
                    marginBottom={'20px'}
                    display="grid" alignItems="center"
                    justifyContent="center"
                    sx={{
                      position: 'absolute',
                      top: '30%',
                      left: '5%',
                    }}>
                    <img
                      src={"https://i.ibb.co/995RZ07/logo.png"}
                      width="150px"
                      height="150px"
                      alt="logo"
                      style={{ marginLeft: '135px' }}
                    />
                    <Typography variant='h4' fontWeight={'bold'} width={'400px'} style={{ color: 'white' }}>
                      Timeshare Exchange Platform
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={6}>
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '70vh' }}>
                <RegisterForm />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <ToastContainer/>
    </Box>

  );
}

export default RegisterPage;

{/* <Box sx={{   alignItems: 'center', height: '100vh' }}>
          <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
            <img 
              style={{ 
                objectFit: 'cover', 
                width: '100%', 
                height: '100%', 
                maxHeight: '100%', 
                maxWidth: '100%' 
              }} 
              src="https://cdn.vietnambiz.vn/2019/11/2/shutterstock375559645-15726764025911097232735.jpg" 
              alt="" 
            />
            <Box sx={{ 
              position: 'absolute', 
              top: '50%', 
              left: '50%', 
              transform: 'translate(-50%, -50%)', 
              width: '600px',
              backgroundColor: 'rgba(255, 255, 255, 1)',
              borderRadius: '10px',
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)'
            }}>
              <RegisterForm />
            </Box>
          </Box>
        </Box> */}
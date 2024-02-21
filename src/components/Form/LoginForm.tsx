import { Box, Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material';
import React from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
type Props = {}
const LoginForm = (props: Props) =>  {

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };


    return (
        <Box alignItems={'center'} padding={'30px'} textAlign={'center'} width={"600px"}>
            <Box textAlign={'center'} marginBottom={'30px'} display="flex" alignItems="center" justifyContent="center">
                <Typography fontSize={'45px'} fontWeight={'bold'} style={{ color: '#00acb3' }}>
                    Sign in
                </Typography>
            </Box>

            <Box display={'grid'}  >
                <FormControl sx={{ display: 'flex', gap: '30px' }}>
                    <TextField id="outlined-basic" label="Email" variant="outlined" />
                    <FormControl variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                        />
                    </FormControl>
                    <Button variant='contained' sx={{ backgroundColor: '#00acb3', width: '60%', alignItems: 'center', margin: 'auto' }} size='large'> Sign In</Button>
                    <Box>
                        <Typography variant='subtitle1'> Don't have an account ? <a href='/register' style={{ color: 'blue' }}>Sign Up Now</a></Typography>
                        <Typography variant='subtitle1'> Wanna back to homepage <a href='/' style={{ color: 'blue' }}>Let's Go!</a></Typography>
                    </Box>
                </FormControl>
            </Box>
        </Box>
    );
}

export default LoginForm;

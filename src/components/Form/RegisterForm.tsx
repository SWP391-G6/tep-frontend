import { Box, Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material';
import { MuiTelInput } from 'mui-tel-input';
import React from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

type Props = {}

const RegisterForm = (props: Props) => {
    const [value, setValue] = React.useState('')

    const handleChange = (s: React.SetStateAction<string>) => {
        setValue(s)
    }

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };


    return (
        <Box alignItems={'center'} padding={'50px'} textAlign={'center'} width={"600px"}>
            <Box textAlign={'center'} marginBottom={'20px'}>
                <Typography fontSize={'50px'} fontWeight={'bold'} style={{ color: '#00acb3' }}>
                    Sign Up
                </Typography>
            </Box>

            <Box display={'grid'} >
                <FormControl variant="outlined"  sx={{display:'flex',gap:'20px'}}>
                    <TextField id="outlined-basic" label="Name" variant="outlined" placeholder='Jasmin' />
                    <TextField id="outlined-basic" label="Email" variant="outlined" placeholder='jasmin@email.com' />
                    
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

                    <FormControl variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
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
                        label="Confirm Password"
                    />
                    </FormControl>

                    <MuiTelInput value={value} onChange={handleChange} label="Phone number" placeholder='0987654321' />


                    <Button variant='contained' sx={{ backgroundColor: '#00acb3', width: '60%', alignItems: 'center', margin: 'auto' }} size='large'> Sign Up</Button>
                    <Box>
                    <Typography variant='subtitle1'> Already have an account ? <a href='/login' style={{ color: 'blue' }}>Login Now</a></Typography>
                    <Typography variant='subtitle1'> Wanna back to homepage <a href='/' style={{ color: 'blue' }}>Let's Go!</a></Typography>
                    </Box>
                </FormControl>
            </Box>
        </Box>
    );
}

export default RegisterForm;
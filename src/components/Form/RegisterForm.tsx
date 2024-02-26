import React, { useState } from 'react';
import { Alert, Box, Button, FormControl, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import registerAPI from '../../services/register/registerAPI';
import loginAPI from '../../services/login/loginAPI';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from 'dayjs';
import ErrorIcon from '@mui/icons-material/Error';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const validationSchema = yup.object({
    user_name: yup.string().required('Username is required').matches(/^[a-zA-Z0-9\s]+$/, 'Not contain special characters'),
    fullname: yup.string().required('Fullname is required').matches(/^[a-zA-Z0-9\s]+$/, 'Not contain special characters'),
    password: yup.string().trim().required('Password is required'),
    confirmPassword: yup.string().trim().required('Confirm Password is required').oneOf([yup.ref('password')], 'Passwords must match'),
    email: yup
        .string()
        .trim()
        .matches(
            /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
            'Invalid email'
        )
        .required('Email is required'),
    phone: yup.string().required('Phone number is required').matches(/^(?!.*([0-9])\1{9})[0-9]{10}$/, 'Invalid phone number'),
    dob: yup.date().required('Date of Birth is required'),
});

const RegisterForm = () => {

    const [error, setError] = useState(false);


    const formik = useFormik({
        initialValues: {
            user_name: '',
            fullname: '',
            password: '',
            confirmPassword: '',
            email: '',
            phone: '',
            dob: '',
            role: 'user',
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            try {
                const registrationResponse = await registerAPI.register(values);
                console.log(registrationResponse.status);
                if (registrationResponse.status === 500) {
                    throw new Error('registrationResponse.data is undefined');
                }

                toast.success('Registration successful!', {
                    position: 'top-center',
                    autoClose: 3000,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                  });
            

                const credentials = {
                    email: values.email,
                    password: values.password,
                };

                const response = await loginAPI.login(credentials);
                const tokenObject = {
                    token: response.data,
                };
                localStorage.setItem('token', JSON.stringify(tokenObject));
                console.log(response.data.role, 'login success!');
                const userRole = response.data.role;
                if (userRole === 'user') {
                    setTimeout(() => {
                        window.location.href = '/';
                      }, 3000);
                } else if (userRole === 'admin') {
                    window.location.href = '/admin/account';
                } else {
                    window.location.href = '/unauthorize';
                }
            } catch (error) {

                setTimeout(() => {
                    setError(false)
                }, 2000);
                setError(true)
                console.error(error);
                console.log('login failed!');
            }
        },
    });

    return (
        <Box alignItems="center" padding="50px" textAlign="center" width="600px">
            {error && (
                <div >
                    <Alert
                        variant="filled" severity="error"
                        icon={<ErrorIcon sx={{ fontSize: 25 }} />}
                        sx={{
                            position: 'absolute',
                            bottom: '20px',
                            width: '100%',
                            height: '50px',
                            fontSize: '18px',
                            maxWidth: '390px',
                            top: '-10%',
                            left: '30%'
                        }}
                    >
                        Sign Up Fail
                    </Alert>
                </div>
            )}
            <Box textAlign="center" marginBottom="20px">
                <Typography fontSize="45px" fontWeight="bold" style={{ color: '#00acb3' }}>
                    Sign Up
                </Typography>
            </Box>

            <Box display="grid">
                <FormControl
                    component="form"
                    onSubmit={formik.handleSubmit}
                    variant="outlined"
                    sx={{ display: 'flex', gap: '20px' }}
                >
                    <Box sx={{
                        display: 'grid',
                        gap: '20px',
                        gridTemplateColumns: '1fr 1fr',
                    }}>
                        <TextField
                            id="user_name"
                            name="user_name"
                            label="User name"
                            type="text"
                            variant="outlined"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.user_name}
                            error={formik.touched.user_name && formik.errors.user_name ? true : false}
                            helperText={formik.touched.user_name && formik.errors.user_name}
                        />
                        <TextField
                            id="fullname"
                            name="fullname"
                            label="Fullname"
                            variant="outlined"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.fullname}
                            error={formik.touched.fullname && formik.errors.fullname ? true : false}
                            helperText={formik.touched.fullname && formik.errors.fullname}
                        />
                    </Box>
                    <TextField
                        id="email"
                        name="email"
                        label="Email"
                        placeholder='example@gmail.com'
                        variant="outlined"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        error={formik.touched.email && formik.errors.email ? true : false}
                        helperText={formik.touched.email && formik.errors.email}
                    />
                    <TextField
                        id="password"
                        name="password"
                        label="Password"
                        type="password"
                        variant="outlined"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                        error={formik.touched.password && formik.errors.password ? true : false}
                        helperText={formik.touched.password && formik.errors.password}
                    />
                    <TextField
                        id="confirmPassword"
                        name="confirmPassword"
                        label="Confirm Password"
                        type="password"
                        variant="outlined"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.confirmPassword}
                        error={formik.touched.confirmPassword && formik.errors.confirmPassword ? true : false}
                        helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                    />
                    <Box sx={{
                        display: 'grid',
                        gap: '20px',
                        gridTemplateColumns: '1fr 1fr',
                    }}>
                        <TextField
                            id="phone"
                            name="phone"
                            label="Phone number"
                            variant="outlined"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.phone}
                            error={formik.touched.phone && formik.errors.phone ? true : false}
                            helperText={formik.touched.phone && formik.errors.phone}
                        />

                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    label="Date of Birth"
                                    value={formik.values.dob}
                                    onChange={(date) => {
                                        const formattedDate = dayjs(date).format('YYYY-MM-DD');
                                        formik.setFieldValue('dob', formattedDate);
                                        console.log('Selected date:', formattedDate);
                                    }}
                                />
                        </LocalizationProvider>
                    </Box>

                    <Button
                        type="submit"
                        variant="contained"
                        sx={{
                            backgroundColor: '#00acb3',
                            width: '60%',
                            alignItems: 'center',
                            margin: 'auto',
                            '&:hover': {
                                backgroundColor: '#08b7bd',
                            },
                        }}
                        size="large"
                    >
                        Sign Up
                    </Button>
                    <Box>
                        <Typography variant="subtitle1">
                            Already have an account? <a href="/login" style={{ color: '#00acb3', textDecoration: 'none', fontWeight: 'bold' }}>Login Now!</a>
                        </Typography>
                        <Typography variant="subtitle1">
                            Wanna go back to the homepage? <a href="/" style={{ color: '#00acb3', textDecoration: 'none', fontWeight: 'bold' }}>Let's Go!</a>
                        </Typography>
                    </Box>
                </FormControl>
            </Box>

        </Box>
    );
};

export default RegisterForm;
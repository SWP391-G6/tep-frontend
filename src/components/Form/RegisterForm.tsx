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

const validationSchema = yup.object({
    user_name: yup.string().required('Username is required').matches(/^[a-zA-Z0-9\s]+$/, 'Not contain special characters'),
    fullname: yup.string().required('Fullname is required').matches(/^[a-zA-Z0-9\s]+$/, 'Not contain special characters'),
    password: yup.string().required('Password is required'),
    email: yup.string().email('Invalid email address').required('Email is required'),
    phone: yup.string().required('Phone number is required').matches(/^(?!.*([0-9])\1{9})[0-9]{10}$/, 'Invalid phone number'),
    dob: yup.string().required('Date of Birth is required').matches(/^\d{4}-\d{2}-\d{2}$/, 'Invalid date format (yyyy-mm-dd)'),
});

const RegisterForm = () => {

    const [error, setError] = useState(false);


    const formik = useFormik({
        initialValues: {
            user_name: '',
            fullname: '',
            password: '',
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
                
                
                    const credentials = {
                        email: values.email,
                        password: values.password,
                    };

                    const loginResponse = await loginAPI.login(credentials);
                    const token = loginResponse.data;
                    localStorage.setItem('token', token);

                    setTimeout(() => {
                         window.location.href = '/';
                    }, 2000);
              
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
                                label="Basic date picker"
                                value={formik.values.dob}
                                onChange={(date) => {
                                    const formattedDate = dayjs(date).format('YYYY-MM-DD');
                                    formik.setFieldValue('dob', formattedDate);
                                    console.log('Selected date:', formattedDate); // In giá trị ngày đã chọn trong console
                                }}
                            />
                        </LocalizationProvider>
                    </Box>

                    <Button
                        type="submit"
                        variant="contained"
                        sx={{ backgroundColor: '#00acb3', width: '60%', alignItems: 'center', margin: 'auto' }}
                        size="large"
                    >
                        Sign Up
                    </Button>
                    <Box>
                        <Typography variant="subtitle1">
                            Already have an account? <a href="/login" style={{ color: '#00acb3',textDecoration:'none',fontWeight:'bold' }}>Login Now!</a>
                        </Typography>
                        <Typography variant="subtitle1">
                            Wanna go back to the homepage? <a href="/" style={{ color: '#00acb3',textDecoration:'none',fontWeight:'bold' }}>Let's Go!</a>
                        </Typography>
                    </Box>
                </FormControl>
            </Box>

            {error && (
                <Alert
                    variant="filled" severity="error"
                    sx={{
                        position: 'absolute',
                        bottom: '20px',
                        width: '100%',
                        maxWidth: '390px',
                    }}
                >
                    Register Fail !!
                </Alert>
            )}
        </Box>
    );
};

export default RegisterForm;
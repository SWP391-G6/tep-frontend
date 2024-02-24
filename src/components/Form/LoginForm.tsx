import { Box, Button, FormControl, Snackbar, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import loginAPI from '../../services/login/loginAPI';
import { Alert } from '@mui/material';
import { useState } from 'react';


const validationSchema = yup.object({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().required('Password is required')
});

const LoginForm = () => {

  const [error, setError] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const credentials = {
          email: values.email,
          password: values.password,
        };

        const response = await loginAPI.login(credentials);
        localStorage.setItem('token', response.data.token);
        console.log(response, 'login success!');
        window.location.href = '/';
      } catch (error) {
        setTimeout(() => {
          setError(false)
        }, 2000);
        setError(true)
        console.error(error);
      }
    },
  });

  return (
    <Box alignItems="center" padding="30px" textAlign="center" width="600px">
      <Box textAlign="center" marginBottom="30px" display="flex" alignItems="center" justifyContent="center">
        <Typography fontSize="45px" fontWeight="bold" style={{ color: '#00acb3' }}>
          Sign in
        </Typography>
      </Box>

      <Box>
        <FormControl component="form" sx={{ display: 'grid', gap: '25px' }} onSubmit={formik.handleSubmit}>
          <TextField
            id="email"
            name="email"
            label="Email"
            variant="outlined"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && formik.errors.email ? true : false}
            helperText={formik.touched.email && formik.errors.email ? formik.errors.email : ''}
          />

          <TextField
            id="password"
            name="password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && formik.errors.password ? true : false}
            helperText={formik.touched.password && formik.errors.password ? formik.errors.password : ''}
            label="Password"
            inputProps={{
              'aria-label': 'password',
            }}
          />

          <Button
            variant="contained"
            sx={{ backgroundColor: '#00acb3', width: '60%', alignItems: 'center', margin: 'auto' }}
            size="large"
            type="submit"
          >
            Sign In
          </Button>

          <Box>
            <Typography variant="subtitle1">
              Don't have an account? <a href="/register" style={{ color: '#00acb3',textDecoration:'none',fontWeight:'bold' }}>Sign Up Now!</a>
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
          Login Fail !!
        </Alert>
      )}
    </Box>
  );
};

export default LoginForm;
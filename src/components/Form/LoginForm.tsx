import { Box, Button, FormControl, Snackbar, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import loginAPI from '../../services/login/loginAPI';
import { Alert } from '@mui/material';
import { useState } from 'react';
import ErrorIcon from '@mui/icons-material/Error';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const validationSchema = yup.object({
  email: yup
  .string()
  .trim()
  .matches(
    /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
    'Invalid email'
  )
  .required('Email is required'),
  password: yup.string().trim('Password cannot be blank').required('Password is required')
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
        const tokenObject = {
          token: response.data,
        };
        localStorage.setItem('token', JSON.stringify(tokenObject));
        console.log(response.data.role, 'login success!');
        const userRole = response.data.role;
        if (userRole === 'user') {
          window.location.href = '/';
        } else if (userRole === 'admin') {
          window.location.href = '/admin/account';
        } else {
          window.location.href = '/';
        }

      } catch (error) {
        toast.error('Login fail !', {
          position: 'top-center',
          autoClose: 3000,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });

        
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
            Sign In
          </Button>

          <Box>
            <Typography variant="subtitle1">
              Don't have an account? <a href="/register" style={{ color: '#00acb3', textDecoration: 'none', fontWeight: 'bold' }}>Sign Up Now!</a>
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

export default LoginForm;
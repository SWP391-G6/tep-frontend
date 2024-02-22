import { Box, Button, FormControl, Snackbar, TextField, Typography } from '@mui/material';
import * as yup from 'yup';
import { useFormik } from 'formik';
import loginAPI from '../../services/login/loginAPI';

const validationSchema = yup.object({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().required('Password is required')
});

const LoginForm = () => {



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
        console.error(error);
      }
    },
  });

  return (
    <Box alignItems={'center'} padding={'30px'} textAlign={'center'} width={"600px"}>
      <Box textAlign={'center'} marginBottom={'30px'} display="flex" alignItems="center" justifyContent="center">
        <Typography fontSize={'45px'} fontWeight={'bold'} style={{ color: '#00acb3' }}>
          Sign in
        </Typography>
      </Box>

      <Box display={'grid'}>
        <FormControl sx={{ display: 'flex', gap: '25px' }}>
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
            variant='contained'
            sx={{ backgroundColor: '#00acb3', width: '60%', alignItems: 'center', margin: 'auto' }}
            size='large'
            onClick={() => formik.handleSubmit()}
          >
            Sign In
          </Button>
          <Box>
            <Typography variant='subtitle1'> Don't have an account ? <a href='/register' style={{ color: 'blue' }}>Sign Up Now</a></Typography>
            <Typography variant='subtitle1'> Wanna back to homepage <a href='/' style={{ color: 'blue' }}>Let's Go!</a></Typography>
          </Box>
        </FormControl>
      </Box>

    </Box>
  );
};

export default LoginForm;